"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSnackbars = void 0;
var react_1 = require("react");
var Store_1 = __importDefault(require("../Store"));
var useSnackbars = function () {
    return {
        handleSnackbarRegister: (0, react_1.useContext)(Store_1.default).handleSnackbarRegister,
        handleSnackbarCleaning: (0, react_1.useContext)(Store_1.default).handleSnackbarCleaning,
        snackbars: (0, react_1.useContext)(Store_1.default).snackbars
            .map(function (snackbar) { return ({ id: snackbar.id }); }),
    };
};
exports.useSnackbars = useSnackbars;
