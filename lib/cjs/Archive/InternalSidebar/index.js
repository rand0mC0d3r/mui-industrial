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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var material_1 = require("@mui/material");
var react_1 = require("react");
var Store_1 = __importStar(require("../../Store"));
var css_1 = require("./css");
exports.default = (function (_a) {
    var secondary = _a.secondary;
    var sidebarIndex = (0, react_1.useContext)(Store_1.default).settings.sidebarIndex;
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)(material_1.Paper, __assign({ style: { alignSelf: 'stretch', display: 'flex' }, elevation: 1 }, { children: [(0, jsx_runtime_1.jsxs)(css_1.StyledSidebar, { children: [(0, jsx_runtime_1.jsx)(css_1.StyledActionsTall, { id: (0, Store_1.composeDomId)('sidebar', ['actions']) }), (0, jsx_runtime_1.jsx)(css_1.StyledActions, { id: (0, Store_1.composeDomId)('sidebar', ['additional']) })] }), sidebarIndex && (0, jsx_runtime_1.jsx)(css_1.StyledPaper, { elevation: 0, square: true, id: (0, Store_1.composeDomId)('sidebar', ['panel']) })] })) });
});
