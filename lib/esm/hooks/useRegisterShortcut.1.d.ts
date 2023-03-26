export declare const useRegisterShortcut: () => {
    handleKeyboardRegister: ({ id, label, ascii, char, altKey, ctrlKey, metaKey, shiftKey, onTrigger, insensitive }: import("../index.types").ShortcutObject) => void;
    handleKeyboardsRegister: ([{ id, label, ascii, char, altKey, ctrlKey, metaKey, shiftKey, onTrigger, insensitive }]: import("../index.types").ShortcutObject[]) => void;
    handleKeyboardUpdate: (id: string, shortcutObject: import("../index.types").ShortcutObject) => void;
    handleKeyboardDeRegister: (id: string) => void;
    handleKeyboardsDeRegister: (ids: string[]) => void;
};
