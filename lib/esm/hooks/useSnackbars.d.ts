import { SnackbarObject } from '../index.types';
export declare const useSnackbars: () => {
    handleSnackbarRegister: ({ severity, actions, source, message, code, autoHideDuration }: import("../index.types").ISnackbarObject) => void;
    handleSnackbarCleaning: () => void;
    snackbars: SnackbarObject[];
};
