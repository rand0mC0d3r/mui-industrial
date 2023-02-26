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
import { Fragment as _Fragment, jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
/* eslint-disable no-unused-vars */
import { Chip, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import DataProvider from '../Store';
export default function (_a) {
    var shortcutId = _a.shortcutId, _b = _a.asChip, asChip = _b === void 0 ? false : _b;
    var shortcuts = useContext(DataProvider).shortcuts;
    var _c = useState(null), shortcutObject = _c[0], setShortcutObject = _c[1];
    useEffect(function () {
        if (shortcutId) {
            var result = shortcuts.find(function (shortcut) { return shortcut.id === shortcutId; });
            if (result) {
                setShortcutObject(result);
            }
        }
    }, [shortcutId]);
    var content = _jsx(_Fragment, { children: shortcutObject && _jsxs(_Fragment, { children: [shortcutObject.ctrlKey && '⌃', shortcutObject.commandAltKey && '⌘', shortcutObject.shiftKey && '⇧', shortcutObject.char] }) });
    return _jsx(_Fragment, { children: asChip
            ? _jsx(Chip, { label: content, variant: "outlined", size: "small" })
            : _jsx(Typography, __assign({ variant: "caption", color: "textSecondary" }, { children: content })) });
}
