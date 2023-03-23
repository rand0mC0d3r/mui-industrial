import { useRegisterShortcut } from './hooks/useRegisterShortcut';
import { useShortcuts } from './hooks/useShortcuts';
import { Highlight, StatusOptionsProps, StatusPopperProps, StatusType } from './index.types';
import KeyboardHelper from './Shortcuts/KeyboardHelper';
import Status from './Status';
import { IndustrialProvider } from './Store';

export {
  IndustrialProvider,

  Status,
  KeyboardHelper,

  StatusOptionsProps,
  StatusType,
  Highlight,
  StatusPopperProps,

  useShortcuts,
  useRegisterShortcut,
};
