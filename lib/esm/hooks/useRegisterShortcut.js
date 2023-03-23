import { useContext } from 'react';
import DataProvider from '../Store';
export var useRegisterShortcut = function () {
    return {
        handleKeyboardRegister: useContext(DataProvider).handleKeyboardRegister,
        handleKeyboardsRegister: useContext(DataProvider).handleKeyboardsRegister,
        handleKeyboardDeRegister: useContext(DataProvider).handleKeyboardDeRegister,
        handleKeyboardsDeRegister: useContext(DataProvider).handleKeyboardsDeRegister,
    };
};
