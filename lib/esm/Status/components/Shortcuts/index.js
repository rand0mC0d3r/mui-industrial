import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { useEffect } from 'react';
import { useRegisterCommand } from '../../../hooks/useRegisterCommand';
import { useRegisterShortcut } from '../../../hooks/useRegisterShortcut';
export default (function (_a) {
    var keyboards = _a.keyboards, commands = _a.commands;
    var _b = useRegisterShortcut(), handleKeyboardsRegister = _b.handleKeyboardsRegister, handleKeyboardsDeRegister = _b.handleKeyboardsDeRegister;
    var _c = useRegisterCommand(), handleCommandsDeRegister = _c.handleCommandsDeRegister, handleCommandsRegister = _c.handleCommandsRegister;
    useEffect(function () {
        if (keyboards) {
            handleKeyboardsRegister(keyboards);
        }
        if (commands) {
            handleCommandsRegister(commands);
        }
        return function () {
            if (keyboards) {
                handleKeyboardsDeRegister(keyboards.map(function (_a) {
                    var id = _a.id;
                    return id;
                }));
            }
            if (commands) {
                handleCommandsDeRegister(commands.map(function (_a) {
                    var id = _a.id;
                    return id;
                }));
            }
        };
    }, [keyboards, commands, handleKeyboardsRegister, handleCommandsRegister, handleKeyboardsDeRegister, handleCommandsDeRegister]);
    return _jsx(_Fragment, {});
});
