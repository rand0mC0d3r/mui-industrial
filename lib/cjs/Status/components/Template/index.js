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
var QuestionMark_1 = __importDefault(require("@mui/icons-material/QuestionMark"));
var material_1 = require("@mui/material");
var react_1 = require("react");
var css_1 = require("./css");
var defaultChildrenOrder = 3;
exports.default = (function (_a) {
    var icon = _a.icon, text = _a.text, badge = _a.badge, children = _a.children, _b = _a.reverse, reverse = _b === void 0 ? false : _b, _c = _a.childrenOrder, childrenOrder = _c === void 0 ? defaultChildrenOrder : _c, className = _a.className, style = _a.style;
    var isIcon = (0, react_1.useMemo)(function () { return icon !== undefined; }, [icon]);
    var isBadge = (0, react_1.useMemo)(function () { return badge !== undefined && String(badge).length > 0; }, [badge]);
    var isText = (0, react_1.useMemo)(function () { return text !== undefined && text.length > 0; }, [text]);
    var isChildren = (0, react_1.useMemo)(function () { return children !== undefined && children !== false; }, [children]);
    (0, react_1.useEffect)(function () {
        if (!isIcon && !isBadge && !isText && !isChildren) {
            console.warn('[Status.Template]: Status template with no content was provided. This element will show a placeholder.');
        }
    }, [isIcon, isBadge, isText, isChildren]);
    return (0, jsx_runtime_1.jsxs)(css_1.StyledStack, __assign({}, { id: 'statusHelper', style: style, className: className, reverse: reverse.toString() }, { children: [isIcon && (0, jsx_runtime_1.jsx)(css_1.StyledIcon, __assign({}, { id: 'sh.icon' }, { children: icon })), isBadge && (0, jsx_runtime_1.jsx)(css_1.StyledBadge, __assign({}, { id: 'sh.badge' }, { children: String(badge) })), isText && (0, jsx_runtime_1.jsx)(css_1.StyledText, __assign({}, { id: 'sh.text', variant: 'caption' }, { children: text })), isChildren && (0, jsx_runtime_1.jsx)(css_1.StyledChildren, __assign({}, { order: childrenOrder }, { children: children })), !isIcon && !isBadge && !isText && !isChildren && (0, jsx_runtime_1.jsx)(material_1.Tooltip, __assign({ arrow: true, placement: 'right', title: "This status element is showing a placeholder because no content was provided." }, { children: (0, jsx_runtime_1.jsx)(QuestionMark_1.default, { color: "disabled", style: { fontSize: '16px' } }) }))] }));
});
