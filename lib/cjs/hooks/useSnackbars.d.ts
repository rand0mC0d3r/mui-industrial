export declare const useSnackbars: () => {
    handleSnackbarRegister: ({ actions, autoHideDuration, code, message, severity, source, }: import("../index.types").ISnackbarObject) => void;
    handleSnackbarCleaning: any;
    snackbars: {
        id: string;
    }[];
};
