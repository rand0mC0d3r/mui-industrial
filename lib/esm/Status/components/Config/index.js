import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
/* eslint-disable no-unused-vars */
import { useContext, useRef, useEffect } from 'react';
import DataProvider from '../../../Store';
export default (function (_a) {
    var keyboards = _a.keyboards, commands = _a.commands;
    var _b = useContext(DataProvider), handleKeyboardsRegister = _b.handleKeyboardsRegister, handleCommandsRegister = _b.handleCommandsRegister, handleKeyboardsDeRegister = _b.handleKeyboardsDeRegister, handleCommandsDeRegister = _b.handleCommandsDeRegister;
    var commandsRef = useRef(commands);
    var keyboardsRef = useRef(keyboards);
    useEffect(function () {
        handleKeyboardsRegister(keyboards);
        handleCommandsRegister(commands);
        return function () {
            handleKeyboardsDeRegister(keyboards.map(function (_a) {
                var id = _a.id;
                return id;
            }));
            handleCommandsDeRegister(commands.map(function (_a) {
                var id = _a.id;
                return id;
            }));
        };
    }, [commands, handleCommandsDeRegister, handleCommandsRegister, handleKeyboardsDeRegister, handleKeyboardsRegister, keyboards]);
    return _jsx(_Fragment, {});
});
