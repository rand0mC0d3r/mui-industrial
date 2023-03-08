import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { useContext, useEffect } from 'react';
import DataProvider from '../Store';
export default function (_a) {
    var id = _a.id, shiftKey = _a.shiftKey, ctrlKey = _a.ctrlKey, altKey = _a.altKey, metaKey = _a.metaKey, ascii = _a.ascii, char = _a.char, label = _a.label, _b = _a.insensitive, insensitive = _b === void 0 ? true : _b, _c = _a.onTrigger, onTrigger = _c === void 0 ? function () { } : _c;
    var _d = useContext(DataProvider), shortcuts = _d.shortcuts, handleKeyboardAnnouncement = _d.handleKeyboardAnnouncement;
    useEffect(function () {
        if ((char || ascii) && id && !shortcuts.some(function (shortcut) { return shortcut.id === id; })) {
            handleKeyboardAnnouncement({ label: label, ascii: ascii, id: id, char: char, shiftKey: shiftKey, metaKey: metaKey, ctrlKey: ctrlKey, altKey: altKey, insensitive: insensitive, onTrigger: onTrigger });
        }
    }, [char, id, ascii, label, shiftKey, ctrlKey, altKey, metaKey, insensitive, onTrigger, handleKeyboardAnnouncement]);
    return _jsx(_Fragment, {});
}
