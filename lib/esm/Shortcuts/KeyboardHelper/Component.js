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
import HistoryIcon from '@mui/icons-material/History';
import { Box, ClickAwayListener, TextField } from '@mui/material';
import { useContext } from 'react';
import InternalHeader from '../../Api/InternalHeader';
import DataProvider from '../../Store';
import { StyledKey, StyledPopper } from './css';
export default (function (_a) {
    var idPopper = _a.idPopper, anchorEl = _a.anchorEl, open = _a.open, handleClose = _a.handleClose, shortcutId = _a.shortcutId, shortcutObject = _a.shortcutObject;
    var handleKeyboardUpdate = useContext(DataProvider).handleKeyboardUpdate;
    var handleKeyboardRevert = useContext(DataProvider).handleKeyboardRevert;
    var renderChip = function (label, diff, highlight) { return _jsx(StyledKey, __assign({ elevation: 1, onClick: function () { return handleKeyboardUpdate(shortcutId, __assign(__assign({}, shortcutObject), diff)); }, highlight: (highlight || false).toString() }, { children: label })); };
    return _jsx(_Fragment, { children: _jsx(StyledPopper, __assign({}, {
            elevation: 2,
            open: open,
            anchorEl: anchorEl,
            onClose: handleClose,
            id: "mui-status-panel-popover-".concat(idPopper),
        }, { children: _jsx(ClickAwayListener, __assign({ onClickAway: function () { return handleClose(); } }, { children: _jsxs(Box, __assign({ display: 'flex', flexDirection: 'column', gap: 2, sx: {
                        p: 2,
                        width: '285px',
                        borderRadius: 2,
                        border: 1,
                        borderColor: 'primary.main',
                        backgroundColor: 'background.paper',
                    } }, { children: [_jsxs(Box, __assign({ display: 'flex', flexDirection: "row", alignItems: 'center', style: { gap: '8px' } }, { children: [renderChip('⇧', { shiftKey: !(shortcutObject === null || shortcutObject === void 0 ? void 0 : shortcutObject.shiftKey) }, shortcutObject === null || shortcutObject === void 0 ? void 0 : shortcutObject.shiftKey), renderChip('⌃', { ctrlKey: !(shortcutObject === null || shortcutObject === void 0 ? void 0 : shortcutObject.ctrlKey) }, shortcutObject === null || shortcutObject === void 0 ? void 0 : shortcutObject.ctrlKey), renderChip('⌥', { altKey: !(shortcutObject === null || shortcutObject === void 0 ? void 0 : shortcutObject.altKey) }, shortcutObject === null || shortcutObject === void 0 ? void 0 : shortcutObject.altKey), renderChip('⌘', { metaKey: !(shortcutObject === null || shortcutObject === void 0 ? void 0 : shortcutObject.metaKey) }, shortcutObject === null || shortcutObject === void 0 ? void 0 : shortcutObject.metaKey), _jsx(TextField, { color: "info", size: "small", variant: 'outlined', label: "Char", autoFocus: true, onFocus: function (e) { return e.currentTarget.select(); }, value: (shortcutObject === null || shortcutObject === void 0 ? void 0 : shortcutObject.char) || '', onChange: function (e) { return e.target.value.length > 0 &&
                                        handleKeyboardUpdate(shortcutId, __assign(__assign({}, shortcutObject), { char: e.target.value.substring(0, 1).toUpperCase() })); } }), _jsx(TextField, { color: "info", size: "small", variant: 'outlined', label: "Ascii", type: 'number', onFocus: function (e) { return e.currentTarget.select(); }, value: (shortcutObject === null || shortcutObject === void 0 ? void 0 : shortcutObject.ascii) || '', onChange: function (e) { return handleKeyboardUpdate(shortcutId, __assign(__assign({}, shortcutObject), { ascii: Number(e.target.value) })); } })] })), _jsx(InternalHeader, { sx: {
                                px: 1,
                                py: 0.5,
                                borderRadius: 2,
                                border: 1,
                                borderColor: 'grey.200',
                                backgroundColor: 'grey.50',
                            }, noDefaults: true, title: shortcutObject.label, id: 'consoleHeader', actions: [{
                                    icon: _jsx(HistoryIcon, {}),
                                    tooltip: 'Revert to original shortcut',
                                    onClick: function () { return handleKeyboardRevert(shortcutId); },
                                }] })] })) })) })) });
});
