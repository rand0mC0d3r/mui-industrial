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
    var id = _a.id, secondary = _a.secondary, style = _a.style, onClick = _a.onClick, tooltip = _a.tooltip, children = _a.children, endSeparator = _a.endSeparator, startSeparator = _a.startSeparator, content = _a.content, title = _a.title;
    var _b = useContext(DataProvider), status = _b.status, handleStatusTypeUpdate = _b.handleStatusTypeUpdate, handleStatusConsoleTitleUpdate = _b.handleStatusConsoleTitleUpdate, updateConsoleActiveId = _b.updateConsoleActiveId;
    var _c = useContext(DataProvider).settings, consoleActiveId = _c.consoleActiveId, isConsoleOpen = _c.isConsoleOpen;
    var _d = useState(null), statusObject = _d[0], setStatusObject = _d[1];
    var _e = useState(null), elementFound = _e[0], setElementFound = _e[1];
    var computeHightlight = (statusObject && isConsoleOpen && (statusObject === null || statusObject === void 0 ? void 0 : statusObject.uniqueId) === consoleActiveId)
        ? Highlight.PRIMARY
        : Highlight.DEFAULT;
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
                style: __assign({}, style)
            }, { children: children })), elementFound && statusObject && statusObject.uniqueId === consoleActiveId && createPortal(content, elementFound)] });
}
