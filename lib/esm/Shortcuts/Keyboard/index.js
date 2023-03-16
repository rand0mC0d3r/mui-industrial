var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from 'react';
import DataProvider from '../../Store';
export default (function (props) {
    var _a = useState(), shortcutItem = _a[0], setShortcutItem = _a[1];
    var shortcuts = useContext(DataProvider).shortcuts;
    var handleKeyboardAnnouncement = useContext(DataProvider).handleKeyboardAnnouncement;
    var id = props.id, shiftKey = props.shiftKey, ctrlKey = props.ctrlKey, altKey = props.altKey, metaKey = props.metaKey, ascii = props.ascii, char = props.char, label = props.label, _b = props.insensitive, insensitive = _b === void 0 ? true : _b, _c = props.onTrigger, onTrigger = _c === void 0 ? function () { } : _c;
    useEffect(function () {
        if ((char || ascii) && id && !shortcuts.some(function (shortcut) { return shortcut.id === id; })) {
            handleKeyboardAnnouncement(__assign({}, props));
        }
    }, [char, id, ascii, label, shiftKey, ctrlKey, altKey, metaKey, insensitive, onTrigger, handleKeyboardAnnouncement]);
    useEffect(function () {
        setShortcutItem(shortcuts.find(function (shortcut) { return shortcut.id === id; }));
    }, [shortcuts, id]);
    useEffect(function () {
        if (!shortcutItem)
            return;
        console.log('triggering', shortcutItem);
        shortcutItem.onTrigger = onTrigger;
    }, [shortcutItem === null || shortcutItem === void 0 ? void 0 : shortcutItem.open, onTrigger]);
    return _jsx(_Fragment, {});
});
