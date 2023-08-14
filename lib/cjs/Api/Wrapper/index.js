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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var index_types_1 = require("../../index.types");
var Store_1 = __importDefault(require("../../Store"));
var InternalConsole_1 = __importDefault(require("../InternalConsole"));
var InternalKeyboard_1 = __importDefault(require("../InternalKeyboard"));
var InternalNotifications_1 = __importDefault(require("../InternalNotifications"));
var InternalSettings_1 = __importDefault(require("../InternalSettings"));
var InternalStatus_1 = __importDefault(require("../InternalStatus"));
var InternalCommands = (0, react_1.lazy)(function () { return Promise.resolve().then(function () { return __importStar(require('../InternalCommands')); }); });
var css_1 = require("./css");
exports.default = (function (_a) {
    var children = _a.children, style = _a.style;
    var _b = (0, react_1.useContext)(Store_1.default), status = _b.status, shortcuts = _b.shortcuts, commands = _b.commands, settings = _b.settings;
    var _c = settings, position = _c.position, fullWidth = _c.fullWidth, hasBorder = _c.hasBorder;
    var _d = (0, react_1.useState)(null), anchorEl = _d[0], setAnchorEl = _d[1];
    var onContextMenu = function (e) {
        e.preventDefault();
        setAnchorEl(e.currentTarget);
    };
    var renderConsole = status.some(function (_a) {
        var type = _a.type;
        return type === index_types_1.StatusType.CONSOLE;
    }) && (0, jsx_runtime_1.jsx)(InternalConsole_1.default, {});
    var renderCommands = commands.length > 0 && (0, jsx_runtime_1.jsx)(react_1.Suspense, __assign({ fallback: (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}) }, { children: (0, jsx_runtime_1.jsx)(InternalCommands, {}) }));
    var renderKeyboards = shortcuts.length > 0 && (0, jsx_runtime_1.jsx)(InternalKeyboard_1.default, {});
    var renderNotifications = (0, jsx_runtime_1.jsx)(css_1.SNotifications, __assign({}, { column: position }, { children: (0, jsx_runtime_1.jsx)(InternalNotifications_1.default, {}) }));
    var renderStatus = status.some(function (_a) {
        var visible = _a.visible;
        return visible;
    }) && (0, jsx_runtime_1.jsx)(css_1.SStatusContainer, __assign({}, { fullWidth: fullWidth, hasBorder: hasBorder, onContextMenu: onContextMenu }, { children: (0, jsx_runtime_1.jsx)(InternalStatus_1.default, __assign({}, { style: style })) }));
    return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(css_1.SBox, __assign({ id: "mui-status-wrapper" }, { column: position }, { children: [(0, jsx_runtime_1.jsx)(css_1.SChildrenRow, { children: (0, jsx_runtime_1.jsxs)(css_1.SChildren, __assign({ id: "mui-status-children" }, { children: [children, renderConsole, renderCommands] })) }), renderStatus, renderNotifications, renderKeyboards] })), (0, jsx_runtime_1.jsx)(InternalSettings_1.default, __assign({}, { anchorEl: anchorEl, setAnchorEl: setAnchorEl }))] });
});
