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
exports.StatusCore = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var material_1 = require("@mui/material");
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var Store_1 = __importStar(require("../../../../Store"));
exports.StatusCore = (0, react_1.forwardRef)(function (props, ref) {
    var _a = props, id = _a.id, icon = _a.icon, tooltip = _a.tooltip, children = _a.children, additional = _a.additional;
    var _b = (0, react_1.useContext)(Store_1.default), handleSidebarRegister = _b.handleSidebarRegister, sidebars = _b.sidebars, updateSidebarIndex = _b.updateSidebarIndex;
    var sidebarIndex = (0, react_1.useContext)(Store_1.default).settings.sidebarIndex;
    var _c = (0, react_1.useState)(), ownId = _c[0], setOwnId = _c[1];
    var _d = (0, react_1.useState)(null), sidebarObject = _d[0], setSidebarObject = _d[1];
    var _e = (0, react_1.useState)(null), elementFoundActions = _e[0], setElementFoundActions = _e[1];
    var _f = (0, react_1.useState)(null), elementFoundAdditional = _f[0], setElementFoundAdditional = _f[1];
    var _g = (0, react_1.useState)(null), elementFoundPanel = _g[0], setElementFoundPanel = _g[1];
    var callbackHandleSidebarAnnouncement = (0, react_1.useCallback)(function () {
        handleSidebarRegister({ id: id, children: children, additional: additional });
    }, [id, children, additional, handleSidebarRegister]);
    (0, react_1.useEffect)(function () {
        if (id && ownId && sidebarObject === null && !sidebars.some(function (sidebar) { return id === sidebar.id; })) {
            callbackHandleSidebarAnnouncement();
        }
    }, [id, ownId, sidebarObject, sidebars, callbackHandleSidebarAnnouncement]);
    (0, react_1.useEffect)(function () {
        var sidebarObjectFound = sidebars.find(function (sidebar) { return id === sidebar.id; });
        if ((sidebarObject === null || (sidebarObject === null || sidebarObject === void 0 ? void 0 : sidebarObject.visible) !== (sidebarObjectFound === null || sidebarObjectFound === void 0 ? void 0 : sidebarObjectFound.visible)) && sidebarObjectFound) {
            setSidebarObject(sidebarObjectFound);
        }
    }, [sidebars, id, sidebarObject]);
    (0, react_1.useEffect)(function () {
        if (sidebarObject !== null) {
            setElementFoundActions(document.getElementById((0, Store_1.composeDomId)('sidebar', ['actions'])) || null);
            setElementFoundAdditional(document.getElementById((0, Store_1.composeDomId)('sidebar', ['additional'])) || null);
            setElementFoundPanel(document.getElementById((0, Store_1.composeDomId)('sidebar', ['panel'])) || null);
        }
    }, [sidebarObject]);
    (0, react_1.useEffect)(function () {
        setOwnId((Math.random() + 1).toString(36).substring(7));
    }, []);
    (0, react_1.useEffect)(function () { if (!id) {
        console.error('Please define an id for the status bar item');
    } }, [id]);
    var renderAction = (0, jsx_runtime_1.jsx)(material_1.Tooltip, __assign({ title: tooltip, arrow: true, placement: 'right' }, { children: (0, jsx_runtime_1.jsx)(material_1.Button, __assign({ ref: ref, onClick: function () { return updateSidebarIndex(id); }, variant: "text", style: { minWidth: 'unset' } }, { children: (0, react_1.cloneElement)(icon, {
                style: { fontSize: '28px' },
                color: id === sidebarIndex ? 'primary' : 'action',
            }) })) }), id);
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (sidebarObject !== null && !!id && sidebarObject.visible && children)
            && (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(!additional && elementFoundActions) && (0, react_dom_1.createPortal)(renderAction, elementFoundActions), (additional && elementFoundAdditional) && (0, react_dom_1.createPortal)(renderAction, elementFoundAdditional), elementFoundPanel && sidebarIndex === id && (0, react_dom_1.createPortal)((sidebarObject.visible && children) && children, elementFoundPanel)] }) });
});
exports.default = exports.StatusCore;
