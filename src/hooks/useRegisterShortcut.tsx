import { useContext } from 'react';
import DataProvider, { DataContextInterface } from '../Store';

export const useRegisterShortcut = () => {
  const handleKeyboardAnnouncement = useContext(DataProvider).handleKeyboardAnnouncement as DataContextInterface['handleKeyboardAnnouncement'];
  const handleKeyboardDestroy = useContext(DataProvider).handleKeyboardDestroy as DataContextInterface['handleKeyboardDestroy'];
  const handleKeyboardsDestroy = useContext(DataProvider).handleKeyboardsDestroy as DataContextInterface['handleKeyboardsDestroy'];

  return { handleKeyboardAnnouncement, handleKeyboardDestroy, handleKeyboardsDestroy };
};
