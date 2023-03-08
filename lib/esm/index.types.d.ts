import React, { ReactNode } from 'react';
export declare const domConsoleId = "mui-status-console";
export declare const domStatusBarId = "mui-status-statusBar";
export declare const localStorageKeyHeight = "mui-industrial-console-height";
export type StatusTypes = 'simple' | 'panel' | 'console';
export interface ThemeShape {
    spacing(spacing: number): void;
    shape: {
        borderRadius: number;
    };
    palette: {
        divider: string;
        primary: {
            main: string;
            dark: string;
        };
        secondary: {
            main: string;
            dark: string;
        };
    };
}
export interface PopoverAction {
    icon: any;
    title: string;
    onClick: () => void;
    disabled?: boolean;
}
export type asType = 'simple' | 'panel' | 'console';
export type PopoverActions = [PopoverAction, PopoverAction?, PopoverAction?];
export interface StatusObject {
    visible: boolean;
    type: StatusTypes;
    secondary: boolean;
    index: number;
    keepOpen: boolean;
    uniqueId: string;
    ownId: string;
    title?: string;
    children: React.ReactNode;
}
export interface ShortcutObject {
    id: string;
    open?: boolean;
    shiftKey?: boolean;
    metaKey?: boolean;
    ctrlKey?: boolean;
    altKey?: boolean;
    ascii?: number;
    char?: string;
    label?: string;
    insensitive?: boolean;
    onTrigger?: any;
}
export interface SnackbarObject {
    uniqueId: string;
    open: boolean;
    source: string;
    actions: any;
    message: string;
    code: string;
    autoHideDuration: number;
    severity: Severity;
}
export interface StatusPopperProps {
    elevation?: number;
    width?: PopperWidth;
    onClose?: any;
    actions?: PopoverActions;
    hasArrow?: boolean;
    hasToolbar?: boolean;
    hasDecoration?: boolean;
}
export interface StatusOptionsSeparatorProps {
    end?: boolean;
    start?: boolean;
}
export interface StatusOptionsProps {
    as?: StatusType;
    popper?: StatusPopperProps;
    separators?: StatusOptionsSeparatorProps;
    content?: ReactNode;
    title?: string;
    open?: boolean;
}
export interface SettingsObject {
    statusBarAnnounced: boolean;
    allowRightClick: boolean;
    isHidden: boolean;
    justifyContent: string;
    variant: 'default' | 'outlined';
    position: PlacementPosition;
    expand: any;
    debug: boolean;
    capsLock: boolean;
    hasLock: boolean;
    isConsoleOpen?: boolean;
    isConsoleFixed?: boolean;
    consoleActiveId?: string;
    width: string;
    size: 'small' | 'medium' | 'large';
    hasBorder: boolean;
    fullWidth: boolean;
}
export declare enum Highlight {
    DEFAULT = "default",
    PRIMARY = "primary",
    SECONDARY = "secondary"
}
export declare enum StatusType {
    SIMPLE = "simple",
    POPPER = "popper",
    CONSOLE = "console"
}
export declare enum PlacementPosition {
    TOP = "top",
    BOTTOM = "bottom"
}
export declare enum PopperWidth {
    SM = "sm",
    MD = "md",
    LG = "lg",
    XL = "xl"
}
export declare enum Severity {
    SUCCESS = "success",
    INFO = "info",
    WARNING = "warning",
    ERROR = "error"
}
export declare const Direction: {
    Top: string;
    TopLeft: string;
    TopRight: string;
    Right: string;
    Bottom: string;
    BottomLeft: string;
    BottomRight: string;
    Left: string;
};
