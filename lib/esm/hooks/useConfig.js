import { useContext } from 'react';
import DataProvider from '../Store';
export var useConfig = function () {
    var handleKeyboardsRegister = useContext(DataProvider).handleKeyboardsRegister;
    var handleCommandsRegister = useContext(DataProvider).handleCommandsRegister;
    var handleKeyboardsDeRegister = useContext(DataProvider).handleKeyboardsDeRegister;
    var handleCommandsDeRegister = useContext(DataProvider).handleCommandsDeRegister;
    return {
        config: function (_a) {
            var keyboards = _a.keyboards, commands = _a.commands;
            handleKeyboardsRegister(keyboards);
            handleCommandsRegister(commands);
        },
        configUnmount: function (_a) {
            var keyboards = _a.keyboards, commands = _a.commands;
            handleKeyboardsDeRegister(keyboards.map(function (_a) {
                var id = _a.id;
                return id;
            }));
            handleCommandsDeRegister(commands.map(function (_a) {
                var id = _a.id;
                return id;
            }));
        },
    };
};
