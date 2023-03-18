import { Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable no-unused-vars */
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import DataProvider from '../../Store';
export default (function (_a) {
    var id = _a.id, ascii = _a.ascii, char = _a.char, label = _a.label, ctrlKey = _a.ctrlKey, altKey = _a.altKey, metaKey = _a.metaKey, shiftKey = _a.shiftKey, _b = _a.insensitive, insensitive = _b === void 0 ? true : _b, _c = _a.onTrigger, onTrigger = _c === void 0 ? function () { } : _c;
    // const [shortcutItem, setShortcutItem] = useState<ShortcutObject | undefined>();
    var refShortcutItem = useRef();
    var _d = useState(false), announced = _d[0], setAnnounced = _d[1];
    var _e = useState(false), toDestroy = _e[0], setToDestroy = _e[1];
    var _f = useState(0), triggeredLastCall = _f[0], setTriggeredLastCall = _f[1];
    var shortcuts = useContext(DataProvider).shortcuts;
    var handleKeyboardAnnouncement = useContext(DataProvider).handleKeyboardAnnouncement;
    var handleKeyboardDestroy = useContext(DataProvider).handleKeyboardDestroy;
    var callbackAnnouncement = useCallback(function () {
        if (((char || ascii) && id)) {
            // console.log('🚩 ADD', id, refShortcutItem.current);
            handleKeyboardAnnouncement({ char: char, id: id, ascii: ascii, label: label, shiftKey: shiftKey, ctrlKey: ctrlKey, altKey: altKey, metaKey: metaKey, onTrigger: onTrigger, insensitive: insensitive });
            // setAnnounced(true);
        }
    }, [handleKeyboardAnnouncement, char, id, ascii, label, shiftKey, ctrlKey, altKey, metaKey, onTrigger, insensitive]);
    var callbackDestroy = useCallback(function () {
        handleKeyboardDestroy({ id: id });
    }, [handleKeyboardDestroy, id]);
    // const callbackOnTrigger = useCallback(() => {
    //   onTrigger();
    // }, [onTrigger]);
    useEffect(function () {
        if (refShortcutItem.current === undefined) {
            callbackAnnouncement();
        }
    }, [callbackAnnouncement]);
    useEffect(function () {
        return function () {
            if (refShortcutItem.current !== undefined) {
                console.log('DESTROY keyboard');
                callbackDestroy();
            }
        };
    });
    // useEffect(() => {
    //   return () => {
    //     if (announced && !toDestroy && shortcutItem) {
    //       console.log('MARK TO DESTROY', toDestroy, shortcutItem);
    //       callbackDestroy();
    //     }
    //   };
    // }, [announced, toDestroy, shortcutItem, callbackDestroy]);
    useEffect(function () {
        refShortcutItem.current = shortcuts.find(function (shortcut) { return shortcut.id === id; });
        console.log('🏳️ SHORTCUTS', shortcuts, id, refShortcutItem.current === undefined);
    }, [shortcuts, id]);
    // useEffect(() => {
    //   const lastCall = shortcutItem?.lastCall;
    //   if (shortcutItem && lastCall && lastCall !== 0 && lastCall !== triggeredLastCall) {
    //     console.log('trigeer', lastCall);
    //     setTriggeredLastCall(() => {
    //       callbackOnTrigger();
    //       return lastCall;
    //     });
    //   }
    // }, [shortcutItem, callbackOnTrigger, triggeredLastCall]);
    // useEffect(() => {
    //   if (!shortcutItem || !announced) return;
    //   shortcutItem.onTrigger = onTrigger;
    //   // return () => {
    //   // shortcutItem.onTrigger = undefined;
    //   // console.log('destroy');
    //   // callbackDestroy();
    //   // };
    // }, [shortcutItem, onTrigger, announced]);
    return _jsxs(_Fragment, { children: ["xxxx  ", toDestroy ? 'true' : 'false'] });
});
