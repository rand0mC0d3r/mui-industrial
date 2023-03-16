import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from 'react';
import DataProvider from '../../Store';
export default (function (_a) {
    var id = _a.id, shiftKey = _a.shiftKey, ctrlKey = _a.ctrlKey, altKey = _a.altKey, metaKey = _a.metaKey, ascii = _a.ascii, char = _a.char, label = _a.label, _b = _a.insensitive, insensitive = _b === void 0 ? true : _b, _c = _a.onTrigger, onTrigger = _c === void 0 ? function () { } : _c;
    var _d = useState(), shortcutItem = _d[0], setShortcutItem = _d[1];
    var shortcuts = useContext(DataProvider).shortcuts;
    var handleKeyboardAnnouncement = useContext(DataProvider).handleKeyboardAnnouncement;
    // const { shortcuts } : { shortcuts: ShortcutObject[] } = useContext(DataProvider) as DataContextInterface;
    // const handleUpdateKeyboard = useContext(DataProvider).handleKeyboardAnnouncement as DataContextInterface['handleUpdateKeyboard'];
    // const {
    //   id, shiftKey, ctrlKey, altKey, metaKey,
    //   ascii, char, label, insensitive = true, onTrigger = () => {},
    // } = props;
    useEffect(function () {
        if ((char || ascii) && id) {
            handleKeyboardAnnouncement({ char: char, id: id, ascii: ascii, label: label, shiftKey: shiftKey, ctrlKey: ctrlKey, altKey: altKey, metaKey: metaKey, onTrigger: onTrigger, insensitive: insensitive });
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
    }, [shortcutItem, onTrigger]);
    return _jsx(_Fragment, {});
});
