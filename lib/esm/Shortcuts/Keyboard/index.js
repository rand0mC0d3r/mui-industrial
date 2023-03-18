import { Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useContext, useEffect, useState } from 'react';
import DataProvider from '../../Store';
export default (function (_a) {
    var id = _a.id, ascii = _a.ascii, char = _a.char, label = _a.label, ctrlKey = _a.ctrlKey, altKey = _a.altKey, metaKey = _a.metaKey, shiftKey = _a.shiftKey, _b = _a.insensitive, insensitive = _b === void 0 ? true : _b, _c = _a.onTrigger, onTrigger = _c === void 0 ? function () { } : _c;
    var _d = useState(), shortcutItem = _d[0], setShortcutItem = _d[1];
    var _e = useState(false), announced = _e[0], setAnnounced = _e[1];
    var _f = useState(false), toDestroy = _f[0], setToDestroy = _f[1];
    var _g = useState(0), triggeredLastCall = _g[0], setTriggeredLastCall = _g[1];
    var shortcuts = useContext(DataProvider).shortcuts;
    var handleKeyboardAnnouncement = useContext(DataProvider).handleKeyboardAnnouncement;
    var handleKeyboardDestroy = useContext(DataProvider).handleKeyboardDestroy;
    var callbackAnnouncement = useCallback(function () {
        if (((char || ascii) && id && !announced)) {
            console.log('ADD', { char: char, id: id, ascii: ascii, label: label, shiftKey: shiftKey, ctrlKey: ctrlKey, altKey: altKey, metaKey: metaKey, onTrigger: onTrigger, insensitive: insensitive });
            handleKeyboardAnnouncement({ char: char, id: id, ascii: ascii, label: label, shiftKey: shiftKey, ctrlKey: ctrlKey, altKey: altKey, metaKey: metaKey, onTrigger: onTrigger, insensitive: insensitive });
            setAnnounced(true);
        }
    }, [handleKeyboardAnnouncement, announced, char, id, ascii, label, shiftKey, ctrlKey, altKey, metaKey, onTrigger, insensitive]);
    var callbackDestroy = useCallback(function () {
        handleKeyboardDestroy({ id: id });
    }, [handleKeyboardDestroy, id]);
    var callbackOnTrigger = useCallback(function () {
        onTrigger();
    }, [onTrigger]);
    useEffect(function () {
        // if (!((char || ascii) && id && !announced)) return; // This cancels the effect if the shortcut is not valid or already announced
        callbackAnnouncement();
        // return () => {
        //   console.log('REMOVE', id);
        // };
    }, [char, id, ascii, announced, callbackAnnouncement]);
    useEffect(function () {
        if (toDestroy) {
            console.log('DESTROY', toDestroy, id);
        }
    }, [toDestroy, id]);
    useEffect(function () {
        return function () {
            if (announced && !toDestroy && shortcutItem) {
                console.log('MARK TO DESTROY', toDestroy, shortcutItem);
                callbackDestroy();
            }
        };
    }, [announced, toDestroy, shortcutItem, callbackDestroy]);
    useEffect(function () {
        if (!announced)
            return;
        setShortcutItem(shortcuts.find(function (shortcut) { return shortcut.id === id; }));
    }, [shortcuts, announced, id]);
    useEffect(function () {
        var lastCall = shortcutItem === null || shortcutItem === void 0 ? void 0 : shortcutItem.lastCall;
        if (shortcutItem && lastCall && lastCall !== 0 && lastCall !== triggeredLastCall) {
            console.log('trigeer', lastCall);
            setTriggeredLastCall(function () {
                callbackOnTrigger();
                return lastCall;
            });
        }
    }, [shortcutItem, callbackOnTrigger, triggeredLastCall]);
    // useEffect(() => {
    //   if (!shortcutItem || !announced) return;
    //   shortcutItem.onTrigger = onTrigger;
    //   return () => {
    //     shortcutItem.onTrigger = undefined;
    //     console.log('destroy');
    //     // callbackDestroy();
    //   };
    // }, [shortcutItem, onTrigger, announced, callbackDestroy]);
    return _jsxs(_Fragment, { children: ["xxxx  ", toDestroy ? 'true' : 'false'] });
});
