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
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ClickAwayListener } from '@mui/material';
import { useContext, useEffect, useRef, useState } from 'react';
import { Highlight, PlacementPosition, } from '../../../index.types';
import InternalHeader from '../../../internal/InternalHeader';
import DataProvider from '../../../Store';
import StatusCore from '../StatusCore';
import { StyledBox, StyledContainer, StyledPopper } from './css';
var defaultPopperOptions = {
    elevation: 2,
    hasToolbar: true,
    onClose: function () { },
    hasArrow: false,
    hasDecoration: false,
};
var defaultSeparatorOptions = {
    start: false,
    end: false,
};
export default (function (_a) {
    var _b;
    var id = _a.id, order = _a.order, disabled = _a.disabled, _c = _a.highlight, highlight = _c === void 0 ? Highlight.DEFAULT : _c, options = _a.options, _d = _a.secondary, secondary = _d === void 0 ? false : _d, _e = _a.tooltip, tooltip = _e === void 0 ? '' : _e, onClick = _a.onClick, onContextMenu = _a.onContextMenu, style = _a.style, className = _a.className, children = _a.children;
    var _f = useState(null), statusObject = _f[0], setStatusObject = _f[1];
    var _g = useState(null), anchorEl = _g[0], setAnchorEl = _g[1];
    var status = useContext(DataProvider).status;
    var settings = useContext(DataProvider).settings;
    var popperReference = useRef();
    var enrichedPopper = __assign(__assign({}, defaultPopperOptions), options === null || options === void 0 ? void 0 : options.popper);
    var enrichedSeparators = __assign(__assign({}, defaultSeparatorOptions), options === null || options === void 0 ? void 0 : options.separators);
    var open = Boolean(anchorEl);
    var handleOnClick = function (event) {
        if (statusObject === null || statusObject === void 0 ? void 0 : statusObject.keepOpen)
            return;
        if (onClick)
            onClick(event);
        setAnchorEl(anchorEl ? null : event === null || event === void 0 ? void 0 : event.currentTarget);
    };
    var handleOnClose = function (event) {
        if (enrichedPopper.onClose && !(statusObject === null || statusObject === void 0 ? void 0 : statusObject.keepOpen))
            enrichedPopper.onClose(event);
        if (!(statusObject === null || statusObject === void 0 ? void 0 : statusObject.keepOpen) || !settings.hasLock)
            setAnchorEl(null);
    };
    useEffect(function () {
        var foundObject = status.find(function (item) { return item.uniqueId === id; });
        if (!foundObject)
            return;
        setStatusObject(foundObject);
    }, [status, id]);
    // TODO: figure out what this is for
    // useEffect(() => {
    //   console.log('open', options.open, statusObject?.keepOpen, settings.hasLock);
    //   if (!options.open) {
    //     if (!statusObject?.keepOpen || !settings.hasLock) {
    //       setAnchorEl(null);
    //     }
    //     return;
    //   }
    //   if (!popperReference?.current) return;
    //   setAnchorEl(popperReference.current);
    // }, [options.open, statusObject, settings.hasLock]);
    var determineHighlight = function () { return ((statusObject === null || statusObject === void 0 ? void 0 : statusObject.keepOpen) || open) ? Highlight.PRIMARY : highlight; };
    return _jsxs(_Fragment, { children: [_jsx(StatusCore, __assign({}, {
                id: id,
                order: order,
                ref: popperReference,
                disabled: disabled,
                onContextMenu: onContextMenu,
                className: className,
                tooltip: open ? null : tooltip,
                options: {
                    separators: enrichedSeparators,
                    popper: __assign(__assign({}, enrichedPopper), { hasArrow: open && enrichedPopper.hasArrow }),
                },
                highlight: determineHighlight(),
                secondary: secondary,
                onClick: handleOnClick,
                style: style,
            }, { children: children })), _jsx(StyledPopper, __assign({}, {
                keepMounted: statusObject === null || statusObject === void 0 ? void 0 : statusObject.keepOpen,
                open: open,
                anchorEl: anchorEl,
                onClose: enrichedPopper.onClose,
                elevation: enrichedPopper.elevation,
                placement: "".concat(settings.position === PlacementPosition.TOP ? 'bottom' : 'top', "-").concat(secondary ? 'end' : 'start'),
                id: "mui-status-panel-popover-".concat(id),
            }, { children: _jsx(ClickAwayListener, __assign({ onClickAway: function (event) { return handleOnClose(event); } }, { children: _jsxs(StyledContainer, __assign({}, {
                        elevation: enrichedPopper.elevation,
                        highlight: determineHighlight().toString(),
                        variant: settings.variant.toString(),
                        decoration: (_b = enrichedPopper.hasDecoration) === null || _b === void 0 ? void 0 : _b.toString(),
                    }, { children: [_jsx(StyledBox, __assign({ display: "flex", alignItems: "stretch", justifyContent: "space-between", flexDirection: "column", width: enrichedPopper.width }, { children: options === null || options === void 0 ? void 0 : options.content })), enrichedPopper.hasToolbar && _jsx(InternalHeader, __assign({}, {
                                id: id,
                                actions: enrichedPopper.actions,
                                title: options === null || options === void 0 ? void 0 : options.title,
                            }))] })) })) }))] });
});
