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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var index_types_1 = require("../../../index.types");
var Store_1 = __importDefault(require("../../../Store"));
var StatusCore_1 = __importDefault(require("../StatusCore"));
exports.default = (function (_a) {
    var id = _a.id, order = _a.order, disabled = _a.disabled, options = _a.options, secondary = _a.secondary, tooltip = _a.tooltip, onClick = _a.onClick, onContextMenu = _a.onContextMenu, style = _a.style, className = _a.className, children = _a.children;
    var _b = (0, react_1.useContext)(Store_1.default), status = _b.status, updateConsoleActiveId = _b.updateConsoleActiveId;
    var handleStatusTypeUpdate = (0, react_1.useContext)(Store_1.default).handleStatusTypeUpdate;
    var _c = (0, react_1.useContext)(Store_1.default).settings, consoleActiveId = _c.consoleActiveId, isConsoleOpen = _c.isConsoleOpen;
    var _d = (0, react_1.useState)(undefined), statusObject = _d[0], setStatusObject = _d[1];
    var _e = (0, react_1.useState)(null), elementFound = _e[0], setElementFound = _e[1];
    var computeHightlight = (statusObject && isConsoleOpen && (statusObject === null || statusObject === void 0 ? void 0 : statusObject.uniqueId) === consoleActiveId)
        ? index_types_1.Highlight.PRIMARY
        : index_types_1.Highlight.DEFAULT;
    var handleOnClick = function (event) {
        if (onClick)
            onClick(event);
        if (!statusObject)
            return;
        if (!isConsoleOpen || consoleActiveId !== id) {
            updateConsoleActiveId({ id: statusObject === null || statusObject === void 0 ? void 0 : statusObject.uniqueId });
        }
        else {
            updateConsoleActiveId({ id: undefined });
        }
    };
    (0, react_1.useEffect)(function () {
        setElementFound(document.getElementById(index_types_1.domConsoleId) || null);
    }, [statusObject, consoleActiveId, isConsoleOpen]);
    (0, react_1.useEffect)(function () {
        setStatusObject(status.find(function (_a) {
            var uniqueId = _a.uniqueId;
            return uniqueId === id;
        }));
    }, [status, id]);
    (0, react_1.useEffect)(function () {
        if (statusObject && statusObject.type !== index_types_1.StatusType.CONSOLE) {
            handleStatusTypeUpdate({ id: id, type: index_types_1.StatusType.CONSOLE });
        }
    }, [statusObject, id, handleStatusTypeUpdate]);
    return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(StatusCore_1.default, __assign({}, {
                id: id,
                order: order,
                tooltip: tooltip,
                secondary: secondary,
                disabled: disabled,
                options: options,
                highlight: computeHightlight,
                onClick: handleOnClick,
                onContextMenu: onContextMenu,
                style: style,
                className: className,
            }, { children: children })), elementFound
                && (options === null || options === void 0 ? void 0 : options.content)
                && (statusObject === null || statusObject === void 0 ? void 0 : statusObject.uniqueId) === consoleActiveId
                && (0, react_dom_1.createPortal)(options === null || options === void 0 ? void 0 : options.content, elementFound)] });
});
