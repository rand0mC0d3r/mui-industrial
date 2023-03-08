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
import { Chip, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import DataProvider from '../Store';
export default function (_a) {
    var shortcutId = _a.shortcutId, _b = _a.asChip, asChip = _b === void 0 ? false : _b;
    var shortcuts = useContext(DataProvider).shortcuts;
    var _c = useState(), shortcutObject = _c[0], setShortcutObject = _c[1];
    useEffect(function () {
        if (!shortcutId)
            return;
        setShortcutObject(shortcuts.find(function (shortcut) { return shortcut.id === shortcutId; }));
    }, [shortcutId]);
    var content = _jsxs(_Fragment, { children: [(shortcutObject === null || shortcutObject === void 0 ? void 0 : shortcutObject.ctrlKey) && '⌃', (shortcutObject === null || shortcutObject === void 0 ? void 0 : shortcutObject.altKey) && '⌥', (shortcutObject === null || shortcutObject === void 0 ? void 0 : shortcutObject.metaKey) && '⌘', (shortcutObject === null || shortcutObject === void 0 ? void 0 : shortcutObject.shiftKey) && '⇧', shortcutObject === null || shortcutObject === void 0 ? void 0 : shortcutObject.char] });
    return _jsx(_Fragment, { children: shortcutId && shortcutObject && _jsx(_Fragment, { children: asChip
                ? _jsx(Chip, { label: content, variant: "outlined", size: "small" })
                : _jsx(Typography, __assign({ id: "lowerK", variant: "caption", color: "inherit" }, { children: content })) }) });
}
