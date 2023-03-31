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
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var css_1 = require("./css");
exports.default = (function (_a) {
    var icon = _a.icon, text = _a.text, badge = _a.badge, image = _a.image, _b = _a.mask, mask = _b === void 0 ? false : _b, _c = _a.reverse, reverse = _c === void 0 ? false : _c, _d = _a.reverseIcon, reverseIcon = _d === void 0 ? false : _d, children = _a.children, _e = _a.childrenOrder, childrenOrder = _e === void 0 ? 1 : _e, className = _a.className, style = _a.style;
    return (0, jsx_runtime_1.jsxs)(css_1.StyledStack, __assign({}, { id: 'statusHelper', style: style, className: className, reverse: reverse.toString() }, { children: [!!icon && (0, jsx_runtime_1.jsx)(css_1.StyledIcon, __assign({}, { id: 'sh.icon', reverse: reverseIcon.toString() }, { children: icon })), !!children && (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: childrenOrder ? (0, jsx_runtime_1.jsx)(css_1.StyledChildren, __assign({}, { order: childrenOrder }, { children: children })) : children }), !!image && (0, jsx_runtime_1.jsx)(css_1.StyledImage, __assign({}, { id: 'sh.image', alt: '', mask: mask.toString(), src: image })), !!badge && (0, jsx_runtime_1.jsx)(css_1.StyledBadge, __assign({}, { id: 'sh.badge' }, { children: String(badge) })), !!text && (0, jsx_runtime_1.jsx)(css_1.StyledText, __assign({}, { id: 'sh.text', variant: 'caption' }, { children: text }))] }));
});
