export declare const useRegisterCommand: () => {
    handleCommandsRegister: ([{ id, shortcutId, label, onTrigger, disabled, hidden, icon, order, tooltip }]: import("../index.types").CommandObject[]) => void;
    handleCommandsDeRegister: (ids: string[]) => void;
};
