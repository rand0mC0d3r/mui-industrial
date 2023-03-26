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
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { IconButton, Tooltip } from '@mui/material';
import { cloneElement } from 'react';
export default (function (_a) {
    var actions = _a.actions, _b = _a.fontSize, fontSize = _b === void 0 ? '20px' : _b;
    return _jsx(_Fragment, { children: actions && actions
            .filter(function (_, i) { return i < 3; })
            .map(function (action) { return _jsx(Tooltip, __assign({ arrow: true }, { title: action === null || action === void 0 ? void 0 : action.tooltip }, { children: _jsx("span", { children: _jsx(IconButton, __assign({ size: "small" }, { onClick: function () { return action === null || action === void 0 ? void 0 : action.onClick(); }, disabled: action === null || action === void 0 ? void 0 : action.disabled }, { children: cloneElement(action === null || action === void 0 ? void 0 : action.icon, { style: { fontSize: fontSize }, color: 'action' }) })) }) }), action === null || action === void 0 ? void 0 : action.tooltip); }) });
});
