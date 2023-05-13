import React, { CSSProperties, HTMLAttributes, MouseEvent, ReactNode } from 'react';
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
    tooltip: string;
    onClick: () => void;
    disabled?: boolean;
}
export type PopoverActions = [PopoverAction, PopoverAction?, PopoverAction?];
export type StatusConsoleJSXProps = {
    id: string;
    order?: number;
    disabled?: boolean;
    options?: StatusOptionsProps;
    secondary?: boolean;
    tooltip?: ReactNode | string;
    onClick?: (event: MouseEvent<HTMLDivElement>) => void;
    onContextMenu?: (event: MouseEvent<HTMLDivElement>) => void;
    style?: CSSProperties;
    className?: HTMLAttributes<HTMLDivElement>['className'];
    children?: ReactNode;
};
export interface StatusProps {
    id: string;
    order?: number;
    disabled?: boolean;
    highlight?: Highlight;
    options?: StatusOptionsProps;
    secondary?: boolean;
    tooltip?: ReactNode | string;
    onClick?: (e: MouseEvent<HTMLDivElement>) => void;
    onContextMenu?: (e: MouseEvent<HTMLDivElement>) => void;
    style?: CSSProperties;
    className?: HTMLAttributes<HTMLDivElement>['className'];
    children?: JSX.Element | JSX.Element[];
}
export interface StatusPopperJSXProps extends StatusProps {
    options: StatusOptionsProps;
}
export interface ISidebarObject {
    secondary?: boolean;
    order?: number;
    id: string;
    icon?: any;
    tooltip?: string;
    title?: string;
    children: React.ReactNode;
    options?: any;
}
export interface SidebarObjectProps extends ISidebarObject {
    icon: any;
}
export interface SidebarObject extends ISidebarObject {
    visible: boolean;
}
export interface StatusObject {
    visible: boolean;
    type: StatusTypes;
    secondary: boolean;
    index: number;
    order: number;
    options: StatusOptionsProps;
    keepOpen: boolean;
    uniqueId: string;
    ownId: string;
    title?: string;
    children: React.ReactNode;
}
export interface IShortcutObject {
    id: string;
    label: string;
    ascii?: number | null;
    char: string | null;
    altKey?: boolean;
    ctrlKey?: boolean;
    metaKey?: boolean;
    shiftKey?: boolean;
    insensitive?: boolean;
    onTrigger: any;
}
export interface ShortcutObject extends IShortcutObject {
    original?: ShortcutObject;
}
export interface ISnackbarObject {
    source?: string;
    actions?: any;
    message: string;
    code?: string;
    autoHideDuration?: number;
    severity?: Severity;
}
export interface SnackbarObject extends ISnackbarObject {
    id: string;
    open: boolean;
    source: string;
    actions: any;
    message: string;
    autoHideDuration: number;
    code: string;
    severity: Severity;
}
export interface CommandObject {
    id: string;
    shortcutId?: string;
    label: string;
    icon?: any;
    tooltip?: string;
    onTrigger?: any;
    disabled?: boolean;
    hidden?: boolean;
    order?: number;
}
export interface StatusPopperProps {
    elevation?: number;
    width?: PopperWidth;
    height?: PopperHeight;
    onClose?: any;
    hasArrow?: boolean;
    hasDecoration?: boolean;
    hasToolbar?: boolean;
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
    actions?: PopoverActions;
    hasToolbar?: boolean;
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
    sidebarIndex: number;
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
export declare enum PopperHeight {
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
