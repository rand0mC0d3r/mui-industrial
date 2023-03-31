import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { useCallback, useContext, useEffect } from 'react';
import DataProvider from '../../Store';
export default (function () {
    var shortcuts = useContext(DataProvider).shortcuts;
    var handleKeyboardTrigger = useContext(DataProvider).handleKeyboardTrigger;
    var handleUserKeyPress = useCallback(function (event) {
        var keyCode = event.keyCode, shiftKey = event.shiftKey, metaKey = event.metaKey, ctrlKey = event.ctrlKey, altKey = event.altKey;
        var result = shortcuts
            .find(function (_a) {
            var ascii = _a.ascii, char = _a.char;
            return ascii === keyCode || char === (keyCode === 32 ? 'Space' : String.fromCharCode(keyCode));
        });
        if (!result || !(result === null || result === void 0 ? void 0 : result.onTrigger))
            return;
        if (!!(result === null || result === void 0 ? void 0 : result.altKey) && !altKey)
            return;
        if (!!(result === null || result === void 0 ? void 0 : result.ctrlKey) && !ctrlKey)
            return;
        if (!!(result === null || result === void 0 ? void 0 : result.metaKey) && !metaKey)
            return;
        if (!!(result === null || result === void 0 ? void 0 : result.shiftKey) && !shiftKey)
            return;
        handleKeyboardTrigger(result.id);
    }, [shortcuts, handleKeyboardTrigger]);
    useEffect(function () {
        window.addEventListener('keydown', handleUserKeyPress);
        return function () { return window.removeEventListener('keydown', handleUserKeyPress); };
    }, [handleUserKeyPress]);
    return _jsx(_Fragment, {});
});
