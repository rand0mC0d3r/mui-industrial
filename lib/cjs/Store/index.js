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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusProvider = exports.composeDomId = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
var react_1 = require("react");
var index_types_1 = require("../index.types");
var Wrapper_1 = __importDefault(require("../internal/Wrapper"));
var domIdBase = 'mui-status';
var composeDomId = function (component, detail) {
    var id = detail.join('-');
    return "".concat(domIdBase, "-").concat(component, "-").concat(id);
};
exports.composeDomId = composeDomId;
var settingsStorageKey = 'mui-status.settings';
var statusStorageKey = 'mui-status.status';
var initialSettings = {
    position: index_types_1.PlacementPosition.Top,
    expand: true,
    statusBarAnnounced: false,
    allowRightClick: true,
    debug: false,
    hasLock: true,
    hasBorder: true,
    variant: 'default',
    isConsoleFixed: false,
    isConsoleOpen: false,
};
var valOrDefault = function (val, def) {
    if (val === undefined) {
        return def;
    }
    return val;
};
var DataContext = (0, react_1.createContext)({});
function StatusProvider(_a) {
    var expand = _a.expand, hasLock = _a.hasLock, _b = _a.position, position = _b === void 0 ? index_types_1.PlacementPosition.Top : _b, allowRightClick = _a.allowRightClick, _c = _a.hasBorder, hasBorder = _c === void 0 ? true : _c, _d = _a.fullWidth, fullWidth = _d === void 0 ? false : _d, _e = _a.justifyContent, justifyContent = _e === void 0 ? 'space-between' : _e, debug = _a.debug, children = _a.children, style = _a.style, _f = _a.size, size = _f === void 0 ? 'small' : _f, _g = _a.variant, variant = _g === void 0 ? 'default' : _g;
    var _h = (0, react_1.useState)([]), status = _h[0], setStatus = _h[1];
    var _j = (0, react_1.useState)([]), snackbar = _j[0], setSnackbar = _j[1];
    var _k = (0, react_1.useState)(initialSettings), settings = _k[0], setSettings = _k[1];
    var logDebug = function (message) {
        if (settings.debug) {
            console.log(message);
        }
    };
    var handleStatusAnnouncement = function (_a) {
        var id = _a.id, ownId = _a.ownId, secondary = _a.secondary, children = _a.children;
        console.log('registed status', id);
        setStatus(function (status) {
            var findError = status.find(function (sItem) { return sItem.uniqueId === id && sItem.ownId !== ownId; });
            if (findError) {
                logDebug("mui-status: \u274C Status entry already registered with id: [".concat(id, "] & ownId: [").concat(ownId, "], but was proposed ownId [").concat(findError.ownId, "]"));
                return status;
            }
            logDebug("mui-status: \uD83C\uDD97 Status entry registered with id: [".concat(id, "] & ownId: [").concat(ownId, "]"));
            return __spreadArray(__spreadArray([], status.filter(function (_a) {
                var uniqueId = _a.uniqueId;
                return uniqueId !== id;
            }), true), [
                {
                    index: status.length,
                    uniqueId: id,
                    ownId: ownId,
                    keepOpen: false,
                    visible: true,
                    secondary: secondary,
                    children: children
                }
            ], false);
        });
    };
    var handleSnackbarAnnouncement = function (_a) {
        var ownId = _a.ownId, severity = _a.severity, actions = _a.actions, source = _a.source, message = _a.message, code = _a.code, autoHideDuration = _a.autoHideDuration;
        console.log('registed snackbar', ownId);
        setSnackbar(function (snackbar) { return __spreadArray(__spreadArray([], snackbar.filter(function (_a) {
            var uniqueId = _a.uniqueId;
            return uniqueId !== ownId;
        }), true), [
            {
                uniqueId: ownId,
                open: true,
                severity: severity,
                actions: actions,
                source: source,
                message: message,
                code: code,
                autoHideDuration: autoHideDuration,
            }
        ], false); });
    };
    var handleStatusUpdate = function (_a) {
        var id = _a.id, ownId = _a.ownId, children = _a.children;
        setStatus(function (status) {
            var findError = status.find(function (_a) {
                var uniqueId = _a.uniqueId;
                return uniqueId === id;
            });
            if ((findError === null || findError === void 0 ? void 0 : findError.ownId) !== ownId) {
                if (settings.debug) {
                    console.error("mui-status: \u274C Faulty status update captured for: [".concat(id, "] & ownId: [").concat(ownId, "], but expected ownId: [").concat(findError === null || findError === void 0 ? void 0 : findError.ownId, "]"));
                }
                return status;
            }
            return status.map(function (sItem) { return (sItem.uniqueId === id && sItem.ownId === ownId) ? __assign(__assign({}, sItem), { children: children }) : sItem; });
        });
    };
    var handleStatusVisibilityToggle = function (_a) {
        var id = _a.id;
        setStatus(function (status) { return status.map(function (lo) { return (lo.uniqueId === id ? __assign(__assign({}, lo), { visible: !lo.visible }) : lo); }); });
    };
    var handleStatusTypeUpdate = function (_a) {
        var id = _a.id, type = _a.type;
        if (settings.debug) {
            console.info("mui-status: \uD83C\uDD97 Updated type for id: [".concat(id, "] to: [").concat(type, "]"));
        }
        setStatus(function (status) { return status.map(function (lo) { return (lo.uniqueId === id
            ? __assign(__assign({}, lo), { type: type })
            : lo); }); });
    };
    var handleStatusConsoleTypeUpdate = function (_a) {
        var id = _a.id, title = _a.title;
        if (settings.debug) {
            console.info("mui-status: \uD83C\uDD97 Updated console title for id: [".concat(id, "] to: [").concat(title, "]"));
        }
        setStatus(function (status) { return status.map(function (lo) { return (lo.uniqueId === id
            ? __assign(__assign({}, lo), { title: title })
            : lo); }); });
    };
    var handleStatusDestroy = function (_a) {
        var id = _a.id;
        setStatus(function (status) { return __spreadArray([], status.filter(function (lo) { return lo.uniqueId !== id; }), true); });
    };
    var handleStatusKeepOpenToggle = function (_a) {
        var id = _a.id;
        setStatus(function (status) { return status.map(function (lo) { return (lo.uniqueId === id ? __assign(__assign({}, lo), { keepOpen: !lo.keepOpen }) : lo); }); });
    };
    var handleSnackbarDestroy = function (_a) {
        var uniqueId = _a.uniqueId;
        setSnackbar(function (snackbar) { return __spreadArray([], snackbar.filter(function (lo) { return lo.uniqueId !== uniqueId; }), true); });
    };
    var triggerStatusBarAnnounced = function () {
        if (!settings.statusBarAnnounced) {
            setSettings(function (settings) { return (__assign(__assign({}, settings), { statusBarAnnounced: true })); });
        }
    };
    var updateConsoleActiveId = function (_a) {
        var id = _a.id;
        setSettings(function (settings) { return (__assign(__assign({}, settings), { consoleActiveId: id || undefined, isConsoleOpen: !!id })); });
    };
    var updateIsConsoleOpen = function () {
        setSettings(function (settings) { return (__assign(__assign({}, settings), { isConsoleOpen: !settings.isConsoleOpen })); });
    };
    var updateIsConsoleClosed = function () {
        setSettings(function (settings) { return (__assign(__assign({}, settings), { isConsoleOpen: false })); });
    };
    (0, react_1.useEffect)(function () {
        // const storedSettingsLocal = localStorage.getItem(settingsStorageKey)
        // const storedStatusLocal = localStorage.getItem(statusStorageKey)
        // if (storedSettingsLocal) setStoredSettings(JSON.parse(storedSettingsLocal))
        // if (storedStatusLocal) setStoredStatus(JSON.parse(storedStatusLocal))
    }, []);
    // useEffect(() => {
    //   if (storedStatus.length > 0) {
    //     setStatus((status: StatusObject[]) => status.map(statusItem => {
    //       const found = storedStatus.find(ss => ss.uniqueId === statusItem.uniqueId)
    //       return found ? { ...statusItem, found } : statusItem
    //     }))
    //   }
    //   if (storedSettings) {
    //     setSettings((settings: SettingsObject) => ({ ...settings, ...storedSettings }))
    //   }
    // }, [storedStatus, storedSettings])
    (0, react_1.useEffect)(function () { return localStorage.setItem(settingsStorageKey, JSON.stringify(settings)); }, [settings]);
    (0, react_1.useEffect)(function () { return localStorage.setItem(statusStorageKey, JSON.stringify(status.map(function (s) { return (__assign(__assign({}, s), { children: undefined })); }))); }, [status]);
    (0, react_1.useEffect)(function () {
        setSettings(function (settings) { return (__assign(__assign({}, settings), { expand: expand || initialSettings.expand, position: position, justifyContent: justifyContent, hasBorder: hasBorder, size: size, variant: variant, fullWidth: fullWidth, allowRightClick: allowRightClick || initialSettings.allowRightClick, debug: debug || initialSettings.debug, hasLock: valOrDefault(hasLock, initialSettings.hasLock) })); });
    }, [allowRightClick, fullWidth, variant, hasBorder, size, justifyContent, expand, position, debug, hasLock]);
    // useEffect(() => {
    //   if (settings.debug) {
    //     console.log('mui-status-store:', { ...settings, status, snackbar })
    //   }
    // }, [settings, status, snackbar])
    (0, react_1.useEffect)(function () {
        if (settings.debug) {
            console.log('mui-status-settings:', __assign({}, settings));
        }
    }, [settings]);
    (0, react_1.useEffect)(function () {
        if (settings.debug) {
            console.log('mui-status-status:', __assign({}, status));
        }
    }, [status]);
    (0, react_1.useEffect)(function () {
        if (settings.debug) {
            console.log('mui-status-snackbar:', __assign({}, snackbar));
        }
    }, [snackbar]);
    return (0, jsx_runtime_1.jsx)(DataContext.Provider, __assign({ value: {
            // settings state + crud
            settings: settings,
            updateConsoleActiveId: updateConsoleActiveId,
            updateIsConsoleOpen: updateIsConsoleOpen,
            updateIsConsoleClosed: updateIsConsoleClosed,
            // status - wrapper
            triggerStatusBarAnnounced: triggerStatusBarAnnounced,
            // snackbar + crud,
            snackbar: snackbar,
            handleSnackbarDestroy: handleSnackbarDestroy,
            // status state + crud
            status: status,
            handleStatusVisibilityToggle: handleStatusVisibilityToggle,
            handleStatusKeepOpenToggle: handleStatusKeepOpenToggle,
            handleStatusTypeUpdate: handleStatusTypeUpdate,
            handleStatusConsoleTypeUpdate: handleStatusConsoleTypeUpdate,
            handleStatusUpdate: handleStatusUpdate,
            handleStatusAnnouncement: handleStatusAnnouncement,
            handleSnackbarAnnouncement: handleSnackbarAnnouncement,
            handleStatusDestroy: handleStatusDestroy,
            logDebug: logDebug,
        } }, { children: (0, jsx_runtime_1.jsx)(Wrapper_1.default, __assign({}, { children: children, style: style })) }));
}
exports.StatusProvider = StatusProvider;
exports.default = DataContext;
