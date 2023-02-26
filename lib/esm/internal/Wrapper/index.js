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
/* eslint-disable @typescript-eslint/no-explicit-any */
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import { Popover, Tooltip, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useContext, useState } from 'react';
import { PlacementPosition, StatusType } from '../../index.types';
import DataProvider from '../../Store';
import InternalConsole from '../InternalConsole';
import InternalKeyboard from '../InternalKeyboard';
import InternalNotifications from '../InternalNotifications';
import InternalStatus from '../InternalStatus';
var SBox = styled('div')(function (_a) {
    var column = _a.column;
    return ({
        height: '100%',
        width: '100%',
        gap: '0px',
        position: 'absolute',
        display: 'flex',
        top: '0px',
        bottom: '0px',
        left: '0px',
        right: '0px',
        flexDirection: column === PlacementPosition.TOP ? 'column-reverse' : 'column'
    });
});
var SNotifications = styled('div')(function (_a) {
    var column = _a.column;
    return ({
        gap: '0px',
        position: 'absolute',
        display: 'flex',
        right: '16px',
        zIndex: 112,
        bottom: column !== PlacementPosition.TOP ? 'unset' : '32px',
        top: column !== PlacementPosition.TOP ? '32px' : 'unset',
        flexDirection: column === PlacementPosition.TOP ? 'column-reverse' : 'column'
    });
});
var SChildren = styled('div')(function () { return ({
    flex: '1 1 auto',
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
}); });
var StyledTypographyNoChildren = styled(Typography)(function () { return ({
    userSelect: 'none'
}); });
var SElement = styled('div')(function () { return ({
    display: 'flex',
    flexDirection: 'row',
    gap: '16px',
    padding: '8px',
}); });
var SElementItem = styled('div')(function (_a) {
    var theme = _a.theme;
    return ({
        display: 'flex',
        minWidth: '165px',
        cursor: 'pointer',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '4px',
        padding: '4px 6px',
        '&:hover': {
            backgroundColor: theme.palette.primary.light,
            color: "".concat(theme.palette.background.default, " !important"),
        },
    });
});
var SStatusContainer = styled('div')(function (_a) {
    var theme = _a.theme, hasBorder = _a.hasBorder, fullWidth = _a.fullWidth;
    return ({
        alignSelf: 'stretch',
        justifyContent: 'center',
        display: 'flex',
        boxShadow: fullWidth && hasBorder
            ? ["inset 0px 0px 0px 1px ".concat(theme.palette.divider)].join(',')
            : 'none',
        backgroundColor: theme.palette.mode === 'light'
            ? theme.palette.background.default
            : theme.palette.background.paper,
    });
});
export default function (_a) {
    var children = _a.children, style = _a.style;
    var _b = useContext(DataProvider), status = _b.status, shortcuts = _b.shortcuts, settings = _b.settings, handleStatusVisibilityToggle = _b.handleStatusVisibilityToggle;
    var _c = settings, position = _c.position, fullWidth = _c.fullWidth, hasBorder = _c.hasBorder;
    var _d = useState(null), anchorEl = _d[0], setAnchorEl = _d[1];
    var open = Boolean(anchorEl);
    var onClose = function () { return setAnchorEl(null); };
    var onContextMenu = function (e) {
        e.preventDefault();
        setAnchorEl(e.currentTarget);
    };
    var statusEntry = function (statusItem) { return _jsxs(SElementItem, __assign({ onClick: function () { return handleStatusVisibilityToggle({ id: statusItem.uniqueId }); } }, { children: [statusItem.visible ? _jsx(CheckBoxOutlinedIcon, {}) : _jsx(CheckBoxOutlineBlankOutlinedIcon, {}), statusItem.children || _jsx(StyledTypographyNoChildren, __assign({ variant: "caption", color: "textSecondary" }, { children: "No content for child" }))] })); };
    var entryWrapper = function (statusItem) { return _jsx(Tooltip, __assign({}, { key: statusItem.uniqueId, title: 'Toggle visibility of tile' }, { children: statusEntry(statusItem) })); };
    return _jsxs(_Fragment, { children: [_jsxs(SBox, __assign({ id: "mui-status-wrapper" }, { column: position }, { children: [_jsxs(SChildren, __assign({ id: "mui-status-children" }, { children: [children, status.some(function (_a) {
                                var type = _a.type;
                                return type === StatusType.CONSOLE;
                            }) && _jsx(InternalConsole, {})] })), status.some(function (_a) {
                        var visible = _a.visible;
                        return visible;
                    }) && _jsx(SStatusContainer, __assign({}, { fullWidth: fullWidth, hasBorder: hasBorder, onContextMenu: onContextMenu }, { children: _jsx(InternalStatus, __assign({}, { style: style })) })), _jsx(SNotifications, __assign({}, { column: position }, { children: _jsx(InternalNotifications, {}) })), _jsx(InternalKeyboard, {})] })), _jsx(Popover, __assign({ id: "toggle-status-popover" }, { open: open, anchorEl: anchorEl, onClose: onClose, elevation: 1 }, { anchorOrigin: { vertical: position === PlacementPosition.TOP ? 'top' : 'bottom', horizontal: 'center' }, transformOrigin: { vertical: position === PlacementPosition.BOTTOM ? 'bottom' : 'top', horizontal: 'center' }, style: { marginTop: "".concat((position === PlacementPosition.TOP ? 1 : -1) * 12, "px") } }, { children: _jsx(SElement, __assign({}, { onContextMenu: function (e) { e.preventDefault(); } }, { children: [false, true].map(function (state) { return _jsx("div", { children: status.filter(function (_a) {
                            var secondary = _a.secondary;
                            return secondary === state;
                        }).map(function (statusItem) { return entryWrapper(statusItem); }) }, state.toString()); }) })) }))] });
}
