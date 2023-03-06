import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { useCallback, useContext, useEffect, useState } from 'react';
import DataProvider from '../Store';
export default function (_a) {
    var id = _a.id, shiftKey = _a.shiftKey, ctrlKey = _a.ctrlKey, altKey = _a.altKey, metaKey = _a.metaKey, ascii = _a.ascii, char = _a.char, label = _a.label, _b = _a.insensitive, insensitive = _b === void 0 ? true : _b, _c = _a.onTrigger, onTrigger = _c === void 0 ? function () { } : _c;
    var _d = useContext(DataProvider), shortcuts = _d.shortcuts, handleKeyboardAnnouncement = _d.handleKeyboardAnnouncement;
    var _e = useState(null), uniqueId = _e[0], setUniqueId = _e[1];
    useEffect(function () {
        var generateId = "".concat(char, "-").concat(shiftKey, "-").concat(ctrlKey, "-").concat(altKey, "-").concat(metaKey, "-").concat(insensitive);
        if (!uniqueId || uniqueId !== generateId) {
            setUniqueId(generateId);
        }
    }, [char, shiftKey, ctrlKey, altKey, metaKey, insensitive, uniqueId]);
    var callbackHandleStatusAnnouncement = useCallback(function () { return handleKeyboardAnnouncement({ uniqueId: uniqueId, label: label, ascii: ascii, id: id, char: char, shiftKey: shiftKey, metaKey: metaKey, ctrlKey: ctrlKey, altKey: altKey, insensitive: insensitive, onTrigger: onTrigger }); }, [id, label, onTrigger, ascii, char, shiftKey, ctrlKey, altKey, metaKey, insensitive, uniqueId, handleKeyboardAnnouncement]);
    useEffect(function () {
        if ((char || ascii) && uniqueId && !shortcuts.some(function (shortcut) { return shortcut.uniqueId === uniqueId; })) {
            callbackHandleStatusAnnouncement();
        }
    }, [char, ascii, label, shiftKey, ctrlKey, altKey, metaKey, insensitive, uniqueId, callbackHandleStatusAnnouncement]);
    return _jsx(_Fragment, {});
}
