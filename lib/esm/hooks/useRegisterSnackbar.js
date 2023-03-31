import { useContext } from 'react';
import DataProvider from '../Store';
export var useRegisterSnackbar = function () {
    return {
        handleSnackbarRegister: useContext(DataProvider).handleSnackbarRegister,
        handleSnackbarCleaning: useContext(DataProvider).handleSnackbarCleaning,
    };
};
