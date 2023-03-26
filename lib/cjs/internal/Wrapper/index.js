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
/* eslint-disable @typescript-eslint/no-explicit-any */
var CheckBoxOutlineBlankOutlined_1 = __importDefault(require("@mui/icons-material/CheckBoxOutlineBlankOutlined"));
var CheckBoxOutlined_1 = __importDefault(require("@mui/icons-material/CheckBoxOutlined"));
var material_1 = require("@mui/material");
var styles_1 = require("@mui/material/styles");
var react_1 = require("react");
var index_types_1 = require("../../index.types");
var Store_1 = __importDefault(require("../../Store"));
var InternalConsole_1 = __importDefault(require("../InternalConsole"));
var InternalKeyboard_1 = __importDefault(require("../InternalKeyboard"));
var InternalNotifications_1 = __importDefault(require("../InternalNotifications"));
var InternalStatus_1 = __importDefault(require("../InternalStatus"));
var SBox = (0, styles_1.styled)('div')(function (_a) {
    var column = _a.column;
    return ({
        height: '100%',
        width: '100%',
        gap: '0px',
        position: 'absolute',
        display: 'flex',
        top: '0px',
        bottom: '0px',
        left: '0px',
        right: '0px',
        flexDirection: column === index_types_1.PlacementPosition.TOP ? 'column-reverse' : 'column',
    });
});
var SNotifications = (0, styles_1.styled)('div')(function (_a) {
    var column = _a.column;
    return ({
        gap: '0px',
        position: 'absolute',
        display: 'flex',
        right: '16px',
        zIndex: 112,
        bottom: column !== index_types_1.PlacementPosition.TOP ? 'unset' : '32px',
        top: column !== index_types_1.PlacementPosition.TOP ? '32px' : 'unset',
        flexDirection: column === index_types_1.PlacementPosition.TOP ? 'column-reverse' : 'column',
    });
});
var SChildren = (0, styles_1.styled)('div')(function () { return ({
    flex: '1 1 auto',
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
}); });
var StyledTypographyNoChildren = (0, styles_1.styled)(material_1.Typography)(function () { return ({
    userSelect: 'none',
}); });
var SElement = (0, styles_1.styled)('div')(function () { return ({
    display: 'flex',
    flexDirection: 'row',
    gap: '16px',
    padding: '8px',
}); });
var SElementItem = (0, styles_1.styled)('div')(function (_a) {
    var theme = _a.theme;
    return ({
        display: 'flex',
        minWidth: '165px',
        cursor: 'pointer',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '4px',
        padding: '4px 6px',
        '&:hover': {
            backgroundColor: theme.palette.primary.light,
            color: "".concat(theme.palette.background.default, " !important"),
        },
    });
});
var SStatusContainer = (0, styles_1.styled)('div')(function (_a) {
    var theme = _a.theme, hasBorder = _a.hasBorder, fullWidth = _a.fullWidth;
    return ({
        alignSelf: 'stretch',
        justifyContent: 'center',
        display: 'flex',
        boxShadow: fullWidth && hasBorder
            ? ["inset 0px 0px 0px 1px ".concat(theme.palette.divider)].join(',')
            : 'none',
        backgroundColor: theme.palette.mode === 'light'
            ? theme.palette.background.default
            : theme.palette.background.paper,
    });
});
exports.default = (function (_a) {
    var children = _a.children, style = _a.style;
    var _b = (0, react_1.useContext)(Store_1.default), status = _b.status, shortcuts = _b.shortcuts, settings = _b.settings, handleStatusVisibilityToggle = _b.handleStatusVisibilityToggle;
    var _c = settings, position = _c.position, fullWidth = _c.fullWidth, hasBorder = _c.hasBorder;
    var _d = (0, react_1.useState)(null), anchorEl = _d[0], setAnchorEl = _d[1];
    var open = Boolean(anchorEl);
    var onClose = function () { return setAnchorEl(null); };
    var onContextMenu = function (e) {
        e.preventDefault();
        setAnchorEl(e.currentTarget);
    };
    var statusEntry = function (statusItem) { return (0, jsx_runtime_1.jsxs)(SElementItem, __assign({ onClick: function () { return handleStatusVisibilityToggle({ id: statusItem.uniqueId }); } }, { children: [statusItem.visible ? (0, jsx_runtime_1.jsx)(CheckBoxOutlined_1.default, {}) : (0, jsx_runtime_1.jsx)(CheckBoxOutlineBlankOutlined_1.default, {}), statusItem.children || (0, jsx_runtime_1.jsx)(StyledTypographyNoChildren, __assign({ variant: "caption", color: "textSecondary" }, { children: "No content for child" }))] })); };
    var entryWrapper = function (statusItem) { return (0, jsx_runtime_1.jsx)(material_1.Tooltip, __assign({}, { key: statusItem.uniqueId, title: 'Toggle visibility of tile' }, { children: statusEntry(statusItem) })); };
    return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(SBox, __assign({ id: "mui-status-wrapper" }, { column: position }, { children: [(0, jsx_runtime_1.jsxs)(SChildren, __assign({ id: "mui-status-children" }, { children: [children, status.some(function (_a) {
                                var type = _a.type;
                                return type === index_types_1.StatusType.CONSOLE;
                            }) && (0, jsx_runtime_1.jsx)(InternalConsole_1.default, {})] })), status.some(function (_a) {
                        var visible = _a.visible;
                        return visible;
                    }) && (0, jsx_runtime_1.jsx)(SStatusContainer, __assign({}, { fullWidth: fullWidth, hasBorder: hasBorder, onContextMenu: onContextMenu }, { children: (0, jsx_runtime_1.jsx)(InternalStatus_1.default, __assign({}, { style: style })) })), (0, jsx_runtime_1.jsx)(SNotifications, __assign({}, { column: position }, { children: (0, jsx_runtime_1.jsx)(InternalNotifications_1.default, {}) })), shortcuts.length > 0 && (0, jsx_runtime_1.jsx)(InternalKeyboard_1.default, {})] })), (0, jsx_runtime_1.jsx)(material_1.Popover, __assign({ id: "toggle-status-popover" }, { open: open, anchorEl: anchorEl, onClose: onClose, elevation: 1 }, { anchorOrigin: { vertical: position === index_types_1.PlacementPosition.TOP ? 'top' : 'bottom', horizontal: 'center' }, transformOrigin: { vertical: position === index_types_1.PlacementPosition.BOTTOM ? 'bottom' : 'top', horizontal: 'center' }, style: { marginTop: "".concat((position === index_types_1.PlacementPosition.TOP ? 1 : -1) * 12, "px") } }, { children: (0, jsx_runtime_1.jsx)(SElement, __assign({}, { onContextMenu: function (e) { e.preventDefault(); } }, { children: [false, true].map(function (state) { return (0, jsx_runtime_1.jsx)("div", { children: status.filter(function (_a) {
                            var secondary = _a.secondary;
                            return secondary === state;
                        }).map(function (statusItem) { return entryWrapper(statusItem); }) }, state.toString()); }) })) }))] });
});
