import { useContext } from 'react';
import DataProvider from '../Store';
export var useRegisterShortcut = function () {
    var handleKeyboardAnnouncement = useContext(DataProvider).handleKeyboardAnnouncement;
    var handleKeyboardDestroy = useContext(DataProvider).handleKeyboardDestroy;
    var handleKeyboardsDestroy = useContext(DataProvider).handleKeyboardsDestroy;
    return { handleKeyboardAnnouncement: handleKeyboardAnnouncement, handleKeyboardDestroy: handleKeyboardDestroy, handleKeyboardsDestroy: handleKeyboardsDestroy };
};
