import { useContext } from 'react';
import DataProvider from '../Store';
export var useRegisterShortcut = function () {
    var handleKeyboardRegister = useContext(DataProvider).handleKeyboardRegister;
    var handleKeyboardsRegister = useContext(DataProvider).handleKeyboardsRegister;
    var handleKeyboardDeRegister = useContext(DataProvider).handleKeyboardDeRegister;
    var handleKeyboardsDeRegister = useContext(DataProvider).handleKeyboardsDeRegister;
    return {
        handleKeyboardRegister: handleKeyboardRegister,
        handleKeyboardsRegister: handleKeyboardsRegister,
        handleKeyboardDeRegister: handleKeyboardDeRegister,
        handleKeyboardsDeRegister: handleKeyboardsDeRegister,
    };
};
