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
var ArrowDropUpOutlined_1 = __importDefault(require("@mui/icons-material/ArrowDropUpOutlined"));
var NotificationsOutlined_1 = __importDefault(require("@mui/icons-material/NotificationsOutlined"));
var material_1 = require("@mui/material");
var styles_1 = require("@mui/material/styles");
var react_1 = require("react");
var InternalAlert_1 = __importDefault(require("../internal/InternalAlert"));
var InternalHeader_1 = __importDefault(require("../internal/InternalHeader"));
var Status_1 = __importDefault(require("../Status"));
var StatusHelper_1 = __importDefault(require("../StatusHelper"));
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
        width: '650px',
        gap: '8px',
        alignItems: 'stretch',
        position: 'relative',
        flexDirection: 'column',
        backgroundColor: "".concat((0, material_1.alpha)(theme.palette.background.default, 0.75)),
        backdropFilter: 'blur(8px)',
        borderRadius: "".concat(theme.shape.borderRadius, "px"),
        margin: "".concat(theme.spacing(0.5), " 0px"),
        padding: theme.spacing(0.5),
        border: "3px solid ".concat(theme.palette.primary.main),
        boxShadow: theme.shadows[elevation]
    });
});
function default_1(_a) {
    var _b = _a.id, id = _b === void 0 ? 'notificationsPanel' : _b;
    var _c = (0, react_1.useContext)(Store_1.default), status = _c.status, snackbar = _c.snackbar;
    var _d = (0, react_1.useState)(null), statusObject = _d[0], setStatusObject = _d[1];
    var _e = (0, react_1.useState)(null), anchorEl = _e[0], setAnchorEl = _e[1];
    var _f = (0, react_1.useState)(false), isToggled = _f[0], setIsToggled = _f[1];
    var open = Boolean(anchorEl);
    var handleOnClick = function (e) {
        if (anchorEl) {
            setAnchorEl(null);
        }
        else {
            setAnchorEl(e.currentTarget);
        }
        setIsToggled(e.pageY < screen.height / 2);
    };
    var handleOnClose = function () {
        // if (!settings.hasLock) {
        //   setAnchorEl(null)
        // }
    };
    (0, react_1.useEffect)(function () {
        var foundObject = status.find(function (item) { return item.uniqueId === id; });
        if (statusObject === null && foundObject) {
            setStatusObject(foundObject);
        }
    }, [status, id, statusObject]);
    return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Status_1.default, __assign({}, {
                id: id,
                tooltip: 'Notifications',
                hasArrow: open,
                highlight: open ? 'primary' : 'default',
                secondary: true,
                onClick: handleOnClick,
            }, { children: (0, jsx_runtime_1.jsx)(StatusHelper_1.default, { text: "Notifications", icon: (0, jsx_runtime_1.jsx)(NotificationsOutlined_1.default, {}), notifications: snackbar.length }) })), (0, jsx_runtime_1.jsx)(StyledPopper, __assign({}, {
                open: open,
                anchorEl: anchorEl,
                id: "mui-status-panel-popover-".concat(id),
                toggled: isToggled.toString(),
            }, { children: (0, jsx_runtime_1.jsx)(material_1.ClickAwayListener, __assign({ onClickAway: function () { return handleOnClose(); } }, { children: (0, jsx_runtime_1.jsxs)(StyledContainer, __assign({}, { elevation: 0 }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ style: { position: 'absolute', top: '-17px', left: '0px', right: '0px', display: 'flex', justifyContent: 'center' } }, { children: (0, jsx_runtime_1.jsx)(ArrowDropUpOutlined_1.default, { color: "primary" }) })), snackbar.map(function (_a) {
                                var uniqueId = _a.uniqueId, severity = _a.severity, message = _a.message, source = _a.source, actions = _a.actions, code = _a.code;
                                return ((0, jsx_runtime_1.jsx)(InternalAlert_1.default, __assign({}, { uniqueId: uniqueId, actions: actions, severity: severity, source: source, message: message, code: code }), uniqueId));
                            }), (0, jsx_runtime_1.jsx)(InternalHeader_1.default, __assign({}, { id: id }))] })) })) }))] });
}
exports.default = default_1;
