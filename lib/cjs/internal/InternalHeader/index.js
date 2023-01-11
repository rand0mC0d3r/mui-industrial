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
var LockOpenOutlined_1 = __importDefault(require("@mui/icons-material/LockOpenOutlined"));
var LockOutlined_1 = __importDefault(require("@mui/icons-material/LockOutlined"));
var material_1 = require("@mui/material");
var styles_1 = require("@mui/material/styles");
var react_1 = require("react");
var Store_1 = __importDefault(require("../../Store"));
var StyledActionsWrapper = (0, styles_1.styled)('div')(function (_a) {
    var theme = _a.theme;
    return ({
        padding: '8px',
        display: 'flex',
        justifyContent: 'space-between',
        borderTop: "1px solid ".concat(theme.palette.divider),
        userSelect: 'none',
        alignItems: 'center'
    });
});
var StyledActions = (0, styles_1.styled)('div')(function (_a) {
    var theme = _a.theme;
    return ({
        display: 'flex',
        gap: "".concat(theme.shape.borderRadius, "px"),
        justifyContent: 'flex-end',
        alignItems: 'center'
    });
});
var StyledTypography = (0, styles_1.styled)(material_1.Typography)(function () { return ({
    lineHeight: 1
}); });
function default_1(_a) {
    var id = _a.id, popoverTitle = _a.popoverTitle, popoverActions = _a.popoverActions, keepOpen = _a.keepOpen, setKeepOpen = _a.setKeepOpen;
    var _b = (0, react_1.useContext)(Store_1.default), status = _b.status, settings = _b.settings;
    var _c = (0, react_1.useState)(null), statusObject = _c[0], setStatusObject = _c[1];
    (0, react_1.useEffect)(function () {
        var foundObject = status.find(function (item) { return item.uniqueId === id; });
        if (statusObject === null && foundObject) {
            setStatusObject(foundObject);
        }
    }, [status, id, statusObject]);
    return (0, jsx_runtime_1.jsxs)(StyledActionsWrapper, { children: [(0, jsx_runtime_1.jsx)(StyledTypography, __assign({ variant: "caption", color: "textSecondary" }, { children: popoverTitle })), (0, jsx_runtime_1.jsxs)(StyledActions, { children: [popoverActions, settings.hasLock && (0, jsx_runtime_1.jsx)(material_1.Tooltip, __assign({ title: "Toggle keep-open" }, { children: keepOpen
                            ? (0, jsx_runtime_1.jsx)(LockOutlined_1.default, { onClick: function () { return setKeepOpen(!keepOpen); }, color: "primary", style: { fontSize: 14 } })
                            : (0, jsx_runtime_1.jsx)(LockOpenOutlined_1.default, { onClick: function () { return setKeepOpen(!keepOpen); }, style: { fontSize: 14 } }) }))] })] });
}
exports.default = default_1;
