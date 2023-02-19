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
/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Highlight, StatusType } from '../index.types';
import StatusCore from '../StatusCore';
import DataProvider from '../Store';
export default function (_a) {
    var id = _a.id, _b = _a.secondary, secondary = _b === void 0 ? false : _b, style = _a.style, onClick = _a.onClick, _c = _a.tooltip, tooltip = _c === void 0 ? '' : _c, children = _a.children, _d = _a.endSeparator, endSeparator = _d === void 0 ? false : _d, _e = _a.startSeparator, startSeparator = _e === void 0 ? false : _e, content = _a.content, title = _a.title;
    var _f = useContext(DataProvider), status = _f.status, handleStatusTypeUpdate = _f.handleStatusTypeUpdate, handleStatusConsoleTitleUpdate = _f.handleStatusConsoleTitleUpdate, updateConsoleActiveId = _f.updateConsoleActiveId;
    var _g = useContext(DataProvider).settings, consoleActiveId = _g.consoleActiveId, isConsoleOpen = _g.isConsoleOpen;
    var _h = useState(null), statusObject = _h[0], setStatusObject = _h[1];
    var _j = useState(null), elementFound = _j[0], setElementFound = _j[1];
    var computeHightlight = (statusObject && isConsoleOpen && (statusObject === null || statusObject === void 0 ? void 0 : statusObject.uniqueId) === consoleActiveId) ? Highlight.PRIMARY : Highlight.DEFAULT;
    var handleOnClick = function (event) {
        if (onClick)
            onClick(event);
        if (!statusObject)
            return;
        if (!isConsoleOpen || consoleActiveId !== id)
            updateConsoleActiveId({ id: statusObject === null || statusObject === void 0 ? void 0 : statusObject.uniqueId });
    };
    useEffect(function () {
        setElementFound(document.getElementById('mui-status-console') || null);
    }, [statusObject, consoleActiveId, isConsoleOpen]);
    useEffect(function () {
        var foundObject = status.find(function (_a) {
            var uniqueId = _a.uniqueId;
            return uniqueId === id;
        });
        if (statusObject === null && foundObject) {
            setStatusObject(foundObject);
            handleStatusTypeUpdate({ id: id, type: StatusType.CONSOLE });
        }
    }, [status, id, statusObject]);
    useEffect(function () {
        if (statusObject)
            handleStatusConsoleTitleUpdate({ id: id, title: title });
    }, [statusObject, id, title]);
    return _jsxs(_Fragment, { children: [_jsx(StatusCore, __assign({}, {
                id: id,
                endSeparator: endSeparator,
                startSeparator: startSeparator,
                tooltip: tooltip,
                secondary: secondary,
                highlight: computeHightlight,
                onClick: handleOnClick,
                style: __assign(__assign({}, style), { cursor: 'context-menu', minWidth: '24px' })
            }, { children: children })), elementFound && statusObject && statusObject.uniqueId === consoleActiveId && createPortal(content, elementFound)] });
}
