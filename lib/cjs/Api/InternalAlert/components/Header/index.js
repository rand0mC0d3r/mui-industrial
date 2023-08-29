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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var ArrowForward_1 = __importDefault(require("@mui/icons-material/ArrowForward"));
var Close_1 = __importDefault(require("@mui/icons-material/Close"));
var ExpandLess_1 = __importDefault(require("@mui/icons-material/ExpandLess"));
var ExpandMore_1 = __importDefault(require("@mui/icons-material/ExpandMore"));
var SubtitlesOutlined_1 = __importDefault(require("@mui/icons-material/SubtitlesOutlined"));
var material_1 = require("@mui/material");
var react_1 = require("react");
var Store_1 = __importStar(require("../../../../Store"));
var css_1 = require("./css");
var componentId = 'snackBar';
exports.default = (function (_a) {
    var code = _a.code, id = _a.id, actions = _a.actions, severity = _a.severity, message = _a.message, _b = _a.isRemoveFlag, isRemoveFlag = _b === void 0 ? false : _b, isExpanded = _a.isExpanded, setIsExpanded = _a.setIsExpanded;
    var handleSnackbarHide = (0, react_1.useContext)(Store_1.default).handleSnackbarHide;
    var toggleExpanded = function () {
        if ((actions === null || actions === void 0 ? void 0 : actions.length) > 0)
            return;
        setIsExpanded(!isExpanded);
    };
    var closeAlert = function () {
        handleSnackbarHide({ id: id });
    };
    (0, react_1.useEffect)(function () {
        if (actions) {
            setIsExpanded(true);
        }
    }, [actions, setIsExpanded]);
    var getMessage = function (ellipsis) {
        if (ellipsis === void 0) { ellipsis = false; }
        return (0, jsx_runtime_1.jsx)(css_1.SMessage, __assign({ ellipsis: ellipsis.toString() }, { children: message }));
    };
    return (0, jsx_runtime_1.jsxs)(css_1.SHeader, __assign({ expanded: isExpanded.toString() }, { children: [(isExpanded)
                ? (0, jsx_runtime_1.jsx)(css_1.STitle, __assign({ actions: actions, onDoubleClick: toggleExpanded, variant: "subtitle1", color: "inherit" }, { children: severity }))
                : (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: !actions
                        ? (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: getMessage(true) })
                        : (0, jsx_runtime_1.jsx)(css_1.STitle, __assign({ actions: actions, onDoubleClick: toggleExpanded, variant: "subtitle1", color: "inherit" }, { children: severity })) }), (0, jsx_runtime_1.jsxs)(material_1.Box, __assign({ display: 'flex', flexDirection: 'row', gap: 1, alignItems: "center" }, { children: [!isExpanded && code && (0, jsx_runtime_1.jsx)(material_1.Tooltip, __assign({ arrow: true, title: "It contains additional console details" }, { children: (0, jsx_runtime_1.jsx)(SubtitlesOutlined_1.default, { color: "disabled" }) })), (0, jsx_runtime_1.jsx)(css_1.SCustomAction, { id: (0, Store_1.composeDomId)(componentId, [id, 'customAction']) }), !actions && (0, jsx_runtime_1.jsx)(material_1.Tooltip, __assign({ arrow: true, title: "Expand/Collapse alert" }, { children: (0, jsx_runtime_1.jsx)(material_1.IconButton, __assign({ color: "inherit", size: "small", onClick: toggleExpanded }, { children: !isExpanded
                                ? (0, jsx_runtime_1.jsx)(ExpandMore_1.default, { fontSize: "small" })
                                : (0, jsx_runtime_1.jsx)(ExpandLess_1.default, { fontSize: "small" }) })) })), (0, jsx_runtime_1.jsx)(material_1.Tooltip, __assign({ arrow: true, title: isRemoveFlag ? 'Close alert' : 'Dismiss alert' }, { children: (0, jsx_runtime_1.jsx)(material_1.IconButton, __assign({ color: "inherit", onClick: closeAlert, size: "small" }, { children: isRemoveFlag ? (0, jsx_runtime_1.jsx)(Close_1.default, { fontSize: "small" }) : (0, jsx_runtime_1.jsx)(ArrowForward_1.default, { fontSize: "small" }) })) }))] }))] }));
});
