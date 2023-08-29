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
var ClearAll_1 = __importDefault(require("@mui/icons-material/ClearAll"));
var material_1 = require("@mui/material");
var styles_1 = require("@mui/material/styles");
var react_1 = require("react");
var Store_1 = __importDefault(require("../../Store"));
var InternalAlert_1 = __importDefault(require("../InternalAlert"));
var css_1 = require("./css");
var StyledBox = (0, styles_1.styled)(material_1.Box)(function (_a) {
    var theme = _a.theme;
    return ({
        gap: theme.spacing(1),
        width: '550px',
        padding: '4px',
    });
});
exports.default = (function () {
    var _a = (0, react_1.useContext)(Store_1.default), snackbars = _a.snackbars, handleSnackbarHideAll = _a.handleSnackbarHideAll;
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: snackbars.filter(function (_a) {
            var open = _a.open;
            return open;
        }).length > 0 && (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(css_1.SNotifications, { children: (0, jsx_runtime_1.jsx)(StyledBox, __assign({ display: 'flex', flexDirection: 'column' }, { children: snackbars
                            .filter(function (_a) {
                            var open = _a.open;
                            return open;
                        })
                            .map(function (_a) {
                            var id = _a.id, autoHideDuration = _a.autoHideDuration, severity = _a.severity, message = _a.message, source = _a.source, actions = _a.actions, code = _a.code;
                            return ((0, jsx_runtime_1.jsx)(InternalAlert_1.default, __assign({}, { id: id, autoHideDuration: autoHideDuration, actions: actions, severity: severity, source: source, message: message, code: code }), id));
                        }) })) }), (0, jsx_runtime_1.jsx)(material_1.Tooltip, __assign({ arrow: true, title: 'Clear all notifications' }, { children: (0, jsx_runtime_1.jsx)(material_1.Button, __assign({ variant: "contained", color: 'primary', onClick: function () { return handleSnackbarHideAll(); } }, { children: (0, jsx_runtime_1.jsx)(ClearAll_1.default, {}) })) }))] }) });
});
