import { useContext } from 'react';
import DataProvider from '../Store';
export var useSnackbars = function () {
    return {
        handleSnackbarRegister: useContext(DataProvider).handleSnackbarRegister,
        handleSnackbarCleaning: useContext(DataProvider).handleSnackbarCleaning,
        snackbars: useContext(DataProvider).snackbars,
    };
};
