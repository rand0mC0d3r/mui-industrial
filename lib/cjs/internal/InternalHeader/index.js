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
var LockOpenOutlined_1 = __importDefault(require("@mui/icons-material/LockOpenOutlined"));
var LockOutlined_1 = __importDefault(require("@mui/icons-material/LockOutlined"));
var material_1 = require("@mui/material");
var styles_1 = require("@mui/material/styles");
var react_1 = require("react");
var Store_1 = __importDefault(require("../../Store"));
var StyledActionsWrapper = (0, styles_1.styled)('div')(function (_a) {
    var theme = _a.theme;
    return ({
        padding: "".concat(theme.spacing(0.5), " ").concat(theme.spacing(1)),
        borderTop: "1px solid ".concat(theme.palette.divider),
        display: 'flex',
        justifyContent: 'space-between',
        userSelect: 'none',
        alignItems: 'center',
    });
});
var StyledActions = (0, styles_1.styled)('div')(function (_a) {
    var theme = _a.theme;
    return ({
        gap: "".concat(theme.shape.borderRadius, "px"),
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    });
});
var StyledTypography = (0, styles_1.styled)(material_1.Typography)(function () { return ({
    textOverflow: 'ellipsis',
    maxWidth: '225px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
}); });
exports.default = (function (_a) {
    var id = _a.id, title = _a.title, actions = _a.actions;
    var _b = (0, react_1.useContext)(Store_1.default), status = _b.status, settings = _b.settings, handleStatusKeepOpenToggle = _b.handleStatusKeepOpenToggle;
    var _c = (0, react_1.useState)(null), statusObject = _c[0], setStatusObject = _c[1];
    (0, react_1.useEffect)(function () {
        if (!status || !id)
            return;
        setStatusObject(status.find(function (_a) {
            var uniqueId = _a.uniqueId;
            return uniqueId === id;
        }) || null);
    }, [status, id]);
    return (0, jsx_runtime_1.jsxs)(StyledActionsWrapper, { children: [(0, jsx_runtime_1.jsx)(StyledTypography, __assign({ variant: "subtitle2", color: "textSecondary" }, { children: title })), (0, jsx_runtime_1.jsxs)(StyledActions, { children: [actions && actions
                        .filter(function (_, i) { return i < 3; })
                        .map(function (action) { return (0, jsx_runtime_1.jsx)(material_1.Tooltip, __assign({}, { title: action === null || action === void 0 ? void 0 : action.title }, { children: (0, jsx_runtime_1.jsx)("span", { children: (0, jsx_runtime_1.jsx)(material_1.IconButton, __assign({ size: "small" }, { onClick: function () { return action === null || action === void 0 ? void 0 : action.onClick(); }, disabled: action === null || action === void 0 ? void 0 : action.disabled }, { children: action === null || action === void 0 ? void 0 : action.icon })) }) }), action === null || action === void 0 ? void 0 : action.title); }), settings.hasLock && (0, jsx_runtime_1.jsx)(material_1.Tooltip, __assign({ title: "Toggle keep-open" }, { children: (0, jsx_runtime_1.jsx)(material_1.IconButton, __assign({ size: "small", onClick: function () { return handleStatusKeepOpenToggle({ id: id }); } }, { children: (statusObject === null || statusObject === void 0 ? void 0 : statusObject.keepOpen) ? (0, jsx_runtime_1.jsx)(LockOutlined_1.default, { color: "primary" }) : (0, jsx_runtime_1.jsx)(LockOpenOutlined_1.default, {}) })) }))] })] });
});
