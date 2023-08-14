export declare const useSnackbars: () => {
    handleSnackbarRegister: ({ actions, autoHideDuration, code, message, severity, source, }: import("../index.types").ISnackbarObject) => void;
    handleSnackbarCleaning: () => void;
    snackbars: {
        id: string;
    }[];
};
