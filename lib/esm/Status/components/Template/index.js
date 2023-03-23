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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { StyledBadge, StyledChildren, StyledIcon, StyledImage, StyledStack, StyledText } from './css';
export default (function (_a) {
    var icon = _a.icon, text = _a.text, badge = _a.badge, image = _a.image, _b = _a.mask, mask = _b === void 0 ? false : _b, _c = _a.reverse, reverse = _c === void 0 ? false : _c, _d = _a.reverseIcon, reverseIcon = _d === void 0 ? false : _d, children = _a.children, _e = _a.childrenOrder, childrenOrder = _e === void 0 ? 1 : _e, className = _a.className, style = _a.style;
    return _jsxs(StyledStack, __assign({}, { id: 'statusHelper', style: style, className: className, reverse: reverse.toString() }, { children: [!!icon && _jsx(StyledIcon, __assign({}, { id: 'sh.icon', reverse: reverseIcon.toString() }, { children: icon })), !!children && _jsx(_Fragment, { children: childrenOrder ? _jsx(StyledChildren, __assign({}, { order: childrenOrder }, { children: children })) : children }), !!image && _jsx(StyledImage, __assign({}, { id: 'sh.image', alt: '', mask: mask.toString(), src: image })), !!badge && _jsx(StyledBadge, __assign({}, { id: 'sh.badge' }, { children: String(badge) })), !!text && _jsx(StyledText, __assign({}, { id: 'sh.text', variant: 'caption' }, { children: text }))] }));
});