export declare const useRegisterShortcut: () => {
    handleKeyboardAnnouncement: ({ id, label, ascii, char, shiftKey, ctrlKey, metaKey, altKey, insensitive }: import("../index.types").ShortcutObject) => void;
    handleKeyboardDestroy: ({ id }: {
        id: string;
    }) => void;
};
