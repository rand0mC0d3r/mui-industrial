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
var material_1 = require("@mui/material");
var react_1 = require("react");
exports.default = (function (_a) {
    var actions = _a.actions, _b = _a.placement, placement = _b === void 0 ? 'top' : _b, _c = _a.fontSize, fontSize = _c === void 0 ? '20px' : _c;
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: actions && actions
            .filter(function (_, i) { return i < 3; })
            .map(function (action) { return (0, jsx_runtime_1.jsx)(material_1.Tooltip, __assign({ arrow: true }, { placement: placement, title: action === null || action === void 0 ? void 0 : action.tooltip }, { children: (0, jsx_runtime_1.jsx)("span", { children: (0, jsx_runtime_1.jsx)(material_1.IconButton, __assign({ size: "small" }, { onClick: function () { return action === null || action === void 0 ? void 0 : action.onClick(); }, disabled: action === null || action === void 0 ? void 0 : action.disabled }, { children: (0, react_1.cloneElement)(action === null || action === void 0 ? void 0 : action.icon, { style: { fontSize: fontSize }, color: 'action' }) })) }) }), action === null || action === void 0 ? void 0 : action.tooltip); }) });
});
