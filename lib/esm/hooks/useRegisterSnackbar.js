import { useContext } from 'react';
import DataProvider from '../Store';
export var useRegisterSnackbar = function () {
    return {
        handleSnackbarRegister: useContext(DataProvider).handleSnackbarRegister,
        handleSnackbarCleaning: useContext(DataProvider).handleSnackbarCleaning,
        // handleKeyboardsRegister: useContext(DataProvider).handleKeyboardsRegister as DataContextInterface['handleKeyboardsRegister'],
        // handleKeyboardUpdate: useContext(DataProvider).handleKeyboardUpdate as DataContextInterface['handleKeyboardUpdate'],
        // handleKeyboardDeRegister: useContext(DataProvider).handleKeyboardDeRegister as DataContextInterface['handleKeyboardDeRegister'],
        // handleKeyboardsDeRegister: useContext(DataProvider).handleKeyboardsDeRegister as DataContextInterface['handleKeyboardsDeRegister'],
    };
};
