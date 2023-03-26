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
var styles_1 = require("@mui/material/styles");
var react_1 = require("react");
var index_types_1 = require("../../index.types");
var Store_1 = __importDefault(require("../../Store"));
var SPrimary = (0, styles_1.styled)('div')(function () { return ({
    display: 'flex',
    flexWrap: 'nowrap',
    overflow: 'hidden',
    justifyContent: 'flex-start',
    '&::-webkit-scrollbar': {
        display: 'none',
    },
}); });
var SSecondary = (0, styles_1.styled)('div')(function (_a) {
    var theme = _a.theme;
    return ({
        display: 'flex',
        flexWrap: 'nowrap',
        overflow: 'hidden',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: '0 1 auto',
        minWidth: "".concat(theme.spacing(2)),
        '&::-webkit-scrollbar': {
            display: 'none',
        },
    });
});
var SWrapper = (0, styles_1.styled)('div')(function (_a) {
    var theme = _a.theme, justifyContent = _a.justifyContent, hasBorder = _a.hasBorder, fullWidth = _a.fullWidth, position = _a.position, width = _a.width;
    return ({
        gap: '4px',
        display: 'flex',
        alignItems: 'stretch',
        alignSelf: 'center',
        overflow: 'hidden',
        width: "".concat(width),
        justifyContent: "".concat(justifyContent),
        boxShadow: !fullWidth && hasBorder
            ? [
                "inset 0px ".concat(position === 'top' ? -3 : 3, "px 0px -2px ").concat(theme.palette.divider),
                "inset -3px 0px 0px -2px ".concat(theme.palette.divider),
                "inset 3px 0px 0px -2px ".concat(theme.palette.divider),
            ].join(',')
            : 'none',
    });
});
exports.default = (function (_a) {
    var style = _a.style;
    var _b = (0, react_1.useContext)(Store_1.default), status = _b.status, settings = _b.settings;
    var _c = settings, position = _c.position, fullWidth = _c.fullWidth, hasBorder = _c.hasBorder, width = _c.width, justifyContent = _c.justifyContent;
    return (0, jsx_runtime_1.jsx)(SWrapper, __assign({}, { justifyContent: justifyContent, width: width, fullWidth: fullWidth, hasBorder: hasBorder, position: position, style: style }, { children: status.length > 0 && (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(SPrimary, __assign({}, { id: "".concat(index_types_1.domStatusBarId, "-primary") })), (0, jsx_runtime_1.jsx)(SSecondary, __assign({}, { id: "".concat(index_types_1.domStatusBarId, "-secondary") }))] }) }));
});
