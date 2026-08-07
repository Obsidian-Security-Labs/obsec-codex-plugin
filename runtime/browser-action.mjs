// Copyright © 2026 Obsidian Security. All rights reserved.

// src/mcp/browser-approval-store.ts
import { createHash, randomUUID } from "node:crypto";
import { chmod, lstat, mkdir, readFile, rename, unlink, writeFile } from "node:fs/promises";
import { homedir } from "node:os";
import { resolve } from "node:path";
var SAFE_ID = /^[A-Za-z0-9-]+$/u;
function safeId(value, name) {
  if (!SAFE_ID.test(value)) throw new Error(`${name} is invalid`);
  return value;
}
function approvalRoot() {
  return process.env.OBSEC_BROWSER_APPROVALS_PATH ?? resolve(process.env.HOME ?? homedir(), ".obsec/browser-approvals");
}
async function ensurePrivateDirectory(path) {
  await mkdir(path, { mode: 448, recursive: true });
  const stats = await lstat(path);
  const uid = process.getuid?.();
  if (!stats.isDirectory() || stats.isSymbolicLink()) {
    throw new Error(`browser_approval_directory_insecure: ${path} is not a directory`);
  }
  if (uid !== void 0 && stats.uid !== uid) {
    throw new Error(`browser_approval_directory_insecure: ${path} has the wrong owner`);
  }
  if (process.platform !== "win32" && (stats.mode & 63) !== 0) {
    await chmod(path, 448);
  }
}
async function writePrivateJson(path, value) {
  await writeFile(path, JSON.stringify(value), { encoding: "utf8", flag: "wx", mode: 384 });
}
function parseReceipt(text) {
  const value = JSON.parse(text);
  const approved = value?.approvedAction;
  if (typeof value !== "object" || value === null || typeof value.actionSummary !== "string" || typeof approved !== "object" || approved === null || typeof approved.action !== "object" || approved.action === null || typeof approved.action.action !== "string" || typeof approved.host !== "string" || approved.host.length === 0 || typeof approved.tab_id !== "string" || approved.tab_id.length === 0 || typeof value.codeHash !== "string" || !Number.isFinite(value.expiresAt) || typeof value.host !== "string" || !Number.isFinite(value.issuedAt) || value.issuedAt > value.expiresAt || typeof value.token !== "string") {
    throw new Error("browser_approval_receipt_invalid");
  }
  return value;
}
var FileBrowserApprovalStore = class {
  claims;
  receipts;
  root;
  constructor(root) {
    this.root = root;
    this.claims = resolve(root, "claims");
    this.receipts = resolve(root, "receipts");
  }
  async ensureDirectories(...paths) {
    await ensurePrivateDirectory(this.root);
    for (const path of paths) await ensurePrivateDirectory(path);
  }
  async issueReceipt(receipt) {
    safeId(receipt.token, "approval_token");
    await this.ensureDirectories(this.receipts);
    await writePrivateJson(resolve(this.receipts, `${receipt.token}.json`), receipt);
  }
  async readReceipt(token) {
    safeId(token, "approval_token");
    await this.ensureDirectories(this.receipts);
    try {
      return parseReceipt(await readFile(resolve(this.receipts, `${token}.json`), "utf8"));
    } catch (error) {
      if (error.code === "ENOENT") {
        throw new Error("browser_approval_missing_or_consumed");
      }
      throw error;
    }
  }
  async claimReceipt(token) {
    safeId(token, "approval_token");
    await this.ensureDirectories(this.receipts, this.claims);
    const source = resolve(this.receipts, `${token}.json`);
    const claim = resolve(this.claims, `${token}.${randomUUID()}.json`);
    try {
      await rename(source, claim);
      return parseReceipt(await readFile(claim, "utf8"));
    } catch (error) {
      if (error.code === "ENOENT") {
        throw new Error("browser_approval_missing_or_consumed");
      }
      throw error;
    } finally {
      await unlink(claim).catch(() => void 0);
    }
  }
};
function createBrowserApprovalStore() {
  return new FileBrowserApprovalStore(approvalRoot());
}

