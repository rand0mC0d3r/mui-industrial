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
import { Autocomplete, Box, ClickAwayListener, Paper, TextField, Typography } from '@mui/material';
import { cloneElement, useContext, useEffect, useState } from 'react';
import KeyboardHelper from '../../Shortcuts/KeyboardHelper';
import DataProvider from '../../Store';
import InternalHeader from '../InternalHeader';
import { StyledHighlight } from './css';
var kbdId = 'commands';
export default (function () {
    var _a = useContext(DataProvider), handleKeyboardRegister = _a.handleKeyboardRegister, handleCallCommand = _a.handleCallCommand, commands = _a.commands;
    var _b = useState(false), open = _b[0], setOpen = _b[1];
    var _c = useState(''), inputValue = _c[0], setInputValue = _c[1];
    var highlightString = function (str, search) {
        var parts = str.split(new RegExp("(".concat(search, ")"), 'gi'));
        return _jsx(Typography, __assign({ variant: "subtitle2", color: "textSecondary" }, { children: parts.map(function (part, i) { return _jsx(StyledHighlight, __assign({ highlight: part.toLowerCase() === search.toLowerCase() ? 'true' : 'false' }, { children: part }), i); }) }));
    };
    useEffect(function () {
        handleKeyboardRegister({
            id: kbdId,
            shiftKey: true, char: 'P', metaKey: true,
            onTrigger: function () { return setOpen(function (p) { return !p; }); },
            label: 'Hide/Show quick commands',
        });
    });
    return _jsx(_Fragment, { children: open && _jsx("div", __assign({ style: {
                position: 'absolute',
                top: '32px',
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
            } }, { children: _jsx(ClickAwayListener, __assign({ onClickAway: function () { return setOpen(false); } }, { children: _jsx(Paper, __assign({ style: { width: '60vw', maxWidth: '750px', padding: '12px', borderRadius: '8px' }, elevation: 8 }, { children: _jsx(Autocomplete, { disablePortal: true, open: true, autoHighlight: true, inputValue: inputValue, clearOnEscape: true, onClose: function (_, reason) {
                            if (reason === 'escape')
                                setOpen(false);
                        }, autoSelect: true, onInputChange: function (event, newInputValue) {
                            if (!newInputValue)
                                return;
                            if ((event && (event === null || event === void 0 ? void 0 : event.type) !== 'blur') || !event) {
                                setInputValue(newInputValue);
                            }
                        }, onChange: function (event, newValue) {
                            if (!newValue)
                                return;
                            if ((event && (event === null || event === void 0 ? void 0 : event.type) !== 'blur') || !event) {
                                handleCallCommand(newValue.id);
                                setOpen(false);
                            }
                        }, fullWidth: true, openOnFocus: true, style: { position: 'relative' }, PaperComponent: function (_a) {
                            var children = _a.children;
                            return _jsxs(Paper, __assign({ style: { position: 'relative' } }, { children: [_jsx("div", __assign({ style: { position: 'relative' } }, { children: children })), _jsx(InternalHeader, { id: "quickCommands", noDefaults: true, title: 'Quick commands' })] }));
                        }, renderOption: function (props, option) {
                            return _jsx("div", __assign({}, props, { onContextMenu: function (e) { return e.preventDefault(); } }, { children: _jsxs(Box, __assign({ display: "flex", justifyContent: 'space-between', style: { width: '100%' }, alignItems: "center" }, { children: [_jsxs(Box, __assign({ display: "flex", style: { gap: '8px' }, flexWrap: "nowrap", alignItems: "center" }, { children: [cloneElement(option.icon, { style: { fontSize: '16px' } }), highlightString(option.label, inputValue)] })), option.shortcutId && _jsx(_Fragment, { children: _jsx(KeyboardHelper, { shortcutId: option.shortcutId, asChip: true }) })] })) }));
                        }, id: "combo-box-demo", options: commands, renderInput: function (params) { return _jsx(TextField, __assign({ autoFocus: true }, params, { onFocus: function () { return setInputValue(''); }, fullWidth: true, size: "small", label: "Commands" })); } }) })) })) })) });
});
