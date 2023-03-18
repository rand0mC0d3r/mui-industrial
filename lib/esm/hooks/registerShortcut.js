/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { useContext } from 'react';
import DataProvider from '../Store';
export var RegisterShortcut = function (_a) {
    var id = _a.id, ascii = _a.ascii, char = _a.char, label = _a.label, ctrlKey = _a.ctrlKey, altKey = _a.altKey, metaKey = _a.metaKey, shiftKey = _a.shiftKey, _b = _a.insensitive, insensitive = _b === void 0 ? true : _b, _c = _a.onTrigger, onTrigger = _c === void 0 ? function () { } : _c;
    var handleKeyboardAnnouncement = useContext(DataProvider).handleKeyboardAnnouncement;
    handleKeyboardAnnouncement({ char: char, id: id, ascii: ascii, label: label, shiftKey: shiftKey, ctrlKey: ctrlKey, altKey: altKey, metaKey: metaKey, onTrigger: onTrigger, insensitive: insensitive });
};
