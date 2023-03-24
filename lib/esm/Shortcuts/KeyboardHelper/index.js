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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Chip, Tooltip, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import DataProvider from '../../Store';
import Component from './Component';
import { StyledOverrideWrapper } from './css';
/**
 * Shortcut helper component
 *
 * @description Displays the shortcut for a given shortcut ID.
 * If the shortcut ID is not found, nothing is displayed.
 *
 * @param {string} shortcutId - The ID of the shortcut to display
 * @param {boolean} asChip - Whether to display the shortcut as a chip or not
 * @param {boolean} hasTooltip - Whether to display a tooltip with a tooltip on hover
 * @param {boolean} hasOverride - Whether to display the override shortcut or not
 *
 * @example
 * <Shortcut shortcutId="##openPanel##" asChip={true|false} hasTooltip={true|false} />
 *
 * @returns {JSX.Element} Shortcut
 */
export default (function (_a) {
    var shortcutId = _a.shortcutId, _b = _a.asChip, asChip = _b === void 0 ? false : _b, _c = _a.hasTooltip, hasTooltip = _c === void 0 ? false : _c, _d = _a.hasOverride, hasOverride = _d === void 0 ? false : _d;
    var shortcuts = useContext(DataProvider).shortcuts;
    var _e = useState(), shortcutObject = _e[0], setShortcutObject = _e[1];
    var _f = useState(null), anchorEl = _f[0], setAnchorEl = _f[1];
    var handleClick = function (event) {
        setAnchorEl(event.currentTarget);
    };
    var handleClose = function () {
        setAnchorEl(null);
    };
    var open = Boolean(anchorEl);
    var idPopper = open ? 'simple-popover' : undefined;
    useEffect(function () {
        setShortcutObject(shortcuts.find(function (_a) {
            var id = _a.id;
            return id === shortcutId;
        }));
    }, [shortcutId, shortcuts]);
    var shortcutString = [
        (shortcutObject === null || shortcutObject === void 0 ? void 0 : shortcutObject.altKey) && '⌥',
        (shortcutObject === null || shortcutObject === void 0 ? void 0 : shortcutObject.ctrlKey) && '⌃',
        (shortcutObject === null || shortcutObject === void 0 ? void 0 : shortcutObject.metaKey) && '⌘',
        (shortcutObject === null || shortcutObject === void 0 ? void 0 : shortcutObject.shiftKey) && '⇧',
        shortcutObject === null || shortcutObject === void 0 ? void 0 : shortcutObject.char,
    ].filter(Boolean).join(' ');
    var determineChip = _jsx(Chip, { style: { userSelect: 'none' }, label: shortcutString, variant: "outlined", size: "small" });
    var determineTypography = _jsx(Typography, __assign({ style: {
            userSelect: 'none',
            height: '24px',
            display: 'flex',
            alignItems: 'center',
        }, variant: "caption", color: "inherit" }, { children: shortcutString }));
    var determineTooltip = function (element) { return hasTooltip
        ? _jsx(Tooltip, __assign({ title: "".concat(shortcutObject && "".concat(shortcutObject.label, " -"), " ").concat(shortcutString), placement: "right", arrow: true }, { children: _jsx("span", { children: element }) }))
        : element; };
    var determineOverride = function (element) { return hasOverride
        ? _jsxs(StyledOverrideWrapper, __assign({ onContextMenu: function (e) {
                e.preventDefault();
                handleClick(e);
            } }, { children: [shortcutObject && _jsx(Component, __assign({}, { idPopper: idPopper, anchorEl: anchorEl, open: open, handleClose: handleClose, shortcutId: shortcutId, shortcutObject: shortcutObject })), element] }))
        : element; };
    return _jsx(_Fragment, { children: shortcutId
            && shortcutObject
            && determineOverride(determineTooltip(asChip ? determineChip : determineTypography)) });
});
