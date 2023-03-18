/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { useContext } from 'react';
import DataProvider from '../Store';
export var useRegisterShortcut = function () {
    var handleKeyboardAnnouncement = useContext(DataProvider).handleKeyboardAnnouncement;
    var handleKeyboardDestroy = useContext(DataProvider).handleKeyboardDestroy;
    return { handleKeyboardAnnouncement: handleKeyboardAnnouncement, handleKeyboardDestroy: handleKeyboardDestroy };
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
