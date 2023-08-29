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
var Check_1 = __importDefault(require("@mui/icons-material/Check"));
var ErrorOutlineOutlined_1 = __importDefault(require("@mui/icons-material/ErrorOutlineOutlined"));
var PriorityHighOutlined_1 = __importDefault(require("@mui/icons-material/PriorityHighOutlined"));
var WarningAmber_1 = __importDefault(require("@mui/icons-material/WarningAmber"));
var material_1 = require("@mui/material");
var react_1 = require("react");
var index_types_1 = require("../../index.types");
var Store_1 = __importDefault(require("../../Store"));
var Footer_1 = __importDefault(require("./components/Footer"));
var Header_1 = __importDefault(require("./components/Header"));
var css_1 = require("./css");
exports.default = (function (_a) {
    var actions = _a.actions, autoHideDuration = _a.autoHideDuration, code = _a.code, id = _a.id, message = _a.message, severity = _a.severity, _b = _a.isRemoveFlag, isRemoveFlag = _b === void 0 ? false : _b, source = _a.source;
    var _c = (0, react_1.useState)(false), isExpanded = _c[0], setIsExpanded = _c[1];
    var _d = (0, react_1.useContext)(Store_1.default), handleSnackbarHide = _d.handleSnackbarHide, snackbars = _d.snackbars;
    (0, react_1.useEffect)(function () {
        if (actions)
            setIsExpanded(true);
    }, [actions]);
    (0, react_1.useEffect)(function () {
        if (autoHideDuration && snackbars.some(function (_a) {
            var snackbarId = _a.id, open = _a.open;
            return snackbarId === id && open;
        })) {
            var timeout_1 = setTimeout(function () {
                handleSnackbarHide({ id: id });
            }, autoHideDuration);
            return function () { return clearTimeout(timeout_1); };
        }
        return function () { };
    }, [autoHideDuration, handleSnackbarHide, id, snackbars]);
    var getMessage = function (ellipsis) {
        if (ellipsis === void 0) { ellipsis = false; }
        return (0, jsx_runtime_1.jsx)(css_1.SMessage, __assign({ ellipsis: ellipsis.toString() }, { children: message }));
    };
    var getIcon = function (icon) { return (0, jsx_runtime_1.jsx)(material_1.Tooltip, __assign({ placement: "left", arrow: true, title: "".concat(severity === null || severity === void 0 ? void 0 : severity.toUpperCase()).concat(source ? " - Source: ".concat(source) : '') }, { children: (0, react_1.cloneElement)(icon, { style: { fontSize: 'inherit' } }) })); };
    return (0, jsx_runtime_1.jsx)(css_1.SAlert, __assign({ onContextMenu: function (e) { return e.preventDefault(); }, expanded: isExpanded.toString(), actions: ((actions === null || actions === void 0 ? void 0 : actions.length) > 0).toString(), onDoubleClick: function () { return !actions && setIsExpanded(!isExpanded); }, icon: (0, jsx_runtime_1.jsxs)("span", __assign({ style: { lineHeight: '0px' } }, { children: [severity === index_types_1.Severity.INFO && getIcon((0, jsx_runtime_1.jsx)(PriorityHighOutlined_1.default, {})), severity === index_types_1.Severity.SUCCESS && getIcon((0, jsx_runtime_1.jsx)(Check_1.default, {})), severity === index_types_1.Severity.WARNING && getIcon((0, jsx_runtime_1.jsx)(WarningAmber_1.default, {})), severity === index_types_1.Severity.ERROR && getIcon((0, jsx_runtime_1.jsx)(ErrorOutlineOutlined_1.default, {}))] })) }, { severity: severity }, { children: (0, jsx_runtime_1.jsxs)(css_1.SWrapper, { children: [(0, jsx_runtime_1.jsx)(Header_1.default, __assign({}, { id: id, code: code, actions: actions, severity: severity, message: message, isRemoveFlag: isRemoveFlag, isExpanded: isExpanded, setIsExpanded: setIsExpanded })), (isExpanded || actions) && getMessage(), isExpanded && code && (0, jsx_runtime_1.jsx)(css_1.SCode, { onDoubleClick: function (e) { return e.preventDefault(); }, defaultValue: code, height: Math.min(10, code.split('\n').length) }), (isExpanded || actions) && (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (source || actions) && (0, jsx_runtime_1.jsx)(Footer_1.default, __assign({}, { actions: actions, severity: severity, source: source })) })] }) }), id);
});
