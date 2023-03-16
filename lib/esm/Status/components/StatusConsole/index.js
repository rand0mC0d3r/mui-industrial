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
import { useContext, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { domConsoleId, Highlight, StatusType } from '../../../index.types';
import DataProvider from '../../../Store';
import StatusCore from '../StatusCore';
export default (function (_a) {
    var id = _a.id, order = _a.order, disabled = _a.disabled, options = _a.options, secondary = _a.secondary, tooltip = _a.tooltip, onClick = _a.onClick, onContextMenu = _a.onContextMenu, style = _a.style, className = _a.className, children = _a.children;
    var _b = useContext(DataProvider), status = _b.status, updateConsoleActiveId = _b.updateConsoleActiveId;
    var _c = useContext(DataProvider), handleStatusTypeUpdate = _c.handleStatusTypeUpdate, handleStatusConsoleTitleUpdate = _c.handleStatusConsoleTitleUpdate;
    var _d = useContext(DataProvider).settings, consoleActiveId = _d.consoleActiveId, isConsoleOpen = _d.isConsoleOpen;
    var _e = useState(null), statusObject = _e[0], setStatusObject = _e[1];
    var _f = useState(null), elementFound = _f[0], setElementFound = _f[1];
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
        setElementFound(document.getElementById(domConsoleId) || null);
    }, [statusObject, consoleActiveId, isConsoleOpen]);
    useEffect(function () {
        if (statusObject !== null)
            return;
        var foundObject = status.find(function (_a) {
            var uniqueId = _a.uniqueId;
            return uniqueId === id;
        });
        if (!foundObject)
            return;
        setStatusObject(foundObject);
        handleStatusTypeUpdate({ id: id, type: StatusType.CONSOLE });
    }, [status, id, statusObject, handleStatusTypeUpdate]);
    useEffect(function () {
        if (statusObject)
            handleStatusConsoleTitleUpdate({ id: id, title: options === null || options === void 0 ? void 0 : options.title });
    }, [statusObject, id, options === null || options === void 0 ? void 0 : options.title, handleStatusConsoleTitleUpdate]);
    return _jsxs(_Fragment, { children: [_jsx(StatusCore, __assign({}, {
                id: id,
                order: order,
                tooltip: tooltip,
                secondary: secondary,
                disabled: disabled,
                options: { separators: options === null || options === void 0 ? void 0 : options.separators },
                highlight: computeHightlight,
                onClick: handleOnClick,
                onContextMenu: onContextMenu,
                style: style,
                className: className,
            }, { children: children })), elementFound
                && (options === null || options === void 0 ? void 0 : options.content)
                && (statusObject === null || statusObject === void 0 ? void 0 : statusObject.uniqueId) === consoleActiveId
                && createPortal(options === null || options === void 0 ? void 0 : options.content, elementFound)] });
});
