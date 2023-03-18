/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { useContext } from 'react';
import DataProvider, { DataContextInterface } from '../Store';

export const useRegisterShortcut = () => {
  const handleKeyboardAnnouncement = useContext(DataProvider).handleKeyboardAnnouncement as DataContextInterface['handleKeyboardAnnouncement'];
  const handleKeyboardDestroy = useContext(DataProvider).handleKeyboardDestroy as DataContextInterface['handleKeyboardDestroy'];
  return { handleKeyboardAnnouncement, handleKeyboardDestroy };
};


// /* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable no-unused-vars */
// import { useContext } from 'react';
// import { ShortcutObject } from '../index.types';
// import DataProvider, { DataContextInterface } from '../Store';

// export const useRegisterShortcut = ({
//   id,
//   ascii,
//   char,
//   label,
//   ctrlKey,
//   altKey,
//   metaKey,
//   shiftKey,
//   insensitive = true,
//   onTrigger = () => {},
// } : ShortcutObject) => {
//   console.log('ffffff', id, ascii, char, label, ctrlKey, altKey, metaKey, shiftKey, insensitive, onTrigger);
//   const handleKeyboardAnnouncement = useContext(DataProvider).handleKeyboardAnnouncement as DataContextInterface['handleKeyboardAnnouncement'];
//   handleKeyboardAnnouncement({ char, id, ascii, label, shiftKey, ctrlKey, altKey, metaKey, onTrigger, insensitive } as ShortcutObject);
// };
