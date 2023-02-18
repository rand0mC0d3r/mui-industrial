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
/* eslint-disable no-restricted-globals */
/* eslint-disable @typescript-eslint/no-explicit-any */
var material_1 = require("@mui/material");
var styles_1 = require("@mui/material/styles");
var react_1 = require("react");
var index_types_1 = require("../index.types");
var InternalHeader_1 = __importDefault(require("../internal/InternalHeader"));
var Status_1 = __importDefault(require("../Status"));
var Store_1 = __importDefault(require("../Store"));
var StyledPopper = (0, styles_1.styled)(material_1.Popper)(function () { return ({
    zIndex: '101',
}); });
var StyledContainer = (0, styles_1.styled)('div')(function (_a) {
    var theme = _a.theme, elevation = _a.elevation, highlight = _a.highlight, variant = _a.variant, decoration = _a.decoration;
    return ({
        display: 'flex',
        alignItems: 'stretch',
        position: 'relative',
        flexDirection: 'column',
        backgroundColor: "".concat((0, material_1.alpha)(theme.palette.background.default, 0.75)),
        backdropFilter: 'blur(8px)',
        borderRadius: "".concat(theme.shape.borderRadius, "px"),
        margin: decoration === 'true' ? "".concat(theme.spacing(0.75), " 0px") : "".concat(theme.spacing(0.25), " 0px"),
        padding: 0,
        border: variant === 'default'
            ? '2px solid transparent'
            : "2px solid ".concat(highlight !== 'default' ? theme.palette[highlight].main : 'transparent'),
        boxShadow: theme.shadows[elevation]
    });
});
function default_1(_a) {
    var id = _a.id, _b = _a.secondary, secondary = _b === void 0 ? false : _b, _c = _a.elevation, elevation = _c === void 0 ? 2 : _c, style = _a.style, onClick = _a.onClick, onClose = _a.onClose, _d = _a.highlight, highlight = _d === void 0 ? 'default' : _d, _e = _a.tooltip, tooltip = _e === void 0 ? '' : _e, children = _a.children, popover = _a.popover, popoverTitle = _a.popoverTitle, popoverActions = _a.popoverActions, _f = _a.hasToolbar, hasToolbar = _f === void 0 ? true : _f, _g = _a.hasDecoration, hasDecoration = _g === void 0 ? true : _g, _h = _a.endSeparator, endSeparator = _h === void 0 ? false : _h, _j = _a.startSeparator, startSeparator = _j === void 0 ? false : _j;
    var _k = (0, react_1.useContext)(Store_1.default), status = _k.status, settings = _k.settings;
    var _l = (0, react_1.useState)(null), statusObject = _l[0], setStatusObject = _l[1];
    var _m = (0, react_1.useState)(null), anchorEl = _m[0], setAnchorEl = _m[1];
    var open = Boolean(anchorEl);
    var handleOnClick = function (e) {
        if (onClick && !(statusObject === null || statusObject === void 0 ? void 0 : statusObject.keepOpen)) {
            onClick();
        }
        if (anchorEl && !(statusObject === null || statusObject === void 0 ? void 0 : statusObject.keepOpen)) {
            setAnchorEl(null);
        }
        else {
            setAnchorEl(e.currentTarget);
        }
    };
    var handleOnClose = function () {
        if (onClose && !(statusObject === null || statusObject === void 0 ? void 0 : statusObject.keepOpen)) {
            onClose();
        }
        if (!(statusObject === null || statusObject === void 0 ? void 0 : statusObject.keepOpen) || !settings.hasLock) {
            setAnchorEl(null);
        }
    };
    (0, react_1.useEffect)(function () {
        var foundObject = status.find(function (item) { return item.uniqueId === id; });
        if (foundObject) {
            setStatusObject(foundObject);
        }
    }, [status, id]);
    var determineHighlight = function () { return ((statusObject === null || statusObject === void 0 ? void 0 : statusObject.keepOpen) || open) ? 'primary' : highlight; };
    return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Status_1.default, __assign({}, {
                id: id,
                tooltip: open ? null : tooltip,
                endSeparator: endSeparator,
                startSeparator: startSeparator,
                hasArrow: open && hasDecoration,
                highlight: determineHighlight(),
                secondary: secondary,
                onClick: handleOnClick,
                style: __assign(__assign({}, style), { cursor: 'context-menu', minWidth: '24px' }),
            }, { children: children })), (0, jsx_runtime_1.jsx)(StyledPopper, __assign({}, {
                keepMounted: statusObject === null || statusObject === void 0 ? void 0 : statusObject.keepOpen,
                open: open,
                anchorEl: anchorEl,
                onClose: onClose,
                elevation: elevation,
                placement: "".concat(settings.position === index_types_1.PlacementPosition.Top ? 'bottom' : 'top', "-").concat(secondary ? 'end' : 'start'),
                id: "mui-status-panel-popover-".concat(id),
            }, { children: (0, jsx_runtime_1.jsx)(material_1.ClickAwayListener, __assign({ onClickAway: function () { return handleOnClose(); } }, { children: (0, jsx_runtime_1.jsxs)(StyledContainer, __assign({}, {
                        elevation: elevation,
                        highlight: determineHighlight().toString(),
                        variant: settings.variant.toString(),
                        decoration: hasDecoration.toString()
                    }, { children: [popover, hasToolbar && (0, jsx_runtime_1.jsx)(InternalHeader_1.default, __assign({}, { id: id, popoverActions: popoverActions, popoverTitle: popoverTitle }))] })) })) }))] });
}
exports.default = default_1;
