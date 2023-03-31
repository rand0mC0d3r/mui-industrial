import { useContext } from 'react';
import DataProvider from '../Store';
export var useSnackbars = function () {
    var snackbar = useContext(DataProvider).snackbar;
    return snackbar;
};
