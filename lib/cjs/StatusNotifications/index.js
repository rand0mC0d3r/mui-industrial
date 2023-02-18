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
/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-globals */
/* eslint-disable @typescript-eslint/no-explicit-any */
var DeleteForeverOutlined_1 = __importDefault(require("@mui/icons-material/DeleteForeverOutlined"));
var DeleteSweepOutlined_1 = __importDefault(require("@mui/icons-material/DeleteSweepOutlined"));
var LockOpenOutlined_1 = __importDefault(require("@mui/icons-material/LockOpenOutlined"));
var LockOutlined_1 = __importDefault(require("@mui/icons-material/LockOutlined"));
var NotificationsOutlined_1 = __importDefault(require("@mui/icons-material/NotificationsOutlined"));
var react_1 = require("react");
var InternalAlert_1 = __importDefault(require("../internal/InternalAlert"));
var StatusHelper_1 = __importDefault(require("../StatusHelper"));
var StatusPanel_1 = __importDefault(require("../StatusPanel"));
var Store_1 = __importDefault(require("../Store"));
function default_1(_a) {
    var _b = _a.id, id = _b === void 0 ? 'notificationsPanel' : _b;
    var _c = (0, react_1.useContext)(Store_1.default), status = _c.status, snackbar = _c.snackbar;
    var _d = (0, react_1.useState)(null), statusObject = _d[0], setStatusObject = _d[1];
    (0, react_1.useEffect)(function () {
        var foundObject = status.find(function (item) { return item.uniqueId === id; });
        if (statusObject === null && foundObject) {
            setStatusObject(foundObject);
        }
    }, [status, id, statusObject]);
    return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(DeleteSweepOutlined_1.default, {}), (0, jsx_runtime_1.jsx)(DeleteForeverOutlined_1.default, {}), (0, jsx_runtime_1.jsx)(LockOpenOutlined_1.default, {}), (0, jsx_runtime_1.jsx)(LockOutlined_1.default, {}), (0, jsx_runtime_1.jsx)(StatusPanel_1.default, __assign({ hasDecoration: false, id: id, 
                // popoverActions={<>
                //   <DeleteSweepOutlinedIcon />
                //   <DeleteForeverOutlinedIcon />
                //   <LockOpenOutlinedIcon />
                //   <LockOutlinedIcon />
                // </>}
                popoverTitle: "Notifications", tooltip: "Notifications", popover: (0, jsx_runtime_1.jsx)("div", __assign({ style: { width: '500px', height: '650px', overflow: 'scroll' } }, { children: snackbar.map(function (_a) {
                        var uniqueId = _a.uniqueId, severity = _a.severity, message = _a.message, source = _a.source, actions = _a.actions, code = _a.code;
                        return ((0, jsx_runtime_1.jsx)(InternalAlert_1.default, __assign({}, { uniqueId: uniqueId, actions: actions, severity: severity, source: source, message: message, code: code }), uniqueId));
                    }) })) }, { children: (0, jsx_runtime_1.jsx)(StatusHelper_1.default, { text: "Notifications", icon: (0, jsx_runtime_1.jsx)(NotificationsOutlined_1.default, {}), notifications: snackbar.length }) }))] });
}
exports.default = default_1;
