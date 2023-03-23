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
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import ChangeCircleOutlinedIcon from '@mui/icons-material/ChangeCircleOutlined';
import { Chip, ClickAwayListener, IconButton, TextField, Tooltip } from '@mui/material';
import { useContext, useState } from 'react';
import DataProvider from '../../Store';
import { StyledContainer, StyledPopper } from './css';
export default (function (_a) {
    var shortcutId = _a.shortcutId, shortcutObject = _a.shortcutObject;
    var _b = useState(null), anchorEl = _b[0], setAnchorEl = _b[1];
    var handleKeyboardUpdate = useContext(DataProvider).handleKeyboardUpdate;
    var handleClick = function (event) {
        setAnchorEl(event.currentTarget);
    };
    var handleClose = function () {
        setAnchorEl(null);
    };
    var open = Boolean(anchorEl);
    var id = open ? 'simple-popover' : undefined;
    var renderChip = function (label, diff, highlight) { return _jsx(Chip, { label: label, onClick: function () { return handleKeyboardUpdate(shortcutId, __assign(__assign({}, shortcutObject), diff)); }, variant: highlight ? 'filled' : 'outlined', color: highlight ? 'primary' : 'default', size: "small", style: { userSelect: 'none' } }); };
    return _jsxs(_Fragment, { children: [_jsx(Tooltip, __assign({ title: "Override tooltip" }, { children: _jsx(IconButton, __assign({ size: "small", "aria-describedby": id, onClick: handleClick }, { children: _jsx(ChangeCircleOutlinedIcon, { style: { fontSize: '14px' } }) })) })), _jsx(StyledPopper, __assign({}, {
                elevation: 2,
                open: open,
                anchorEl: anchorEl,
                onClose: handleClose,
                id: "mui-status-panel-popover-".concat(id),
            }, { children: _jsx(ClickAwayListener, __assign({ onClickAway: function () { return handleClose(); } }, { children: _jsxs(StyledContainer, { children: [renderChip('⌃', { ctrlKey: !(shortcutObject === null || shortcutObject === void 0 ? void 0 : shortcutObject.ctrlKey) }, shortcutObject === null || shortcutObject === void 0 ? void 0 : shortcutObject.ctrlKey), renderChip('⌥', { altKey: !(shortcutObject === null || shortcutObject === void 0 ? void 0 : shortcutObject.altKey) }, shortcutObject === null || shortcutObject === void 0 ? void 0 : shortcutObject.altKey), renderChip('⌘', { metaKey: !(shortcutObject === null || shortcutObject === void 0 ? void 0 : shortcutObject.metaKey) }, shortcutObject === null || shortcutObject === void 0 ? void 0 : shortcutObject.metaKey), renderChip('⇧', { shiftKey: !(shortcutObject === null || shortcutObject === void 0 ? void 0 : shortcutObject.shiftKey) }, shortcutObject === null || shortcutObject === void 0 ? void 0 : shortcutObject.shiftKey), _jsx(TextField, { inputProps: { maxlength: 1 }, size: "small", variant: 'outlined', label: "Key", value: shortcutObject === null || shortcutObject === void 0 ? void 0 : shortcutObject.char, onChange: function (e) { return handleKeyboardUpdate(shortcutId, __assign(__assign({}, shortcutObject), { char: e.target.value })); } })] }) })) }))] });
});
