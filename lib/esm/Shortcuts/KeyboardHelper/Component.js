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
import HistoryIcon from '@mui/icons-material/History';
import { Chip, ClickAwayListener, InputAdornment, TextField, Tooltip } from '@mui/material';
import { useContext } from 'react';
import DataProvider from '../../Store';
import { StyledContainer, StyledPopper } from './css';
export default (function (_a) {
    var idPopper = _a.idPopper, anchorEl = _a.anchorEl, open = _a.open, handleClose = _a.handleClose, shortcutId = _a.shortcutId, shortcutObject = _a.shortcutObject;
    var handleKeyboardUpdate = useContext(DataProvider).handleKeyboardUpdate;
    var handleKeyboardRevert = useContext(DataProvider).handleKeyboardRevert;
    var renderChip = function (label, diff, highlight) { return _jsx(Chip, { label: label, onClick: function () { return handleKeyboardUpdate(shortcutId, __assign(__assign({}, shortcutObject), diff)); }, variant: highlight ? 'filled' : 'outlined', color: highlight ? 'primary' : 'default', size: "small", style: { userSelect: 'none' } }); };
    return _jsx(_Fragment, { children: _jsx(StyledPopper, __assign({}, {
            elevation: 2,
            open: open,
            anchorEl: anchorEl,
            onClose: handleClose,
            id: "mui-status-panel-popover-".concat(idPopper),
        }, { children: _jsx(ClickAwayListener, __assign({ onClickAway: function () { return handleClose(); } }, { children: _jsx(StyledContainer, { children: _jsx(TextField, { size: "small", variant: 'outlined', label: "Key", autoFocus: true, onFocus: function (e) { return e.currentTarget.select(); }, InputProps: {
                            startAdornment: _jsxs(InputAdornment, __assign({ position: "start", style: { display: 'flex', gap: '4px' } }, { children: [renderChip('⌃', { ctrlKey: !(shortcutObject === null || shortcutObject === void 0 ? void 0 : shortcutObject.ctrlKey) }, shortcutObject === null || shortcutObject === void 0 ? void 0 : shortcutObject.ctrlKey), renderChip('⌥', { altKey: !(shortcutObject === null || shortcutObject === void 0 ? void 0 : shortcutObject.altKey) }, shortcutObject === null || shortcutObject === void 0 ? void 0 : shortcutObject.altKey), renderChip('⌘', { metaKey: !(shortcutObject === null || shortcutObject === void 0 ? void 0 : shortcutObject.metaKey) }, shortcutObject === null || shortcutObject === void 0 ? void 0 : shortcutObject.metaKey), renderChip('⇧', { shiftKey: !(shortcutObject === null || shortcutObject === void 0 ? void 0 : shortcutObject.shiftKey) }, shortcutObject === null || shortcutObject === void 0 ? void 0 : shortcutObject.shiftKey)] })),
                            endAdornment: shortcutObject.original && _jsx(InputAdornment, __assign({ position: "end" }, { children: _jsx(Tooltip, __assign({ title: "Revert to original shortcut" }, { children: _jsx(HistoryIcon, { style: { fontSize: '16px', cursor: 'pointer' }, color: "action", onClick: function () { return handleKeyboardRevert(shortcutId); } }) })) })),
                        }, value: shortcutObject === null || shortcutObject === void 0 ? void 0 : shortcutObject.char, onChange: function (e) { return e.target.value.length > 0 &&
                            handleKeyboardUpdate(shortcutId, __assign(__assign({}, shortcutObject), { char: e.target.value.substring(0, 1).toUpperCase() })); } }) }) })) })) });
});
