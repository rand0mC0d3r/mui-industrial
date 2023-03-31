"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRegisterSnackbar = void 0;
var react_1 = require("react");
var Store_1 = __importDefault(require("../Store"));
var useRegisterSnackbar = function () {
    return {
        handleSnackbarRegister: (0, react_1.useContext)(Store_1.default).handleSnackbarRegister,
        handleSnackbarCleaning: (0, react_1.useContext)(Store_1.default).handleSnackbarCleaning,
    };
};
exports.useRegisterSnackbar = useRegisterSnackbar;