// src/mcp/browser-action.ts
function locate(root, spec) {
  if (spec.kind === "role") {
    return root.getByRole(spec.role, { exact: spec.exact === true, name: spec.name });
  }
  if (spec.kind === "test_id") return root.getByTestId(spec.value);
  if (spec.kind === "css") return root.locator(spec.value);
  const options = { exact: spec.exact === true };
  if (spec.kind === "label") return root.getByLabel(spec.value, options);
  if (spec.kind === "placeholder") return root.getByPlaceholder(spec.value, options);
  return root.getByText(spec.value, options);
}
function targetLocator(tab, target) {
  const specs = target.locators.map((spec, index) => {
    const isTargetCss = index === target.locators.length - 1 && spec.kind === "css";
    if (!isTargetCss || target.expected_text === void 0 || spec.value.includes(":has-text(")) {
      return spec;
    }
    const expectedText = target.expected_text.trim();
    return { ...spec, value: `${spec.value}:has-text(${JSON.stringify(expectedText)})` };
  });
  let locator = locate(tab.playwright, specs[0]);
  for (const spec of specs.slice(1)) {
    locator = spec.kind === "css" ? locator.locator(spec.value, {}) : locate(locator, spec);
  }
  return locator;
}
async function readTargetState(locator, point) {
  if (await locator.count() !== 1) {
    throw new Error("stale_browser_target: expected one match");
  }
  return locator.evaluate((element, approvedPoint) => {
    const rect = element.getBoundingClientRect();
    const innerText = element.innerText;
    const text = typeof innerText === "string" ? innerText.trim() : (element.textContent ?? "").trim();
    const viewport = {
      height: document.documentElement.clientHeight,
      width: document.documentElement.clientWidth
    };
    const outsideViewport = approvedPoint.x < 0 || approvedPoint.y < 0 || approvedPoint.x >= viewport.width || approvedPoint.y >= viewport.height;
    const outsideTarget = approvedPoint.x < rect.left || approvedPoint.x > rect.right || approvedPoint.y < rect.top || approvedPoint.y > rect.bottom;
    let pointState = "ready";
    if (outsideViewport) {
      pointState = "outside_viewport";
    } else if (outsideTarget) {
      pointState = "target_moved";
    } else {
      const hit = document.elementFromPoint(approvedPoint.x, approvedPoint.y);
      if (!hit || hit !== element && !element.contains(hit)) pointState = "target_obscured";
    }
    return {
      href: element.getAttribute("href"),
      pointState,
      text
    };
  }, point);
}
function canonicalHref(value, currentUrl) {
  if (!value) return void 0;
  try {
    return httpUrl(new URL(value, currentUrl).href);
  } catch {
    return void 0;
  }
}
async function verifyTarget(locator, target, point, currentUrl) {
  const state = await readTargetState(locator, point);
  if (target.expected_text !== void 0 && state.text !== target.expected_text.trim()) {
    throw new Error("stale_browser_target: text changed");
  }
  const actualHref = canonicalHref(state.href, currentUrl);
  if (target.expected_href !== void 0) {
    const expectedHref = canonicalHref(target.expected_href, currentUrl);
    if (!expectedHref || !actualHref || actualHref !== expectedHref) {
      throw new Error("stale_browser_target: href changed");
    }
  }
  if (state.pointState !== "ready") {
    throw new Error(`stale_browser_target: ${state.pointState.replace("_", " ")}`);
  }
  return actualHref;
}
var LOCATOR_ACTIONS = {
  check: (locator) => locator.check({}),
  dblclick: (locator) => locator.dblclick({}),
  fill: (locator, action) => locator.fill(action.text ?? "", {}),
  press: (locator, action) => locator.press(action.key ?? "", {}),
  select: (locator, action) => locator.selectOption(action.values ?? [], {}),
  type: (locator, action) => locator.type(action.text ?? "", {}),
  uncheck: (locator) => locator.uncheck({})
};
async function performAction(tab, locator, action) {
  if (action.action === "click") {
    await tab.cua.click(action.point);
    return;
  }
  if (action.action === "follow_link") {
    throw new Error("follow_link must use guarded navigation");
  }
  await LOCATOR_ACTIONS[action.action](locator, action);
}
function tabKey(tab) {
  return tab.providerTabId ? `provider:${tab.providerTabId}` : `user:${tab.id}`;
}
function httpUrl(value) {
  if (!value || !URL.canParse(value)) return void 0;
  const url = new URL(value);
  if (!["http:", "https:"].includes(url.protocol) || url.username || url.password) {
    return void 0;
  }
  return url.href;
}
function assertTabBinding(globals, expectedTabId) {
  const actualTabId = globals.bastionTab?.id ?? "missing";
  if (actualTabId !== expectedTabId) {
    throw new Error(`browser_tab_changed: expected ${expectedTabId}; actual ${actualTabId}`);
  }
}
async function stableTabUrl(tab) {
  let previous;
  for (let attempt = 0; attempt < 10; attempt += 1) {
    const current = httpUrl(await tab.url());
    if (current && current === previous) return current;
    previous = current;
    if (attempt < 9) await new Promise((resolve2) => setTimeout(resolve2, 100));
  }
  throw new Error("browser_url_unavailable_or_unstable");
}
function resultForTab(status, tab, urlText) {
  const url = new URL(urlText);
  return {
    host: url.hostname.toLowerCase(),
    status,
    tab_id: tab.id,
    url: url.href
  };
}
async function followApprovedLink(globals, tab, approved, destination) {
  const action = approved.action;
  if (action.action !== "follow_link" || destination === void 0) {
    throw new Error("follow_link requires a verified destination");
  }
  const expectedHost = action.destination_host ?? approved.host;
  if (new URL(destination).hostname.toLowerCase() !== expectedHost) {
    throw new Error("follow_link destination must use action.destination_host");
  }
  await tab.goto(destination);
  assertTabBinding(globals, approved.tab_id);
  const finalUrl = await stableTabUrl(tab);
  assertTabBinding(globals, approved.tab_id);
  return resultForTab("navigated", tab, finalUrl);
}
async function findNewTab(browser, knownTabs) {
  let newTabs = [];
  for (let attempt = 0; attempt < 2 && newTabs.length === 0; attempt += 1) {
    await new Promise((resolve2) => setTimeout(resolve2, 100));
    newTabs = (await browser.user.openTabs()).filter((tab) => !knownTabs.has(tabKey(tab)));
  }
  if (newTabs.length > 1) throw new Error("new_tabs_ambiguous");
  return newTabs[0];
}
async function stableNewTabUrl(browser, tab) {
  const key = tabKey(tab);
  let previous;
  for (let attempt = 0; attempt < 10; attempt += 1) {
    const current = (await browser.user.openTabs()).find((candidate) => tabKey(candidate) === key);
    const url = httpUrl(current?.url);
    if (url && url === previous) return url;
    previous = url;
    await new Promise((resolve2) => setTimeout(resolve2, 100));
  }
  throw new Error("new_tab_url_unavailable");
}
async function clickResult(globals, browser, tab, knownTabs, fallbackUrl) {
  const newTab = knownTabs ? await findNewTab(browser, knownTabs) : void 0;
  if (!newTab) {
    assertTabBinding(globals, tab.id);
    let finalUrl;
    try {
      finalUrl = await stableTabUrl(tab);
    } catch {
      finalUrl = void 0;
    }
    assertTabBinding(globals, tab.id);
    if (finalUrl) return resultForTab("same_tab", tab, finalUrl);
    return {
      ...resultForTab("same_tab", tab, fallbackUrl),
      post_action_warning: "action_applied_but_url_unavailable_or_unstable"
    };
  }
  const url = new URL(await stableNewTabUrl(browser, newTab));
  const replacement = await browser.tabs.new();
  globals.bastionTab = replacement;
  const host = url.hostname.toLowerCase();
  return {
    approval_arguments: {
      action: { action: "navigate", url: url.href },
      host,
      tab_id: replacement.id
    },
    host,
    status: "new_tab_replacement_required",
    tab_id: replacement.id,
    url: url.href
  };
}
function withTimings(result, timing, verificationMs, executionStartedAt) {
  const completedAt = Date.now();
  return {
    ...result,
    timings: {
      approval_to_execution_ms: timing.approvalToExecutionMs,
      execution_ms: completedAt - executionStartedAt,
      target_verification_ms: verificationMs,
      total_ms: completedAt - timing.runtimeStartedAt
    }
  };
}
async function claimApprovedAction(token, runtimeStartedAt) {
  const receipt = await createBrowserApprovalStore().claimReceipt(token);
  if (receipt.expiresAt < runtimeStartedAt) throw new Error("browser_approval_expired");
  if (receipt.host !== receipt.approvedAction.host || receipt.token !== token) {
    throw new Error("browser_approval_receipt_invalid");
  }
  return {
    approved: receipt.approvedAction,
    timing: {
      approvalToExecutionMs: Math.max(0, runtimeStartedAt - receipt.issuedAt),
      runtimeStartedAt
    }
  };
}
async function runNavigation(globals, tab, approved, timing) {
  if (approved.action.action !== "navigate") throw new Error("navigation action required");
  const destination = httpUrl(approved.action.url);
  const destinationHost = destination ? new URL(destination).hostname.toLowerCase() : void 0;
  if (!destination || destinationHost !== approved.host) {
    throw new Error("browser_navigation_must_use_approved_host_without_credentials");
  }
  const executionStartedAt = Date.now();
  await tab.goto(destination);
  assertTabBinding(globals, approved.tab_id);
  const finalUrl = await stableTabUrl(tab);
  assertTabBinding(globals, approved.tab_id);
  return withTimings(resultForTab("navigated", tab, finalUrl), timing, 0, executionStartedAt);
}
async function runTargetAction(globals, browser, tab, approved, timing) {
  if (approved.action.action === "navigate") throw new Error("target action required");
  const currentUrl = await tab.url();
  const normalizedCurrentUrl = httpUrl(currentUrl);
  const actualHost = normalizedCurrentUrl ? new URL(normalizedCurrentUrl).hostname.toLowerCase() : "unavailable";
  if (!normalizedCurrentUrl || actualHost !== approved.host) {
    throw new Error(`browser_host_changed: expected ${approved.host}; actual ${actualHost}`);
  }
  const locator = targetLocator(tab, approved.action.target);
  const verificationStartedAt = Date.now();
  const destination = await verifyTarget(
    locator,
    approved.action.target,
    approved.action.point,
    normalizedCurrentUrl
  );
  const verificationMs = Date.now() - verificationStartedAt;
  const executionStartedAt = Date.now();
  if (approved.action.action === "follow_link") {
    const result2 = await followApprovedLink(globals, tab, approved, destination);
    return withTimings(result2, timing, verificationMs, executionStartedAt);
  }
  const trackTabs = ["click", "dblclick"].includes(approved.action.action);
  const knownTabs = trackTabs ? new Set((await browser.user.openTabs()).map((item) => tabKey(item))) : void 0;
  await performAction(tab, locator, approved.action);
  const result = await clickResult(globals, browser, tab, knownTabs, normalizedCurrentUrl);
  return withTimings(result, timing, verificationMs, executionStartedAt);
}
async function runApprovedBrowserAction(globals, token) {
  const runtimeStartedAt = Date.now();
  const { approved, timing } = await claimApprovedAction(token, runtimeStartedAt);
  const browser = globals.bastionBrowser ?? globals.iab;
  const tab = globals.bastionTab;
  if (!browser) throw new Error("obsec_browser_binding_missing");
  if (!tab) throw new Error("obsec_browser_tab_missing");
  assertTabBinding(globals, approved.tab_id);
  if (approved.action.action === "navigate") {
    return runNavigation(globals, tab, approved, timing);
  }
  return runTargetAction(globals, browser, tab, approved, timing);
}
export {
  runApprovedBrowserAction
};
