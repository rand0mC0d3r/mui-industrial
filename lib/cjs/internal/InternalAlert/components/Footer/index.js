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
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
var material_1 = require("@mui/material");
var styles_1 = require("@mui/material/styles");
var react_1 = require("react");
var SFooter = (0, styles_1.styled)('div')(function () { return ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: '8px',
}); });
var SActions = (0, styles_1.styled)('div')(function () { return ({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    flex: '1 1 auto',
    justifyContent: 'flex-end',
}); });
var SSource = (0, styles_1.styled)(material_1.Typography)(function () { return ({
    userSelect: 'none',
}); });
exports.default = (function (_a) {
    var actions = _a.actions, source = _a.source, severity = _a.severity;
    return (0, jsx_runtime_1.jsxs)(SFooter, { children: [source && (0, jsx_runtime_1.jsx)(SSource, __assign({ variant: "caption", color: "textSecondary" }, { children: "Source: ".concat(source) })), (0, jsx_runtime_1.jsx)(SActions, { children: actions && actions.map(function (action, i) { return (0, jsx_runtime_1.jsx)(react_1.Fragment, { children: (0, react_1.cloneElement)(action, {
                        color: i === 0 ? severity : 'inherit',
                        size: 'small',
                        style: i === 0 ? {} : { borderStyle: 'dotted' },
                        variant: i === 0 ? 'contained' : 'outlined',
                        disableElevation: true,
                    }) }, "generative_".concat(i)); }) })] });
});
