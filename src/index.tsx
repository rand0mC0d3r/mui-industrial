import { useConfig } from './hooks/useConfig';
import { useRegisterCommand } from './hooks/useRegisterCommand';
import { useRegisterShortcut } from './hooks/useRegisterShortcut';
// import { useRegisterSnackbar } from './hooks/useRegisterSnackbar';
import { useShortcuts } from './hooks/useShortcuts';
import { useSnackbars } from './hooks/useSnackbars';
import {
  Highlight, PlacementPosition, PopperHeight, PopperWidth,
  ShortcutObject,
  StatusOptionsProps, StatusPopperProps,
  StatusType,
} from './index.types';
import KeyboardHelper from './Shortcuts/KeyboardHelper';
// import Sidebar from './Sidebar';
import SnackbarHelper from './Snackbars/SnackbarHelper';
import Status from './Status';
import { IndustrialProvider } from './Store';

export {
  IndustrialProvider,

  // status
  Status,

  KeyboardHelper,
  SnackbarHelper,


  // Sidebar,
  StatusOptionsProps,
  StatusPopperProps,

  //types
  PopperHeight,
  PopperWidth,
  StatusType,
  Highlight,
  PlacementPosition,
  ShortcutObject,

  //  hooks,
  useConfig,
  useShortcuts,
  useSnackbars,
  useRegisterShortcut,
  // useRegisterSnackbar,
  useRegisterCommand,
};
