export declare const useRegisterShortcut: () => {
    handleKeyboardRegister: ({ id, label, ascii, char, altKey, ctrlKey, metaKey, shiftKey, onTrigger, insensitive }: import("..").ShortcutObject) => void;
    handleKeyboardsRegister: ([{ id, label, ascii, char, altKey, ctrlKey, metaKey, shiftKey, onTrigger, insensitive }]: import("..").ShortcutObject[]) => void;
    handleKeyboardUpdate: (id: string, shortcutObject: import("..").ShortcutObject) => void;
    handleKeyboardDeRegister: (id: string) => void;
    handleKeyboardsDeRegister: (ids: string[]) => void;
    handleKeyboardGetLabel: (id: string) => string | undefined;
    handleKeyboardTrigger: (id: string) => void;
};
