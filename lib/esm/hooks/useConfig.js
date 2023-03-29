import { useContext } from 'react';
import DataProvider from '../Store';
import { logPackage } from '../utils/logger';
export var useConfig = function () {
    var handleKeyboardsRegister = useContext(DataProvider).handleKeyboardsRegister;
    var handleCommandsRegister = useContext(DataProvider).handleCommandsRegister;
    var handleKeyboardsDeRegister = useContext(DataProvider).handleKeyboardsDeRegister;
    var handleCommandsDeRegister = useContext(DataProvider).handleCommandsDeRegister;
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
                logPackage(error);
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
                logPackage(error);
            }
        },
    };
};
