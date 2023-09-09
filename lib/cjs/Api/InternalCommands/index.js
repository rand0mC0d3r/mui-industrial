"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var material_1 = require("@mui/material");
var react_1 = require("react");
var KeyboardHelper_1 = __importDefault(require("../../Shortcuts/KeyboardHelper"));
var Store_1 = __importDefault(require("../../Store"));
var css_1 = require("./css");
var kbdId = 'commands';
exports.default = (function () {
    var _a = (0, react_1.useContext)(Store_1.default), handleKeyboardRegister = _a.handleKeyboardRegister, handleCallCommand = _a.handleCallCommand, commands = _a.commands;
    var _b = (0, react_1.useState)(false), open = _b[0], setOpen = _b[1];
    var _c = (0, react_1.useState)(''), inputValue = _c[0], setInputValue = _c[1];
    var highlightString = function (str, search) {
        var parts = str.split(new RegExp("(".concat(search, ")"), 'gi'));
        return (0, jsx_runtime_1.jsx)(material_1.Typography, __assign({ variant: "subtitle2", color: "textSecondary" }, { children: parts.map(function (part, i) { return (0, jsx_runtime_1.jsx)(css_1.StyledHighlight, __assign({ highlight: part.toLowerCase() === search.toLowerCase() ? 'true' : 'false' }, { children: part }), i); }) }));
    };
    (0, react_1.useEffect)(function () {
        handleKeyboardRegister({
            id: kbdId,
            shiftKey: true, char: 'P', metaKey: true,
            onTrigger: function () { return setOpen(function (p) { return !p; }); },
            label: 'Hide/Show quick commands',
        });
    });
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: open && (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(material_1.Backdrop, __assign({ open: open, onClick: function () { return setOpen(false); } }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ style: {
                        position: 'absolute',
                        top: '32px',
                        display: 'flex',
                        justifyContent: 'center',
                        width: '100%',
                    } }, { children: (0, jsx_runtime_1.jsx)(material_1.ClickAwayListener, __assign({ onClickAway: function () { return setOpen(false); } }, { children: (0, jsx_runtime_1.jsx)(css_1.SPaper, __assign({ elevation: 8 }, { children: (0, jsx_runtime_1.jsx)(material_1.Autocomplete, { disablePortal: true, open: true, autoHighlight: true, inputValue: inputValue, clearOnEscape: true, onClose: function (_, reason) {
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
                                    return (0, jsx_runtime_1.jsx)(material_1.Paper, __assign({ style: { position: 'relative' } }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ style: { position: 'relative' } }, { children: children })) }));
                                }, renderOption: function (props, option) {
                                    return (0, jsx_runtime_1.jsx)("div", __assign({}, props, { onContextMenu: function (e) { return e.preventDefault(); } }, { children: (0, jsx_runtime_1.jsxs)(material_1.Box, __assign({ display: "flex", justifyContent: 'space-between', style: { width: '100%' }, alignItems: "center" }, { children: [(0, jsx_runtime_1.jsxs)(material_1.Box, __assign({ display: "flex", style: { gap: '8px' }, flexWrap: "nowrap", alignItems: "center" }, { children: [option.icon && (0, react_1.cloneElement)(option.icon, { style: { fontSize: '16px' } }), highlightString(option.label, inputValue)] })), option.shortcutId && (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(KeyboardHelper_1.default, { shortcutId: option.shortcutId, asChip: true }) })] })) }));
                                }, id: "combo-box-demo", options: commands || [], renderInput: function (params) { return (0, jsx_runtime_1.jsx)(material_1.TextField, __assign({ autoFocus: true }, params, { onFocus: function () { return setInputValue(''); }, fullWidth: true, size: "small", label: "Commands" })); } }) })) })) })) })) }) });
});
