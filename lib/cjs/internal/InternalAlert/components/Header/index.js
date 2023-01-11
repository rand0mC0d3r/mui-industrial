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
var ArrowForward_1 = __importDefault(require("@mui/icons-material/ArrowForward"));
var Close_1 = __importDefault(require("@mui/icons-material/Close"));
var ExpandLess_1 = __importDefault(require("@mui/icons-material/ExpandLess"));
var ExpandMore_1 = __importDefault(require("@mui/icons-material/ExpandMore"));
var material_1 = require("@mui/material");
var styles_1 = require("@mui/material/styles");
var react_1 = require("react");
var Store_1 = __importDefault(require("../../../../Store"));
var SHeader = (0, styles_1.styled)('div')(function (_a) {
    var expanded = _a.expanded;
    return ({
        display: 'flex',
        alignItems: 'center',
        paddingBottom: expanded === 'true' ? '8px' : '0px',
        marginTop: expanded === 'true' ? '-4px' : '0px',
        justifyContent: 'space-between',
        width: '100%',
    });
});
var SActionButtons = (0, styles_1.styled)('div')(function () { return ({
    display: 'flex',
    flexDirection: 'row',
}); });
var STitle = (0, styles_1.styled)(material_1.Typography)(function () { return ({
    userSelect: 'none',
    textTransform: 'capitalize',
    fontWeight: 'bold',
}); });
var SMessage = (0, styles_1.styled)(material_1.Typography)(function (_a) {
    var ellipsis = _a.ellipsis;
    return ({
        whiteSpace: ellipsis === 'true' ? 'nowrap' : 'normal',
        overflow: ellipsis === 'true' ? 'hidden' : 'unset',
        textOverflow: ellipsis === 'true' ? 'ellipsis' : 'unset',
        lineHeight: ellipsis === 'true' ? 'initial' : '1.65',
    });
});
function default_1(_a) {
    var uniqueId = _a.uniqueId, actions = _a.actions, severity = _a.severity, message = _a.message, _b = _a.isRemoveFlag, isRemoveFlag = _b === void 0 ? false : _b;
    var handleSnackbarDestroy = (0, react_1.useContext)(Store_1.default).handleSnackbarDestroy;
    var _c = (0, react_1.useState)(false), isExpanded = _c[0], setIsExpanded = _c[1];
    var toggleExpanded = function () {
        if ((actions === null || actions === void 0 ? void 0 : actions.length) > 0)
            return;
        setIsExpanded(!isExpanded);
    };
    var closeAlert = function () {
        handleSnackbarDestroy({ uniqueId: uniqueId });
    };
    (0, react_1.useEffect)(function () {
        if (actions) {
            setIsExpanded(true);
        }
    }, [actions]);
    var getMessage = function (ellipsis) {
        if (ellipsis === void 0) { ellipsis = false; }
        return (0, jsx_runtime_1.jsx)(SMessage, __assign({ ellipsis: ellipsis.toString() }, { children: message }));
    };
    return (0, jsx_runtime_1.jsxs)(SHeader, __assign({ expanded: isExpanded.toString() }, { children: [(isExpanded)
                ? (0, jsx_runtime_1.jsx)(STitle, __assign({ onDoubleClick: toggleExpanded, variant: "subtitle1", color: "inherit" }, { children: severity }))
                : (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: !actions
                        ? (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: getMessage(true) })
                        : (0, jsx_runtime_1.jsx)(STitle, __assign({ onDoubleClick: toggleExpanded, variant: "subtitle1", color: "inherit" }, { children: severity })) }), (0, jsx_runtime_1.jsxs)(SActionButtons, { children: [!actions && (0, jsx_runtime_1.jsx)(material_1.Tooltip, __assign({ arrow: true, title: "Expand/Collapse alert" }, { children: (0, jsx_runtime_1.jsx)(material_1.IconButton, __assign({ color: "inherit", size: "small", onClick: toggleExpanded }, { children: !isExpanded
                                ? (0, jsx_runtime_1.jsx)(ExpandMore_1.default, { fontSize: "small" })
                                : (0, jsx_runtime_1.jsx)(ExpandLess_1.default, { fontSize: "small" }) })) })), (0, jsx_runtime_1.jsx)(material_1.Tooltip, __assign({ arrow: true, title: isRemoveFlag ? 'Close alert' : 'Dismiss alert' }, { children: (0, jsx_runtime_1.jsx)(material_1.IconButton, __assign({ color: "inherit", onClick: closeAlert, size: "small" }, { children: isRemoveFlag ? (0, jsx_runtime_1.jsx)(Close_1.default, { fontSize: "small" }) : (0, jsx_runtime_1.jsx)(ArrowForward_1.default, { fontSize: "small" }) })) }))] })] }));
}
exports.default = default_1;
