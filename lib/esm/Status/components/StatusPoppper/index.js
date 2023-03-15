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
import { alpha, Box, ClickAwayListener, Popper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useContext, useEffect, useRef, useState, } from 'react';
import { Highlight, PlacementPosition, } from '../../../index.types';
import InternalHeader from '../../../internal/InternalHeader';
import DataProvider from '../../../Store';
import StatusCore from '../StatusCore';
var StyledBox = styled(Box)(function (_a) {
    var theme = _a.theme, width = _a.width;
    return ({
        width: "".concat(width ? "".concat(theme.breakpoints.values[width] / 1.42, "px") : 'auto'),
        height: "".concat(width ? "".concat(theme.breakpoints.values[width] / 1.24, "px") : 'auto'),
    });
});
var StyledPopper = styled(Popper)(function () { return ({
    zIndex: '101',
}); });
var StyledContainer = styled('div')(function (_a) {
    var theme = _a.theme, elevation = _a.elevation, highlight = _a.highlight, variant = _a.variant, decoration = _a.decoration;
    return ({
        display: 'flex',
        alignItems: 'stretch',
        position: 'relative',
        flexDirection: 'column',
        padding: 0,
        backdropFilter: 'blur(8px)',
        backgroundColor: "".concat(alpha(theme.palette.background.default, 0.75)),
        borderRadius: "".concat(theme.shape.borderRadius, "px"),
        margin: decoration === 'true' ? "".concat(theme.spacing(0.75), " 0px") : "".concat(theme.spacing(0.25), " 0px"),
        border: variant === 'default'
            ? '2px solid transparent'
            : "2px solid ".concat(highlight !== 'default' ? theme.palette[highlight].main : 'transparent'),
        boxShadow: theme.shadows[elevation || 2],
    });
});
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
    var id = _a.id, disabled = _a.disabled, _c = _a.highlight, highlight = _c === void 0 ? Highlight.DEFAULT : _c, options = _a.options, _d = _a.secondary, secondary = _d === void 0 ? false : _d, _e = _a.tooltip, tooltip = _e === void 0 ? '' : _e, onClick = _a.onClick, onContextMenu = _a.onContextMenu, style = _a.style, className = _a.className, children = _a.children;
    var _f = useContext(DataProvider), status = _f.status, settings = _f.settings;
    var _g = useState(null), statusObject = _g[0], setStatusObject = _g[1];
    var _h = useState(null), anchorEl = _h[0], setAnchorEl = _h[1];
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
    useEffect(function () {
        if (!options.open) {
            if (!(statusObject === null || statusObject === void 0 ? void 0 : statusObject.keepOpen) || !settings.hasLock) {
                setAnchorEl(null);
            }
            return;
        }
        if (!(popperReference === null || popperReference === void 0 ? void 0 : popperReference.current))
            return;
        setAnchorEl(popperReference.current);
    }, [options.open, statusObject, settings.hasLock]);
    var determineHighlight = function () { return ((statusObject === null || statusObject === void 0 ? void 0 : statusObject.keepOpen) || open) ? Highlight.PRIMARY : highlight; };
    return _jsxs(_Fragment, { children: [_jsx(StatusCore, __assign({}, {
                id: id,
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
