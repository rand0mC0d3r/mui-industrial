import React, { ReactNode } from 'react';
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
export interface SnackbarObject {
    uniqueId: string;
    open: boolean;
    source: string;
    actions: any;
    message: string;
    code: string;
    autoHideDuration: number;
    severity: 'success' | 'info' | 'warning' | 'error';
}
export interface StatusPanelProps {
    elevation?: number;
    onClose?: any;
    actions?: PopoverActions;
    hasToolbar?: boolean;
    hasDecoration?: boolean;
}
export interface StatusOptionsProps {
    as?: StatusType;
    panel?: StatusPanelProps;
    content?: ReactNode;
    title?: string;
}
export interface SettingsObject {
    statusBarAnnounced: boolean;
    allowRightClick: boolean;
    justifyContent: string;
    variant: 'default' | 'outlined';
    position: any;
    expand: any;
    upperBar: boolean;
    debug: boolean;
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
    PANEL = "panel",
    CONSOLE = "console"
}
export declare enum PlacementPosition {
    Top = "top",
    Bottom = "bottom"
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
