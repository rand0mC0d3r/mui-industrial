"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRegisterShortcut = void 0;
var react_1 = require("react");
var Store_1 = __importDefault(require("../Store"));
var useRegisterShortcut = function () {
    return {
        handleKeyboardRegister: (0, react_1.useContext)(Store_1.default).handleKeyboardRegister,
        handleKeyboardsRegister: (0, react_1.useContext)(Store_1.default).handleKeyboardsRegister,
        handleKeyboardUpdate: (0, react_1.useContext)(Store_1.default).handleKeyboardUpdate,
        handleKeyboardDeRegister: (0, react_1.useContext)(Store_1.default).handleKeyboardDeRegister,
        handleKeyboardsDeRegister: (0, react_1.useContext)(Store_1.default).handleKeyboardsDeRegister,
        handleKeyboardGetLabel: (0, react_1.useContext)(Store_1.default).handleKeyboardGetLabel,
    };
};
exports.useRegisterShortcut = useRegisterShortcut;
