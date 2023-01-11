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
// import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined'
var material_1 = require("@mui/material");
var styles_1 = require("@mui/material/styles");
var react_1 = require("react");
var InternalHeader_1 = __importDefault(require("../internal/InternalHeader"));
var Status_1 = __importDefault(require("../Status"));
var Store_1 = __importDefault(require("../Store"));
var StyledPopper = (0, styles_1.styled)(material_1.Popper)(function (_a) {
    var toggled = _a.toggled;
    return ({
        zIndex: '99991',
        marginTop: "".concat((toggled === 'true' ? 1 : -1) * 4, "px !important"),
    });
});
var StyledContainer = (0, styles_1.styled)('div')(function (_a) {
    var theme = _a.theme, elevation = _a.elevation;
    return ({
        display: 'flex',
        alignItems: 'stretch',
        position: 'relative',
        flexDirection: 'column',
        backgroundColor: "".concat((0, material_1.alpha)(theme.palette.background.default, 0.75)),
        backdropFilter: 'blur(8px)',
        borderRadius: "".concat(theme.shape.borderRadius, "px"),
        margin: "".concat(theme.spacing(2), " 0px"),
        padding: theme.spacing(0.5),
        border: "3px solid ".concat(theme.palette.primary.main),
        boxShadow: theme.shadows[elevation]
    });
});
function default_1(_a) {
    var id = _a.id, _b = _a.secondary, secondary = _b === void 0 ? false : _b, _c = _a.elevation, elevation = _c === void 0 ? 2 : _c, style = _a.style, onClick = _a.onClick, onClose = _a.onClose, highlight = _a.highlight, _d = _a.tooltip, tooltip = _d === void 0 ? '' : _d, children = _a.children, popover = _a.popover, popoverTitle = _a.popoverTitle, popoverActions = _a.popoverActions;
    var _e = (0, react_1.useContext)(Store_1.default), status = _e.status, settings = _e.settings;
    var _f = (0, react_1.useState)(null), statusObject = _f[0], setStatusObject = _f[1];
    var _g = (0, react_1.useState)(false), keepOpen = _g[0], setKeepOpen = _g[1];
    var _h = (0, react_1.useState)(null), anchorEl = _h[0], setAnchorEl = _h[1];
    var _j = (0, react_1.useState)(false), isToggled = _j[0], setIsToggled = _j[1];
    var open = Boolean(anchorEl);
    var handleOnClick = function (e) {
        if (onClick && !keepOpen) {
            onClick();
        }
        if (anchorEl && !keepOpen) {
            setAnchorEl(null);
        }
        else {
            setAnchorEl(e.currentTarget);
        }
        setIsToggled(e.pageY < screen.height / 2);
    };
    var handleOnClose = function () {
        if (onClose && !keepOpen) {
            onClose();
        }
        if (!keepOpen || !settings.hasLock) {
            setAnchorEl(null);
        }
    };
    (0, react_1.useEffect)(function () {
        var foundObject = status.find(function (item) { return item.uniqueId === id; });
        if (statusObject === null && foundObject) {
            setStatusObject(foundObject);
        }
    }, [status, id, statusObject]);
    return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Status_1.default, __assign({}, {
                id: id,
                tooltip: tooltip,
                hasArrow: open,
                highlight: (keepOpen || open) ? 'primary' : highlight,
                secondary: secondary,
                onClick: handleOnClick,
                style: __assign(__assign({}, style), { cursor: 'context-menu', minWidth: '24px' })
            }, { children: children })), (0, jsx_runtime_1.jsx)(StyledPopper, __assign({}, {
                keepMounted: keepOpen,
                open: open,
                anchorEl: anchorEl,
                onClose: onClose,
                elevation: elevation,
                id: "mui-status-panel-popover-".concat(id),
                toggled: isToggled.toString(),
            }, { children: (0, jsx_runtime_1.jsx)(material_1.ClickAwayListener, __assign({ onClickAway: function () { return handleOnClose(); } }, { children: (0, jsx_runtime_1.jsxs)(StyledContainer, __assign({}, { elevation: elevation }, { children: [popover, (0, jsx_runtime_1.jsx)(InternalHeader_1.default, __assign({}, { id: id, keepOpen: keepOpen, setKeepOpen: setKeepOpen, popoverActions: popoverActions, popoverTitle: popoverTitle }))] })) })) }))] });
}
exports.default = default_1;
