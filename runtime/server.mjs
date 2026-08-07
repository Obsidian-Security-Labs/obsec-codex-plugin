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
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
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

// src/mcp/server.ts
import readline from "node:readline";
import { pathToFileURL } from "node:url";

// src/mcp/policy.ts
var import_nodejs = __toESM(require_cedar_wasm(), 1);
import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";
import { homedir } from "node:os";
import { resolve } from "node:path";
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
    return await readFile(path, "utf8");
  } catch (error) {
    throw new Error(`Failed to read ${label} at ${path}: ${errorMessage(error)}`, {
      cause: error
    });
  }
}
async function readOptional(path) {
  try {
    return await readFile(path, "utf8");
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
  const policyRoot = process.env.PLUGIN_ROOT ? resolve(process.env.PLUGIN_ROOT, "policies") : existsSync(resolve(installedPolicyRoot, "guardrails.cedar")) ? installedPolicyRoot : sourcePolicyRoot;
  return {
    basePolicyPath: process.env.OBSEC_BASE_POLICY_PATH ?? resolve(policyRoot, "guardrails.cedar"),
    baseSchemaPath: process.env.OBSEC_BASE_SCHEMA_PATH ?? resolve(policyRoot, "guardrails.cedarschema"),
    customerPolicyPath: process.env.OBSEC_CUSTOMER_POLICY_PATH ?? resolve(homedir(), ".obsec/policies/customer-guardrails.cedar")
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

// src/mcp/tools.ts
import { homedir as homedir13 } from "node:os";
import { resolve as resolve13 } from "node:path";

// src/sdk/client.ts
import { gzipSync } from "node:zlib";

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/guard/value.mjs
var value_exports = {};
__export(value_exports, {
  HasPropertyKey: () => HasPropertyKey,
  IsArray: () => IsArray,
  IsAsyncIterator: () => IsAsyncIterator,
  IsBigInt: () => IsBigInt,
  IsBoolean: () => IsBoolean,
  IsDate: () => IsDate,
  IsFunction: () => IsFunction,
  IsIterator: () => IsIterator,
  IsNull: () => IsNull,
  IsNumber: () => IsNumber,
  IsObject: () => IsObject,
  IsRegExp: () => IsRegExp,
  IsString: () => IsString,
  IsSymbol: () => IsSymbol,
  IsUint8Array: () => IsUint8Array,
  IsUndefined: () => IsUndefined
});
function HasPropertyKey(value, key) {
  return key in value;
}
function IsAsyncIterator(value) {
  return IsObject(value) && !IsArray(value) && !IsUint8Array(value) && Symbol.asyncIterator in value;
}
function IsArray(value) {
  return Array.isArray(value);
}
function IsBigInt(value) {
  return typeof value === "bigint";
}
function IsBoolean(value) {
  return typeof value === "boolean";
}
function IsDate(value) {
  return value instanceof globalThis.Date;
}
function IsFunction(value) {
  return typeof value === "function";
}
function IsIterator(value) {
  return IsObject(value) && !IsArray(value) && !IsUint8Array(value) && Symbol.iterator in value;
}
function IsNull(value) {
  return value === null;
}
function IsNumber(value) {
  return typeof value === "number";
}
function IsObject(value) {
  return typeof value === "object" && value !== null;
}
function IsRegExp(value) {
  return value instanceof globalThis.RegExp;
}
function IsString(value) {
  return typeof value === "string";
}
function IsSymbol(value) {
  return typeof value === "symbol";
}
function IsUint8Array(value) {
  return value instanceof globalThis.Uint8Array;
}
function IsUndefined(value) {
  return value === void 0;
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/clone/value.mjs
function ArrayType(value) {
  return value.map((value2) => Visit(value2));
}
function DateType(value) {
  return new Date(value.getTime());
}
function Uint8ArrayType(value) {
  return new Uint8Array(value);
}
function RegExpType(value) {
  return new RegExp(value.source, value.flags);
}
function ObjectType(value) {
  const result = {};
  for (const key of Object.getOwnPropertyNames(value)) {
    result[key] = Visit(value[key]);
  }
  for (const key of Object.getOwnPropertySymbols(value)) {
    result[key] = Visit(value[key]);
  }
  return result;
}
function Visit(value) {
  return IsArray(value) ? ArrayType(value) : IsDate(value) ? DateType(value) : IsUint8Array(value) ? Uint8ArrayType(value) : IsRegExp(value) ? RegExpType(value) : IsObject(value) ? ObjectType(value) : value;
}
function Clone(value) {
  return Visit(value);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/clone/type.mjs
function CloneType(schema, options) {
  return options === void 0 ? Clone(schema) : Clone({ ...options, ...schema });
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/value/guard/guard.mjs
function IsAsyncIterator2(value) {
  return IsObject2(value) && globalThis.Symbol.asyncIterator in value;
}
function IsIterator2(value) {
  return IsObject2(value) && globalThis.Symbol.iterator in value;
}
function IsStandardObject(value) {
  return IsObject2(value) && (globalThis.Object.getPrototypeOf(value) === Object.prototype || globalThis.Object.getPrototypeOf(value) === null);
}
function IsPromise(value) {
  return value instanceof globalThis.Promise;
}
function IsDate2(value) {
  return value instanceof Date && globalThis.Number.isFinite(value.getTime());
}
function IsMap(value) {
  return value instanceof globalThis.Map;
}
function IsSet(value) {
  return value instanceof globalThis.Set;
}
function IsTypedArray(value) {
  return globalThis.ArrayBuffer.isView(value);
}
function IsUint8Array2(value) {
  return value instanceof globalThis.Uint8Array;
}
function HasPropertyKey2(value, key) {
  return key in value;
}
function IsObject2(value) {
  return value !== null && typeof value === "object";
}
function IsArray2(value) {
  return globalThis.Array.isArray(value) && !globalThis.ArrayBuffer.isView(value);
}
function IsUndefined2(value) {
  return value === void 0;
}
function IsNull2(value) {
  return value === null;
}
function IsBoolean2(value) {
  return typeof value === "boolean";
}
function IsNumber2(value) {
  return typeof value === "number";
}
function IsInteger(value) {
  return globalThis.Number.isInteger(value);
}
function IsBigInt2(value) {
  return typeof value === "bigint";
}
function IsString2(value) {
  return typeof value === "string";
}
function IsFunction2(value) {
  return typeof value === "function";
}
function IsSymbol2(value) {
  return typeof value === "symbol";
}
function IsValueType(value) {
  return IsBigInt2(value) || IsBoolean2(value) || IsNull2(value) || IsNumber2(value) || IsString2(value) || IsSymbol2(value) || IsUndefined2(value);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/system/policy.mjs
var TypeSystemPolicy;
(function(TypeSystemPolicy2) {
  TypeSystemPolicy2.InstanceMode = "default";
  TypeSystemPolicy2.ExactOptionalPropertyTypes = false;
  TypeSystemPolicy2.AllowArrayObject = false;
  TypeSystemPolicy2.AllowNaN = false;
  TypeSystemPolicy2.AllowNullVoid = false;
  function IsExactOptionalProperty(value, key) {
    return TypeSystemPolicy2.ExactOptionalPropertyTypes ? key in value : value[key] !== void 0;
  }
  TypeSystemPolicy2.IsExactOptionalProperty = IsExactOptionalProperty;
  function IsObjectLike(value) {
    const isObject = IsObject2(value);
    return TypeSystemPolicy2.AllowArrayObject ? isObject : isObject && !IsArray2(value);
  }
  TypeSystemPolicy2.IsObjectLike = IsObjectLike;
  function IsRecordLike(value) {
    return IsObjectLike(value) && !(value instanceof Date) && !(value instanceof Uint8Array);
  }
  TypeSystemPolicy2.IsRecordLike = IsRecordLike;
  function IsNumberLike(value) {
    return TypeSystemPolicy2.AllowNaN ? IsNumber2(value) : Number.isFinite(value);
  }
  TypeSystemPolicy2.IsNumberLike = IsNumberLike;
  function IsVoidLike(value) {
    const isUndefined = IsUndefined2(value);
    return TypeSystemPolicy2.AllowNullVoid ? isUndefined || value === null : isUndefined;
  }
  TypeSystemPolicy2.IsVoidLike = IsVoidLike;
})(TypeSystemPolicy || (TypeSystemPolicy = {}));

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/create/immutable.mjs
function ImmutableArray(value) {
  return globalThis.Object.freeze(value).map((value2) => Immutable(value2));
}
function ImmutableDate(value) {
  return value;
}
function ImmutableUint8Array(value) {
  return value;
}
function ImmutableRegExp(value) {
  return value;
}
function ImmutableObject(value) {
  const result = {};
  for (const key of Object.getOwnPropertyNames(value)) {
    result[key] = Immutable(value[key]);
  }
  for (const key of Object.getOwnPropertySymbols(value)) {
    result[key] = Immutable(value[key]);
  }
  return globalThis.Object.freeze(result);
}
function Immutable(value) {
  return IsArray(value) ? ImmutableArray(value) : IsDate(value) ? ImmutableDate(value) : IsUint8Array(value) ? ImmutableUint8Array(value) : IsRegExp(value) ? ImmutableRegExp(value) : IsObject(value) ? ImmutableObject(value) : value;
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/create/type.mjs
function CreateType(schema, options) {
  const result = options !== void 0 ? { ...options, ...schema } : schema;
  switch (TypeSystemPolicy.InstanceMode) {
    case "freeze":
      return Immutable(result);
    case "clone":
      return Clone(result);
    default:
      return result;
  }
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/error/error.mjs
var TypeBoxError = class extends Error {
  constructor(message) {
    super(message);
  }
};

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/symbols/symbols.mjs
var TransformKind = /* @__PURE__ */ Symbol.for("TypeBox.Transform");
var ReadonlyKind = /* @__PURE__ */ Symbol.for("TypeBox.Readonly");
var OptionalKind = /* @__PURE__ */ Symbol.for("TypeBox.Optional");
var Hint = /* @__PURE__ */ Symbol.for("TypeBox.Hint");
var Kind = /* @__PURE__ */ Symbol.for("TypeBox.Kind");

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/guard/kind.mjs
function IsReadonly(value) {
  return IsObject(value) && value[ReadonlyKind] === "Readonly";
}
function IsOptional(value) {
  return IsObject(value) && value[OptionalKind] === "Optional";
}
function IsAny(value) {
  return IsKindOf(value, "Any");
}
function IsArgument(value) {
  return IsKindOf(value, "Argument");
}
function IsArray3(value) {
  return IsKindOf(value, "Array");
}
function IsAsyncIterator3(value) {
  return IsKindOf(value, "AsyncIterator");
}
function IsBigInt3(value) {
  return IsKindOf(value, "BigInt");
}
function IsBoolean3(value) {
  return IsKindOf(value, "Boolean");
}
function IsComputed(value) {
  return IsKindOf(value, "Computed");
}
function IsConstructor(value) {
  return IsKindOf(value, "Constructor");
}
function IsDate3(value) {
  return IsKindOf(value, "Date");
}
function IsFunction3(value) {
  return IsKindOf(value, "Function");
}
function IsInteger2(value) {
  return IsKindOf(value, "Integer");
}
function IsIntersect(value) {
  return IsKindOf(value, "Intersect");
}
function IsIterator3(value) {
  return IsKindOf(value, "Iterator");
}
function IsKindOf(value, kind) {
  return IsObject(value) && Kind in value && value[Kind] === kind;
}
function IsLiteralValue(value) {
  return IsBoolean(value) || IsNumber(value) || IsString(value);
}
function IsLiteral(value) {
  return IsKindOf(value, "Literal");
}
function IsMappedKey(value) {
  return IsKindOf(value, "MappedKey");
}
function IsMappedResult(value) {
  return IsKindOf(value, "MappedResult");
}
function IsNever(value) {
  return IsKindOf(value, "Never");
}
function IsNot(value) {
  return IsKindOf(value, "Not");
}
function IsNull3(value) {
  return IsKindOf(value, "Null");
}
function IsNumber3(value) {
  return IsKindOf(value, "Number");
}
function IsObject3(value) {
  return IsKindOf(value, "Object");
}
function IsPromise2(value) {
  return IsKindOf(value, "Promise");
}
function IsRecord(value) {
  return IsKindOf(value, "Record");
}
function IsRef(value) {
  return IsKindOf(value, "Ref");
}
function IsRegExp2(value) {
  return IsKindOf(value, "RegExp");
}
function IsString3(value) {
  return IsKindOf(value, "String");
}
function IsSymbol3(value) {
  return IsKindOf(value, "Symbol");
}
function IsTemplateLiteral(value) {
  return IsKindOf(value, "TemplateLiteral");
}
function IsThis(value) {
  return IsKindOf(value, "This");
}
function IsTransform(value) {
  return IsObject(value) && TransformKind in value;
}
function IsTuple(value) {
  return IsKindOf(value, "Tuple");
}
function IsUndefined3(value) {
  return IsKindOf(value, "Undefined");
}
function IsUnion(value) {
  return IsKindOf(value, "Union");
}
function IsUint8Array3(value) {
  return IsKindOf(value, "Uint8Array");
}
function IsUnknown(value) {
  return IsKindOf(value, "Unknown");
}
function IsUnsafe(value) {
  return IsKindOf(value, "Unsafe");
}
function IsVoid(value) {
  return IsKindOf(value, "Void");
}
function IsKind(value) {
  return IsObject(value) && Kind in value && IsString(value[Kind]);
}
function IsSchema(value) {
  return IsAny(value) || IsArgument(value) || IsArray3(value) || IsBoolean3(value) || IsBigInt3(value) || IsAsyncIterator3(value) || IsComputed(value) || IsConstructor(value) || IsDate3(value) || IsFunction3(value) || IsInteger2(value) || IsIntersect(value) || IsIterator3(value) || IsLiteral(value) || IsMappedKey(value) || IsMappedResult(value) || IsNever(value) || IsNot(value) || IsNull3(value) || IsNumber3(value) || IsObject3(value) || IsPromise2(value) || IsRecord(value) || IsRef(value) || IsRegExp2(value) || IsString3(value) || IsSymbol3(value) || IsTemplateLiteral(value) || IsThis(value) || IsTuple(value) || IsUndefined3(value) || IsUnion(value) || IsUint8Array3(value) || IsUnknown(value) || IsUnsafe(value) || IsVoid(value) || IsKind(value);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/guard/type.mjs
var type_exports = {};
__export(type_exports, {
  IsAny: () => IsAny2,
  IsArgument: () => IsArgument2,
  IsArray: () => IsArray4,
  IsAsyncIterator: () => IsAsyncIterator4,
  IsBigInt: () => IsBigInt4,
  IsBoolean: () => IsBoolean4,
  IsComputed: () => IsComputed2,
  IsConstructor: () => IsConstructor2,
  IsDate: () => IsDate4,
  IsFunction: () => IsFunction4,
  IsImport: () => IsImport,
  IsInteger: () => IsInteger3,
  IsIntersect: () => IsIntersect2,
  IsIterator: () => IsIterator4,
  IsKind: () => IsKind2,
  IsKindOf: () => IsKindOf2,
  IsLiteral: () => IsLiteral2,
  IsLiteralBoolean: () => IsLiteralBoolean,
  IsLiteralNumber: () => IsLiteralNumber,
  IsLiteralString: () => IsLiteralString,
  IsLiteralValue: () => IsLiteralValue2,
  IsMappedKey: () => IsMappedKey2,
  IsMappedResult: () => IsMappedResult2,
  IsNever: () => IsNever2,
  IsNot: () => IsNot2,
  IsNull: () => IsNull4,
  IsNumber: () => IsNumber4,
  IsObject: () => IsObject4,
  IsOptional: () => IsOptional2,
  IsPromise: () => IsPromise3,
  IsProperties: () => IsProperties,
  IsReadonly: () => IsReadonly2,
  IsRecord: () => IsRecord2,
  IsRecursive: () => IsRecursive,
  IsRef: () => IsRef2,
  IsRegExp: () => IsRegExp3,
  IsSchema: () => IsSchema2,
  IsString: () => IsString4,
  IsSymbol: () => IsSymbol4,
  IsTemplateLiteral: () => IsTemplateLiteral2,
  IsThis: () => IsThis2,
  IsTransform: () => IsTransform2,
  IsTuple: () => IsTuple2,
  IsUint8Array: () => IsUint8Array4,
  IsUndefined: () => IsUndefined4,
  IsUnion: () => IsUnion2,
  IsUnionLiteral: () => IsUnionLiteral,
  IsUnknown: () => IsUnknown2,
  IsUnsafe: () => IsUnsafe2,
  IsVoid: () => IsVoid2,
  TypeGuardUnknownTypeError: () => TypeGuardUnknownTypeError
});
var TypeGuardUnknownTypeError = class extends TypeBoxError {
};
var KnownTypes = [
  "Argument",
  "Any",
  "Array",
  "AsyncIterator",
  "BigInt",
  "Boolean",
  "Computed",
  "Constructor",
  "Date",
  "Enum",
  "Function",
  "Integer",
  "Intersect",
  "Iterator",
  "Literal",
  "MappedKey",
  "MappedResult",
  "Not",
  "Null",
  "Number",
  "Object",
  "Promise",
  "Record",
  "Ref",
  "RegExp",
  "String",
  "Symbol",
  "TemplateLiteral",
  "This",
  "Tuple",
  "Undefined",
  "Union",
  "Uint8Array",
  "Unknown",
  "Void"
];
function IsPattern(value) {
  try {
    new RegExp(value);
    return true;
  } catch {
    return false;
  }
}
function IsControlCharacterFree(value) {
  if (!IsString(value))
    return false;
  for (let i = 0; i < value.length; i++) {
    const code = value.charCodeAt(i);
    if (code >= 7 && code <= 13 || code === 27 || code === 127) {
      return false;
    }
  }
  return true;
}
function IsAdditionalProperties(value) {
  return IsOptionalBoolean(value) || IsSchema2(value);
}
function IsOptionalBigInt(value) {
  return IsUndefined(value) || IsBigInt(value);
}
function IsOptionalNumber(value) {
  return IsUndefined(value) || IsNumber(value);
}
function IsOptionalBoolean(value) {
  return IsUndefined(value) || IsBoolean(value);
}
function IsOptionalString(value) {
  return IsUndefined(value) || IsString(value);
}
function IsOptionalPattern(value) {
  return IsUndefined(value) || IsString(value) && IsControlCharacterFree(value) && IsPattern(value);
}
function IsOptionalFormat(value) {
  return IsUndefined(value) || IsString(value) && IsControlCharacterFree(value);
}
function IsOptionalSchema(value) {
  return IsUndefined(value) || IsSchema2(value);
}
function IsReadonly2(value) {
  return IsObject(value) && value[ReadonlyKind] === "Readonly";
}
function IsOptional2(value) {
  return IsObject(value) && value[OptionalKind] === "Optional";
}
function IsAny2(value) {
  return IsKindOf2(value, "Any") && IsOptionalString(value.$id);
}
function IsArgument2(value) {
  return IsKindOf2(value, "Argument") && IsNumber(value.index);
}
function IsArray4(value) {
  return IsKindOf2(value, "Array") && value.type === "array" && IsOptionalString(value.$id) && IsSchema2(value.items) && IsOptionalNumber(value.minItems) && IsOptionalNumber(value.maxItems) && IsOptionalBoolean(value.uniqueItems) && IsOptionalSchema(value.contains) && IsOptionalNumber(value.minContains) && IsOptionalNumber(value.maxContains);
}
function IsAsyncIterator4(value) {
  return IsKindOf2(value, "AsyncIterator") && value.type === "AsyncIterator" && IsOptionalString(value.$id) && IsSchema2(value.items);
}
function IsBigInt4(value) {
  return IsKindOf2(value, "BigInt") && value.type === "bigint" && IsOptionalString(value.$id) && IsOptionalBigInt(value.exclusiveMaximum) && IsOptionalBigInt(value.exclusiveMinimum) && IsOptionalBigInt(value.maximum) && IsOptionalBigInt(value.minimum) && IsOptionalBigInt(value.multipleOf);
}
function IsBoolean4(value) {
  return IsKindOf2(value, "Boolean") && value.type === "boolean" && IsOptionalString(value.$id);
}
function IsComputed2(value) {
  return IsKindOf2(value, "Computed") && IsString(value.target) && IsArray(value.parameters) && value.parameters.every((schema) => IsSchema2(schema));
}
function IsConstructor2(value) {
  return IsKindOf2(value, "Constructor") && value.type === "Constructor" && IsOptionalString(value.$id) && IsArray(value.parameters) && value.parameters.every((schema) => IsSchema2(schema)) && IsSchema2(value.returns);
}
function IsDate4(value) {
  return IsKindOf2(value, "Date") && value.type === "Date" && IsOptionalString(value.$id) && IsOptionalNumber(value.exclusiveMaximumTimestamp) && IsOptionalNumber(value.exclusiveMinimumTimestamp) && IsOptionalNumber(value.maximumTimestamp) && IsOptionalNumber(value.minimumTimestamp) && IsOptionalNumber(value.multipleOfTimestamp);
}
function IsFunction4(value) {
  return IsKindOf2(value, "Function") && value.type === "Function" && IsOptionalString(value.$id) && IsArray(value.parameters) && value.parameters.every((schema) => IsSchema2(schema)) && IsSchema2(value.returns);
}
function IsImport(value) {
  return IsKindOf2(value, "Import") && HasPropertyKey(value, "$defs") && IsObject(value.$defs) && IsProperties(value.$defs) && HasPropertyKey(value, "$ref") && IsString(value.$ref) && value.$ref in value.$defs;
}
function IsInteger3(value) {
  return IsKindOf2(value, "Integer") && value.type === "integer" && IsOptionalString(value.$id) && IsOptionalNumber(value.exclusiveMaximum) && IsOptionalNumber(value.exclusiveMinimum) && IsOptionalNumber(value.maximum) && IsOptionalNumber(value.minimum) && IsOptionalNumber(value.multipleOf);
}
function IsProperties(value) {
  return IsObject(value) && Object.entries(value).every(([key, schema]) => IsControlCharacterFree(key) && IsSchema2(schema));
}
function IsIntersect2(value) {
  return IsKindOf2(value, "Intersect") && (IsString(value.type) && value.type !== "object" ? false : true) && IsArray(value.allOf) && value.allOf.every((schema) => IsSchema2(schema) && !IsTransform2(schema)) && IsOptionalString(value.type) && (IsOptionalBoolean(value.unevaluatedProperties) || IsOptionalSchema(value.unevaluatedProperties)) && IsOptionalString(value.$id);
}
function IsIterator4(value) {
  return IsKindOf2(value, "Iterator") && value.type === "Iterator" && IsOptionalString(value.$id) && IsSchema2(value.items);
}
function IsKindOf2(value, kind) {
  return IsObject(value) && Kind in value && value[Kind] === kind;
}
function IsLiteralString(value) {
  return IsLiteral2(value) && IsString(value.const);
}
function IsLiteralNumber(value) {
  return IsLiteral2(value) && IsNumber(value.const);
}
function IsLiteralBoolean(value) {
  return IsLiteral2(value) && IsBoolean(value.const);
}
function IsLiteral2(value) {
  return IsKindOf2(value, "Literal") && IsOptionalString(value.$id) && IsLiteralValue2(value.const);
}
function IsLiteralValue2(value) {
  return IsBoolean(value) || IsNumber(value) || IsString(value);
}
function IsMappedKey2(value) {
  return IsKindOf2(value, "MappedKey") && IsArray(value.keys) && value.keys.every((key) => IsNumber(key) || IsString(key));
}
function IsMappedResult2(value) {
  return IsKindOf2(value, "MappedResult") && IsProperties(value.properties);
}
function IsNever2(value) {
  return IsKindOf2(value, "Never") && IsObject(value.not) && Object.getOwnPropertyNames(value.not).length === 0;
}
function IsNot2(value) {
  return IsKindOf2(value, "Not") && IsSchema2(value.not);
}
function IsNull4(value) {
  return IsKindOf2(value, "Null") && value.type === "null" && IsOptionalString(value.$id);
}
function IsNumber4(value) {
  return IsKindOf2(value, "Number") && value.type === "number" && IsOptionalString(value.$id) && IsOptionalNumber(value.exclusiveMaximum) && IsOptionalNumber(value.exclusiveMinimum) && IsOptionalNumber(value.maximum) && IsOptionalNumber(value.minimum) && IsOptionalNumber(value.multipleOf);
}
function IsObject4(value) {
  return IsKindOf2(value, "Object") && value.type === "object" && IsOptionalString(value.$id) && IsProperties(value.properties) && IsAdditionalProperties(value.additionalProperties) && IsOptionalNumber(value.minProperties) && IsOptionalNumber(value.maxProperties);
}
function IsPromise3(value) {
  return IsKindOf2(value, "Promise") && value.type === "Promise" && IsOptionalString(value.$id) && IsSchema2(value.item);
}
function IsRecord2(value) {
  return IsKindOf2(value, "Record") && value.type === "object" && IsOptionalString(value.$id) && IsAdditionalProperties(value.additionalProperties) && IsObject(value.patternProperties) && ((schema) => {
    const keys = Object.getOwnPropertyNames(schema.patternProperties);
    return keys.length === 1 && IsPattern(keys[0]) && IsObject(schema.patternProperties) && IsSchema2(schema.patternProperties[keys[0]]);
  })(value);
}
function IsRecursive(value) {
  return IsObject(value) && Hint in value && value[Hint] === "Recursive";
}
function IsRef2(value) {
  return IsKindOf2(value, "Ref") && IsOptionalString(value.$id) && IsString(value.$ref);
}
function IsRegExp3(value) {
  return IsKindOf2(value, "RegExp") && IsOptionalString(value.$id) && IsString(value.source) && IsString(value.flags) && IsOptionalNumber(value.maxLength) && IsOptionalNumber(value.minLength);
}
function IsString4(value) {
  return IsKindOf2(value, "String") && value.type === "string" && IsOptionalString(value.$id) && IsOptionalNumber(value.minLength) && IsOptionalNumber(value.maxLength) && IsOptionalPattern(value.pattern) && IsOptionalFormat(value.format);
}
function IsSymbol4(value) {
  return IsKindOf2(value, "Symbol") && value.type === "symbol" && IsOptionalString(value.$id);
}
function IsTemplateLiteral2(value) {
  return IsKindOf2(value, "TemplateLiteral") && value.type === "string" && IsString(value.pattern) && value.pattern[0] === "^" && value.pattern[value.pattern.length - 1] === "$";
}
function IsThis2(value) {
  return IsKindOf2(value, "This") && IsOptionalString(value.$id) && IsString(value.$ref);
}
function IsTransform2(value) {
  return IsObject(value) && TransformKind in value;
}
function IsTuple2(value) {
  return IsKindOf2(value, "Tuple") && value.type === "array" && IsOptionalString(value.$id) && IsNumber(value.minItems) && IsNumber(value.maxItems) && value.minItems === value.maxItems && // empty
  (IsUndefined(value.items) && IsUndefined(value.additionalItems) && value.minItems === 0 || IsArray(value.items) && value.items.every((schema) => IsSchema2(schema)));
}
function IsUndefined4(value) {
  return IsKindOf2(value, "Undefined") && value.type === "undefined" && IsOptionalString(value.$id);
}
function IsUnionLiteral(value) {
  return IsUnion2(value) && value.anyOf.every((schema) => IsLiteralString(schema) || IsLiteralNumber(schema));
}
function IsUnion2(value) {
  return IsKindOf2(value, "Union") && IsOptionalString(value.$id) && IsObject(value) && IsArray(value.anyOf) && value.anyOf.every((schema) => IsSchema2(schema));
}
function IsUint8Array4(value) {
  return IsKindOf2(value, "Uint8Array") && value.type === "Uint8Array" && IsOptionalString(value.$id) && IsOptionalNumber(value.minByteLength) && IsOptionalNumber(value.maxByteLength);
}
function IsUnknown2(value) {
  return IsKindOf2(value, "Unknown") && IsOptionalString(value.$id);
}
function IsUnsafe2(value) {
  return IsKindOf2(value, "Unsafe");
}
function IsVoid2(value) {
  return IsKindOf2(value, "Void") && value.type === "void" && IsOptionalString(value.$id);
}
function IsKind2(value) {
  return IsObject(value) && Kind in value && IsString(value[Kind]) && !KnownTypes.includes(value[Kind]);
}
function IsSchema2(value) {
  return IsObject(value) && (IsAny2(value) || IsArgument2(value) || IsArray4(value) || IsBoolean4(value) || IsBigInt4(value) || IsAsyncIterator4(value) || IsComputed2(value) || IsConstructor2(value) || IsDate4(value) || IsFunction4(value) || IsInteger3(value) || IsIntersect2(value) || IsIterator4(value) || IsLiteral2(value) || IsMappedKey2(value) || IsMappedResult2(value) || IsNever2(value) || IsNot2(value) || IsNull4(value) || IsNumber4(value) || IsObject4(value) || IsPromise3(value) || IsRecord2(value) || IsRef2(value) || IsRegExp3(value) || IsString4(value) || IsSymbol4(value) || IsTemplateLiteral2(value) || IsThis2(value) || IsTuple2(value) || IsUndefined4(value) || IsUnion2(value) || IsUint8Array4(value) || IsUnknown2(value) || IsUnsafe2(value) || IsVoid2(value) || IsKind2(value));
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/patterns/patterns.mjs
var PatternBoolean = "(true|false)";
var PatternNumber = "(0|[1-9][0-9]*)";
var PatternString = "(.*)";
var PatternNever = "(?!.*)";
var PatternBooleanExact = `^${PatternBoolean}$`;
var PatternNumberExact = `^${PatternNumber}$`;
var PatternStringExact = `^${PatternString}$`;
var PatternNeverExact = `^${PatternNever}$`;

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/registry/format.mjs
var format_exports = {};
__export(format_exports, {
  Clear: () => Clear,
  Delete: () => Delete,
  Entries: () => Entries,
  Get: () => Get,
  Has: () => Has,
  Set: () => Set2
});
var map = /* @__PURE__ */ new Map();
function Entries() {
  return new Map(map);
}
function Clear() {
  return map.clear();
}
function Delete(format) {
  return map.delete(format);
}
function Has(format) {
  return map.has(format);
}
function Set2(format, func) {
  map.set(format, func);
}
function Get(format) {
  return map.get(format);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/registry/type.mjs
var type_exports2 = {};
__export(type_exports2, {
  Clear: () => Clear2,
  Delete: () => Delete2,
  Entries: () => Entries2,
  Get: () => Get2,
  Has: () => Has2,
  Set: () => Set3
});
var map2 = /* @__PURE__ */ new Map();
function Entries2() {
  return new Map(map2);
}
function Clear2() {
  return map2.clear();
}
function Delete2(kind) {
  return map2.delete(kind);
}
function Has2(kind) {
  return map2.has(kind);
}
function Set3(kind, func) {
  map2.set(kind, func);
}
function Get2(kind) {
  return map2.get(kind);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/sets/set.mjs
function SetIncludes(T, S) {
  return T.includes(S);
}
function SetDistinct(T) {
  return [...new Set(T)];
}
function SetIntersect(T, S) {
  return T.filter((L) => S.includes(L));
}
function SetIntersectManyResolve(T, Init) {
  return T.reduce((Acc, L) => {
    return SetIntersect(Acc, L);
  }, Init);
}
function SetIntersectMany(T) {
  return T.length === 1 ? T[0] : T.length > 1 ? SetIntersectManyResolve(T.slice(1), T[0]) : [];
}
function SetUnionMany(T) {
  const Acc = [];
  for (const L of T)
    Acc.push(...L);
  return Acc;
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/any/any.mjs
function Any(options) {
  return CreateType({ [Kind]: "Any" }, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/array/array.mjs
function Array2(items, options) {
  return CreateType({ [Kind]: "Array", type: "array", items }, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/argument/argument.mjs
function Argument(index) {
  return CreateType({ [Kind]: "Argument", index });
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/async-iterator/async-iterator.mjs
function AsyncIterator(items, options) {
  return CreateType({ [Kind]: "AsyncIterator", type: "AsyncIterator", items }, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/computed/computed.mjs
function Computed(target, parameters, options) {
  return CreateType({ [Kind]: "Computed", target, parameters }, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/discard/discard.mjs
function DiscardKey(value, key) {
  const { [key]: _, ...rest } = value;
  return rest;
}
function Discard(value, keys) {
  return keys.reduce((acc, key) => DiscardKey(acc, key), value);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/never/never.mjs
function Never(options) {
  return CreateType({ [Kind]: "Never", not: {} }, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/mapped/mapped-result.mjs
function MappedResult(properties) {
  return CreateType({
    [Kind]: "MappedResult",
    properties
  });
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/constructor/constructor.mjs
function Constructor(parameters, returns, options) {
  return CreateType({ [Kind]: "Constructor", type: "Constructor", parameters, returns }, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/function/function.mjs
function Function(parameters, returns, options) {
  return CreateType({ [Kind]: "Function", type: "Function", parameters, returns }, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/union/union-create.mjs
function UnionCreate(T, options) {
  return CreateType({ [Kind]: "Union", anyOf: T }, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/union/union-evaluated.mjs
function IsUnionOptional(types) {
  return types.some((type) => IsOptional(type));
}
function RemoveOptionalFromRest(types) {
  return types.map((left) => IsOptional(left) ? RemoveOptionalFromType(left) : left);
}
function RemoveOptionalFromType(T) {
  return Discard(T, [OptionalKind]);
}
function ResolveUnion(types, options) {
  const isOptional = IsUnionOptional(types);
  return isOptional ? Optional(UnionCreate(RemoveOptionalFromRest(types), options)) : UnionCreate(RemoveOptionalFromRest(types), options);
}
function UnionEvaluated(T, options) {
  return T.length === 1 ? CreateType(T[0], options) : T.length === 0 ? Never(options) : ResolveUnion(T, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/union/union.mjs
function Union(types, options) {
  return types.length === 0 ? Never(options) : types.length === 1 ? CreateType(types[0], options) : UnionCreate(types, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/template-literal/parse.mjs
var TemplateLiteralParserError = class extends TypeBoxError {
};
function Unescape(pattern) {
  return pattern.replace(/\\\$/g, "$").replace(/\\\*/g, "*").replace(/\\\^/g, "^").replace(/\\\|/g, "|").replace(/\\\(/g, "(").replace(/\\\)/g, ")");
}
function IsNonEscaped(pattern, index, char) {
  return pattern[index] === char && pattern.charCodeAt(index - 1) !== 92;
}
function IsOpenParen(pattern, index) {
  return IsNonEscaped(pattern, index, "(");
}
function IsCloseParen(pattern, index) {
  return IsNonEscaped(pattern, index, ")");
}
function IsSeparator(pattern, index) {
  return IsNonEscaped(pattern, index, "|");
}
function IsGroup(pattern) {
  if (!(IsOpenParen(pattern, 0) && IsCloseParen(pattern, pattern.length - 1)))
    return false;
  let count = 0;
  for (let index = 0; index < pattern.length; index++) {
    if (IsOpenParen(pattern, index))
      count += 1;
    if (IsCloseParen(pattern, index))
      count -= 1;
    if (count === 0 && index !== pattern.length - 1)
      return false;
  }
  return true;
}
function InGroup(pattern) {
  return pattern.slice(1, pattern.length - 1);
}
function IsPrecedenceOr(pattern) {
  let count = 0;
  for (let index = 0; index < pattern.length; index++) {
    if (IsOpenParen(pattern, index))
      count += 1;
    if (IsCloseParen(pattern, index))
      count -= 1;
    if (IsSeparator(pattern, index) && count === 0)
      return true;
  }
  return false;
}
function IsPrecedenceAnd(pattern) {
  for (let index = 0; index < pattern.length; index++) {
    if (IsOpenParen(pattern, index))
      return true;
  }
  return false;
}
function Or(pattern) {
  let [count, start] = [0, 0];
  const expressions = [];
  for (let index = 0; index < pattern.length; index++) {
    if (IsOpenParen(pattern, index))
      count += 1;
    if (IsCloseParen(pattern, index))
      count -= 1;
    if (IsSeparator(pattern, index) && count === 0) {
      const range2 = pattern.slice(start, index);
      if (range2.length > 0)
        expressions.push(TemplateLiteralParse(range2));
      start = index + 1;
    }
  }
  const range = pattern.slice(start);
  if (range.length > 0)
    expressions.push(TemplateLiteralParse(range));
  if (expressions.length === 0)
    return { type: "const", const: "" };
  if (expressions.length === 1)
    return expressions[0];
  return { type: "or", expr: expressions };
}
function And(pattern) {
  function Group(value, index) {
    if (!IsOpenParen(value, index))
      throw new TemplateLiteralParserError(`TemplateLiteralParser: Index must point to open parens`);
    let count = 0;
    for (let scan = index; scan < value.length; scan++) {
      if (IsOpenParen(value, scan))
        count += 1;
      if (IsCloseParen(value, scan))
        count -= 1;
      if (count === 0)
        return [index, scan];
    }
    throw new TemplateLiteralParserError(`TemplateLiteralParser: Unclosed group parens in expression`);
  }
  function Range(pattern2, index) {
    for (let scan = index; scan < pattern2.length; scan++) {
      if (IsOpenParen(pattern2, scan))
        return [index, scan];
    }
    return [index, pattern2.length];
  }
  const expressions = [];
  for (let index = 0; index < pattern.length; index++) {
    if (IsOpenParen(pattern, index)) {
      const [start, end] = Group(pattern, index);
      const range = pattern.slice(start, end + 1);
      expressions.push(TemplateLiteralParse(range));
      index = end;
    } else {
      const [start, end] = Range(pattern, index);
      const range = pattern.slice(start, end);
      if (range.length > 0)
        expressions.push(TemplateLiteralParse(range));
      index = end - 1;
    }
  }
  return expressions.length === 0 ? { type: "const", const: "" } : expressions.length === 1 ? expressions[0] : { type: "and", expr: expressions };
}
function TemplateLiteralParse(pattern) {
  return IsGroup(pattern) ? TemplateLiteralParse(InGroup(pattern)) : IsPrecedenceOr(pattern) ? Or(pattern) : IsPrecedenceAnd(pattern) ? And(pattern) : { type: "const", const: Unescape(pattern) };
}
function TemplateLiteralParseExact(pattern) {
  return TemplateLiteralParse(pattern.slice(1, pattern.length - 1));
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/template-literal/finite.mjs
var TemplateLiteralFiniteError = class extends TypeBoxError {
};
function IsNumberExpression(expression) {
  return expression.type === "or" && expression.expr.length === 2 && expression.expr[0].type === "const" && expression.expr[0].const === "0" && expression.expr[1].type === "const" && expression.expr[1].const === "[1-9][0-9]*";
}
function IsBooleanExpression(expression) {
  return expression.type === "or" && expression.expr.length === 2 && expression.expr[0].type === "const" && expression.expr[0].const === "true" && expression.expr[1].type === "const" && expression.expr[1].const === "false";
}
function IsStringExpression(expression) {
  return expression.type === "const" && expression.const === ".*";
}
function IsTemplateLiteralExpressionFinite(expression) {
  return IsNumberExpression(expression) || IsStringExpression(expression) ? false : IsBooleanExpression(expression) ? true : expression.type === "and" ? expression.expr.every((expr) => IsTemplateLiteralExpressionFinite(expr)) : expression.type === "or" ? expression.expr.every((expr) => IsTemplateLiteralExpressionFinite(expr)) : expression.type === "const" ? true : (() => {
    throw new TemplateLiteralFiniteError(`Unknown expression type`);
  })();
}
function IsTemplateLiteralFinite(schema) {
  const expression = TemplateLiteralParseExact(schema.pattern);
  return IsTemplateLiteralExpressionFinite(expression);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/template-literal/generate.mjs
var TemplateLiteralGenerateError = class extends TypeBoxError {
};
function* GenerateReduce(buffer) {
  if (buffer.length === 1)
    return yield* buffer[0];
  for (const left of buffer[0]) {
    for (const right of GenerateReduce(buffer.slice(1))) {
      yield `${left}${right}`;
    }
  }
}
function* GenerateAnd(expression) {
  return yield* GenerateReduce(expression.expr.map((expr) => [...TemplateLiteralExpressionGenerate(expr)]));
}
function* GenerateOr(expression) {
  for (const expr of expression.expr)
    yield* TemplateLiteralExpressionGenerate(expr);
}
function* GenerateConst(expression) {
  return yield expression.const;
}
function* TemplateLiteralExpressionGenerate(expression) {
  return expression.type === "and" ? yield* GenerateAnd(expression) : expression.type === "or" ? yield* GenerateOr(expression) : expression.type === "const" ? yield* GenerateConst(expression) : (() => {
    throw new TemplateLiteralGenerateError("Unknown expression");
  })();
}
function TemplateLiteralGenerate(schema) {
  const expression = TemplateLiteralParseExact(schema.pattern);
  return IsTemplateLiteralExpressionFinite(expression) ? [...TemplateLiteralExpressionGenerate(expression)] : [];
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/literal/literal.mjs
function Literal(value, options) {
  return CreateType({
    [Kind]: "Literal",
    const: value,
    type: typeof value
  }, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/boolean/boolean.mjs
function Boolean2(options) {
  return CreateType({ [Kind]: "Boolean", type: "boolean" }, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/bigint/bigint.mjs
function BigInt2(options) {
  return CreateType({ [Kind]: "BigInt", type: "bigint" }, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/number/number.mjs
function Number2(options) {
  return CreateType({ [Kind]: "Number", type: "number" }, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/string/string.mjs
function String2(options) {
  return CreateType({ [Kind]: "String", type: "string" }, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/template-literal/syntax.mjs
function* FromUnion(syntax) {
  const trim = syntax.trim().replace(/"|'/g, "");
  return trim === "boolean" ? yield Boolean2() : trim === "number" ? yield Number2() : trim === "bigint" ? yield BigInt2() : trim === "string" ? yield String2() : yield (() => {
    const literals = trim.split("|").map((literal) => Literal(literal.trim()));
    return literals.length === 0 ? Never() : literals.length === 1 ? literals[0] : UnionEvaluated(literals);
  })();
}
function* FromTerminal(syntax) {
  if (syntax[1] !== "{") {
    const L = Literal("$");
    const R = FromSyntax(syntax.slice(1));
    return yield* [L, ...R];
  }
  for (let i = 2; i < syntax.length; i++) {
    if (syntax[i] === "}") {
      const L = FromUnion(syntax.slice(2, i));
      const R = FromSyntax(syntax.slice(i + 1));
      return yield* [...L, ...R];
    }
  }
  yield Literal(syntax);
}
function* FromSyntax(syntax) {
  for (let i = 0; i < syntax.length; i++) {
    if (syntax[i] === "$") {
      const L = Literal(syntax.slice(0, i));
      const R = FromTerminal(syntax.slice(i));
      return yield* [L, ...R];
    }
  }
  yield Literal(syntax);
}
function TemplateLiteralSyntax(syntax) {
  return [...FromSyntax(syntax)];
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/template-literal/pattern.mjs
var TemplateLiteralPatternError = class extends TypeBoxError {
};
function Escape(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Visit2(schema, acc) {
  return IsTemplateLiteral(schema) ? schema.pattern.slice(1, schema.pattern.length - 1) : IsUnion(schema) ? `(${schema.anyOf.map((schema2) => Visit2(schema2, acc)).join("|")})` : IsNumber3(schema) ? `${acc}${PatternNumber}` : IsInteger2(schema) ? `${acc}${PatternNumber}` : IsBigInt3(schema) ? `${acc}${PatternNumber}` : IsString3(schema) ? `${acc}${PatternString}` : IsLiteral(schema) ? `${acc}${Escape(schema.const.toString())}` : IsBoolean3(schema) ? `${acc}${PatternBoolean}` : (() => {
    throw new TemplateLiteralPatternError(`Unexpected Kind '${schema[Kind]}'`);
  })();
}
function TemplateLiteralPattern(kinds) {
  return `^${kinds.map((schema) => Visit2(schema, "")).join("")}$`;
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/template-literal/union.mjs
function TemplateLiteralToUnion(schema) {
  const R = TemplateLiteralGenerate(schema);
  const L = R.map((S) => Literal(S));
  return UnionEvaluated(L);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/template-literal/template-literal.mjs
function TemplateLiteral(unresolved, options) {
  const pattern = IsString(unresolved) ? TemplateLiteralPattern(TemplateLiteralSyntax(unresolved)) : TemplateLiteralPattern(unresolved);
  return CreateType({ [Kind]: "TemplateLiteral", type: "string", pattern }, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/indexed/indexed-property-keys.mjs
function FromTemplateLiteral(templateLiteral) {
  const keys = TemplateLiteralGenerate(templateLiteral);
  return keys.map((key) => key.toString());
}
function FromUnion2(types) {
  const result = [];
  for (const type of types)
    result.push(...IndexPropertyKeys(type));
  return result;
}
function FromLiteral(literalValue) {
  return [literalValue.toString()];
}
function IndexPropertyKeys(type) {
  return [...new Set(IsTemplateLiteral(type) ? FromTemplateLiteral(type) : IsUnion(type) ? FromUnion2(type.anyOf) : IsLiteral(type) ? FromLiteral(type.const) : IsNumber3(type) ? ["[number]"] : IsInteger2(type) ? ["[number]"] : [])];
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/indexed/indexed-from-mapped-result.mjs
function FromProperties(type, properties, options) {
  const result = {};
  for (const K2 of Object.getOwnPropertyNames(properties)) {
    result[K2] = Index(type, IndexPropertyKeys(properties[K2]), options);
  }
  return result;
}
function FromMappedResult(type, mappedResult, options) {
  return FromProperties(type, mappedResult.properties, options);
}
function IndexFromMappedResult(type, mappedResult, options) {
  const properties = FromMappedResult(type, mappedResult, options);
  return MappedResult(properties);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/indexed/indexed.mjs
function FromRest(types, key) {
  return types.map((type) => IndexFromPropertyKey(type, key));
}
function FromIntersectRest(types) {
  return types.filter((type) => !IsNever(type));
}
function FromIntersect(types, key) {
  return IntersectEvaluated(FromIntersectRest(FromRest(types, key)));
}
function FromUnionRest(types) {
  return types.some((L) => IsNever(L)) ? [] : types;
}
function FromUnion3(types, key) {
  return UnionEvaluated(FromUnionRest(FromRest(types, key)));
}
function FromTuple(types, key) {
  return key in types ? types[key] : key === "[number]" ? UnionEvaluated(types) : Never();
}
function FromArray(type, key) {
  return key === "[number]" ? type : Never();
}
function FromProperty(properties, propertyKey) {
  return propertyKey in properties ? properties[propertyKey] : Never();
}
function IndexFromPropertyKey(type, propertyKey) {
  return IsIntersect(type) ? FromIntersect(type.allOf, propertyKey) : IsUnion(type) ? FromUnion3(type.anyOf, propertyKey) : IsTuple(type) ? FromTuple(type.items ?? [], propertyKey) : IsArray3(type) ? FromArray(type.items, propertyKey) : IsObject3(type) ? FromProperty(type.properties, propertyKey) : Never();
}
function IndexFromPropertyKeys(type, propertyKeys) {
  return propertyKeys.map((propertyKey) => IndexFromPropertyKey(type, propertyKey));
}
function FromSchema(type, propertyKeys) {
  return UnionEvaluated(IndexFromPropertyKeys(type, propertyKeys));
}
function Index(type, key, options) {
  if (IsRef(type) || IsRef(key)) {
    const error = `Index types using Ref parameters require both Type and Key to be of TSchema`;
    if (!IsSchema(type) || !IsSchema(key))
      throw new TypeBoxError(error);
    return Computed("Index", [type, key]);
  }
  if (IsMappedResult(key))
    return IndexFromMappedResult(type, key, options);
  if (IsMappedKey(key))
    return IndexFromMappedKey(type, key, options);
  return CreateType(IsSchema(key) ? FromSchema(type, IndexPropertyKeys(key)) : FromSchema(type, key), options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/indexed/indexed-from-mapped-key.mjs
function MappedIndexPropertyKey(type, key, options) {
  return { [key]: Index(type, [key], Clone(options)) };
}
function MappedIndexPropertyKeys(type, propertyKeys, options) {
  return propertyKeys.reduce((result, left) => {
    return { ...result, ...MappedIndexPropertyKey(type, left, options) };
  }, {});
}
function MappedIndexProperties(type, mappedKey, options) {
  return MappedIndexPropertyKeys(type, mappedKey.keys, options);
}
function IndexFromMappedKey(type, mappedKey, options) {
  const properties = MappedIndexProperties(type, mappedKey, options);
  return MappedResult(properties);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/iterator/iterator.mjs
function Iterator(items, options) {
  return CreateType({ [Kind]: "Iterator", type: "Iterator", items }, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/object/object.mjs
function RequiredKeys(properties) {
  const keys = [];
  for (let key in properties) {
    if (!IsOptional(properties[key]))
      keys.push(key);
  }
  return keys;
}
function _Object(properties, options) {
  const required = RequiredKeys(properties);
  const schematic = required.length > 0 ? { [Kind]: "Object", type: "object", properties, required } : { [Kind]: "Object", type: "object", properties };
  return CreateType(schematic, options);
}
var Object2 = _Object;

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/promise/promise.mjs
function Promise2(item, options) {
  return CreateType({ [Kind]: "Promise", type: "Promise", item }, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/readonly/readonly.mjs
function RemoveReadonly(schema) {
  return CreateType(Discard(schema, [ReadonlyKind]));
}
function AddReadonly(schema) {
  return CreateType({ ...schema, [ReadonlyKind]: "Readonly" });
}
function ReadonlyWithFlag(schema, F) {
  return F === false ? RemoveReadonly(schema) : AddReadonly(schema);
}
function Readonly(schema, enable) {
  const F = enable ?? true;
  return IsMappedResult(schema) ? ReadonlyFromMappedResult(schema, F) : ReadonlyWithFlag(schema, F);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/readonly/readonly-from-mapped-result.mjs
function FromProperties2(K, F) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(K))
    Acc[K2] = Readonly(K[K2], F);
  return Acc;
}
function FromMappedResult2(R, F) {
  return FromProperties2(R.properties, F);
}
function ReadonlyFromMappedResult(R, F) {
  const P = FromMappedResult2(R, F);
  return MappedResult(P);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/tuple/tuple.mjs
function Tuple(types, options) {
  return CreateType(types.length > 0 ? { [Kind]: "Tuple", type: "array", items: types, additionalItems: false, minItems: types.length, maxItems: types.length } : { [Kind]: "Tuple", type: "array", minItems: types.length, maxItems: types.length }, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/mapped/mapped.mjs
function FromMappedResult3(K, P) {
  return K in P ? FromSchemaType(K, P[K]) : MappedResult(P);
}
function MappedKeyToKnownMappedResultProperties(K) {
  return { [K]: Literal(K) };
}
function MappedKeyToUnknownMappedResultProperties(P) {
  const Acc = {};
  for (const L of P)
    Acc[L] = Literal(L);
  return Acc;
}
function MappedKeyToMappedResultProperties(K, P) {
  return SetIncludes(P, K) ? MappedKeyToKnownMappedResultProperties(K) : MappedKeyToUnknownMappedResultProperties(P);
}
function FromMappedKey(K, P) {
  const R = MappedKeyToMappedResultProperties(K, P);
  return FromMappedResult3(K, R);
}
function FromRest2(K, T) {
  return T.map((L) => FromSchemaType(K, L));
}
function FromProperties3(K, T) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(T))
    Acc[K2] = FromSchemaType(K, T[K2]);
  return Acc;
}
function FromSchemaType(K, T) {
  const options = { ...T };
  return (
    // unevaluated modifier types
    IsOptional(T) ? Optional(FromSchemaType(K, Discard(T, [OptionalKind]))) : IsReadonly(T) ? Readonly(FromSchemaType(K, Discard(T, [ReadonlyKind]))) : (
      // unevaluated mapped types
      IsMappedResult(T) ? FromMappedResult3(K, T.properties) : IsMappedKey(T) ? FromMappedKey(K, T.keys) : (
        // unevaluated types
        IsConstructor(T) ? Constructor(FromRest2(K, T.parameters), FromSchemaType(K, T.returns), options) : IsFunction3(T) ? Function(FromRest2(K, T.parameters), FromSchemaType(K, T.returns), options) : IsAsyncIterator3(T) ? AsyncIterator(FromSchemaType(K, T.items), options) : IsIterator3(T) ? Iterator(FromSchemaType(K, T.items), options) : IsIntersect(T) ? Intersect(FromRest2(K, T.allOf), options) : IsUnion(T) ? Union(FromRest2(K, T.anyOf), options) : IsTuple(T) ? Tuple(FromRest2(K, T.items ?? []), options) : IsObject3(T) ? Object2(FromProperties3(K, T.properties), options) : IsArray3(T) ? Array2(FromSchemaType(K, T.items), options) : IsPromise2(T) ? Promise2(FromSchemaType(K, T.item), options) : T
      )
    )
  );
}
function MappedFunctionReturnType(K, T) {
  const Acc = {};
  for (const L of K)
    Acc[L] = FromSchemaType(L, T);
  return Acc;
}
function Mapped(key, map3, options) {
  const K = IsSchema(key) ? IndexPropertyKeys(key) : key;
  const RT = map3({ [Kind]: "MappedKey", keys: K });
  const R = MappedFunctionReturnType(K, RT);
  return Object2(R, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/optional/optional.mjs
function RemoveOptional(schema) {
  return CreateType(Discard(schema, [OptionalKind]));
}
function AddOptional(schema) {
  return CreateType({ ...schema, [OptionalKind]: "Optional" });
}
function OptionalWithFlag(schema, F) {
  return F === false ? RemoveOptional(schema) : AddOptional(schema);
}
function Optional(schema, enable) {
  const F = enable ?? true;
  return IsMappedResult(schema) ? OptionalFromMappedResult(schema, F) : OptionalWithFlag(schema, F);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/optional/optional-from-mapped-result.mjs
function FromProperties4(P, F) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(P))
    Acc[K2] = Optional(P[K2], F);
  return Acc;
}
function FromMappedResult4(R, F) {
  return FromProperties4(R.properties, F);
}
function OptionalFromMappedResult(R, F) {
  const P = FromMappedResult4(R, F);
  return MappedResult(P);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/intersect/intersect-create.mjs
function IntersectCreate(T, options = {}) {
  const allObjects = T.every((schema) => IsObject3(schema));
  const clonedUnevaluatedProperties = IsSchema(options.unevaluatedProperties) ? { unevaluatedProperties: options.unevaluatedProperties } : {};
  return CreateType(options.unevaluatedProperties === false || IsSchema(options.unevaluatedProperties) || allObjects ? { ...clonedUnevaluatedProperties, [Kind]: "Intersect", type: "object", allOf: T } : { ...clonedUnevaluatedProperties, [Kind]: "Intersect", allOf: T }, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/intersect/intersect-evaluated.mjs
function IsIntersectOptional(types) {
  return types.every((left) => IsOptional(left));
}
function RemoveOptionalFromType2(type) {
  return Discard(type, [OptionalKind]);
}
function RemoveOptionalFromRest2(types) {
  return types.map((left) => IsOptional(left) ? RemoveOptionalFromType2(left) : left);
}
function ResolveIntersect(types, options) {
  return IsIntersectOptional(types) ? Optional(IntersectCreate(RemoveOptionalFromRest2(types), options)) : IntersectCreate(RemoveOptionalFromRest2(types), options);
}
function IntersectEvaluated(types, options = {}) {
  if (types.length === 1)
    return CreateType(types[0], options);
  if (types.length === 0)
    return Never(options);
  if (types.some((schema) => IsTransform(schema)))
    throw new Error("Cannot intersect transform types");
  return ResolveIntersect(types, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/intersect/intersect.mjs
function Intersect(types, options) {
  if (types.length === 1)
    return CreateType(types[0], options);
  if (types.length === 0)
    return Never(options);
  if (types.some((schema) => IsTransform(schema)))
    throw new Error("Cannot intersect transform types");
  return IntersectCreate(types, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/ref/ref.mjs
function Ref(...args) {
  const [$ref, options] = typeof args[0] === "string" ? [args[0], args[1]] : [args[0].$id, args[1]];
  if (typeof $ref !== "string")
    throw new TypeBoxError("Ref: $ref must be a string");
  return CreateType({ [Kind]: "Ref", $ref }, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/awaited/awaited.mjs
function FromComputed(target, parameters) {
  return Computed("Awaited", [Computed(target, parameters)]);
}
function FromRef($ref) {
  return Computed("Awaited", [Ref($ref)]);
}
function FromIntersect2(types) {
  return Intersect(FromRest3(types));
}
function FromUnion4(types) {
  return Union(FromRest3(types));
}
function FromPromise(type) {
  return Awaited(type);
}
function FromRest3(types) {
  return types.map((type) => Awaited(type));
}
function Awaited(type, options) {
  return CreateType(IsComputed(type) ? FromComputed(type.target, type.parameters) : IsIntersect(type) ? FromIntersect2(type.allOf) : IsUnion(type) ? FromUnion4(type.anyOf) : IsPromise2(type) ? FromPromise(type.item) : IsRef(type) ? FromRef(type.$ref) : type, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/keyof/keyof-property-keys.mjs
function FromRest4(types) {
  const result = [];
  for (const L of types)
    result.push(KeyOfPropertyKeys(L));
  return result;
}
function FromIntersect3(types) {
  const propertyKeysArray = FromRest4(types);
  const propertyKeys = SetUnionMany(propertyKeysArray);
  return propertyKeys;
}
function FromUnion5(types) {
  const propertyKeysArray = FromRest4(types);
  const propertyKeys = SetIntersectMany(propertyKeysArray);
  return propertyKeys;
}
function FromTuple2(types) {
  return types.map((_, indexer) => indexer.toString());
}
function FromArray2(_) {
  return ["[number]"];
}
function FromProperties5(T) {
  return globalThis.Object.getOwnPropertyNames(T);
}
function FromPatternProperties(patternProperties) {
  if (!includePatternProperties)
    return [];
  const patternPropertyKeys = globalThis.Object.getOwnPropertyNames(patternProperties);
  return patternPropertyKeys.map((key) => {
    return key[0] === "^" && key[key.length - 1] === "$" ? key.slice(1, key.length - 1) : key;
  });
}
function KeyOfPropertyKeys(type) {
  return IsIntersect(type) ? FromIntersect3(type.allOf) : IsUnion(type) ? FromUnion5(type.anyOf) : IsTuple(type) ? FromTuple2(type.items ?? []) : IsArray3(type) ? FromArray2(type.items) : IsObject3(type) ? FromProperties5(type.properties) : IsRecord(type) ? FromPatternProperties(type.patternProperties) : [];
}
var includePatternProperties = false;
function KeyOfPattern(schema) {
  includePatternProperties = true;
  const keys = KeyOfPropertyKeys(schema);
  includePatternProperties = false;
  const pattern = keys.map((key) => `(${key})`);
  return `^(${pattern.join("|")})$`;
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/keyof/keyof.mjs
function FromComputed2(target, parameters) {
  return Computed("KeyOf", [Computed(target, parameters)]);
}
function FromRef2($ref) {
  return Computed("KeyOf", [Ref($ref)]);
}
function KeyOfFromType(type, options) {
  const propertyKeys = KeyOfPropertyKeys(type);
  const propertyKeyTypes = KeyOfPropertyKeysToRest(propertyKeys);
  const result = UnionEvaluated(propertyKeyTypes);
  return CreateType(result, options);
}
function KeyOfPropertyKeysToRest(propertyKeys) {
  return propertyKeys.map((L) => L === "[number]" ? Number2() : Literal(L));
}
function KeyOf(type, options) {
  return IsComputed(type) ? FromComputed2(type.target, type.parameters) : IsRef(type) ? FromRef2(type.$ref) : IsMappedResult(type) ? KeyOfFromMappedResult(type, options) : KeyOfFromType(type, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/keyof/keyof-from-mapped-result.mjs
function FromProperties6(properties, options) {
  const result = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(properties))
    result[K2] = KeyOf(properties[K2], Clone(options));
  return result;
}
function FromMappedResult5(mappedResult, options) {
  return FromProperties6(mappedResult.properties, options);
}
function KeyOfFromMappedResult(mappedResult, options) {
  const properties = FromMappedResult5(mappedResult, options);
  return MappedResult(properties);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/keyof/keyof-property-entries.mjs
function KeyOfPropertyEntries(schema) {
  const keys = KeyOfPropertyKeys(schema);
  const schemas = IndexFromPropertyKeys(schema, keys);
  return keys.map((_, index) => [keys[index], schemas[index]]);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/composite/composite.mjs
function CompositeKeys(T) {
  const Acc = [];
  for (const L of T)
    Acc.push(...KeyOfPropertyKeys(L));
  return SetDistinct(Acc);
}
function FilterNever(T) {
  return T.filter((L) => !IsNever(L));
}
function CompositeProperty(T, K) {
  const Acc = [];
  for (const L of T)
    Acc.push(...IndexFromPropertyKeys(L, [K]));
  return FilterNever(Acc);
}
function CompositeProperties(T, K) {
  const Acc = {};
  for (const L of K) {
    Acc[L] = IntersectEvaluated(CompositeProperty(T, L));
  }
  return Acc;
}
function Composite(T, options) {
  const K = CompositeKeys(T);
  const P = CompositeProperties(T, K);
  const R = Object2(P, options);
  return R;
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/date/date.mjs
function Date2(options) {
  return CreateType({ [Kind]: "Date", type: "Date" }, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/null/null.mjs
function Null(options) {
  return CreateType({ [Kind]: "Null", type: "null" }, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/symbol/symbol.mjs
function Symbol2(options) {
  return CreateType({ [Kind]: "Symbol", type: "symbol" }, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/undefined/undefined.mjs
function Undefined(options) {
  return CreateType({ [Kind]: "Undefined", type: "undefined" }, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/uint8array/uint8array.mjs
function Uint8Array2(options) {
  return CreateType({ [Kind]: "Uint8Array", type: "Uint8Array" }, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/unknown/unknown.mjs
function Unknown(options) {
  return CreateType({ [Kind]: "Unknown" }, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/const/const.mjs
function FromArray3(T) {
  return T.map((L) => FromValue(L, false));
}
function FromProperties7(value) {
  const Acc = {};
  for (const K of globalThis.Object.getOwnPropertyNames(value))
    Acc[K] = Readonly(FromValue(value[K], false));
  return Acc;
}
function ConditionalReadonly(T, root) {
  return root === true ? T : Readonly(T);
}
function FromValue(value, root) {
  return IsAsyncIterator(value) ? ConditionalReadonly(Any(), root) : IsIterator(value) ? ConditionalReadonly(Any(), root) : IsArray(value) ? Readonly(Tuple(FromArray3(value))) : IsUint8Array(value) ? Uint8Array2() : IsDate(value) ? Date2() : IsObject(value) ? ConditionalReadonly(Object2(FromProperties7(value)), root) : IsFunction(value) ? ConditionalReadonly(Function([], Unknown()), root) : IsUndefined(value) ? Undefined() : IsNull(value) ? Null() : IsSymbol(value) ? Symbol2() : IsBigInt(value) ? BigInt2() : IsNumber(value) ? Literal(value) : IsBoolean(value) ? Literal(value) : IsString(value) ? Literal(value) : Object2({});
}
function Const(T, options) {
  return CreateType(FromValue(T, true), options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/constructor-parameters/constructor-parameters.mjs
function ConstructorParameters(schema, options) {
  return IsConstructor(schema) ? Tuple(schema.parameters, options) : Never(options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/enum/enum.mjs
function Enum(item, options) {
  if (IsUndefined(item))
    throw new Error("Enum undefined or empty");
  const values1 = globalThis.Object.getOwnPropertyNames(item).filter((key) => isNaN(key)).map((key) => item[key]);
  const values2 = [...new Set(values1)];
  const anyOf = values2.map((value) => Literal(value));
  return Union(anyOf, { ...options, [Hint]: "Enum" });
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/extends/extends-check.mjs
var ExtendsResolverError = class extends TypeBoxError {
};
var ExtendsResult;
(function(ExtendsResult2) {
  ExtendsResult2[ExtendsResult2["Union"] = 0] = "Union";
  ExtendsResult2[ExtendsResult2["True"] = 1] = "True";
  ExtendsResult2[ExtendsResult2["False"] = 2] = "False";
})(ExtendsResult || (ExtendsResult = {}));
function IntoBooleanResult(result) {
  return result === ExtendsResult.False ? result : ExtendsResult.True;
}
function Throw(message) {
  throw new ExtendsResolverError(message);
}
function IsStructuralRight(right) {
  return type_exports.IsNever(right) || type_exports.IsIntersect(right) || type_exports.IsUnion(right) || type_exports.IsUnknown(right) || type_exports.IsAny(right);
}
function StructuralRight(left, right) {
  return type_exports.IsNever(right) ? FromNeverRight(left, right) : type_exports.IsIntersect(right) ? FromIntersectRight(left, right) : type_exports.IsUnion(right) ? FromUnionRight(left, right) : type_exports.IsUnknown(right) ? FromUnknownRight(left, right) : type_exports.IsAny(right) ? FromAnyRight(left, right) : Throw("StructuralRight");
}
function FromAnyRight(left, right) {
  return ExtendsResult.True;
}
function FromAny(left, right) {
  return type_exports.IsIntersect(right) ? FromIntersectRight(left, right) : type_exports.IsUnion(right) && right.anyOf.some((schema) => type_exports.IsAny(schema) || type_exports.IsUnknown(schema)) ? ExtendsResult.True : type_exports.IsUnion(right) ? ExtendsResult.Union : type_exports.IsUnknown(right) ? ExtendsResult.True : type_exports.IsAny(right) ? ExtendsResult.True : ExtendsResult.Union;
}
function FromArrayRight(left, right) {
  return type_exports.IsUnknown(left) ? ExtendsResult.False : type_exports.IsAny(left) ? ExtendsResult.Union : type_exports.IsNever(left) ? ExtendsResult.True : ExtendsResult.False;
}
function FromArray4(left, right) {
  return type_exports.IsObject(right) && IsObjectArrayLike(right) ? ExtendsResult.True : IsStructuralRight(right) ? StructuralRight(left, right) : !type_exports.IsArray(right) ? ExtendsResult.False : IntoBooleanResult(Visit3(left.items, right.items));
}
function FromAsyncIterator(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : !type_exports.IsAsyncIterator(right) ? ExtendsResult.False : IntoBooleanResult(Visit3(left.items, right.items));
}
function FromBigInt(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : type_exports.IsObject(right) ? FromObjectRight(left, right) : type_exports.IsRecord(right) ? FromRecordRight(left, right) : type_exports.IsBigInt(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromBooleanRight(left, right) {
  return type_exports.IsLiteralBoolean(left) ? ExtendsResult.True : type_exports.IsBoolean(left) ? ExtendsResult.True : ExtendsResult.False;
}
function FromBoolean(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : type_exports.IsObject(right) ? FromObjectRight(left, right) : type_exports.IsRecord(right) ? FromRecordRight(left, right) : type_exports.IsBoolean(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromConstructor(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : type_exports.IsObject(right) ? FromObjectRight(left, right) : !type_exports.IsConstructor(right) ? ExtendsResult.False : left.parameters.length > right.parameters.length ? ExtendsResult.False : !left.parameters.every((schema, index) => IntoBooleanResult(Visit3(right.parameters[index], schema)) === ExtendsResult.True) ? ExtendsResult.False : IntoBooleanResult(Visit3(left.returns, right.returns));
}
function FromDate(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : type_exports.IsObject(right) ? FromObjectRight(left, right) : type_exports.IsRecord(right) ? FromRecordRight(left, right) : type_exports.IsDate(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromFunction(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : type_exports.IsObject(right) ? FromObjectRight(left, right) : !type_exports.IsFunction(right) ? ExtendsResult.False : left.parameters.length > right.parameters.length ? ExtendsResult.False : !left.parameters.every((schema, index) => IntoBooleanResult(Visit3(right.parameters[index], schema)) === ExtendsResult.True) ? ExtendsResult.False : IntoBooleanResult(Visit3(left.returns, right.returns));
}
function FromIntegerRight(left, right) {
  return type_exports.IsLiteral(left) && value_exports.IsNumber(left.const) ? ExtendsResult.True : type_exports.IsNumber(left) || type_exports.IsInteger(left) ? ExtendsResult.True : ExtendsResult.False;
}
function FromInteger(left, right) {
  return type_exports.IsInteger(right) || type_exports.IsNumber(right) ? ExtendsResult.True : IsStructuralRight(right) ? StructuralRight(left, right) : type_exports.IsObject(right) ? FromObjectRight(left, right) : type_exports.IsRecord(right) ? FromRecordRight(left, right) : ExtendsResult.False;
}
function FromIntersectRight(left, right) {
  return right.allOf.every((schema) => Visit3(left, schema) === ExtendsResult.True) ? ExtendsResult.True : ExtendsResult.False;
}
function FromIntersect4(left, right) {
  return left.allOf.some((schema) => Visit3(schema, right) === ExtendsResult.True) ? ExtendsResult.True : ExtendsResult.False;
}
function FromIterator(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : !type_exports.IsIterator(right) ? ExtendsResult.False : IntoBooleanResult(Visit3(left.items, right.items));
}
function FromLiteral2(left, right) {
  return type_exports.IsLiteral(right) && right.const === left.const ? ExtendsResult.True : IsStructuralRight(right) ? StructuralRight(left, right) : type_exports.IsObject(right) ? FromObjectRight(left, right) : type_exports.IsRecord(right) ? FromRecordRight(left, right) : type_exports.IsString(right) ? FromStringRight(left, right) : type_exports.IsNumber(right) ? FromNumberRight(left, right) : type_exports.IsInteger(right) ? FromIntegerRight(left, right) : type_exports.IsBoolean(right) ? FromBooleanRight(left, right) : ExtendsResult.False;
}
function FromNeverRight(left, right) {
  return ExtendsResult.False;
}
function FromNever(left, right) {
  return ExtendsResult.True;
}
function UnwrapTNot(schema) {
  let [current, depth] = [schema, 0];
  while (true) {
    if (!type_exports.IsNot(current))
      break;
    current = current.not;
    depth += 1;
  }
  return depth % 2 === 0 ? current : Unknown();
}
function FromNot(left, right) {
  return type_exports.IsNot(left) ? Visit3(UnwrapTNot(left), right) : type_exports.IsNot(right) ? Visit3(left, UnwrapTNot(right)) : Throw("Invalid fallthrough for Not");
}
function FromNull(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : type_exports.IsObject(right) ? FromObjectRight(left, right) : type_exports.IsRecord(right) ? FromRecordRight(left, right) : type_exports.IsNull(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromNumberRight(left, right) {
  return type_exports.IsLiteralNumber(left) ? ExtendsResult.True : type_exports.IsNumber(left) || type_exports.IsInteger(left) ? ExtendsResult.True : ExtendsResult.False;
}
function FromNumber(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : type_exports.IsObject(right) ? FromObjectRight(left, right) : type_exports.IsRecord(right) ? FromRecordRight(left, right) : type_exports.IsInteger(right) || type_exports.IsNumber(right) ? ExtendsResult.True : ExtendsResult.False;
}
function IsObjectPropertyCount(schema, count) {
  return Object.getOwnPropertyNames(schema.properties).length === count;
}
function IsObjectStringLike(schema) {
  return IsObjectArrayLike(schema);
}
function IsObjectSymbolLike(schema) {
  return IsObjectPropertyCount(schema, 0) || IsObjectPropertyCount(schema, 1) && "description" in schema.properties && type_exports.IsUnion(schema.properties.description) && schema.properties.description.anyOf.length === 2 && (type_exports.IsString(schema.properties.description.anyOf[0]) && type_exports.IsUndefined(schema.properties.description.anyOf[1]) || type_exports.IsString(schema.properties.description.anyOf[1]) && type_exports.IsUndefined(schema.properties.description.anyOf[0]));
}
function IsObjectNumberLike(schema) {
  return IsObjectPropertyCount(schema, 0);
}
function IsObjectBooleanLike(schema) {
  return IsObjectPropertyCount(schema, 0);
}
function IsObjectBigIntLike(schema) {
  return IsObjectPropertyCount(schema, 0);
}
function IsObjectDateLike(schema) {
  return IsObjectPropertyCount(schema, 0);
}
function IsObjectUint8ArrayLike(schema) {
  return IsObjectArrayLike(schema);
}
function IsObjectFunctionLike(schema) {
  const length = Number2();
  return IsObjectPropertyCount(schema, 0) || IsObjectPropertyCount(schema, 1) && "length" in schema.properties && IntoBooleanResult(Visit3(schema.properties["length"], length)) === ExtendsResult.True;
}
function IsObjectConstructorLike(schema) {
  return IsObjectPropertyCount(schema, 0);
}
function IsObjectArrayLike(schema) {
  const length = Number2();
  return IsObjectPropertyCount(schema, 0) || IsObjectPropertyCount(schema, 1) && "length" in schema.properties && IntoBooleanResult(Visit3(schema.properties["length"], length)) === ExtendsResult.True;
}
function IsObjectPromiseLike(schema) {
  const then = Function([Any()], Any());
  return IsObjectPropertyCount(schema, 0) || IsObjectPropertyCount(schema, 1) && "then" in schema.properties && IntoBooleanResult(Visit3(schema.properties["then"], then)) === ExtendsResult.True;
}
function Property(left, right) {
  return Visit3(left, right) === ExtendsResult.False ? ExtendsResult.False : type_exports.IsOptional(left) && !type_exports.IsOptional(right) ? ExtendsResult.False : ExtendsResult.True;
}
function FromObjectRight(left, right) {
  return type_exports.IsUnknown(left) ? ExtendsResult.False : type_exports.IsAny(left) ? ExtendsResult.Union : type_exports.IsNever(left) || type_exports.IsLiteralString(left) && IsObjectStringLike(right) || type_exports.IsLiteralNumber(left) && IsObjectNumberLike(right) || type_exports.IsLiteralBoolean(left) && IsObjectBooleanLike(right) || type_exports.IsSymbol(left) && IsObjectSymbolLike(right) || type_exports.IsBigInt(left) && IsObjectBigIntLike(right) || type_exports.IsString(left) && IsObjectStringLike(right) || type_exports.IsSymbol(left) && IsObjectSymbolLike(right) || type_exports.IsNumber(left) && IsObjectNumberLike(right) || type_exports.IsInteger(left) && IsObjectNumberLike(right) || type_exports.IsBoolean(left) && IsObjectBooleanLike(right) || type_exports.IsUint8Array(left) && IsObjectUint8ArrayLike(right) || type_exports.IsDate(left) && IsObjectDateLike(right) || type_exports.IsConstructor(left) && IsObjectConstructorLike(right) || type_exports.IsFunction(left) && IsObjectFunctionLike(right) ? ExtendsResult.True : type_exports.IsRecord(left) && type_exports.IsString(RecordKey(left)) ? (() => {
    return right[Hint] === "Record" ? ExtendsResult.True : ExtendsResult.False;
  })() : type_exports.IsRecord(left) && type_exports.IsNumber(RecordKey(left)) ? (() => {
    return IsObjectPropertyCount(right, 0) ? ExtendsResult.True : ExtendsResult.False;
  })() : ExtendsResult.False;
}
function FromObject(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : type_exports.IsRecord(right) ? FromRecordRight(left, right) : !type_exports.IsObject(right) ? ExtendsResult.False : (() => {
    for (const key of Object.getOwnPropertyNames(right.properties)) {
      if (!(key in left.properties) && !type_exports.IsOptional(right.properties[key])) {
        return ExtendsResult.False;
      }
      if (type_exports.IsOptional(right.properties[key])) {
        return ExtendsResult.True;
      }
      if (Property(left.properties[key], right.properties[key]) === ExtendsResult.False) {
        return ExtendsResult.False;
      }
    }
    return ExtendsResult.True;
  })();
}
function FromPromise2(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : type_exports.IsObject(right) && IsObjectPromiseLike(right) ? ExtendsResult.True : !type_exports.IsPromise(right) ? ExtendsResult.False : IntoBooleanResult(Visit3(left.item, right.item));
}
function RecordKey(schema) {
  return PatternNumberExact in schema.patternProperties ? Number2() : PatternStringExact in schema.patternProperties ? String2() : Throw("Unknown record key pattern");
}
function RecordValue(schema) {
  return PatternNumberExact in schema.patternProperties ? schema.patternProperties[PatternNumberExact] : PatternStringExact in schema.patternProperties ? schema.patternProperties[PatternStringExact] : Throw("Unable to get record value schema");
}
function FromRecordRight(left, right) {
  const [Key, Value] = [RecordKey(right), RecordValue(right)];
  return type_exports.IsLiteralString(left) && type_exports.IsNumber(Key) && IntoBooleanResult(Visit3(left, Value)) === ExtendsResult.True ? ExtendsResult.True : type_exports.IsUint8Array(left) && type_exports.IsNumber(Key) ? Visit3(left, Value) : type_exports.IsString(left) && type_exports.IsNumber(Key) ? Visit3(left, Value) : type_exports.IsArray(left) && type_exports.IsNumber(Key) ? Visit3(left, Value) : type_exports.IsObject(left) ? (() => {
    for (const key of Object.getOwnPropertyNames(left.properties)) {
      if (Property(Value, left.properties[key]) === ExtendsResult.False) {
        return ExtendsResult.False;
      }
    }
    return ExtendsResult.True;
  })() : ExtendsResult.False;
}
function FromRecord(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : type_exports.IsObject(right) ? FromObjectRight(left, right) : !type_exports.IsRecord(right) ? ExtendsResult.False : Visit3(RecordValue(left), RecordValue(right));
}
function FromRegExp(left, right) {
  const L = type_exports.IsRegExp(left) ? String2() : left;
  const R = type_exports.IsRegExp(right) ? String2() : right;
  return Visit3(L, R);
}
function FromStringRight(left, right) {
  return type_exports.IsLiteral(left) && value_exports.IsString(left.const) ? ExtendsResult.True : type_exports.IsString(left) ? ExtendsResult.True : ExtendsResult.False;
}
function FromString(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : type_exports.IsObject(right) ? FromObjectRight(left, right) : type_exports.IsRecord(right) ? FromRecordRight(left, right) : type_exports.IsString(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromSymbol(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : type_exports.IsObject(right) ? FromObjectRight(left, right) : type_exports.IsRecord(right) ? FromRecordRight(left, right) : type_exports.IsSymbol(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromTemplateLiteral2(left, right) {
  return type_exports.IsTemplateLiteral(left) ? Visit3(TemplateLiteralToUnion(left), right) : type_exports.IsTemplateLiteral(right) ? Visit3(left, TemplateLiteralToUnion(right)) : Throw("Invalid fallthrough for TemplateLiteral");
}
function IsArrayOfTuple(left, right) {
  return type_exports.IsArray(right) && left.items !== void 0 && left.items.every((schema) => Visit3(schema, right.items) === ExtendsResult.True);
}
function FromTupleRight(left, right) {
  return type_exports.IsNever(left) ? ExtendsResult.True : type_exports.IsUnknown(left) ? ExtendsResult.False : type_exports.IsAny(left) ? ExtendsResult.Union : ExtendsResult.False;
}
function FromTuple3(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : type_exports.IsObject(right) && IsObjectArrayLike(right) ? ExtendsResult.True : type_exports.IsArray(right) && IsArrayOfTuple(left, right) ? ExtendsResult.True : !type_exports.IsTuple(right) ? ExtendsResult.False : value_exports.IsUndefined(left.items) && !value_exports.IsUndefined(right.items) || !value_exports.IsUndefined(left.items) && value_exports.IsUndefined(right.items) ? ExtendsResult.False : value_exports.IsUndefined(left.items) && !value_exports.IsUndefined(right.items) ? ExtendsResult.True : left.items.every((schema, index) => Visit3(schema, right.items[index]) === ExtendsResult.True) ? ExtendsResult.True : ExtendsResult.False;
}
function FromUint8Array(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : type_exports.IsObject(right) ? FromObjectRight(left, right) : type_exports.IsRecord(right) ? FromRecordRight(left, right) : type_exports.IsUint8Array(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromUndefined(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : type_exports.IsObject(right) ? FromObjectRight(left, right) : type_exports.IsRecord(right) ? FromRecordRight(left, right) : type_exports.IsVoid(right) ? FromVoidRight(left, right) : type_exports.IsUndefined(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromUnionRight(left, right) {
  return right.anyOf.some((schema) => Visit3(left, schema) === ExtendsResult.True) ? ExtendsResult.True : ExtendsResult.False;
}
function FromUnion6(left, right) {
  return left.anyOf.every((schema) => Visit3(schema, right) === ExtendsResult.True) ? ExtendsResult.True : ExtendsResult.False;
}
function FromUnknownRight(left, right) {
  return ExtendsResult.True;
}
function FromUnknown(left, right) {
  return type_exports.IsNever(right) ? FromNeverRight(left, right) : type_exports.IsIntersect(right) ? FromIntersectRight(left, right) : type_exports.IsUnion(right) ? FromUnionRight(left, right) : type_exports.IsAny(right) ? FromAnyRight(left, right) : type_exports.IsString(right) ? FromStringRight(left, right) : type_exports.IsNumber(right) ? FromNumberRight(left, right) : type_exports.IsInteger(right) ? FromIntegerRight(left, right) : type_exports.IsBoolean(right) ? FromBooleanRight(left, right) : type_exports.IsArray(right) ? FromArrayRight(left, right) : type_exports.IsTuple(right) ? FromTupleRight(left, right) : type_exports.IsObject(right) ? FromObjectRight(left, right) : type_exports.IsUnknown(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromVoidRight(left, right) {
  return type_exports.IsUndefined(left) ? ExtendsResult.True : type_exports.IsUndefined(left) ? ExtendsResult.True : ExtendsResult.False;
}
function FromVoid(left, right) {
  return type_exports.IsIntersect(right) ? FromIntersectRight(left, right) : type_exports.IsUnion(right) ? FromUnionRight(left, right) : type_exports.IsUnknown(right) ? FromUnknownRight(left, right) : type_exports.IsAny(right) ? FromAnyRight(left, right) : type_exports.IsObject(right) ? FromObjectRight(left, right) : type_exports.IsVoid(right) ? ExtendsResult.True : ExtendsResult.False;
}
function Visit3(left, right) {
  return (
    // resolvable
    type_exports.IsTemplateLiteral(left) || type_exports.IsTemplateLiteral(right) ? FromTemplateLiteral2(left, right) : type_exports.IsRegExp(left) || type_exports.IsRegExp(right) ? FromRegExp(left, right) : type_exports.IsNot(left) || type_exports.IsNot(right) ? FromNot(left, right) : (
      // standard
      type_exports.IsAny(left) ? FromAny(left, right) : type_exports.IsArray(left) ? FromArray4(left, right) : type_exports.IsBigInt(left) ? FromBigInt(left, right) : type_exports.IsBoolean(left) ? FromBoolean(left, right) : type_exports.IsAsyncIterator(left) ? FromAsyncIterator(left, right) : type_exports.IsConstructor(left) ? FromConstructor(left, right) : type_exports.IsDate(left) ? FromDate(left, right) : type_exports.IsFunction(left) ? FromFunction(left, right) : type_exports.IsInteger(left) ? FromInteger(left, right) : type_exports.IsIntersect(left) ? FromIntersect4(left, right) : type_exports.IsIterator(left) ? FromIterator(left, right) : type_exports.IsLiteral(left) ? FromLiteral2(left, right) : type_exports.IsNever(left) ? FromNever(left, right) : type_exports.IsNull(left) ? FromNull(left, right) : type_exports.IsNumber(left) ? FromNumber(left, right) : type_exports.IsObject(left) ? FromObject(left, right) : type_exports.IsRecord(left) ? FromRecord(left, right) : type_exports.IsString(left) ? FromString(left, right) : type_exports.IsSymbol(left) ? FromSymbol(left, right) : type_exports.IsTuple(left) ? FromTuple3(left, right) : type_exports.IsPromise(left) ? FromPromise2(left, right) : type_exports.IsUint8Array(left) ? FromUint8Array(left, right) : type_exports.IsUndefined(left) ? FromUndefined(left, right) : type_exports.IsUnion(left) ? FromUnion6(left, right) : type_exports.IsUnknown(left) ? FromUnknown(left, right) : type_exports.IsVoid(left) ? FromVoid(left, right) : Throw(`Unknown left type operand '${left[Kind]}'`)
    )
  );
}
function ExtendsCheck(left, right) {
  return Visit3(left, right);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/extends/extends-from-mapped-result.mjs
function FromProperties8(P, Right, True, False, options) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(P))
    Acc[K2] = Extends(P[K2], Right, True, False, Clone(options));
  return Acc;
}
function FromMappedResult6(Left, Right, True, False, options) {
  return FromProperties8(Left.properties, Right, True, False, options);
}
function ExtendsFromMappedResult(Left, Right, True, False, options) {
  const P = FromMappedResult6(Left, Right, True, False, options);
  return MappedResult(P);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/extends/extends.mjs
function ExtendsResolve(left, right, trueType, falseType) {
  const R = ExtendsCheck(left, right);
  return R === ExtendsResult.Union ? Union([trueType, falseType]) : R === ExtendsResult.True ? trueType : falseType;
}
function Extends(L, R, T, F, options) {
  return IsMappedResult(L) ? ExtendsFromMappedResult(L, R, T, F, options) : IsMappedKey(L) ? CreateType(ExtendsFromMappedKey(L, R, T, F, options)) : CreateType(ExtendsResolve(L, R, T, F), options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/extends/extends-from-mapped-key.mjs
function FromPropertyKey(K, U, L, R, options) {
  return {
    [K]: Extends(Literal(K), U, L, R, Clone(options))
  };
}
function FromPropertyKeys(K, U, L, R, options) {
  return K.reduce((Acc, LK) => {
    return { ...Acc, ...FromPropertyKey(LK, U, L, R, options) };
  }, {});
}
function FromMappedKey2(K, U, L, R, options) {
  return FromPropertyKeys(K.keys, U, L, R, options);
}
function ExtendsFromMappedKey(T, U, L, R, options) {
  const P = FromMappedKey2(T, U, L, R, options);
  return MappedResult(P);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/extends/extends-undefined.mjs
function Intersect2(schema) {
  return schema.allOf.every((schema2) => ExtendsUndefinedCheck(schema2));
}
function Union2(schema) {
  return schema.anyOf.some((schema2) => ExtendsUndefinedCheck(schema2));
}
function Not(schema) {
  return !ExtendsUndefinedCheck(schema.not);
}
function ExtendsUndefinedCheck(schema) {
  return schema[Kind] === "Intersect" ? Intersect2(schema) : schema[Kind] === "Union" ? Union2(schema) : schema[Kind] === "Not" ? Not(schema) : schema[Kind] === "Undefined" ? true : false;
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/exclude/exclude-from-template-literal.mjs
function ExcludeFromTemplateLiteral(L, R) {
  return Exclude(TemplateLiteralToUnion(L), R);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/exclude/exclude.mjs
function ExcludeRest(L, R) {
  const excluded = L.filter((inner) => ExtendsCheck(inner, R) === ExtendsResult.False);
  return excluded.length === 1 ? excluded[0] : Union(excluded);
}
function Exclude(L, R, options = {}) {
  if (IsTemplateLiteral(L))
    return CreateType(ExcludeFromTemplateLiteral(L, R), options);
  if (IsMappedResult(L))
    return CreateType(ExcludeFromMappedResult(L, R), options);
  return CreateType(IsUnion(L) ? ExcludeRest(L.anyOf, R) : ExtendsCheck(L, R) !== ExtendsResult.False ? Never() : L, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/exclude/exclude-from-mapped-result.mjs
function FromProperties9(P, U) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(P))
    Acc[K2] = Exclude(P[K2], U);
  return Acc;
}
function FromMappedResult7(R, T) {
  return FromProperties9(R.properties, T);
}
function ExcludeFromMappedResult(R, T) {
  const P = FromMappedResult7(R, T);
  return MappedResult(P);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/extract/extract-from-template-literal.mjs
function ExtractFromTemplateLiteral(L, R) {
  return Extract(TemplateLiteralToUnion(L), R);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/extract/extract.mjs
function ExtractRest(L, R) {
  const extracted = L.filter((inner) => ExtendsCheck(inner, R) !== ExtendsResult.False);
  return extracted.length === 1 ? extracted[0] : Union(extracted);
}
function Extract(L, R, options) {
  if (IsTemplateLiteral(L))
    return CreateType(ExtractFromTemplateLiteral(L, R), options);
  if (IsMappedResult(L))
    return CreateType(ExtractFromMappedResult(L, R), options);
  return CreateType(IsUnion(L) ? ExtractRest(L.anyOf, R) : ExtendsCheck(L, R) !== ExtendsResult.False ? L : Never(), options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/extract/extract-from-mapped-result.mjs
function FromProperties10(P, T) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(P))
    Acc[K2] = Extract(P[K2], T);
  return Acc;
}
function FromMappedResult8(R, T) {
  return FromProperties10(R.properties, T);
}
function ExtractFromMappedResult(R, T) {
  const P = FromMappedResult8(R, T);
  return MappedResult(P);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/instance-type/instance-type.mjs
function InstanceType(schema, options) {
  return IsConstructor(schema) ? CreateType(schema.returns, options) : Never(options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/readonly-optional/readonly-optional.mjs
function ReadonlyOptional(schema) {
  return Readonly(Optional(schema));
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/record/record.mjs
function RecordCreateFromPattern(pattern, T, options) {
  return CreateType({ [Kind]: "Record", type: "object", patternProperties: { [pattern]: T } }, options);
}
function RecordCreateFromKeys(K, T, options) {
  const result = {};
  for (const K2 of K)
    result[K2] = T;
  return Object2(result, { ...options, [Hint]: "Record" });
}
function FromTemplateLiteralKey(K, T, options) {
  return IsTemplateLiteralFinite(K) ? RecordCreateFromKeys(IndexPropertyKeys(K), T, options) : RecordCreateFromPattern(K.pattern, T, options);
}
function FromUnionKey(key, type, options) {
  return RecordCreateFromKeys(IndexPropertyKeys(Union(key)), type, options);
}
function FromLiteralKey(key, type, options) {
  return RecordCreateFromKeys([key.toString()], type, options);
}
function FromRegExpKey(key, type, options) {
  return RecordCreateFromPattern(key.source, type, options);
}
function FromStringKey(key, type, options) {
  const pattern = IsUndefined(key.pattern) ? PatternStringExact : key.pattern;
  return RecordCreateFromPattern(pattern, type, options);
}
function FromAnyKey(_, type, options) {
  return RecordCreateFromPattern(PatternStringExact, type, options);
}
function FromNeverKey(_key, type, options) {
  return RecordCreateFromPattern(PatternNeverExact, type, options);
}
function FromBooleanKey(_key, type, options) {
  return Object2({ true: type, false: type }, options);
}
function FromIntegerKey(_key, type, options) {
  return RecordCreateFromPattern(PatternNumberExact, type, options);
}
function FromNumberKey(_, type, options) {
  return RecordCreateFromPattern(PatternNumberExact, type, options);
}
function Record(key, type, options = {}) {
  return IsUnion(key) ? FromUnionKey(key.anyOf, type, options) : IsTemplateLiteral(key) ? FromTemplateLiteralKey(key, type, options) : IsLiteral(key) ? FromLiteralKey(key.const, type, options) : IsBoolean3(key) ? FromBooleanKey(key, type, options) : IsInteger2(key) ? FromIntegerKey(key, type, options) : IsNumber3(key) ? FromNumberKey(key, type, options) : IsRegExp2(key) ? FromRegExpKey(key, type, options) : IsString3(key) ? FromStringKey(key, type, options) : IsAny(key) ? FromAnyKey(key, type, options) : IsNever(key) ? FromNeverKey(key, type, options) : Never(options);
}
function RecordPattern(record) {
  return globalThis.Object.getOwnPropertyNames(record.patternProperties)[0];
}
function RecordKey2(type) {
  const pattern = RecordPattern(type);
  return pattern === PatternStringExact ? String2() : pattern === PatternNumberExact ? Number2() : String2({ pattern });
}
function RecordValue2(type) {
  return type.patternProperties[RecordPattern(type)];
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/instantiate/instantiate.mjs
function FromConstructor2(args, type) {
  type.parameters = FromTypes(args, type.parameters);
  type.returns = FromType(args, type.returns);
  return type;
}
function FromFunction2(args, type) {
  type.parameters = FromTypes(args, type.parameters);
  type.returns = FromType(args, type.returns);
  return type;
}
function FromIntersect5(args, type) {
  type.allOf = FromTypes(args, type.allOf);
  return type;
}
function FromUnion7(args, type) {
  type.anyOf = FromTypes(args, type.anyOf);
  return type;
}
function FromTuple4(args, type) {
  if (IsUndefined(type.items))
    return type;
  type.items = FromTypes(args, type.items);
  return type;
}
function FromArray5(args, type) {
  type.items = FromType(args, type.items);
  return type;
}
function FromAsyncIterator2(args, type) {
  type.items = FromType(args, type.items);
  return type;
}
function FromIterator2(args, type) {
  type.items = FromType(args, type.items);
  return type;
}
function FromPromise3(args, type) {
  type.item = FromType(args, type.item);
  return type;
}
function FromObject2(args, type) {
  const mappedProperties = FromProperties11(args, type.properties);
  return { ...type, ...Object2(mappedProperties) };
}
function FromRecord2(args, type) {
  const mappedKey = FromType(args, RecordKey2(type));
  const mappedValue = FromType(args, RecordValue2(type));
  const result = Record(mappedKey, mappedValue);
  return { ...type, ...result };
}
function FromArgument(args, argument) {
  return argument.index in args ? args[argument.index] : Unknown();
}
function FromProperty2(args, type) {
  const isReadonly = IsReadonly(type);
  const isOptional = IsOptional(type);
  const mapped = FromType(args, type);
  return isReadonly && isOptional ? ReadonlyOptional(mapped) : isReadonly && !isOptional ? Readonly(mapped) : !isReadonly && isOptional ? Optional(mapped) : mapped;
}
function FromProperties11(args, properties) {
  return globalThis.Object.getOwnPropertyNames(properties).reduce((result, key) => {
    return { ...result, [key]: FromProperty2(args, properties[key]) };
  }, {});
}
function FromTypes(args, types) {
  return types.map((type) => FromType(args, type));
}
function FromType(args, type) {
  return IsConstructor(type) ? FromConstructor2(args, type) : IsFunction3(type) ? FromFunction2(args, type) : IsIntersect(type) ? FromIntersect5(args, type) : IsUnion(type) ? FromUnion7(args, type) : IsTuple(type) ? FromTuple4(args, type) : IsArray3(type) ? FromArray5(args, type) : IsAsyncIterator3(type) ? FromAsyncIterator2(args, type) : IsIterator3(type) ? FromIterator2(args, type) : IsPromise2(type) ? FromPromise3(args, type) : IsObject3(type) ? FromObject2(args, type) : IsRecord(type) ? FromRecord2(args, type) : IsArgument(type) ? FromArgument(args, type) : type;
}
function Instantiate(type, args) {
  return FromType(args, CloneType(type));
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/integer/integer.mjs
function Integer(options) {
  return CreateType({ [Kind]: "Integer", type: "integer" }, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/intrinsic/intrinsic-from-mapped-key.mjs
function MappedIntrinsicPropertyKey(K, M, options) {
  return {
    [K]: Intrinsic(Literal(K), M, Clone(options))
  };
}
function MappedIntrinsicPropertyKeys(K, M, options) {
  const result = K.reduce((Acc, L) => {
    return { ...Acc, ...MappedIntrinsicPropertyKey(L, M, options) };
  }, {});
  return result;
}
function MappedIntrinsicProperties(T, M, options) {
  return MappedIntrinsicPropertyKeys(T["keys"], M, options);
}
function IntrinsicFromMappedKey(T, M, options) {
  const P = MappedIntrinsicProperties(T, M, options);
  return MappedResult(P);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/intrinsic/intrinsic.mjs
function ApplyUncapitalize(value) {
  const [first, rest] = [value.slice(0, 1), value.slice(1)];
  return [first.toLowerCase(), rest].join("");
}
function ApplyCapitalize(value) {
  const [first, rest] = [value.slice(0, 1), value.slice(1)];
  return [first.toUpperCase(), rest].join("");
}
function ApplyUppercase(value) {
  return value.toUpperCase();
}
function ApplyLowercase(value) {
  return value.toLowerCase();
}
function FromTemplateLiteral3(schema, mode, options) {
  const expression = TemplateLiteralParseExact(schema.pattern);
  const finite = IsTemplateLiteralExpressionFinite(expression);
  if (!finite)
    return { ...schema, pattern: FromLiteralValue(schema.pattern, mode) };
  const strings = [...TemplateLiteralExpressionGenerate(expression)];
  const literals = strings.map((value) => Literal(value));
  const mapped = FromRest5(literals, mode);
  const union = Union(mapped);
  return TemplateLiteral([union], options);
}
function FromLiteralValue(value, mode) {
  return typeof value === "string" ? mode === "Uncapitalize" ? ApplyUncapitalize(value) : mode === "Capitalize" ? ApplyCapitalize(value) : mode === "Uppercase" ? ApplyUppercase(value) : mode === "Lowercase" ? ApplyLowercase(value) : value : value.toString();
}
function FromRest5(T, M) {
  return T.map((L) => Intrinsic(L, M));
}
function Intrinsic(schema, mode, options = {}) {
  return (
    // Intrinsic-Mapped-Inference
    IsMappedKey(schema) ? IntrinsicFromMappedKey(schema, mode, options) : (
      // Standard-Inference
      IsTemplateLiteral(schema) ? FromTemplateLiteral3(schema, mode, options) : IsUnion(schema) ? Union(FromRest5(schema.anyOf, mode), options) : IsLiteral(schema) ? Literal(FromLiteralValue(schema.const, mode), options) : (
        // Default Type
        CreateType(schema, options)
      )
    )
  );
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/intrinsic/capitalize.mjs
function Capitalize(T, options = {}) {
  return Intrinsic(T, "Capitalize", options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/intrinsic/lowercase.mjs
function Lowercase(T, options = {}) {
  return Intrinsic(T, "Lowercase", options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/intrinsic/uncapitalize.mjs
function Uncapitalize(T, options = {}) {
  return Intrinsic(T, "Uncapitalize", options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/intrinsic/uppercase.mjs
function Uppercase(T, options = {}) {
  return Intrinsic(T, "Uppercase", options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/omit/omit-from-mapped-result.mjs
function FromProperties12(properties, propertyKeys, options) {
  const result = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(properties))
    result[K2] = Omit(properties[K2], propertyKeys, Clone(options));
  return result;
}
function FromMappedResult9(mappedResult, propertyKeys, options) {
  return FromProperties12(mappedResult.properties, propertyKeys, options);
}
function OmitFromMappedResult(mappedResult, propertyKeys, options) {
  const properties = FromMappedResult9(mappedResult, propertyKeys, options);
  return MappedResult(properties);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/omit/omit.mjs
function FromIntersect6(types, propertyKeys) {
  return types.map((type) => OmitResolve(type, propertyKeys));
}
function FromUnion8(types, propertyKeys) {
  return types.map((type) => OmitResolve(type, propertyKeys));
}
function FromProperty3(properties, key) {
  const { [key]: _, ...R } = properties;
  return R;
}
function FromProperties13(properties, propertyKeys) {
  return propertyKeys.reduce((T, K2) => FromProperty3(T, K2), properties);
}
function FromObject3(properties, propertyKeys) {
  const options = Discard(properties, [TransformKind, "$id", "required", "properties"]);
  const omittedProperties = FromProperties13(properties["properties"], propertyKeys);
  return Object2(omittedProperties, options);
}
function UnionFromPropertyKeys(propertyKeys) {
  const result = propertyKeys.reduce((result2, key) => IsLiteralValue(key) ? [...result2, Literal(key)] : result2, []);
  return Union(result);
}
function OmitResolve(properties, propertyKeys) {
  return IsIntersect(properties) ? Intersect(FromIntersect6(properties.allOf, propertyKeys)) : IsUnion(properties) ? Union(FromUnion8(properties.anyOf, propertyKeys)) : IsObject3(properties) ? FromObject3(properties, propertyKeys) : Object2({});
}
function Omit(type, key, options) {
  const typeKey = IsArray(key) ? UnionFromPropertyKeys(key) : key;
  const propertyKeys = IsSchema(key) ? IndexPropertyKeys(key) : key;
  const isTypeRef = IsRef(type);
  const isKeyRef = IsRef(key);
  return IsMappedResult(type) ? OmitFromMappedResult(type, propertyKeys, options) : IsMappedKey(key) ? OmitFromMappedKey(type, key, options) : isTypeRef && isKeyRef ? Computed("Omit", [type, typeKey], options) : !isTypeRef && isKeyRef ? Computed("Omit", [type, typeKey], options) : isTypeRef && !isKeyRef ? Computed("Omit", [type, typeKey], options) : CreateType({ ...OmitResolve(type, propertyKeys), ...options });
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/omit/omit-from-mapped-key.mjs
function FromPropertyKey2(type, key, options) {
  return { [key]: Omit(type, [key], Clone(options)) };
}
function FromPropertyKeys2(type, propertyKeys, options) {
  return propertyKeys.reduce((Acc, LK) => {
    return { ...Acc, ...FromPropertyKey2(type, LK, options) };
  }, {});
}
function FromMappedKey3(type, mappedKey, options) {
  return FromPropertyKeys2(type, mappedKey.keys, options);
}
function OmitFromMappedKey(type, mappedKey, options) {
  const properties = FromMappedKey3(type, mappedKey, options);
  return MappedResult(properties);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/pick/pick-from-mapped-result.mjs
function FromProperties14(properties, propertyKeys, options) {
  const result = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(properties))
    result[K2] = Pick(properties[K2], propertyKeys, Clone(options));
  return result;
}
function FromMappedResult10(mappedResult, propertyKeys, options) {
  return FromProperties14(mappedResult.properties, propertyKeys, options);
}
function PickFromMappedResult(mappedResult, propertyKeys, options) {
  const properties = FromMappedResult10(mappedResult, propertyKeys, options);
  return MappedResult(properties);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/pick/pick.mjs
function FromIntersect7(types, propertyKeys) {
  return types.map((type) => PickResolve(type, propertyKeys));
}
function FromUnion9(types, propertyKeys) {
  return types.map((type) => PickResolve(type, propertyKeys));
}
function FromProperties15(properties, propertyKeys) {
  const result = {};
  for (const K2 of propertyKeys)
    if (K2 in properties)
      result[K2] = properties[K2];
  return result;
}
function FromObject4(T, K) {
  const options = Discard(T, [TransformKind, "$id", "required", "properties"]);
  const properties = FromProperties15(T["properties"], K);
  return Object2(properties, options);
}
function UnionFromPropertyKeys2(propertyKeys) {
  const result = propertyKeys.reduce((result2, key) => IsLiteralValue(key) ? [...result2, Literal(key)] : result2, []);
  return Union(result);
}
function PickResolve(properties, propertyKeys) {
  return IsIntersect(properties) ? Intersect(FromIntersect7(properties.allOf, propertyKeys)) : IsUnion(properties) ? Union(FromUnion9(properties.anyOf, propertyKeys)) : IsObject3(properties) ? FromObject4(properties, propertyKeys) : Object2({});
}
function Pick(type, key, options) {
  const typeKey = IsArray(key) ? UnionFromPropertyKeys2(key) : key;
  const propertyKeys = IsSchema(key) ? IndexPropertyKeys(key) : key;
  const isTypeRef = IsRef(type);
  const isKeyRef = IsRef(key);
  return IsMappedResult(type) ? PickFromMappedResult(type, propertyKeys, options) : IsMappedKey(key) ? PickFromMappedKey(type, key, options) : isTypeRef && isKeyRef ? Computed("Pick", [type, typeKey], options) : !isTypeRef && isKeyRef ? Computed("Pick", [type, typeKey], options) : isTypeRef && !isKeyRef ? Computed("Pick", [type, typeKey], options) : CreateType({ ...PickResolve(type, propertyKeys), ...options });
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/pick/pick-from-mapped-key.mjs
function FromPropertyKey3(type, key, options) {
  return {
    [key]: Pick(type, [key], Clone(options))
  };
}
function FromPropertyKeys3(type, propertyKeys, options) {
  return propertyKeys.reduce((result, leftKey) => {
    return { ...result, ...FromPropertyKey3(type, leftKey, options) };
  }, {});
}
function FromMappedKey4(type, mappedKey, options) {
  return FromPropertyKeys3(type, mappedKey.keys, options);
}
function PickFromMappedKey(type, mappedKey, options) {
  const properties = FromMappedKey4(type, mappedKey, options);
  return MappedResult(properties);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/partial/partial.mjs
function FromComputed3(target, parameters) {
  return Computed("Partial", [Computed(target, parameters)]);
}
function FromRef3($ref) {
  return Computed("Partial", [Ref($ref)]);
}
function FromProperties16(properties) {
  const partialProperties = {};
  for (const K of globalThis.Object.getOwnPropertyNames(properties))
    partialProperties[K] = Optional(properties[K]);
  return partialProperties;
}
function FromObject5(type) {
  const options = Discard(type, [TransformKind, "$id", "required", "properties"]);
  const properties = FromProperties16(type["properties"]);
  return Object2(properties, options);
}
function FromRest6(types) {
  return types.map((type) => PartialResolve(type));
}
function PartialResolve(type) {
  return (
    // Mappable
    IsComputed(type) ? FromComputed3(type.target, type.parameters) : IsRef(type) ? FromRef3(type.$ref) : IsIntersect(type) ? Intersect(FromRest6(type.allOf)) : IsUnion(type) ? Union(FromRest6(type.anyOf)) : IsObject3(type) ? FromObject5(type) : (
      // Intrinsic
      IsBigInt3(type) ? type : IsBoolean3(type) ? type : IsInteger2(type) ? type : IsLiteral(type) ? type : IsNull3(type) ? type : IsNumber3(type) ? type : IsString3(type) ? type : IsSymbol3(type) ? type : IsUndefined3(type) ? type : (
        // Passthrough
        Object2({})
      )
    )
  );
}
function Partial(type, options) {
  if (IsMappedResult(type)) {
    return PartialFromMappedResult(type, options);
  } else {
    return CreateType({ ...PartialResolve(type), ...options });
  }
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/partial/partial-from-mapped-result.mjs
function FromProperties17(K, options) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(K))
    Acc[K2] = Partial(K[K2], Clone(options));
  return Acc;
}
function FromMappedResult11(R, options) {
  return FromProperties17(R.properties, options);
}
function PartialFromMappedResult(R, options) {
  const P = FromMappedResult11(R, options);
  return MappedResult(P);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/required/required.mjs
function FromComputed4(target, parameters) {
  return Computed("Required", [Computed(target, parameters)]);
}
function FromRef4($ref) {
  return Computed("Required", [Ref($ref)]);
}
function FromProperties18(properties) {
  const requiredProperties = {};
  for (const K of globalThis.Object.getOwnPropertyNames(properties))
    requiredProperties[K] = Discard(properties[K], [OptionalKind]);
  return requiredProperties;
}
function FromObject6(type) {
  const options = Discard(type, [TransformKind, "$id", "required", "properties"]);
  const properties = FromProperties18(type["properties"]);
  return Object2(properties, options);
}
function FromRest7(types) {
  return types.map((type) => RequiredResolve(type));
}
function RequiredResolve(type) {
  return (
    // Mappable
    IsComputed(type) ? FromComputed4(type.target, type.parameters) : IsRef(type) ? FromRef4(type.$ref) : IsIntersect(type) ? Intersect(FromRest7(type.allOf)) : IsUnion(type) ? Union(FromRest7(type.anyOf)) : IsObject3(type) ? FromObject6(type) : (
      // Intrinsic
      IsBigInt3(type) ? type : IsBoolean3(type) ? type : IsInteger2(type) ? type : IsLiteral(type) ? type : IsNull3(type) ? type : IsNumber3(type) ? type : IsString3(type) ? type : IsSymbol3(type) ? type : IsUndefined3(type) ? type : (
        // Passthrough
        Object2({})
      )
    )
  );
}
function Required(type, options) {
  if (IsMappedResult(type)) {
    return RequiredFromMappedResult(type, options);
  } else {
    return CreateType({ ...RequiredResolve(type), ...options });
  }
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/required/required-from-mapped-result.mjs
function FromProperties19(P, options) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(P))
    Acc[K2] = Required(P[K2], options);
  return Acc;
}
function FromMappedResult12(R, options) {
  return FromProperties19(R.properties, options);
}
function RequiredFromMappedResult(R, options) {
  const P = FromMappedResult12(R, options);
  return MappedResult(P);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/module/compute.mjs
function DereferenceParameters(moduleProperties, types) {
  return types.map((type) => {
    return IsRef(type) ? Dereference(moduleProperties, type.$ref) : FromType2(moduleProperties, type);
  });
}
function Dereference(moduleProperties, ref) {
  return ref in moduleProperties ? IsRef(moduleProperties[ref]) ? Dereference(moduleProperties, moduleProperties[ref].$ref) : FromType2(moduleProperties, moduleProperties[ref]) : Never();
}
function FromAwaited(parameters) {
  return Awaited(parameters[0]);
}
function FromIndex(parameters) {
  return Index(parameters[0], parameters[1]);
}
function FromKeyOf(parameters) {
  return KeyOf(parameters[0]);
}
function FromPartial(parameters) {
  return Partial(parameters[0]);
}
function FromOmit(parameters) {
  return Omit(parameters[0], parameters[1]);
}
function FromPick(parameters) {
  return Pick(parameters[0], parameters[1]);
}
function FromRequired(parameters) {
  return Required(parameters[0]);
}
function FromComputed5(moduleProperties, target, parameters) {
  const dereferenced = DereferenceParameters(moduleProperties, parameters);
  return target === "Awaited" ? FromAwaited(dereferenced) : target === "Index" ? FromIndex(dereferenced) : target === "KeyOf" ? FromKeyOf(dereferenced) : target === "Partial" ? FromPartial(dereferenced) : target === "Omit" ? FromOmit(dereferenced) : target === "Pick" ? FromPick(dereferenced) : target === "Required" ? FromRequired(dereferenced) : Never();
}
function FromArray6(moduleProperties, type) {
  return Array2(FromType2(moduleProperties, type));
}
function FromAsyncIterator3(moduleProperties, type) {
  return AsyncIterator(FromType2(moduleProperties, type));
}
function FromConstructor3(moduleProperties, parameters, instanceType) {
  return Constructor(FromTypes2(moduleProperties, parameters), FromType2(moduleProperties, instanceType));
}
function FromFunction3(moduleProperties, parameters, returnType) {
  return Function(FromTypes2(moduleProperties, parameters), FromType2(moduleProperties, returnType));
}
function FromIntersect8(moduleProperties, types) {
  return Intersect(FromTypes2(moduleProperties, types));
}
function FromIterator3(moduleProperties, type) {
  return Iterator(FromType2(moduleProperties, type));
}
function FromObject7(moduleProperties, properties) {
  return Object2(globalThis.Object.keys(properties).reduce((result, key) => {
    return { ...result, [key]: FromType2(moduleProperties, properties[key]) };
  }, {}));
}
function FromRecord3(moduleProperties, type) {
  const [value, pattern] = [FromType2(moduleProperties, RecordValue2(type)), RecordPattern(type)];
  const result = CloneType(type);
  result.patternProperties[pattern] = value;
  return result;
}
function FromTransform(moduleProperties, transform) {
  return IsRef(transform) ? { ...Dereference(moduleProperties, transform.$ref), [TransformKind]: transform[TransformKind] } : transform;
}
function FromTuple5(moduleProperties, types) {
  return Tuple(FromTypes2(moduleProperties, types));
}
function FromUnion10(moduleProperties, types) {
  return Union(FromTypes2(moduleProperties, types));
}
function FromTypes2(moduleProperties, types) {
  return types.map((type) => FromType2(moduleProperties, type));
}
function FromType2(moduleProperties, type) {
  return (
    // Modifiers
    IsOptional(type) ? CreateType(FromType2(moduleProperties, Discard(type, [OptionalKind])), type) : IsReadonly(type) ? CreateType(FromType2(moduleProperties, Discard(type, [ReadonlyKind])), type) : (
      // Transform
      IsTransform(type) ? CreateType(FromTransform(moduleProperties, type), type) : (
        // Types
        IsArray3(type) ? CreateType(FromArray6(moduleProperties, type.items), type) : IsAsyncIterator3(type) ? CreateType(FromAsyncIterator3(moduleProperties, type.items), type) : IsComputed(type) ? CreateType(FromComputed5(moduleProperties, type.target, type.parameters)) : IsConstructor(type) ? CreateType(FromConstructor3(moduleProperties, type.parameters, type.returns), type) : IsFunction3(type) ? CreateType(FromFunction3(moduleProperties, type.parameters, type.returns), type) : IsIntersect(type) ? CreateType(FromIntersect8(moduleProperties, type.allOf), type) : IsIterator3(type) ? CreateType(FromIterator3(moduleProperties, type.items), type) : IsObject3(type) ? CreateType(FromObject7(moduleProperties, type.properties), type) : IsRecord(type) ? CreateType(FromRecord3(moduleProperties, type)) : IsTuple(type) ? CreateType(FromTuple5(moduleProperties, type.items || []), type) : IsUnion(type) ? CreateType(FromUnion10(moduleProperties, type.anyOf), type) : type
      )
    )
  );
}
function ComputeType(moduleProperties, key) {
  return key in moduleProperties ? FromType2(moduleProperties, moduleProperties[key]) : Never();
}
function ComputeModuleProperties(moduleProperties) {
  return globalThis.Object.getOwnPropertyNames(moduleProperties).reduce((result, key) => {
    return { ...result, [key]: ComputeType(moduleProperties, key) };
  }, {});
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/module/module.mjs
var TModule = class {
  constructor($defs) {
    const computed = ComputeModuleProperties($defs);
    const identified = this.WithIdentifiers(computed);
    this.$defs = identified;
  }
  /** `[Json]` Imports a Type by Key. */
  Import(key, options) {
    const $defs = { ...this.$defs, [key]: CreateType(this.$defs[key], options) };
    return CreateType({ [Kind]: "Import", $defs, $ref: key });
  }
  // prettier-ignore
  WithIdentifiers($defs) {
    return globalThis.Object.getOwnPropertyNames($defs).reduce((result, key) => {
      return { ...result, [key]: { ...$defs[key], $id: key } };
    }, {});
  }
};
function Module(properties) {
  return new TModule(properties);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/not/not.mjs
function Not2(type, options) {
  return CreateType({ [Kind]: "Not", not: type }, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/parameters/parameters.mjs
function Parameters(schema, options) {
  return IsFunction3(schema) ? Tuple(schema.parameters, options) : Never();
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/recursive/recursive.mjs
var Ordinal = 0;
function Recursive(callback, options = {}) {
  if (IsUndefined(options.$id))
    options.$id = `T${Ordinal++}`;
  const thisType = CloneType(callback({ [Kind]: "This", $ref: `${options.$id}` }));
  thisType.$id = options.$id;
  return CreateType({ [Hint]: "Recursive", ...thisType }, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/regexp/regexp.mjs
function RegExp2(unresolved, options) {
  const expr = IsString(unresolved) ? new globalThis.RegExp(unresolved) : unresolved;
  return CreateType({ [Kind]: "RegExp", type: "RegExp", source: expr.source, flags: expr.flags }, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/rest/rest.mjs
function RestResolve(T) {
  return IsIntersect(T) ? T.allOf : IsUnion(T) ? T.anyOf : IsTuple(T) ? T.items ?? [] : [];
}
function Rest(T) {
  return RestResolve(T);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/return-type/return-type.mjs
function ReturnType(schema, options) {
  return IsFunction3(schema) ? CreateType(schema.returns, options) : Never(options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/transform/transform.mjs
var TransformDecodeBuilder = class {
  constructor(schema) {
    this.schema = schema;
  }
  Decode(decode) {
    return new TransformEncodeBuilder(this.schema, decode);
  }
};
var TransformEncodeBuilder = class {
  constructor(schema, decode) {
    this.schema = schema;
    this.decode = decode;
  }
  EncodeTransform(encode, schema) {
    const Encode2 = (value) => schema[TransformKind].Encode(encode(value));
    const Decode2 = (value) => this.decode(schema[TransformKind].Decode(value));
    const Codec = { Encode: Encode2, Decode: Decode2 };
    return { ...schema, [TransformKind]: Codec };
  }
  EncodeSchema(encode, schema) {
    const Codec = { Decode: this.decode, Encode: encode };
    return { ...schema, [TransformKind]: Codec };
  }
  Encode(encode) {
    return IsTransform(this.schema) ? this.EncodeTransform(encode, this.schema) : this.EncodeSchema(encode, this.schema);
  }
};
function Transform(schema) {
  return new TransformDecodeBuilder(schema);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/unsafe/unsafe.mjs
function Unsafe(options = {}) {
  return CreateType({ [Kind]: options[Kind] ?? "Unsafe" }, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/void/void.mjs
function Void(options) {
  return CreateType({ [Kind]: "Void", type: "void" }, options);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/type/type.mjs
var type_exports3 = {};
__export(type_exports3, {
  Any: () => Any,
  Argument: () => Argument,
  Array: () => Array2,
  AsyncIterator: () => AsyncIterator,
  Awaited: () => Awaited,
  BigInt: () => BigInt2,
  Boolean: () => Boolean2,
  Capitalize: () => Capitalize,
  Composite: () => Composite,
  Const: () => Const,
  Constructor: () => Constructor,
  ConstructorParameters: () => ConstructorParameters,
  Date: () => Date2,
  Enum: () => Enum,
  Exclude: () => Exclude,
  Extends: () => Extends,
  Extract: () => Extract,
  Function: () => Function,
  Index: () => Index,
  InstanceType: () => InstanceType,
  Instantiate: () => Instantiate,
  Integer: () => Integer,
  Intersect: () => Intersect,
  Iterator: () => Iterator,
  KeyOf: () => KeyOf,
  Literal: () => Literal,
  Lowercase: () => Lowercase,
  Mapped: () => Mapped,
  Module: () => Module,
  Never: () => Never,
  Not: () => Not2,
  Null: () => Null,
  Number: () => Number2,
  Object: () => Object2,
  Omit: () => Omit,
  Optional: () => Optional,
  Parameters: () => Parameters,
  Partial: () => Partial,
  Pick: () => Pick,
  Promise: () => Promise2,
  Readonly: () => Readonly,
  ReadonlyOptional: () => ReadonlyOptional,
  Record: () => Record,
  Recursive: () => Recursive,
  Ref: () => Ref,
  RegExp: () => RegExp2,
  Required: () => Required,
  Rest: () => Rest,
  ReturnType: () => ReturnType,
  String: () => String2,
  Symbol: () => Symbol2,
  TemplateLiteral: () => TemplateLiteral,
  Transform: () => Transform,
  Tuple: () => Tuple,
  Uint8Array: () => Uint8Array2,
  Uncapitalize: () => Uncapitalize,
  Undefined: () => Undefined,
  Union: () => Union,
  Unknown: () => Unknown,
  Unsafe: () => Unsafe,
  Uppercase: () => Uppercase,
  Void: () => Void
});

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/type/type/index.mjs
var Type = type_exports3;

// src/sdk/utils/datetime.ts
function toIsoString(value, fieldName = "datetime") {
  if (value instanceof Date) {
    return value.toISOString();
  }
  if (typeof value !== "string") {
    throw new Error(`${fieldName} must be a Date or ISO datetime string`);
  }
  const parsed = new Date(value);
  if (!Number.isFinite(parsed.getTime())) {
    throw new Error(`${fieldName} is not a valid datetime string: ${value}`);
  }
  return parsed.toISOString();
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/errors/function.mjs
function DefaultErrorFunction(error) {
  switch (error.errorType) {
    case ValueErrorType.ArrayContains:
      return "Expected array to contain at least one matching value";
    case ValueErrorType.ArrayMaxContains:
      return `Expected array to contain no more than ${error.schema.maxContains} matching values`;
    case ValueErrorType.ArrayMinContains:
      return `Expected array to contain at least ${error.schema.minContains} matching values`;
    case ValueErrorType.ArrayMaxItems:
      return `Expected array length to be less or equal to ${error.schema.maxItems}`;
    case ValueErrorType.ArrayMinItems:
      return `Expected array length to be greater or equal to ${error.schema.minItems}`;
    case ValueErrorType.ArrayUniqueItems:
      return "Expected array elements to be unique";
    case ValueErrorType.Array:
      return "Expected array";
    case ValueErrorType.AsyncIterator:
      return "Expected AsyncIterator";
    case ValueErrorType.BigIntExclusiveMaximum:
      return `Expected bigint to be less than ${error.schema.exclusiveMaximum}`;
    case ValueErrorType.BigIntExclusiveMinimum:
      return `Expected bigint to be greater than ${error.schema.exclusiveMinimum}`;
    case ValueErrorType.BigIntMaximum:
      return `Expected bigint to be less or equal to ${error.schema.maximum}`;
    case ValueErrorType.BigIntMinimum:
      return `Expected bigint to be greater or equal to ${error.schema.minimum}`;
    case ValueErrorType.BigIntMultipleOf:
      return `Expected bigint to be a multiple of ${error.schema.multipleOf}`;
    case ValueErrorType.BigInt:
      return "Expected bigint";
    case ValueErrorType.Boolean:
      return "Expected boolean";
    case ValueErrorType.DateExclusiveMinimumTimestamp:
      return `Expected Date timestamp to be greater than ${error.schema.exclusiveMinimumTimestamp}`;
    case ValueErrorType.DateExclusiveMaximumTimestamp:
      return `Expected Date timestamp to be less than ${error.schema.exclusiveMaximumTimestamp}`;
    case ValueErrorType.DateMinimumTimestamp:
      return `Expected Date timestamp to be greater or equal to ${error.schema.minimumTimestamp}`;
    case ValueErrorType.DateMaximumTimestamp:
      return `Expected Date timestamp to be less or equal to ${error.schema.maximumTimestamp}`;
    case ValueErrorType.DateMultipleOfTimestamp:
      return `Expected Date timestamp to be a multiple of ${error.schema.multipleOfTimestamp}`;
    case ValueErrorType.Date:
      return "Expected Date";
    case ValueErrorType.Function:
      return "Expected function";
    case ValueErrorType.IntegerExclusiveMaximum:
      return `Expected integer to be less than ${error.schema.exclusiveMaximum}`;
    case ValueErrorType.IntegerExclusiveMinimum:
      return `Expected integer to be greater than ${error.schema.exclusiveMinimum}`;
    case ValueErrorType.IntegerMaximum:
      return `Expected integer to be less or equal to ${error.schema.maximum}`;
    case ValueErrorType.IntegerMinimum:
      return `Expected integer to be greater or equal to ${error.schema.minimum}`;
    case ValueErrorType.IntegerMultipleOf:
      return `Expected integer to be a multiple of ${error.schema.multipleOf}`;
    case ValueErrorType.Integer:
      return "Expected integer";
    case ValueErrorType.IntersectUnevaluatedProperties:
      return "Unexpected property";
    case ValueErrorType.Intersect:
      return "Expected all values to match";
    case ValueErrorType.Iterator:
      return "Expected Iterator";
    case ValueErrorType.Literal:
      return `Expected ${typeof error.schema.const === "string" ? `'${error.schema.const}'` : error.schema.const}`;
    case ValueErrorType.Never:
      return "Never";
    case ValueErrorType.Not:
      return "Value should not match";
    case ValueErrorType.Null:
      return "Expected null";
    case ValueErrorType.NumberExclusiveMaximum:
      return `Expected number to be less than ${error.schema.exclusiveMaximum}`;
    case ValueErrorType.NumberExclusiveMinimum:
      return `Expected number to be greater than ${error.schema.exclusiveMinimum}`;
    case ValueErrorType.NumberMaximum:
      return `Expected number to be less or equal to ${error.schema.maximum}`;
    case ValueErrorType.NumberMinimum:
      return `Expected number to be greater or equal to ${error.schema.minimum}`;
    case ValueErrorType.NumberMultipleOf:
      return `Expected number to be a multiple of ${error.schema.multipleOf}`;
    case ValueErrorType.Number:
      return "Expected number";
    case ValueErrorType.Object:
      return "Expected object";
    case ValueErrorType.ObjectAdditionalProperties:
      return "Unexpected property";
    case ValueErrorType.ObjectMaxProperties:
      return `Expected object to have no more than ${error.schema.maxProperties} properties`;
    case ValueErrorType.ObjectMinProperties:
      return `Expected object to have at least ${error.schema.minProperties} properties`;
    case ValueErrorType.ObjectRequiredProperty:
      return "Expected required property";
    case ValueErrorType.Promise:
      return "Expected Promise";
    case ValueErrorType.RegExp:
      return "Expected string to match regular expression";
    case ValueErrorType.StringFormatUnknown:
      return `Unknown format '${error.schema.format}'`;
    case ValueErrorType.StringFormat:
      return `Expected string to match '${error.schema.format}' format`;
    case ValueErrorType.StringMaxLength:
      return `Expected string length less or equal to ${error.schema.maxLength}`;
    case ValueErrorType.StringMinLength:
      return `Expected string length greater or equal to ${error.schema.minLength}`;
    case ValueErrorType.StringPattern:
      return `Expected string to match '${error.schema.pattern}'`;
    case ValueErrorType.String:
      return "Expected string";
    case ValueErrorType.Symbol:
      return "Expected symbol";
    case ValueErrorType.TupleLength:
      return `Expected tuple to have ${error.schema.maxItems || 0} elements`;
    case ValueErrorType.Tuple:
      return "Expected tuple";
    case ValueErrorType.Uint8ArrayMaxByteLength:
      return `Expected byte length less or equal to ${error.schema.maxByteLength}`;
    case ValueErrorType.Uint8ArrayMinByteLength:
      return `Expected byte length greater or equal to ${error.schema.minByteLength}`;
    case ValueErrorType.Uint8Array:
      return "Expected Uint8Array";
    case ValueErrorType.Undefined:
      return "Expected undefined";
    case ValueErrorType.Union:
      return "Expected union value";
    case ValueErrorType.Void:
      return "Expected void";
    case ValueErrorType.Kind:
      return `Expected kind '${error.schema[Kind]}'`;
    default:
      return "Unknown error type";
  }
}
var errorFunction = DefaultErrorFunction;
function GetErrorFunction() {
  return errorFunction;
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/value/deref/deref.mjs
var TypeDereferenceError = class extends TypeBoxError {
  constructor(schema) {
    super(`Unable to dereference schema with $id '${schema.$ref}'`);
    this.schema = schema;
  }
};
function Resolve(schema, references) {
  const target = references.find((target2) => target2.$id === schema.$ref);
  if (target === void 0)
    throw new TypeDereferenceError(schema);
  return Deref(target, references);
}
function Pushref(schema, references) {
  if (!IsString2(schema.$id) || references.some((target) => target.$id === schema.$id))
    return references;
  references.push(schema);
  return references;
}
function Deref(schema, references) {
  return schema[Kind] === "This" || schema[Kind] === "Ref" ? Resolve(schema, references) : schema;
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/value/hash/hash.mjs
var ValueHashError = class extends TypeBoxError {
  constructor(value) {
    super(`Unable to hash value`);
    this.value = value;
  }
};
var ByteMarker;
(function(ByteMarker2) {
  ByteMarker2[ByteMarker2["Undefined"] = 0] = "Undefined";
  ByteMarker2[ByteMarker2["Null"] = 1] = "Null";
  ByteMarker2[ByteMarker2["Boolean"] = 2] = "Boolean";
  ByteMarker2[ByteMarker2["Number"] = 3] = "Number";
  ByteMarker2[ByteMarker2["String"] = 4] = "String";
  ByteMarker2[ByteMarker2["Object"] = 5] = "Object";
  ByteMarker2[ByteMarker2["Array"] = 6] = "Array";
  ByteMarker2[ByteMarker2["Date"] = 7] = "Date";
  ByteMarker2[ByteMarker2["Uint8Array"] = 8] = "Uint8Array";
  ByteMarker2[ByteMarker2["Symbol"] = 9] = "Symbol";
  ByteMarker2[ByteMarker2["BigInt"] = 10] = "BigInt";
})(ByteMarker || (ByteMarker = {}));
var Accumulator = BigInt("14695981039346656037");
var [Prime, Size] = [BigInt("1099511628211"), BigInt(
  "18446744073709551616"
  /* 2 ^ 64 */
)];
var Bytes = Array.from({ length: 256 }).map((_, i) => BigInt(i));
var F64 = new Float64Array(1);
var F64In = new DataView(F64.buffer);
var F64Out = new Uint8Array(F64.buffer);
function* NumberToBytes(value) {
  const byteCount = value === 0 ? 1 : Math.ceil(Math.floor(Math.log2(value) + 1) / 8);
  for (let i = 0; i < byteCount; i++) {
    yield value >> 8 * (byteCount - 1 - i) & 255;
  }
}
function ArrayType2(value) {
  FNV1A64(ByteMarker.Array);
  for (const item of value) {
    Visit4(item);
  }
}
function BooleanType(value) {
  FNV1A64(ByteMarker.Boolean);
  FNV1A64(value ? 1 : 0);
}
function BigIntType(value) {
  FNV1A64(ByteMarker.BigInt);
  F64In.setBigInt64(0, value);
  for (const byte of F64Out) {
    FNV1A64(byte);
  }
}
function DateType2(value) {
  FNV1A64(ByteMarker.Date);
  Visit4(value.getTime());
}
function NullType(value) {
  FNV1A64(ByteMarker.Null);
}
function NumberType(value) {
  FNV1A64(ByteMarker.Number);
  F64In.setFloat64(0, value);
  for (const byte of F64Out) {
    FNV1A64(byte);
  }
}
function ObjectType2(value) {
  FNV1A64(ByteMarker.Object);
  for (const key of globalThis.Object.getOwnPropertyNames(value).sort()) {
    Visit4(key);
    Visit4(value[key]);
  }
}
function StringType(value) {
  FNV1A64(ByteMarker.String);
  for (let i = 0; i < value.length; i++) {
    for (const byte of NumberToBytes(value.charCodeAt(i))) {
      FNV1A64(byte);
    }
  }
}
function SymbolType(value) {
  FNV1A64(ByteMarker.Symbol);
  Visit4(value.description);
}
function Uint8ArrayType2(value) {
  FNV1A64(ByteMarker.Uint8Array);
  for (let i = 0; i < value.length; i++) {
    FNV1A64(value[i]);
  }
}
function UndefinedType(value) {
  return FNV1A64(ByteMarker.Undefined);
}
function Visit4(value) {
  if (IsArray2(value))
    return ArrayType2(value);
  if (IsBoolean2(value))
    return BooleanType(value);
  if (IsBigInt2(value))
    return BigIntType(value);
  if (IsDate2(value))
    return DateType2(value);
  if (IsNull2(value))
    return NullType(value);
  if (IsNumber2(value))
    return NumberType(value);
  if (IsObject2(value))
    return ObjectType2(value);
  if (IsString2(value))
    return StringType(value);
  if (IsSymbol2(value))
    return SymbolType(value);
  if (IsUint8Array2(value))
    return Uint8ArrayType2(value);
  if (IsUndefined2(value))
    return UndefinedType(value);
  throw new ValueHashError(value);
}
function FNV1A64(byte) {
  Accumulator = Accumulator ^ Bytes[byte];
  Accumulator = Accumulator * Prime % Size;
}
function Hash(value) {
  Accumulator = BigInt("14695981039346656037");
  Visit4(value);
  return Accumulator;
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/value/check/check.mjs
var ValueCheckUnknownTypeError = class extends TypeBoxError {
  constructor(schema) {
    super(`Unknown type`);
    this.schema = schema;
  }
};
function IsAnyOrUnknown(schema) {
  return schema[Kind] === "Any" || schema[Kind] === "Unknown";
}
function IsDefined(value) {
  return value !== void 0;
}
function FromAny2(schema, references, value) {
  return true;
}
function FromArgument2(schema, references, value) {
  return true;
}
function FromArray7(schema, references, value) {
  if (!IsArray2(value))
    return false;
  if (IsDefined(schema.minItems) && !(value.length >= schema.minItems)) {
    return false;
  }
  if (IsDefined(schema.maxItems) && !(value.length <= schema.maxItems)) {
    return false;
  }
  if (!value.every((value2) => Visit5(schema.items, references, value2))) {
    return false;
  }
  if (schema.uniqueItems === true && !(function() {
    const set = /* @__PURE__ */ new Set();
    for (const element of value) {
      const hashed = Hash(element);
      if (set.has(hashed)) {
        return false;
      } else {
        set.add(hashed);
      }
    }
    return true;
  })()) {
    return false;
  }
  if (!(IsDefined(schema.contains) || IsNumber2(schema.minContains) || IsNumber2(schema.maxContains))) {
    return true;
  }
  const containsSchema = IsDefined(schema.contains) ? schema.contains : Never();
  const containsCount = value.reduce((acc, value2) => Visit5(containsSchema, references, value2) ? acc + 1 : acc, 0);
  if (containsCount === 0) {
    return false;
  }
  if (IsNumber2(schema.minContains) && containsCount < schema.minContains) {
    return false;
  }
  if (IsNumber2(schema.maxContains) && containsCount > schema.maxContains) {
    return false;
  }
  return true;
}
function FromAsyncIterator4(schema, references, value) {
  return IsAsyncIterator2(value);
}
function FromBigInt2(schema, references, value) {
  if (!IsBigInt2(value))
    return false;
  if (IsDefined(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
    return false;
  }
  if (IsDefined(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
    return false;
  }
  if (IsDefined(schema.maximum) && !(value <= schema.maximum)) {
    return false;
  }
  if (IsDefined(schema.minimum) && !(value >= schema.minimum)) {
    return false;
  }
  if (IsDefined(schema.multipleOf) && !(value % schema.multipleOf === BigInt(0))) {
    return false;
  }
  return true;
}
function FromBoolean2(schema, references, value) {
  return IsBoolean2(value);
}
function FromConstructor4(schema, references, value) {
  return Visit5(schema.returns, references, value.prototype);
}
function FromDate2(schema, references, value) {
  if (!IsDate2(value))
    return false;
  if (IsDefined(schema.exclusiveMaximumTimestamp) && !(value.getTime() < schema.exclusiveMaximumTimestamp)) {
    return false;
  }
  if (IsDefined(schema.exclusiveMinimumTimestamp) && !(value.getTime() > schema.exclusiveMinimumTimestamp)) {
    return false;
  }
  if (IsDefined(schema.maximumTimestamp) && !(value.getTime() <= schema.maximumTimestamp)) {
    return false;
  }
  if (IsDefined(schema.minimumTimestamp) && !(value.getTime() >= schema.minimumTimestamp)) {
    return false;
  }
  if (IsDefined(schema.multipleOfTimestamp) && !(value.getTime() % schema.multipleOfTimestamp === 0)) {
    return false;
  }
  return true;
}
function FromFunction4(schema, references, value) {
  return IsFunction2(value);
}
function FromImport(schema, references, value) {
  const definitions = globalThis.Object.values(schema.$defs);
  const target = schema.$defs[schema.$ref];
  return Visit5(target, [...references, ...definitions], value);
}
function FromInteger2(schema, references, value) {
  if (!IsInteger(value)) {
    return false;
  }
  if (IsDefined(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
    return false;
  }
  if (IsDefined(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
    return false;
  }
  if (IsDefined(schema.maximum) && !(value <= schema.maximum)) {
    return false;
  }
  if (IsDefined(schema.minimum) && !(value >= schema.minimum)) {
    return false;
  }
  if (IsDefined(schema.multipleOf) && !(value % schema.multipleOf === 0)) {
    return false;
  }
  return true;
}
function FromIntersect9(schema, references, value) {
  const check1 = schema.allOf.every((schema2) => Visit5(schema2, references, value));
  if (schema.unevaluatedProperties === false) {
    const keyPattern = new RegExp(KeyOfPattern(schema));
    const check2 = Object.getOwnPropertyNames(value).every((key) => keyPattern.test(key));
    return check1 && check2;
  } else if (IsSchema(schema.unevaluatedProperties)) {
    const keyCheck = new RegExp(KeyOfPattern(schema));
    const check2 = Object.getOwnPropertyNames(value).every((key) => keyCheck.test(key) || Visit5(schema.unevaluatedProperties, references, value[key]));
    return check1 && check2;
  } else {
    return check1;
  }
}
function FromIterator4(schema, references, value) {
  return IsIterator2(value);
}
function FromLiteral3(schema, references, value) {
  return value === schema.const;
}
function FromNever2(schema, references, value) {
  return false;
}
function FromNot2(schema, references, value) {
  return !Visit5(schema.not, references, value);
}
function FromNull2(schema, references, value) {
  return IsNull2(value);
}
function FromNumber2(schema, references, value) {
  if (!TypeSystemPolicy.IsNumberLike(value))
    return false;
  if (IsDefined(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
    return false;
  }
  if (IsDefined(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
    return false;
  }
  if (IsDefined(schema.minimum) && !(value >= schema.minimum)) {
    return false;
  }
  if (IsDefined(schema.maximum) && !(value <= schema.maximum)) {
    return false;
  }
  if (IsDefined(schema.multipleOf) && !(value % schema.multipleOf === 0)) {
    return false;
  }
  return true;
}
function FromObject8(schema, references, value) {
  if (!TypeSystemPolicy.IsObjectLike(value))
    return false;
  if (IsDefined(schema.minProperties) && !(Object.getOwnPropertyNames(value).length >= schema.minProperties)) {
    return false;
  }
  if (IsDefined(schema.maxProperties) && !(Object.getOwnPropertyNames(value).length <= schema.maxProperties)) {
    return false;
  }
  const knownKeys = Object.getOwnPropertyNames(schema.properties);
  for (const knownKey of knownKeys) {
    const property = schema.properties[knownKey];
    if (schema.required && schema.required.includes(knownKey)) {
      if (!Visit5(property, references, value[knownKey])) {
        return false;
      }
      if ((ExtendsUndefinedCheck(property) || IsAnyOrUnknown(property)) && !(knownKey in value)) {
        return false;
      }
    } else {
      if (TypeSystemPolicy.IsExactOptionalProperty(value, knownKey) && !Visit5(property, references, value[knownKey])) {
        return false;
      }
    }
  }
  if (schema.additionalProperties === false) {
    const valueKeys = Object.getOwnPropertyNames(value);
    if (schema.required && schema.required.length === knownKeys.length && valueKeys.length === knownKeys.length) {
      return true;
    } else {
      return valueKeys.every((valueKey) => knownKeys.includes(valueKey));
    }
  } else if (typeof schema.additionalProperties === "object") {
    const valueKeys = Object.getOwnPropertyNames(value);
    return valueKeys.every((key) => knownKeys.includes(key) || Visit5(schema.additionalProperties, references, value[key]));
  } else {
    return true;
  }
}
function FromPromise4(schema, references, value) {
  return IsPromise(value);
}
function FromRecord4(schema, references, value) {
  if (!TypeSystemPolicy.IsRecordLike(value)) {
    return false;
  }
  if (IsDefined(schema.minProperties) && !(Object.getOwnPropertyNames(value).length >= schema.minProperties)) {
    return false;
  }
  if (IsDefined(schema.maxProperties) && !(Object.getOwnPropertyNames(value).length <= schema.maxProperties)) {
    return false;
  }
  const [patternKey, patternSchema] = Object.entries(schema.patternProperties)[0];
  const regex = new RegExp(patternKey);
  const check1 = Object.entries(value).every(([key, value2]) => {
    return regex.test(key) ? Visit5(patternSchema, references, value2) : true;
  });
  const check2 = typeof schema.additionalProperties === "object" ? Object.entries(value).every(([key, value2]) => {
    return !regex.test(key) ? Visit5(schema.additionalProperties, references, value2) : true;
  }) : true;
  const check3 = schema.additionalProperties === false ? Object.getOwnPropertyNames(value).every((key) => {
    return regex.test(key);
  }) : true;
  return check1 && check2 && check3;
}
function FromRef5(schema, references, value) {
  return Visit5(Deref(schema, references), references, value);
}
function FromRegExp2(schema, references, value) {
  const regex = new RegExp(schema.source, schema.flags);
  if (IsDefined(schema.minLength)) {
    if (!(value.length >= schema.minLength))
      return false;
  }
  if (IsDefined(schema.maxLength)) {
    if (!(value.length <= schema.maxLength))
      return false;
  }
  return regex.test(value);
}
function FromString2(schema, references, value) {
  if (!IsString2(value)) {
    return false;
  }
  if (IsDefined(schema.minLength)) {
    if (!(value.length >= schema.minLength))
      return false;
  }
  if (IsDefined(schema.maxLength)) {
    if (!(value.length <= schema.maxLength))
      return false;
  }
  if (IsDefined(schema.pattern)) {
    const regex = new RegExp(schema.pattern);
    if (!regex.test(value))
      return false;
  }
  if (IsDefined(schema.format)) {
    if (!format_exports.Has(schema.format))
      return false;
    const func = format_exports.Get(schema.format);
    return func(value);
  }
  return true;
}
function FromSymbol2(schema, references, value) {
  return IsSymbol2(value);
}
function FromTemplateLiteral4(schema, references, value) {
  return IsString2(value) && new RegExp(schema.pattern).test(value);
}
function FromThis(schema, references, value) {
  return Visit5(Deref(schema, references), references, value);
}
function FromTuple6(schema, references, value) {
  if (!IsArray2(value)) {
    return false;
  }
  if (schema.items === void 0 && !(value.length === 0)) {
    return false;
  }
  if (!(value.length === schema.maxItems)) {
    return false;
  }
  if (!schema.items) {
    return true;
  }
  for (let i = 0; i < schema.items.length; i++) {
    if (!Visit5(schema.items[i], references, value[i]))
      return false;
  }
  return true;
}
function FromUndefined2(schema, references, value) {
  return IsUndefined2(value);
}
function FromUnion11(schema, references, value) {
  return schema.anyOf.some((inner) => Visit5(inner, references, value));
}
function FromUint8Array2(schema, references, value) {
  if (!IsUint8Array2(value)) {
    return false;
  }
  if (IsDefined(schema.maxByteLength) && !(value.length <= schema.maxByteLength)) {
    return false;
  }
  if (IsDefined(schema.minByteLength) && !(value.length >= schema.minByteLength)) {
    return false;
  }
  return true;
}
function FromUnknown2(schema, references, value) {
  return true;
}
function FromVoid2(schema, references, value) {
  return TypeSystemPolicy.IsVoidLike(value);
}
function FromKind(schema, references, value) {
  if (!type_exports2.Has(schema[Kind]))
    return false;
  const func = type_exports2.Get(schema[Kind]);
  return func(schema, value);
}
function Visit5(schema, references, value) {
  const references_ = IsDefined(schema.$id) ? Pushref(schema, references) : references;
  const schema_ = schema;
  switch (schema_[Kind]) {
    case "Any":
      return FromAny2(schema_, references_, value);
    case "Argument":
      return FromArgument2(schema_, references_, value);
    case "Array":
      return FromArray7(schema_, references_, value);
    case "AsyncIterator":
      return FromAsyncIterator4(schema_, references_, value);
    case "BigInt":
      return FromBigInt2(schema_, references_, value);
    case "Boolean":
      return FromBoolean2(schema_, references_, value);
    case "Constructor":
      return FromConstructor4(schema_, references_, value);
    case "Date":
      return FromDate2(schema_, references_, value);
    case "Function":
      return FromFunction4(schema_, references_, value);
    case "Import":
      return FromImport(schema_, references_, value);
    case "Integer":
      return FromInteger2(schema_, references_, value);
    case "Intersect":
      return FromIntersect9(schema_, references_, value);
    case "Iterator":
      return FromIterator4(schema_, references_, value);
    case "Literal":
      return FromLiteral3(schema_, references_, value);
    case "Never":
      return FromNever2(schema_, references_, value);
    case "Not":
      return FromNot2(schema_, references_, value);
    case "Null":
      return FromNull2(schema_, references_, value);
    case "Number":
      return FromNumber2(schema_, references_, value);
    case "Object":
      return FromObject8(schema_, references_, value);
    case "Promise":
      return FromPromise4(schema_, references_, value);
    case "Record":
      return FromRecord4(schema_, references_, value);
    case "Ref":
      return FromRef5(schema_, references_, value);
    case "RegExp":
      return FromRegExp2(schema_, references_, value);
    case "String":
      return FromString2(schema_, references_, value);
    case "Symbol":
      return FromSymbol2(schema_, references_, value);
    case "TemplateLiteral":
      return FromTemplateLiteral4(schema_, references_, value);
    case "This":
      return FromThis(schema_, references_, value);
    case "Tuple":
      return FromTuple6(schema_, references_, value);
    case "Undefined":
      return FromUndefined2(schema_, references_, value);
    case "Union":
      return FromUnion11(schema_, references_, value);
    case "Uint8Array":
      return FromUint8Array2(schema_, references_, value);
    case "Unknown":
      return FromUnknown2(schema_, references_, value);
    case "Void":
      return FromVoid2(schema_, references_, value);
    default:
      if (!type_exports2.Has(schema_[Kind]))
        throw new ValueCheckUnknownTypeError(schema_);
      return FromKind(schema_, references_, value);
  }
}
function Check(...args) {
  return args.length === 3 ? Visit5(args[0], args[1], args[2]) : Visit5(args[0], [], args[1]);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/errors/errors.mjs
var ValueErrorType;
(function(ValueErrorType2) {
  ValueErrorType2[ValueErrorType2["ArrayContains"] = 0] = "ArrayContains";
  ValueErrorType2[ValueErrorType2["ArrayMaxContains"] = 1] = "ArrayMaxContains";
  ValueErrorType2[ValueErrorType2["ArrayMaxItems"] = 2] = "ArrayMaxItems";
  ValueErrorType2[ValueErrorType2["ArrayMinContains"] = 3] = "ArrayMinContains";
  ValueErrorType2[ValueErrorType2["ArrayMinItems"] = 4] = "ArrayMinItems";
  ValueErrorType2[ValueErrorType2["ArrayUniqueItems"] = 5] = "ArrayUniqueItems";
  ValueErrorType2[ValueErrorType2["Array"] = 6] = "Array";
  ValueErrorType2[ValueErrorType2["AsyncIterator"] = 7] = "AsyncIterator";
  ValueErrorType2[ValueErrorType2["BigIntExclusiveMaximum"] = 8] = "BigIntExclusiveMaximum";
  ValueErrorType2[ValueErrorType2["BigIntExclusiveMinimum"] = 9] = "BigIntExclusiveMinimum";
  ValueErrorType2[ValueErrorType2["BigIntMaximum"] = 10] = "BigIntMaximum";
  ValueErrorType2[ValueErrorType2["BigIntMinimum"] = 11] = "BigIntMinimum";
  ValueErrorType2[ValueErrorType2["BigIntMultipleOf"] = 12] = "BigIntMultipleOf";
  ValueErrorType2[ValueErrorType2["BigInt"] = 13] = "BigInt";
  ValueErrorType2[ValueErrorType2["Boolean"] = 14] = "Boolean";
  ValueErrorType2[ValueErrorType2["DateExclusiveMaximumTimestamp"] = 15] = "DateExclusiveMaximumTimestamp";
  ValueErrorType2[ValueErrorType2["DateExclusiveMinimumTimestamp"] = 16] = "DateExclusiveMinimumTimestamp";
  ValueErrorType2[ValueErrorType2["DateMaximumTimestamp"] = 17] = "DateMaximumTimestamp";
  ValueErrorType2[ValueErrorType2["DateMinimumTimestamp"] = 18] = "DateMinimumTimestamp";
  ValueErrorType2[ValueErrorType2["DateMultipleOfTimestamp"] = 19] = "DateMultipleOfTimestamp";
  ValueErrorType2[ValueErrorType2["Date"] = 20] = "Date";
  ValueErrorType2[ValueErrorType2["Function"] = 21] = "Function";
  ValueErrorType2[ValueErrorType2["IntegerExclusiveMaximum"] = 22] = "IntegerExclusiveMaximum";
  ValueErrorType2[ValueErrorType2["IntegerExclusiveMinimum"] = 23] = "IntegerExclusiveMinimum";
  ValueErrorType2[ValueErrorType2["IntegerMaximum"] = 24] = "IntegerMaximum";
  ValueErrorType2[ValueErrorType2["IntegerMinimum"] = 25] = "IntegerMinimum";
  ValueErrorType2[ValueErrorType2["IntegerMultipleOf"] = 26] = "IntegerMultipleOf";
  ValueErrorType2[ValueErrorType2["Integer"] = 27] = "Integer";
  ValueErrorType2[ValueErrorType2["IntersectUnevaluatedProperties"] = 28] = "IntersectUnevaluatedProperties";
  ValueErrorType2[ValueErrorType2["Intersect"] = 29] = "Intersect";
  ValueErrorType2[ValueErrorType2["Iterator"] = 30] = "Iterator";
  ValueErrorType2[ValueErrorType2["Kind"] = 31] = "Kind";
  ValueErrorType2[ValueErrorType2["Literal"] = 32] = "Literal";
  ValueErrorType2[ValueErrorType2["Never"] = 33] = "Never";
  ValueErrorType2[ValueErrorType2["Not"] = 34] = "Not";
  ValueErrorType2[ValueErrorType2["Null"] = 35] = "Null";
  ValueErrorType2[ValueErrorType2["NumberExclusiveMaximum"] = 36] = "NumberExclusiveMaximum";
  ValueErrorType2[ValueErrorType2["NumberExclusiveMinimum"] = 37] = "NumberExclusiveMinimum";
  ValueErrorType2[ValueErrorType2["NumberMaximum"] = 38] = "NumberMaximum";
  ValueErrorType2[ValueErrorType2["NumberMinimum"] = 39] = "NumberMinimum";
  ValueErrorType2[ValueErrorType2["NumberMultipleOf"] = 40] = "NumberMultipleOf";
  ValueErrorType2[ValueErrorType2["Number"] = 41] = "Number";
  ValueErrorType2[ValueErrorType2["ObjectAdditionalProperties"] = 42] = "ObjectAdditionalProperties";
  ValueErrorType2[ValueErrorType2["ObjectMaxProperties"] = 43] = "ObjectMaxProperties";
  ValueErrorType2[ValueErrorType2["ObjectMinProperties"] = 44] = "ObjectMinProperties";
  ValueErrorType2[ValueErrorType2["ObjectRequiredProperty"] = 45] = "ObjectRequiredProperty";
  ValueErrorType2[ValueErrorType2["Object"] = 46] = "Object";
  ValueErrorType2[ValueErrorType2["Promise"] = 47] = "Promise";
  ValueErrorType2[ValueErrorType2["RegExp"] = 48] = "RegExp";
  ValueErrorType2[ValueErrorType2["StringFormatUnknown"] = 49] = "StringFormatUnknown";
  ValueErrorType2[ValueErrorType2["StringFormat"] = 50] = "StringFormat";
  ValueErrorType2[ValueErrorType2["StringMaxLength"] = 51] = "StringMaxLength";
  ValueErrorType2[ValueErrorType2["StringMinLength"] = 52] = "StringMinLength";
  ValueErrorType2[ValueErrorType2["StringPattern"] = 53] = "StringPattern";
  ValueErrorType2[ValueErrorType2["String"] = 54] = "String";
  ValueErrorType2[ValueErrorType2["Symbol"] = 55] = "Symbol";
  ValueErrorType2[ValueErrorType2["TupleLength"] = 56] = "TupleLength";
  ValueErrorType2[ValueErrorType2["Tuple"] = 57] = "Tuple";
  ValueErrorType2[ValueErrorType2["Uint8ArrayMaxByteLength"] = 58] = "Uint8ArrayMaxByteLength";
  ValueErrorType2[ValueErrorType2["Uint8ArrayMinByteLength"] = 59] = "Uint8ArrayMinByteLength";
  ValueErrorType2[ValueErrorType2["Uint8Array"] = 60] = "Uint8Array";
  ValueErrorType2[ValueErrorType2["Undefined"] = 61] = "Undefined";
  ValueErrorType2[ValueErrorType2["Union"] = 62] = "Union";
  ValueErrorType2[ValueErrorType2["Void"] = 63] = "Void";
})(ValueErrorType || (ValueErrorType = {}));
var ValueErrorsUnknownTypeError = class extends TypeBoxError {
  constructor(schema) {
    super("Unknown type");
    this.schema = schema;
  }
};
function EscapeKey(key) {
  return key.replace(/~/g, "~0").replace(/\//g, "~1");
}
function IsDefined2(value) {
  return value !== void 0;
}
var ValueErrorIterator = class {
  constructor(iterator) {
    this.iterator = iterator;
  }
  [Symbol.iterator]() {
    return this.iterator;
  }
  /** Returns the first value error or undefined if no errors */
  First() {
    const next = this.iterator.next();
    return next.done ? void 0 : next.value;
  }
};
function Create(errorType, schema, path, value, errors = []) {
  return {
    type: errorType,
    schema,
    path,
    value,
    message: GetErrorFunction()({ errorType, path, schema, value, errors }),
    errors
  };
}
function* FromAny3(schema, references, path, value) {
}
function* FromArgument3(schema, references, path, value) {
}
function* FromArray8(schema, references, path, value) {
  if (!IsArray2(value)) {
    return yield Create(ValueErrorType.Array, schema, path, value);
  }
  if (IsDefined2(schema.minItems) && !(value.length >= schema.minItems)) {
    yield Create(ValueErrorType.ArrayMinItems, schema, path, value);
  }
  if (IsDefined2(schema.maxItems) && !(value.length <= schema.maxItems)) {
    yield Create(ValueErrorType.ArrayMaxItems, schema, path, value);
  }
  for (let i = 0; i < value.length; i++) {
    yield* Visit6(schema.items, references, `${path}/${i}`, value[i]);
  }
  if (schema.uniqueItems === true && !(function() {
    const set = /* @__PURE__ */ new Set();
    for (const element of value) {
      const hashed = Hash(element);
      if (set.has(hashed)) {
        return false;
      } else {
        set.add(hashed);
      }
    }
    return true;
  })()) {
    yield Create(ValueErrorType.ArrayUniqueItems, schema, path, value);
  }
  if (!(IsDefined2(schema.contains) || IsDefined2(schema.minContains) || IsDefined2(schema.maxContains))) {
    return;
  }
  const containsSchema = IsDefined2(schema.contains) ? schema.contains : Never();
  const containsCount = value.reduce((acc, value2, index) => Visit6(containsSchema, references, `${path}${index}`, value2).next().done === true ? acc + 1 : acc, 0);
  if (containsCount === 0) {
    yield Create(ValueErrorType.ArrayContains, schema, path, value);
  }
  if (IsNumber2(schema.minContains) && containsCount < schema.minContains) {
    yield Create(ValueErrorType.ArrayMinContains, schema, path, value);
  }
  if (IsNumber2(schema.maxContains) && containsCount > schema.maxContains) {
    yield Create(ValueErrorType.ArrayMaxContains, schema, path, value);
  }
}
function* FromAsyncIterator5(schema, references, path, value) {
  if (!IsAsyncIterator2(value))
    yield Create(ValueErrorType.AsyncIterator, schema, path, value);
}
function* FromBigInt3(schema, references, path, value) {
  if (!IsBigInt2(value))
    return yield Create(ValueErrorType.BigInt, schema, path, value);
  if (IsDefined2(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
    yield Create(ValueErrorType.BigIntExclusiveMaximum, schema, path, value);
  }
  if (IsDefined2(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
    yield Create(ValueErrorType.BigIntExclusiveMinimum, schema, path, value);
  }
  if (IsDefined2(schema.maximum) && !(value <= schema.maximum)) {
    yield Create(ValueErrorType.BigIntMaximum, schema, path, value);
  }
  if (IsDefined2(schema.minimum) && !(value >= schema.minimum)) {
    yield Create(ValueErrorType.BigIntMinimum, schema, path, value);
  }
  if (IsDefined2(schema.multipleOf) && !(value % schema.multipleOf === BigInt(0))) {
    yield Create(ValueErrorType.BigIntMultipleOf, schema, path, value);
  }
}
function* FromBoolean3(schema, references, path, value) {
  if (!IsBoolean2(value))
    yield Create(ValueErrorType.Boolean, schema, path, value);
}
function* FromConstructor5(schema, references, path, value) {
  yield* Visit6(schema.returns, references, path, value.prototype);
}
function* FromDate3(schema, references, path, value) {
  if (!IsDate2(value))
    return yield Create(ValueErrorType.Date, schema, path, value);
  if (IsDefined2(schema.exclusiveMaximumTimestamp) && !(value.getTime() < schema.exclusiveMaximumTimestamp)) {
    yield Create(ValueErrorType.DateExclusiveMaximumTimestamp, schema, path, value);
  }
  if (IsDefined2(schema.exclusiveMinimumTimestamp) && !(value.getTime() > schema.exclusiveMinimumTimestamp)) {
    yield Create(ValueErrorType.DateExclusiveMinimumTimestamp, schema, path, value);
  }
  if (IsDefined2(schema.maximumTimestamp) && !(value.getTime() <= schema.maximumTimestamp)) {
    yield Create(ValueErrorType.DateMaximumTimestamp, schema, path, value);
  }
  if (IsDefined2(schema.minimumTimestamp) && !(value.getTime() >= schema.minimumTimestamp)) {
    yield Create(ValueErrorType.DateMinimumTimestamp, schema, path, value);
  }
  if (IsDefined2(schema.multipleOfTimestamp) && !(value.getTime() % schema.multipleOfTimestamp === 0)) {
    yield Create(ValueErrorType.DateMultipleOfTimestamp, schema, path, value);
  }
}
function* FromFunction5(schema, references, path, value) {
  if (!IsFunction2(value))
    yield Create(ValueErrorType.Function, schema, path, value);
}
function* FromImport2(schema, references, path, value) {
  const definitions = globalThis.Object.values(schema.$defs);
  const target = schema.$defs[schema.$ref];
  yield* Visit6(target, [...references, ...definitions], path, value);
}
function* FromInteger3(schema, references, path, value) {
  if (!IsInteger(value))
    return yield Create(ValueErrorType.Integer, schema, path, value);
  if (IsDefined2(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
    yield Create(ValueErrorType.IntegerExclusiveMaximum, schema, path, value);
  }
  if (IsDefined2(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
    yield Create(ValueErrorType.IntegerExclusiveMinimum, schema, path, value);
  }
  if (IsDefined2(schema.maximum) && !(value <= schema.maximum)) {
    yield Create(ValueErrorType.IntegerMaximum, schema, path, value);
  }
  if (IsDefined2(schema.minimum) && !(value >= schema.minimum)) {
    yield Create(ValueErrorType.IntegerMinimum, schema, path, value);
  }
  if (IsDefined2(schema.multipleOf) && !(value % schema.multipleOf === 0)) {
    yield Create(ValueErrorType.IntegerMultipleOf, schema, path, value);
  }
}
function* FromIntersect10(schema, references, path, value) {
  let hasError = false;
  for (const inner of schema.allOf) {
    for (const error of Visit6(inner, references, path, value)) {
      hasError = true;
      yield error;
    }
  }
  if (hasError) {
    return yield Create(ValueErrorType.Intersect, schema, path, value);
  }
  if (schema.unevaluatedProperties === false) {
    const keyCheck = new RegExp(KeyOfPattern(schema));
    for (const valueKey of Object.getOwnPropertyNames(value)) {
      if (!keyCheck.test(valueKey)) {
        yield Create(ValueErrorType.IntersectUnevaluatedProperties, schema, `${path}/${valueKey}`, value);
      }
    }
  }
  if (typeof schema.unevaluatedProperties === "object") {
    const keyCheck = new RegExp(KeyOfPattern(schema));
    for (const valueKey of Object.getOwnPropertyNames(value)) {
      if (!keyCheck.test(valueKey)) {
        const next = Visit6(schema.unevaluatedProperties, references, `${path}/${valueKey}`, value[valueKey]).next();
        if (!next.done)
          yield next.value;
      }
    }
  }
}
function* FromIterator5(schema, references, path, value) {
  if (!IsIterator2(value))
    yield Create(ValueErrorType.Iterator, schema, path, value);
}
function* FromLiteral4(schema, references, path, value) {
  if (!(value === schema.const))
    yield Create(ValueErrorType.Literal, schema, path, value);
}
function* FromNever3(schema, references, path, value) {
  yield Create(ValueErrorType.Never, schema, path, value);
}
function* FromNot3(schema, references, path, value) {
  if (Visit6(schema.not, references, path, value).next().done === true)
    yield Create(ValueErrorType.Not, schema, path, value);
}
function* FromNull3(schema, references, path, value) {
  if (!IsNull2(value))
    yield Create(ValueErrorType.Null, schema, path, value);
}
function* FromNumber3(schema, references, path, value) {
  if (!TypeSystemPolicy.IsNumberLike(value))
    return yield Create(ValueErrorType.Number, schema, path, value);
  if (IsDefined2(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
    yield Create(ValueErrorType.NumberExclusiveMaximum, schema, path, value);
  }
  if (IsDefined2(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
    yield Create(ValueErrorType.NumberExclusiveMinimum, schema, path, value);
  }
  if (IsDefined2(schema.maximum) && !(value <= schema.maximum)) {
    yield Create(ValueErrorType.NumberMaximum, schema, path, value);
  }
  if (IsDefined2(schema.minimum) && !(value >= schema.minimum)) {
    yield Create(ValueErrorType.NumberMinimum, schema, path, value);
  }
  if (IsDefined2(schema.multipleOf) && !(value % schema.multipleOf === 0)) {
    yield Create(ValueErrorType.NumberMultipleOf, schema, path, value);
  }
}
function* FromObject9(schema, references, path, value) {
  if (!TypeSystemPolicy.IsObjectLike(value))
    return yield Create(ValueErrorType.Object, schema, path, value);
  if (IsDefined2(schema.minProperties) && !(Object.getOwnPropertyNames(value).length >= schema.minProperties)) {
    yield Create(ValueErrorType.ObjectMinProperties, schema, path, value);
  }
  if (IsDefined2(schema.maxProperties) && !(Object.getOwnPropertyNames(value).length <= schema.maxProperties)) {
    yield Create(ValueErrorType.ObjectMaxProperties, schema, path, value);
  }
  const requiredKeys = Array.isArray(schema.required) ? schema.required : [];
  const knownKeys = Object.getOwnPropertyNames(schema.properties);
  const unknownKeys = Object.getOwnPropertyNames(value);
  for (const requiredKey of requiredKeys) {
    if (unknownKeys.includes(requiredKey))
      continue;
    yield Create(ValueErrorType.ObjectRequiredProperty, schema.properties[requiredKey], `${path}/${EscapeKey(requiredKey)}`, void 0);
  }
  if (schema.additionalProperties === false) {
    for (const valueKey of unknownKeys) {
      if (!knownKeys.includes(valueKey)) {
        yield Create(ValueErrorType.ObjectAdditionalProperties, schema, `${path}/${EscapeKey(valueKey)}`, value[valueKey]);
      }
    }
  }
  if (typeof schema.additionalProperties === "object") {
    for (const valueKey of unknownKeys) {
      if (knownKeys.includes(valueKey))
        continue;
      yield* Visit6(schema.additionalProperties, references, `${path}/${EscapeKey(valueKey)}`, value[valueKey]);
    }
  }
  for (const knownKey of knownKeys) {
    const property = schema.properties[knownKey];
    if (schema.required && schema.required.includes(knownKey)) {
      yield* Visit6(property, references, `${path}/${EscapeKey(knownKey)}`, value[knownKey]);
      if (ExtendsUndefinedCheck(schema) && !(knownKey in value)) {
        yield Create(ValueErrorType.ObjectRequiredProperty, property, `${path}/${EscapeKey(knownKey)}`, void 0);
      }
    } else {
      if (TypeSystemPolicy.IsExactOptionalProperty(value, knownKey)) {
        yield* Visit6(property, references, `${path}/${EscapeKey(knownKey)}`, value[knownKey]);
      }
    }
  }
}
function* FromPromise5(schema, references, path, value) {
  if (!IsPromise(value))
    yield Create(ValueErrorType.Promise, schema, path, value);
}
function* FromRecord5(schema, references, path, value) {
  if (!TypeSystemPolicy.IsRecordLike(value))
    return yield Create(ValueErrorType.Object, schema, path, value);
  if (IsDefined2(schema.minProperties) && !(Object.getOwnPropertyNames(value).length >= schema.minProperties)) {
    yield Create(ValueErrorType.ObjectMinProperties, schema, path, value);
  }
  if (IsDefined2(schema.maxProperties) && !(Object.getOwnPropertyNames(value).length <= schema.maxProperties)) {
    yield Create(ValueErrorType.ObjectMaxProperties, schema, path, value);
  }
  const [patternKey, patternSchema] = Object.entries(schema.patternProperties)[0];
  const regex = new RegExp(patternKey);
  for (const [propertyKey, propertyValue] of Object.entries(value)) {
    if (regex.test(propertyKey))
      yield* Visit6(patternSchema, references, `${path}/${EscapeKey(propertyKey)}`, propertyValue);
  }
  if (typeof schema.additionalProperties === "object") {
    for (const [propertyKey, propertyValue] of Object.entries(value)) {
      if (!regex.test(propertyKey))
        yield* Visit6(schema.additionalProperties, references, `${path}/${EscapeKey(propertyKey)}`, propertyValue);
    }
  }
  if (schema.additionalProperties === false) {
    for (const [propertyKey, propertyValue] of Object.entries(value)) {
      if (regex.test(propertyKey))
        continue;
      return yield Create(ValueErrorType.ObjectAdditionalProperties, schema, `${path}/${EscapeKey(propertyKey)}`, propertyValue);
    }
  }
}
function* FromRef6(schema, references, path, value) {
  yield* Visit6(Deref(schema, references), references, path, value);
}
function* FromRegExp3(schema, references, path, value) {
  if (!IsString2(value))
    return yield Create(ValueErrorType.String, schema, path, value);
  if (IsDefined2(schema.minLength) && !(value.length >= schema.minLength)) {
    yield Create(ValueErrorType.StringMinLength, schema, path, value);
  }
  if (IsDefined2(schema.maxLength) && !(value.length <= schema.maxLength)) {
    yield Create(ValueErrorType.StringMaxLength, schema, path, value);
  }
  const regex = new RegExp(schema.source, schema.flags);
  if (!regex.test(value)) {
    return yield Create(ValueErrorType.RegExp, schema, path, value);
  }
}
function* FromString3(schema, references, path, value) {
  if (!IsString2(value))
    return yield Create(ValueErrorType.String, schema, path, value);
  if (IsDefined2(schema.minLength) && !(value.length >= schema.minLength)) {
    yield Create(ValueErrorType.StringMinLength, schema, path, value);
  }
  if (IsDefined2(schema.maxLength) && !(value.length <= schema.maxLength)) {
    yield Create(ValueErrorType.StringMaxLength, schema, path, value);
  }
  if (IsString2(schema.pattern)) {
    const regex = new RegExp(schema.pattern);
    if (!regex.test(value)) {
      yield Create(ValueErrorType.StringPattern, schema, path, value);
    }
  }
  if (IsString2(schema.format)) {
    if (!format_exports.Has(schema.format)) {
      yield Create(ValueErrorType.StringFormatUnknown, schema, path, value);
    } else {
      const format = format_exports.Get(schema.format);
      if (!format(value)) {
        yield Create(ValueErrorType.StringFormat, schema, path, value);
      }
    }
  }
}
function* FromSymbol3(schema, references, path, value) {
  if (!IsSymbol2(value))
    yield Create(ValueErrorType.Symbol, schema, path, value);
}
function* FromTemplateLiteral5(schema, references, path, value) {
  if (!IsString2(value))
    return yield Create(ValueErrorType.String, schema, path, value);
  const regex = new RegExp(schema.pattern);
  if (!regex.test(value)) {
    yield Create(ValueErrorType.StringPattern, schema, path, value);
  }
}
function* FromThis2(schema, references, path, value) {
  yield* Visit6(Deref(schema, references), references, path, value);
}
function* FromTuple7(schema, references, path, value) {
  if (!IsArray2(value))
    return yield Create(ValueErrorType.Tuple, schema, path, value);
  if (schema.items === void 0 && !(value.length === 0)) {
    return yield Create(ValueErrorType.TupleLength, schema, path, value);
  }
  if (!(value.length === schema.maxItems)) {
    return yield Create(ValueErrorType.TupleLength, schema, path, value);
  }
  if (!schema.items) {
    return;
  }
  for (let i = 0; i < schema.items.length; i++) {
    yield* Visit6(schema.items[i], references, `${path}/${i}`, value[i]);
  }
}
function* FromUndefined3(schema, references, path, value) {
  if (!IsUndefined2(value))
    yield Create(ValueErrorType.Undefined, schema, path, value);
}
function* FromUnion12(schema, references, path, value) {
  if (Check(schema, references, value))
    return;
  const errors = schema.anyOf.map((variant) => new ValueErrorIterator(Visit6(variant, references, path, value)));
  yield Create(ValueErrorType.Union, schema, path, value, errors);
}
function* FromUint8Array3(schema, references, path, value) {
  if (!IsUint8Array2(value))
    return yield Create(ValueErrorType.Uint8Array, schema, path, value);
  if (IsDefined2(schema.maxByteLength) && !(value.length <= schema.maxByteLength)) {
    yield Create(ValueErrorType.Uint8ArrayMaxByteLength, schema, path, value);
  }
  if (IsDefined2(schema.minByteLength) && !(value.length >= schema.minByteLength)) {
    yield Create(ValueErrorType.Uint8ArrayMinByteLength, schema, path, value);
  }
}
function* FromUnknown3(schema, references, path, value) {
}
function* FromVoid3(schema, references, path, value) {
  if (!TypeSystemPolicy.IsVoidLike(value))
    yield Create(ValueErrorType.Void, schema, path, value);
}
function* FromKind2(schema, references, path, value) {
  const check = type_exports2.Get(schema[Kind]);
  if (!check(schema, value))
    yield Create(ValueErrorType.Kind, schema, path, value);
}
function* Visit6(schema, references, path, value) {
  const references_ = IsDefined2(schema.$id) ? [...references, schema] : references;
  const schema_ = schema;
  switch (schema_[Kind]) {
    case "Any":
      return yield* FromAny3(schema_, references_, path, value);
    case "Argument":
      return yield* FromArgument3(schema_, references_, path, value);
    case "Array":
      return yield* FromArray8(schema_, references_, path, value);
    case "AsyncIterator":
      return yield* FromAsyncIterator5(schema_, references_, path, value);
    case "BigInt":
      return yield* FromBigInt3(schema_, references_, path, value);
    case "Boolean":
      return yield* FromBoolean3(schema_, references_, path, value);
    case "Constructor":
      return yield* FromConstructor5(schema_, references_, path, value);
    case "Date":
      return yield* FromDate3(schema_, references_, path, value);
    case "Function":
      return yield* FromFunction5(schema_, references_, path, value);
    case "Import":
      return yield* FromImport2(schema_, references_, path, value);
    case "Integer":
      return yield* FromInteger3(schema_, references_, path, value);
    case "Intersect":
      return yield* FromIntersect10(schema_, references_, path, value);
    case "Iterator":
      return yield* FromIterator5(schema_, references_, path, value);
    case "Literal":
      return yield* FromLiteral4(schema_, references_, path, value);
    case "Never":
      return yield* FromNever3(schema_, references_, path, value);
    case "Not":
      return yield* FromNot3(schema_, references_, path, value);
    case "Null":
      return yield* FromNull3(schema_, references_, path, value);
    case "Number":
      return yield* FromNumber3(schema_, references_, path, value);
    case "Object":
      return yield* FromObject9(schema_, references_, path, value);
    case "Promise":
      return yield* FromPromise5(schema_, references_, path, value);
    case "Record":
      return yield* FromRecord5(schema_, references_, path, value);
    case "Ref":
      return yield* FromRef6(schema_, references_, path, value);
    case "RegExp":
      return yield* FromRegExp3(schema_, references_, path, value);
    case "String":
      return yield* FromString3(schema_, references_, path, value);
    case "Symbol":
      return yield* FromSymbol3(schema_, references_, path, value);
    case "TemplateLiteral":
      return yield* FromTemplateLiteral5(schema_, references_, path, value);
    case "This":
      return yield* FromThis2(schema_, references_, path, value);
    case "Tuple":
      return yield* FromTuple7(schema_, references_, path, value);
    case "Undefined":
      return yield* FromUndefined3(schema_, references_, path, value);
    case "Union":
      return yield* FromUnion12(schema_, references_, path, value);
    case "Uint8Array":
      return yield* FromUint8Array3(schema_, references_, path, value);
    case "Unknown":
      return yield* FromUnknown3(schema_, references_, path, value);
    case "Void":
      return yield* FromVoid3(schema_, references_, path, value);
    default:
      if (!type_exports2.Has(schema_[Kind]))
        throw new ValueErrorsUnknownTypeError(schema);
      return yield* FromKind2(schema_, references_, path, value);
  }
}
function Errors(...args) {
  const iterator = args.length === 3 ? Visit6(args[0], args[1], "", args[2]) : Visit6(args[0], [], "", args[1]);
  return new ValueErrorIterator(iterator);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/value/assert/assert.mjs
var __classPrivateFieldSet = function(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var __classPrivateFieldGet = function(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _AssertError_instances;
var _AssertError_iterator;
var _AssertError_Iterator;
var AssertError = class extends TypeBoxError {
  constructor(iterator) {
    const error = iterator.First();
    super(error === void 0 ? "Invalid Value" : error.message);
    _AssertError_instances.add(this);
    _AssertError_iterator.set(this, void 0);
    __classPrivateFieldSet(this, _AssertError_iterator, iterator, "f");
    this.error = error;
  }
  /** Returns an iterator for each error in this value. */
  Errors() {
    return new ValueErrorIterator(__classPrivateFieldGet(this, _AssertError_instances, "m", _AssertError_Iterator).call(this));
  }
};
_AssertError_iterator = /* @__PURE__ */ new WeakMap(), _AssertError_instances = /* @__PURE__ */ new WeakSet(), _AssertError_Iterator = function* _AssertError_Iterator2() {
  if (this.error)
    yield this.error;
  yield* __classPrivateFieldGet(this, _AssertError_iterator, "f");
};
function AssertValue(schema, references, value) {
  if (Check(schema, references, value))
    return;
  throw new AssertError(Errors(schema, references, value));
}
function Assert(...args) {
  return args.length === 3 ? AssertValue(args[0], args[1], args[2]) : AssertValue(args[0], [], args[1]);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/value/clone/clone.mjs
function FromObject10(value) {
  const Acc = {};
  for (const key of Object.getOwnPropertyNames(value)) {
    Acc[key] = Clone2(value[key]);
  }
  for (const key of Object.getOwnPropertySymbols(value)) {
    Acc[key] = Clone2(value[key]);
  }
  return Acc;
}
function FromArray9(value) {
  return value.map((element) => Clone2(element));
}
function FromTypedArray(value) {
  return value.slice();
}
function FromMap(value) {
  return new Map(Clone2([...value.entries()]));
}
function FromSet(value) {
  return new Set(Clone2([...value.entries()]));
}
function FromDate4(value) {
  return new Date(value.toISOString());
}
function FromValue2(value) {
  return value;
}
function Clone2(value) {
  if (IsArray2(value))
    return FromArray9(value);
  if (IsDate2(value))
    return FromDate4(value);
  if (IsTypedArray(value))
    return FromTypedArray(value);
  if (IsMap(value))
    return FromMap(value);
  if (IsSet(value))
    return FromSet(value);
  if (IsObject2(value))
    return FromObject10(value);
  if (IsValueType(value))
    return FromValue2(value);
  throw new Error("ValueClone: Unable to clone value");
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/value/create/create.mjs
var ValueCreateError = class extends TypeBoxError {
  constructor(schema, message) {
    super(message);
    this.schema = schema;
  }
};
function FromDefault(value) {
  return IsFunction2(value) ? value() : Clone2(value);
}
function FromAny4(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return {};
  }
}
function FromArgument4(schema, references) {
  return {};
}
function FromArray10(schema, references) {
  if (schema.uniqueItems === true && !HasPropertyKey2(schema, "default")) {
    throw new ValueCreateError(schema, "Array with the uniqueItems constraint requires a default value");
  } else if ("contains" in schema && !HasPropertyKey2(schema, "default")) {
    throw new ValueCreateError(schema, "Array with the contains constraint requires a default value");
  } else if ("default" in schema) {
    return FromDefault(schema.default);
  } else if (schema.minItems !== void 0) {
    return Array.from({ length: schema.minItems }).map((item) => {
      return Visit7(schema.items, references);
    });
  } else {
    return [];
  }
}
function FromAsyncIterator6(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return (async function* () {
    })();
  }
}
function FromBigInt4(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return BigInt(0);
  }
}
function FromBoolean4(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return false;
  }
}
function FromConstructor6(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    const value = Visit7(schema.returns, references);
    if (typeof value === "object" && !Array.isArray(value)) {
      return class {
        constructor() {
          for (const [key, val] of Object.entries(value)) {
            const self = this;
            self[key] = val;
          }
        }
      };
    } else {
      return class {
      };
    }
  }
}
function FromDate5(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else if (schema.minimumTimestamp !== void 0) {
    return new Date(schema.minimumTimestamp);
  } else {
    return /* @__PURE__ */ new Date();
  }
}
function FromFunction6(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return () => Visit7(schema.returns, references);
  }
}
function FromImport3(schema, references) {
  const definitions = globalThis.Object.values(schema.$defs);
  const target = schema.$defs[schema.$ref];
  return Visit7(target, [...references, ...definitions]);
}
function FromInteger4(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else if (schema.minimum !== void 0) {
    return schema.minimum;
  } else {
    return 0;
  }
}
function FromIntersect11(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    const value = schema.allOf.reduce((acc, schema2) => {
      const next = Visit7(schema2, references);
      return typeof next === "object" ? { ...acc, ...next } : next;
    }, {});
    if (!Check(schema, references, value))
      throw new ValueCreateError(schema, "Intersect produced invalid value. Consider using a default value.");
    return value;
  }
}
function FromIterator6(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return (function* () {
    })();
  }
}
function FromLiteral5(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return schema.const;
  }
}
function FromNever4(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    throw new ValueCreateError(schema, "Never types cannot be created. Consider using a default value.");
  }
}
function FromNot4(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    throw new ValueCreateError(schema, "Not types must have a default value");
  }
}
function FromNull4(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return null;
  }
}
function FromNumber4(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else if (schema.minimum !== void 0) {
    return schema.minimum;
  } else {
    return 0;
  }
}
function FromObject11(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    const required = new Set(schema.required);
    const Acc = {};
    for (const [key, subschema] of Object.entries(schema.properties)) {
      if (!required.has(key))
        continue;
      Acc[key] = Visit7(subschema, references);
    }
    return Acc;
  }
}
function FromPromise6(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return Promise.resolve(Visit7(schema.item, references));
  }
}
function FromRecord6(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return {};
  }
}
function FromRef7(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return Visit7(Deref(schema, references), references);
  }
}
function FromRegExp4(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    throw new ValueCreateError(schema, "RegExp types cannot be created. Consider using a default value.");
  }
}
function FromString4(schema, references) {
  if (schema.pattern !== void 0) {
    if (!HasPropertyKey2(schema, "default")) {
      throw new ValueCreateError(schema, "String types with patterns must specify a default value");
    } else {
      return FromDefault(schema.default);
    }
  } else if (schema.format !== void 0) {
    if (!HasPropertyKey2(schema, "default")) {
      throw new ValueCreateError(schema, "String types with formats must specify a default value");
    } else {
      return FromDefault(schema.default);
    }
  } else {
    if (HasPropertyKey2(schema, "default")) {
      return FromDefault(schema.default);
    } else if (schema.minLength !== void 0) {
      return Array.from({ length: schema.minLength }).map(() => " ").join("");
    } else {
      return "";
    }
  }
}
function FromSymbol4(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else if ("value" in schema) {
    return Symbol.for(schema.value);
  } else {
    return /* @__PURE__ */ Symbol();
  }
}
function FromTemplateLiteral6(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  }
  if (!IsTemplateLiteralFinite(schema))
    throw new ValueCreateError(schema, "Can only create template literals that produce a finite variants. Consider using a default value.");
  const generated = TemplateLiteralGenerate(schema);
  return generated[0];
}
function FromThis3(schema, references) {
  if (recursiveDepth++ > recursiveMaxDepth)
    throw new ValueCreateError(schema, "Cannot create recursive type as it appears possibly infinite. Consider using a default.");
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return Visit7(Deref(schema, references), references);
  }
}
function FromTuple8(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  }
  if (schema.items === void 0) {
    return [];
  } else {
    return Array.from({ length: schema.minItems }).map((_, index) => Visit7(schema.items[index], references));
  }
}
function FromUndefined4(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return void 0;
  }
}
function FromUnion13(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else if (schema.anyOf.length === 0) {
    throw new Error("ValueCreate.Union: Cannot create Union with zero variants");
  } else {
    return Visit7(schema.anyOf[0], references);
  }
}
function FromUint8Array4(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else if (schema.minByteLength !== void 0) {
    return new Uint8Array(schema.minByteLength);
  } else {
    return new Uint8Array(0);
  }
}
function FromUnknown4(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return {};
  }
}
function FromVoid4(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return void 0;
  }
}
function FromKind3(schema, references) {
  if (HasPropertyKey2(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    throw new Error("User defined types must specify a default value");
  }
}
function Visit7(schema, references) {
  const references_ = Pushref(schema, references);
  const schema_ = schema;
  switch (schema_[Kind]) {
    case "Any":
      return FromAny4(schema_, references_);
    case "Argument":
      return FromArgument4(schema_, references_);
    case "Array":
      return FromArray10(schema_, references_);
    case "AsyncIterator":
      return FromAsyncIterator6(schema_, references_);
    case "BigInt":
      return FromBigInt4(schema_, references_);
    case "Boolean":
      return FromBoolean4(schema_, references_);
    case "Constructor":
      return FromConstructor6(schema_, references_);
    case "Date":
      return FromDate5(schema_, references_);
    case "Function":
      return FromFunction6(schema_, references_);
    case "Import":
      return FromImport3(schema_, references_);
    case "Integer":
      return FromInteger4(schema_, references_);
    case "Intersect":
      return FromIntersect11(schema_, references_);
    case "Iterator":
      return FromIterator6(schema_, references_);
    case "Literal":
      return FromLiteral5(schema_, references_);
    case "Never":
      return FromNever4(schema_, references_);
    case "Not":
      return FromNot4(schema_, references_);
    case "Null":
      return FromNull4(schema_, references_);
    case "Number":
      return FromNumber4(schema_, references_);
    case "Object":
      return FromObject11(schema_, references_);
    case "Promise":
      return FromPromise6(schema_, references_);
    case "Record":
      return FromRecord6(schema_, references_);
    case "Ref":
      return FromRef7(schema_, references_);
    case "RegExp":
      return FromRegExp4(schema_, references_);
    case "String":
      return FromString4(schema_, references_);
    case "Symbol":
      return FromSymbol4(schema_, references_);
    case "TemplateLiteral":
      return FromTemplateLiteral6(schema_, references_);
    case "This":
      return FromThis3(schema_, references_);
    case "Tuple":
      return FromTuple8(schema_, references_);
    case "Undefined":
      return FromUndefined4(schema_, references_);
    case "Union":
      return FromUnion13(schema_, references_);
    case "Uint8Array":
      return FromUint8Array4(schema_, references_);
    case "Unknown":
      return FromUnknown4(schema_, references_);
    case "Void":
      return FromVoid4(schema_, references_);
    default:
      if (!type_exports2.Has(schema_[Kind]))
        throw new ValueCreateError(schema_, "Unknown type");
      return FromKind3(schema_, references_);
  }
}
var recursiveMaxDepth = 512;
var recursiveDepth = 0;
function Create2(...args) {
  recursiveDepth = 0;
  return args.length === 2 ? Visit7(args[0], args[1]) : Visit7(args[0], []);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/value/cast/cast.mjs
var ValueCastError = class extends TypeBoxError {
  constructor(schema, message) {
    super(message);
    this.schema = schema;
  }
};
function ScoreUnion(schema, references, value) {
  if (schema[Kind] === "Object" && typeof value === "object" && !IsNull2(value)) {
    const object = schema;
    const keys = Object.getOwnPropertyNames(value);
    const entries = Object.entries(object.properties);
    return entries.reduce((acc, [key, schema2]) => {
      const literal = schema2[Kind] === "Literal" && schema2.const === value[key] ? 100 : 0;
      const checks = Check(schema2, references, value[key]) ? 10 : 0;
      const exists = keys.includes(key) ? 1 : 0;
      return acc + (literal + checks + exists);
    }, 0);
  } else if (schema[Kind] === "Union") {
    const schemas = schema.anyOf.map((schema2) => Deref(schema2, references));
    const scores = schemas.map((schema2) => ScoreUnion(schema2, references, value));
    return Math.max(...scores);
  } else {
    return Check(schema, references, value) ? 1 : 0;
  }
}
function SelectUnion(union, references, value) {
  const schemas = union.anyOf.map((schema) => Deref(schema, references));
  let [select, best] = [schemas[0], 0];
  for (const schema of schemas) {
    const score = ScoreUnion(schema, references, value);
    if (score > best) {
      select = schema;
      best = score;
    }
  }
  return select;
}
function CastUnion(union, references, value) {
  if ("default" in union) {
    return typeof value === "function" ? union.default : Clone2(union.default);
  } else {
    const schema = SelectUnion(union, references, value);
    return Cast(schema, references, value);
  }
}
function DefaultClone(schema, references, value) {
  return Check(schema, references, value) ? Clone2(value) : Create2(schema, references);
}
function Default(schema, references, value) {
  return Check(schema, references, value) ? value : Create2(schema, references);
}
function FromArray11(schema, references, value) {
  if (Check(schema, references, value))
    return Clone2(value);
  const created = IsArray2(value) ? Clone2(value) : Create2(schema, references);
  const minimum = IsNumber2(schema.minItems) && created.length < schema.minItems ? [...created, ...Array.from({ length: schema.minItems - created.length }, () => null)] : created;
  const maximum = IsNumber2(schema.maxItems) && minimum.length > schema.maxItems ? minimum.slice(0, schema.maxItems) : minimum;
  const casted = maximum.map((value2) => Visit8(schema.items, references, value2));
  if (schema.uniqueItems !== true)
    return casted;
  const unique = [...new Set(casted)];
  if (!Check(schema, references, unique))
    throw new ValueCastError(schema, "Array cast produced invalid data due to uniqueItems constraint");
  return unique;
}
function FromConstructor7(schema, references, value) {
  if (Check(schema, references, value))
    return Create2(schema, references);
  const required = new Set(schema.returns.required || []);
  const result = function() {
  };
  for (const [key, property] of Object.entries(schema.returns.properties)) {
    if (!required.has(key) && value.prototype[key] === void 0)
      continue;
    result.prototype[key] = Visit8(property, references, value.prototype[key]);
  }
  return result;
}
function FromImport4(schema, references, value) {
  const definitions = globalThis.Object.values(schema.$defs);
  const target = schema.$defs[schema.$ref];
  return Visit8(target, [...references, ...definitions], value);
}
function IntersectAssign(correct, value) {
  if (IsObject2(correct) && !IsObject2(value) || !IsObject2(correct) && IsObject2(value))
    return correct;
  if (!IsObject2(correct) || !IsObject2(value))
    return value;
  return globalThis.Object.getOwnPropertyNames(correct).reduce((result, key) => {
    const property = key in value ? IntersectAssign(correct[key], value[key]) : correct[key];
    return { ...result, [key]: property };
  }, {});
}
function FromIntersect12(schema, references, value) {
  if (Check(schema, references, value))
    return value;
  const correct = Create2(schema, references);
  const assigned = IntersectAssign(correct, value);
  return Check(schema, references, assigned) ? assigned : correct;
}
function FromNever5(schema, references, value) {
  throw new ValueCastError(schema, "Never types cannot be cast");
}
function FromObject12(schema, references, value) {
  if (Check(schema, references, value))
    return value;
  if (value === null || typeof value !== "object")
    return Create2(schema, references);
  const required = new Set(schema.required || []);
  const result = {};
  for (const [key, property] of Object.entries(schema.properties)) {
    if (!required.has(key) && value[key] === void 0)
      continue;
    result[key] = Visit8(property, references, value[key]);
  }
  if (typeof schema.additionalProperties === "object") {
    const propertyNames = Object.getOwnPropertyNames(schema.properties);
    for (const propertyName of Object.getOwnPropertyNames(value)) {
      if (propertyNames.includes(propertyName))
        continue;
      result[propertyName] = Visit8(schema.additionalProperties, references, value[propertyName]);
    }
  }
  return result;
}
function FromRecord7(schema, references, value) {
  if (Check(schema, references, value))
    return Clone2(value);
  if (value === null || typeof value !== "object" || Array.isArray(value) || value instanceof Date)
    return Create2(schema, references);
  const subschemaPropertyName = Object.getOwnPropertyNames(schema.patternProperties)[0];
  const subschema = schema.patternProperties[subschemaPropertyName];
  const result = {};
  for (const [propKey, propValue] of Object.entries(value)) {
    result[propKey] = Visit8(subschema, references, propValue);
  }
  return result;
}
function FromRef8(schema, references, value) {
  return Visit8(Deref(schema, references), references, value);
}
function FromThis4(schema, references, value) {
  return Visit8(Deref(schema, references), references, value);
}
function FromTuple9(schema, references, value) {
  if (Check(schema, references, value))
    return Clone2(value);
  if (!IsArray2(value))
    return Create2(schema, references);
  if (schema.items === void 0)
    return [];
  return schema.items.map((schema2, index) => Visit8(schema2, references, value[index]));
}
function FromUnion14(schema, references, value) {
  return Check(schema, references, value) ? Clone2(value) : CastUnion(schema, references, value);
}
function Visit8(schema, references, value) {
  const references_ = IsString2(schema.$id) ? Pushref(schema, references) : references;
  const schema_ = schema;
  switch (schema[Kind]) {
    // --------------------------------------------------------------
    // Structural
    // --------------------------------------------------------------
    case "Array":
      return FromArray11(schema_, references_, value);
    case "Constructor":
      return FromConstructor7(schema_, references_, value);
    case "Import":
      return FromImport4(schema_, references_, value);
    case "Intersect":
      return FromIntersect12(schema_, references_, value);
    case "Never":
      return FromNever5(schema_, references_, value);
    case "Object":
      return FromObject12(schema_, references_, value);
    case "Record":
      return FromRecord7(schema_, references_, value);
    case "Ref":
      return FromRef8(schema_, references_, value);
    case "This":
      return FromThis4(schema_, references_, value);
    case "Tuple":
      return FromTuple9(schema_, references_, value);
    case "Union":
      return FromUnion14(schema_, references_, value);
    // --------------------------------------------------------------
    // DefaultClone
    // --------------------------------------------------------------
    case "Date":
    case "Symbol":
    case "Uint8Array":
      return DefaultClone(schema, references, value);
    // --------------------------------------------------------------
    // Default
    // --------------------------------------------------------------
    default:
      return Default(schema_, references_, value);
  }
}
function Cast(...args) {
  return args.length === 3 ? Visit8(args[0], args[1], args[2]) : Visit8(args[0], [], args[1]);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/value/clean/clean.mjs
function IsCheckable(schema) {
  return IsKind(schema) && schema[Kind] !== "Unsafe";
}
function FromArray12(schema, references, value) {
  if (!IsArray2(value))
    return value;
  return value.map((value2) => Visit9(schema.items, references, value2));
}
function FromImport5(schema, references, value) {
  const definitions = globalThis.Object.values(schema.$defs);
  const target = schema.$defs[schema.$ref];
  return Visit9(target, [...references, ...definitions], value);
}
function FromIntersect13(schema, references, value) {
  const unevaluatedProperties = schema.unevaluatedProperties;
  const intersections = schema.allOf.map((schema2) => Visit9(schema2, references, Clone2(value)));
  const composite = intersections.reduce((acc, value2) => IsObject2(value2) ? { ...acc, ...value2 } : value2, {});
  if (!IsObject2(value) || !IsObject2(composite) || !IsKind(unevaluatedProperties))
    return composite;
  const knownkeys = KeyOfPropertyKeys(schema);
  for (const key of Object.getOwnPropertyNames(value)) {
    if (knownkeys.includes(key))
      continue;
    if (Check(unevaluatedProperties, references, value[key])) {
      composite[key] = Visit9(unevaluatedProperties, references, value[key]);
    }
  }
  return composite;
}
function FromObject13(schema, references, value) {
  if (!IsObject2(value) || IsArray2(value))
    return value;
  const additionalProperties = schema.additionalProperties;
  for (const key of Object.getOwnPropertyNames(value)) {
    if (HasPropertyKey2(schema.properties, key)) {
      value[key] = Visit9(schema.properties[key], references, value[key]);
      continue;
    }
    if (IsKind(additionalProperties) && Check(additionalProperties, references, value[key])) {
      value[key] = Visit9(additionalProperties, references, value[key]);
      continue;
    }
    delete value[key];
  }
  return value;
}
function FromRecord8(schema, references, value) {
  if (!IsObject2(value))
    return value;
  const additionalProperties = schema.additionalProperties;
  const propertyKeys = Object.getOwnPropertyNames(value);
  const [propertyKey, propertySchema] = Object.entries(schema.patternProperties)[0];
  const propertyKeyTest = new RegExp(propertyKey);
  for (const key of propertyKeys) {
    if (propertyKeyTest.test(key)) {
      value[key] = Visit9(propertySchema, references, value[key]);
      continue;
    }
    if (IsKind(additionalProperties) && Check(additionalProperties, references, value[key])) {
      value[key] = Visit9(additionalProperties, references, value[key]);
      continue;
    }
    delete value[key];
  }
  return value;
}
function FromRef9(schema, references, value) {
  return Visit9(Deref(schema, references), references, value);
}
function FromThis5(schema, references, value) {
  return Visit9(Deref(schema, references), references, value);
}
function FromTuple10(schema, references, value) {
  if (!IsArray2(value))
    return value;
  if (IsUndefined2(schema.items))
    return [];
  const length = Math.min(value.length, schema.items.length);
  for (let i = 0; i < length; i++) {
    value[i] = Visit9(schema.items[i], references, value[i]);
  }
  return value.length > length ? value.slice(0, length) : value;
}
function FromUnion15(schema, references, value) {
  for (const inner of schema.anyOf) {
    if (IsCheckable(inner) && Check(inner, references, value)) {
      return Visit9(inner, references, value);
    }
  }
  return value;
}
function Visit9(schema, references, value) {
  const references_ = IsString2(schema.$id) ? Pushref(schema, references) : references;
  const schema_ = schema;
  switch (schema_[Kind]) {
    case "Array":
      return FromArray12(schema_, references_, value);
    case "Import":
      return FromImport5(schema_, references_, value);
    case "Intersect":
      return FromIntersect13(schema_, references_, value);
    case "Object":
      return FromObject13(schema_, references_, value);
    case "Record":
      return FromRecord8(schema_, references_, value);
    case "Ref":
      return FromRef9(schema_, references_, value);
    case "This":
      return FromThis5(schema_, references_, value);
    case "Tuple":
      return FromTuple10(schema_, references_, value);
    case "Union":
      return FromUnion15(schema_, references_, value);
    default:
      return value;
  }
}
function Clean(...args) {
  return args.length === 3 ? Visit9(args[0], args[1], args[2]) : Visit9(args[0], [], args[1]);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/value/convert/convert.mjs
function IsStringNumeric(value) {
  return IsString2(value) && !isNaN(value) && !isNaN(parseFloat(value));
}
function IsValueToString(value) {
  return IsBigInt2(value) || IsBoolean2(value) || IsNumber2(value);
}
function IsValueTrue(value) {
  return value === true || IsNumber2(value) && value === 1 || IsBigInt2(value) && value === BigInt("1") || IsString2(value) && (value.toLowerCase() === "true" || value === "1");
}
function IsValueFalse(value) {
  return value === false || IsNumber2(value) && (value === 0 || Object.is(value, -0)) || IsBigInt2(value) && value === BigInt("0") || IsString2(value) && (value.toLowerCase() === "false" || value === "0" || value === "-0");
}
function IsTimeStringWithTimeZone(value) {
  return IsString2(value) && /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i.test(value);
}
function IsTimeStringWithoutTimeZone(value) {
  return IsString2(value) && /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)?$/i.test(value);
}
function IsDateTimeStringWithTimeZone(value) {
  return IsString2(value) && /^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i.test(value);
}
function IsDateTimeStringWithoutTimeZone(value) {
  return IsString2(value) && /^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)?$/i.test(value);
}
function IsDateString(value) {
  return IsString2(value) && /^\d\d\d\d-[0-1]\d-[0-3]\d$/i.test(value);
}
function TryConvertLiteralString(value, target) {
  const conversion = TryConvertString(value);
  return conversion === target ? conversion : value;
}
function TryConvertLiteralNumber(value, target) {
  const conversion = TryConvertNumber(value);
  return conversion === target ? conversion : value;
}
function TryConvertLiteralBoolean(value, target) {
  const conversion = TryConvertBoolean(value);
  return conversion === target ? conversion : value;
}
function TryConvertLiteral(schema, value) {
  return IsString2(schema.const) ? TryConvertLiteralString(value, schema.const) : IsNumber2(schema.const) ? TryConvertLiteralNumber(value, schema.const) : IsBoolean2(schema.const) ? TryConvertLiteralBoolean(value, schema.const) : value;
}
function TryConvertBoolean(value) {
  return IsValueTrue(value) ? true : IsValueFalse(value) ? false : value;
}
function TryConvertBigInt(value) {
  const truncateInteger = (value2) => value2.split(".")[0];
  return IsStringNumeric(value) ? BigInt(truncateInteger(value)) : IsNumber2(value) ? BigInt(Math.trunc(value)) : IsValueFalse(value) ? BigInt(0) : IsValueTrue(value) ? BigInt(1) : value;
}
function TryConvertString(value) {
  return IsSymbol2(value) && value.description !== void 0 ? value.description.toString() : IsValueToString(value) ? value.toString() : value;
}
function TryConvertNumber(value) {
  return IsStringNumeric(value) ? parseFloat(value) : IsValueTrue(value) ? 1 : IsValueFalse(value) ? 0 : value;
}
function TryConvertInteger(value) {
  return IsStringNumeric(value) ? parseInt(value) : IsNumber2(value) ? Math.trunc(value) : IsValueTrue(value) ? 1 : IsValueFalse(value) ? 0 : value;
}
function TryConvertNull(value) {
  return IsString2(value) && value.toLowerCase() === "null" ? null : value;
}
function TryConvertUndefined(value) {
  return IsString2(value) && value === "undefined" ? void 0 : value;
}
function TryConvertDate(value) {
  return IsDate2(value) ? value : IsNumber2(value) ? new Date(value) : IsValueTrue(value) ? /* @__PURE__ */ new Date(1) : IsValueFalse(value) ? /* @__PURE__ */ new Date(0) : IsStringNumeric(value) ? new Date(parseInt(value)) : IsTimeStringWithoutTimeZone(value) ? /* @__PURE__ */ new Date(`1970-01-01T${value}.000Z`) : IsTimeStringWithTimeZone(value) ? /* @__PURE__ */ new Date(`1970-01-01T${value}`) : IsDateTimeStringWithoutTimeZone(value) ? /* @__PURE__ */ new Date(`${value}.000Z`) : IsDateTimeStringWithTimeZone(value) ? new Date(value) : IsDateString(value) ? /* @__PURE__ */ new Date(`${value}T00:00:00.000Z`) : value;
}
function Default2(value) {
  return value;
}
function FromArray13(schema, references, value) {
  const elements = IsArray2(value) ? value : [value];
  return elements.map((element) => Visit10(schema.items, references, element));
}
function FromBigInt5(schema, references, value) {
  return TryConvertBigInt(value);
}
function FromBoolean5(schema, references, value) {
  return TryConvertBoolean(value);
}
function FromDate6(schema, references, value) {
  return TryConvertDate(value);
}
function FromImport6(schema, references, value) {
  const definitions = globalThis.Object.values(schema.$defs);
  const target = schema.$defs[schema.$ref];
  return Visit10(target, [...references, ...definitions], value);
}
function FromInteger5(schema, references, value) {
  return TryConvertInteger(value);
}
function FromIntersect14(schema, references, value) {
  return schema.allOf.reduce((value2, schema2) => Visit10(schema2, references, value2), value);
}
function FromLiteral6(schema, references, value) {
  return TryConvertLiteral(schema, value);
}
function FromNull5(schema, references, value) {
  return TryConvertNull(value);
}
function FromNumber5(schema, references, value) {
  return TryConvertNumber(value);
}
function FromObject14(schema, references, value) {
  if (!IsObject2(value) || IsArray2(value))
    return value;
  for (const propertyKey of Object.getOwnPropertyNames(schema.properties)) {
    if (!HasPropertyKey2(value, propertyKey))
      continue;
    value[propertyKey] = Visit10(schema.properties[propertyKey], references, value[propertyKey]);
  }
  return value;
}
function FromRecord9(schema, references, value) {
  const isConvertable = IsObject2(value) && !IsArray2(value);
  if (!isConvertable)
    return value;
  const propertyKey = Object.getOwnPropertyNames(schema.patternProperties)[0];
  const property = schema.patternProperties[propertyKey];
  for (const [propKey, propValue] of Object.entries(value)) {
    value[propKey] = Visit10(property, references, propValue);
  }
  return value;
}
function FromRef10(schema, references, value) {
  return Visit10(Deref(schema, references), references, value);
}
function FromString5(schema, references, value) {
  return TryConvertString(value);
}
function FromSymbol5(schema, references, value) {
  return IsString2(value) || IsNumber2(value) ? Symbol(value) : value;
}
function FromThis6(schema, references, value) {
  return Visit10(Deref(schema, references), references, value);
}
function FromTuple11(schema, references, value) {
  const isConvertable = IsArray2(value) && !IsUndefined2(schema.items);
  if (!isConvertable)
    return value;
  return value.map((value2, index) => {
    return index < schema.items.length ? Visit10(schema.items[index], references, value2) : value2;
  });
}
function FromUndefined5(schema, references, value) {
  return TryConvertUndefined(value);
}
function FromUnion16(schema, references, value) {
  for (const subschema of schema.anyOf) {
    if (Check(subschema, references, value)) {
      return value;
    }
  }
  for (const subschema of schema.anyOf) {
    const converted = Visit10(subschema, references, Clone2(value));
    if (!Check(subschema, references, converted))
      continue;
    return converted;
  }
  return value;
}
function Visit10(schema, references, value) {
  const references_ = Pushref(schema, references);
  const schema_ = schema;
  switch (schema[Kind]) {
    case "Array":
      return FromArray13(schema_, references_, value);
    case "BigInt":
      return FromBigInt5(schema_, references_, value);
    case "Boolean":
      return FromBoolean5(schema_, references_, value);
    case "Date":
      return FromDate6(schema_, references_, value);
    case "Import":
      return FromImport6(schema_, references_, value);
    case "Integer":
      return FromInteger5(schema_, references_, value);
    case "Intersect":
      return FromIntersect14(schema_, references_, value);
    case "Literal":
      return FromLiteral6(schema_, references_, value);
    case "Null":
      return FromNull5(schema_, references_, value);
    case "Number":
      return FromNumber5(schema_, references_, value);
    case "Object":
      return FromObject14(schema_, references_, value);
    case "Record":
      return FromRecord9(schema_, references_, value);
    case "Ref":
      return FromRef10(schema_, references_, value);
    case "String":
      return FromString5(schema_, references_, value);
    case "Symbol":
      return FromSymbol5(schema_, references_, value);
    case "This":
      return FromThis6(schema_, references_, value);
    case "Tuple":
      return FromTuple11(schema_, references_, value);
    case "Undefined":
      return FromUndefined5(schema_, references_, value);
    case "Union":
      return FromUnion16(schema_, references_, value);
    default:
      return Default2(value);
  }
}
function Convert(...args) {
  return args.length === 3 ? Visit10(args[0], args[1], args[2]) : Visit10(args[0], [], args[1]);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/value/transform/decode.mjs
var TransformDecodeCheckError = class extends TypeBoxError {
  constructor(schema, value, error) {
    super(`Unable to decode value as it does not match the expected schema`);
    this.schema = schema;
    this.value = value;
    this.error = error;
  }
};
var TransformDecodeError = class extends TypeBoxError {
  constructor(schema, path, value, error) {
    super(error instanceof Error ? error.message : "Unknown error");
    this.schema = schema;
    this.path = path;
    this.value = value;
    this.error = error;
  }
};
function Default3(schema, path, value) {
  try {
    return IsTransform(schema) ? schema[TransformKind].Decode(value) : value;
  } catch (error) {
    throw new TransformDecodeError(schema, path, value, error);
  }
}
function FromArray14(schema, references, path, value) {
  return IsArray2(value) ? Default3(schema, path, value.map((value2, index) => Visit11(schema.items, references, `${path}/${index}`, value2))) : Default3(schema, path, value);
}
function FromIntersect15(schema, references, path, value) {
  if (!IsObject2(value) || IsValueType(value))
    return Default3(schema, path, value);
  const knownEntries = KeyOfPropertyEntries(schema);
  const knownKeys = knownEntries.map((entry) => entry[0]);
  const knownProperties = { ...value };
  for (const [knownKey, knownSchema] of knownEntries)
    if (knownKey in knownProperties) {
      knownProperties[knownKey] = Visit11(knownSchema, references, `${path}/${knownKey}`, knownProperties[knownKey]);
    }
  if (!IsTransform(schema.unevaluatedProperties)) {
    return Default3(schema, path, knownProperties);
  }
  const unknownKeys = Object.getOwnPropertyNames(knownProperties);
  const unevaluatedProperties = schema.unevaluatedProperties;
  const unknownProperties = { ...knownProperties };
  for (const key of unknownKeys)
    if (!knownKeys.includes(key)) {
      unknownProperties[key] = Default3(unevaluatedProperties, `${path}/${key}`, unknownProperties[key]);
    }
  return Default3(schema, path, unknownProperties);
}
function FromImport7(schema, references, path, value) {
  const additional = globalThis.Object.values(schema.$defs);
  const target = schema.$defs[schema.$ref];
  const result = Visit11(target, [...references, ...additional], path, value);
  return Default3(schema, path, result);
}
function FromNot5(schema, references, path, value) {
  return Default3(schema, path, Visit11(schema.not, references, path, value));
}
function FromObject15(schema, references, path, value) {
  if (!IsObject2(value))
    return Default3(schema, path, value);
  const knownKeys = KeyOfPropertyKeys(schema);
  const knownProperties = { ...value };
  for (const key of knownKeys) {
    if (!HasPropertyKey2(knownProperties, key))
      continue;
    if (IsUndefined2(knownProperties[key]) && (!IsUndefined3(schema.properties[key]) || TypeSystemPolicy.IsExactOptionalProperty(knownProperties, key)))
      continue;
    knownProperties[key] = Visit11(schema.properties[key], references, `${path}/${key}`, knownProperties[key]);
  }
  if (!IsSchema(schema.additionalProperties)) {
    return Default3(schema, path, knownProperties);
  }
  const unknownKeys = Object.getOwnPropertyNames(knownProperties);
  const additionalProperties = schema.additionalProperties;
  const unknownProperties = { ...knownProperties };
  for (const key of unknownKeys)
    if (!knownKeys.includes(key)) {
      unknownProperties[key] = Default3(additionalProperties, `${path}/${key}`, unknownProperties[key]);
    }
  return Default3(schema, path, unknownProperties);
}
function FromRecord10(schema, references, path, value) {
  if (!IsObject2(value))
    return Default3(schema, path, value);
  const pattern = Object.getOwnPropertyNames(schema.patternProperties)[0];
  const knownKeys = new RegExp(pattern);
  const knownProperties = { ...value };
  for (const key of Object.getOwnPropertyNames(value))
    if (knownKeys.test(key)) {
      knownProperties[key] = Visit11(schema.patternProperties[pattern], references, `${path}/${key}`, knownProperties[key]);
    }
  if (!IsSchema(schema.additionalProperties)) {
    return Default3(schema, path, knownProperties);
  }
  const unknownKeys = Object.getOwnPropertyNames(knownProperties);
  const additionalProperties = schema.additionalProperties;
  const unknownProperties = { ...knownProperties };
  for (const key of unknownKeys)
    if (!knownKeys.test(key)) {
      unknownProperties[key] = Default3(additionalProperties, `${path}/${key}`, unknownProperties[key]);
    }
  return Default3(schema, path, unknownProperties);
}
function FromRef11(schema, references, path, value) {
  const target = Deref(schema, references);
  return Default3(schema, path, Visit11(target, references, path, value));
}
function FromThis7(schema, references, path, value) {
  const target = Deref(schema, references);
  return Default3(schema, path, Visit11(target, references, path, value));
}
function FromTuple12(schema, references, path, value) {
  return IsArray2(value) && IsArray2(schema.items) ? Default3(schema, path, schema.items.map((schema2, index) => Visit11(schema2, references, `${path}/${index}`, value[index]))) : Default3(schema, path, value);
}
function FromUnion17(schema, references, path, value) {
  for (const subschema of schema.anyOf) {
    if (!Check(subschema, references, value))
      continue;
    const decoded = Visit11(subschema, references, path, value);
    return Default3(schema, path, decoded);
  }
  return Default3(schema, path, value);
}
function Visit11(schema, references, path, value) {
  const references_ = Pushref(schema, references);
  const schema_ = schema;
  switch (schema[Kind]) {
    case "Array":
      return FromArray14(schema_, references_, path, value);
    case "Import":
      return FromImport7(schema_, references_, path, value);
    case "Intersect":
      return FromIntersect15(schema_, references_, path, value);
    case "Not":
      return FromNot5(schema_, references_, path, value);
    case "Object":
      return FromObject15(schema_, references_, path, value);
    case "Record":
      return FromRecord10(schema_, references_, path, value);
    case "Ref":
      return FromRef11(schema_, references_, path, value);
    case "Symbol":
      return Default3(schema_, path, value);
    case "This":
      return FromThis7(schema_, references_, path, value);
    case "Tuple":
      return FromTuple12(schema_, references_, path, value);
    case "Union":
      return FromUnion17(schema_, references_, path, value);
    default:
      return Default3(schema_, path, value);
  }
}
function TransformDecode(schema, references, value) {
  return Visit11(schema, references, "", value);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/value/transform/encode.mjs
var TransformEncodeCheckError = class extends TypeBoxError {
  constructor(schema, value, error) {
    super(`The encoded value does not match the expected schema`);
    this.schema = schema;
    this.value = value;
    this.error = error;
  }
};
var TransformEncodeError = class extends TypeBoxError {
  constructor(schema, path, value, error) {
    super(`${error instanceof Error ? error.message : "Unknown error"}`);
    this.schema = schema;
    this.path = path;
    this.value = value;
    this.error = error;
  }
};
function Default4(schema, path, value) {
  try {
    return IsTransform(schema) ? schema[TransformKind].Encode(value) : value;
  } catch (error) {
    throw new TransformEncodeError(schema, path, value, error);
  }
}
function FromArray15(schema, references, path, value) {
  const defaulted = Default4(schema, path, value);
  return IsArray2(defaulted) ? defaulted.map((value2, index) => Visit12(schema.items, references, `${path}/${index}`, value2)) : defaulted;
}
function FromImport8(schema, references, path, value) {
  const additional = globalThis.Object.values(schema.$defs);
  const target = schema.$defs[schema.$ref];
  const result = Default4(schema, path, value);
  return Visit12(target, [...references, ...additional], path, result);
}
function FromIntersect16(schema, references, path, value) {
  const defaulted = Default4(schema, path, value);
  if (!IsObject2(value) || IsValueType(value))
    return defaulted;
  const knownEntries = KeyOfPropertyEntries(schema);
  const knownKeys = knownEntries.map((entry) => entry[0]);
  const knownProperties = { ...defaulted };
  for (const [knownKey, knownSchema] of knownEntries)
    if (knownKey in knownProperties) {
      knownProperties[knownKey] = Visit12(knownSchema, references, `${path}/${knownKey}`, knownProperties[knownKey]);
    }
  if (!IsTransform(schema.unevaluatedProperties)) {
    return knownProperties;
  }
  const unknownKeys = Object.getOwnPropertyNames(knownProperties);
  const unevaluatedProperties = schema.unevaluatedProperties;
  const properties = { ...knownProperties };
  for (const key of unknownKeys)
    if (!knownKeys.includes(key)) {
      properties[key] = Default4(unevaluatedProperties, `${path}/${key}`, properties[key]);
    }
  return properties;
}
function FromNot6(schema, references, path, value) {
  return Default4(schema.not, path, Default4(schema, path, value));
}
function FromObject16(schema, references, path, value) {
  const defaulted = Default4(schema, path, value);
  if (!IsObject2(defaulted))
    return defaulted;
  const knownKeys = KeyOfPropertyKeys(schema);
  const knownProperties = { ...defaulted };
  for (const key of knownKeys) {
    if (!HasPropertyKey2(knownProperties, key))
      continue;
    if (IsUndefined2(knownProperties[key]) && (!IsUndefined3(schema.properties[key]) || TypeSystemPolicy.IsExactOptionalProperty(knownProperties, key)))
      continue;
    knownProperties[key] = Visit12(schema.properties[key], references, `${path}/${key}`, knownProperties[key]);
  }
  if (!IsSchema(schema.additionalProperties)) {
    return knownProperties;
  }
  const unknownKeys = Object.getOwnPropertyNames(knownProperties);
  const additionalProperties = schema.additionalProperties;
  const properties = { ...knownProperties };
  for (const key of unknownKeys)
    if (!knownKeys.includes(key)) {
      properties[key] = Default4(additionalProperties, `${path}/${key}`, properties[key]);
    }
  return properties;
}
function FromRecord11(schema, references, path, value) {
  const defaulted = Default4(schema, path, value);
  if (!IsObject2(value))
    return defaulted;
  const pattern = Object.getOwnPropertyNames(schema.patternProperties)[0];
  const knownKeys = new RegExp(pattern);
  const knownProperties = { ...defaulted };
  for (const key of Object.getOwnPropertyNames(value))
    if (knownKeys.test(key)) {
      knownProperties[key] = Visit12(schema.patternProperties[pattern], references, `${path}/${key}`, knownProperties[key]);
    }
  if (!IsSchema(schema.additionalProperties)) {
    return knownProperties;
  }
  const unknownKeys = Object.getOwnPropertyNames(knownProperties);
  const additionalProperties = schema.additionalProperties;
  const properties = { ...knownProperties };
  for (const key of unknownKeys)
    if (!knownKeys.test(key)) {
      properties[key] = Default4(additionalProperties, `${path}/${key}`, properties[key]);
    }
  return properties;
}
function FromRef12(schema, references, path, value) {
  const target = Deref(schema, references);
  const resolved = Visit12(target, references, path, value);
  return Default4(schema, path, resolved);
}
function FromThis8(schema, references, path, value) {
  const target = Deref(schema, references);
  const resolved = Visit12(target, references, path, value);
  return Default4(schema, path, resolved);
}
function FromTuple13(schema, references, path, value) {
  const value1 = Default4(schema, path, value);
  return IsArray2(schema.items) ? schema.items.map((schema2, index) => Visit12(schema2, references, `${path}/${index}`, value1[index])) : [];
}
function FromUnion18(schema, references, path, value) {
  for (const subschema of schema.anyOf) {
    if (!Check(subschema, references, value))
      continue;
    const value1 = Visit12(subschema, references, path, value);
    return Default4(schema, path, value1);
  }
  for (const subschema of schema.anyOf) {
    const value1 = Visit12(subschema, references, path, value);
    if (!Check(schema, references, value1))
      continue;
    return Default4(schema, path, value1);
  }
  return Default4(schema, path, value);
}
function Visit12(schema, references, path, value) {
  const references_ = Pushref(schema, references);
  const schema_ = schema;
  switch (schema[Kind]) {
    case "Array":
      return FromArray15(schema_, references_, path, value);
    case "Import":
      return FromImport8(schema_, references_, path, value);
    case "Intersect":
      return FromIntersect16(schema_, references_, path, value);
    case "Not":
      return FromNot6(schema_, references_, path, value);
    case "Object":
      return FromObject16(schema_, references_, path, value);
    case "Record":
      return FromRecord11(schema_, references_, path, value);
    case "Ref":
      return FromRef12(schema_, references_, path, value);
    case "This":
      return FromThis8(schema_, references_, path, value);
    case "Tuple":
      return FromTuple13(schema_, references_, path, value);
    case "Union":
      return FromUnion18(schema_, references_, path, value);
    default:
      return Default4(schema_, path, value);
  }
}
function TransformEncode(schema, references, value) {
  return Visit12(schema, references, "", value);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/value/transform/has.mjs
function FromArray16(schema, references) {
  return IsTransform(schema) || Visit13(schema.items, references);
}
function FromAsyncIterator7(schema, references) {
  return IsTransform(schema) || Visit13(schema.items, references);
}
function FromConstructor8(schema, references) {
  return IsTransform(schema) || Visit13(schema.returns, references) || schema.parameters.some((schema2) => Visit13(schema2, references));
}
function FromFunction7(schema, references) {
  return IsTransform(schema) || Visit13(schema.returns, references) || schema.parameters.some((schema2) => Visit13(schema2, references));
}
function FromIntersect17(schema, references) {
  return IsTransform(schema) || IsTransform(schema.unevaluatedProperties) || schema.allOf.some((schema2) => Visit13(schema2, references));
}
function FromImport9(schema, references) {
  const additional = globalThis.Object.getOwnPropertyNames(schema.$defs).reduce((result, key) => [...result, schema.$defs[key]], []);
  const target = schema.$defs[schema.$ref];
  return IsTransform(schema) || Visit13(target, [...additional, ...references]);
}
function FromIterator7(schema, references) {
  return IsTransform(schema) || Visit13(schema.items, references);
}
function FromNot7(schema, references) {
  return IsTransform(schema) || Visit13(schema.not, references);
}
function FromObject17(schema, references) {
  return IsTransform(schema) || Object.values(schema.properties).some((schema2) => Visit13(schema2, references)) || IsSchema(schema.additionalProperties) && Visit13(schema.additionalProperties, references);
}
function FromPromise7(schema, references) {
  return IsTransform(schema) || Visit13(schema.item, references);
}
function FromRecord12(schema, references) {
  const pattern = Object.getOwnPropertyNames(schema.patternProperties)[0];
  const property = schema.patternProperties[pattern];
  return IsTransform(schema) || Visit13(property, references) || IsSchema(schema.additionalProperties) && IsTransform(schema.additionalProperties);
}
function FromRef13(schema, references) {
  if (IsTransform(schema))
    return true;
  return Visit13(Deref(schema, references), references);
}
function FromThis9(schema, references) {
  if (IsTransform(schema))
    return true;
  return Visit13(Deref(schema, references), references);
}
function FromTuple14(schema, references) {
  return IsTransform(schema) || !IsUndefined2(schema.items) && schema.items.some((schema2) => Visit13(schema2, references));
}
function FromUnion19(schema, references) {
  return IsTransform(schema) || schema.anyOf.some((schema2) => Visit13(schema2, references));
}
function Visit13(schema, references) {
  const references_ = Pushref(schema, references);
  const schema_ = schema;
  if (schema.$id && visited.has(schema.$id))
    return false;
  if (schema.$id)
    visited.add(schema.$id);
  switch (schema[Kind]) {
    case "Array":
      return FromArray16(schema_, references_);
    case "AsyncIterator":
      return FromAsyncIterator7(schema_, references_);
    case "Constructor":
      return FromConstructor8(schema_, references_);
    case "Function":
      return FromFunction7(schema_, references_);
    case "Import":
      return FromImport9(schema_, references_);
    case "Intersect":
      return FromIntersect17(schema_, references_);
    case "Iterator":
      return FromIterator7(schema_, references_);
    case "Not":
      return FromNot7(schema_, references_);
    case "Object":
      return FromObject17(schema_, references_);
    case "Promise":
      return FromPromise7(schema_, references_);
    case "Record":
      return FromRecord12(schema_, references_);
    case "Ref":
      return FromRef13(schema_, references_);
    case "This":
      return FromThis9(schema_, references_);
    case "Tuple":
      return FromTuple14(schema_, references_);
    case "Union":
      return FromUnion19(schema_, references_);
    default:
      return IsTransform(schema);
  }
}
var visited = /* @__PURE__ */ new Set();
function HasTransform(schema, references) {
  visited.clear();
  return Visit13(schema, references);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/value/decode/decode.mjs
function Decode(...args) {
  const [schema, references, value] = args.length === 3 ? [args[0], args[1], args[2]] : [args[0], [], args[1]];
  if (!Check(schema, references, value))
    throw new TransformDecodeCheckError(schema, value, Errors(schema, references, value).First());
  return HasTransform(schema, references) ? TransformDecode(schema, references, value) : value;
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/value/default/default.mjs
function ValueOrDefault(schema, value) {
  const defaultValue = HasPropertyKey2(schema, "default") ? schema.default : void 0;
  const clone = IsFunction2(defaultValue) ? defaultValue() : Clone2(defaultValue);
  return IsUndefined2(value) ? clone : IsObject2(value) && IsObject2(clone) ? Object.assign(clone, value) : value;
}
function HasDefaultProperty(schema) {
  return IsKind(schema) && "default" in schema;
}
function FromArray17(schema, references, value) {
  if (IsArray2(value)) {
    for (let i = 0; i < value.length; i++) {
      value[i] = Visit14(schema.items, references, value[i]);
    }
    return value;
  }
  const defaulted = ValueOrDefault(schema, value);
  if (!IsArray2(defaulted))
    return defaulted;
  for (let i = 0; i < defaulted.length; i++) {
    defaulted[i] = Visit14(schema.items, references, defaulted[i]);
  }
  return defaulted;
}
function FromDate7(schema, references, value) {
  return IsDate2(value) ? value : ValueOrDefault(schema, value);
}
function FromImport10(schema, references, value) {
  const definitions = globalThis.Object.values(schema.$defs);
  const target = schema.$defs[schema.$ref];
  return Visit14(target, [...references, ...definitions], value);
}
function FromIntersect18(schema, references, value) {
  const defaulted = ValueOrDefault(schema, value);
  return schema.allOf.reduce((acc, schema2) => {
    const next = Visit14(schema2, references, defaulted);
    return IsObject2(next) ? { ...acc, ...next } : next;
  }, {});
}
function FromObject18(schema, references, value) {
  const defaulted = ValueOrDefault(schema, value);
  if (!IsObject2(defaulted))
    return defaulted;
  const knownPropertyKeys = Object.getOwnPropertyNames(schema.properties);
  for (const key of knownPropertyKeys) {
    const propertyValue = Visit14(schema.properties[key], references, defaulted[key]);
    if (IsUndefined2(propertyValue))
      continue;
    defaulted[key] = Visit14(schema.properties[key], references, defaulted[key]);
  }
  if (!HasDefaultProperty(schema.additionalProperties))
    return defaulted;
  for (const key of Object.getOwnPropertyNames(defaulted)) {
    if (knownPropertyKeys.includes(key))
      continue;
    defaulted[key] = Visit14(schema.additionalProperties, references, defaulted[key]);
  }
  return defaulted;
}
function FromRecord13(schema, references, value) {
  const defaulted = ValueOrDefault(schema, value);
  if (!IsObject2(defaulted))
    return defaulted;
  const additionalPropertiesSchema = schema.additionalProperties;
  const [propertyKeyPattern, propertySchema] = Object.entries(schema.patternProperties)[0];
  const knownPropertyKey = new RegExp(propertyKeyPattern);
  for (const key of Object.getOwnPropertyNames(defaulted)) {
    if (!(knownPropertyKey.test(key) && HasDefaultProperty(propertySchema)))
      continue;
    defaulted[key] = Visit14(propertySchema, references, defaulted[key]);
  }
  if (!HasDefaultProperty(additionalPropertiesSchema))
    return defaulted;
  for (const key of Object.getOwnPropertyNames(defaulted)) {
    if (knownPropertyKey.test(key))
      continue;
    defaulted[key] = Visit14(additionalPropertiesSchema, references, defaulted[key]);
  }
  return defaulted;
}
function FromRef14(schema, references, value) {
  return Visit14(Deref(schema, references), references, ValueOrDefault(schema, value));
}
function FromThis10(schema, references, value) {
  return Visit14(Deref(schema, references), references, value);
}
function FromTuple15(schema, references, value) {
  const defaulted = ValueOrDefault(schema, value);
  if (!IsArray2(defaulted) || IsUndefined2(schema.items))
    return defaulted;
  const [items, max] = [schema.items, Math.max(schema.items.length, defaulted.length)];
  for (let i = 0; i < max; i++) {
    if (i < items.length)
      defaulted[i] = Visit14(items[i], references, defaulted[i]);
  }
  return defaulted;
}
function FromUnion20(schema, references, value) {
  const defaulted = ValueOrDefault(schema, value);
  for (const inner of schema.anyOf) {
    const result = Visit14(inner, references, Clone2(defaulted));
    if (Check(inner, references, result)) {
      return result;
    }
  }
  return defaulted;
}
function Visit14(schema, references, value) {
  const references_ = Pushref(schema, references);
  const schema_ = schema;
  switch (schema_[Kind]) {
    case "Array":
      return FromArray17(schema_, references_, value);
    case "Date":
      return FromDate7(schema_, references_, value);
    case "Import":
      return FromImport10(schema_, references_, value);
    case "Intersect":
      return FromIntersect18(schema_, references_, value);
    case "Object":
      return FromObject18(schema_, references_, value);
    case "Record":
      return FromRecord13(schema_, references_, value);
    case "Ref":
      return FromRef14(schema_, references_, value);
    case "This":
      return FromThis10(schema_, references_, value);
    case "Tuple":
      return FromTuple15(schema_, references_, value);
    case "Union":
      return FromUnion20(schema_, references_, value);
    default:
      return ValueOrDefault(schema_, value);
  }
}
function Default5(...args) {
  return args.length === 3 ? Visit14(args[0], args[1], args[2]) : Visit14(args[0], [], args[1]);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/value/pointer/pointer.mjs
var pointer_exports = {};
__export(pointer_exports, {
  Delete: () => Delete3,
  Format: () => Format,
  Get: () => Get3,
  Has: () => Has3,
  Set: () => Set4,
  ValuePointerRootDeleteError: () => ValuePointerRootDeleteError,
  ValuePointerRootSetError: () => ValuePointerRootSetError
});
var ValuePointerRootSetError = class extends TypeBoxError {
  constructor(value, path, update) {
    super("Cannot set root value");
    this.value = value;
    this.path = path;
    this.update = update;
  }
};
var ValuePointerRootDeleteError = class extends TypeBoxError {
  constructor(value, path) {
    super("Cannot delete root value");
    this.value = value;
    this.path = path;
  }
};
function Escape2(component) {
  return component.indexOf("~") === -1 ? component : component.replace(/~1/g, "/").replace(/~0/g, "~");
}
function* Format(pointer) {
  if (pointer === "")
    return;
  let [start, end] = [0, 0];
  for (let i = 0; i < pointer.length; i++) {
    const char = pointer.charAt(i);
    if (char === "/") {
      if (i === 0) {
        start = i + 1;
      } else {
        end = i;
        yield Escape2(pointer.slice(start, end));
        start = i + 1;
      }
    } else {
      end = i;
    }
  }
  yield Escape2(pointer.slice(start));
}
function Set4(value, pointer, update) {
  if (pointer === "")
    throw new ValuePointerRootSetError(value, pointer, update);
  let [owner, next, key] = [null, value, ""];
  for (const component of Format(pointer)) {
    if (next[component] === void 0)
      next[component] = {};
    owner = next;
    next = next[component];
    key = component;
  }
  owner[key] = update;
}
function Delete3(value, pointer) {
  if (pointer === "")
    throw new ValuePointerRootDeleteError(value, pointer);
  let [owner, next, key] = [null, value, ""];
  for (const component of Format(pointer)) {
    if (next[component] === void 0 || next[component] === null)
      return;
    owner = next;
    next = next[component];
    key = component;
  }
  if (Array.isArray(owner)) {
    const index = parseInt(key);
    owner.splice(index, 1);
  } else {
    delete owner[key];
  }
}
function Has3(value, pointer) {
  if (pointer === "")
    return true;
  let [owner, next, key] = [null, value, ""];
  for (const component of Format(pointer)) {
    if (next[component] === void 0)
      return false;
    owner = next;
    next = next[component];
    key = component;
  }
  return Object.getOwnPropertyNames(owner).includes(key);
}
function Get3(value, pointer) {
  if (pointer === "")
    return value;
  let current = value;
  for (const component of Format(pointer)) {
    if (current[component] === void 0)
      return void 0;
    current = current[component];
  }
  return current;
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/value/equal/equal.mjs
function ObjectType3(left, right) {
  if (!IsObject2(right))
    return false;
  const leftKeys = [...Object.keys(left), ...Object.getOwnPropertySymbols(left)];
  const rightKeys = [...Object.keys(right), ...Object.getOwnPropertySymbols(right)];
  if (leftKeys.length !== rightKeys.length)
    return false;
  return leftKeys.every((key) => Equal(left[key], right[key]));
}
function DateType3(left, right) {
  return IsDate2(right) && left.getTime() === right.getTime();
}
function ArrayType3(left, right) {
  if (!IsArray2(right) || left.length !== right.length)
    return false;
  return left.every((value, index) => Equal(value, right[index]));
}
function TypedArrayType(left, right) {
  if (!IsTypedArray(right) || left.length !== right.length || Object.getPrototypeOf(left).constructor.name !== Object.getPrototypeOf(right).constructor.name)
    return false;
  return left.every((value, index) => Equal(value, right[index]));
}
function ValueType(left, right) {
  return left === right;
}
function Equal(left, right) {
  if (IsDate2(left))
    return DateType3(left, right);
  if (IsTypedArray(left))
    return TypedArrayType(left, right);
  if (IsArray2(left))
    return ArrayType3(left, right);
  if (IsObject2(left))
    return ObjectType3(left, right);
  if (IsValueType(left))
    return ValueType(left, right);
  throw new Error("ValueEquals: Unable to compare value");
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/value/delta/delta.mjs
var Insert = Object2({
  type: Literal("insert"),
  path: String2(),
  value: Unknown()
});
var Update = Object2({
  type: Literal("update"),
  path: String2(),
  value: Unknown()
});
var Delete4 = Object2({
  type: Literal("delete"),
  path: String2()
});
var Edit = Union([Insert, Update, Delete4]);
var ValueDiffError = class extends TypeBoxError {
  constructor(value, message) {
    super(message);
    this.value = value;
  }
};
function CreateUpdate(path, value) {
  return { type: "update", path, value };
}
function CreateInsert(path, value) {
  return { type: "insert", path, value };
}
function CreateDelete(path) {
  return { type: "delete", path };
}
function AssertDiffable(value) {
  if (globalThis.Object.getOwnPropertySymbols(value).length > 0)
    throw new ValueDiffError(value, "Cannot diff objects with symbols");
}
function* ObjectType4(path, current, next) {
  AssertDiffable(current);
  AssertDiffable(next);
  if (!IsStandardObject(next))
    return yield CreateUpdate(path, next);
  const currentKeys = globalThis.Object.getOwnPropertyNames(current);
  const nextKeys = globalThis.Object.getOwnPropertyNames(next);
  for (const key of nextKeys) {
    if (HasPropertyKey2(current, key))
      continue;
    yield CreateInsert(`${path}/${key}`, next[key]);
  }
  for (const key of currentKeys) {
    if (!HasPropertyKey2(next, key))
      continue;
    if (Equal(current, next))
      continue;
    yield* Visit15(`${path}/${key}`, current[key], next[key]);
  }
  for (const key of currentKeys) {
    if (HasPropertyKey2(next, key))
      continue;
    yield CreateDelete(`${path}/${key}`);
  }
}
function* ArrayType4(path, current, next) {
  if (!IsArray2(next))
    return yield CreateUpdate(path, next);
  for (let i = 0; i < Math.min(current.length, next.length); i++) {
    yield* Visit15(`${path}/${i}`, current[i], next[i]);
  }
  for (let i = 0; i < next.length; i++) {
    if (i < current.length)
      continue;
    yield CreateInsert(`${path}/${i}`, next[i]);
  }
  for (let i = current.length - 1; i >= 0; i--) {
    if (i < next.length)
      continue;
    yield CreateDelete(`${path}/${i}`);
  }
}
function* TypedArrayType2(path, current, next) {
  if (!IsTypedArray(next) || current.length !== next.length || globalThis.Object.getPrototypeOf(current).constructor.name !== globalThis.Object.getPrototypeOf(next).constructor.name)
    return yield CreateUpdate(path, next);
  for (let i = 0; i < Math.min(current.length, next.length); i++) {
    yield* Visit15(`${path}/${i}`, current[i], next[i]);
  }
}
function* ValueType2(path, current, next) {
  if (current === next)
    return;
  yield CreateUpdate(path, next);
}
function* Visit15(path, current, next) {
  if (IsStandardObject(current))
    return yield* ObjectType4(path, current, next);
  if (IsArray2(current))
    return yield* ArrayType4(path, current, next);
  if (IsTypedArray(current))
    return yield* TypedArrayType2(path, current, next);
  if (IsValueType(current))
    return yield* ValueType2(path, current, next);
  throw new ValueDiffError(current, "Unable to diff value");
}
function Diff(current, next) {
  return [...Visit15("", current, next)];
}
function IsRootUpdate(edits) {
  return edits.length > 0 && edits[0].path === "" && edits[0].type === "update";
}
function IsIdentity(edits) {
  return edits.length === 0;
}
function Patch(current, edits) {
  if (IsRootUpdate(edits)) {
    return Clone2(edits[0].value);
  }
  if (IsIdentity(edits)) {
    return Clone2(current);
  }
  const clone = Clone2(current);
  for (const edit of edits) {
    switch (edit.type) {
      case "insert": {
        pointer_exports.Set(clone, edit.path, edit.value);
        break;
      }
      case "update": {
        pointer_exports.Set(clone, edit.path, edit.value);
        break;
      }
      case "delete": {
        pointer_exports.Delete(clone, edit.path);
        break;
      }
    }
  }
  return clone;
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/value/encode/encode.mjs
function Encode(...args) {
  const [schema, references, value] = args.length === 3 ? [args[0], args[1], args[2]] : [args[0], [], args[1]];
  const encoded = HasTransform(schema, references) ? TransformEncode(schema, references, value) : value;
  if (!Check(schema, references, encoded))
    throw new TransformEncodeCheckError(schema, encoded, Errors(schema, references, encoded).First());
  return encoded;
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/value/mutate/mutate.mjs
function IsStandardObject2(value) {
  return IsObject2(value) && !IsArray2(value);
}
var ValueMutateError = class extends TypeBoxError {
  constructor(message) {
    super(message);
  }
};
function ObjectType5(root, path, current, next) {
  if (!IsStandardObject2(current)) {
    pointer_exports.Set(root, path, Clone2(next));
  } else {
    const currentKeys = Object.getOwnPropertyNames(current);
    const nextKeys = Object.getOwnPropertyNames(next);
    for (const currentKey of currentKeys) {
      if (!nextKeys.includes(currentKey)) {
        delete current[currentKey];
      }
    }
    for (const nextKey of nextKeys) {
      if (!currentKeys.includes(nextKey)) {
        current[nextKey] = null;
      }
    }
    for (const nextKey of nextKeys) {
      Visit16(root, `${path}/${nextKey}`, current[nextKey], next[nextKey]);
    }
  }
}
function ArrayType5(root, path, current, next) {
  if (!IsArray2(current)) {
    pointer_exports.Set(root, path, Clone2(next));
  } else {
    for (let index = 0; index < next.length; index++) {
      Visit16(root, `${path}/${index}`, current[index], next[index]);
    }
    current.splice(next.length);
  }
}
function TypedArrayType3(root, path, current, next) {
  if (IsTypedArray(current) && current.length === next.length) {
    for (let i = 0; i < current.length; i++) {
      current[i] = next[i];
    }
  } else {
    pointer_exports.Set(root, path, Clone2(next));
  }
}
function ValueType3(root, path, current, next) {
  if (current === next)
    return;
  pointer_exports.Set(root, path, next);
}
function Visit16(root, path, current, next) {
  if (IsArray2(next))
    return ArrayType5(root, path, current, next);
  if (IsTypedArray(next))
    return TypedArrayType3(root, path, current, next);
  if (IsStandardObject2(next))
    return ObjectType5(root, path, current, next);
  if (IsValueType(next))
    return ValueType3(root, path, current, next);
}
function IsNonMutableValue(value) {
  return IsTypedArray(value) || IsValueType(value);
}
function IsMismatchedValue(current, next) {
  return IsStandardObject2(current) && IsArray2(next) || IsArray2(current) && IsStandardObject2(next);
}
function Mutate(current, next) {
  if (IsNonMutableValue(current) || IsNonMutableValue(next))
    throw new ValueMutateError("Only object and array types can be mutated at the root level");
  if (IsMismatchedValue(current, next))
    throw new ValueMutateError("Cannot assign due type mismatch of assignable values");
  Visit16(current, "", current, next);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/value/parse/parse.mjs
var ParseError = class extends TypeBoxError {
  constructor(message) {
    super(message);
  }
};
var ParseRegistry;
(function(ParseRegistry2) {
  const registry = /* @__PURE__ */ new Map([
    ["Assert", (type, references, value) => {
      Assert(type, references, value);
      return value;
    }],
    ["Cast", (type, references, value) => Cast(type, references, value)],
    ["Clean", (type, references, value) => Clean(type, references, value)],
    ["Clone", (_type, _references, value) => Clone2(value)],
    ["Convert", (type, references, value) => Convert(type, references, value)],
    ["Decode", (type, references, value) => HasTransform(type, references) ? TransformDecode(type, references, value) : value],
    ["Default", (type, references, value) => Default5(type, references, value)],
    ["Encode", (type, references, value) => HasTransform(type, references) ? TransformEncode(type, references, value) : value]
  ]);
  function Delete5(key) {
    registry.delete(key);
  }
  ParseRegistry2.Delete = Delete5;
  function Set5(key, callback) {
    registry.set(key, callback);
  }
  ParseRegistry2.Set = Set5;
  function Get4(key) {
    return registry.get(key);
  }
  ParseRegistry2.Get = Get4;
})(ParseRegistry || (ParseRegistry = {}));
var ParseDefault = [
  "Clone",
  "Clean",
  "Default",
  "Convert",
  "Assert",
  "Decode"
];
function ParseValue(operations, type, references, value) {
  return operations.reduce((value2, operationKey) => {
    const operation = ParseRegistry.Get(operationKey);
    if (IsUndefined2(operation))
      throw new ParseError(`Unable to find Parse operation '${operationKey}'`);
    return operation(type, references, value2);
  }, value);
}
function Parse(...args) {
  const [operations, schema, references, value] = args.length === 4 ? [args[0], args[1], args[2], args[3]] : args.length === 3 ? IsArray2(args[0]) ? [args[0], args[1], [], args[2]] : [ParseDefault, args[0], args[1], args[2]] : args.length === 2 ? [ParseDefault, args[0], [], args[1]] : (() => {
    throw new ParseError("Invalid Arguments");
  })();
  return ParseValue(operations, schema, references, value);
}

// node_modules/.pnpm/@sinclair+typebox@0.34.41/node_modules/@sinclair/typebox/build/esm/value/value/value.mjs
var value_exports2 = {};
__export(value_exports2, {
  Assert: () => Assert,
  Cast: () => Cast,
  Check: () => Check,
  Clean: () => Clean,
  Clone: () => Clone2,
  Convert: () => Convert,
  Create: () => Create2,
  Decode: () => Decode,
  Default: () => Default5,
  Diff: () => Diff,
  Edit: () => Edit,
  Encode: () => Encode,
  Equal: () => Equal,
  Errors: () => Errors,
  Hash: () => Hash,
  Mutate: () => Mutate,
  Parse: () => Parse,
  Patch: () => Patch,
  ValueErrorIterator: () => ValueErrorIterator
});

// src/sdk/utils/validation.ts
function formatErrors(schema, value) {
  return [...value_exports2.Errors(schema, value)].map((error) => `${error.path || "<root>"}: ${error.message}`).join("; ");
}
function assertValid(schema, value, context = "value") {
  if (!value_exports2.Check(schema, value)) {
    const details = formatErrors(schema, value);
    throw new Error(`Validation failed for ${context}: ${details}`);
  }
  return value;
}
function clean(schema, value) {
  const cleaned = value_exports2.Clean(schema, value);
  return cleaned;
}

// src/sdk/models/activity.ts
var StatusEnumSchema = Type.Union([
  Type.Literal("success"),
  Type.Literal("partial_success"),
  Type.Literal("fail"),
  Type.Literal("malicious"),
  Type.Literal("other"),
  Type.Literal("unknown"),
  Type.Literal("error")
]);
var EntitySchema = Type.Object(
  {
    type: Type.String(),
    id: Type.String(),
    name: Type.Optional(Type.String()),
    email: Type.Optional(Type.String())
  },
  { additionalProperties: false }
);
var PlatformActivityInputSchema = Type.Object(
  {
    actor: Type.Optional(Type.Union([EntitySchema, Type.Null()])),
    targets: Type.Optional(Type.Union([Type.Array(EntitySchema), Type.Null()])),
    event_type: Type.String(),
    event_time: Type.Unknown(),
    context: Type.Record(Type.String(), Type.Unknown()),
    ip_address: Type.String(),
    status: StatusEnumSchema,
    user_agent: Type.String()
  },
  { additionalProperties: false }
);
var SerializedActivitySchema = Type.Object(
  {
    actor: Type.Optional(EntitySchema),
    targets: Type.Optional(Type.Array(EntitySchema)),
    event_type: Type.String(),
    event_time: Type.String(),
    context: Type.Record(Type.String(), Type.Unknown()),
    ip_address: Type.String(),
    status: StatusEnumSchema,
    user_agent: Type.String()
  },
  { additionalProperties: false }
);
function serializeEntity(value) {
  return assertValid(EntitySchema, clean(EntitySchema, value), "Entity");
}
function serializeActivity(record) {
  const cleaned = clean(PlatformActivityInputSchema, record);
  const parsed = assertValid(PlatformActivityInputSchema, cleaned, "PlatformActivityV1_0");
  const output = {
    event_type: parsed.event_type,
    event_time: toIsoString(parsed.event_time, "event_time"),
    context: parsed.context,
    ip_address: parsed.ip_address,
    status: parsed.status,
    user_agent: parsed.user_agent
  };
  if (parsed.actor) {
    output.actor = serializeEntity(parsed.actor);
  }
  if (parsed.targets && parsed.targets.length > 0) {
    output.targets = parsed.targets.map(serializeEntity);
  }
  return assertValid(SerializedActivitySchema, output, "SerializedActivity");
}

// src/sdk/models/object.ts
function serializeArrayValue(key, value) {
  if (!value.every((item) => typeof item === "string")) {
    throw new Error(`Object field ${key} must be an array of strings`);
  }
  return value;
}
function serializeObjectValue(key, value) {
  if (value instanceof Date) {
    return toIsoString(value, key);
  }
  if (Array.isArray(value)) {
    return serializeArrayValue(key, value);
  }
  if (value === null) {
    return null;
  }
  if (typeof value === "boolean" || typeof value === "string") {
    return value;
  }
  if (typeof value === "number") {
    if (!Number.isFinite(value)) {
      throw new Error(`Object field ${key} must be a finite number`);
    }
    return value;
  }
  throw new Error(`Object field ${key} must be flat primitive, Date, or string[]`);
}
function serializeObject(obj) {
  const output = {};
  for (const [key, value] of Object.entries(obj)) {
    output[key] = serializeObjectValue(key, value);
  }
  return output;
}

// src/sdk/utils/slugify.ts
function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9_]/g, "_").replace(/_+/g, "_").replace(/^_+|_+$/g, "");
}

// src/sdk/models/schema.ts
var COLUMN_NAME_PATTERN = new RegExp("^[a-zA-Z0-9\\s_\\-()\\[\\]<>:.]+$");
var ColumnTypeSchema = Type.Union([
  Type.Literal("str"),
  Type.Literal("bool"),
  Type.Literal("number"),
  Type.Literal("datetime"),
  Type.Literal("list")
]);
var DataSourceColumnSchema = Type.Object(
  {
    name: Type.String(),
    kind: ColumnTypeSchema,
    can_filter: Type.Optional(Type.Boolean({ default: false })),
    is_primary_key: Type.Optional(Type.Boolean({ default: false })),
    is_label: Type.Optional(Type.Boolean({ default: false }))
  },
  { additionalProperties: false }
);
var DataSourceDefinitionInputSchema = Type.Object(
  {
    name: Type.Optional(Type.String()),
    title: Type.Optional(Type.String()),
    author: Type.String(),
    description: Type.String(),
    columns: Type.Array(DataSourceColumnSchema),
    label_columns: Type.Optional(Type.Array(Type.String()))
  },
  { additionalProperties: true }
);
var DataSourceDefinitionSchema = Type.Object(
  {
    name: Type.String(),
    author: Type.String(),
    description: Type.String(),
    columns: Type.Array(DataSourceColumnSchema)
  },
  { additionalProperties: false }
);
function normalizeName(input) {
  const name = input.name ?? input.title;
  if (!name) {
    throw new Error("Schema definition requires a name or title");
  }
  return name;
}
function normalizeColumns(columns, labelColumns) {
  return columns.map((column) => ({
    name: column.name,
    kind: column.kind,
    can_filter: column.can_filter ?? false,
    is_primary_key: column.is_primary_key ?? false,
    is_label: (column.is_label ?? false) || labelColumns.has(column.name)
  }));
}
function validateColumnNames(columns) {
  for (const column of columns) {
    if (!COLUMN_NAME_PATTERN.test(column.name)) {
      throw new Error(
        "Column names must contain only alphanumeric characters, spaces, and _-()[]<>:."
      );
    }
  }
}
function validateLabelColumns(columns, labels) {
  if (labels.size === 0) {
    return;
  }
  const columnNames = new Set(columns.map((column) => column.name));
  for (const label of labels) {
    if (!columnNames.has(label)) {
      throw new Error(`Label column ${label} is not present in schema columns`);
    }
  }
}
function validateUniqueColumnSlugs(columns) {
  const seen = /* @__PURE__ */ new Set();
  for (const column of columns) {
    const slug = slugify(column.name);
    if (seen.has(slug)) {
      throw new Error(`Column id ${slug} appears multiple times`);
    }
    seen.add(slug);
  }
}
function validatePrimaryKeys(columns) {
  const primaryKeys = columns.filter((column) => column.is_primary_key);
  if (primaryKeys.length === 0) {
    throw new Error("At least one column must have is_primary_key=true");
  }
  for (const key of primaryKeys) {
    if (key.kind === "list") {
      throw new Error("Cannot set is_primary_key=true on a column of type LIST");
    }
  }
  const allBoolean = primaryKeys.every((column) => column.kind === "bool");
  if (allBoolean) {
    throw new Error("Not all primary key columns can be of type BOOL");
  }
}
function normalizeSchemaDefinition(input) {
  const cleaned = clean(DataSourceDefinitionInputSchema, input);
  const parsed = assertValid(DataSourceDefinitionInputSchema, cleaned, "DataSourceDefinitionInput");
  const labels = new Set(parsed.label_columns ?? []);
  const columns = normalizeColumns(parsed.columns, labels);
  validateColumnNames(columns);
  validateLabelColumns(columns, labels);
  validateUniqueColumnSlugs(columns);
  validatePrimaryKeys(columns);
  const output = {
    name: normalizeName(parsed),
    author: parsed.author,
    description: parsed.description,
    columns
  };
  return assertValid(DataSourceDefinitionSchema, output, "DataSourceDefinition");
}
function toApiSchemaDefinition(definition) {
  const cleaned = clean(DataSourceDefinitionSchema, definition);
  return assertValid(DataSourceDefinitionSchema, cleaned, "DataSourceDefinition");
}

// src/sdk/models/rules.ts
var FilterGroupInputSchema = Type.Object(
  {
    not: Type.Optional(Type.Boolean({ default: false })),
    not_: Type.Optional(Type.Boolean()),
    filter_items: Type.Optional(Type.Array(Type.Unknown(), { default: [] })),
    combinator: Type.Optional(Type.String({ default: "AND" }))
  },
  { additionalProperties: true }
);
var FilterGroupSchema = Type.Object(
  {
    not: Type.Boolean({ default: false }),
    filter_items: Type.Array(Type.Unknown()),
    combinator: Type.String()
  },
  { additionalProperties: true }
);
var RuleDefinitionInputSchema = Type.Object(
  {
    platform_id: Type.String(),
    id: Type.String(),
    name: Type.String(),
    analytic_id: Type.String(),
    benchmark: Type.Integer(),
    filter_set: FilterGroupInputSchema,
    security_domain: Type.String(),
    release_label: Type.String(),
    risk_level: Type.String(),
    description: Type.String(),
    description_short: Type.String(),
    remediation_instructions: Type.String()
  },
  { additionalProperties: true }
);
var RuleDefinitionSchema = Type.Object(
  {
    platform_id: Type.String(),
    id: Type.String(),
    name: Type.String(),
    analytic_id: Type.String(),
    benchmark: Type.Integer(),
    filter_set: FilterGroupSchema,
    security_domain: Type.String(),
    release_label: Type.String(),
    risk_level: Type.String(),
    description: Type.String(),
    description_short: Type.String(),
    remediation_instructions: Type.String()
  },
  { additionalProperties: true }
);
function normalizeFilterGroup(input) {
  const { not: directNot, not_: legacyNot, filter_items, combinator, ...rest } = input;
  const output = {
    ...rest,
    not: directNot ?? legacyNot ?? false,
    filter_items: filter_items ?? [],
    combinator: combinator ?? "AND"
  };
  return assertValid(FilterGroupSchema, output, "FilterGroup");
}
function normalizeRuleDefinition(input) {
  const cleaned = clean(RuleDefinitionInputSchema, input);
  const parsed = assertValid(RuleDefinitionInputSchema, cleaned, "RuleDefinitionInput");
  const output = {
    ...parsed,
    filter_set: normalizeFilterGroup(parsed.filter_set)
  };
  return assertValid(RuleDefinitionSchema, output, "RuleDefinition");
}

// src/sdk/models/settings.ts
var SettingTypeSchema = Type.Union([
  Type.Literal("bool"),
  Type.Literal("number"),
  Type.Literal("string"),
  Type.Literal("string_array")
]);
var SettingValueSchema = Type.Union([
  Type.Null(),
  Type.Boolean(),
  Type.Number(),
  Type.String(),
  Type.Array(Type.String())
]);
var PlatformSettingInputSchema = Type.Object(
  {
    id: Type.Optional(Type.String({ maxLength: 128 })),
    name: Type.String(),
    type: SettingTypeSchema,
    value: SettingValueSchema
  },
  { additionalProperties: false }
);
var PlatformSettingSchema = Type.Object(
  {
    id: Type.String({ maxLength: 128 }),
    name: Type.String(),
    type: SettingTypeSchema,
    value: SettingValueSchema
  },
  { additionalProperties: false }
);
function normalizeSetting(input) {
  const cleaned = clean(PlatformSettingInputSchema, input);
  const parsed = assertValid(PlatformSettingInputSchema, cleaned, "PlatformSettingInput");
  const output = {
    ...parsed,
    id: parsed.id ?? slugify(parsed.name)
  };
  return assertValid(PlatformSettingSchema, output, "PlatformSettingV1_0");
}

// src/sdk/models/graph.ts
var POSITIVE_SSO_MFA_MAPPINGS = [
  ["sso_enabled", "sso_status", "enabled"],
  ["sso_enforced", "sso_status", "enforced"],
  ["sso_required", "sso_status", "enforced"],
  ["mfa_enabled", "mfa_status", "enabled"],
  ["mfa_enforced", "mfa_status", "enforced"]
];
var NEGATIVE_SSO_MFA_MAPPINGS = [
  ["sso_enabled", "sso_status", "disabled"],
  ["mfa_enabled", "mfa_status", "disabled"]
];
var ACCOUNT_STATUS_FLAGS = [
  "sso_enabled",
  "sso_enforced",
  "sso_required",
  "mfa_enabled",
  "mfa_enforced"
];
var AuthenticationStatusSchema = Type.Union([
  Type.Literal("enabled"),
  Type.Literal("enforced"),
  Type.Literal("idp_backed"),
  Type.Literal("unknown"),
  Type.Literal("disabled")
]);
var PrincipalTypeSchema = Type.Union([Type.Literal("ACCOUNT"), Type.Literal("GROUP")]);
var SubjectTypeSchema = Type.Union([Type.Literal("ROLE"), Type.Literal("PERMISSION")]);
var AccountInputSchema = Type.Object(
  {
    account_id: Type.String(),
    username: Type.Optional(Type.String()),
    usrname: Type.Optional(Type.String()),
    email: Type.Optional(Type.String()),
    name: Type.Optional(Type.String()),
    status: Type.Optional(Type.String()),
    is_active: Type.Optional(Type.Boolean()),
    last_login_time: Type.Optional(Type.Unknown()),
    last_active_time: Type.Optional(Type.Unknown()),
    sso_status: Type.Optional(AuthenticationStatusSchema),
    mfa_status: Type.Optional(AuthenticationStatusSchema),
    sso_enabled: Type.Optional(Type.Boolean()),
    sso_enforced: Type.Optional(Type.Boolean()),
    sso_required: Type.Optional(Type.Boolean()),
    mfa_enabled: Type.Optional(Type.Boolean()),
    mfa_enforced: Type.Optional(Type.Boolean()),
    user_type: Type.Optional(Type.String()),
    department: Type.Optional(Type.String()),
    phone: Type.Optional(Type.String()),
    title: Type.Optional(Type.String()),
    is_admin: Type.Optional(Type.Boolean()),
    groups: Type.Optional(Type.Array(Type.String()))
  },
  { additionalProperties: false }
);
var AccountSchema = Type.Object(
  {
    account_id: Type.String(),
    username: Type.Optional(Type.String()),
    email: Type.Optional(Type.String()),
    name: Type.Optional(Type.String()),
    status: Type.Optional(Type.String()),
    is_active: Type.Optional(Type.Boolean()),
    last_login_time: Type.Optional(Type.String()),
    last_active_time: Type.Optional(Type.String()),
    sso_status: AuthenticationStatusSchema,
    mfa_status: AuthenticationStatusSchema,
    user_type: Type.Optional(Type.String()),
    department: Type.Optional(Type.String()),
    phone: Type.Optional(Type.String()),
    title: Type.Optional(Type.String()),
    is_admin: Type.Optional(Type.Boolean()),
    groups: Type.Optional(Type.Array(Type.String()))
  },
  { additionalProperties: false }
);
var GroupSchema = Type.Object(
  {
    group_id: Type.String(),
    name: Type.Optional(Type.String()),
    group_type: Type.Optional(Type.String()),
    accounts: Type.Optional(Type.Array(Type.String()))
  },
  { additionalProperties: false }
);
var PermissionSchema = Type.Object(
  {
    permission_id: Type.String(),
    name: Type.Optional(Type.String()),
    description: Type.Optional(Type.String()),
    roles: Type.Optional(Type.Array(Type.String()))
  },
  { additionalProperties: false }
);
var RoleSchema = Type.Object(
  {
    role_id: Type.String(),
    name: Type.Optional(Type.String()),
    is_system_role: Type.Optional(Type.Boolean()),
    is_custom_role: Type.Optional(Type.Boolean()),
    role_type: Type.Optional(Type.String()),
    is_active: Type.Optional(Type.Boolean()),
    status: Type.Optional(Type.String()),
    tags: Type.Optional(Type.Array(Type.String())),
    scope: Type.Optional(Type.String()),
    permissions: Type.Optional(Type.Array(Type.String()))
  },
  { additionalProperties: false }
);
var AccountPartOfGroupSchema = Type.Object(
  {
    account_id: Type.String(),
    group_id: Type.String()
  },
  { additionalProperties: false }
);
var RoleHasPermissionSchema = Type.Object(
  {
    role_id: Type.String(),
    permission_id: Type.String()
  },
  { additionalProperties: false }
);
var AccessGrantInputSchema = Type.Object(
  {
    grant_id: Type.String(),
    principal_type: Type.Optional(PrincipalTypeSchema),
    principal_account_id: Type.Optional(Type.String()),
    principal_group_id: Type.Optional(Type.String()),
    subject_type: Type.Optional(SubjectTypeSchema),
    role_id: Type.Optional(Type.String()),
    permission_id: Type.Optional(Type.String()),
    assigned_time: Type.Optional(Type.Unknown()),
    expiry_time: Type.Optional(Type.Unknown()),
    is_tenant_wide: Type.Optional(Type.Boolean({ default: true }))
  },
  { additionalProperties: false }
);
var AccessGrantSchema = Type.Object(
  {
    grant_id: Type.String(),
    principal_type: PrincipalTypeSchema,
    principal_account_id: Type.Optional(Type.String()),
    principal_group_id: Type.Optional(Type.String()),
    subject_type: SubjectTypeSchema,
    role_id: Type.Optional(Type.String()),
    permission_id: Type.Optional(Type.String()),
    assigned_time: Type.Optional(Type.String()),
    expiry_time: Type.Optional(Type.String()),
    is_tenant_wide: Type.Boolean({ default: true })
  },
  { additionalProperties: false }
);
function withIsoTime(value, fieldName) {
  if (value === void 0 || value === null) {
    return void 0;
  }
  return toIsoString(value, fieldName);
}
function applyAccountStatusMappings(input) {
  const mutable = { ...input };
  for (const [field, statusKey, statusValue] of POSITIVE_SSO_MFA_MAPPINGS) {
    if (mutable[field] === true) {
      mutable[statusKey] = statusValue;
    }
  }
  for (const [field, statusKey, statusValue] of NEGATIVE_SSO_MFA_MAPPINGS) {
    if (mutable[field] === false) {
      mutable[statusKey] = statusValue;
    }
  }
  for (const flag of ACCOUNT_STATUS_FLAGS) {
    delete mutable[flag];
  }
  return mutable;
}
function normalizeAccount(input) {
  const cleaned = clean(AccountInputSchema, input);
  const parsed = assertValid(AccountInputSchema, cleaned, "AccountInput");
  const mapped = applyAccountStatusMappings(parsed);
  const output = {
    ...mapped,
    username: mapped.username ?? mapped.usrname,
    last_login_time: withIsoTime(mapped.last_login_time, "last_login_time"),
    last_active_time: withIsoTime(mapped.last_active_time, "last_active_time"),
    sso_status: mapped.sso_status ?? "unknown",
    mfa_status: mapped.mfa_status ?? "unknown"
  };
  delete output.usrname;
  return assertValid(AccountSchema, output, "Account");
}
function derivePrincipalType(input) {
  const hasAccount = Boolean(input.principal_account_id);
  const hasGroup = Boolean(input.principal_group_id);
  if (hasAccount === hasGroup) {
    throw new Error("Exactly one of 'principal_account_id' or 'principal_group_id' must be set.");
  }
  const inferred = hasAccount ? "ACCOUNT" : "GROUP";
  if (input.principal_type && input.principal_type !== inferred) {
    throw new Error(
      `principal_type '${input.principal_type}' does not match principal identifier field.`
    );
  }
  return input.principal_type ?? inferred;
}
function deriveSubjectType(input) {
  const hasRole = Boolean(input.role_id);
  const hasPermission = Boolean(input.permission_id);
  if (hasRole === hasPermission) {
    throw new Error("Exactly one of 'role_id' or 'permission_id' must be set.");
  }
  const inferred = hasRole ? "ROLE" : "PERMISSION";
  if (input.subject_type && input.subject_type !== inferred) {
    throw new Error(
      `subject_type '${input.subject_type}' does not match subject identifier field.`
    );
  }
  return input.subject_type ?? inferred;
}
function normalizeAccessGrant(input) {
  const cleaned = clean(AccessGrantInputSchema, input);
  const parsed = assertValid(AccessGrantInputSchema, cleaned, "AccessGrantInput");
  const output = {
    ...parsed,
    principal_type: derivePrincipalType(parsed),
    subject_type: deriveSubjectType(parsed),
    assigned_time: withIsoTime(parsed.assigned_time, "assigned_time"),
    expiry_time: withIsoTime(parsed.expiry_time, "expiry_time"),
    is_tenant_wide: parsed.is_tenant_wide ?? true
  };
  return assertValid(AccessGrantSchema, output, "AccessGrant");
}
function normalizeBySchema(schema, record, context) {
  const cleaned = clean(schema, record);
  return assertValid(schema, cleaned, context);
}
function normalizeGraphRecord(model, record) {
  switch (model) {
    case "Accounts":
      return normalizeAccount(record);
    case "Groups":
      return normalizeBySchema(GroupSchema, record, "Group");
    case "Permissions":
      return normalizeBySchema(PermissionSchema, record, "Permission");
    case "Roles":
      return normalizeBySchema(RoleSchema, record, "Role");
    case "AccountPartOfGroup":
      return normalizeBySchema(AccountPartOfGroupSchema, record, "AccountPartOfGroup");
    case "RoleHasPermission":
      return normalizeBySchema(RoleHasPermissionSchema, record, "RoleHasPermission");
    case "AccessGrant":
      return normalizeAccessGrant(record);
  }
}
function normalizeGraphRecords(model, records) {
  return records.map((record) => normalizeGraphRecord(model, record));
}

// src/sdk/errors.ts
var ObsidianAPIError = class extends Error {
  statusCode;
  detail;
  responseText;
  constructor(options) {
    const messageDetail = typeof options.detail === "string" ? options.detail : "(non-string detail)";
    super(`Obsidian API Error ${options.statusCode}: ${messageDetail}`);
    this.name = "ObsidianAPIError";
    this.statusCode = options.statusCode;
    this.detail = options.detail;
    this.responseText = options.responseText;
  }
};

// src/sdk/client.ts
function normalizeApiServer(apiServer) {
  return apiServer.replace(/\/+$/u, "");
}
function buildQueryString(query) {
  if (!query) {
    return "";
  }
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(query)) {
    if (value !== void 0) {
      params.set(key, value);
    }
  }
  const qs = params.toString();
  return qs ? `?${qs}` : "";
}
function ensureFetch(fetchImpl) {
  if (fetchImpl) {
    return fetchImpl;
  }
  if (!globalThis.fetch) {
    throw new Error("No fetch implementation found");
  }
  return globalThis.fetch;
}
var LIST_POSTURE_DASHBOARDS_QUERY = `
  query ListPostureDashboards($platform: ID) {
    listPostureDashboards(platform: $platform) {
      id
      title
      description
      platform_id
      rules_count
    }
  }
`;
var GET_DASHBOARD_TENANTS_QUERY = `
  query getDashboardTenants($dashboardId: ID!) {
    getDashboardTenants(dashboardId: $dashboardId) {
      platform_id
      platform_name
      tenant_id
      tenant_uuid
      tenant_name
    }
  }
`;
var ObsidianSDKClient = class _ObsidianSDKClient {
  apiKey;
  apiServer;
  fetchImpl;
  logger;
  constructor(options) {
    this.apiKey = options.apiKey;
    this.apiServer = normalizeApiServer(options.apiServer);
    this.fetchImpl = ensureFetch(options.fetch);
    this.logger = options.logger ?? {};
    this.logger.info?.("Initialized ObsidianSDKClient", { apiServer: this.apiServer });
  }
  static fromEnv(options = {}) {
    const apiKey = options.apiKey ?? process.env.OBSIDIAN_API_TOKEN;
    const apiServer = options.apiServer ?? process.env.OBSIDIAN_API_SERVER;
    if (!apiKey) {
      throw new Error("Missing API key. Set OBSIDIAN_API_TOKEN or pass apiKey.");
    }
    if (!apiServer) {
      throw new Error("Missing API server. Set OBSIDIAN_API_SERVER or pass apiServer.");
    }
    return new _ObsidianSDKClient({
      apiKey,
      apiServer,
      fetch: options.fetch,
      logger: options.logger
    });
  }
  close() {
  }
  buildUrl(path, query) {
    const suffix = buildQueryString(query);
    return `${this.apiServer}${path}${suffix}`;
  }
  baseHeaders(extra) {
    return {
      Authorization: `Bearer ${this.apiKey}`,
      ...extra
    };
  }
  async parseErrorDetail(response) {
    const responseText = await response.text();
    try {
      const parsed = JSON.parse(responseText);
      return { detail: parsed.detail ?? responseText, text: responseText };
    } catch {
      return { detail: responseText, text: responseText };
    }
  }
  async raiseForStatus(response) {
    if (response.status < 400) {
      return;
    }
    const parsedError = await this.parseErrorDetail(response);
    this.logger.error?.("Obsidian API request failed", {
      status: response.status,
      detail: parsedError.detail
    });
    throw new ObsidianAPIError({
      statusCode: response.status,
      detail: parsedError.detail,
      responseText: parsedError.text
    });
  }
  async request(path, method, options) {
    const response = await this.fetchImpl(this.buildUrl(path, options.query), {
      method,
      body: options.body,
      signal: options.signal,
      headers: this.baseHeaders(options.headers)
    });
    await this.raiseForStatus(response);
    return response;
  }
  async requestJson(path, method, payload, options) {
    const body = payload === void 0 ? void 0 : JSON.stringify(payload);
    return this.request(path, method, {
      ...options,
      body,
      headers: { "Content-Type": "application/json" }
    });
  }
  async requestGzip(path, method, payload, signal) {
    const compressed = gzipSync(Buffer.from(JSON.stringify(payload), "utf8"));
    return this.request(path, method, {
      signal,
      body: new Uint8Array(compressed),
      headers: {
        "Content-Encoding": "gzip",
        "Content-Type": "application/json"
      }
    });
  }
  async requestGraphQL(options) {
    const response = await this.requestJson(
      "/v1/gql",
      "POST",
      {
        operationName: options.operationName,
        query: options.query,
        variables: options.variables ?? {}
      },
      { signal: options.signal }
    );
    const payload = await response.json();
    if (Array.isArray(payload.errors) && payload.errors.length > 0) {
      const messages = payload.errors.map((err) => err.message ?? "GraphQL error").join("; ");
      throw new Error(`GraphQL ${options.operationName} failed: ${messages}`);
    }
    if (payload.data === void 0) {
      throw new Error(`GraphQL ${options.operationName} returned no data`);
    }
    return payload.data;
  }
  async uploadActivities(options) {
    if (options.records.length === 0) {
      this.logger.warn?.("No activity records to upload");
      return 0;
    }
    const payload = {
      connection_id: String(options.connectionId),
      version: options.version ?? "1.0",
      data: options.records.map((record) => serializeActivity(record))
    };
    await this.requestGzip("/v1/custom-data/activities", "POST", payload, options.signal);
    return options.records.length;
  }
  async uploadObjects(options) {
    if (options.records.length === 0) {
      this.logger.warn?.("No object records to upload");
      return 0;
    }
    const payload = {
      schema_name: options.schemaName,
      connection_id: String(options.connectionId),
      data: options.records.map((record) => serializeObject(record))
    };
    await this.requestGzip("/v1/custom-data/objects", "PUT", payload, options.signal);
    return options.records.length;
  }
  async commitObjects(options) {
    await this.requestJson(
      "/v1/custom-data/commit",
      "PUT",
      { connection_id: String(options.connectionId) },
      { signal: options.signal }
    );
    return 1;
  }
  async uploadSchema(options) {
    const definition = toApiSchemaDefinition(normalizeSchemaDefinition(options.definition));
    await this.requestJson(
      "/v1/custom-data-service/schema",
      "PUT",
      {
        connection_id: String(options.connectionId),
        definition
      },
      { signal: options.signal }
    );
    return 1;
  }
  async editSchema(options) {
    try {
      await this.deleteSchema({
        connectionId: options.connectionId,
        schemaName: options.definition.name,
        signal: options.signal
      });
    } catch (error) {
      if (error instanceof ObsidianAPIError) {
        this.logger.warn?.("Unable to delete existing schema before edit", {
          schemaName: options.definition.name,
          statusCode: error.statusCode
        });
      } else {
        throw error;
      }
    }
    return this.uploadSchema(options);
  }
  async getSchemas(options = {}) {
    const response = await this.requestJson("/v1/custom-data-service/schema", "GET", void 0, {
      signal: options.signal,
      query: { connection_id: options.connectionId }
    });
    const payload = await response.json();
    if (!Array.isArray(payload.schemas)) {
      throw new Error("Invalid schema response: expected 'schemas' array");
    }
    return payload.schemas.map((schema) => normalizeSchemaDefinition(schema.definition));
  }
  async deleteSchema(options) {
    await this.requestJson(
      `/v1/custom-data-service/schema/${options.schemaName}`,
      "DELETE",
      void 0,
      {
        signal: options.signal,
        query: { connection_id: String(options.connectionId) }
      }
    );
    return 1;
  }
  async uploadRule(options) {
    await this.requestJson(
      "/v1/custom-data-service/rules",
      "PUT",
      {
        connection_id: String(options.connectionId),
        data: normalizeRuleDefinition(options.rule)
      },
      { signal: options.signal }
    );
    return 1;
  }
  async getRules(options) {
    const response = await this.requestJson("/v1/custom-data-service/rules", "GET", void 0, {
      signal: options.signal,
      query: { connection_id: String(options.connectionId) }
    });
    const payload = await response.json();
    if (!Array.isArray(payload.data)) {
      throw new Error("Invalid rule response: expected 'data' array");
    }
    return payload.data.map((rule) => normalizeRuleDefinition(rule));
  }
  async uploadSettings(options) {
    await this.requestJson(
      "/v1/custom-data/settings",
      "PUT",
      {
        connection_id: String(options.connectionId),
        data: options.settings.map((setting2) => normalizeSetting(setting2))
      },
      { signal: options.signal }
    );
    return 1;
  }
  async getPostureScores(options = {}) {
    const response = await this.requestJson(
      "/posture/v2_0/scores/list",
      "POST",
      options.request ?? {},
      {
        signal: options.signal
      }
    );
    return await response.json();
  }
  async getPosturePlatformScores(options = {}) {
    const response = await this.requestJson(
      "/posture/v1_1/scores/platforms/list",
      "POST",
      options.request ?? {},
      { signal: options.signal }
    );
    return await response.json();
  }
  async aggregatePostureRules(options = {}) {
    const response = await this.requestJson(
      "/posture/v1_0/rules/aggregate",
      "POST",
      options.request ?? {},
      { signal: options.signal }
    );
    return await response.json();
  }
  async aggregatePostureSettings(options = {}) {
    const response = await this.requestJson(
      "/posture/v1_1/settings/aggregate",
      "POST",
      options.request ?? {},
      { signal: options.signal }
    );
    return await response.json();
  }
  async getUpcomingPostureContent(options = {}) {
    const response = await this.requestJson(
      "/posture/v1_0/upcoming/list",
      "POST",
      options.request ?? {},
      {
        signal: options.signal
      }
    );
    return await response.json();
  }
  async getPostureSummary(options = {}) {
    const request = options.request ?? {};
    const signal = options.signal;
    const [scores, platformScores, ruleAggregate, settingAggregate, upcoming] = await Promise.all([
      this.getPostureScores({ request: request.scores, signal }),
      this.getPosturePlatformScores({ request: request.platformScores, signal }),
      this.aggregatePostureRules({ request: request.ruleAggregate, signal }),
      this.aggregatePostureSettings({ request: request.settingAggregate, signal }),
      this.getUpcomingPostureContent({ request: request.upcoming, signal })
    ]);
    return {
      scores,
      platformScores,
      ruleAggregate,
      settingAggregate,
      upcoming
    };
  }
  async listPostureDashboards(options = {}) {
    return this.requestGraphQL({
      operationName: "ListPostureDashboards",
      query: LIST_POSTURE_DASHBOARDS_QUERY,
      variables: options.request ?? {},
      signal: options.signal
    });
  }
  async getDashboardTenants(options) {
    return this.requestGraphQL({
      operationName: "getDashboardTenants",
      query: GET_DASHBOARD_TENANTS_QUERY,
      variables: { dashboardId: options.dashboardId },
      signal: options.signal
    });
  }
  async listPostureRules(options = {}) {
    const response = await this.requestJson(
      "/posture/v3_0/rules/list",
      "POST",
      options.request ?? {},
      { signal: options.signal }
    );
    return await response.json();
  }
  async getPostureRuleDetails(options) {
    const path = `/posture/v3_0/rules/info/${options.ruleId}/details/${options.tenantId}`;
    const response = await this.requestJson(path, "GET", void 0, {
      signal: options.signal
    });
    return await response.json();
  }
  async getPostureRuleTenants(options) {
    const response = await this.requestJson(
      `/posture/v3_0/rules/info/${options.ruleId}/tenants`,
      "GET",
      void 0,
      { signal: options.signal }
    );
    return await response.json();
  }
  async createPostureRule(options) {
    const response = await this.requestJson("/posture/v3_0/rules/", "POST", options.request, {
      signal: options.signal
    });
    return await response.json();
  }
  async updatePostureRuleDefinition(options) {
    const response = await this.requestJson(
      `/posture/v3_0/rules/info/${options.ruleId}/definition`,
      "POST",
      options.request,
      { signal: options.signal }
    );
    return await response.json();
  }
  async updatePostureRuleMetadata(options) {
    const response = await this.requestJson(
      `/posture/v3_0/rules/info/${options.ruleId}/metadata`,
      "POST",
      options.request,
      { signal: options.signal }
    );
    return await response.json();
  }
  async updatePostureRuleRiskLevel(options) {
    const response = await this.requestJson(
      `/posture/v3_0/rules/info/${options.ruleId}/risk_level`,
      "POST",
      options.request,
      { signal: options.signal }
    );
    return await response.json();
  }
  async retirePostureRule(options) {
    const response = await this.requestJson(
      `/posture/v3_0/rules/info/${options.ruleId}/retire`,
      "POST",
      void 0,
      { signal: options.signal }
    );
    return await response.json();
  }
  async getPostureDashboardFilters(options) {
    const response = await this.requestJson(
      `/posture/v1_1/dashboards/${options.dashboardId}/filters`,
      "GET",
      void 0,
      { signal: options.signal }
    );
    return await response.json();
  }
  async previewPostureDashboard(options) {
    const path = `/posture/v1_1/dashboards/${options.dashboardId}/preview/${options.tenantId}`;
    const response = await this.requestJson(path, "POST", options.request, {
      signal: options.signal
    });
    return await response.json();
  }
  async uploadGraph(options) {
    const data = normalizeGraphRecords(options.modelName, options.data);
    await this.requestJson(
      `/v1/custom-data/graph/${options.modelName}`,
      "PUT",
      {
        connection_id: String(options.connectionId),
        data
      },
      { signal: options.signal }
    );
    return 1;
  }
  async uploadAccounts(options) {
    return this.uploadGraph({
      modelName: "Accounts",
      connectionId: options.connectionId,
      data: options.accounts,
      signal: options.signal
    });
  }
  async uploadGroups(options) {
    return this.uploadGraph({
      modelName: "Groups",
      connectionId: options.connectionId,
      data: options.groups,
      signal: options.signal
    });
  }
  async uploadPermissions(options) {
    return this.uploadGraph({
      modelName: "Permissions",
      connectionId: options.connectionId,
      data: options.permissions,
      signal: options.signal
    });
  }
  async uploadRoles(options) {
    return this.uploadGraph({
      modelName: "Roles",
      connectionId: options.connectionId,
      data: options.roles,
      signal: options.signal
    });
  }
  async uploadAccountPartOfGroup(options) {
    return this.uploadGraph({
      modelName: "AccountPartOfGroup",
      connectionId: options.connectionId,
      data: options.relation,
      signal: options.signal
    });
  }
  async uploadRoleHasPermission(options) {
    return this.uploadGraph({
      modelName: "RoleHasPermission",
      connectionId: options.connectionId,
      data: options.relation,
      signal: options.signal
    });
  }
  async uploadAccessGrant(options) {
    return this.uploadGraph({
      modelName: "AccessGrant",
      connectionId: options.connectionId,
      data: options.relation,
      signal: options.signal
    });
  }
};

// src/workflows/posture-rules/create-rule.ts
import { homedir as homedir3 } from "node:os";
import { resolve as resolve3 } from "node:path";

// src/sdk/models/posture-rules.ts
var RuleFilterGroupInputSchema = Type.Object(
  {
    not: Type.Optional(Type.Boolean({ default: false })),
    not_: Type.Optional(Type.Boolean()),
    filter_items: Type.Optional(Type.Array(Type.Unknown(), { default: [] })),
    combinator: Type.Optional(Type.String({ default: "AND" }))
  },
  { additionalProperties: true }
);
var RuleFilterGroupSchema = Type.Object(
  {
    not: Type.Boolean({ default: false }),
    filter_items: Type.Array(Type.Unknown()),
    combinator: Type.String()
  },
  { additionalProperties: true }
);
var CreatePostureRuleRequestInputSchema = Type.Object(
  {
    rule_name: Type.String(),
    dashboard_id: Type.String(),
    risk_level: Type.String(),
    domain: Type.String(),
    filter_group: RuleFilterGroupInputSchema,
    description: Type.String(),
    description_short: Type.Optional(Type.String({ default: "" })),
    remediation_instructions: Type.Optional(Type.Union([Type.String(), Type.Null()])),
    comment: Type.String()
  },
  { additionalProperties: false }
);
var CreatePostureRuleRequestSchema = Type.Object(
  {
    rule_name: Type.String(),
    dashboard_id: Type.String(),
    risk_level: Type.String(),
    domain: Type.String(),
    filter_group: RuleFilterGroupSchema,
    description: Type.String(),
    description_short: Type.String(),
    remediation_instructions: Type.Optional(Type.Union([Type.String(), Type.Null()])),
    comment: Type.String()
  },
  { additionalProperties: false }
);
var UpdateRuleDefinitionRequestInputSchema = Type.Object(
  {
    definition: RuleFilterGroupInputSchema,
    comment: Type.Optional(Type.String())
  },
  { additionalProperties: false }
);
var UpdateRuleDefinitionRequestSchema = Type.Object(
  {
    definition: RuleFilterGroupSchema,
    comment: Type.Optional(Type.String())
  },
  { additionalProperties: false }
);
var UpdateRuleMetadataRequestSchema = Type.Object(
  {
    name: Type.Optional(Type.String()),
    description: Type.Optional(Type.String()),
    description_short: Type.Optional(Type.String()),
    remediation_instructions: Type.Optional(Type.String()),
    security_domain: Type.Optional(Type.String()),
    comment: Type.Optional(Type.String())
  },
  { additionalProperties: false }
);
var UpdateRuleRiskLevelRequestSchema = Type.Object(
  {
    risk_level: Type.String(),
    comment: Type.Optional(Type.String())
  },
  { additionalProperties: false }
);
function normalizeRuleFilterGroup(input) {
  const cleaned = clean(RuleFilterGroupInputSchema, input);
  const parsed = assertValid(RuleFilterGroupInputSchema, cleaned, "PostureRuleFilterGroupInput");
  const { not: directNot, not_: legacyNot, filter_items, combinator, ...rest } = parsed;
  return assertValid(
    RuleFilterGroupSchema,
    {
      ...rest,
      not: directNot ?? legacyNot ?? false,
      filter_items: filter_items ?? [],
      combinator: combinator ?? "AND"
    },
    "PostureRuleFilterGroup"
  );
}
function normalizeCreatePostureRuleRequest(input) {
  const cleaned = clean(CreatePostureRuleRequestInputSchema, input);
  const parsed = assertValid(
    CreatePostureRuleRequestInputSchema,
    cleaned,
    "CreatePostureRuleRequestInput"
  );
  return assertValid(
    CreatePostureRuleRequestSchema,
    {
      ...parsed,
      filter_group: normalizeRuleFilterGroup(parsed.filter_group),
      description_short: parsed.description_short ?? ""
    },
    "CreatePostureRuleRequest"
  );
}
function normalizeUpdatePostureRuleDefinitionRequest(input) {
  const cleaned = clean(UpdateRuleDefinitionRequestInputSchema, input);
  const parsed = assertValid(
    UpdateRuleDefinitionRequestInputSchema,
    cleaned,
    "UpdatePostureRuleDefinitionRequestInput"
  );
  return assertValid(
    UpdateRuleDefinitionRequestSchema,
    {
      ...parsed,
      definition: normalizeRuleFilterGroup(parsed.definition)
    },
    "UpdatePostureRuleDefinitionRequest"
  );
}
function validateMetadataRequest(request) {
  const fields = [
    request.name,
    request.description,
    request.description_short,
    request.remediation_instructions,
    request.security_domain,
    request.comment
  ];
  const hasField = fields.some((value) => value !== void 0);
  if (!hasField) {
    throw new Error("UpdatePostureRuleMetadataRequest requires at least one field");
  }
}
function normalizeUpdatePostureRuleMetadataRequest(input) {
  const cleaned = clean(UpdateRuleMetadataRequestSchema, input);
  const parsed = assertValid(
    UpdateRuleMetadataRequestSchema,
    cleaned,
    "UpdatePostureRuleMetadataRequest"
  );
  validateMetadataRequest(parsed);
  return parsed;
}
function normalizeUpdatePostureRuleRiskLevelRequest(input) {
  const cleaned = clean(UpdateRuleRiskLevelRequestSchema, input);
  return assertValid(
    UpdateRuleRiskLevelRequestSchema,
    cleaned,
    "UpdatePostureRuleRiskLevelRequest"
  );
}

// src/workflows/posture-rules/shared.ts
import { readFileSync } from "node:fs";
import { homedir as homedir2 } from "node:os";
import { resolve as resolve2 } from "node:path";
function isEnoentError(error) {
  return error instanceof Error && "code" in error && error.code === "ENOENT";
}
function readTextFile(path, context) {
  try {
    return readFileSync(path, "utf-8");
  } catch (error) {
    if (isEnoentError(error)) {
      throw new Error(`${context} not found at ${path}`);
    }
    const detail = error instanceof Error ? error.message : String(error);
    throw new Error(`Failed to read ${context} at ${path}: ${detail}`);
  }
}
function getArg(args, flag) {
  const index = args.indexOf(flag);
  return index >= 0 ? args[index + 1] : void 0;
}
function defaultAuthPath() {
  const home = homedir2();
  if (!home) {
    throw new Error("Unable to determine home directory. Pass --auth-path <path> explicitly.");
  }
  return resolve2(home, ".obsec/auth.json");
}
function loadAuthStore(path) {
  const apiToken = process.env.OBSIDIAN_API_TOKEN;
  const apiServer = process.env.OBSIDIAN_API_SERVER;
  if (apiToken || apiServer) {
    if (!apiToken || !apiServer) {
      throw new Error(
        "OBSIDIAN_API_TOKEN and OBSIDIAN_API_SERVER must both be set when using environment credentials."
      );
    }
    return {
      "obsidian-security": { access: apiToken, apiServer: apiServer.replace(/\/+$/u, "") }
    };
  }
  const raw = readTextFile(path, "auth file");
  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch (error) {
    const detail = error instanceof Error ? error.message : String(error);
    throw new Error(`Auth file at ${path} is invalid JSON: ${detail}. Run /login to refresh it.`);
  }
  const auth = parsed;
  const creds = auth["obsidian-security"];
  if (!creds || typeof creds.access !== "string") {
    throw new Error(
      `Auth file at ${path} is missing obsidian-security credentials. Run /login and select Obsidian Security.`
    );
  }
  return { "obsidian-security": { access: creds.access } };
}
function loadConnectionsStore(path) {
  const raw = readTextFile(path, "connections file");
  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch (error) {
    const detail = error instanceof Error ? error.message : String(error);
    throw new Error(`Connections file at ${path} is invalid JSON: ${detail}`);
  }
  const store = parsed;
  if (!Array.isArray(store.connectors)) {
    throw new Error(`Connections file at ${path} must contain { "connectors": [] }`);
  }
  return parsed;
}
function resolveConnection(args) {
  const store = loadConnectionsStore(args.connectionsPath);
  if (args.connectionId) {
    for (const connector2 of store.connectors) {
      const found = connector2.connections.find((item) => item.connectionId === args.connectionId);
      if (found) {
        return { apiBase: connector2.apiBase, connectionId: found.connectionId };
      }
    }
    throw new Error(`Connection ID ${args.connectionId} not found in ${args.connectionsPath}`);
  }
  const connector = resolveConnector(store.connectors, args.connectorName);
  if (connector.connections.length === 0) {
    throw new Error(`Connector "${connector.name}" has no connections`);
  }
  if (connector.connections.length > 1) {
    const values = connector.connections.map((item) => `${item.name} (${item.connectionId})`).join(", ");
    throw new Error(
      `Connector "${connector.name}" has multiple connections. Use --connection-id: ${values}`
    );
  }
  const selected = connector.connections[0];
  return { apiBase: connector.apiBase, connectionId: selected.connectionId };
}
function resolveConnector(connectors, connectorName) {
  if (connectorName) {
    const found = connectors.find((item) => {
      return item.name.toLowerCase() === connectorName.toLowerCase();
    });
    if (found) {
      return found;
    }
    const names2 = connectors.map((item) => item.name).join(", ");
    throw new Error(`Connector "${connectorName}" not found. Available: ${names2}`);
  }
  if (connectors.length === 0) {
    throw new Error("No connectors found. Create one first in ~/.obsec/connections.json.");
  }
  if (connectors.length === 1) {
    return connectors[0];
  }
  const names = connectors.map((item) => item.name).join(", ");
  throw new Error(`Multiple connectors found. Use --connector-name to select one: ${names}`);
}
function createClientContext(args) {
  const auth = loadAuthStore(args.authPath);
  const connection = resolveConnection(args);
  return {
    apiBase: auth["obsidian-security"].apiServer ?? connection.apiBase,
    apiKey: auth["obsidian-security"].access,
    connectionId: connection.connectionId
  };
}
function loadJsonFile(path, context) {
  const raw = readTextFile(path, context);
  try {
    return JSON.parse(raw);
  } catch (error) {
    const detail = error instanceof Error ? error.message : String(error);
    throw new Error(`${context} at ${path} is invalid JSON: ${detail}`);
  }
}

// src/workflows/posture-rules/workflow-runtime.ts
import { basename } from "node:path";
var SILENT_WORKFLOW_REPORTER = {
  log: () => {
  },
  warn: () => {
  }
};
var CONSOLE_WORKFLOW_REPORTER = {
  log: (message) => console.log(message),
  warn: (message) => console.warn(message)
};
function isDirectScriptEntry(scriptName) {
  const entryPath2 = process.argv[1];
  if (!entryPath2) {
    return false;
  }
  const entryName = basename(entryPath2);
  return entryName === `${scriptName}.ts` || entryName === `${scriptName}.cjs`;
}

// src/workflows/posture-rules/create-rule.ts
function hasFlag(args, flag) {
  return args.includes(flag);
}
function parsePositiveInt(value, fallback, flag) {
  if (!value) {
    return fallback;
  }
  const parsed = Number.parseInt(value, 10);
  if (Number.isNaN(parsed) || parsed <= 0) {
    throw new Error(`${flag} must be a positive integer`);
  }
  return parsed;
}
function parseArgs() {
  const args = process.argv.slice(2);
  const rulePath = getArg(args, "--rule");
  if (!rulePath) {
    throw new Error("--rule <path> is required");
  }
  const noPreview = hasFlag(args, "--no-preview");
  const previewOnly = hasFlag(args, "--preview-only");
  const previewTenant = getArg(args, "--preview-tenant");
  const previewAutoTenant = hasFlag(args, "--preview-auto-tenant") || !noPreview && !previewTenant;
  return {
    rulePath: resolve3(rulePath),
    dashboardId: getArg(args, "--dashboard-id"),
    dashboardTitle: getArg(args, "--dashboard-title"),
    platform: getArg(args, "--platform"),
    noPreview,
    previewTenant,
    previewAutoTenant,
    previewLimit: parsePositiveInt(getArg(args, "--preview-limit"), 20, "--preview-limit"),
    previewOnly,
    connectorName: getArg(args, "--connector-name"),
    connectionId: getArg(args, "--connection-id"),
    authPath: getArg(args, "--auth-path") ?? defaultAuthPath(),
    connectionsPath: getArg(args, "--connections-path") ?? resolve3(homedir3(), ".obsec/connections.json")
  };
}
function loadRulePayload(path) {
  const payload = loadJsonFile(path, "rule file");
  if (!isRecord(payload)) {
    throw new Error(`Rule file at ${path} must contain a JSON object`);
  }
  return payload;
}
function requireRulePayload(payload) {
  if (!isRecord(payload)) {
    throw new Error("rule must be a JSON object");
  }
  return payload;
}
function maybeString(value) {
  return typeof value === "string" && value.length > 0 ? value : void 0;
}
function isRecord(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
function requireString(value, label, path) {
  if (typeof value !== "string" || value.length === 0) {
    throw new Error(`${path}: ${label} must be a non-empty string`);
  }
  return value;
}
function formatChoices(values) {
  return values.length > 0 ? values.join(", ") : "<none>";
}
function buildFilterCatalog(filters) {
  if (filters.length === 0) {
    throw new Error("Dashboard has no filter definitions; cannot validate rule filters.");
  }
  const catalog = /* @__PURE__ */ new Map();
  for (const filter of filters) {
    catalog.set(filter.id, filter);
  }
  return catalog;
}
function findOperator(config, operatorId) {
  const found = config.operators.find((item) => item.id === operatorId);
  if (!found) {
    const options = formatChoices(config.operators.map((item) => item.id));
    throw new Error(
      `Unknown operator_id "${operatorId}" for filter_config_id "${config.id}". Allowed: ${options}`
    );
  }
  return found;
}
function normalizeValues(values, path) {
  if (!Array.isArray(values)) {
    throw new Error(`${path}: values must be an array`);
  }
  return values;
}
function validateCardinality(count, cardinality, path) {
  if (!cardinality) {
    return;
  }
  if (cardinality === "zero" && count !== 0) {
    throw new Error(`${path}: operator expects zero values, received ${count}`);
  }
  if (cardinality === "one" && count !== 1) {
    throw new Error(`${path}: operator expects exactly one value, received ${count}`);
  }
  if (cardinality === "two" && count !== 2) {
    throw new Error(`${path}: operator expects exactly two values, received ${count}`);
  }
  if (cardinality === "many" && count < 1) {
    throw new Error(`${path}: operator expects one or more values, received ${count}`);
  }
}
function validateTypedValues(values, valueType, path) {
  if (!valueType) {
    return;
  }
  const expected = valueType.toLowerCase();
  if (expected === "boolean" && values.some((item) => typeof item !== "boolean")) {
    throw new Error(`${path}: values must all be booleans`);
  }
  if (expected === "number" && values.some((item) => typeof item !== "number")) {
    throw new Error(`${path}: values must all be numbers`);
  }
  if (expected === "string" && values.some((item) => typeof item !== "string")) {
    throw new Error(`${path}: values must all be strings`);
  }
}
function validateFilterPredicate(item, catalog, path) {
  if (!isRecord(item)) {
    throw new Error(`${path}: filter item must be an object`);
  }
  const filterConfigId = requireString(item.filter_config_id, "filter_config_id", path);
  const config = catalog.get(filterConfigId);
  if (!config) {
    const options = formatChoices([...catalog.keys()]);
    throw new Error(`Unknown filter_config_id "${filterConfigId}" at ${path}. Allowed: ${options}`);
  }
  const operatorId = requireString(item.operator_id, "operator_id", path);
  const operator = findOperator(config, operatorId);
  const values = normalizeValues(item.values, path);
  validateCardinality(values.length, operator.cardinality, path);
  validateTypedValues(values, operator.value_type, path);
  if (typeof item.value_type === "string" && operator.value_type) {
    const actual = item.value_type.toLowerCase();
    const expected = operator.value_type.toLowerCase();
    if (actual !== expected) {
      throw new Error(`${path}: value_type "${item.value_type}" must be "${operator.value_type}"`);
    }
  }
  return 1;
}
function isNestedFilterGroup(item) {
  return isRecord(item) && Array.isArray(item.filter_items);
}
function validateFilterGroup(group, catalog, path) {
  const items = group.filter_items;
  if (!Array.isArray(items) || items.length === 0) {
    throw new Error(`${path}.filter_items cannot be empty`);
  }
  let predicateCount = 0;
  for (const [index, item] of items.entries()) {
    const itemPath = `${path}.filter_items[${index}]`;
    if (isNestedFilterGroup(item)) {
      if (isRecord(item) && ("filter_config_id" in item || "operator_id" in item)) {
        throw new Error(`${itemPath}: nested groups cannot include filter predicate keys`);
      }
      predicateCount += validateFilterGroup(item, catalog, itemPath);
      continue;
    }
    predicateCount += validateFilterPredicate(item, catalog, itemPath);
  }
  return predicateCount;
}
async function validateRulePreflight(client, request, reporter) {
  const filters = await client.getPostureDashboardFilters({
    dashboardId: request.dashboard_id
  });
  const catalog = buildFilterCatalog(filters);
  const predicateCount = validateFilterGroup(request.filter_group, catalog, "filter_group");
  if (predicateCount < 1) {
    throw new Error("Rule must contain at least one filter predicate.");
  }
  reporter.log(`Preflight validation passed (${predicateCount} predicates).`);
  return predicateCount;
}
function findDashboardByTitle(dashboards, title) {
  const needle = title.toLowerCase();
  const exact = dashboards.find((item) => item.title.toLowerCase() === needle);
  if (exact) {
    return exact;
  }
  return dashboards.find((item) => item.title.toLowerCase().includes(needle));
}
function summarizeDashboards(dashboards) {
  return dashboards.slice(0, 8).map((item) => `${item.title} (${item.id})`).join(", ");
}
async function resolveDashboardId(client, args, payload) {
  const existing = maybeString(payload.dashboard_id);
  if (args.dashboardId) {
    return args.dashboardId;
  }
  if (existing) {
    return existing;
  }
  const dashboards = (await client.listPostureDashboards({
    request: { platform: args.platform }
  })).listPostureDashboards;
  if (dashboards.length === 0) {
    throw new Error(`No posture dashboards found for platform ${args.platform ?? "<any>"}`);
  }
  if (args.dashboardTitle) {
    const found = findDashboardByTitle(dashboards, args.dashboardTitle);
    if (!found) {
      const options = summarizeDashboards(dashboards);
      throw new Error(`Dashboard "${args.dashboardTitle}" not found: ${options}`);
    }
    return found.id;
  }
  if (dashboards.length === 1) {
    return dashboards[0].id;
  }
  throw new Error(
    `Multiple dashboards found. Set dashboard_id in rule JSON, pass --dashboard-id, or --dashboard-title. Candidates: ${summarizeDashboards(dashboards)}`
  );
}
async function buildRuleRequest(client, args, payload) {
  const dashboardId = await resolveDashboardId(client, args, payload);
  return normalizeCreatePostureRuleRequest({ ...payload, dashboard_id: dashboardId });
}
async function resolvePreviewTenant(client, args, dashboardId, reporter) {
  if (args.previewTenant) {
    return args.previewTenant;
  }
  if (!args.previewAutoTenant) {
    return void 0;
  }
  const tenants = (await client.getDashboardTenants({ dashboardId })).getDashboardTenants;
  if (tenants.length === 0) {
    throw new Error(`No tenants available for dashboard ${dashboardId}`);
  }
  const selected = tenants[0];
  if (tenants.length > 1) {
    reporter.warn(
      `Multiple tenants found; using ${selected.tenant_name} (${selected.tenant_uuid}).`
    );
  }
  return selected.tenant_uuid;
}
async function maybePreviewRule(client, request, previewTenant, previewLimit, reporter) {
  if (!previewTenant) {
    return void 0;
  }
  const preview = await client.previewPostureDashboard({
    dashboardId: request.dashboard_id,
    tenantId: previewTenant,
    request: {
      filter_group: request.filter_group,
      limit: previewLimit
    }
  });
  const summary = {
    tenant_uuid: previewTenant,
    total: preview.total,
    has_more_results: preview.has_more_results,
    sample_count: preview.data?.length ?? 0
  };
  reporter.log("Preview complete:");
  reporter.log(
    JSON.stringify(
      {
        total: summary.total,
        has_more_results: summary.has_more_results,
        sample_count: summary.sample_count
      },
      null,
      2
    )
  );
  return summary;
}
async function executeCreateRule(client, options, reporter = SILENT_WORKFLOW_REPORTER) {
  const noPreview = options.noPreview ?? false;
  const previewOnly = options.previewOnly ?? false;
  const previewTenant = options.previewTenant;
  const previewAutoTenant = options.previewAutoTenant ?? (!noPreview && !previewTenant);
  const previewLimit = options.previewLimit ?? 20;
  if (!Number.isInteger(previewLimit) || previewLimit <= 0) {
    throw new Error("previewLimit must be a positive integer");
  }
  if (noPreview && previewOnly) {
    throw new Error("--no-preview cannot be combined with --preview-only");
  }
  if (noPreview && previewTenant) {
    throw new Error("--no-preview cannot be combined with --preview-tenant");
  }
  if (noPreview && previewAutoTenant) {
    throw new Error("--no-preview cannot be combined with --preview-auto-tenant");
  }
  const payload = requireRulePayload(options.rule);
  const request = await buildRuleRequest(client, options, payload);
  await validateRulePreflight(client, request, reporter);
  let preview;
  if (!noPreview) {
    const resolvedPreviewTenant = await resolvePreviewTenant(
      client,
      { previewAutoTenant, previewTenant },
      request.dashboard_id,
      reporter
    );
    if (!resolvedPreviewTenant) {
      throw new Error(
        "Preview is required by default. Pass --preview-tenant or --preview-auto-tenant, or use --no-preview to skip preview."
      );
    }
    preview = await maybePreviewRule(
      client,
      request,
      resolvedPreviewTenant,
      previewLimit,
      reporter
    );
  }
  if (previewOnly) {
    reporter.log("Preview-only mode enabled. Rule was not created.");
    return { request, preview, previewOnly: true };
  }
  const created = await client.createPostureRule({ request });
  reporter.log(JSON.stringify(created, null, 2));
  return { request, preview, previewOnly: false, created };
}
async function main() {
  const args = parseArgs();
  const context = createClientContext(args);
  const client = new ObsidianSDKClient({
    apiKey: context.apiKey,
    apiServer: context.apiBase
  });
  await executeCreateRule(
    client,
    {
      rule: loadRulePayload(args.rulePath),
      dashboardId: args.dashboardId,
      dashboardTitle: args.dashboardTitle,
      platform: args.platform,
      noPreview: args.noPreview,
      previewTenant: args.previewTenant,
      previewAutoTenant: args.previewAutoTenant,
      previewLimit: args.previewLimit,
      previewOnly: args.previewOnly
    },
    CONSOLE_WORKFLOW_REPORTER
  );
}
if (isDirectScriptEntry("create-rule")) {
  main().catch((error) => {
    console.error("Fatal:", error);
    process.exit(1);
  });
}

// src/workflows/posture-rules/create-rules-from-settings.ts
import { homedir as homedir4 } from "node:os";
import { resolve as resolve4 } from "node:path";
var SUPPORTED_SETTING_TYPES = /* @__PURE__ */ new Set(["bool", "number", "string", "string_array"]);
function hasFlag2(args, flag) {
  return args.includes(flag);
}
function parsePositiveInt2(value, fallback, flag) {
  if (!value) {
    return fallback;
  }
  const parsed = Number.parseInt(value, 10);
  if (Number.isNaN(parsed) || parsed <= 0) {
    throw new Error(`${flag} must be a positive integer`);
  }
  return parsed;
}
function parseArgs2() {
  const args = process.argv.slice(2);
  return {
    apply: hasFlag2(args, "--apply"),
    dashboardId: getArg(args, "--dashboard-id"),
    dashboardTitle: getArg(args, "--dashboard-title"),
    platform: getArg(args, "--platform"),
    tenantUuid: getArg(args, "--tenant-uuid"),
    riskLevel: getArg(args, "--risk-level") ?? "MEDIUM",
    domain: getArg(args, "--domain") ?? "3rd Party Applications",
    previewLimit: parsePositiveInt2(getArg(args, "--preview-limit"), 500, "--preview-limit"),
    connectorName: getArg(args, "--connector-name"),
    connectionId: getArg(args, "--connection-id"),
    authPath: getArg(args, "--auth-path") ?? defaultAuthPath(),
    connectionsPath: getArg(args, "--connections-path") ?? resolve4(homedir4(), ".obsec/connections.json")
  };
}
function maybeString2(value) {
  return typeof value === "string" && value.length > 0 ? value : void 0;
}
function summarizeDashboards2(dashboards) {
  return dashboards.slice(0, 8).map((item) => `${item.title} (${item.id})`).join(", ");
}
function findDashboardByTitle2(dashboards, title) {
  const needle = title.toLowerCase();
  const exact = dashboards.find((item) => item.title.toLowerCase() === needle);
  if (exact) {
    return exact;
  }
  return dashboards.find((item) => item.title.toLowerCase().includes(needle));
}
async function resolveDashboard(client, args) {
  const dashboards = (await client.listPostureDashboards({
    request: { platform: args.platform }
  })).listPostureDashboards;
  if (dashboards.length === 0) {
    throw new Error(`No posture dashboards found for platform ${args.platform ?? "<any>"}`);
  }
  if (args.dashboardId) {
    const found = dashboards.find((item) => item.id === args.dashboardId);
    if (!found) {
      const options2 = summarizeDashboards2(dashboards);
      throw new Error(`Dashboard ID ${args.dashboardId} not found. Candidates: ${options2}`);
    }
    return found;
  }
  if (args.dashboardTitle) {
    const found = findDashboardByTitle2(dashboards, args.dashboardTitle);
    if (!found) {
      const options2 = summarizeDashboards2(dashboards);
      throw new Error(`Dashboard ${args.dashboardTitle} not found. Candidates: ${options2}`);
    }
    return found;
  }
  if (dashboards.length === 1) {
    return dashboards[0];
  }
  const options = summarizeDashboards2(dashboards);
  throw new Error(
    "Multiple dashboards found. Pass --dashboard-id or --dashboard-title. " + options
  );
}
async function resolveTenantUuid(client, args, dashboardId) {
  if (args.tenantUuid) {
    return args.tenantUuid;
  }
  const response = await client.getDashboardTenants({ dashboardId });
  const tenants = response.getDashboardTenants;
  if (tenants.length === 0) {
    throw new Error(`No tenants available for dashboard ${dashboardId}`);
  }
  return tenants[0].tenant_uuid;
}
function parseCapturedSettings(data) {
  if (!data || data.length === 0) {
    throw new Error("No settings were returned from dashboard preview.");
  }
  const unique = /* @__PURE__ */ new Map();
  for (const row of data) {
    const id = maybeString2(row.id);
    const name = maybeString2(row.name);
    const type = maybeString2(row.type);
    if (!id || !name || !type || !SUPPORTED_SETTING_TYPES.has(type)) {
      continue;
    }
    if (!unique.has(id)) {
      unique.set(id, { id, name, type });
    }
  }
  if (unique.size === 0) {
    throw new Error(
      "No supported settings found. Expected types: bool, number, string, string_array."
    );
  }
  return [...unique.values()];
}
function requiresOperator(filters, filterId, operatorId) {
  const filter = filters.find((item) => item.id === filterId);
  if (!filter) {
    throw new Error(`Dashboard is missing required filter_config_id ${filterId}`);
  }
  const operator = filter.operators.find((item) => item.id === operatorId);
  if (!operator) {
    const options = filter.operators.map((item) => item.id).join(", ");
    throw new Error(
      `Dashboard filter ${filterId} missing operator ${operatorId}. Available: ${options}`
    );
  }
}
function ensureFilterSupport(filters) {
  requiresOperator(filters, "id", "=");
  requiresOperator(filters, "booltype", "false");
  requiresOperator(filters, "numbertype", "is_null");
  requiresOperator(filters, "strtype", "is_empty");
  requiresOperator(filters, "listtype", "is_empty");
}
function buildTypePredicate(type) {
  if (type === "bool") {
    return {
      filter_config_id: "booltype",
      operator_id: "false",
      value_type: "boolean",
      values: []
    };
  }
  if (type === "number") {
    return {
      filter_config_id: "numbertype",
      operator_id: "is_null",
      value_type: "number",
      values: []
    };
  }
  if (type === "string") {
    return {
      filter_config_id: "strtype",
      operator_id: "is_empty",
      value_type: "string",
      values: []
    };
  }
  if (type === "string_array") {
    return {
      filter_config_id: "listtype",
      operator_id: "is_empty",
      value_type: "string",
      values: []
    };
  }
  throw new Error(`Unsupported setting type: ${type}`);
}
function buildRuleName(setting2) {
  if (setting2.type === "bool") {
    return `${setting2.name} must be enabled`;
  }
  return `${setting2.name} must be configured`;
}
function buildRuleDescription(setting2) {
  if (setting2.type === "bool") {
    return `Flags tenants where ${setting2.name} is set to false.`;
  }
  return `Flags tenants where ${setting2.name} is unset or empty.`;
}
function buildRuleRequest2(setting2, dashboardId, args) {
  return normalizeCreatePostureRuleRequest({
    rule_name: buildRuleName(setting2),
    dashboard_id: dashboardId,
    risk_level: args.riskLevel,
    domain: args.domain,
    filter_group: {
      not: false,
      combinator: "AND",
      filter_items: [
        {
          filter_config_id: "id",
          operator_id: "=",
          value_type: "string",
          values: [setting2.id]
        },
        buildTypePredicate(setting2.type)
      ]
    },
    description: buildRuleDescription(setting2),
    description_short: setting2.type === "bool" ? `${setting2.name} is false` : `${setting2.name} unset`,
    remediation_instructions: `Review ${setting2.name} and update to a secure value.`,
    comment: `Auto-generated from captured setting ${setting2.id}`
  });
}
function isRecord2(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
function extractSettingIdsFromGroup(group) {
  const ids = /* @__PURE__ */ new Set();
  for (const item of group.filter_items) {
    if (isRecord2(item) && Array.isArray(item.filter_items)) {
      for (const child of extractSettingIdsFromGroup(item)) {
        ids.add(child);
      }
      continue;
    }
    if (!isRecord2(item) || item.filter_config_id !== "id" || item.operator_id !== "=") {
      continue;
    }
    if (!Array.isArray(item.values)) {
      continue;
    }
    for (const value of item.values) {
      if (typeof value === "string" && value.length > 0) {
        ids.add(value);
      }
    }
  }
  return ids;
}
async function collectCoveredSettingIds(client, platformId, tenantUuid) {
  const request = {
    limit: 500,
    filter: {
      platform_id: { EQ: platformId },
      tenant_uuid: { EQ: tenantUuid }
    }
  };
  const listed = await client.listPostureRules({ request });
  const covered = /* @__PURE__ */ new Set();
  for (const rule of listed.data) {
    const details = await client.getPostureRuleDetails({
      ruleId: rule.id,
      tenantId: tenantUuid
    });
    if (!details.definition) {
      continue;
    }
    for (const id of extractSettingIdsFromGroup(details.definition)) {
      covered.add(id);
    }
  }
  return covered;
}
async function previewRule(client, dashboardId, tenantUuid, rule, settingId) {
  const preview = await client.previewPostureDashboard({
    dashboardId,
    tenantId: tenantUuid,
    request: {
      filter_group: rule.filter_group,
      limit: 20
    }
  });
  const rows = preview.data ?? [];
  for (const row of rows) {
    if (row.id !== settingId) {
      throw new Error(
        `Preview for setting ${settingId} matched unexpected setting ${String(row.id)}`
      );
    }
  }
  return preview.total ?? rows.length;
}
async function loadCapturedSettings(client, dashboardId, tenantUuid, limit) {
  const preview = await client.previewPostureDashboard({
    dashboardId,
    tenantId: tenantUuid,
    request: {
      filter_group: { not: false, combinator: "AND", filter_items: [] },
      limit
    }
  });
  return parseCapturedSettings(preview.data);
}
async function executeRulesFromSettings(client, options, reporter = SILENT_WORKFLOW_REPORTER) {
  const args = {
    ...options,
    apply: options.apply ?? false,
    riskLevel: options.riskLevel ?? "MEDIUM",
    domain: options.domain ?? "3rd Party Applications",
    previewLimit: options.previewLimit ?? 500
  };
  if (!Number.isInteger(args.previewLimit) || args.previewLimit <= 0) {
    throw new Error("previewLimit must be a positive integer");
  }
  const dashboard = await resolveDashboard(client, args);
  const tenantUuid = await resolveTenantUuid(client, args, dashboard.id);
  const filters = await client.getPostureDashboardFilters({ dashboardId: dashboard.id });
  ensureFilterSupport(filters);
  const settings = await loadCapturedSettings(client, dashboard.id, tenantUuid, args.previewLimit);
  const covered = await collectCoveredSettingIds(client, dashboard.platform_id, tenantUuid);
  const candidates = settings.filter((setting2) => !covered.has(setting2.id));
  if (candidates.length === 0) {
    reporter.log("No new settings need rules. Existing rules already cover all captured settings.");
    return {
      applied: args.apply,
      candidate_count: 0,
      captured_setting_count: settings.length,
      dashboard_id: dashboard.id,
      items: [],
      tenant_uuid: tenantUuid
    };
  }
  reporter.log(
    `Found ${settings.length} captured settings. Creating ${candidates.length} candidates.`
  );
  const items = [];
  for (const setting2 of candidates) {
    const request = buildRuleRequest2(setting2, dashboard.id, args);
    const previewTotal = await previewRule(client, dashboard.id, tenantUuid, request, setting2.id);
    if (!args.apply) {
      const item2 = {
        action: "dry-run",
        setting_id: setting2.id,
        setting_name: setting2.name,
        preview_total: previewTotal,
        rule_name: request.rule_name
      };
      items.push(item2);
      reporter.log(JSON.stringify(item2));
      continue;
    }
    const created = await client.createPostureRule({ request });
    const createdRule = created.data[0];
    const item = {
      action: "created",
      setting_id: setting2.id,
      setting_name: setting2.name,
      preview_total: previewTotal,
      rule_id: createdRule?.id,
      rule_name: createdRule?.name
    };
    items.push(item);
    reporter.log(JSON.stringify(item));
  }
  if (!args.apply) {
    reporter.log("Dry-run complete. Re-run with --apply to create rules.");
  }
  return {
    applied: args.apply,
    candidate_count: candidates.length,
    captured_setting_count: settings.length,
    dashboard_id: dashboard.id,
    items,
    tenant_uuid: tenantUuid
  };
}
async function main2() {
  const args = parseArgs2();
  const context = createClientContext(args);
  const client = new ObsidianSDKClient({
    apiKey: context.apiKey,
    apiServer: context.apiBase
  });
  await executeRulesFromSettings(client, args, CONSOLE_WORKFLOW_REPORTER);
}
if (isDirectScriptEntry("create-rules-from-settings")) {
  main2().catch((error) => {
    console.error("Fatal:", error);
    process.exit(1);
  });
}

// src/workflows/posture-rules/delete-rule.ts
import { homedir as homedir5 } from "node:os";
import { resolve as resolve5 } from "node:path";
function parseArgs3() {
  const args = process.argv.slice(2);
  const ruleId = getArg(args, "--rule-id");
  if (!ruleId) {
    throw new Error("--rule-id <id> is required");
  }
  return {
    ruleId,
    connectorName: getArg(args, "--connector-name"),
    connectionId: getArg(args, "--connection-id"),
    authPath: getArg(args, "--auth-path") ?? defaultAuthPath(),
    connectionsPath: getArg(args, "--connections-path") ?? resolve5(homedir5(), ".obsec/connections.json")
  };
}
async function executeRetireRule(client, options, reporter = SILENT_WORKFLOW_REPORTER) {
  const retired = await client.retirePostureRule({ ruleId: options.ruleId });
  const result = { rule_id: options.ruleId, retired };
  reporter.log(JSON.stringify(result, null, 2));
  return result;
}
async function main3() {
  const args = parseArgs3();
  const context = createClientContext(args);
  const client = new ObsidianSDKClient({
    apiKey: context.apiKey,
    apiServer: context.apiBase
  });
  await executeRetireRule(client, args, CONSOLE_WORKFLOW_REPORTER);
}
if (isDirectScriptEntry("delete-rule")) {
  main3().catch((error) => {
    console.error("Fatal:", error);
    process.exit(1);
  });
}

// src/workflows/posture-rules/list-rules.ts
import { homedir as homedir6 } from "node:os";
import { resolve as resolve6 } from "node:path";
function parseIntArg(value, flag) {
  if (!value) {
    return void 0;
  }
  const parsed = Number.parseInt(value, 10);
  if (Number.isNaN(parsed) || parsed <= 0) {
    throw new Error(`${flag} must be a positive integer`);
  }
  return parsed;
}
function parseArgs4() {
  const args = process.argv.slice(2);
  return {
    platform: getArg(args, "--platform"),
    tenantId: getArg(args, "--tenant-id"),
    tenantUuid: getArg(args, "--tenant-uuid"),
    riskLevel: getArg(args, "--risk-level"),
    state: getArg(args, "--state"),
    releaseLabel: getArg(args, "--release-label"),
    search: getArg(args, "--search"),
    cursor: getArg(args, "--cursor"),
    limit: parseIntArg(getArg(args, "--limit"), "--limit"),
    connectorName: getArg(args, "--connector-name"),
    connectionId: getArg(args, "--connection-id"),
    authPath: getArg(args, "--auth-path") ?? defaultAuthPath(),
    connectionsPath: getArg(args, "--connections-path") ?? resolve6(homedir6(), ".obsec/connections.json")
  };
}
function maybeStringFilter(value) {
  return value ? { EQ: value } : void 0;
}
function buildFilter(args) {
  const filter = {
    platform_id: maybeStringFilter(args.platform),
    tenant_id: maybeStringFilter(args.tenantId),
    tenant_uuid: maybeStringFilter(args.tenantUuid),
    risk_level: maybeStringFilter(args.riskLevel),
    state: maybeStringFilter(args.state),
    release_label: maybeStringFilter(args.releaseLabel),
    search: args.search ? { LIKE: `%${args.search}%` } : void 0
  };
  const hasAnyFilter = Object.values(filter).some((value) => value !== void 0);
  return hasAnyFilter ? filter : void 0;
}
async function executeListRules(client, args, reporter = SILENT_WORKFLOW_REPORTER) {
  const request = {
    limit: args.limit,
    cursor: args.cursor,
    filter: buildFilter(args)
  };
  const response = await client.listPostureRules({ request });
  reporter.log(JSON.stringify(response, null, 2));
  return response;
}
async function main4() {
  const args = parseArgs4();
  const context = createClientContext(args);
  const client = new ObsidianSDKClient({
    apiKey: context.apiKey,
    apiServer: context.apiBase
  });
  await executeListRules(client, args, CONSOLE_WORKFLOW_REPORTER);
}
if (isDirectScriptEntry("list-rules")) {
  main4().catch((error) => {
    console.error("Fatal:", error);
    process.exit(1);
  });
}

// src/workflows/posture-rules/update-rule.ts
import { homedir as homedir7 } from "node:os";
import { resolve as resolve7 } from "node:path";
function parseArgs5() {
  const args = process.argv.slice(2);
  const ruleId = getArg(args, "--rule-id");
  if (!ruleId) {
    throw new Error("--rule-id <id> is required");
  }
  const parsed = {
    ruleId,
    definitionPath: getArg(args, "--definition"),
    metadataPath: getArg(args, "--metadata"),
    riskLevel: getArg(args, "--risk-level"),
    riskComment: getArg(args, "--risk-comment") ?? getArg(args, "--comment"),
    connectorName: getArg(args, "--connector-name"),
    connectionId: getArg(args, "--connection-id"),
    authPath: getArg(args, "--auth-path") ?? defaultAuthPath(),
    connectionsPath: getArg(args, "--connections-path") ?? resolve7(homedir7(), ".obsec/connections.json")
  };
  if (!parsed.definitionPath && !parsed.metadataPath && !parsed.riskLevel) {
    throw new Error("Provide at least one update: --definition, --metadata, or --risk-level");
  }
  return parsed;
}
function normalizeDefinitionRequest(payload) {
  if (typeof payload === "object" && payload !== null && "definition" in payload) {
    return normalizeUpdatePostureRuleDefinitionRequest(payload);
  }
  return normalizeUpdatePostureRuleDefinitionRequest({ definition: payload });
}
async function executeUpdateRule(client, options, reporter = SILENT_WORKFLOW_REPORTER) {
  if (options.definition === void 0 && options.metadata === void 0 && options.riskLevel === void 0) {
    throw new Error("Provide at least one update: definition, metadata, or riskLevel");
  }
  const results = {};
  if (options.definition !== void 0) {
    const request = normalizeDefinitionRequest(options.definition);
    results.definition = await client.updatePostureRuleDefinition({
      ruleId: options.ruleId,
      request
    });
  }
  if (options.metadata !== void 0) {
    const request = normalizeUpdatePostureRuleMetadataRequest(options.metadata);
    results.metadata = await client.updatePostureRuleMetadata({
      ruleId: options.ruleId,
      request
    });
  }
  if (options.riskLevel !== void 0) {
    const request = normalizeUpdatePostureRuleRiskLevelRequest({
      risk_level: options.riskLevel,
      comment: options.riskComment
    });
    results.risk_level = await client.updatePostureRuleRiskLevel({
      ruleId: options.ruleId,
      request
    });
  }
  reporter.log(JSON.stringify(results, null, 2));
  return results;
}
async function main5() {
  const args = parseArgs5();
  const context = createClientContext(args);
  const client = new ObsidianSDKClient({
    apiKey: context.apiKey,
    apiServer: context.apiBase
  });
  await executeUpdateRule(
    client,
    {
      ruleId: args.ruleId,
      definition: args.definitionPath ? loadJsonFile(resolve7(args.definitionPath), "definition file") : void 0,
      metadata: args.metadataPath ? loadJsonFile(resolve7(args.metadataPath), "metadata file") : void 0,
      riskLevel: args.riskLevel,
      riskComment: args.riskComment
    },
    CONSOLE_WORKFLOW_REPORTER
  );
}
if (isDirectScriptEntry("update-rule")) {
  main5().catch((error) => {
    console.error("Fatal:", error);
    process.exit(1);
  });
}

// src/workflows/push-posture/create-connection.ts
import { homedir as homedir9 } from "node:os";
import { resolve as resolve9 } from "node:path";

// src/workflows/push-posture/shared-connections.ts
import { readFileSync as readFileSync2, writeFileSync, mkdirSync } from "node:fs";
import { homedir as homedir8 } from "node:os";
import { dirname, resolve as resolve8 } from "node:path";
var CONNECTION_MANAGEMENT_PREFIX = "/v1/connection-management";
function isEnoentError2(error) {
  return error instanceof Error && "code" in error && error.code === "ENOENT";
}
function getArg2(args, flag) {
  const index = args.indexOf(flag);
  return index >= 0 ? args[index + 1] : void 0;
}
function defaultAuthPath2() {
  const home = homedir8();
  if (!home) {
    throw new Error("Unable to determine home directory. Pass --auth-path <path> explicitly.");
  }
  return resolve8(home, ".obsec/auth.json");
}
function requestFailureDetail(error) {
  return error instanceof Error ? error.message : String(error);
}
function readOptionalTextFile(path, context) {
  try {
    return readFileSync2(path, "utf-8");
  } catch (error) {
    if (isEnoentError2(error)) return void 0;
    throw new Error(`Failed to read ${context} at ${path}: ${requestFailureDetail(error)}`);
  }
}
function readTextFile2(path, context, missingMessage) {
  const raw = readOptionalTextFile(path, context);
  if (raw === void 0) {
    throw new Error(missingMessage ?? `${context} not found at ${path}`);
  }
  return raw;
}
function loadAuthStore2(path, options = {}) {
  const apiToken = process.env.OBSIDIAN_API_TOKEN;
  const apiServer = process.env.OBSIDIAN_API_SERVER;
  if (apiToken || apiServer) {
    if (!apiToken || !apiServer) {
      throw new Error(
        "OBSIDIAN_API_TOKEN and OBSIDIAN_API_SERVER must both be set when using environment credentials."
      );
    }
    return { access: apiToken, apiServer: apiServer.replace(/\/+$/u, "") };
  }
  const raw = readTextFile2(
    path,
    "auth file",
    `Auth file not found at ${path}. Run /login and select Obsidian Security.`
  );
  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch (error) {
    throw new Error(
      `Auth file at ${path} is invalid JSON: ${requestFailureDetail(error)}. Run /login to refresh it.`
    );
  }
  const auth = parsed;
  const creds = auth["obsidian-security"];
  if (!creds || typeof creds.access !== "string") {
    throw new Error(
      `Auth file at ${path} is missing obsidian-security credentials. Run /login and select Obsidian Security.`
    );
  }
  if (options.requireOrgDomain && typeof creds.orgDomain !== "string") {
    throw new Error(
      `Auth file at ${path} is missing obsidian-security orgDomain. Run /login and select Obsidian Security.`
    );
  }
  return {
    access: creds.access,
    orgDomain: typeof creds.orgDomain === "string" ? creds.orgDomain : void 0
  };
}
function loadConnectionsStore2(path, options = {}) {
  const raw = readOptionalTextFile(path, "connections file");
  if (raw === void 0) {
    if (options.missingFile === "empty") return { connectors: [] };
    throw new Error(options.missingMessage ?? `Connections file not found at ${path}.`);
  }
  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch (error) {
    throw new Error(`Connections file at ${path} is invalid JSON: ${requestFailureDetail(error)}`);
  }
  const store = parsed;
  if (!Array.isArray(store.connectors)) {
    throw new Error(`Connections file at ${path} must contain { "connectors": [] }`);
  }
  return parsed;
}
function saveConnectionsStore(path, store) {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, JSON.stringify(store, null, 2) + "\n");
}
function normalizeName2(value) {
  return value.trim().toLowerCase();
}
function connectorMatches(connector, name, apiBase) {
  return normalizeName2(connector.name) === normalizeName2(name) && connector.apiBase === apiBase;
}
function groupKey(connector) {
  return `${connector.apiBase}	${normalizeName2(connector.name)}`;
}
function preferConnector(current, candidate) {
  if (!current) return candidate;
  if (!current.connectorId && candidate.connectorId) return candidate;
  if (!current.createdAt && candidate.createdAt) return candidate;
  return current;
}
function preferConnection(current, candidate) {
  if (!current) return candidate;
  if (!current.name && candidate.name) return candidate;
  if (!current.tenantName && candidate.tenantName) return candidate;
  return current;
}
function dedupeConnections(connections) {
  const connectionsById = /* @__PURE__ */ new Map();
  let duplicates = 0;
  for (const connection of connections) {
    const existing = connectionsById.get(connection.connectionId);
    if (existing) {
      connectionsById.set(connection.connectionId, preferConnection(existing, connection));
      duplicates += 1;
      continue;
    }
    connectionsById.set(connection.connectionId, connection);
  }
  return { connections: [...connectionsById.values()], duplicates };
}
function dedupeGroupConnections(group) {
  return dedupeConnections(group.flatMap((connector) => connector.connections ?? []));
}
function repairStore(store) {
  const groups = /* @__PURE__ */ new Map();
  for (const connector of store.connectors) {
    const key = groupKey(connector);
    const group = groups.get(key);
    if (group) {
      group.push(connector);
    } else {
      groups.set(key, [connector]);
    }
  }
  const repaired = [];
  const report = {
    connectorGroupsMerged: [],
    duplicateConnectionsRemoved: 0
  };
  for (const group of groups.values()) {
    let primary;
    for (const connector of group) {
      primary = preferConnector(primary, connector);
    }
    if (!primary) continue;
    const { connections, duplicates } = dedupeGroupConnections(group);
    repaired.push({
      connectorId: primary.connectorId,
      name: primary.name,
      apiBase: primary.apiBase,
      createdAt: primary.createdAt ?? (/* @__PURE__ */ new Date()).toISOString(),
      connections
    });
    if (group.length > 1 || duplicates > 0) {
      report.connectorGroupsMerged.push({
        name: primary.name,
        apiBase: primary.apiBase,
        entries: group.length,
        connectionDuplicates: duplicates
      });
    }
    report.duplicateConnectionsRemoved += duplicates;
  }
  return { store: { connectors: repaired }, report };
}
function upsertStoredConnection(store, entry, opts) {
  const matched = opts.merge ? store.connectors.filter((connector) => connectorMatches(connector, entry.name, entry.apiBase)) : [];
  if (matched.length === 0) {
    store.connectors.push({
      connectorId: entry.connectorId,
      name: entry.name,
      apiBase: entry.apiBase,
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      connections: [entry.connection]
    });
    return store;
  }
  let primary = matched[0];
  for (const connector of matched) {
    primary = preferConnector(primary, connector);
  }
  const kept = matched.flatMap((connector) => connector.connections ?? []).filter((connection) => connection.connectionId !== opts.dropConnectionId);
  primary.connectorId = entry.connectorId;
  primary.name = entry.name;
  primary.connections = dedupeConnections([...kept, entry.connection]).connections;
  const stale = new Set(matched.filter((connector) => connector !== primary));
  store.connectors = store.connectors.filter((connector) => !stale.has(connector));
  return store;
}
async function createRemoteConnection(apiBase, token, request) {
  const response = await apiRequest(
    `${apiBase}${CONNECTION_MANAGEMENT_PREFIX}/new`,
    token,
    "POST",
    {
      name: request.name,
      connector_definition_id: request.connectorId,
      credentials: { tenant_name: request.tenantName },
      description: request.description
    }
  );
  return response.connection_id;
}
async function apiRequest(url, token, method, body) {
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json"
  };
  const request = method === "POST" ? { method, headers, body: body !== void 0 ? JSON.stringify(body) : void 0 } : { method, headers };
  const res = await fetch(url, request);
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`HTTP ${res.status}: ${text}`);
  }
  return await res.json();
}
function validationFailureMessage(resolved, operation, status, detail) {
  const nextAction = status === 401 || status === 403 ? "Run /login and select Obsidian Security, then retry." : "Retry after confirming the API base and Obsidian connection-management service are reachable.";
  return [
    `Failed to validate Obsidian connection ${operation}.`,
    `Connector: ${resolved.connectorName}`,
    `Connection ID: ${resolved.connectionId}`,
    `API base: ${resolved.apiBase}`,
    `Status: HTTP ${status}`,
    `Detail: ${detail || "(empty response)"}`,
    `Next action: ${nextAction}`
  ].join("\n");
}
async function validateRemoteConnection(resolved, token, operation) {
  const url = `${resolved.apiBase}${CONNECTION_MANAGEMENT_PREFIX}/connection?connection_id=${encodeURIComponent(resolved.connectionId)}`;
  let res;
  try {
    res = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    throw new Error(
      [
        `Failed to validate Obsidian connection ${operation}.`,
        `Connector: ${resolved.connectorName}`,
        `Connection ID: ${resolved.connectionId}`,
        `API base: ${resolved.apiBase}`,
        `Detail: ${requestFailureDetail(error)}`,
        "Next action: confirm network access to the API base and retry."
      ].join("\n")
    );
  }
  const text = await res.text().catch(() => "");
  if (res.status === 404) {
    return { exists: false, reason: text || "HTTP 404" };
  }
  if (!res.ok) {
    throw new Error(validationFailureMessage(resolved, operation, res.status, text));
  }
  let body;
  try {
    body = text ? JSON.parse(text) : {};
  } catch (error) {
    return {
      exists: false,
      reason: `validation response was not valid JSON: ${requestFailureDetail(error)}`
    };
  }
  const connections = body.connections;
  if (!Array.isArray(connections)) {
    return { exists: false, reason: "validation response did not include connections[]" };
  }
  const connection = connections.find((candidate) => {
    return typeof candidate === "object" && candidate !== null && candidate.connection_id === resolved.connectionId;
  });
  if (!connection) {
    return {
      exists: false,
      reason: "validation response did not include the selected connection ID"
    };
  }
  if (connection.status === "deleted") {
    return { exists: false, reason: "remote connection status is deleted" };
  }
  return { exists: true, connection };
}
function resolveStoredConnection(opts) {
  const store = loadConnectionsStore2(opts.connectionsPath, {
    missingMessage: `Connections file not found at ${opts.connectionsPath}. Run create-connection.ts first or pass --connections-path.`
  });
  if (opts.connectionId) {
    for (const connector2 of store.connectors) {
      const connection = connector2.connections.find(
        (item) => item.connectionId === opts.connectionId
      );
      if (connection) {
        return {
          apiBase: connector2.apiBase,
          connectorId: connector2.connectorId,
          connectorName: connector2.name,
          connectionId: connection.connectionId,
          connectionName: connection.name,
          tenantName: connection.tenantName ?? connection.name
        };
      }
    }
    throw new Error(
      [
        `Connection ID ${opts.connectionId} not found in ${opts.connectionsPath}.`,
        "Next action: run create-connection.ts or pass a connection ID already present in connections.json."
      ].join("\n")
    );
  }
  const connector = resolveStoredConnector(store.connectors, opts.connectorName);
  if (connector.connections.length === 0) {
    throw new Error(`Connector "${connector.name}" has no connections`);
  }
  if (connector.connections.length > 1) {
    const options = connector.connections.map((connection) => `${connection.name} (${connection.connectionId})`).join(", ");
    throw new Error(
      `Connector "${connector.name}" has multiple connections. Use --connection-id to select one: ${options}`
    );
  }
  const selected = connector.connections[0];
  return {
    apiBase: connector.apiBase,
    connectorId: connector.connectorId,
    connectorName: connector.name,
    connectionId: selected.connectionId,
    connectionName: selected.name,
    tenantName: selected.tenantName ?? selected.name
  };
}
function resolveStoredConnector(connectors, connectorName) {
  if (connectorName) {
    const connector = connectors.find((item) => {
      return normalizeName2(item.name) === normalizeName2(connectorName);
    });
    if (connector) return connector;
    const names2 = connectors.map((item) => item.name).join(", ");
    throw new Error(`Connector "${connectorName}" not found. Available: ${names2}`);
  }
  if (connectors.length === 1) {
    return connectors[0];
  }
  const names = connectors.map((item) => item.name).join(", ");
  throw new Error(`Multiple connectors found. Use --connector-name to select one: ${names}`);
}

// src/workflows/push-posture/workflow-runtime.ts
import { basename as basename2 } from "node:path";
var SILENT_WORKFLOW_REPORTER2 = {
  log: () => {
  },
  warn: () => {
  }
};
var CONSOLE_WORKFLOW_REPORTER2 = {
  log: (message) => console.log(message),
  warn: (message) => console.warn(message)
};
function isDirectScriptEntry2(scriptName) {
  const entryPath2 = process.argv[1];
  if (!entryPath2) return false;
  const entryName = basename2(entryPath2);
  return entryName === `${scriptName}.ts` || entryName === `${scriptName}.cjs`;
}

// src/workflows/push-posture/create-connection.ts
var PLACEHOLDER_LOGO_URL = "https://d2epmozq7iqh7b.cloudfront.net/assets/placeholder-logo.jpg";
var LOGO_VALIDATION_TIMEOUT_MS = 5e3;
function parseArgs6() {
  const args = process.argv.slice(2);
  const name = getArg2(args, "--name");
  if (!name) {
    console.error("Error: --name is required");
    process.exit(1);
  }
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return {
    name,
    category: getArg2(args, "--category") ?? "Business Applications",
    description: getArg2(args, "--description") ?? `${name} integration`,
    logo: getArg2(args, "--logo") ?? "",
    tenant: getArg2(args, "--tenant") ?? slug,
    connection: getArg2(args, "--connection") ?? name,
    forceNew: args.includes("--force-new"),
    authPath: getArg2(args, "--auth-path") ?? defaultAuthPath2(),
    connectionsPath: getArg2(args, "--connections-path") ?? resolve9(homedir9(), ".obsec/connections.json")
  };
}
function operationFailureMessage(failure) {
  return [
    failure.heading,
    `Connector: ${failure.connectorName}`,
    `Connection ID: ${failure.connectionId ?? "(not created yet)"}`,
    `API base: ${failure.apiBase}`,
    `Detail: ${failure.detail}`,
    `Next action: ${failure.nextAction}`
  ].join("\n");
}
function connectionMatches(connection, name, tenantName) {
  if (normalizeName2(connection.name) !== normalizeName2(name)) return false;
  if (!connection.tenantName) return true;
  return normalizeName2(connection.tenantName) === normalizeName2(tenantName);
}
function findLocalConnector(store, name, apiBase) {
  return store.connectors.find((connector) => connectorMatches(connector, name, apiBase));
}
function findLocalConnection(store, connectorName, apiBase, connectionName, tenantName) {
  for (const connector of store.connectors) {
    if (!connectorMatches(connector, connectorName, apiBase)) continue;
    const connection = connector.connections.find((candidate) => {
      return connectionMatches(candidate, connectionName, tenantName);
    });
    if (connection) return { connector, connection };
  }
  return void 0;
}
function inferApiBase(orgDomain) {
  const labels = orgDomain.split(".");
  if (labels[0] === "api") return `https://${orgDomain}`;
  if (labels.length >= 3) {
    return `https://api.${labels.slice(1).join(".")}`;
  }
  return `https://api.${orgDomain}`;
}
async function findRemoteConnectorByName(apiBase, token, name) {
  const resp = await apiRequest(
    `${apiBase}${CONNECTION_MANAGEMENT_PREFIX}/supported_connectors`,
    token,
    "GET"
  );
  const connectors = Array.isArray(resp.supported_connectors) ? resp.supported_connectors : [];
  return connectors.find((connector) => {
    return typeof connector.id === "string" && typeof connector.name === "string" && connector.id.startsWith("custom-") && normalizeName2(connector.name) === normalizeName2(name);
  });
}
function isHttpUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}
async function resolveLogoUrl(input, reporter) {
  const logo = input.trim() || PLACEHOLDER_LOGO_URL;
  if (logo === PLACEHOLDER_LOGO_URL) return logo;
  if (!isHttpUrl(logo)) {
    reporter.warn(`Warning: logo URL is not HTTP(S): ${logo}`);
    return PLACEHOLDER_LOGO_URL;
  }
  try {
    const res = await fetch(logo, {
      method: "GET",
      headers: { Range: "bytes=0-0" },
      redirect: "follow",
      signal: AbortSignal.timeout(LOGO_VALIDATION_TIMEOUT_MS)
    });
    const contentType = res.headers.get("content-type")?.toLowerCase() ?? "";
    if (res.ok && contentType.startsWith("image/")) return logo;
    reporter.warn(
      `Warning: logo URL did not return an image (${res.status} ${contentType || "unknown"}).`
    );
  } catch (error) {
    reporter.warn(`Warning: failed to validate logo URL: ${requestFailureDetail(error)}`);
  }
  return PLACEHOLDER_LOGO_URL;
}
async function findReusableConnector(store, name, apiBase, token, reporter) {
  const localConnector = findLocalConnector(store, name, apiBase);
  if (localConnector) {
    reporter.log(`Reusing local connector: ${name} (${localConnector.connectorId})`);
  }
  try {
    const remoteConnector = await findRemoteConnectorByName(apiBase, token, name);
    if (remoteConnector) {
      reporter.log(`Reusing remote connector: ${name} (${remoteConnector.id})`);
      return { connectorId: remoteConnector.id, fromRemote: true };
    }
  } catch (error) {
    if (!localConnector) {
      throw new Error(
        operationFailureMessage({
          heading: "Failed to check existing Obsidian connectors before create.",
          connectorName: name,
          apiBase,
          detail: requestFailureDetail(error),
          nextAction: "retry after confirming auth/network, or pass --force-new to create anyway."
        })
      );
    }
    reporter.warn(
      `Warning: unable to check remote connectors; using local connector ${localConnector.connectorId}: ${requestFailureDetail(error)}`
    );
  }
  return { connectorId: localConnector?.connectorId, fromRemote: false };
}
async function reuseValidConnection(existing, connectorId, name, apiBase, token, reporter) {
  const validation = await validateRemoteConnection(
    {
      apiBase,
      connectorId: connectorId ?? existing.connector.connectorId,
      connectorName: name,
      connectionId: existing.connection.connectionId,
      connectionName: existing.connection.name,
      tenantName: existing.connection.tenantName ?? existing.connection.name
    },
    token,
    "before reuse"
  );
  if (validation.exists) {
    reporter.log(`Reusing existing connection: ${existing.connection.connectionId}`);
    return existing.connection;
  }
  reporter.warn(
    `Warning: local connection ${existing.connection.connectionId} is stale: ${validation.reason}`
  );
  return void 0;
}
async function createConnector(opts, apiBase, token, reporter) {
  const logo = await resolveLogoUrl(opts.logo, reporter);
  reporter.log(`Creating connector: ${opts.name}`);
  let connectorResp;
  try {
    connectorResp = await apiRequest(
      `${apiBase}${CONNECTION_MANAGEMENT_PREFIX}/custom_connectors/new`,
      token,
      "POST",
      {
        name: opts.name,
        enabled: true,
        obsidian_products: ["posture", "actionability"],
        platform_name: opts.name,
        product_name: opts.name,
        platform_logo_descriptor: logo,
        product_logo_descriptor: logo,
        category: opts.category,
        description: opts.description,
        meta: { created_by: "obsidian-local-agent" },
        ui_schema: {},
        alpha_orgs: [],
        connector_type: "custom",
        lifecycle_status: "custom"
      }
    );
  } catch (error) {
    throw new Error(
      operationFailureMessage({
        heading: "Failed to create Obsidian connector.",
        connectorName: opts.name,
        apiBase,
        detail: requestFailureDetail(error),
        nextAction: "confirm BYOD permissions and retry, or remove --force-new to reuse an existing connector."
      })
    );
  }
  reporter.log(`Connector created: ${connectorResp.connector_id}`);
  return connectorResp.connector_id;
}
async function createConnection(opts, apiBase, token, connectorId, staleConnectionId, reporter) {
  reporter.log(`Creating connection: ${opts.connection}`);
  let connectionId;
  try {
    connectionId = await createRemoteConnection(apiBase, token, {
      name: opts.connection,
      connectorId,
      tenantName: opts.tenant,
      description: opts.description
    });
  } catch (error) {
    throw new Error(
      operationFailureMessage({
        heading: "Failed to create Obsidian connection.",
        connectorName: opts.name,
        apiBase,
        connectionId: staleConnectionId,
        detail: requestFailureDetail(error),
        nextAction: "confirm the connector exists remotely, run repair-connections.ts --write, or retry with --force-new."
      })
    );
  }
  reporter.log(`Connection created: ${connectionId}`);
  return { connectionId, name: opts.connection, tenantName: opts.tenant };
}
function persistConnection(path, store, connection) {
  try {
    saveConnectionsStore(path, store);
  } catch (error) {
    throw new Error(
      [
        `Connection ${connection.connectionId} exists remotely but could not be saved to ${path}.`,
        `Detail: ${requestFailureDetail(error)}`,
        `Next action: add connection ID ${connection.connectionId} to ${path} manually before re-running; a blind re-run may create a duplicate remote connection.`
      ].join("\n")
    );
  }
}
async function ensureConnection(opts, apiBase, token, reuse, existing, reporter) {
  const reusable = existing ? await reuseValidConnection(existing, reuse.connectorId, opts.name, apiBase, token, reporter) : void 0;
  if (reusable && existing) {
    const localId = existing.connector.connectorId;
    const connectorId2 = reuse.fromRemote ? reuse.connectorId ?? localId : localId;
    return { connectorId: connectorId2, connection: reusable, reused: true };
  }
  const connectorId = reuse.connectorId || await createConnector(opts, apiBase, token, reporter);
  const connection = await createConnection(
    opts,
    apiBase,
    token,
    connectorId,
    existing?.connection.connectionId,
    reporter
  );
  return { connectorId, connection, reused: false };
}
async function executeEnsureConnection(opts, reporter = SILENT_WORKFLOW_REPORTER2) {
  const auth = loadAuthStore2(opts.authPath, { requireOrgDomain: true });
  const token = auth.access;
  const apiBase = auth.apiServer ?? inferApiBase(auth.orgDomain);
  reporter.log(`API base: ${apiBase}`);
  const store = loadConnectionsStore2(opts.connectionsPath, { missingFile: "empty" });
  const reuse = opts.forceNew ? { fromRemote: false } : await findReusableConnector(store, opts.name, apiBase, token, reporter);
  const existing = opts.forceNew ? void 0 : findLocalConnection(store, opts.name, apiBase, opts.connection, opts.tenant);
  if (existing && !existing.connection.tenantName) {
    reporter.warn(
      `Warning: stored connection ${existing.connection.connectionId} has no tenant recorded; assuming it matches tenant "${opts.tenant}" and recording it.`
    );
    existing.connection.tenantName = opts.tenant;
  }
  const { connectorId, connection, reused } = await ensureConnection(
    opts,
    apiBase,
    token,
    reuse,
    existing,
    reporter
  );
  const updated = upsertStoredConnection(
    store,
    { connectorId, name: opts.name, apiBase, connection },
    {
      merge: !opts.forceNew,
      dropConnectionId: reused ? void 0 : existing?.connection.connectionId
    }
  );
  persistConnection(opts.connectionsPath, updated, connection);
  reporter.log(`
Saved to ${opts.connectionsPath}`);
  reporter.log(`
Connection ID: ${connection.connectionId}`);
  reporter.log("Ready for settings upload.");
  return {
    apiBase,
    connectorId,
    connectorName: opts.name,
    connectionId: connection.connectionId,
    connectionName: connection.name,
    connectionsPath: opts.connectionsPath,
    reused,
    tenantName: connection.tenantName ?? opts.tenant
  };
}
async function main6() {
  await executeEnsureConnection(parseArgs6(), CONSOLE_WORKFLOW_REPORTER2);
}
if (isDirectScriptEntry2("create-connection")) {
  main6().catch((err) => {
    console.error("Fatal:", err);
    process.exit(1);
  });
}

// src/workflows/push-posture/repair-connections.ts
import { homedir as homedir10 } from "node:os";
import { resolve as resolve10 } from "node:path";
function parseArgs7() {
  const args = process.argv.slice(2);
  return {
    connectionsPath: getArg2(args, "--connections-path") ?? resolve10(homedir10(), ".obsec/connections.json"),
    write: args.includes("--write")
  };
}
function printReport(path, report, write, reporter) {
  reporter.log(`Connections file: ${path}`);
  if (report.connectorGroupsMerged.length === 0 && report.duplicateConnectionsRemoved === 0) {
    reporter.log("No duplicate connectors or connections found.");
    return;
  }
  for (const group of report.connectorGroupsMerged) {
    if (group.entries > 1) {
      reporter.log(
        `${write ? "Merged" : "Would merge"} ${group.entries} connector entries for "${group.name}" at ${group.apiBase}.`
      );
    }
    if (group.connectionDuplicates > 0) {
      reporter.log(
        `${write ? "Removed" : "Would remove"} ${group.connectionDuplicates} duplicate connection IDs for "${group.name}".`
      );
    }
  }
  if (!write) {
    reporter.log("Dry run only. Re-run with --write to update the file.");
  }
}
function executeRepairConnections(opts, reporter = SILENT_WORKFLOW_REPORTER2) {
  const store = loadConnectionsStore2(opts.connectionsPath, {
    missingMessage: `Connections file not found at ${opts.connectionsPath}. Run create-connection.ts first.`
  });
  const result = repairStore(store);
  const changesFound = JSON.stringify(store) !== JSON.stringify(result.store);
  if (opts.write) {
    saveConnectionsStore(opts.connectionsPath, result.store);
  }
  printReport(opts.connectionsPath, result.report, opts.write, reporter);
  return {
    changesFound,
    connectionsPath: opts.connectionsPath,
    report: result.report,
    written: opts.write
  };
}
function main7() {
  executeRepairConnections(parseArgs7(), CONSOLE_WORKFLOW_REPORTER2);
}
if (isDirectScriptEntry2("repair-connections")) {
  try {
    main7();
  } catch (err) {
    console.error("Fatal:", err);
    process.exit(1);
  }
}

// src/workflows/push-posture/upload-settings.ts
import { readFileSync as readFileSync3 } from "node:fs";
import { homedir as homedir11 } from "node:os";
import { dirname as dirname2, extname, resolve as resolve11 } from "node:path";
function parseArgs8() {
  const args = process.argv.slice(2);
  const settingsPath = getArg2(args, "--settings");
  if (!settingsPath) {
    console.error("Error: --settings <path> is required");
    process.exit(1);
  }
  return {
    settingsPath: resolve11(settingsPath),
    connectionId: getArg2(args, "--connection-id"),
    connectorName: getArg2(args, "--connector-name"),
    createReplacement: args.includes("--create-replacement"),
    authPath: getArg2(args, "--auth-path") ?? defaultAuthPath2(),
    connectionsPath: getArg2(args, "--connections-path") ?? resolve11(homedir11(), ".obsec/connections.json")
  };
}
function quoteArg(value) {
  if (process.platform === "win32") {
    return `"${value.replace(/"/gu, '""')}"`;
  }
  return `'${value.replace(/'/gu, "'\\''")}'`;
}
function scriptCommand(script, flags) {
  const executable = process.execPath;
  const currentScriptPath = process.argv[1];
  if (!currentScriptPath) {
    throw new Error(`Unable to construct ${script} retry command without the current script path.`);
  }
  const extension = extname(currentScriptPath);
  const siblingScript = resolve11(dirname2(currentScriptPath), script.replace(/\.ts$/u, extension));
  const parts = extension === ".ts" ? ["tsx", quoteArg(siblingScript)] : [quoteArg(executable), quoteArg(siblingScript)];
  for (const flag of flags) {
    if (typeof flag === "string") {
      parts.push(flag);
    } else {
      parts.push(flag[0], quoteArg(flag[1]));
    }
  }
  return parts.join(" ");
}
function replacementUploadCommand(opts, resolved) {
  return scriptCommand("upload-settings.ts", [
    ["--settings", opts.settingsPath],
    ["--connection-id", resolved.connectionId],
    ["--auth-path", opts.authPath],
    ["--connections-path", opts.connectionsPath],
    "--create-replacement"
  ]);
}
function createConnectionCommand(opts, resolved) {
  return scriptCommand("create-connection.ts", [
    ["--name", resolved.connectorName],
    ["--connection", resolved.connectionName],
    ["--tenant", resolved.tenantName],
    ["--auth-path", opts.authPath],
    ["--connections-path", opts.connectionsPath]
  ]);
}
function staleConnectionMessage(opts, resolved, reason) {
  const nextAction = opts.settingsPath ? replacementUploadCommand(
    {
      settingsPath: opts.settingsPath,
      authPath: opts.authPath,
      connectionsPath: opts.connectionsPath
    },
    resolved
  ) : "retry this upload with replacement creation enabled";
  const alternateRecovery = opts.settingsPath ? createConnectionCommand(opts, resolved) : "ensure the connector and connection exist, then retry the upload";
  return [
    "Selected Obsidian connection is stale or missing remotely.",
    `Connector: ${resolved.connectorName}`,
    `Connection ID: ${resolved.connectionId}`,
    `API base: ${resolved.apiBase}`,
    `Reason: ${reason}`,
    `Next action: ${nextAction}`,
    `Alternate recovery: ${alternateRecovery}`
  ].join("\n");
}
function uploadFailureMessage(resolved, operation, detail) {
  return [
    `Failed to ${operation} Obsidian settings data.`,
    `Connector: ${resolved.connectorName}`,
    `Connection ID: ${resolved.connectionId}`,
    `API base: ${resolved.apiBase}`,
    `Detail: ${detail}`,
    "Next action: if the connection was deleted after validation, retry with --create-replacement; otherwise confirm upload permissions and retry."
  ].join("\n");
}
function logValidatedConnection(connection, reporter) {
  const metadata = [
    typeof connection.name === "string" ? `name=${connection.name}` : void 0,
    typeof connection.status === "string" ? `status=${connection.status}` : void 0
  ].filter((value) => value !== void 0);
  reporter.log(
    metadata.length > 0 ? `Remote connection validated (${metadata.join(", ")}).` : "Remote connection validated."
  );
}
async function createReplacementConnection(resolved, token) {
  if (!resolved.connectorId) {
    throw new Error(
      [
        "Cannot create replacement connection because connectorId is missing.",
        `Connector: ${resolved.connectorName}`,
        `Connection ID: ${resolved.connectionId}`,
        `API base: ${resolved.apiBase}`,
        "Next action: run repair-connections.ts --write or recreate the connector."
      ].join("\n")
    );
  }
  let connectionId;
  try {
    connectionId = await createRemoteConnection(resolved.apiBase, token, {
      name: resolved.connectionName,
      connectorId: resolved.connectorId,
      tenantName: resolved.tenantName,
      description: resolved.connectionName
    });
  } catch (error) {
    throw new Error(
      [
        "Failed to create replacement Obsidian connection.",
        `Connector: ${resolved.connectorName}`,
        `Connection ID: ${resolved.connectionId}`,
        `API base: ${resolved.apiBase}`,
        `Detail: ${requestFailureDetail(error)}`,
        "Next action: confirm the connector still exists remotely or re-run create-connection.ts."
      ].join("\n")
    );
  }
  return {
    connectionId,
    name: resolved.connectionName,
    tenantName: resolved.tenantName
  };
}
function persistReplacement(path, resolved, replacement, reporter) {
  try {
    const store = loadConnectionsStore2(path);
    const updated = upsertStoredConnection(
      store,
      {
        connectorId: resolved.connectorId,
        name: resolved.connectorName,
        apiBase: resolved.apiBase,
        connection: replacement
      },
      { merge: true, dropConnectionId: resolved.connectionId }
    );
    saveConnectionsStore(path, updated);
    return true;
  } catch (error) {
    reporter.warn(
      [
        `Warning: replacement connection was created remotely but could not be saved to ${path}: ${requestFailureDetail(error)}`,
        `Continuing upload with connection ID ${replacement.connectionId}.`,
        `Next action: replace connection ID ${resolved.connectionId} with ${replacement.connectionId} in ${path}, then run repair-connections.ts --write.`
      ].join("\n")
    );
    return false;
  }
}
function loadSettings(path) {
  let raw;
  try {
    raw = readFileSync3(path, "utf-8");
  } catch (error) {
    throw new Error(`Failed to read settings file at ${path}: ${requestFailureDetail(error)}`);
  }
  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch (error) {
    throw new Error(`Settings file at ${path} is invalid JSON: ${requestFailureDetail(error)}`);
  }
  if (!Array.isArray(parsed)) {
    throw new Error(`Settings file at ${path} must contain a JSON array`);
  }
  if (parsed.length === 0) {
    throw new Error(`Settings file at ${path} must contain at least one setting`);
  }
  return parsed;
}
function resolveSettings(opts) {
  if (opts.settings !== void 0) {
    if (!Array.isArray(opts.settings)) {
      throw new Error("settings must be a JSON array");
    }
    if (opts.settings.length === 0) {
      throw new Error("settings must contain at least one setting");
    }
    return opts.settings;
  }
  if (opts.settingsPath) {
    return loadSettings(opts.settingsPath);
  }
  throw new Error("Provide settings or settingsPath");
}
async function executeUploadSettings(opts, reporter = SILENT_WORKFLOW_REPORTER2) {
  const auth = loadAuthStore2(opts.authPath);
  const apiKey = auth.access;
  let resolved = resolveStoredConnection(opts);
  let replacementCreated = false;
  let replacementPersisted;
  const validation = await validateRemoteConnection(resolved, apiKey, "before upload");
  if (!validation.exists) {
    if (!opts.createReplacement) {
      throw new Error(staleConnectionMessage(opts, resolved, validation.reason ?? "missing"));
    }
    reporter.warn(staleConnectionMessage(opts, resolved, validation.reason ?? "missing"));
    reporter.log("Creating replacement connection...");
    const replacement = await createReplacementConnection(resolved, apiKey);
    reporter.log(`Replacement connection created: ${replacement.connectionId}`);
    replacementCreated = true;
    replacementPersisted = persistReplacement(
      opts.connectionsPath,
      resolved,
      replacement,
      reporter
    );
    resolved = {
      ...resolved,
      connectionId: replacement.connectionId,
      connectionName: replacement.name,
      tenantName: replacement.tenantName ?? replacement.name
    };
  } else if (validation.connection) {
    logValidatedConnection(validation.connection, reporter);
  }
  const rawSettings = resolveSettings(opts);
  const client = new ObsidianSDKClient({
    apiKey,
    apiServer: resolved.apiBase
  });
  reporter.log(`Uploading ${rawSettings.length} settings to ${resolved.connectionId}...`);
  try {
    await client.uploadSettings({ connectionId: resolved.connectionId, settings: rawSettings });
  } catch (error) {
    throw new Error(uploadFailureMessage(resolved, "upload", requestFailureDetail(error)));
  }
  reporter.log(`Uploaded. Committing...`);
  try {
    await client.commitObjects({ connectionId: resolved.connectionId });
  } catch (error) {
    throw new Error(uploadFailureMessage(resolved, "commit", requestFailureDetail(error)));
  }
  reporter.log("Commit complete \u2014 settings will appear in the posture UI.");
  let postureRuleCount;
  try {
    const rules = await client.listPostureRules({ request: { limit: 1 } });
    const totalRules = rules.total ?? rules.data.length;
    postureRuleCount = totalRules;
    if (totalRules === 0) {
      reporter.log(
        "No posture rules found. Want me to create one with the posture-rules workflow?"
      );
    }
  } catch (error) {
    reporter.warn(
      `Warning: Unable to check existing posture rules: ${requestFailureDetail(error)}`
    );
  }
  return {
    apiBase: resolved.apiBase,
    committed: true,
    connectionId: resolved.connectionId,
    connectionName: resolved.connectionName,
    connectorId: resolved.connectorId,
    connectorName: resolved.connectorName,
    postureRuleCount,
    replacementCreated,
    replacementPersisted,
    settingsCount: rawSettings.length,
    tenantName: resolved.tenantName
  };
}
async function main8() {
  await executeUploadSettings(parseArgs8(), CONSOLE_WORKFLOW_REPORTER2);
}
if (isDirectScriptEntry2("upload-settings")) {
  main8().catch((err) => {
    console.error("Fatal:", err);
    process.exit(1);
  });
}

// src/mcp/schema-validation.ts
function schemaError(path, message) {
  throw new Error(`${path} ${message}`);
}
function isRecord3(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
function matches(value, schema, path) {
  try {
    validateSchema(value, schema, path);
    return true;
  } catch {
    return false;
  }
}
function validateAlternatives(value, schema, path) {
  const anyOf = schema.anyOf;
  if (Array.isArray(anyOf)) {
    const valid = anyOf.some((item) => isRecord3(item) && matches(value, item, path));
    if (!valid) schemaError(path, "does not match any allowed schema");
    return true;
  }
  const oneOf = schema.oneOf;
  if (Array.isArray(oneOf)) {
    const count = oneOf.filter((item) => isRecord3(item) && matches(value, item, path)).length;
    if (count !== 1) schemaError(path, "must match exactly one allowed schema");
    return true;
  }
  return false;
}
function validateString(value, schema, path) {
  if (typeof schema.minLength === "number" && value.length < schema.minLength) {
    schemaError(path, `must have at least ${schema.minLength} characters`);
  }
  if (typeof schema.maxLength === "number" && value.length > schema.maxLength) {
    schemaError(path, `must have at most ${schema.maxLength} characters`);
  }
}
function validateNumber(value, schema, path) {
  if (typeof schema.minimum === "number" && value < schema.minimum) {
    schemaError(path, `must be at least ${schema.minimum}`);
  }
}
function validateArray(value, schema, path) {
  if (typeof schema.minItems === "number" && value.length < schema.minItems) {
    schemaError(path, `must contain at least ${schema.minItems} items`);
  }
  if (!isRecord3(schema.items)) return;
  value.forEach(
    (item, index) => validateSchema(item, schema.items, `${path}[${index}]`)
  );
}
function validateObject(value, schema, path) {
  const properties = isRecord3(schema.properties) ? schema.properties : {};
  const required = Array.isArray(schema.required) ? schema.required : [];
  for (const key of required) {
    if (typeof key === "string" && !(key in value)) {
      schemaError(`${path}.${key}`, "is required");
    }
  }
  for (const [key, item] of Object.entries(value)) {
    const property = properties[key];
    if (property === void 0) {
      if (schema.additionalProperties === false) {
        schemaError(`${path}.${key}`, "is not allowed");
      }
      continue;
    }
    if (isRecord3(property)) validateSchema(item, property, `${path}.${key}`);
  }
}
function validateType(value, schema, path) {
  const type = schema.type;
  if (type === "null" && value !== null) schemaError(path, "must be null");
  if (type === "string" && typeof value !== "string") schemaError(path, "must be a string");
  if (type === "boolean" && typeof value !== "boolean") schemaError(path, "must be a boolean");
  if (type === "number" && typeof value !== "number") schemaError(path, "must be a number");
  if (type === "integer" && (!Number.isInteger(value) || typeof value !== "number")) {
    schemaError(path, "must be an integer");
  }
  if (type === "array" && !Array.isArray(value)) schemaError(path, "must be an array");
  if (type === "object" && !isRecord3(value)) schemaError(path, "must be an object");
}
function validateSchema(value, schema, path = "arguments") {
  if (validateAlternatives(value, schema, path)) return;
  if ("const" in schema && value !== schema.const)
    schemaError(path, `must equal ${String(schema.const)}`);
  validateType(value, schema, path);
  if (typeof value === "string") validateString(value, schema, path);
  if (typeof value === "number") validateNumber(value, schema, path);
  if (Array.isArray(value)) validateArray(value, schema, path);
  if (isRecord3(value)) validateObject(value, schema, path);
}

// src/mcp/browser.ts
import { randomUUID as randomUUID2 } from "node:crypto";

// src/mcp/browser-approval-store.ts
import { createHash, randomUUID } from "node:crypto";
import { chmod, lstat, mkdir, readFile as readFile2, rename, unlink, writeFile } from "node:fs/promises";
import { homedir as homedir12 } from "node:os";
import { resolve as resolve12 } from "node:path";
var SAFE_ID = /^[A-Za-z0-9-]+$/u;
function safeId(value, name) {
  if (!SAFE_ID.test(value)) throw new Error(`${name} is invalid`);
  return value;
}
function approvalRoot() {
  return process.env.OBSEC_BROWSER_APPROVALS_PATH ?? resolve12(process.env.HOME ?? homedir12(), ".obsec/browser-approvals");
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
    this.claims = resolve12(root, "claims");
    this.receipts = resolve12(root, "receipts");
  }
  async ensureDirectories(...paths) {
    await ensurePrivateDirectory(this.root);
    for (const path of paths) await ensurePrivateDirectory(path);
  }
  async issueReceipt(receipt) {
    safeId(receipt.token, "approval_token");
    await this.ensureDirectories(this.receipts);
    await writePrivateJson(resolve12(this.receipts, `${receipt.token}.json`), receipt);
  }
  async readReceipt(token) {
    safeId(token, "approval_token");
    await this.ensureDirectories(this.receipts);
    try {
      return parseReceipt(await readFile2(resolve12(this.receipts, `${token}.json`), "utf8"));
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
    const source = resolve12(this.receipts, `${token}.json`);
    const claim = resolve12(this.claims, `${token}.${randomUUID()}.json`);
    try {
      await rename(source, claim);
      return parseReceipt(await readFile2(claim, "utf8"));
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

// src/mcp/browser.ts
var RECEIPT_TTL_MS = 3e4;
var BROWSER_ACTION_RUNTIME_URL = new URL("./browser-action.mjs", import.meta.url).href;
var ACTIONS = /* @__PURE__ */ new Set([
  "check",
  "click",
  "dblclick",
  "fill",
  "follow_link",
  "navigate",
  "press",
  "select",
  "type",
  "uncheck"
]);
function nonEmptyString(value, name) {
  if (typeof value !== "string" || value.trim().length === 0) {
    throw new Error(`${name} must be a non-empty string`);
  }
  return value.trim();
}
function normalizedHost(value, name = "host") {
  const host = nonEmptyString(value, name).toLowerCase();
  let parsed;
  try {
    parsed = new URL(`https://${host}`);
  } catch {
    throw new Error(`${name} must be a valid hostname`);
  }
  if (parsed.hostname !== host || parsed.port || parsed.pathname !== "/") {
    throw new Error(`${name} must be a valid hostname without a path or port`);
  }
  return host;
}
function browserRequest(host) {
  return {
    actionId: "BrowserMutation",
    operationClass: "BrowserMutation",
    resourceId: host,
    resourceType: "Host",
    toolName: "approve_in_app_browser_action"
  };
}
function parsePoint(value) {
  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    throw new Error("action.point must be an object");
  }
  const point = value;
  if (typeof point.x !== "number" || !Number.isFinite(point.x) || typeof point.y !== "number" || !Number.isFinite(point.y)) {
    throw new Error("action.point must contain finite x and y coordinates");
  }
  return { x: point.x, y: point.y };
}
function parseAction(value, host) {
  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    throw new Error("action must be an object");
  }
  const action = value;
  if (!ACTIONS.has(action.action)) throw new Error("action.action is invalid");
  if (action.action === "navigate") {
    return { action: "navigate", url: navigationUrl(action.url, host) };
  }
  if (!Array.isArray(action.target?.locators) || action.target.locators.length === 0) {
    throw new Error("action.target.locators must be a non-empty array");
  }
  const parsed = { ...action, point: parsePoint(action.point) };
  return parsed.action === "follow_link" ? parseFollowLink(parsed, host) : parsed;
}
function parseFollowLink(action, host) {
  const href = nonEmptyString(action.target.expected_href, "action.target.expected_href");
  const destinationHost = normalizedHost(
    action.destination_host ?? host,
    "action.destination_host"
  );
  let url;
  try {
    url = new URL(href, `https://${host}/`);
  } catch {
    throw new Error("action.target.expected_href must be a valid HTTP(S) URL");
  }
  if (!["http:", "https:"].includes(url.protocol) || url.username || url.password || url.hostname.toLowerCase() !== destinationHost) {
    throw new Error("action.target.expected_href must use action.destination_host");
  }
  return { ...action, destination_host: destinationHost };
}
function navigationUrl(value, host) {
  const text = nonEmptyString(value, "action.url");
  let url;
  try {
    url = new URL(text);
  } catch {
    throw new Error("action.url must be a valid HTTP(S) URL");
  }
  if (!["http:", "https:"].includes(url.protocol) || url.username || url.password || url.hostname.toLowerCase() !== host) {
    throw new Error("action.url must use the approved host without credentials");
  }
  return url.href;
}
function targetDescription(target) {
  const locator = target.locators.at(-1);
  if (!locator) return "unknown target";
  if (locator.kind === "role") return `${locator.role} ${JSON.stringify(locator.name)}`;
  return `${locator.kind} ${JSON.stringify(locator.value)}`;
}
function actionSummary(action, host) {
  if (action.action === "navigate") return `navigate to ${JSON.stringify(action.url)}`;
  const target = targetDescription(action.target);
  if (action.action === "follow_link") {
    const destination = action.destination_host ?? host;
    return `follow ${target} from ${JSON.stringify(host)} to ${JSON.stringify(destination)} at ${JSON.stringify(action.target.expected_href)}`;
  }
  if (action.action === "fill" || action.action === "type") {
    return `${action.action} ${target} with ${JSON.stringify(action.text)}`;
  }
  if (action.action === "select") {
    return `select ${JSON.stringify(action.values)} in ${target}`;
  }
  if (action.action === "press") return `press ${JSON.stringify(action.key)} on ${target}`;
  return `${action.action} ${target}`;
}
function browserCall(token) {
  return [
    `/* bastion-browser-approval: ${token} */`,
    "{",
    `const bastionRuntime = await import(${JSON.stringify(BROWSER_ACTION_RUNTIME_URL)});`,
    "nodeRepl.write(await bastionRuntime.runApprovedBrowserAction(",
    `globalThis, ${JSON.stringify(token)},`,
    "));",
    "}"
  ].join("\n");
}
var InAppBrowserController = class {
  constructor(getPolicy, now, store) {
    this.getPolicy = getPolicy;
    this.now = now;
    this.store = store;
  }
  getPolicy;
  now;
  store;
  async approve(args) {
    const host = normalizedHost(args.host);
    const tabId = nonEmptyString(args.tab_id, "tab_id");
    const action = parseAction(args.action, host);
    const policy = await this.getPolicy();
    authorize(policy, browserRequest(host));
    if (action.action === "follow_link" && action.destination_host !== host) {
      authorize(policy, browserRequest(action.destination_host ?? host));
    }
    const token = randomUUID2();
    const call = browserCall(token);
    const summary = actionSummary(action, host);
    const approvedAction = { action, host, tab_id: tabId };
    const issuedAt = this.now();
    await this.store.issueReceipt({
      actionSummary: summary,
      approvedAction,
      codeHash: browserCodeHash(call),
      expiresAt: issuedAt + RECEIPT_TTL_MS,
      host,
      issuedAt,
      token
    });
    return {
      action_summary: summary,
      browser_call: call,
      expires_in_seconds: RECEIPT_TTL_MS / 1e3
    };
  }
};
function createBrowserController(options = {}) {
  return new InAppBrowserController(
    options.getPolicy ?? loadPolicy,
    options.now ?? Date.now,
    options.store ?? createBrowserApprovalStore()
  );
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

// src/mcp/tools.ts
var DEFAULT_DEPENDENCIES = {
  browser: createBrowserController(),
  createClient: ({ apiKey, apiServer }) => new ObsidianSDKClient({ apiKey, apiServer }),
  createRule: executeCreateRule,
  ensureConnection: executeEnsureConnection,
  listRules: executeListRules,
  repairConnections: executeRepairConnections,
  retireRule: executeRetireRule,
  rulesFromSettings: executeRulesFromSettings,
  updateRule: executeUpdateRule,
  uploadSettings: executeUploadSettings
};
function nonEmptyString2(value, name) {
  if (typeof value !== "string" || value.trim().length === 0) {
    throw new Error(`${name} must be a non-empty string`);
  }
  return value.trim();
}
function optionalString(value) {
  return typeof value === "string" ? value : void 0;
}
function credentialsFromEnv() {
  const apiKey = process.env.OBSIDIAN_API_TOKEN;
  const apiServer = process.env.OBSIDIAN_API_SERVER;
  if (!apiKey || !apiServer) {
    throw new Error("OBSIDIAN_API_TOKEN and OBSIDIAN_API_SERVER must both be set");
  }
  let parsed;
  try {
    parsed = new URL(apiServer);
  } catch {
    throw new Error("OBSIDIAN_API_SERVER must be a valid HTTP(S) URL");
  }
  if (parsed.protocol !== "https:" && parsed.protocol !== "http:") {
    throw new Error("OBSIDIAN_API_SERVER must be a valid HTTP(S) URL");
  }
  return { apiKey, apiServer: apiServer.replace(/\/+$/u, "") };
}
function connectionsPath() {
  return process.env.OBSEC_CONNECTIONS_PATH ?? resolve13(homedir13(), ".obsec/connections.json");
}
function authPath() {
  return resolve13(homedir13(), ".obsec/auth.json");
}
function clientFromEnv(dependencies) {
  return dependencies.createClient(credentialsFromEnv());
}
function normalizeSettings(value) {
  if (!Array.isArray(value)) throw new Error("settings must be an array");
  return value.map((setting2, index) => {
    try {
      return normalizeSetting(setting2);
    } catch (error) {
      const detail = error instanceof Error ? error.message : String(error);
      throw new Error(`settings[${index}] is invalid: ${detail}`, { cause: error });
    }
  });
}
async function ensureConnection2(args, dependencies) {
  credentialsFromEnv();
  const name = nonEmptyString2(args.name, "name");
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/gu, "-").replace(/^-|-$/gu, "");
  return dependencies.ensureConnection({
    name,
    category: optionalString(args.category) ?? "Business Applications",
    description: optionalString(args.description) ?? `${name} integration`,
    logo: optionalString(args.logo) ?? "",
    tenant: optionalString(args.tenant) ?? slug,
    connection: optionalString(args.connection) ?? name,
    forceNew: args.force_new === true,
    authPath: authPath(),
    connectionsPath: connectionsPath()
  });
}
async function repair(write, dependencies) {
  return dependencies.repairConnections({ connectionsPath: connectionsPath(), write });
}
async function uploadSettings(args, dependencies) {
  credentialsFromEnv();
  return dependencies.uploadSettings({
    settings: normalizeSettings(args.settings),
    connectionId: optionalString(args.connection_id),
    connectorName: optionalString(args.connector_name),
    createReplacement: args.create_replacement === true,
    authPath: authPath(),
    connectionsPath: connectionsPath()
  });
}
function listOptions(args) {
  return {
    cursor: optionalString(args.cursor),
    limit: typeof args.limit === "number" ? args.limit : void 0,
    platform: optionalString(args.platform),
    releaseLabel: optionalString(args.release_label),
    riskLevel: optionalString(args.risk_level),
    search: optionalString(args.search),
    state: optionalString(args.state),
    tenantId: optionalString(args.tenant_id),
    tenantUuid: optionalString(args.tenant_uuid)
  };
}
async function listRules(args, dependencies) {
  return dependencies.listRules(clientFromEnv(dependencies), listOptions(args));
}
function createRuleOptions(args, previewOnly) {
  return {
    rule: args.rule,
    dashboardId: optionalString(args.dashboard_id),
    dashboardTitle: optionalString(args.dashboard_title),
    platform: optionalString(args.platform),
    noPreview: previewOnly ? false : args.skip_preview === true,
    previewTenant: optionalString(args.preview_tenant),
    previewLimit: typeof args.preview_limit === "number" ? args.preview_limit : void 0,
    previewOnly
  };
}
async function createRule(args, dependencies, previewOnly) {
  const client = clientFromEnv(dependencies);
  return dependencies.createRule(client, createRuleOptions(args, previewOnly));
}
function rulesFromSettingsOptions(args, apply) {
  return {
    apply,
    dashboardId: optionalString(args.dashboard_id),
    dashboardTitle: optionalString(args.dashboard_title),
    domain: optionalString(args.domain),
    platform: optionalString(args.platform),
    previewLimit: typeof args.preview_limit === "number" ? args.preview_limit : void 0,
    riskLevel: optionalString(args.risk_level),
    tenantUuid: optionalString(args.tenant_uuid)
  };
}
async function rulesFromSettings(args, dependencies, apply) {
  const client = clientFromEnv(dependencies);
  return dependencies.rulesFromSettings(client, rulesFromSettingsOptions(args, apply));
}
async function updateRule(args, dependencies) {
  const client = clientFromEnv(dependencies);
  return dependencies.updateRule(client, {
    ruleId: nonEmptyString2(args.rule_id, "rule_id"),
    definition: args.definition,
    metadata: args.metadata,
    riskLevel: optionalString(args.risk_level),
    riskComment: optionalString(args.risk_comment)
  });
}
async function retireRule(args, dependencies) {
  const client = clientFromEnv(dependencies);
  return dependencies.retireRule(client, {
    ruleId: nonEmptyString2(args.rule_id, "rule_id")
  });
}
var HANDLERS = {
  approve_in_app_browser_action: (args, dependencies) => dependencies.browser.approve(args),
  ensure_obsidian_connection: ensureConnection2,
  preview_connection_repair: (_args, dependencies) => repair(false, dependencies),
  apply_connection_repair: (_args, dependencies) => repair(true, dependencies),
  upload_posture_settings: uploadSettings,
  list_posture_rules: listRules,
  preview_posture_rule: (args, dependencies) => createRule(args, dependencies, true),
  create_posture_rule: (args, dependencies) => createRule(args, dependencies, false),
  preview_posture_rules_from_settings: (args, dependencies) => rulesFromSettings(args, dependencies, false),
  create_posture_rules_from_settings: (args, dependencies) => rulesFromSettings(args, dependencies, true),
  update_posture_rule: updateRule,
  retire_posture_rule: retireRule
};
function validatedArgs(name, value) {
  if (!isKnownTool(name)) throw new Error(`Unknown tool: ${name}`);
  const args = value ?? {};
  const definition = TOOLS.find((tool) => tool.name === name);
  if (!definition) throw new Error(`Unknown tool: ${name}`);
  validateSchema(args, definition.inputSchema);
  return args;
}
async function callTool(name, args, dependencies) {
  const handler = HANDLERS[name];
  if (!handler) throw new Error(`Unknown tool: ${name}`);
  return handler(args, dependencies);
}
async function handleToolCall(params, dependencies = DEFAULT_DEPENDENCIES) {
  try {
    const name = nonEmptyString2(params.name, "tool name");
    const args = validatedArgs(name, params.arguments);
    const result = await callTool(name, args, dependencies);
    return {
      content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
      structuredContent: { result }
    };
  } catch (error) {
    return {
      content: [{ type: "text", text: error instanceof Error ? error.message : String(error) }],
      isError: true
    };
  }
}

// src/mcp/server.ts
var SERVER_INFO = { name: "ObSec", version: "0.1.0" };
var PARSE_ERROR = -32700;
var INVALID_REQUEST = -32600;
var METHOD_NOT_FOUND = -32601;
var DEFAULT_DEPENDENCIES2 = {
  callTool: handleToolCall,
  getPolicy: loadPolicy
};
function sendResult(send, id, result) {
  send({ jsonrpc: "2.0", id, result });
}
function sendError(send, id, code, message) {
  send({ jsonrpc: "2.0", id, error: { code, message } });
}
function initialize(send, id, request) {
  const protocolVersion = typeof request.params?.protocolVersion === "string" ? request.params.protocolVersion : "2025-11-25";
  sendResult(send, id, {
    protocolVersion,
    capabilities: { tools: {} },
    serverInfo: SERVER_INFO,
    instructions: [
      "Use the Codex in-app Browser for SaaS interaction.",
      "Move the visible browser pointer to the target, approve one exact action, then execute the returned browser_call verbatim.",
      "Use follow_link for an exact rendered link when navigation is its only effect; include destination_host for cross-host links.",
      "Never navigate, reload, go back, or go forward outside an approved browser_call.",
      BROWSER_AUTO_REVIEW_GUIDANCE,
      "Automatic reviewers must also deny credential or MFA entry and host or target mismatches.",
      "Use ObSec tools for Obsidian posture data and mutations.",
      "Codex approval is required before write tools; Cedar is enforced again in the server and hook."
    ].join(" ")
  });
}
function toolError(error) {
  const message = error instanceof Error ? error.message : String(error);
  return { content: [{ type: "text", text: message }], isError: true };
}
function toolParams(value) {
  const params = value ?? {};
  const args = params.arguments;
  if (args !== void 0 && (typeof args !== "object" || args === null || Array.isArray(args))) {
    throw new Error("tool arguments must be an object");
  }
  return params;
}
async function callTool2(paramsValue, dependencies) {
  const params = toolParams(paramsValue);
  if (typeof params.name !== "string" || !isKnownTool(params.name)) {
    throw new Error(`Unknown tool: ${String(params.name)}`);
  }
  if (!isBrowserTool(params.name)) {
    const policy = await dependencies.getPolicy();
    authorize(policy, policyRequestForTool(params.name));
  }
  return dependencies.callTool(params);
}
async function handleRequest(request, send, dependencies = DEFAULT_DEPENDENCIES2) {
  if (request.id === void 0) return;
  const id = request.id;
  if (request.method === "initialize") {
    initialize(send, id, request);
    return;
  }
  if (request.method === "ping") {
    sendResult(send, id, {});
    return;
  }
  if (request.method === "tools/list") {
    sendResult(send, id, { tools: TOOLS });
    return;
  }
  if (request.method === "tools/call") {
    try {
      sendResult(send, id, await callTool2(request.params, dependencies));
    } catch (error) {
      sendResult(send, id, toolError(error));
    }
    return;
  }
  if (typeof request.method !== "string") {
    sendError(send, id, INVALID_REQUEST, "Request method is required.");
    return;
  }
  sendError(send, id, METHOD_NOT_FOUND, `Method not found: ${request.method}`);
}
function parseRequest(line, send) {
  let value;
  try {
    value = JSON.parse(line);
  } catch {
    sendError(send, null, PARSE_ERROR, "Invalid JSON-RPC JSON payload.");
    return void 0;
  }
  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    sendError(send, null, INVALID_REQUEST, "JSON-RPC request must be an object.");
    return void 0;
  }
  return value;
}
async function handleLine(line, send, dependencies = DEFAULT_DEPENDENCIES2) {
  const request = parseRequest(line, send);
  if (request) await handleRequest(request, send, dependencies);
}
async function runStdio() {
  await loadPolicy();
  const send = (message) => process.stdout.write(`${JSON.stringify(message)}
`);
  const lines = readline.createInterface({ input: process.stdin, crlfDelay: Infinity });
  for await (const line of lines) {
    await handleLine(line, send);
  }
}
var entryPath = process.argv[1];
if (entryPath && import.meta.url === pathToFileURL(entryPath).href) {
  runStdio().catch((error) => {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`ObSec MCP failed to start: ${message}`);
    process.exitCode = 1;
  });
}
export {
  handleLine,
  handleRequest
};
