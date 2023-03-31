"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useConfig = void 0;
var react_1 = require("react");
var Store_1 = __importDefault(require("../Store"));
var logger_1 = require("../utils/logger");
var useConfig = function () {
    var handleKeyboardsRegister = (0, react_1.useContext)(Store_1.default).handleKeyboardsRegister;
    var handleCommandsRegister = (0, react_1.useContext)(Store_1.default).handleCommandsRegister;
    var handleKeyboardsDeRegister = (0, react_1.useContext)(Store_1.default).handleKeyboardsDeRegister;
    var handleCommandsDeRegister = (0, react_1.useContext)(Store_1.default).handleCommandsDeRegister;
    return {
        config: function (_a) {
            var keyboards = _a.keyboards, commands = _a.commands;
            try {
                if (keyboards && (keyboards === null || keyboards === void 0 ? void 0 : keyboards.length) > 0) {
                    handleKeyboardsRegister(keyboards);
                }
                if (commands && (commands === null || commands === void 0 ? void 0 : commands.length) > 0) {
                    handleCommandsRegister(commands);
                }
            }
            catch (error) {
                (0, logger_1.logPackage)(error);
            }
        },
        configUnmount: function (_a) {
            var keyboards = _a.keyboards, commands = _a.commands;
            try {
                if (keyboards && (keyboards === null || keyboards === void 0 ? void 0 : keyboards.length) > 0) {
                    handleKeyboardsDeRegister(keyboards.map(function (_a) {
                        var id = _a.id;
                        return id;
                    }));
                }
                if (commands && (commands === null || commands === void 0 ? void 0 : commands.length) > 0) {
                    handleCommandsDeRegister(commands.map(function (_a) {
                        var id = _a.id;
                        return id;
                    }));
                }
            }
            catch (error) {
                (0, logger_1.logPackage)(error);
            }
        },
    };
};
exports.useConfig = useConfig;
