import React, { CSSProperties, HTMLAttributes, MouseEvent, ReactNode } from 'react';

export const domConsoleId = 'mui-status-console';
export const domConsoleHeader = 'mui-status-console-header';
export const domStatusBarId = 'mui-status-statusBar';
export const localStorageKeyHeight = 'mui-industrial-console-height';

/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-explicit-any */
export type StatusTypes = 'simple' | 'panel' | 'console';

export interface ThemeShape {
  spacing(spacing: number): void,
  shape: { borderRadius: number },
  palette: {
    divider: string,
    primary: { main: string, dark: string },
    secondary: { main: string, dark: string }
  }
}

export interface PopoverAction {
  icon: any,
  tooltip: string,
  onClick: () => void,
  disabled?: boolean,
  preserveColor?: boolean,
}

export type PopoverActions = [PopoverAction, PopoverAction?, PopoverAction?];

export type StatusConsoleJSXProps = {
  id: string,
  order?: number,
  disabled?: boolean,
  options?: StatusOptionsProps,
  secondary?: boolean,
  tooltip?: ReactNode | string,
  onClick?: (event: MouseEvent<HTMLDivElement>) => void,
  onContextMenu?: (event: MouseEvent<HTMLDivElement>) => void,
  style?: CSSProperties,
  className?: HTMLAttributes<HTMLDivElement>['className'],
  children?: ReactNode,
};

export interface StatusProps {
  id: string,
  order?: number,
  disabled?: boolean,
  highlight?: Highlight,
  options?: StatusOptionsProps,
  secondary?: boolean,
  tooltip?: ReactNode | string,
  onClick?: (e: MouseEvent<HTMLDivElement>) => void,
  onContextMenu?: (e: MouseEvent<HTMLDivElement>) => void,
  style?: CSSProperties,
  className?: HTMLAttributes<HTMLDivElement>['className'],
  children?: JSX.Element | JSX.Element[],
}

export interface StatusPopperJSXProps extends StatusProps {
  options: StatusOptionsProps,
}

export interface ISidebarObject {
  additional?: boolean;
  secondary?: boolean;
  order?: number;
  id: string;
  icon?: any;
  tooltip?: string;
  title?: string;
  children: React.ReactNode;
  options?: any
}
export interface SidebarObjectProps extends ISidebarObject {
  icon: any;
}
export interface SidebarObject extends ISidebarObject {
  visible: boolean;
}
export interface StatusObject {
  visible: boolean;
  type: StatusTypes,
  index: number;
  options: StatusOptionsProps,
  keepOpen: boolean,
  uniqueId: string;
  ownId: string;
  title?: string;
}

export interface IShortcutObject {
  id: string,
  label: string;
  ascii?: number | null;
  char: string | null;

  altKey?: boolean;
  ctrlKey?: boolean;
  metaKey?: boolean;
  shiftKey?: boolean;

  insensitive?: boolean;
  onTrigger: any
}

export interface ShortcutObject extends IShortcutObject {
  original?: ShortcutObject
}

export interface ISnackbarObject {
  id?: string;
  actions?: any;
  autoHideDuration?: number;
  code?: string;
  message: string;
  severity?: Severity,
  source?: string;
}

export interface SnackbarProps extends ISnackbarObject {
  id: string;
  severity: Severity,
  isRemoveFlag?: boolean;
}

export interface SnackbarObject extends SnackbarProps {
  open: boolean;
}





export interface CommandObject {
  id: string;
  shortcutId?: string,
  label: string;
  icon?: any;
  tooltip?: string;
  onTrigger?: any;
  disabled?: boolean;
  hidden?: boolean;
  order?: number;
}
export interface StatusPopperProps {
  elevation?: number,
  width?: PopperWidth | 'auto',
  height?: PopperHeight | 'auto',
  onClose?: any,
  hasArrow?: boolean,
  hasDecoration?: boolean,
  hasToolbar?: boolean,
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
  actions?: PopoverActions,
  hasToolbar?: boolean,
  title?: string,
  open?: boolean,
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
  capsLock: boolean;
  hasLock: boolean;
  isConsoleOpen?: boolean;
  isConsoleFixed?: boolean;
  consoleActiveId?: string;
  width: string;
  sidebarIndex?: string;
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
  // POPOVER = 'popover',
  CONSOLE = 'console',
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
  AUTO = 'auto',
}

export enum PopperHeight {
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl',
  AUTO = 'auto',
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
};


export interface SnackbarsInterface {
  handleSnackbarRegister: ({
    actions,
    autoHideDuration,
    code,
    message,
    severity,
    source,
  } : ISnackbarObject) => void;
  handleSnackbarHide: ({ id }: { id : string }) => void;
  handleSnackbarDelete: ({ id }: { id : string }) => void;
  handleSnackbarCleaning: () => void;
}
