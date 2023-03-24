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
import { jsx as _jsx } from "react/jsx-runtime";
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import { createContext, useCallback, useEffect, useState } from 'react';
import { PlacementPosition } from '../index.types';
import Wrapper from '../internal/Wrapper';
var domIdBase = 'mui-status';
export var composeDomId = function (component, detail) {
    var id = detail.join('-');
    return "".concat(domIdBase, "-").concat(component, "-").concat(id);
};
var packageName = 'mui-industrial';
var keyboardOverridesStorageKey = "".concat(packageName, ".keyboard.overrides");
var settingsStorageKey = 'mui-status.settings';
var statusStorageKey = 'mui-status.status';
var initialSettings = {
    position: PlacementPosition.TOP,
    expand: true,
    statusBarAnnounced: false,
    allowRightClick: true,
    debug: false,
    capsLock: false,
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
var DataContext = createContext({});
var IndustrialProvider = function (_a) {
    var expand = _a.expand, hasLock = _a.hasLock, _b = _a.position, position = _b === void 0 ? PlacementPosition.TOP : _b, allowRightClick = _a.allowRightClick, _c = _a.hasBorder, hasBorder = _c === void 0 ? true : _c, _d = _a.fullWidth, fullWidth = _d === void 0 ? false : _d, _e = _a.justifyContent, justifyContent = _e === void 0 ? 'space-between' : _e, debug = _a.debug, children = _a.children, style = _a.style, _f = _a.size, size = _f === void 0 ? 'small' : _f, _g = _a.variant, variant = _g === void 0 ? 'default' : _g;
    var _h = useState([]), status = _h[0], setStatus = _h[1];
    var _j = useState([]), snackbar = _j[0], setSnackbar = _j[1];
    var _k = useState([]), shortcuts = _k[0], setShortcuts = _k[1];
    var _l = useState(initialSettings), settings = _l[0], setSettings = _l[1];
    var logDebug = function (message) {
        if (settings.debug) {
            console.log(message);
        }
    };
    var log = useCallback(function () {
        var props = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            props[_i] = arguments[_i];
        }
        if (settings.debug) {
            console.log.apply(console, __spreadArray(["[".concat(packageName, "]:")], props, false));
        }
    }, [settings.debug]);
    var logn = useCallback(function () {
        var props = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            props[_i] = arguments[_i];
        }
        if (settings.debug) {
            console.log.apply(console, __spreadArray(["\n\n[".concat(packageName, "]:")], props, false));
        }
    }, [settings.debug]);
    var handleStatusAnnouncement = function (_a) {
        var id = _a.id, ownId = _a.ownId, secondary = _a.secondary, children = _a.children;
        setStatus(function (status) {
            var findError = status.find(function (sItem) { return sItem.uniqueId === id && sItem.ownId !== ownId; });
            if (findError) {
                logDebug("mui-status: \u274C Status entry already registered with id: [".concat(id, "] & ownId: [").concat(ownId, "], but was proposed ownId [").concat(findError.ownId, "]"));
                return status;
            }
            // logDebug(`mui-status: 🆗 Status entry registered with id: [${id}] & ownId: [${ownId}]`);
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
                    children: children,
                },
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
            },
        ], false); });
    };
    function generateSignature(id, label, ascii, char) {
        return "".concat(id, "-").concat(label, "-").concat(ascii || 'empty', "-").concat(char || 'empty');
    }
    // KEYBOARD SHORTCUTS
    var handleKeyboardRegister = function (_a) {
        var id = _a.id, label = _a.label, ascii = _a.ascii, char = _a.char, altKey = _a.altKey, ctrlKey = _a.ctrlKey, metaKey = _a.metaKey, shiftKey = _a.shiftKey, onTrigger = _a.onTrigger, insensitive = _a.insensitive;
        var s = shortcuts.find(function (shortcut) { return shortcut.id === id; });
        if (s && generateSignature(s.id, s.label, s.ascii, s.char) === generateSignature(id, label, ascii, char))
            return;
        var override;
        var possibleOverride = localStorage.getItem(keyboardOverridesStorageKey);
        if (possibleOverride) {
            try {
                override = JSON.parse(possibleOverride);
            }
            catch (e) {
                log('Failed to parse keyboard overrides', e);
            }
        }
        setShortcuts(function (prevShortcuts) {
            var result = __spreadArray(__spreadArray([], prevShortcuts.filter(function (p) { return p.id !== id; }), true), [
                {
                    id: id,
                    label: label,
                    char: char,
                    ascii: ascii,
                    onTrigger: onTrigger,
                    altKey: altKey,
                    ctrlKey: ctrlKey,
                    metaKey: metaKey,
                    shiftKey: shiftKey,
                    insensitive: insensitive,
                },
            ], false);
            log('➕ Registed keyboard', id, result);
            return result;
        });
    };
    var handleKeyboardsRegister = function (shortcutObjects) {
        shortcutObjects.forEach(function (shortcutObject) {
            handleKeyboardRegister(shortcutObject);
        });
    };
    var handleCallKeyboard = function (_a) {
        var id = _a.id;
        var findShortcut = shortcuts.find(function (shortcut) { return shortcut.id === id; });
        if (!!findShortcut && (findShortcut === null || findShortcut === void 0 ? void 0 : findShortcut.onTrigger)) {
            log('💡 Triggered keyboard', findShortcut.id);
            findShortcut === null || findShortcut === void 0 ? void 0 : findShortcut.onTrigger();
        }
    };
    var handleKeyboardUpdate = function (id, shortcutObject) {
        setShortcuts(function (prevShortcuts) {
            var result = __spreadArray([], prevShortcuts.map(function (p) { return p.id === id ? __assign(__assign({}, shortcutObject), { original: p.original || p }) : p; }), true);
            localStorage.setItem(keyboardOverridesStorageKey, JSON.stringify(result));
            log('⚙️ Updated keyboard', id, result);
            return result;
        });
    };
    var handleKeyboardRevert = function (id) {
        setShortcuts(function (prevShortcuts) {
            var result = __spreadArray([], prevShortcuts.map(function (p) { return (p.id === id && p.original) ? __assign({}, p.original) : p; }), true);
            localStorage.setItem(keyboardOverridesStorageKey, JSON.stringify(result));
            log('⚙️ Reverted keyboard to original settings', id, result);
            return result;
        });
    };
    var handleKeyboardDeRegister = function (id) {
        setShortcuts(function (prevShortcuts) {
            var result = __spreadArray([], prevShortcuts.filter(function (p) { return p.id !== id; }), true);
            log('➖ Destroyed keyboard', id, result);
            return result;
        });
    };
    var handleKeyboardsDeRegister = function (ids) {
        setShortcuts(function (prevShortcuts) {
            var result = __spreadArray([], prevShortcuts.filter(function (p) { return !ids.some(function (id) { return id === p.id; }); }), true);
            log('➖ Destroyed keyboards', ids, result);
            return result;
        });
    };
    //////////////////////////
    //////////////////////////
    //////////////////////////
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
    var handleStatusConsoleTitleUpdate = function (_a) {
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
    useEffect(function () {
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
    useEffect(function () { return localStorage.setItem(settingsStorageKey, JSON.stringify(settings)); }, [settings]);
    useEffect(function () { return localStorage.setItem(statusStorageKey, JSON.stringify(status.map(function (s) { return (__assign(__assign({}, s), { children: undefined })); }))); }, [status]);
    useEffect(function () {
        setSettings(function (settings) { return (__assign(__assign({}, settings), { expand: expand || initialSettings.expand, position: position, justifyContent: justifyContent, hasBorder: hasBorder, size: size, variant: variant, fullWidth: fullWidth, allowRightClick: allowRightClick || initialSettings.allowRightClick, debug: debug || initialSettings.debug, hasLock: valOrDefault(hasLock, initialSettings.hasLock) })); });
    }, [allowRightClick, fullWidth, variant, hasBorder, size, justifyContent, expand, position, debug, hasLock]);
    useEffect(function () {
        if (settings.debug) {
            var t0 = performance.now();
            // console.clear();
            log('🎛️ Debugging is enabled');
            // console.log('%cSettings', 'color: #4caf50');
            // console.table({ ...settings });
            logn('🗄️ Status', status.length);
            log(status.length > 0 ? __spreadArray([], status, true) : 'No statuses found.');
            logn('📟 Snackbar', snackbar.length);
            log(snackbar.length > 0 ? __spreadArray([], snackbar, true) : 'No snackbars found.');
            logn('🫙 Shortcuts', shortcuts.length);
            log(shortcuts.length > 0 ? __spreadArray([], shortcuts, true) : 'No shortcuts found.');
            var t1 = performance.now();
            log("Debug dump in ".concat(t1 - t0, " milliseconds."));
        }
    }, [settings, shortcuts, snackbar, status, log, logn]);
    return _jsx(DataContext.Provider, __assign({ value: {
            // settings state + crud
            settings: settings,
            updateConsoleActiveId: updateConsoleActiveId,
            updateIsConsoleOpen: updateIsConsoleOpen,
            updateIsConsoleClosed: updateIsConsoleClosed,
            // status - wrapper
            triggerStatusBarAnnounced: triggerStatusBarAnnounced,
            // keyboard
            shortcuts: shortcuts,
            handleKeyboardRegister: handleKeyboardRegister,
            handleKeyboardsRegister: handleKeyboardsRegister,
            handleKeyboardDeRegister: handleKeyboardDeRegister,
            handleKeyboardsDeRegister: handleKeyboardsDeRegister,
            handleKeyboardUpdate: handleKeyboardUpdate,
            handleKeyboardRevert: handleKeyboardRevert,
            handleCallKeyboard: handleCallKeyboard,
            // snackbar + crud,
            snackbar: snackbar,
            handleSnackbarDestroy: handleSnackbarDestroy,
            // status state + crud
            status: status,
            handleStatusVisibilityToggle: handleStatusVisibilityToggle,
            handleStatusKeepOpenToggle: handleStatusKeepOpenToggle,
            handleStatusTypeUpdate: handleStatusTypeUpdate,
            handleStatusConsoleTitleUpdate: handleStatusConsoleTitleUpdate,
            handleStatusUpdate: handleStatusUpdate,
            handleStatusAnnouncement: handleStatusAnnouncement,
            handleSnackbarAnnouncement: handleSnackbarAnnouncement,
            handleStatusDestroy: handleStatusDestroy,
            logDebug: logDebug,
        } }, { children: _jsx(Wrapper, __assign({}, { children: children, style: style })) }));
};
export default DataContext;
export { IndustrialProvider };
