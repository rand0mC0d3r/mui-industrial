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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Box, Button, IconButton, Tooltip, Typography } from '@mui/material';
import { Resizable } from 're-resizable';
import { useCallback, useContext, useEffect, useState } from 'react';
import { domConsoleHeader, domConsoleId, localStorageKeyHeight, PlacementPosition } from '../../index.types';
import DataProvider from '../../Store';
import InternalActions from '../InternalActions';
import { StyledCloseIcon, StyledContainer, StyledEmptyWrapper, StyledResizable, StyledStatusConsole, StyledTab, StyledTabs, StyledTabsAndActionWrapper, StyledWrapper, } from './css';
var kbdId = 'console';
var domId = domConsoleId;
var domIdWrapper = 'mui-status-console-wrapper';
var relevantType = 'console';
export default (function () {
    var _a = useContext(DataProvider), status = _a.status, updateConsoleActiveId = _a.updateConsoleActiveId, updateIsConsoleOpen = _a.updateIsConsoleOpen, handleKeyboardsRegister = _a.handleKeyboardsRegister;
    var _b = useContext(DataProvider).settings, consoleActiveId = _b.consoleActiveId, isConsoleOpen = _b.isConsoleOpen, position = _b.position;
    var isActivated = function (uniqueId) { return uniqueId === consoleActiveId; };
    var relevantConsoles = status.filter(function (_a) {
        var type = _a.type;
        return type === relevantType;
    });
    var _c = useState(), height = _c[0], setHeight = _c[1];
    var _d = useState('100%'), width = _d[0], setWidth = _d[1];
    var computeHeight = useCallback(function (d) {
        var computedHeight = Number((height || '350px').replace('px', '')) + d;
        if (computedHeight < 125) {
            updateConsoleActiveId({ id: undefined });
        }
        else {
            setHeight("".concat(computedHeight, "px"));
            setWidth('100%');
        }
    }, [height, updateConsoleActiveId]);
    useEffect(function () {
        if (height) {
            localStorage.setItem(localStorageKeyHeight, height);
        }
    }, [height]);
    useEffect(function () {
        var savedHeight = localStorage.getItem(localStorageKeyHeight);
        if (savedHeight) {
            setHeight(savedHeight);
        }
    }, []);
    useEffect(function () {
        handleKeyboardsRegister([
            { id: kbdId, ascii: 192, char: '', onTrigger: function () { return updateIsConsoleOpen(); }, label: 'Hide/Show console' },
            { id: "".concat(kbdId, "_DE"), ascii: 229, char: '', onTrigger: function () { return updateIsConsoleOpen(); }, label: 'Hide/Show console (DE)' },
        ]);
    });
    return _jsx(_Fragment, { children: (isConsoleOpen) && _jsx(_Fragment, { children: status.some(function (_a) {
                var type = _a.type;
                return type === relevantType;
            }) && _jsx(StyledWrapper, __assign({}, { id: domIdWrapper }, { bottom: String(position === PlacementPosition.BOTTOM) }, { children: _jsx(Resizable, __assign({ enable: {
                        left: false,
                        right: false,
                        top: position === PlacementPosition.BOTTOM,
                        bottom: position === PlacementPosition.TOP,
                        topRight: false,
                        bottomRight: false,
                        bottomLeft: false,
                        topLeft: false,
                    }, onResizeStop: function (_e, _direction, _ref, d) { return computeHeight(d.height); }, style: { display: 'flex', flexDirection: 'column' }, minHeight: "75px", maxHeight: "950px", defaultSize: { width: width, height: height || '350px' } }, { children: _jsx(StyledResizable, __assign({ id: 'resizable' }, { children: relevantConsoles.some(function (_a) {
                            var uniqueId = _a.uniqueId;
                            return uniqueId === consoleActiveId;
                        })
                            ? _jsx(_Fragment, { children: _jsxs(StyledContainer, __assign({ id: "consoleTabs", position: position.toString() }, { children: [_jsxs(StyledTabsAndActionWrapper, { children: [_jsx(StyledTabs, { children: relevantConsoles.map(function (_a) {
                                                        var uniqueId = _a.uniqueId, options = _a.options;
                                                        return _jsx(StyledTab, __assign({}, {
                                                            key: uniqueId,
                                                            variant: 'caption',
                                                            onClick: function () { return updateConsoleActiveId({ id: uniqueId }); },
                                                            activated: isActivated(uniqueId).toString(),
                                                        }, { children: _jsx(Box, __assign({ id: "".concat(domConsoleHeader, ".").concat(uniqueId), alignItems: "center", display: 'flex', flexDirection: 'row-reverse', flexWrap: 'nowrap', style: { gap: '8px', pointerEvents: 'none' } }, { children: _jsx(InternalActions, { actions: options.actions, fontSize: "14px" }) })) }));
                                                    }) }), _jsx(Tooltip, __assign({}, { title: 'Close console section' }, { arrow: true, placement: position === PlacementPosition.BOTTOM ? 'top' : 'bottom' }, { children: _jsx(IconButton, __assign({ onClick: function () { return updateConsoleActiveId({}); }, size: "small" }, { children: _jsx(StyledCloseIcon, { style: { fontSize: '16px' } }) })) }))] }), _jsx(StyledStatusConsole, __assign({}, { id: domId }))] })) })
                            : _jsx(StyledEmptyWrapper, { children: _jsx(Box, __assign({ display: 'flex', flexDirection: "row", style: { gap: '8px' } }, { children: status.filter(function (_a) {
                                        var type = _a.type;
                                        return type === relevantType;
                                    }).map(function (statusItem) { return _jsx(Button, __assign({ style: { padding: '24px', textTransform: 'unset' }, variant: "outlined", color: "inherit", onClick: function () { return updateConsoleActiveId({ id: statusItem.uniqueId }); } }, { children: _jsx(Box, __assign({ display: 'flex', flexDirection: "column", style: { gap: '8px' } }, { children: _jsx(Typography, __assign({ variant: "caption", color: "textSecondary" }, { children: statusItem.options.title })) })) }), statusItem.uniqueId); }) })) }) })) })) })) }) });
});
