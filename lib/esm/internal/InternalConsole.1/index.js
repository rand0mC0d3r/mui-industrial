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
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import AppsOutageIcon from '@mui/icons-material/AppsOutage';
import CloseIcon from '@mui/icons-material/Close';
import { Tooltip, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Resizable } from 're-resizable';
import { useCallback, useContext, useEffect, useState } from 'react';
import { domConsoleId, PlacementPosition } from '../../index.types';
import DataProvider from '../../Store';
var StyledStatusConsole = styled('div')(function () { return ({
    flex: '1 0 auto',
    overflow: 'hidden',
    display: 'flex',
}); });
var StyledResizable = styled('div')(function () { return ({
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 auto',
}); });
var StyledWrapper = styled('div')(function (_a) {
    var theme = _a.theme, bottom = _a.bottom;
    return ({
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        borderTop: bottom === 'true' ? "1px solid ".concat(theme.palette.divider) : 'unset',
        borderBottom: bottom !== 'true' ? "1px solid ".concat(theme.palette.divider) : 'unset',
        backgroundColor: theme.palette.background.default,
        bottom: bottom === 'true' ? '0px' : 'unset',
        top: bottom !== 'true' ? '0px' : 'unset',
        left: '0px',
        alignItems: 'center',
        right: '0px',
        zIndex: 99,
        // (bottom === 'true'
        // 	? '& > div > div:nth-child(2) > div:not(:first-child)'
        // 	: '& > div > div:nth-child(2) > div:not(:nth-child(3))'): {
        // 	display: 'none',
        // }
        '& > div > div:nth-child(2) > div': {
            display: 'none',
        },
        '& > div > div:nth-child(2) > div:nth-child(1)': {
            display: bottom === 'true' ? 'block' : 'none',
        },
        '& > div > div:nth-child(2) > div:nth-child(3)': {
            display: bottom === 'true' ? 'none' : 'block',
        },
        // '& > div > div:nth-child(2) > div:not(nth-child(3))': {
        //   display: bottom === 'true' ? 'block' : 'none',
        // }
    });
});
var StyledEmptyWrapper = styled('div')(function () { return ({
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 auto',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8px',
}); });
var StyledTabs = styled('div')(function () { return ({
    display: 'flex',
    flexDirection: 'row',
    gap: '0px',
}); });
var StyledCloseIcon = styled(CloseIcon)(function () { return ({
    fontSize: '20px'
}); });
var StyledContainer = styled('div')(function (_a) {
    var position = _a.position;
    return ({
        flex: '1 1 auto',
        display: 'flex !important',
        flexDirection: position === PlacementPosition.BOTTOM ? 'column' : 'column-reverse'
    });
});
var StyledTab = styled(Typography)(function (_a) {
    var theme = _a.theme, activated = _a.activated;
    return ({
        padding: '4px 12px',
        cursor: 'pointer',
        userSelect: 'none',
        backgroundColor: activated === 'true' ? theme.palette.primary.main : 'transparent',
        color: activated === 'true' ? theme.palette.background.default : theme.palette.text.secondary,
        '&:hover': {
            backgroundColor: activated === 'true' ? theme.palette.primary.dark : theme.palette.divider,
            color: activated === 'true' ? theme.palette.background.default : theme.palette.text.primary,
        }
    });
});
var domId = domConsoleId;
var domIdWrapper = 'mui-status-console-wrapper';
var relevantType = 'console';
var localStorageKey = 'mui-industrial-console-height';
export default function () {
    var _a = useContext(DataProvider), status = _a.status, updateConsoleActiveId = _a.updateConsoleActiveId, updateIsConsoleOpen = _a.updateIsConsoleOpen;
    var _b = useContext(DataProvider).settings, consoleActiveId = _b.consoleActiveId, isConsoleOpen = _b.isConsoleOpen, position = _b.position;
    var isActivated = function (uniqueId) { return uniqueId === consoleActiveId; };
    var relevantConsoles = status.filter(function (_a) {
        var type = _a.type;
        return type === relevantType;
    });
    var _c = useState(), height = _c[0], setHeight = _c[1];
    var _d = useState('100%'), width = _d[0], setWidth = _d[1];
    var handleUserKeyPress = useCallback(function (event) {
        var keyCode = event.keyCode;
        if ((keyCode === 27)) {
            updateIsConsoleOpen();
        }
    }, []);
    var computeHeight = useCallback(function (d) {
        var computedHeight = Number((height || '350px').replace('px', '')) + d;
        if (computedHeight < 125) {
            updateConsoleActiveId({ id: undefined });
        }
        else {
            setHeight("".concat(computedHeight, "px"));
            setWidth('100%');
        }
    }, [height]);
    useEffect(function () {
        if (height) {
            localStorage.setItem(localStorageKey, height);
        }
    }, [height]);
    useEffect(function () {
        var savedHeight = localStorage.getItem(localStorageKey);
        if (savedHeight) {
            setHeight(savedHeight);
        }
    }, []);
    useEffect(function () {
        window.addEventListener('keydown', handleUserKeyPress);
        return function () {
            window.removeEventListener('keydown', handleUserKeyPress);
        };
    }, [handleUserKeyPress]);
    return _jsx(_Fragment, { children: (isConsoleOpen) && _jsx(_Fragment, { children: status.some(function (_a) {
                var type = _a.type;
                return type === relevantType;
            }) && _jsx(StyledWrapper, __assign({}, { id: domIdWrapper }, { bottom: String(position === PlacementPosition.BOTTOM) }, { children: _jsx(Resizable, __assign({ onResizeStop: function (_e, _direction, _ref, d) { return computeHeight(d.height); }, style: { display: 'flex', flexDirection: 'column' }, minHeight: "75px", maxHeight: "950px", defaultSize: { width: width, height: height || '350px' } }, { children: _jsx(StyledResizable, { children: relevantConsoles.some(function (_a) {
                            var uniqueId = _a.uniqueId;
                            return uniqueId === consoleActiveId;
                        })
                            ? _jsx(_Fragment, { children: _jsxs(StyledContainer, __assign({ position: position.toString() }, { children: [_jsxs("div", __assign({ style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' } }, { children: [_jsx(StyledTabs, { children: relevantConsoles.map(function (_a) {
                                                        var uniqueId = _a.uniqueId, title = _a.title;
                                                        return _jsx(StyledTab, __assign({}, {
                                                            key: uniqueId,
                                                            variant: 'caption',
                                                            onClick: function () { return updateConsoleActiveId({ id: uniqueId }); },
                                                            activated: isActivated(uniqueId).toString()
                                                        }, { children: title || uniqueId }));
                                                    }) }), _jsx(Tooltip, __assign({}, { title: 'Close console section' }, { children: _jsx(StyledCloseIcon, __assign({}, { onClick: function () { return updateConsoleActiveId({}); } })) }))] })), _jsx(StyledStatusConsole, __assign({}, { id: domId }))] })) })
                            : _jsxs(StyledEmptyWrapper, { children: [_jsx(AppsOutageIcon, {}), status.filter(function (_a) {
                                        var type = _a.type;
                                        return type === relevantType;
                                    }).map(function (statusItem) { return _jsx(_Fragment, { children: statusItem.children }); }), _jsx(Typography, __assign({}, { variant: 'caption', color: 'textSecondary' }, { children: "Seems no consoles available. Select one from above" }))] }) }) })) })) }) });
}