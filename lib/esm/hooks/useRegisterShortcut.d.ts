export declare const useRegisterShortcut: () => {
    handleKeyboardRegister: ({ id, label, ascii, char, shiftKey, ctrlKey, altKey, metaKey, onTrigger, insensitive }: import("../index.types").ShortcutObject) => void;
    handleKeyboardsRegister: ([{ id, label, ascii, char, shiftKey, ctrlKey, altKey, metaKey, onTrigger, insensitive }]: import("../index.types").ShortcutObject[]) => void;
    handleKeyboardDeRegister: (id: string) => void;
    handleKeyboardsDeRegister: (ids: string[]) => void;
};
