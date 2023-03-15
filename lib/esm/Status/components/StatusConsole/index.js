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
import { domConsoleId, Highlight, StatusType } from '../../../index.types';
import DataProvider from '../../../Store';
import StatusCore from '../StatusCore';
/**
 *
 * Status Console component
 *
 * @description
 * Status Console is a Status component that can be used to display a console
 * with a title and content. It can be used to display a list of items, a table,
 * or any other content.
 *
 * @param id - (string) Unique id of the Status Console
 * @param disabled - (boolean) If true, the Status Console will be disabled
 * @param options - (StatusOptionsProps) Options for the Status Console
 * @param secondary - (boolean) If true, the Status Console will be rendered as a secondary status
 * @param tooltip - (ReactNode | string) Tooltip to be displayed on hover
 *
 * @param onClick - (event: MouseEvent<HTMLDivElement>) => void) Callback fired when the Status Console is clicked
 * @param onContextMenu - (event: MouseEvent<HTMLDivElement>) => void) Callback fired when the Status Console is right clicked
 *
 * @param style - (CSSProperties) Override or extend the styles applied to the component
 * @param className - (HTMLAttributes<HTMLDivElement>['className']) Override or extend the styles applied to the component
 *
 * @param children - (ReactNode) Children to be rendered inside the Status Console
 *
 * @example
 * <Status
 *  id="statusConsole"
 *  options={{
 *    as: StatusType.CONSOLE,
 *    title: 'Status Console',
 *    content: <div>Content</div>,
 *    ...
 *  }}
 * >...
 *
 * @returns (JSX.Element) Status Console element
 */
export default (function (_a) {
    var id = _a.id, disabled = _a.disabled, options = _a.options, secondary = _a.secondary, tooltip = _a.tooltip, onClick = _a.onClick, onContextMenu = _a.onContextMenu, style = _a.style, className = _a.className, children = _a.children;
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
                style: style,
                className: className,
                tooltip: tooltip,
                secondary: secondary,
                onContextMenu: onContextMenu,
                disabled: disabled,
                options: { separators: options === null || options === void 0 ? void 0 : options.separators },
                highlight: computeHightlight,
                onClick: handleOnClick,
            }, { children: children })), elementFound && (options === null || options === void 0 ? void 0 : options.content)
                && statusObject
                && statusObject.uniqueId === consoleActiveId
                && createPortal(options === null || options === void 0 ? void 0 : options.content, elementFound)] });
});