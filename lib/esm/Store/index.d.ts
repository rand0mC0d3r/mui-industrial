import React from 'react';
import { CommandObject, ISnackbarObject, PlacementPosition, ShortcutObject, SnackbarObject, StatusObject, StatusType } from '../index.types';
export declare const composeDomId: (component: string, detail: string[]) => string;
export interface DataContextInterface {
    settings: any;
    status: StatusObject[];
    commands: CommandObject[];
    snackbar: SnackbarObject[];
    shortcuts: ShortcutObject[];
    updateConsoleActiveId: ({ id }: {
        id?: string;
    }) => void;
    updateIsConsoleOpen: any;
    updateIsConsoleClosed: any;
    handleStatusUpdate: any;
    handleKeyboardRegister: ({ id, label, ascii, char, altKey, ctrlKey, metaKey, shiftKey, onTrigger, insensitive }: ShortcutObject) => void;
    handleKeyboardsRegister: ([{ id, label, ascii, char, altKey, ctrlKey, metaKey, shiftKey, onTrigger, insensitive }]: ShortcutObject[]) => void;
    handleKeyboardUpdate: (id: string, shortcutObject: ShortcutObject) => void;
    handleKeyboardTrigger: (id: string) => void;
    handleKeyboardRevert: (id: string) => void;
    handleKeyboardGetLabel: (id: string) => string | undefined;
    handleKeyboardDeRegister: (id: string) => void;
    handleKeyboardsDeRegister: (ids: string[]) => void;
    handleCommandRegister: ({ id, shortcutId, label, onTrigger, disabled, hidden, icon, order, tooltip }: CommandObject) => void;
    handleCommandsRegister: ([{ id, shortcutId, label, onTrigger, disabled, hidden, icon, order, tooltip }]: CommandObject[]) => void;
    handleCallCommand: (id: string) => void;
    handleCommandsDeRegister: (ids: string[]) => void;
    handleStatusAnnouncement: any;
    handleSnackbarCleaning: any;
    handleSnackbarRegister: ({ severity, actions, source, message, code, autoHideDuration }: ISnackbarObject) => void;
    handleStatusDestroy: any;
    handleStatusTypeUpdate: ({ id, type }: {
        id: string;
        type: StatusType;
    }) => void;
    handleStatusConsoleTitleUpdate: ({ id, title }: {
        id: string;
        title?: string;
    }) => void;
    handleStatusVisibilityToggle: any;
    handleStatusKeepOpenToggle: ({ id }: {
        id: string;
    }) => void;
    triggerStatusBarAnnounced: any;
    logDebug: any;
}
declare const DataContext: React.Context<DataContextInterface>;
declare const IndustrialProvider: ({ expand, hasLock, position, allowRightClick, hasBorder, fullWidth, justifyContent, debug, children, style, size, variant, }: {
    expand?: boolean | undefined;
    hasLock?: boolean | undefined;
    position?: PlacementPosition | undefined;
    allowRightClick?: boolean | undefined;
    hasBorder?: boolean | undefined;
    fullWidth?: boolean | undefined;
    justifyContent?: string | undefined;
    debug?: boolean | undefined;
    children?: React.ReactNode;
    size?: "small" | "medium" | "large" | undefined;
    variant?: "default" | "outlined" | undefined;
    style: any;
}) => JSX.Element;
export default DataContext;
export { IndustrialProvider };
