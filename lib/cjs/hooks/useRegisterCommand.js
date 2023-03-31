"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRegisterCommand = void 0;
var react_1 = require("react");
var Store_1 = __importDefault(require("../Store"));
var useRegisterCommand = function () {
    return {
        handleCommandsRegister: (0, react_1.useContext)(Store_1.default).handleCommandsRegister,
        handleCommandsDeRegister: (0, react_1.useContext)(Store_1.default).handleCommandsDeRegister,
    };
};
exports.useRegisterCommand = useRegisterCommand;
