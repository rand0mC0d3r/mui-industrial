import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { useCallback, useContext, useEffect, useState } from 'react';
import DataProvider from '../../Store';
export default (function (_a) {
    var id = _a.id, ascii = _a.ascii, char = _a.char, label = _a.label, ctrlKey = _a.ctrlKey, altKey = _a.altKey, metaKey = _a.metaKey, shiftKey = _a.shiftKey, _b = _a.insensitive, insensitive = _b === void 0 ? true : _b, _c = _a.onTrigger, onTrigger = _c === void 0 ? function () { } : _c;
    var _d = useState(), shortcutItem = _d[0], setShortcutItem = _d[1];
    var _e = useState(false), announced = _e[0], setAnnounced = _e[1];
    var shortcuts = useContext(DataProvider).shortcuts;
    var handleKeyboardAnnouncement = useContext(DataProvider).handleKeyboardAnnouncement;
    var handleKeyboardDestroy = useContext(DataProvider).handleKeyboardDestroy;
    var callbackAnnouncement = useCallback(function () {
        handleKeyboardAnnouncement({ char: char, id: id, ascii: ascii, label: label, shiftKey: shiftKey, ctrlKey: ctrlKey, altKey: altKey, metaKey: metaKey, insensitive: insensitive });
        setAnnounced(true);
    }, [handleKeyboardAnnouncement, char, id, ascii, label, shiftKey, ctrlKey, altKey, metaKey, insensitive]);
    var callbackDestroy = useCallback(function () {
        handleKeyboardDestroy({ id: id });
    }, [handleKeyboardDestroy, id]);
    useEffect(function () {
        if (!((char || ascii) && id && !announced))
            return;
        callbackAnnouncement();
        return function () {
            console.log('22');
        };
    }, [char, id, ascii, announced, callbackAnnouncement]);
    useEffect(function () {
        if (!announced)
            return;
        setShortcutItem(shortcuts.find(function (shortcut) { return shortcut.id === id; }));
    }, [shortcuts, announced, id]);
    useEffect(function () {
        if (!shortcutItem || !announced)
            return;
        shortcutItem.onTrigger = onTrigger;
        return function () {
            console.log('11');
            shortcutItem.onTrigger = undefined;
            callbackDestroy();
        };
    }, [shortcutItem, onTrigger, announced, callbackDestroy]);
    return _jsx(_Fragment, {});
});
