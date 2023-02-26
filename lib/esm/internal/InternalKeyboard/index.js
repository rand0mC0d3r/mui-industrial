import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useContext, useEffect } from 'react';
import DataProvider from '../../Store';
export default function () {
    var shortcuts = useContext(DataProvider).shortcuts;
    var handleUserKeyPress = useCallback(function (event) {
        var keyCode = event.keyCode;
        var convertedKeyCode = keyCode === 32 ? 'Space' : String.fromCharCode(keyCode);
        var foundShortcut = shortcuts.find(function (shortcut) { return shortcut.char === convertedKeyCode || shortcut.ascii === keyCode; });
        if (foundShortcut) {
            console.log(foundShortcut);
            foundShortcut.onTrigger();
            // handleKeyboardAnnouncement(foundShortcut)
        }
    }, [shortcuts]);
    useEffect(function () {
        window.addEventListener('keydown', handleUserKeyPress);
        return function () {
            window.removeEventListener('keydown', handleUserKeyPress);
        };
    }, [handleUserKeyPress]);
    return _jsx(_Fragment, {});
}
