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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
var MyLocationOutlined_1 = __importDefault(require("@mui/icons-material/MyLocationOutlined"));
var material_1 = require("@mui/material");
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var Store_1 = __importStar(require("../Store"));
var componentId = 'snackBar';
function default_1(_a) {
    var severity = _a.severity, message = _a.message, onClick = _a.onClick, _b = _a.autoHideDuration, autoHideDuration = _b === void 0 ? 6000 : _b, actions = _a.actions, source = _a.source, code = _a.code;
    var _c = (0, react_1.useContext)(Store_1.default), snackbar = _c.snackbar, handleSnackbarAnnouncement = _c.handleSnackbarAnnouncement;
    var _d = (0, react_1.useState)(), ownId = _d[0], setOwnId = _d[1];
    var _e = (0, react_1.useState)(false), announced = _e[0], setAnnounced = _e[1];
    var _f = (0, react_1.useState)(null), snackbarObject = _f[0], setSnackbarObject = _f[1];
    var _g = (0, react_1.useState)(null), elementFound = _g[0], setElementFound = _g[1];
    var callbackHandleStatusAnnouncement = (0, react_1.useCallback)(function () {
        handleSnackbarAnnouncement({ ownId: ownId, actions: actions, source: source, severity: severity, message: message, code: code, autoHideDuration: autoHideDuration });
    }, [severity, ownId, message, actions, source, code, autoHideDuration, handleSnackbarAnnouncement]);
    (0, react_1.useLayoutEffect)(function () {
        if (snackbarObject !== null && ownId) {
            setElementFound(document.getElementById((0, Store_1.composeDomId)(componentId, [ownId, 'customAction'])));
        }
    }, [snackbarObject, ownId]);
    (0, react_1.useEffect)(function () {
        if (ownId && !announced && snackbarObject === null) {
            callbackHandleStatusAnnouncement();
            setAnnounced(true);
        }
    }, [ownId, announced, snackbarObject, callbackHandleStatusAnnouncement]);
    (0, react_1.useEffect)(function () {
        if (ownId && announced) {
            var snackbarObjectFound = snackbar.find(function (_a) {
                var uniqueId = _a.uniqueId;
                return uniqueId === ownId;
            });
            if (snackbarObjectFound) {
                setSnackbarObject(snackbarObjectFound);
            }
        }
    }, [snackbar, announced, ownId, snackbarObject]);
    (0, react_1.useEffect)(function () { setOwnId((Math.random() + 1).toString(36).substring(7)); }, []);
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: snackbarObject !== null && onClick && !!ownId && elementFound && (0, react_dom_1.createPortal)((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(material_1.Tooltip, __assign({ title: "Take action ..." }, { children: (0, jsx_runtime_1.jsx)(material_1.IconButton, __assign({ onClick: onClick, color: "inherit", size: "small" }, { children: (0, jsx_runtime_1.jsx)(MyLocationOutlined_1.default, { color: "inherit" }) })) })) }), elementFound) });
}
exports.default = default_1;
