"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var InternalAlert_1 = __importDefault(require("../../Api/InternalAlert"));
var Store_1 = __importDefault(require("../../Store"));
exports.default = (function (_a) {
    var snackbarId = _a.snackbarId;
    var snackbars = (0, react_1.useContext)(Store_1.default).snackbars;
    var _b = (0, react_1.useState)(), snackbarObject = _b[0], setSnackbarObject = _b[1];
    (0, react_1.useEffect)(function () {
        setSnackbarObject(snackbars.find(function (_a) {
            var id = _a.id;
            return id === snackbarId;
        }));
    }, [snackbarId, snackbars]);
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: snackbarId
            && snackbarObject
            && (0, jsx_runtime_1.jsx)(InternalAlert_1.default, { isRemoveFlag: true, autoHideDuration: snackbarObject.autoHideDuration, actions: snackbarObject.actions, severity: snackbarObject.severity, code: snackbarObject.code, id: snackbarObject.id, message: snackbarObject.message }) });
});
