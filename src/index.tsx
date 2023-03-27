import { useRegisterCommand } from './hooks/useRegisterCommand';
import { useRegisterShortcut } from './hooks/useRegisterShortcut';
import { useRegisterSnackbar } from './hooks/useRegisterSnackbar';
import { useShortcuts } from './hooks/useShortcuts';
import { useSnackbars } from './hooks/useSnackbars';
import { Highlight, StatusOptionsProps, StatusPopperProps, StatusType } from './index.types';
import KeyboardHelper from './Shortcuts/KeyboardHelper';
import SnackbarHelper from './Snackbars/SnackbarHelper';
import Status from './Status';
import { IndustrialProvider } from './Store';

export {
  IndustrialProvider,

  Status,

  KeyboardHelper,
  SnackbarHelper,

  StatusOptionsProps,
  StatusType,
  Highlight,
  StatusPopperProps,

  // hooks
  useShortcuts,
  useSnackbars,
  useRegisterShortcut,
  useRegisterSnackbar,
  useRegisterCommand,
};
