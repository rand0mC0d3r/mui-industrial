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
var Store_1 = __importDefault(require("../../Store"));
var Component_1 = __importDefault(require("./Component"));
var css_1 = require("./css");
var shortcutString = function (shortcutObject) { return [
    (shortcutObject === null || shortcutObject === void 0 ? void 0 : shortcutObject.shiftKey) && '⇧',
    (shortcutObject === null || shortcutObject === void 0 ? void 0 : shortcutObject.ctrlKey) && '⌃',
    (shortcutObject === null || shortcutObject === void 0 ? void 0 : shortcutObject.altKey) && '⌥',
    (shortcutObject === null || shortcutObject === void 0 ? void 0 : shortcutObject.metaKey) && '⌘',
    shortcutObject === null || shortcutObject === void 0 ? void 0 : shortcutObject.char,
    (shortcutObject === null || shortcutObject === void 0 ? void 0 : shortcutObject.ascii) && "Ascii ".concat(shortcutObject.ascii),
].filter(Boolean).join(' '); };
var shortcutStringNg = function (shortcutObject) { return (0, jsx_runtime_1.jsx)(css_1.StyledListOfKeys, { children: [
        (shortcutObject === null || shortcutObject === void 0 ? void 0 : shortcutObject.shiftKey) && '⇧',
        (shortcutObject === null || shortcutObject === void 0 ? void 0 : shortcutObject.ctrlKey) && '⌃',
        (shortcutObject === null || shortcutObject === void 0 ? void 0 : shortcutObject.altKey) && '⌥',
        (shortcutObject === null || shortcutObject === void 0 ? void 0 : shortcutObject.metaKey) && '⌘',
        shortcutObject === null || shortcutObject === void 0 ? void 0 : shortcutObject.char,
        (shortcutObject === null || shortcutObject === void 0 ? void 0 : shortcutObject.ascii) && "Ascii (".concat(shortcutObject.ascii, ")"),
    ]
        .filter(Boolean)
        .map(function (s) { return (0, jsx_runtime_1.jsx)(css_1.StyledKey, __assign({ ascii: (s || '').includes('(').toString(), elevation: 1 }, { children: s }), "char-".concat(s)); }) }); };
var baseTooltip = function (shortcutObject) { return "".concat(shortcutObject && "".concat(shortcutObject.label, " -"), " ").concat(shortcutString(shortcutObject)); };
exports.default = (function (_a) {
    var shortcutId = _a.shortcutId, _b = _a.asChip, asChip = _b === void 0 ? false : _b, _c = _a.hasTooltip, hasTooltip = _c === void 0 ? false : _c, _d = _a.hasOverride, hasOverride = _d === void 0 ? false : _d, style = _a.style;
    var shortcuts = (0, react_1.useContext)(Store_1.default).shortcuts;
    var _e = (0, react_1.useState)(), shortcutObject = _e[0], setShortcutObject = _e[1];
    var _f = (0, react_1.useState)(null), anchorEl = _f[0], setAnchorEl = _f[1];
    var _g = (0, react_1.useState)(baseTooltip), tooltip = _g[0], setTooltip = _g[1];
    var open = Boolean(anchorEl);
    var idPopper = open ? 'simple-popover' : undefined;
    var handleClick = function (event) {
        setAnchorEl(event.currentTarget);
    };
    var handleClose = function () {
        setAnchorEl(null);
    };
    var determineChip = (0, jsx_runtime_1.jsx)("div", __assign({ style: { userSelect: 'none', display: 'flex', alignItems: 'center', gap: '4px' } }, { children: shortcutStringNg(shortcutObject) }));
    var determineTypography = (0, jsx_runtime_1.jsx)(material_1.Typography, __assign({ style: __assign(__assign({}, style), { userSelect: 'none', lineHeight: '1', display: 'flex', alignItems: 'center' }), variant: "caption", color: "inherit" }, { children: shortcutString(shortcutObject) }));
    var determineTooltip = function (element) {
        return (hasTooltip || hasOverride)
            ? (0, jsx_runtime_1.jsx)(material_1.Tooltip, __assign({ title: (0, jsx_runtime_1.jsx)("span", __assign({ style: { userSelect: 'none' } }, { children: tooltip })), placement: "right", arrow: true }, { children: (0, jsx_runtime_1.jsx)("span", __assign({ style: style }, { children: element })) }))
            : element;
    };
    var determineOverride = function (element) {
        return hasOverride
            ? (0, jsx_runtime_1.jsxs)(css_1.StyledOverrideWrapper, __assign({ onContextMenu: function (e) {
                    e.preventDefault();
                    handleClick(e);
                } }, { children: [shortcutObject && (0, jsx_runtime_1.jsx)(Component_1.default, __assign({}, { idPopper: idPopper, anchorEl: anchorEl, open: open, handleClose: handleClose, shortcutId: shortcutId, shortcutObject: shortcutObject })), element] }))
            : element;
    };
    (0, react_1.useEffect)(function () {
        var filledBaseTooltip = baseTooltip(shortcutObject);
        setTooltip(function () { return hasOverride ? "".concat(filledBaseTooltip, " - Right-Click to Override") : filledBaseTooltip; });
    }, [hasOverride, shortcutObject]);
    (0, react_1.useEffect)(function () {
        setShortcutObject(shortcuts.find(function (_a) {
            var id = _a.id;
            return id === shortcutId;
        }));
    }, [shortcutId, shortcuts]);
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: shortcutId
            && shortcutObject
            && determineOverride(determineTooltip(asChip ? determineChip : determineTypography)) });
});
