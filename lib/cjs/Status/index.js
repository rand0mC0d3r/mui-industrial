"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var index_types_1 = require("../index.types");
var Template_1 = __importDefault(require("./components/Template"));
var StatusConsole = (0, react_1.lazy)(function () { return Promise.resolve().then(function () { return __importStar(require('./components/StatusConsole')); }); });
var StatusCore = (0, react_1.lazy)(function () { return Promise.resolve().then(function () { return __importStar(require('./components/StatusCore')); }); });
var StatusPopper = (0, react_1.lazy)(function () { return Promise.resolve().then(function () { return __importStar(require('./components/StatusPopper')); }); });
var defaultStatusOptionsProps = {
    as: index_types_1.StatusType.SIMPLE,
};
var Status = function (_a) {
    var rest = __rest(_a, []);
    var options = __assign(__assign({}, defaultStatusOptionsProps), rest.options);
    var props = __assign(__assign({}, rest), { options: options });
    return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [options.as === index_types_1.StatusType.SIMPLE && (0, jsx_runtime_1.jsx)(react_1.Suspense, __assign({ fallback: (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}) }, { children: (0, jsx_runtime_1.jsx)(StatusCore, __assign({}, props)) })), options.as === index_types_1.StatusType.POPPER && (0, jsx_runtime_1.jsx)(react_1.Suspense, __assign({ fallback: (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}) }, { children: (0, jsx_runtime_1.jsx)(StatusPopper, __assign({}, props)) })), options.as === index_types_1.StatusType.CONSOLE && (0, jsx_runtime_1.jsx)(react_1.Suspense, __assign({ fallback: (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}) }, { children: (0, jsx_runtime_1.jsx)(StatusConsole, __assign({}, props)) }))] });
};
Status.Template = Template_1.default;
exports.default = Status;
