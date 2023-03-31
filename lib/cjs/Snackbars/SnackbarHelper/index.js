"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable @typescript-eslint/no-explicit-any */
var react_1 = require("react");
var InternalAlert_1 = __importDefault(require("../../internal/InternalAlert"));
var Store_1 = __importDefault(require("../../Store"));
exports.default = (function (_a) {
    var snackbarId = _a.snackbarId;
    var snackbar = (0, react_1.useContext)(Store_1.default).snackbar;
    var _b = (0, react_1.useState)(), snackbarObject = _b[0], setSnackbarObject = _b[1];
    (0, react_1.useEffect)(function () {
        setSnackbarObject(snackbar.find(function (_a) {
            var id = _a.id;
            return id === snackbarId;
        }));
    }, [snackbarId, snackbar]);
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: snackbarId
            && snackbarObject
            && (0, jsx_runtime_1.jsx)(InternalAlert_1.default, { severity: snackbarObject.severity, code: snackbarObject.code, id: snackbarObject.id, message: snackbarObject.message }) });
});
