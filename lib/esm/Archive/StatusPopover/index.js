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
import { useContext, useEffect, useRef, useState } from 'react';
import { Highlight } from '../../index.types';
import StatusCore from '../../Status/components/StatusCore';
import DataProvider from '../../Store';
import Component from './Component';
var defaultPopperOptions = {
    elevation: 4,
    hasToolbar: true,
    onClose: function () { },
    open: false,
    hasArrow: false,
    hasDecoration: false,
};
var defaultSeparatorOptions = {
    start: false,
    end: false,
};
export default (function (_a) {
    var id = _a.id, order = _a.order, disabled = _a.disabled, _b = _a.highlight, highlight = _b === void 0 ? Highlight.DEFAULT : _b, options = _a.options, _c = _a.secondary, secondary = _c === void 0 ? false : _c, _d = _a.tooltip, tooltip = _d === void 0 ? '' : _d, onClick = _a.onClick, onContextMenu = _a.onContextMenu, style = _a.style, className = _a.className, children = _a.children;
    var _e = useState(null), statusObject = _e[0], setStatusObject = _e[1];
    var _f = useState(null), anchorEl = _f[0], setAnchorEl = _f[1];
    var _g = useState(false), open = _g[0], setOpen = _g[1];
    var status = useContext(DataProvider).status;
    var popperReference = useRef();
    var enrichedPopper = __assign(__assign({}, defaultPopperOptions), options === null || options === void 0 ? void 0 : options.popper);
    var enrichedSeparators = __assign(__assign({}, defaultSeparatorOptions), options === null || options === void 0 ? void 0 : options.separators);
    var handleOnClick = function (event) {
        if (statusObject === null || statusObject === void 0 ? void 0 : statusObject.keepOpen)
            return;
        if (onClick)
            onClick(event);
        setAnchorEl(open ? null : event === null || event === void 0 ? void 0 : event.currentTarget);
        setOpen(function (p) { return !p; });
    };
    useEffect(function () {
        var foundObject = status.find(function (item) { return item.uniqueId === id; });
        if (!foundObject)
            return;
        setStatusObject(foundObject);
    }, [status, id]);
    useEffect(function () {
        if (!anchorEl) {
            setOpen(false);
        }
    }, [anchorEl]);
    useEffect(function () {
        if (options === null || options === void 0 ? void 0 : options.open) {
            setOpen(options === null || options === void 0 ? void 0 : options.open);
        }
    }, [options.open]);
    useEffect(function () {
        if (!options.open) {
            if (!(statusObject === null || statusObject === void 0 ? void 0 : statusObject.keepOpen)) {
                setAnchorEl(null);
            }
            return;
        }
        if (!(popperReference === null || popperReference === void 0 ? void 0 : popperReference.current))
            return;
        setAnchorEl(popperReference.current);
    }, [statusObject, options]);
    var determineHighlight = ((statusObject === null || statusObject === void 0 ? void 0 : statusObject.keepOpen) || options.open !== undefined ? options.open : false)
        ? highlight !== Highlight.DEFAULT ? highlight : Highlight.PRIMARY
        : highlight;
    return _jsxs(_Fragment, { children: [_jsx(StatusCore, __assign({}, {
                ref: popperReference,
                onLoad: function (ref) {
                    setAnchorEl(ref.current);
                },
                id: id,
                order: order,
                disabled: disabled,
                tooltip: options.open ? null : tooltip,
                highlight: determineHighlight,
                secondary: secondary,
                options: {
                    separators: enrichedSeparators,
                    popper: __assign(__assign({}, enrichedPopper), { hasArrow: options.open && enrichedPopper.hasArrow }),
                },
                onClick: handleOnClick,
                onContextMenu: onContextMenu,
                style: __assign(__assign({}, style), { cursor: (statusObject === null || statusObject === void 0 ? void 0 : statusObject.keepOpen) ? 'not-allowed' : 'pointer' }),
                className: className,
            }, { children: children })), _jsx(Component, __assign({}, {
                id: id,
                enrichedPopper: enrichedPopper,
                highlight: highlight,
                statusObject: statusObject,
                open: open,
                anchorEl: anchorEl,
                setAnchorEl: setAnchorEl,
                options: options,
                secondary: secondary,
            }))] });
});
