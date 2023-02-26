import React, { ReactNode } from 'react'

export const domConsoleId = 'mui-status-console'
export const domStatusBarId = 'mui-status-statusBar'

/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-explicit-any */
export type StatusTypes = 'simple' | 'panel' | 'console'

export interface ThemeShape {
  spacing(spacing: number): void,
  shape: { borderRadius: number},
  palette: {
    divider: string,
    primary: { main: string, dark: string },
    secondary: { main: string, dark: string }
  }
}

export interface PopoverAction {
  icon: any,
  title: string,
  onClick: () => void,
  disabled?: boolean,
}

export type asType = 'simple' | 'panel' | 'console'

export type PopoverActions = [PopoverAction, PopoverAction?, PopoverAction?]
export interface StatusObject {
  visible: boolean;
  type: StatusTypes,
  secondary: boolean;
  index: number;
	keepOpen: boolean,
  uniqueId: string;
  ownId: string;
  title?: string;
  children: React.ReactNode;
}
export interface ShortcutObject {
  capsLock: boolean;
  shiftKey: boolean;
  ctrlKey: string;
  commandAltKey: any;
  char: string;
  insensitive?: boolean;
}
export interface SnackbarObject {
  uniqueId: string;
  open: boolean;
  source: string;
  actions: any;
  message: string;
  code: string;
  autoHideDuration: number;
  severity: Severity,
}

export interface StatusPopperProps {
  elevation?: number,
  width?: PopperWidth,
  onClose?: any,
  actions?: PopoverActions,
  hasArrow?: boolean,
	hasToolbar?: boolean,
	hasDecoration?: boolean,
}

export interface StatusOptionsSeparatorProps {
  end?: boolean,
  start?: boolean,
}

export interface StatusOptionsProps {
  as?: StatusType,
  popper?: StatusPopperProps,
  separators?: StatusOptionsSeparatorProps,
  content?: ReactNode,
  title?: string,
}

export interface SettingsObject {
  statusBarAnnounced: boolean;
  allowRightClick: boolean;
  isHidden: boolean;
  justifyContent: string;
	variant:'default' | 'outlined';
  position: PlacementPosition;
  expand: any;
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

export enum Highlight {
  DEFAULT = 'default',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export enum StatusType {
  SIMPLE = 'simple',
  POPPER = 'popper',
  CONSOLE = 'console'
}

export enum PlacementPosition {
  TOP = 'top',
  BOTTOM = 'bottom',
}

export enum PopperWidth {
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl',
}

export enum Severity {
  SUCCESS = 'success',
  INFO = 'info',
  WARNING = 'warning',
  ERROR = 'error',
}

export const Direction = {
  Top: 'top',
  TopLeft: 'topLeft',
  TopRight: 'topRight',
  Right: 'right',
  Bottom: 'bottom',
  BottomLeft: 'bottomLeft',
  BottomRight: 'bottomRight',
  Left: 'left',
}
