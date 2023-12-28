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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { lazy, Suspense, useContext, useState } from 'react';
import { StatusType } from '../../index.types';
import DataProvider from '../../Store';
import InternalConsole from '../InternalConsole';
import InternalKeyboard from '../InternalKeyboard';
import InternalNotifications from '../InternalNotifications';
import InternalSettings from '../InternalSettings';
import InternalStatus from '../InternalStatus';
var InternalCommands = lazy(function () { return import('../InternalCommands'); });
import { SBox, SChildren, SChildrenRow, SNotifications, SStatusContainer } from './css';
export default (function (_a) {
    var slim = _a.slim, children = _a.children, style = _a.style;
    var _b = useContext(DataProvider), status = _b.status, shortcuts = _b.shortcuts, commands = _b.commands, settings = _b.settings, snackbars = _b.snackbars;
    var _c = settings, position = _c.position, fullWidth = _c.fullWidth, hasBorder = _c.hasBorder;
    var _d = useState(null), anchorEl = _d[0], setAnchorEl = _d[1];
    var onContextMenu = function (e) {
        e.preventDefault();
        setAnchorEl(e.currentTarget);
    };
    var renderConsole = status.some(function (_a) {
        var type = _a.type;
        return type === StatusType.CONSOLE;
    }) && _jsx(InternalConsole, {});
    var renderCommands = commands.length > 0 && _jsx(Suspense, __assign({ fallback: _jsx(_Fragment, {}) }, { children: _jsx(InternalCommands, {}) }));
    var renderKeyboards = shortcuts.length > 0 && _jsx(InternalKeyboard, {});
    var renderNotifications = snackbars.length > 0 && _jsx(SNotifications, __assign({}, { column: position }, { children: _jsx(InternalNotifications, {}) }));
    var renderStatus = status.some(function (_a) {
        var visible = _a.visible;
        return visible;
    }) && _jsx(SStatusContainer, __assign({}, { fullWidth: fullWidth, hasBorder: hasBorder, onContextMenu: onContextMenu }, { children: _jsx(InternalStatus, __assign({}, { style: style })) }));
    return _jsxs(_Fragment, { children: [_jsxs(SBox, __assign({ id: "mui-status-wrapper" }, { column: position, slim: slim }, { children: [_jsx(SChildrenRow, { children: _jsx(SChildren, __assign({ id: "mui-status-children" }, { children: children })) }), renderConsole, renderCommands, renderStatus, renderNotifications, renderKeyboards] })), _jsx(InternalSettings, __assign({}, { anchorEl: anchorEl, setAnchorEl: setAnchorEl }))] });
});
