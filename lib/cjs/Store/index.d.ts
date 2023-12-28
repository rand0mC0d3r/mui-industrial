import React from 'react';
import { CommandObject, ISidebarObject, PlacementPosition, SettingsObject, ShortcutObject, SidebarObject, SnackbarObject, SnackbarsInterface, StatusObject, StatusType } from '../index.types';
export declare const composeDomId: (component: string, detail: string[]) => string;
export declare const packageName = "mui-industrial";
export interface DataContextInterface extends SnackbarsInterface {
    settings: SettingsObject;
    status: StatusObject[];
    sidebars: SidebarObject[];
    commands: CommandObject[];
    snackbars: SnackbarObject[];
    shortcuts: ShortcutObject[];
    updateConsoleActiveId: ({ id }: {
        id?: string;
    }) => void;
    updateIsConsoleOpen: any;
    updateSidebarIndex: any;
    updateIsConsoleClosed: any;
    handleStatusUpdate: any;
    handleSidebarRegister: ({ id, icon, order, additional, tooltip, title, options }: ISidebarObject) => void;
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
    handleSnackbarHideAll: any;
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
declare const IndustrialProvider: ({ slim, expand, hasLock, position, allowRightClick, hasBorder, fullWidth, justifyContent, debug, children, style, size, variant, }: {
    slim?: boolean | undefined;
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
    style?: any;
}) => JSX.Element;
export default DataContext;
export { IndustrialProvider };
