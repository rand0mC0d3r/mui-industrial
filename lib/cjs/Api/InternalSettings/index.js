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
var CheckBoxOutlineBlankOutlined_1 = __importDefault(require("@mui/icons-material/CheckBoxOutlineBlankOutlined"));
var CheckBoxOutlined_1 = __importDefault(require("@mui/icons-material/CheckBoxOutlined"));
var material_1 = require("@mui/material");
var react_1 = require("react");
var index_types_1 = require("../../index.types");
var Store_1 = __importDefault(require("../../Store"));
var css_1 = require("./css");
exports.default = (function (_a) {
    var anchorEl = _a.anchorEl, setAnchorEl = _a.setAnchorEl;
    var _b = (0, react_1.useContext)(Store_1.default), status = _b.status, settings = _b.settings, handleStatusVisibilityToggle = _b.handleStatusVisibilityToggle;
    var position = settings.position;
    var open = Boolean(anchorEl);
    var onClose = function () { return setAnchorEl(null); };
    var statusEntry = function (statusItem) { return (0, jsx_runtime_1.jsxs)(css_1.SElementItem, __assign({ onClick: function () { return handleStatusVisibilityToggle({ id: statusItem.uniqueId }); } }, { children: [statusItem.visible ? (0, jsx_runtime_1.jsx)(CheckBoxOutlined_1.default, {}) : (0, jsx_runtime_1.jsx)(CheckBoxOutlineBlankOutlined_1.default, {}), statusItem.children || (0, jsx_runtime_1.jsx)(css_1.StyledTypographyNoChildren, __assign({ variant: "caption", color: "textSecondary" }, { children: "No content for child" }))] })); };
    var entryWrapper = function (statusItem) { return (0, jsx_runtime_1.jsx)(material_1.Tooltip, __assign({}, { key: statusItem.uniqueId, title: 'Toggle visibility of tile' }, { children: statusEntry(statusItem) })); };
    return (0, jsx_runtime_1.jsx)(material_1.Popover, __assign({ id: "toggle-status-popover" }, { open: open, anchorEl: anchorEl, onClose: onClose, elevation: 2 }, { anchorOrigin: { vertical: position === index_types_1.PlacementPosition.TOP ? 'top' : 'bottom', horizontal: 'center' }, transformOrigin: { vertical: position === index_types_1.PlacementPosition.BOTTOM ? 'bottom' : 'top', horizontal: 'center' }, style: { marginTop: "".concat((position === index_types_1.PlacementPosition.TOP ? 1 : -1) * 12, "px") } }, { children: (0, jsx_runtime_1.jsx)(css_1.SElement, __assign({}, { onContextMenu: function (e) { e.preventDefault(); } }, { children: [false, true].map(function (state) { return (0, jsx_runtime_1.jsx)("div", { children: status.filter(function (_a) {
                    var secondary = _a.secondary;
                    return secondary === state;
                }).map(function (statusItem) { return entryWrapper(statusItem); }) }, state.toString()); }) })) }));
});
