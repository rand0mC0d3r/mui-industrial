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
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Chip, Tooltip, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import DataProvider from '../../Store';
/**
 * Shortcut helper component
 *
 * @description Displays the shortcut for a given shortcut ID.
 * If the shortcut ID is not found, nothing is displayed.
 *
 * @param {string} shortcutId - The ID of the shortcut to display
 * @param {boolean} asChip - Whether to display the shortcut as a chip or not
 * @param {boolean} hasTooltip - Whether to display a tooltip with a tooltip on hover
 *
 * @example
 * <Shortcut shortcutId="##openPanel##" asChip={true|false} hasTooltip={true|false} />
 *
 * @returns {JSX.Element} Shortcut
 */
export default (function (_a) {
    var shortcutId = _a.shortcutId, _b = _a.asChip, asChip = _b === void 0 ? false : _b, _c = _a.hasTooltip, hasTooltip = _c === void 0 ? false : _c;
    var shortcuts = useContext(DataProvider).shortcuts;
    var _d = useState(), shortcutObject = _d[0], setShortcutObject = _d[1];
    useEffect(function () {
        if (!shortcutId)
            return;
        setShortcutObject(shortcuts.find(function (_a) {
            var id = _a.id;
            return id === shortcutId;
        }));
    }, [shortcutId, shortcuts]);
    var shortcutString = [
        (shortcutObject === null || shortcutObject === void 0 ? void 0 : shortcutObject.ctrlKey) && '⌃',
        (shortcutObject === null || shortcutObject === void 0 ? void 0 : shortcutObject.altKey) && '⌥',
        (shortcutObject === null || shortcutObject === void 0 ? void 0 : shortcutObject.metaKey) && '⌘',
        (shortcutObject === null || shortcutObject === void 0 ? void 0 : shortcutObject.shiftKey) && '⇧',
        shortcutObject === null || shortcutObject === void 0 ? void 0 : shortcutObject.char,
    ].filter(Boolean).join(' ');
    var determineChip = _jsx(Chip, { style: { userSelect: 'none' }, label: shortcutString, variant: "outlined", size: "small" });
    var determineTypography = _jsx(Typography, __assign({ style: { userSelect: 'none' }, variant: "caption", color: "inherit" }, { children: shortcutString }));
    var determineTooltip = function (element) { return hasTooltip
        ? _jsx(Tooltip, __assign({ title: "".concat(shortcutObject && "".concat(shortcutObject.label, " -"), " ").concat(shortcutString), placement: "right", arrow: true }, { children: _jsx("span", { children: element }) }))
        : element; };
    return _jsx(_Fragment, { children: shortcutId
            && shortcutObject
            && determineTooltip(asChip
                ? determineChip
                : determineTypography) });
});
