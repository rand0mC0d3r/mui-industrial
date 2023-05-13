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
import { PlacementPosition, } from '../index.types';
import Wrapper from '../internal/Wrapper';
import { lognPackage, logPackage } from '../utils/logger';
var domIdBase = 'mui-status';
export var composeDomId = function (component, detail) {
    var id = detail.join('-');
    return "".concat(domIdBase, "-").concat(component, "-").concat(id);
};
export var packageName = 'mui-industrial';
var keyboardOverridesStorageKey = "".concat(packageName, ".keyboard.overrides");
// const settingsStorageKey = 'mui-status.settings';
// const statusStorageKey = 'mui-status.status';
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
    sidebarIndex: -1,
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
    var _h = useState([]), sidebars = _h[0], setSidebars = _h[1];
    var _j = useState([]), status = _j[0], setStatus = _j[1];
    var _k = useState([]), snackbar = _k[0], setSnackbar = _k[1];
    var _l = useState([]), commands = _l[0], setCommands = _l[1];
    var _m = useState([]), shortcuts = _m[0], setShortcuts = _m[1];
    var _o = useState(initialSettings), settings = _o[0], setSettings = _o[1];
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
            logPackage.apply(void 0, props);
        }
    }, [settings.debug]);
    var logn = useCallback(function () {
        var props = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            props[_i] = arguments[_i];
        }
        if (settings.debug) {
            lognPackage.apply(void 0, props);
        }
    }, [settings.debug]);
    var handleStatusAnnouncement = function (_a) {
        var id = _a.id, ownId = _a.ownId, secondary = _a.secondary, children = _a.children, options = _a.options;
        setStatus(function (status) {
            var findError = status.find(function (sItem) { return sItem.uniqueId === id && sItem.ownId !== ownId; });
            if (findError) {
                logDebug("mui-status: \u274C Status entry already registered with id: [".concat(id, "] & ownId: [").concat(ownId, "], but was proposed ownId [").concat(findError.ownId, "]"));
                return status;
            }
            log('➕ Registered status', id, ownId, secondary, children, options);
            // logDebug(`mui-status: 🆗 Status entry registered with id: [${id}] & ownId: [${ownId}]`);
            return __spreadArray(__spreadArray([], status.filter(function (_a) {
                var uniqueId = _a.uniqueId;
                return uniqueId !== id;
            }), true), [
                {
                    index: status.length,
                    uniqueId: id,
                    ownId: ownId,
                    options: options,
                    keepOpen: false,
                    visible: true,
                    secondary: secondary,
                    children: children,
                },
            ], false);
        });
    };
    // SIDEBAR
    var handleSidebarRegister = function (_a) {
        var id = _a.id, icon = _a.icon, order = _a.order, secondary = _a.secondary, tooltip = _a.tooltip, title = _a.title, options = _a.options;
        setSidebars(function (sidebars) { return __spreadArray(__spreadArray([], sidebars.filter(function (sidebar) { return sidebar.id !== id; }), true), [
            { id: id, icon: icon, order: order, secondary: secondary, tooltip: tooltip, visible: true, title: title, options: options },
        ], false); });
    };
    // SNACKBARS
    var handleSnackbarRegister = function (_a) {
        var severity = _a.severity, actions = _a.actions, source = _a.source, message = _a.message, code = _a.code, autoHideDuration = _a.autoHideDuration;
        var randomId = Math.random().toString(36).substring(7);
        console.log('registed snackbar', randomId);
        setSnackbar(function (snackbar) { return __spreadArray(__spreadArray([], snackbar.filter(function (snackbar) { return snackbar.id !== randomId; }), true), [
            {
                id: randomId,
                open: true,
                severity: severity,
                actions: actions,
                source: source,
                message: message,
                code: code,
                autoHideDuration: autoHideDuration || 5000,
            },
        ], false); });
    };
    // const handleSnackbarDestroy = ({ id }: { uniqueId: string }) => {
    //   // setSnackbar((snackbar: SnackbarObject[]) => [...snackbar.filter(lo => lo.uniqueId !== uniqueId)]);
    // };
    var handleSnackbarCleaning = function () {
        setSnackbar(function () { return []; });
    };
    // const handleSnackbarAnnouncement = (
    //   { ownId, severity, actions, source, message, code, autoHideDuration } :
    //   { ownId: string, actions: any, source?: string, severity: Severity, message: any, code?: string, autoHideDuration: number },
    // ) => {
    //   console.log('registed snackbar', ownId);
    //   setSnackbar((snackbar: SnackbarObject[]) => [
    //     ...snackbar.filter(({ uniqueId }) => uniqueId !== ownId),
    //     {
    //       uniqueId: ownId,
    //       open: true,
    //       severity,
    //       actions,
    //       source,
    //       message,
    //       code,
    //       autoHideDuration,
    //     } as SnackbarObject,
    //   ]);
    // };
    function generateSignature(id, label, ascii, char) {
        return "".concat(id, "-").concat(label, "-").concat(ascii || 'empty', "-").concat(char || 'empty');
    }
    function generateSignatureNg() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return args.join('-');
    }
    // KEYBOARD SHORTCUTS
    var handleKeyboardRegister = function (_a) {
        var id = _a.id, label = _a.label, ascii = _a.ascii, char = _a.char, altKey = _a.altKey, ctrlKey = _a.ctrlKey, metaKey = _a.metaKey, shiftKey = _a.shiftKey, onTrigger = _a.onTrigger, insensitive = _a.insensitive;
        var s = shortcuts.find(function (shortcut) { return shortcut.id === id; });
        if (s && generateSignature(s.id, s.label, s.ascii, s.char) === generateSignature(id, label, ascii, char))
            return;
        var newShortcut = {
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
        };
        var override;
        var possibleOverrides = localStorage.getItem(keyboardOverridesStorageKey);
        if (possibleOverrides) {
            try {
                override = JSON.parse(possibleOverrides)
                    .filter(function (o) { return o.id === id; })
                    .filter(function (o) { return JSON.stringify(o.original) === JSON.stringify(newShortcut); })
                    .find(function (o) { return o; });
                if (override) {
                    newShortcut = __assign(__assign({}, override), { onTrigger: onTrigger, original: newShortcut });
                }
            }
            catch (e) {
                log('❌ Failed to parse keyboard overrides', e);
            }
        }
        setShortcuts(function (prevShortcuts) {
            var result = __spreadArray(__spreadArray([], prevShortcuts.filter(function (p) { return p.id !== id; }), true), [newShortcut], false);
            log('➕ Registered keyboard', id, result);
            return result;
        });
    };
    var handleKeyboardsRegister = function (shortcutObjects) {
        shortcutObjects.forEach(function (shortcutObject) {
            handleKeyboardRegister(shortcutObject);
        });
    };
    var handleKeyboardTrigger = function (id) {
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
    var handleKeyboardGetLabel = function (id) {
        var _a;
        return (_a = shortcuts.find(function (shortcut) { return shortcut.id === id; })) === null || _a === void 0 ? void 0 : _a.label;
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
    // COMMAND SHORTCUTS
    var handleCommandRegister = function (_a) {
        var id = _a.id, shortcutId = _a.shortcutId, label = _a.label, onTrigger = _a.onTrigger, disabled = _a.disabled, hidden = _a.hidden, icon = _a.icon, order = _a.order, tooltip = _a.tooltip;
        var c = commands.find(function (command) { return command.id === id; });
        if (c && generateSignatureNg(c.id, c.shortcutId, c.label, c.tooltip) === generateSignatureNg(id, shortcutId, label, tooltip))
            return;
        var newCommand = { id: id, label: label, shortcutId: shortcutId, onTrigger: onTrigger, disabled: disabled, hidden: hidden, icon: icon, order: order, tooltip: tooltip };
        setCommands(function (prevCommands) {
            var result = __spreadArray(__spreadArray([], prevCommands.filter(function (p) { return p.id !== id; }), true), [newCommand], false);
            log('➕ Registered command', id, result);
            return result;
        });
    };
    var handleCommandsRegister = function (commandObjects) {
        commandObjects.forEach(function (commandObject) {
            handleCommandRegister(commandObject);
        });
    };
    var handleCallCommand = function (id) {
        var findCommand = commands.find(function (command) { return command.id === id; });
        if (!!findCommand && (findCommand === null || findCommand === void 0 ? void 0 : findCommand.onTrigger)) {
            log('💡 Triggered command', findCommand.id);
            findCommand === null || findCommand === void 0 ? void 0 : findCommand.onTrigger();
        }
    };
    var handleCommandsDeRegister = function (ids) {
        setCommands(function (prevCommands) {
            var result = __spreadArray([], prevCommands.filter(function (p) { return !ids.some(function (id) { return id === p.id; }); }), true);
            log('➖ Destroyed commands', ids, result);
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
    // const handleSnackbarDestroy = ({ uniqueId }: { uniqueId: string }) => {
    //   setSnackbar((snackbar: SnackbarObject[]) => [...snackbar.filter(lo => lo.uniqueId !== uniqueId)]);
    // };
    var triggerStatusBarAnnounced = function () {
        if (!settings.statusBarAnnounced) {
            setSettings(function (settings) { return (__assign(__assign({}, settings), { statusBarAnnounced: true })); });
        }
    };
    var updateConsoleActiveId = function (_a) {
        var id = _a.id;
        setSettings(function (settings) { return (__assign(__assign({}, settings), { consoleActiveId: id || undefined, isConsoleOpen: !!id })); });
    };
    var updateSidebarIndex = function (id) {
        var findIndex = sidebars.findIndex(function (sidebar) { return sidebar.id === id; });
        setSettings(function (settings) { return (__assign(__assign({}, settings), { sidebarIndex: settings.sidebarIndex === findIndex ? -1 : findIndex })); });
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
    // useEffect(() => localStorage.setItem(settingsStorageKey, JSON.stringify(settings)), [settings]);
    // useEffect(() => localStorage.setItem(statusStorageKey, JSON.stringify(status.map(s => ({ ...s, children: undefined })))), [status]);
    useEffect(function () {
        setSettings(function (settings) { return (__assign(__assign({}, settings), { expand: expand || initialSettings.expand, position: position, justifyContent: justifyContent, hasBorder: hasBorder, size: size, variant: variant, fullWidth: fullWidth, allowRightClick: allowRightClick || initialSettings.allowRightClick, debug: debug || initialSettings.debug, hasLock: valOrDefault(hasLock, initialSettings.hasLock) })); });
    }, [allowRightClick, fullWidth, variant, hasBorder, size, justifyContent, expand, position, debug, hasLock]);
    var dumpContext = useCallback(function (label, content) {
        if (settings.debug) {
            logn(label, content.length);
            log(content.length > 0 ? __spreadArray([], content, true) : 'No entries found.');
        }
    }, [settings.debug, log, logn]);
    useEffect(function () { return dumpContext('🗄️ Status', status); }, [status, dumpContext]);
    useEffect(function () { return dumpContext('📟 Snackbar', snackbar); }, [snackbar, dumpContext]);
    useEffect(function () { return dumpContext('🫙 Shortcuts', shortcuts); }, [shortcuts, dumpContext]);
    useEffect(function () { return dumpContext('🎯 Commands', commands); }, [commands, dumpContext]);
    useEffect(function () { return dumpContext('🎛️ Sidebar', sidebars); }, [sidebars, dumpContext]);
    return _jsx(DataContext.Provider, __assign({ value: {
            // settings state + crud
            settings: settings,
            updateConsoleActiveId: updateConsoleActiveId,
            updateIsConsoleOpen: updateIsConsoleOpen,
            updateIsConsoleClosed: updateIsConsoleClosed,
            updateSidebarIndex: updateSidebarIndex,
            // sidebar,
            sidebars: sidebars,
            handleSidebarRegister: handleSidebarRegister,
            // status - wrapper
            triggerStatusBarAnnounced: triggerStatusBarAnnounced,
            // commands,
            commands: commands,
            handleCommandRegister: handleCommandRegister,
            handleCommandsRegister: handleCommandsRegister,
            handleCallCommand: handleCallCommand,
            handleCommandsDeRegister: handleCommandsDeRegister,
            // keyboard
            shortcuts: shortcuts,
            handleKeyboardRegister: handleKeyboardRegister,
            handleKeyboardsRegister: handleKeyboardsRegister,
            handleKeyboardDeRegister: handleKeyboardDeRegister,
            handleKeyboardsDeRegister: handleKeyboardsDeRegister,
            handleKeyboardUpdate: handleKeyboardUpdate,
            handleKeyboardRevert: handleKeyboardRevert,
            handleKeyboardTrigger: handleKeyboardTrigger,
            handleKeyboardGetLabel: handleKeyboardGetLabel,
            // snackbar + crud,
            snackbar: snackbar,
            handleSnackbarRegister: handleSnackbarRegister,
            handleSnackbarCleaning: handleSnackbarCleaning,
            // handleSnackbarAnnouncement,
            // handleSnackbarDestroy,
            // status state + crud
            status: status,
            handleStatusVisibilityToggle: handleStatusVisibilityToggle,
            handleStatusKeepOpenToggle: handleStatusKeepOpenToggle,
            handleStatusTypeUpdate: handleStatusTypeUpdate,
            handleStatusConsoleTitleUpdate: handleStatusConsoleTitleUpdate,
            handleStatusUpdate: handleStatusUpdate,
            handleStatusAnnouncement: handleStatusAnnouncement,
            handleStatusDestroy: handleStatusDestroy,
            logDebug: logDebug,
        } }, { children: _jsx(Wrapper, __assign({}, { children: children, style: style })) }));
};
export default DataContext;
export { IndustrialProvider };
