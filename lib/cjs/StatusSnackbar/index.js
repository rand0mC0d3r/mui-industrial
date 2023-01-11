"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
var react_1 = require("react");
var Store_1 = __importDefault(require("../Store"));
function default_1(_a) {
    var severity = _a.severity, message = _a.message, _b = _a.autoHideDuration, autoHideDuration = _b === void 0 ? 6000 : _b, actions = _a.actions, source = _a.source, code = _a.code;
    var _c = (0, react_1.useContext)(Store_1.default), snackbar = _c.snackbar, handleSnackbarAnnouncement = _c.handleSnackbarAnnouncement;
    var _d = (0, react_1.useState)(), ownId = _d[0], setOwnId = _d[1];
    var _e = (0, react_1.useState)(false), announced = _e[0], setAnnounced = _e[1];
    var _f = (0, react_1.useState)(null), snackbarObject = _f[0], setSnackbarObject = _f[1];
    var callbackHandleStatusAnnouncement = (0, react_1.useCallback)(function () {
        handleSnackbarAnnouncement({ ownId: ownId, actions: actions, source: source, severity: severity, message: message, code: code, autoHideDuration: autoHideDuration });
    }, [severity, ownId, message, actions, source, code, autoHideDuration, handleSnackbarAnnouncement]);
    (0, react_1.useEffect)(function () {
        if (ownId && announced) {
            var snackbarObjectFound = snackbar.find(function (_a) {
                var uniqueId = _a.uniqueId;
                return uniqueId === ownId;
            });
            console.log('snackbarObjectFound', snackbarObjectFound);
            if (snackbarObjectFound) {
                setSnackbarObject(snackbarObjectFound);
            }
        }
    }, [snackbar, announced, ownId, snackbarObject]);
    (0, react_1.useEffect)(function () {
        if (ownId && !announced && snackbarObject === null) {
            console.log('announcing snackbar', ownId);
            setAnnounced(true);
            callbackHandleStatusAnnouncement();
        }
    }, [ownId, announced, snackbarObject, callbackHandleStatusAnnouncement]);
    (0, react_1.useEffect)(function () { setOwnId((Math.random() + 1).toString(36).substring(7)); }, []);
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {});
}
exports.default = default_1;
