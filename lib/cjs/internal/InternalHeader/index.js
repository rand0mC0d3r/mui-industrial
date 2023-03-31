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
var react_1 = require("react");
var Store_1 = __importDefault(require("../../Store"));
var InternalActions_1 = __importDefault(require("../InternalActions"));
var css_1 = require("./css");
exports.default = (function (_a) {
    var id = _a.id, title = _a.title, actions = _a.actions, _b = _a.noDefaults, noDefaults = _b === void 0 ? false : _b;
    var _c = (0, react_1.useContext)(Store_1.default), status = _c.status, settings = _c.settings, handleStatusKeepOpenToggle = _c.handleStatusKeepOpenToggle;
    var _d = (0, react_1.useState)(null), statusObject = _d[0], setStatusObject = _d[1];
    (0, react_1.useEffect)(function () {
        if (!status || !id)
            return;
        setStatusObject(status.find(function (_a) {
            var uniqueId = _a.uniqueId;
            return uniqueId === id;
        }) || null);
    }, [status, id]);
    return (0, jsx_runtime_1.jsxs)(css_1.StyledActionsWrapper, __assign({ onContextMenu: function (e) { e.preventDefault(); } }, { children: [(0, jsx_runtime_1.jsx)(css_1.StyledTypography, __assign({ variant: "subtitle2", color: "textSecondary" }, { children: title })), (0, jsx_runtime_1.jsxs)(css_1.StyledActions, { children: [(0, jsx_runtime_1.jsx)(InternalActions_1.default, __assign({}, { actions: actions })), !noDefaults && settings.hasLock && (0, jsx_runtime_1.jsx)(InternalActions_1.default, __assign({}, {
                        actions: [
                            {
                                tooltip: 'Toggle keep-open',
                                icon: (statusObject === null || statusObject === void 0 ? void 0 : statusObject.keepOpen) ? (0, jsx_runtime_1.jsx)(LockOutlined_1.default, { color: "primary" }) : (0, jsx_runtime_1.jsx)(LockOpenOutlined_1.default, { style: { fontSize: '40px' } }),
                                onClick: function () { return handleStatusKeepOpenToggle({ id: id }); },
                            },
                        ],
                    }))] })] }));
});
