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
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { domConsoleId, Highlight, StatusType } from '../../../index.types';
import DataProvider from '../../../Store';
import StatusCore from '../StatusCore';
export default (function (_a) {
    var id = _a.id, order = _a.order, disabled = _a.disabled, options = _a.options, secondary = _a.secondary, tooltip = _a.tooltip, onClick = _a.onClick, onContextMenu = _a.onContextMenu, style = _a.style, className = _a.className, children = _a.children;
    var _b = useContext(DataProvider), status = _b.status, updateConsoleActiveId = _b.updateConsoleActiveId;
    var handleStatusTypeUpdate = useContext(DataProvider).handleStatusTypeUpdate;
    var _c = useContext(DataProvider).settings, consoleActiveId = _c.consoleActiveId, isConsoleOpen = _c.isConsoleOpen;
    var _d = useState(undefined), statusObject = _d[0], setStatusObject = _d[1];
    var _e = useState(null), elementFound = _e[0], setElementFound = _e[1];
    var computeHightlight = (statusObject && isConsoleOpen && (statusObject === null || statusObject === void 0 ? void 0 : statusObject.uniqueId) === consoleActiveId)
        ? Highlight.PRIMARY
        : Highlight.DEFAULT;
    var handleOnClick = function (event) {
        if (onClick)
            onClick(event);
        if (!statusObject)
            return;
        if (!isConsoleOpen || consoleActiveId !== id) {
            updateConsoleActiveId({ id: statusObject === null || statusObject === void 0 ? void 0 : statusObject.uniqueId });
        }
        else {
            updateConsoleActiveId({ id: undefined });
        }
    };
    useEffect(function () {
        setElementFound(document.getElementById(domConsoleId) || null);
    }, [statusObject, consoleActiveId, isConsoleOpen]);
    useEffect(function () {
        setStatusObject(status.find(function (_a) {
            var uniqueId = _a.uniqueId;
            return uniqueId === id;
        }));
    }, [status, id]);
    useEffect(function () {
        if (statusObject && statusObject.type !== StatusType.CONSOLE) {
            handleStatusTypeUpdate({ id: id, type: StatusType.CONSOLE });
        }
    }, [statusObject, id, handleStatusTypeUpdate]);
    // useEffect(() => {
    //   if (statusObject !== null) return;
    //   const foundObject = status.find(({ uniqueId }) => uniqueId === id);
    //   if (!foundObject) return;
    //   setStatusObject(foundObject);
    //   handleStatusTypeUpdate({ id, type: StatusType.CONSOLE });
    // }, [status, id, statusObject, handleStatusTypeUpdate]);
    // useEffect(() => {
    //   if (statusObject) handleStatusConsoleTitleUpdate({ id, title: options?.title });
    // }, [statusObject, id, options?.title, handleStatusConsoleTitleUpdate]);
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
