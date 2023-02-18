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
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
var Check_1 = __importDefault(require("@mui/icons-material/Check"));
var ErrorOutlineOutlined_1 = __importDefault(require("@mui/icons-material/ErrorOutlineOutlined"));
var PriorityHighOutlined_1 = __importDefault(require("@mui/icons-material/PriorityHighOutlined"));
var WarningAmber_1 = __importDefault(require("@mui/icons-material/WarningAmber"));
var material_1 = require("@mui/material");
var styles_1 = require("@mui/material/styles");
var react_1 = require("react");
var Footer_1 = __importDefault(require("./components/Footer"));
var Header_1 = __importDefault(require("./components/Header"));
var SCode = (0, styles_1.styled)('textarea')(function (_a) {
    var height = _a.height, theme = _a.theme;
    return ({
        fontFamily: 'monospace',
        backgroundColor: "".concat(theme.palette.divider),
        padding: '8px',
        resize: 'vertical',
        whiteSpace: 'nowrap',
        marginTop: '8px',
        marginBottom: '8px',
        borderColor: 'inherit',
        maxHeight: '300px',
        minHeight: "".concat((height * 20) + 10, "px"),
        borderRadius: '4px',
        color: 'inherit',
        '&::selection': {
            backgroundColor: "".concat(theme.palette.divider),
            textDecoration: 'underline',
            textDecorationStyle: 'dotted',
            textDecorationColor: "".concat(theme.palette.divider),
        },
        '&:focus-visible': {
            outline: '0px',
        },
    });
});
var SMessage = (0, styles_1.styled)(material_1.Typography)(function (_a) {
    var ellipsis = _a.ellipsis;
    return ({
        whiteSpace: ellipsis === 'true' ? 'nowrap' : 'normal',
        overflow: ellipsis === 'true' ? 'hidden' : 'unset',
        textOverflow: ellipsis === 'true' ? 'ellipsis' : 'unset',
        lineHeight: ellipsis === 'true' ? 'initial' : '1.65',
    });
});
var SWrapper = (0, styles_1.styled)('div')(function () { return ({
    display: 'flex',
    flex: '1 1 auto',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
}); });
var SAlert = (0, styles_1.styled)(material_1.Alert)(function (_a) {
    var expanded = _a.expanded, actions = _a.actions;
    return ({
        '.MuiAlert-message': {
            minWidth: 'unset',
            width: '100%',
            padding: expanded === 'true' ? '8px 0px' : '0px',
            display: 'flex',
            flexDirection: (actions === 'true' || expanded === 'true') ? 'column' : 'row',
        },
    });
});
function default_1(_a) {
    var uniqueId = _a.uniqueId, actions = _a.actions, source = _a.source, severity = _a.severity, message = _a.message, code = _a.code, _b = _a.isRemoveFlag, isRemoveFlag = _b === void 0 ? false : _b;
    var _c = (0, react_1.useState)(false), isExpanded = _c[0], setIsExpanded = _c[1];
    (0, react_1.useEffect)(function () {
        if (actions) {
            setIsExpanded(true);
        }
    }, [actions]);
    var getMessage = function (ellipsis) {
        if (ellipsis === void 0) { ellipsis = false; }
        return (0, jsx_runtime_1.jsx)(SMessage, __assign({ ellipsis: ellipsis.toString() }, { children: message }));
    };
    var getIcon = function (icon) { return (0, jsx_runtime_1.jsx)(material_1.Tooltip, __assign({ placement: "left", arrow: true, title: "".concat(severity.toUpperCase()).concat(source ? " - Source: ".concat(source) : '') }, { children: (0, react_1.cloneElement)(icon, { style: { fontSize: 'inherit' } }) })); };
    return (0, jsx_runtime_1.jsx)(SAlert, __assign({ expanded: isExpanded.toString(), actions: ((actions === null || actions === void 0 ? void 0 : actions.length) > 0).toString(), onDoubleClick: function () { return !actions && setIsExpanded(!isExpanded); }, icon: (0, jsx_runtime_1.jsxs)("span", __assign({ style: { lineHeight: '0px' } }, { children: [severity === 'info' && getIcon((0, jsx_runtime_1.jsx)(PriorityHighOutlined_1.default, {})), severity === 'success' && getIcon((0, jsx_runtime_1.jsx)(Check_1.default, {})), severity === 'warning' && getIcon((0, jsx_runtime_1.jsx)(WarningAmber_1.default, {})), severity === 'error' && getIcon((0, jsx_runtime_1.jsx)(ErrorOutlineOutlined_1.default, {}))] })) }, { severity: severity }, { children: (0, jsx_runtime_1.jsxs)(SWrapper, { children: [(0, jsx_runtime_1.jsx)(Header_1.default, __assign({}, { uniqueId: uniqueId, code: code, actions: actions, severity: severity, message: message, isRemoveFlag: isRemoveFlag, isExpanded: isExpanded, setIsExpanded: setIsExpanded })), (isExpanded || actions) && getMessage(), isExpanded && code && (0, jsx_runtime_1.jsx)(SCode, { defaultValue: code, spellCheck: "false", height: Math.min(10, code.split('\n').length) }), (isExpanded || actions) && (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (source || actions) && (0, jsx_runtime_1.jsx)(Footer_1.default, __assign({}, { actions: actions, severity: severity, source: source })) })] }) }), uniqueId);
}
exports.default = default_1;
