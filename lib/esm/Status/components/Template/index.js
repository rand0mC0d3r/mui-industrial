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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { Tooltip } from '@mui/material';
import { useEffect, useMemo } from 'react';
import { StyledBadge, StyledChildren, StyledIcon, StyledStack, StyledText } from './css';
var defaultChildrenOrder = 3;
export default (function (_a) {
    var icon = _a.icon, text = _a.text, badge = _a.badge, children = _a.children, _b = _a.reverse, reverse = _b === void 0 ? false : _b, _c = _a.childrenOrder, childrenOrder = _c === void 0 ? defaultChildrenOrder : _c, className = _a.className, style = _a.style;
    var isIcon = useMemo(function () { return icon !== undefined; }, [icon]);
    var isBadge = useMemo(function () { return badge !== undefined && String(badge).length > 0; }, [badge]);
    var isText = useMemo(function () { return text !== undefined && text.length > 0; }, [text]);
    var isChildren = useMemo(function () { return children !== undefined && children !== false; }, [children]);
    useEffect(function () {
        if (!isIcon && !isBadge && !isText && !isChildren) {
            console.warn('[Status.Template]: Status template with no content was provided. This element will show a placeholder.');
        }
    }, [isIcon, isBadge, isText, isChildren]);
    return _jsxs(StyledStack, __assign({}, { id: 'statusHelper', style: style, className: className, reverse: reverse.toString() }, { children: [isIcon && _jsx(StyledIcon, __assign({}, { id: 'sh.icon' }, { children: icon })), isBadge && _jsx(StyledBadge, __assign({}, { id: 'sh.badge' }, { children: String(badge) })), isText && _jsx(StyledText, __assign({}, { id: 'sh.text', variant: 'caption' }, { children: text })), isChildren && _jsx(StyledChildren, __assign({}, { order: childrenOrder }, { children: children })), !isIcon && !isBadge && !isText && !isChildren && _jsx(Tooltip, __assign({ arrow: true, placement: 'right', title: "This status element is showing a placeholder because no content was provided." }, { children: _jsx(QuestionMarkIcon, { color: "disabled", style: { fontSize: '16px' } }) }))] }));
});
