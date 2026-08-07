// Copyright © 2026 Obsidian Security. All rights reserved.
import { createRequire as __createRequire } from "node:module";
import { dirname as __pathDirname } from "node:path";
import { fileURLToPath as __fileURLToPath } from "node:url";
const require = __createRequire(import.meta.url);
const __filename = __fileURLToPath(import.meta.url);
const __dirname = __pathDirname(__filename);
const nodeMajor = Number.parseInt(process.versions.node.split('.')[0], 10);
if (nodeMajor < 22) {
  throw new Error(`ObSec MCP requires Node.js 22 or newer; found ${process.versions.node}.`);
}
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  } catch (e) {
    throw mod = 0, e;
  }
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/.pnpm/@cedar-policy+cedar-wasm@4.9.1/node_modules/@cedar-policy/cedar-wasm/nodejs/cedar_wasm.js
var require_cedar_wasm = __commonJS({
  "node_modules/.pnpm/@cedar-policy+cedar-wasm@4.9.1/node_modules/@cedar-policy/cedar-wasm/nodejs/cedar_wasm.js"(exports) {
    function checkParseContext(call) {
      const ret = wasm.checkParseContext(call);
      return ret;
    }
    exports.checkParseContext = checkParseContext;
    function checkParseEntities(call) {
      const ret = wasm.checkParseEntities(call);
      return ret;
    }
    exports.checkParseEntities = checkParseEntities;
    function checkParsePolicySet2(policies) {
      const ret = wasm.checkParsePolicySet(policies);
      return ret;
    }
    exports.checkParsePolicySet = checkParsePolicySet2;
    function checkParseSchema2(schema) {
      const ret = wasm.checkParseSchema(schema);
      return ret;
    }
    exports.checkParseSchema = checkParseSchema2;
    function formatPolicies(call) {
      const ret = wasm.formatPolicies(call);
      return ret;
    }
    exports.formatPolicies = formatPolicies;
    function getCedarLangVersion() {
      let deferred1_0;
      let deferred1_1;
      try {
        const ret = wasm.getCedarLangVersion();
        deferred1_0 = ret[0];
        deferred1_1 = ret[1];
        return getStringFromWasm0(ret[0], ret[1]);
      } finally {
        wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
      }
    }
    exports.getCedarLangVersion = getCedarLangVersion;
    function getCedarSDKVersion() {
      let deferred1_0;
      let deferred1_1;
      try {
        const ret = wasm.getCedarSDKVersion();
        deferred1_0 = ret[0];
        deferred1_1 = ret[1];
        return getStringFromWasm0(ret[0], ret[1]);
      } finally {
        wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
      }
    }
    exports.getCedarSDKVersion = getCedarSDKVersion;
    function getCedarVersion() {
      let deferred1_0;
      let deferred1_1;
      try {
        const ret = wasm.getCedarVersion();
        deferred1_0 = ret[0];
        deferred1_1 = ret[1];
        return getStringFromWasm0(ret[0], ret[1]);
      } finally {
        wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
      }
    }
    exports.getCedarVersion = getCedarVersion;
    function getValidRequestEnvsPolicy(t, s) {
      const ret = wasm.getValidRequestEnvsPolicy(t, s);
      return ret;
    }
    exports.getValidRequestEnvsPolicy = getValidRequestEnvsPolicy;
    function getValidRequestEnvsTemplate(t, s) {
      const ret = wasm.getValidRequestEnvsTemplate(t, s);
      return ret;
    }
    exports.getValidRequestEnvsTemplate = getValidRequestEnvsTemplate;
    function isAuthorized2(call) {
      const ret = wasm.isAuthorized(call);
      return ret;
    }
    exports.isAuthorized = isAuthorized2;
    function isAuthorizedPartial(call) {
      const ret = wasm.isAuthorizedPartial(call);
      return ret;
    }
    exports.isAuthorizedPartial = isAuthorizedPartial;
    function policySetTextToParts2(policyset_str) {
      const ptr0 = passStringToWasm0(policyset_str, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      const len0 = WASM_VECTOR_LEN;
      const ret = wasm.policySetTextToParts(ptr0, len0);
      return ret;
    }
    exports.policySetTextToParts = policySetTextToParts2;
    function policyToJson2(policy) {
      const ret = wasm.policyToJson(policy);
      return ret;
    }
    exports.policyToJson = policyToJson2;
    function policyToText(policy) {
      const ret = wasm.policyToText(policy);
      return ret;
    }
    exports.policyToText = policyToText;
    function preparsePolicySet(pset_id, policies) {
      const ptr0 = passStringToWasm0(pset_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      const len0 = WASM_VECTOR_LEN;
      const ret = wasm.preparsePolicySet(ptr0, len0, policies);
      return ret;
    }
    exports.preparsePolicySet = preparsePolicySet;
    function preparseSchema(schema_name, schema) {
      const ptr0 = passStringToWasm0(schema_name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      const len0 = WASM_VECTOR_LEN;
      const ret = wasm.preparseSchema(ptr0, len0, schema);
      return ret;
    }
    exports.preparseSchema = preparseSchema;
    function schemaToJson(schema) {
      const ret = wasm.schemaToJson(schema);
      return ret;
    }
    exports.schemaToJson = schemaToJson;
    function schemaToJsonWithResolvedTypes(schema_str) {
      const ptr0 = passStringToWasm0(schema_str, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      const len0 = WASM_VECTOR_LEN;
      const ret = wasm.schemaToJsonWithResolvedTypes(ptr0, len0);
      return ret;
    }
    exports.schemaToJsonWithResolvedTypes = schemaToJsonWithResolvedTypes;
    function schemaToText(schema) {
      const ret = wasm.schemaToText(schema);
      return ret;
    }
    exports.schemaToText = schemaToText;
    function statefulIsAuthorized(call) {
      const ret = wasm.statefulIsAuthorized(call);
      return ret;
    }
    exports.statefulIsAuthorized = statefulIsAuthorized;
    function templateToJson(template) {
      const ret = wasm.templateToJson(template);
      return ret;
    }
    exports.templateToJson = templateToJson;
    function templateToText(template) {
      const ret = wasm.templateToText(template);
      return ret;
    }
    exports.templateToText = templateToText;
    function validate2(call) {
      const ret = wasm.validate(call);
      return ret;
    }
    exports.validate = validate2;
    function __wbg_get_imports() {
      const import0 = {
        __proto__: null,
        __wbg___wbindgen_is_undefined_9e4d92534c42d778: function(arg0) {
          const ret = arg0 === void 0;
          return ret;
        },
        __wbg___wbindgen_string_get_72fb696202c56729: function(arg0, arg1) {
          const obj = arg1;
          const ret = typeof obj === "string" ? obj : void 0;
          var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
          var len1 = WASM_VECTOR_LEN;
          getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
          getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg___wbindgen_throw_be289d5034ed271b: function(arg0, arg1) {
          throw new Error(getStringFromWasm0(arg0, arg1));
        },
        __wbg_parse_708461a1feddfb38: function() {
          return handleError(function(arg0, arg1) {
            const ret = JSON.parse(getStringFromWasm0(arg0, arg1));
            return ret;
          }, arguments);
        },
        __wbg_stringify_8d1cc6ff383e8bae: function() {
          return handleError(function(arg0) {
            const ret = JSON.stringify(arg0);
            return ret;
          }, arguments);
        },
        __wbindgen_init_externref_table: function() {
          const table = wasm.__wbindgen_externrefs;
          const offset = table.grow(4);
          table.set(0, void 0);
          table.set(offset + 0, void 0);
          table.set(offset + 1, null);
          table.set(offset + 2, true);
          table.set(offset + 3, false);
        }
      };
      return {
        __proto__: null,
        "./cedar_wasm_bg.js": import0
      };
    }
    function addToExternrefTable0(obj) {
      const idx = wasm.__externref_table_alloc();
      wasm.__wbindgen_externrefs.set(idx, obj);
      return idx;
    }
    var cachedDataViewMemory0 = null;
    function getDataViewMemory0() {
      if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || cachedDataViewMemory0.buffer.detached === void 0 && cachedDataViewMemory0.buffer !== wasm.memory.buffer) {
        cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
      }
      return cachedDataViewMemory0;
    }
    function getStringFromWasm0(ptr, len) {
      ptr = ptr >>> 0;
      return decodeText(ptr, len);
    }
    var cachedUint8ArrayMemory0 = null;
    function getUint8ArrayMemory0() {
      if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
      }
      return cachedUint8ArrayMemory0;
    }
    function handleError(f, args) {
      try {
        return f.apply(this, args);
      } catch (e) {
        const idx = addToExternrefTable0(e);
        wasm.__wbindgen_exn_store(idx);
      }
    }
    function isLikeNone(x) {
      return x === void 0 || x === null;
    }
    function passStringToWasm0(arg, malloc, realloc) {
      if (realloc === void 0) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr2 = malloc(buf.length, 1) >>> 0;
        getUint8ArrayMemory0().subarray(ptr2, ptr2 + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr2;
      }
      let len = arg.length;
      let ptr = malloc(len, 1) >>> 0;
      const mem = getUint8ArrayMemory0();
      let offset = 0;
      for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 127) break;
        mem[ptr + offset] = code;
      }
      if (offset !== len) {
        if (offset !== 0) {
          arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
        const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
        const ret = cachedTextEncoder.encodeInto(arg, view);
        offset += ret.written;
        ptr = realloc(ptr, len, offset, 1) >>> 0;
      }
      WASM_VECTOR_LEN = offset;
      return ptr;
    }
    var cachedTextDecoder = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
    cachedTextDecoder.decode();
    function decodeText(ptr, len) {
      return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
    }
    var cachedTextEncoder = new TextEncoder();
    if (!("encodeInto" in cachedTextEncoder)) {
      cachedTextEncoder.encodeInto = function(arg, view) {
        const buf = cachedTextEncoder.encode(arg);
        view.set(buf);
        return {
          read: arg.length,
          written: buf.length
        };
      };
    }
    var WASM_VECTOR_LEN = 0;
    var wasmPath = `${__dirname}/cedar_wasm_bg.wasm`;
    var wasmBytes = __require("fs").readFileSync(wasmPath);
    var wasmModule = new WebAssembly.Module(wasmBytes);
    var wasm = new WebAssembly.Instance(wasmModule, __wbg_get_imports()).exports;
    wasm.__wbindgen_start();
  }
});

// src/mcp/hook.ts
import { readFile as readFile3 } from "node:fs/promises";
import { homedir as homedir3 } from "node:os";
import { resolve as resolve3 } from "node:path";
import { pathToFileURL } from "node:url";

// src/guardrails/obsec-guardrails-core.ts
var DANGEROUS_SHELL_PATTERNS = [
  /\brm\s+(-rf?|--recursive)\b/i,
  /\bchmod\b\s+(-R\s+)?0*777\b/i,
  /\bchown\b\s+(-R\s+)?root\b/i,
  /\bmkfs\b/i,
  /\bdd\b[^\n]*\bof\s*=\s*\/dev\//i,
  /\bshutdown\b|\breboot\b|\bhalt\b/i
];
var POSTURE_MUTATION_PATTERN = /obsidian-posture-rules\/scripts\/(create-rule|update-rule|delete-rule)\.ts/i;
var BROWSER_INVOKERS = /* @__PURE__ */ new Set(["agent-browser", "agent-browser-wrapper", "ab"]);
var REF_TARGET_BROWSER_MUTATION_VERBS = /* @__PURE__ */ new Set([
  "check",
  "choose",
  "click",
  "drag",
  "fill",
  "insert",
  "select",
  "type",
  "uncheck",
  "upload"
]);
var FOCUSED_BROWSER_MUTATION_VERBS = /* @__PURE__ */ new Set(["key", "press", "submit"]);
var KEYBOARD_FOCUSED_MUTATION_VERBS = /* @__PURE__ */ new Set(["down", "inserttext", "press", "type", "up"]);
var BROWSER_INVOKER_OPTIONS_WITH_VALUES = /* @__PURE__ */ new Set(["--cdp"]);
function splitShellCommands(command) {
  return command.split(/\s*(?:&&|\|\||[;|])\s*/);
}
function stripPunctuation(token) {
  return token.replace(/[;,|&]+$/, "");
}
function stripTokenDecorators(token) {
  return token.replace(/^["'`([{]+/, "").replace(/["'`),.;\]}]+$/, "");
}
function commandBasename(token) {
  const candidate = stripPunctuation(stripTokenDecorators(token ?? "")).toLowerCase();
  return candidate.split(/[\\/]/).pop() ?? candidate;
}
function isSecretReadSubcommand(subcommand) {
  const tokens = subcommand.split(/\s+/).filter((token) => token.length > 0);
  for (let index = 0; index < tokens.length - 1; index += 1) {
    const command = commandBasename(tokens[index]);
    const next = commandBasename(tokens[index + 1]);
    if ((command === "obsec-password" || command === "obsec-password.mjs") && next === "get") {
      return true;
    }
    if ((command === "obsec-otp" || command === "obsec-otp.mjs") && next === "code") {
      return true;
    }
  }
  return false;
}
function isSecretReadCommand(command) {
  return splitShellCommands(command).some(isSecretReadSubcommand);
}
function isBrowserMutation(command) {
  return extractBrowserMutationCommands(command).length > 0;
}
function isBrowserInvokerOptionExpectingValue(token) {
  return BROWSER_INVOKER_OPTIONS_WITH_VALUES.has(token) && !token.includes("=");
}
function isHelpFlag(token) {
  const candidate = stripTokenDecorators(token ?? "").toLowerCase();
  return candidate === "--help" || candidate === "-h";
}
function firstCommandTokenAfterInvoker(tokens, invokerIndex) {
  let index = invokerIndex + 1;
  while (index < tokens.length) {
    const token = stripTokenDecorators(tokens[index] ?? "");
    if (!token.startsWith("-")) {
      return index;
    }
    index += isBrowserInvokerOptionExpectingValue(token) ? 2 : 1;
  }
  return -1;
}
function browserMutationFromTokens(tokens, actionIndex) {
  const action = stripPunctuation(stripTokenDecorators(tokens[actionIndex] ?? "")).toLowerCase();
  const args = tokens.slice(actionIndex + 1);
  if (isHelpFlag(args[0])) {
    return null;
  }
  if (action === "keyboard") {
    const keyboardAction = stripTokenDecorators(args[0] ?? "").toLowerCase();
    if (KEYBOARD_FOCUSED_MUTATION_VERBS.has(keyboardAction)) {
      return {
        action: `keyboard ${keyboardAction}`,
        args: args.slice(1),
        requiresRefTarget: false,
        usesFocusedTarget: true
      };
    }
    return null;
  }
  if (REF_TARGET_BROWSER_MUTATION_VERBS.has(action)) {
    return { action, args, requiresRefTarget: true, usesFocusedTarget: false };
  }
  if (FOCUSED_BROWSER_MUTATION_VERBS.has(action)) {
    return { action, args, requiresRefTarget: false, usesFocusedTarget: true };
  }
  return null;
}
function subcommandBrowserMutations(subcommand) {
  const tokens = subcommand.split(/\s+/).filter((token) => token.length > 0);
  const mutations = [];
  for (let index = 0; index < tokens.length; index += 1) {
    const token = stripTokenDecorators(tokens[index] ?? "").toLowerCase();
    if (!BROWSER_INVOKERS.has(token)) {
      continue;
    }
    const actionIndex = firstCommandTokenAfterInvoker(tokens, index);
    if (actionIndex === -1) {
      continue;
    }
    const mutation = browserMutationFromTokens(tokens, actionIndex);
    if (mutation) {
      mutations.push(mutation);
    }
  }
  return mutations;
}
function extractBrowserMutationCommands(command) {
  return splitShellCommands(command).flatMap(subcommandBrowserMutations);
}
function extractHostFromText(value) {
  const maybeUrl = value.match(/\bhttps?:\/\/[^\s"'`<>]+/i)?.[0];
  if (maybeUrl) {
    try {
      return new URL(maybeUrl).hostname.toLowerCase();
    } catch {
      return null;
    }
  }
  for (const token of value.split(/\s+/)) {
    const candidate = stripTokenDecorators(token);
    if (candidate.startsWith("/") || candidate.startsWith("./") || candidate.startsWith("../")) {
      continue;
    }
    const maybeDomain = candidate.match(
      /^((?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,63})(?::\d+)?(?:\/[^\s]*)?$/
    )?.[1];
    if (maybeDomain) {
      return maybeDomain.toLowerCase();
    }
  }
  return null;
}
function classifyBashCommand(command) {
  if (isSecretReadCommand(command)) {
    return {
      actionId: "RunCommand",
      resourceType: "Command",
      resourceId: "secret-read",
      operationClass: "RunCommand",
      requiresConfirmation: false,
      toolName: "bash"
    };
  }
  if (POSTURE_MUTATION_PATTERN.test(command)) {
    return {
      actionId: "PostureRuleMutation",
      resourceType: "Resource",
      resourceId: "posture-rule",
      operationClass: "PostureRuleMutation",
      requiresConfirmation: true,
      toolName: "bash"
    };
  }
  if (isBrowserMutation(command)) {
    return {
      actionId: "BrowserMutation",
      resourceType: "Host",
      resourceId: extractHostFromText(command) ?? "unknown",
      operationClass: "BrowserMutation",
      requiresConfirmation: true,
      toolName: "bash"
    };
  }
  const dangerous = DANGEROUS_SHELL_PATTERNS.some((pattern) => pattern.test(command));
  if (dangerous) {
    return {
      actionId: "RunCommand",
      resourceType: "Command",
      resourceId: "dangerous-shell",
      operationClass: "RunCommand",
      requiresConfirmation: false,
      toolName: "bash"
    };
  }
  const host = extractHostFromText(command);
  if (host) {
    return {
      actionId: "NetworkRequest",
      resourceType: "Host",
      resourceId: host,
      operationClass: "NetworkRequest",
      requiresConfirmation: false,
      toolName: "bash"
    };
  }
  return {
    actionId: "RunCommand",
    resourceType: "Command",
    resourceId: "general-shell",
    operationClass: "RunCommand",
    requiresConfirmation: false,
    toolName: "bash"
  };
}

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
function browserCodeHash(code) {
  return createHash("sha256").update(code).digest("hex");
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

// src/mcp/policy.ts
var import_nodejs = __toESM(require_cedar_wasm(), 1);
import { existsSync } from "node:fs";
import { readFile as readFile2 } from "node:fs/promises";
import { homedir as homedir2 } from "node:os";
import { resolve as resolve2 } from "node:path";
import { fileURLToPath } from "node:url";
var PRINCIPAL = { type: "Agent", id: "obsec" };
var cachedPolicy;
function errorMessage(error) {
  return error instanceof Error ? error.message : String(error);
}
function firstMessage(errors) {
  return errors[0]?.message ?? "unknown_error";
}
function isMissing(error) {
  return typeof error === "object" && error !== null && "code" in error && error.code === "ENOENT";
}
async function readRequired(path, label) {
  try {
    return await readFile2(path, "utf8");
  } catch (error) {
    throw new Error(`Failed to read ${label} at ${path}: ${errorMessage(error)}`, {
      cause: error
    });
  }
}
async function readOptional(path) {
  try {
    return await readFile2(path, "utf8");
  } catch (error) {
    if (isMissing(error)) return void 0;
    throw new Error(`Failed to read customer policy at ${path}: ${errorMessage(error)}`, {
      cause: error
    });
  }
}
function validatePolicy(schemaText, policyText) {
  const schema = (0, import_nodejs.checkParseSchema)(schemaText);
  if (schema.type === "failure") {
    throw new Error(`schema_parse_failed: ${firstMessage(schema.errors)}`);
  }
  const policies = { staticPolicies: policyText };
  const parsed = (0, import_nodejs.checkParsePolicySet)(policies);
  if (parsed.type === "failure") {
    throw new Error(`policy_parse_failed: ${firstMessage(parsed.errors)}`);
  }
  const result = (0, import_nodejs.validate)({ schema: schemaText, policies });
  if (result.type === "failure") {
    throw new Error(`policy_validate_failed: ${firstMessage(result.errors)}`);
  }
  if (result.validationErrors.length > 0) {
    const errors = result.validationErrors.map((item) => item.error);
    throw new Error(`policy_validate_failed: ${firstMessage(errors)}`);
  }
}
function policyId(text, index) {
  const parsed = (0, import_nodejs.policyToJson)(text);
  if (parsed.type !== "success") return `policy${index}`;
  const id = parsed.json.annotations?.id;
  return typeof id === "string" && id.length > 0 ? id : `policy${index}`;
}
function namePolicies(policyText) {
  const parts = (0, import_nodejs.policySetTextToParts)(policyText);
  if (parts.type === "failure") {
    throw new Error(`policy_split_failed: ${firstMessage(parts.errors)}`);
  }
  const policies = {};
  for (const [index, text] of parts.policies.entries()) {
    const id = policyId(text, index);
    if (id in policies) {
      throw new Error(`duplicate_policy_id: ${id}`);
    }
    policies[id] = text;
  }
  return policies;
}
function defaultPolicyPaths() {
  const installedPolicyRoot = fileURLToPath(new URL("../policies/", import.meta.url));
  const sourcePolicyRoot = fileURLToPath(new URL("../../policies/", import.meta.url));
  const policyRoot = process.env.PLUGIN_ROOT ? resolve2(process.env.PLUGIN_ROOT, "policies") : existsSync(resolve2(installedPolicyRoot, "guardrails.cedar")) ? installedPolicyRoot : sourcePolicyRoot;
  return {
    basePolicyPath: process.env.OBSEC_BASE_POLICY_PATH ?? resolve2(policyRoot, "guardrails.cedar"),
    baseSchemaPath: process.env.OBSEC_BASE_SCHEMA_PATH ?? resolve2(policyRoot, "guardrails.cedarschema"),
    customerPolicyPath: process.env.OBSEC_CUSTOMER_POLICY_PATH ?? resolve2(homedir2(), ".obsec/policies/customer-guardrails.cedar")
  };
}
async function readPolicy(paths = defaultPolicyPaths()) {
  const [base, schemaText, customer] = await Promise.all([
    readRequired(paths.basePolicyPath, "base policy"),
    readRequired(paths.baseSchemaPath, "base schema"),
    readOptional(paths.customerPolicyPath)
  ]);
  const merged = customer ? `${base}

${customer}` : base;
  validatePolicy(schemaText, merged);
  return { policies: namePolicies(merged), schemaText };
}
function loadPolicy() {
  cachedPolicy ??= readPolicy().catch((error) => {
    cachedPolicy = void 0;
    throw error;
  });
  return cachedPolicy;
}
function authorize(bundle, request) {
  const result = (0, import_nodejs.isAuthorized)({
    principal: PRINCIPAL,
    action: { type: "Action", id: request.actionId },
    resource: { type: request.resourceType, id: request.resourceId },
    context: {
      interactive: false,
      playbookMode: false,
      toolName: request.toolName,
      operationClass: request.operationClass
    },
    schema: bundle.schemaText,
    validateRequest: true,
    policies: { staticPolicies: bundle.policies },
    entities: []
  });
  if (result.type === "failure") {
    throw new Error(`policy_eval_failed: ${firstMessage(result.errors)}`);
  }
  if (result.response.decision === "allow") return;
  const reasons = result.response.diagnostics.reason;
  const reason = reasons.length > 0 ? reasons.join(",") : firstMessage(result.response.diagnostics.errors.map((item) => item.error));
  throw new Error(`policy_denied: ${reason}`);
}

// src/mcp/tool-definitions.ts
var STRING = { type: "string", minLength: 1 };
var OPTIONAL_SELECTORS = {
  connection_id: STRING,
  connector_name: STRING
};
var FILTER_GROUP = {
  type: "object",
  properties: {
    combinator: { type: "string", minLength: 1 },
    filter_items: { type: "array", items: {} },
    not: { type: "boolean" },
    not_: { type: "boolean" }
  },
  additionalProperties: true
};
var RULE = {
  type: "object",
  properties: {
    comment: STRING,
    dashboard_id: STRING,
    description: STRING,
    description_short: { type: "string" },
    domain: STRING,
    filter_group: FILTER_GROUP,
    remediation_instructions: { anyOf: [{ type: "string" }, { type: "null" }] },
    risk_level: STRING,
    rule_name: STRING
  },
  required: ["comment", "description", "domain", "filter_group", "risk_level", "rule_name"],
  additionalProperties: false
};
var SETTING_PROPERTIES = {
  id: { type: "string", maxLength: 128 },
  name: STRING
};
function setting(type, value) {
  return {
    type: "object",
    properties: { ...SETTING_PROPERTIES, type: { const: type }, value },
    required: ["name", "type", "value"],
    additionalProperties: false
  };
}
var SETTINGS = {
  type: "array",
  minItems: 1,
  items: {
    oneOf: [
      setting("bool", { anyOf: [{ type: "boolean" }, { type: "null" }] }),
      setting("number", { anyOf: [{ type: "number" }, { type: "null" }] }),
      setting("string", { anyOf: [{ type: "string" }, { type: "null" }] }),
      setting("string_array", {
        anyOf: [{ type: "array", items: { type: "string" } }, { type: "null" }]
      })
    ]
  }
};
var RULE_SELECTION = {
  dashboard_id: STRING,
  dashboard_title: STRING,
  platform: STRING,
  preview_limit: { type: "integer", minimum: 1 },
  preview_tenant: STRING,
  ...OPTIONAL_SELECTORS
};
var BULK_RULE_SELECTION = {
  dashboard_id: STRING,
  dashboard_title: STRING,
  domain: STRING,
  platform: STRING,
  preview_limit: { type: "integer", minimum: 1 },
  risk_level: STRING,
  tenant_uuid: STRING,
  ...OPTIONAL_SELECTORS
};
function annotations(readOnlyHint, destructiveHint, idempotentHint) {
  return { readOnlyHint, destructiveHint, idempotentHint, openWorldHint: true };
}
var BROWSER_AUTO_REVIEW_GUIDANCE = "Automatic reviewers must deny check, uncheck, fill, type, select, press, and dblclick, plus any click that can change settings, submit a form, send a message, or otherwise modify page or external state. Deny ambiguous clicks. This applies even when the user explicitly requested the action; denial returns control to the user for approval. Automatic reviewers may approve only navigate, follow_link, and clicks clearly limited to opening read-only views.";
function objectSchema(properties, required = []) {
  return { type: "object", properties, required, additionalProperties: false };
}
var BROWSER_LOCATOR = {
  oneOf: [
    objectSchema(
      {
        exact: { type: "boolean" },
        kind: { const: "role" },
        name: STRING,
        role: STRING
      },
      ["kind", "role", "name"]
    ),
    ...["css", "label", "placeholder", "test_id", "text"].map(
      (kind) => objectSchema(
        {
          exact: { type: "boolean" },
          kind: { const: kind },
          value: STRING
        },
        ["kind", "value"]
      )
    )
  ]
};
var BROWSER_TARGET = {
  type: "object",
  properties: {
    expected_href: { type: "string" },
    expected_text: { type: "string" },
    locators: { type: "array", minItems: 1, maxItems: 4, items: BROWSER_LOCATOR }
  },
  required: ["locators"],
  additionalProperties: false
};
var BROWSER_LINK_TARGET = {
  ...BROWSER_TARGET,
  required: ["locators", "expected_href"]
};
var BROWSER_POINT = objectSchema(
  {
    x: { type: "number", minimum: 0, maximum: 1e5 },
    y: { type: "number", minimum: 0, maximum: 1e5 }
  },
  ["x", "y"]
);
var BROWSER_ACTION = {
  oneOf: [
    objectSchema({ action: { const: "navigate" }, url: STRING }, ["action", "url"]),
    ...["check", "click", "dblclick", "uncheck"].map(
      (action) => objectSchema({ action: { const: action }, point: BROWSER_POINT, target: BROWSER_TARGET }, [
        "action",
        "point",
        "target"
      ])
    ),
    objectSchema(
      {
        action: { const: "follow_link" },
        destination_host: STRING,
        point: BROWSER_POINT,
        target: BROWSER_LINK_TARGET
      },
      ["action", "point", "target"]
    ),
    ...["fill", "type"].map(
      (action) => objectSchema(
        {
          action: { const: action },
          point: BROWSER_POINT,
          target: BROWSER_TARGET,
          text: { type: "string" }
        },
        ["action", "point", "target", "text"]
      )
    ),
    objectSchema(
      {
        action: { const: "select" },
        point: BROWSER_POINT,
        target: BROWSER_TARGET,
        values: { type: "array", minItems: 1, items: STRING }
      },
      ["action", "point", "target", "values"]
    ),
    objectSchema(
      {
        action: { const: "press" },
        key: STRING,
        point: BROWSER_POINT,
        target: BROWSER_TARGET
      },
      ["action", "point", "target", "key"]
    )
  ]
};
var TOOLS = [
  {
    name: "approve_in_app_browser_action",
    title: "Approve In-App Browser Action",
    description: `Review one exact in-app Browser action. ${BROWSER_AUTO_REVIEW_GUIDANCE} Always deny credential or MFA entry and host or target mismatches. follow_link is limited to the exact rendered href and its explicit destination_host.`,
    inputSchema: objectSchema(
      {
        action: BROWSER_ACTION,
        host: STRING,
        playbook_name: STRING,
        tab_id: STRING
      },
      ["host", "tab_id", "action"]
    ),
    annotations: annotations(false, true, false)
  },
  {
    name: "ensure_obsidian_connection",
    title: "Ensure Obsidian Connection",
    description: "Reuse or create an Obsidian custom connector and connection.",
    inputSchema: objectSchema(
      {
        category: STRING,
        connection: STRING,
        description: STRING,
        force_new: { type: "boolean" },
        logo: { type: "string" },
        name: STRING,
        tenant: STRING
      },
      ["name"]
    ),
    annotations: annotations(false, true, false)
  },
  {
    name: "preview_connection_repair",
    title: "Preview Connection Registry Repair",
    description: "Preview duplicate connector and connection cleanup without writing the registry.",
    inputSchema: objectSchema({}),
    annotations: annotations(true, false, true)
  },
  {
    name: "apply_connection_repair",
    title: "Apply Connection Registry Repair",
    description: "Merge duplicate connector entries and connection IDs in the local registry.",
    inputSchema: objectSchema({}),
    annotations: annotations(false, true, true)
  },
  {
    name: "upload_posture_settings",
    title: "Upload Obsidian Posture Settings",
    description: "Validate a connection, upload normalized settings, and commit them.",
    inputSchema: objectSchema(
      {
        ...OPTIONAL_SELECTORS,
        create_replacement: { type: "boolean" },
        settings: SETTINGS
      },
      ["settings"]
    ),
    annotations: annotations(false, true, true)
  },
  {
    name: "list_posture_rules",
    title: "List Obsidian Posture Rules",
    description: "List posture rules using optional platform, tenant, state, and search filters.",
    inputSchema: objectSchema({
      ...OPTIONAL_SELECTORS,
      cursor: STRING,
      limit: { type: "integer", minimum: 1 },
      platform: STRING,
      release_label: STRING,
      risk_level: STRING,
      search: STRING,
      state: STRING,
      tenant_id: STRING,
      tenant_uuid: STRING
    }),
    annotations: annotations(true, false, true)
  },
  {
    name: "preview_posture_rule",
    title: "Preview Obsidian Posture Rule",
    description: "Resolve, validate, and preview a posture rule without creating it.",
    inputSchema: objectSchema({ ...RULE_SELECTION, rule: RULE }, ["rule"]),
    annotations: annotations(true, false, true)
  },
  {
    name: "create_posture_rule",
    title: "Create Obsidian Posture Rule",
    description: "Resolve, validate, preview, and create one posture rule.",
    inputSchema: objectSchema(
      {
        ...RULE_SELECTION,
        rule: RULE,
        skip_preview: { type: "boolean" }
      },
      ["rule"]
    ),
    annotations: annotations(false, true, false)
  },
  {
    name: "preview_posture_rules_from_settings",
    title: "Preview Rules From Settings",
    description: "Discover uncovered settings and preview generated posture rules.",
    inputSchema: objectSchema(BULK_RULE_SELECTION),
    annotations: annotations(true, false, true)
  },
  {
    name: "create_posture_rules_from_settings",
    title: "Create Rules From Settings",
    description: "Discover uncovered settings, preview them, and create posture rules.",
    inputSchema: objectSchema(BULK_RULE_SELECTION),
    annotations: annotations(false, true, false)
  },
  {
    name: "update_posture_rule",
    title: "Update Obsidian Posture Rule",
    description: "Update a posture rule definition, metadata, risk level, or a combination.",
    inputSchema: objectSchema(
      {
        ...OPTIONAL_SELECTORS,
        definition: {
          type: "object",
          properties: { comment: { type: "string" }, definition: FILTER_GROUP },
          required: ["definition"],
          additionalProperties: false
        },
        metadata: {
          type: "object",
          properties: {
            comment: { type: "string" },
            description: { type: "string" },
            description_short: { type: "string" },
            name: { type: "string" },
            remediation_instructions: { type: "string" },
            security_domain: { type: "string" }
          },
          additionalProperties: false
        },
        risk_comment: { type: "string" },
        risk_level: STRING,
        rule_id: STRING
      },
      ["rule_id"]
    ),
    annotations: annotations(false, true, false)
  },
  {
    name: "retire_posture_rule",
    title: "Retire Obsidian Posture Rule",
    description: "Soft-delete a posture rule using the Obsidian retirement operation.",
    inputSchema: objectSchema({ ...OPTIONAL_SELECTORS, rule_id: STRING }, ["rule_id"]),
    annotations: annotations(false, true, true)
  }
];
var TOOL_NAMES = new Set(TOOLS.map((tool) => tool.name));
var MUTATION_TOOL_NAMES = new Set(
  TOOLS.filter((tool) => !tool.annotations.readOnlyHint).map((tool) => tool.name)
);
var RULE_MUTATIONS = /* @__PURE__ */ new Set([
  "create_posture_rule",
  "create_posture_rules_from_settings",
  "update_posture_rule",
  "retire_posture_rule"
]);
var BROWSER_TOOLS = /* @__PURE__ */ new Set(["approve_in_app_browser_action"]);
function isKnownTool(name) {
  return TOOL_NAMES.has(name);
}
function isMutationTool(name) {
  return MUTATION_TOOL_NAMES.has(name);
}
function isBrowserTool(name) {
  return BROWSER_TOOLS.has(name);
}
function apiHost() {
  const server = process.env.OBSIDIAN_API_SERVER;
  if (!server) return "obsidian-api";
  try {
    return new URL(server).hostname.toLowerCase();
  } catch {
    return "obsidian-api";
  }
}
function policyRequestForTool(name) {
  if (BROWSER_TOOLS.has(name)) {
    return {
      actionId: "BrowserMutation",
      operationClass: "BrowserMutation",
      resourceId: "browser",
      resourceType: "Host",
      toolName: name
    };
  }
  if (name === "preview_connection_repair") {
    return {
      actionId: "ReadFile",
      operationClass: "ReadFile",
      resourceId: "~/.obsec/connections.json",
      resourceType: "File",
      toolName: name
    };
  }
  if (name === "apply_connection_repair") {
    return {
      actionId: "WriteFile",
      operationClass: "WriteFile",
      resourceId: "~/.obsec/connections.json",
      resourceType: "File",
      toolName: name
    };
  }
  if (RULE_MUTATIONS.has(name)) {
    return {
      actionId: "PostureRuleMutation",
      operationClass: "PostureRuleMutation",
      resourceId: "posture-rule",
      resourceType: "Resource",
      toolName: name
    };
  }
  if (name === "ensure_obsidian_connection" || name === "upload_posture_settings") {
    return {
      actionId: "ObsidianMutation",
      operationClass: "ObsidianMutation",
      resourceId: name === "upload_posture_settings" ? "posture-settings" : "connection",
      resourceType: "Resource",
      toolName: name
    };
  }
  return {
    actionId: "NetworkRequest",
    operationClass: "NetworkRequest",
    resourceId: apiHost(),
    resourceType: "Host",
    toolName: name
  };
}

// src/mcp/hook.ts
var DIRECT_MUTATION_SCRIPT = /\b(?:create-connection|upload-settings|create-rule|create-rules-from-settings|update-rule|delete-rule|repair-connections)\.(?:cjs|mjs|ts)\b/iu;
var DIRECT_MCP_SERVER = /\b(?:mcp[\\/]launch\.sh|(?:mcp|runtime)[\\/]server\.mjs)\b/iu;
var RAW_OBSIDIAN_MUTATION = /\b(?:curl|http|httpie)\b[\s\S]*(?:-X\s*)?(?:POST|PUT|PATCH|DELETE)\b[\s\S]*(?:connection-management|posture|OBSIDIAN_API_SERVER)/iu;
var MUTATION_ALLOWED_PERMISSION_MODES = /* @__PURE__ */ new Set(["default", "acceptEdits", "bypassPermissions"]);
var APPROVAL_MARKER = /\/\* bastion-browser-approval: ([A-Za-z0-9-]+) \*\//u;
var NODE_REPL_TOOL_NAMES = /* @__PURE__ */ new Set(["mcp__node_repl__js", "mcp__node_repljs"]);
var OBSEC_TOOL_PREFIXES = ["mcp__obsec__", "mcp__obsec"];
var BROWSER_MUTATION_METHODS = [
  "accept",
  "back",
  "check",
  "clear",
  "click",
  "dblclick",
  "dismiss",
  "double_click",
  "downloadMedia",
  "drag",
  "dragTo",
  "fill",
  "forward",
  "goBack",
  "goForward",
  "goto",
  "keypress",
  "press",
  "reload",
  "runApprovedBrowserAction",
  "selectOption",
  "setChecked",
  "setFiles",
  "setInputFiles",
  "type",
  "uncheck"
].join("|");
var IN_APP_BROWSER_MUTATION = new RegExp(
  String.raw`\.(?:${BROWSER_MUTATION_METHODS})\s*\(` + String.raw`|\[\s*["'](?:${BROWSER_MUTATION_METHODS})["']\s*\]` + String.raw`|\brunApprovedBrowserAction\b|browser-action\.mjs`,
  "u"
);
function deny(reason) {
  const message = `guardrails_blocked: ${reason}`;
  process.stdout.write(
    `${JSON.stringify({
      hookSpecificOutput: {
        hookEventName: "PreToolUse",
        permissionDecision: "deny",
        permissionDecisionReason: message
      },
      systemMessage: message
    })}
`
  );
}
function isRecord(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
function bashRequest(command) {
  const classified = classifyBashCommand(command);
  return { ...classified, toolName: "Bash" };
}
function validateBash(command) {
  if (DIRECT_MUTATION_SCRIPT.test(command) || DIRECT_MCP_SERVER.test(command)) {
    throw new Error("direct_mutation_script: use the ObSec MCP tool");
  }
  if (/\bOBSIDIAN_API_TOKEN\b/u.test(command)) {
    throw new Error("secret_exposure: Obsidian tokens are available only to the MCP server");
  }
  if (RAW_OBSIDIAN_MUTATION.test(command)) {
    throw new Error("raw_obsidian_mutation: use the ObSec MCP tool");
  }
  const request = bashRequest(command);
  if (request.operationClass === "BrowserMutation") {
    throw new Error("direct_browser_mutation: use the ObSec browser MCP tools");
  }
  return request;
}
function envFlagEnabled(name) {
  return ["1", "true", "yes"].includes((process.env[name] ?? "").toLowerCase());
}
async function playbookAllowsBrowserMutation(input) {
  if (envFlagEnabled("OBSEC_PLAYBOOK_AUTO_CONFIRM_BROWSER")) return true;
  const name = input.tool_input?.playbook_name;
  const host = input.tool_input?.host;
  if (typeof name !== "string" || !/^[A-Za-z0-9._-]+$/u.test(name)) return false;
  if (typeof host !== "string" || host.length === 0) return false;
  try {
    const home = process.env.HOME ?? homedir3();
    const text = await readFile3(resolve3(home, ".obsec/playbooks", `${name}.json`), "utf8");
    const playbook = JSON.parse(text);
    if (playbook.guardrails?.autoConfirmBrowserMutations !== true) return false;
    return typeof playbook.url === "string" && new URL(playbook.url).hostname.toLowerCase() === host.toLowerCase();
  } catch {
    return false;
  }
}
function browserMutationRequest(toolName, host) {
  if (typeof host !== "string" || host.length === 0) {
    throw new Error("browser_action_host_missing");
  }
  return {
    actionId: "BrowserMutation",
    operationClass: "BrowserMutation",
    resourceId: host.toLowerCase(),
    resourceType: "Host",
    toolName
  };
}
function obsecToolName(toolName) {
  if (!toolName) return void 0;
  const prefix = OBSEC_TOOL_PREFIXES.find((candidate) => toolName.startsWith(candidate));
  return prefix ? toolName.slice(prefix.length) : void 0;
}
async function inAppBrowserRequests(input) {
  const code = input.tool_input?.code;
  if (typeof code !== "string") throw new Error("node_repl code is missing");
  const marker = code.match(APPROVAL_MARKER);
  const mutation = IN_APP_BROWSER_MUTATION.test(code);
  if (!mutation) {
    if (marker) throw new Error("browser_approval_marker_without_mutation");
    return [];
  }
  if (!marker) throw new Error("unapproved_in_app_browser_mutation");
  const store = createBrowserApprovalStore();
  const receipt = await store.readReceipt(marker[1]);
  if (receipt.expiresAt < Date.now()) {
    await store.claimReceipt(receipt.token);
    throw new Error("browser_approval_expired");
  }
  if (receipt.codeHash !== browserCodeHash(code)) {
    await store.claimReceipt(receipt.token);
    throw new Error("browser_approval_code_mismatch");
  }
  if (receipt.host !== receipt.approvedAction.host) {
    await store.claimReceipt(receipt.token);
    throw new Error("browser_approval_receipt_invalid");
  }
  const requests = [browserMutationRequest("in_app_browser_action", receipt.host)];
  const action = receipt.approvedAction.action;
  if (action.action === "follow_link" && action.destination_host !== receipt.host) {
    requests.push(browserMutationRequest("in_app_browser_action", action.destination_host));
  }
  return requests;
}
async function requestsForInput(input) {
  if (input.tool_name === "Bash") {
    const command = input.tool_input?.command;
    if (typeof command !== "string") throw new Error("Bash command is missing");
    return [validateBash(command)];
  }
  if (input.tool_name && NODE_REPL_TOOL_NAMES.has(input.tool_name)) {
    return inAppBrowserRequests(input);
  }
  const name = obsecToolName(input.tool_name);
  if (!name) return [];
  if (!isKnownTool(name)) throw new Error(`unknown_obsec_tool: ${name}`);
  if (isMutationTool(name) && !MUTATION_ALLOWED_PERMISSION_MODES.has(input.permission_mode ?? "")) {
    const scheduledBrowserApply = name === "approve_in_app_browser_action" && await playbookAllowsBrowserMutation(input);
    if (!scheduledBrowserApply) {
      throw new Error(
        `confirmation_required_permission_mode: ${input.permission_mode ?? "missing"}`
      );
    }
  }
  if (isBrowserTool(name)) {
    return [browserMutationRequest(name, input.tool_input?.host)];
  }
  return [policyRequestForTool(name)];
}
async function readInput() {
  let text = "";
  for await (const chunk of process.stdin) {
    text += String(chunk);
  }
  return JSON.parse(text);
}
async function runHook() {
  try {
    const value = await readInput();
    if (!isRecord(value)) throw new Error("hook input must be an object");
    const requests = await requestsForInput(value);
    if (requests.length === 0) return;
    const policy = await loadPolicy();
    for (const request of requests) authorize(policy, request);
  } catch (error) {
    deny(error instanceof Error ? error.message : String(error));
  }
}
var entryPath = process.argv[1];
if (entryPath && import.meta.url === pathToFileURL(entryPath).href) {
  runHook().catch((error) => {
    deny(error instanceof Error ? error.message : String(error));
  });
}
export {
  runHook
};
