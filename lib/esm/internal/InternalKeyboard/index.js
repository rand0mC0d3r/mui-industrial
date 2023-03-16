import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { useCallback, useContext, useEffect } from 'react';
import DataProvider from '../../Store';
export default (function () {
    var shortcuts = useContext(DataProvider).shortcuts;
    var handleCallKeyboard = useContext(DataProvider).handleCallKeyboard;
    var handleUserKeyPress = useCallback(function (event) {
        var keyCode = event.keyCode, shiftKey = event.shiftKey, metaKey = event.metaKey, ctrlKey = event.ctrlKey, altKey = event.altKey;
        var result = shortcuts.find(function (shortcut) { return shortcut.ascii === keyCode || shortcut.char === (keyCode === 32 ? 'Space' : String.fromCharCode(keyCode)); });
        if (!result || !result.onTrigger)
            return;
        if (!!(result === null || result === void 0 ? void 0 : result.altKey) && !altKey)
            return;
        if (!!(result === null || result === void 0 ? void 0 : result.ctrlKey) && !ctrlKey)
            return;
        if (!!(result === null || result === void 0 ? void 0 : result.metaKey) && !metaKey)
            return;
        if (!!(result === null || result === void 0 ? void 0 : result.shiftKey) && !shiftKey)
            return;
        console.log('triggering', result.id);
        handleCallKeyboard({ id: result.id });
        // result.onTrigger()
    }, [shortcuts, handleCallKeyboard]);
    useEffect(function () {
        window.addEventListener('keydown', handleUserKeyPress);
        return function () { return window.removeEventListener('keydown', handleUserKeyPress); };
    }, [handleUserKeyPress]);
    return _jsx(_Fragment, {});
});
