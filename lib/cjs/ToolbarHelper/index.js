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
/* eslint-disable @typescript-eslint/no-explicit-any */
var material_1 = require("@mui/material");
function default_1(_a) {
    var tooltip = _a.tooltip, onClick = _a.onClick, icon = _a.icon;
    return (0, jsx_runtime_1.jsx)(material_1.Tooltip, __assign({ title: tooltip }, { children: (0, jsx_runtime_1.jsx)(material_1.IconButton, __assign({ size: "small", onClick: onClick }, { children: icon })) }));
}
exports.default = default_1;
