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
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
var styles_1 = require("@mui/material/styles");
var react_1 = require("react");
var Store_1 = __importDefault(require("../../Store"));
var InternalAlert_1 = __importDefault(require("../InternalAlert"));
var SWrapper = (0, styles_1.styled)('div')(function () { return ({
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    width: '550px',
}); });
function default_1() {
    var snackbar = (0, react_1.useContext)(Store_1.default).snackbar;
    return (0, jsx_runtime_1.jsx)(SWrapper, { children: snackbar.map(function (_a) {
            var uniqueId = _a.uniqueId, severity = _a.severity, message = _a.message, source = _a.source, actions = _a.actions, code = _a.code;
            return ((0, jsx_runtime_1.jsx)(InternalAlert_1.default, __assign({}, { uniqueId: uniqueId, actions: actions, severity: severity, source: source, message: message, code: code }), uniqueId));
        }) });
}
exports.default = default_1;
