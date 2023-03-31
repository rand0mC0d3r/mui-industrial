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
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
var material_1 = require("@mui/material");
var re_resizable_1 = require("re-resizable");
var react_1 = require("react");
var index_types_1 = require("../../index.types");
var Store_1 = __importDefault(require("../../Store"));
var InternalActions_1 = __importDefault(require("../InternalActions"));
var css_1 = require("./css");
var kbdId = 'console';
var domId = index_types_1.domConsoleId;
var domIdWrapper = 'mui-status-console-wrapper';
var relevantType = 'console';
exports.default = (function () {
    var _a = (0, react_1.useContext)(Store_1.default), status = _a.status, updateConsoleActiveId = _a.updateConsoleActiveId, updateIsConsoleOpen = _a.updateIsConsoleOpen, handleKeyboardRegister = _a.handleKeyboardRegister;
    var _b = (0, react_1.useContext)(Store_1.default).settings, consoleActiveId = _b.consoleActiveId, isConsoleOpen = _b.isConsoleOpen, position = _b.position;
    var isActivated = function (uniqueId) { return uniqueId === consoleActiveId; };
    var relevantConsoles = status.filter(function (_a) {
        var type = _a.type;
        return type === relevantType;
    });
    var _c = (0, react_1.useState)(), height = _c[0], setHeight = _c[1];
    var _d = (0, react_1.useState)('100%'), width = _d[0], setWidth = _d[1];
    var computeHeight = (0, react_1.useCallback)(function (d) {
        var computedHeight = Number((height || '350px').replace('px', '')) + d;
        if (computedHeight < 125) {
            updateConsoleActiveId({ id: undefined });
        }
        else {
            setHeight("".concat(computedHeight, "px"));
            setWidth('100%');
        }
    }, [height, updateConsoleActiveId]);
    (0, react_1.useEffect)(function () {
        if (height) {
            localStorage.setItem(index_types_1.localStorageKeyHeight, height);
        }
    }, [height]);
    (0, react_1.useEffect)(function () {
        var savedHeight = localStorage.getItem(index_types_1.localStorageKeyHeight);
        if (savedHeight) {
            setHeight(savedHeight);
        }
    }, []);
    (0, react_1.useEffect)(function () {
        handleKeyboardRegister({ id: kbdId, ascii: 27, char: '', onTrigger: function () { return updateIsConsoleOpen(); }, label: 'Hide/Show console' });
    });
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (isConsoleOpen) && (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: status.some(function (_a) {
                var type = _a.type;
                return type === relevantType;
            }) && (0, jsx_runtime_1.jsx)(css_1.StyledWrapper, __assign({}, { id: domIdWrapper }, { bottom: String(position === index_types_1.PlacementPosition.BOTTOM) }, { children: (0, jsx_runtime_1.jsx)(re_resizable_1.Resizable, __assign({ enable: {
                        left: false,
                        right: false,
                        top: position === index_types_1.PlacementPosition.BOTTOM,
                        bottom: position === index_types_1.PlacementPosition.TOP,
                        topRight: false,
                        bottomRight: false,
                        bottomLeft: false,
                        topLeft: false,
                    }, onResizeStop: function (_e, _direction, _ref, d) { return computeHeight(d.height); }, style: { display: 'flex', flexDirection: 'column' }, minHeight: "75px", maxHeight: "950px", defaultSize: { width: width, height: height || '350px' } }, { children: (0, jsx_runtime_1.jsx)(css_1.StyledResizable, { children: relevantConsoles.some(function (_a) {
                            var uniqueId = _a.uniqueId;
                            return uniqueId === consoleActiveId;
                        })
                            ? (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)(css_1.StyledContainer, __assign({ position: position.toString() }, { children: [(0, jsx_runtime_1.jsxs)(css_1.StyledTabsAndActionWrapper, { children: [(0, jsx_runtime_1.jsx)(css_1.StyledTabs, { children: relevantConsoles.map(function (_a) {
                                                        var uniqueId = _a.uniqueId, options = _a.options, children = _a.children;
                                                        return (0, jsx_runtime_1.jsx)(css_1.StyledTab, __assign({}, {
                                                            key: uniqueId,
                                                            variant: 'caption',
                                                            onClick: function () { return updateConsoleActiveId({ id: uniqueId }); },
                                                            activated: isActivated(uniqueId).toString(),
                                                        }, { children: (0, jsx_runtime_1.jsxs)(material_1.Box, __assign({ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', style: { gap: '8px' } }, { children: [children || uniqueId, (0, jsx_runtime_1.jsx)(InternalActions_1.default, { actions: options.actions, fontSize: "14px" })] })) }));
                                                    }) }), (0, jsx_runtime_1.jsx)(material_1.Tooltip, __assign({}, { title: 'Close console section' }, { arrow: true, placement: position === index_types_1.PlacementPosition.BOTTOM ? 'top' : 'bottom' }, { children: (0, jsx_runtime_1.jsx)(material_1.IconButton, __assign({ onClick: function () { return updateConsoleActiveId({}); }, size: "small" }, { children: (0, jsx_runtime_1.jsx)(css_1.StyledCloseIcon, { style: { fontSize: '16px' } }) })) }))] }), (0, jsx_runtime_1.jsx)(css_1.StyledStatusConsole, __assign({}, { id: domId }))] })) })
                            : (0, jsx_runtime_1.jsx)(css_1.StyledEmptyWrapper, { children: (0, jsx_runtime_1.jsx)(material_1.Box, __assign({ display: 'flex', flexDirection: "row", style: { gap: '8px' } }, { children: status.filter(function (_a) {
                                        var type = _a.type;
                                        return type === relevantType;
                                    }).map(function (statusItem) { return (0, jsx_runtime_1.jsx)(material_1.Button, __assign({ style: { padding: '24px', textTransform: 'unset' }, variant: "outlined", color: "inherit", onClick: function () { return updateConsoleActiveId({ id: statusItem.uniqueId }); } }, { children: (0, jsx_runtime_1.jsxs)(material_1.Box, __assign({ display: 'flex', flexDirection: "column", style: { gap: '8px' } }, { children: [statusItem.children, (0, jsx_runtime_1.jsx)(material_1.Typography, __assign({ variant: "caption", color: "textSecondary" }, { children: statusItem.options.title }))] })) }), statusItem.uniqueId); }) })) }) }) })) })) }) });
});
