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
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Autocomplete, Box, ClickAwayListener, Paper, TextField, Typography } from '@mui/material';
import { cloneElement, useContext, useEffect, useState } from 'react';
import KeyboardHelper from '../../Shortcuts/KeyboardHelper';
import DataProvider from '../../Store';
import InternalHeader from '../InternalHeader';
import { StyledHighlight } from './css';
var kbdId = 'commands';
var top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Good, the Bad and the Ugly', year: 1966 },
    { label: 'Fight Club', year: 1999 },
    {
        label: 'The Lord of the Rings: The Fellowship of the Ring',
        year: 2001,
    },
    {
        label: 'Star Wars: Episode V - The Empire Strikes Back',
        year: 1980,
    },
    { label: 'Forrest Gump', year: 1994 },
    { label: 'Inception', year: 2010 },
    {
        label: 'The Lord of the Rings: The Two Towers',
        year: 2002,
    },
    { label: 'One Flew Over the Cuckoo\'s Nest', year: 1975 },
    { label: 'Goodfellas', year: 1990 },
    { label: 'The Matrix', year: 1999 },
    { label: 'Seven Samurai', year: 1954 },
    {
        label: 'Star Wars: Episode IV - A New Hope',
        year: 1977,
    },
    { label: 'City of God', year: 2002 },
    { label: 'Se7en', year: 1995 },
    { label: 'The Silence of the Lambs', year: 1991 },
    { label: 'It\'s a Wonderful Life', year: 1946 },
    { label: 'Life Is Beautiful', year: 1997 },
    { label: 'The Usual Suspects', year: 1995 },
    { label: 'Léon: The Professional', year: 1994 },
    { label: 'Spirited Away', year: 2001 },
    { label: 'Saving Private Ryan', year: 1998 },
    { label: 'Once Upon a Time in the West', year: 1968 },
    { label: 'American History X', year: 1998 },
    { label: 'Interstellar', year: 2014 },
    { label: 'Casablanca', year: 1942 },
    { label: 'City Lights', year: 1931 },
    { label: 'Psycho', year: 1960 },
    { label: 'The Green Mile', year: 1999 },
    { label: 'The Intouchables', year: 2011 },
    { label: 'Modern Times', year: 1936 },
    { label: 'Raiders of the Lost Ark', year: 1981 },
    { label: 'Rear Window', year: 1954 },
    { label: 'The Pianist', year: 2002 },
    { label: 'The Departed', year: 2006 },
    { label: 'Terminator 2: Judgment Day', year: 1991 },
    { label: 'Back to the Future', year: 1985 },
    { label: 'Whiplash', year: 2014 },
];
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
            onTrigger: function () {
                setOpen(function (p) { return !p; });
            }, label: 'Hide/Show quick commands',
        });
    });
    return _jsx(_Fragment, { children: open && _jsx("div", __assign({ style: {
                position: 'absolute',
                top: '32px',
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
            } }, { children: _jsx(ClickAwayListener, __assign({ onClickAway: function () { return setOpen(false); } }, { children: _jsx(Paper, __assign({ style: { width: '60vw', maxWidth: '750px', padding: '8px' }, elevation: 8 }, { children: _jsx(Autocomplete, { disablePortal: true, open: true, inputValue: inputValue, clearOnEscape: true, onClose: function (_, reason) {
                            if (reason === 'escape') {
                                setOpen(false);
                            }
                        }, autoSelect: true, onInputChange: function (_, newInputValue) {
                            setInputValue(newInputValue);
                        }, onChange: function (_, v) {
                            handleCallCommand(v.id);
                            setOpen(false);
                        }, fullWidth: true, openOnFocus: true, style: { position: 'relative' }, PaperComponent: function (_a) {
                            var children = _a.children;
                            return _jsxs(Paper, __assign({ style: { position: 'relative' } }, { children: [_jsx("div", __assign({ style: { position: 'relative' } }, { children: children })), _jsx(InternalHeader, { id: "quickCommands", noDefaults: true, title: 'Quick commands' })] }));
                        }, renderOption: function (props, option) {
                            return _jsx("div", __assign({}, props, { onContextMenu: function (e) { return e.preventDefault(); } }, { children: _jsxs(Box, __assign({ display: "flex", justifyContent: 'space-between', style: { width: '100%' }, alignItems: "center" }, { children: [_jsxs(Box, __assign({ display: "flex", style: { gap: '8px' }, flexWrap: "nowrap", alignItems: "center" }, { children: [cloneElement(option.icon, { style: { fontSize: '16px' } }), highlightString(option.label, inputValue)] })), option.shortcutId && _jsx(_Fragment, { children: _jsx(KeyboardHelper, { shortcutId: option.shortcutId, asChip: true }) })] })) }));
                        }, id: "combo-box-demo", options: commands, renderInput: function (params) { return _jsx(TextField, __assign({ autoFocus: true }, params, { fullWidth: true, size: "small", label: "Commands" })); } }) })) })) })) });
});
