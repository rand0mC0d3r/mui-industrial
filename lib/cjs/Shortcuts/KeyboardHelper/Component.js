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
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
var History_1 = __importDefault(require("@mui/icons-material/History"));
var material_1 = require("@mui/material");
var react_1 = require("react");
var Store_1 = __importDefault(require("../../Store"));
var css_1 = require("./css");
exports.default = (function (_a) {
    var idPopper = _a.idPopper, anchorEl = _a.anchorEl, open = _a.open, handleClose = _a.handleClose, shortcutId = _a.shortcutId, shortcutObject = _a.shortcutObject;
    var handleKeyboardUpdate = (0, react_1.useContext)(Store_1.default).handleKeyboardUpdate;
    var handleKeyboardRevert = (0, react_1.useContext)(Store_1.default).handleKeyboardRevert;
    var renderChip = function (label, diff, highlight) { return (0, jsx_runtime_1.jsx)(css_1.StyledKey, __assign({ elevation: 1, onClick: function () { return handleKeyboardUpdate(shortcutId, __assign(__assign({}, shortcutObject), diff)); }, highlight: (highlight || false).toString() }, { children: label })); };
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(css_1.StyledPopper, __assign({}, {
            elevation: 2,
            open: open,
            anchorEl: anchorEl,
            onClose: handleClose,
            id: "mui-status-panel-popover-".concat(idPopper),
        }, { children: (0, jsx_runtime_1.jsx)(material_1.ClickAwayListener, __assign({ onClickAway: function () { return handleClose(); } }, { children: (0, jsx_runtime_1.jsx)(material_1.Tooltip, __assign({ open: true, placement: 'bottom', arrow: true, title: "Select another key combination for this action" }, { children: (0, jsx_runtime_1.jsx)(css_1.StyledContainer, { children: (0, jsx_runtime_1.jsx)(material_1.TextField, { size: "small", variant: 'outlined', label: "Key", autoFocus: true, onFocus: function (e) { return e.currentTarget.select(); }, InputProps: {
                                startAdornment: (0, jsx_runtime_1.jsxs)(material_1.InputAdornment, __assign({ position: "start", style: { display: 'flex', gap: '4px' } }, { children: [renderChip('⌃', { ctrlKey: !(shortcutObject === null || shortcutObject === void 0 ? void 0 : shortcutObject.ctrlKey) }, shortcutObject === null || shortcutObject === void 0 ? void 0 : shortcutObject.ctrlKey), renderChip('⌥', { altKey: !(shortcutObject === null || shortcutObject === void 0 ? void 0 : shortcutObject.altKey) }, shortcutObject === null || shortcutObject === void 0 ? void 0 : shortcutObject.altKey), renderChip('⌘', { metaKey: !(shortcutObject === null || shortcutObject === void 0 ? void 0 : shortcutObject.metaKey) }, shortcutObject === null || shortcutObject === void 0 ? void 0 : shortcutObject.metaKey), renderChip('⇧', { shiftKey: !(shortcutObject === null || shortcutObject === void 0 ? void 0 : shortcutObject.shiftKey) }, shortcutObject === null || shortcutObject === void 0 ? void 0 : shortcutObject.shiftKey)] })),
                                endAdornment: shortcutObject.original && (0, jsx_runtime_1.jsx)(material_1.InputAdornment, __assign({ position: "end" }, { children: (0, jsx_runtime_1.jsx)(material_1.Tooltip, __assign({ title: "Revert to original shortcut" }, { children: (0, jsx_runtime_1.jsx)(History_1.default, { style: { fontSize: '16px', cursor: 'pointer' }, color: "action", onClick: function () { return handleKeyboardRevert(shortcutId); } }) })) })),
                            }, value: shortcutObject === null || shortcutObject === void 0 ? void 0 : shortcutObject.char, onChange: function (e) { return e.target.value.length > 0 &&
                                handleKeyboardUpdate(shortcutId, __assign(__assign({}, shortcutObject), { char: e.target.value.substring(0, 1).toUpperCase() })); } }) }) })) })) })) });
});
