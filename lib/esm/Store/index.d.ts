import React from 'react';
import { PlacementPosition, Severity, ShortcutObject, SnackbarObject, StatusObject, StatusType } from '../index.types';
export declare const composeDomId: (component: string, detail: string[]) => string;
export interface DataContextInterface {
    settings: any;
    status: StatusObject[];
    snackbar: SnackbarObject[];
    shortcuts: ShortcutObject[];
    updateConsoleActiveId: ({ id }: {
        id?: string;
    }) => void;
    updateIsConsoleOpen: any;
    updateIsConsoleClosed: any;
    handleStatusUpdate: any;
    handleKeyboardAnnouncement: ({ id, label, ascii, char, shiftKey, ctrlKey, metaKey, altKey, insensitive }: ShortcutObject) => void;
    handleCallKeyboard: ({ id }: {
        id: string;
    }) => void;
    handleKeyboardDestroy: ({ id }: {
        id: string;
    }) => void;
    handleStatusAnnouncement: any;
    handleSnackbarAnnouncement: ({ ownId, severity, actions, source, message, code, autoHideDuration }: {
        ownId: string;
        actions: any;
        source?: string;
        severity: Severity;
        message: any;
        code?: string;
        autoHideDuration: number;
    }) => void;
    handleStatusDestroy: any;
    handleSnackbarDestroy: any;
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
