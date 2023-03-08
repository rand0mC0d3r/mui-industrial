import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { useCallback, useContext, useEffect } from 'react';
import DataProvider from '../../Store';
export default function () {
    var _a = useContext(DataProvider), shortcuts = _a.shortcuts, handleCallKeyboard = _a.handleCallKeyboard;
    var handleUserKeyPress = useCallback(function (event) {
        var keyCode = event.keyCode;
        var result = shortcuts.find(function (shortcut) { return shortcut.ascii === keyCode || shortcut.char === (keyCode === 32 ? 'Space' : String.fromCharCode(keyCode)); });
        if (!result || !result.onTrigger)
            return;
        if ((result.shiftKey || false) === true && event.shiftKey === false)
            return;
        if ((result.metaKey || false) === true && event.metaKey === false)
            return;
        if ((result.ctrlKey || false) === true && event.ctrlKey === false)
            return;
        if ((result.altKey || false) === true && event.altKey === false)
            return;
        console.log('triggering', result.id);
        handleCallKeyboard({ id: result.id });
        // result.onTrigger()
    }, [shortcuts]);
    useEffect(function () {
        window.addEventListener('keydown', handleUserKeyPress);
        return function () { return window.removeEventListener('keydown', handleUserKeyPress); };
    }, [handleUserKeyPress]);
    return _jsx(_Fragment, {});
}
