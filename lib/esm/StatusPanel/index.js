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
/* eslint-disable no-unused-vars */
import { alpha, Box, ClickAwayListener, Popper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useContext, useEffect, useState } from 'react';
import { Highlight, PlacementPosition } from '../index.types';
import InternalHeader from '../internal/InternalHeader';
import StatusCore from '../StatusCore';
import DataProvider from '../Store';
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
        boxShadow: theme.shadows[elevation]
    });
});
export default function (_a) {
    var id = _a.id, _b = _a.secondary, secondary = _b === void 0 ? false : _b, _c = _a.elevation, elevation = _c === void 0 ? 2 : _c, width = _a.width, style = _a.style, onClick = _a.onClick, onClose = _a.onClose, _d = _a.highlight, highlight = _d === void 0 ? Highlight.DEFAULT : _d, _e = _a.tooltip, tooltip = _e === void 0 ? '' : _e, children = _a.children, _f = _a.options, options = _f === void 0 ? {
        separators: {
            start: false,
            end: false,
        }
    } : _f, popover = _a.popover, popoverTitle = _a.popoverTitle, popoverActions = _a.popoverActions, _g = _a.hasToolbar, hasToolbar = _g === void 0 ? true : _g, _h = _a.hasDecoration, hasDecoration = _h === void 0 ? true : _h;
    var _j = useContext(DataProvider), status = _j.status, settings = _j.settings;
    var _k = useState(null), statusObject = _k[0], setStatusObject = _k[1];
    var _l = useState(null), anchorEl = _l[0], setAnchorEl = _l[1];
    var open = Boolean(anchorEl);
    var handleOnClick = function (event) {
        if (statusObject === null || statusObject === void 0 ? void 0 : statusObject.keepOpen)
            return;
        if (onClick)
            onClick(event);
        setAnchorEl(anchorEl ? null : event === null || event === void 0 ? void 0 : event.currentTarget);
    };
    var handleOnClose = function (event) {
        if (onClose && !(statusObject === null || statusObject === void 0 ? void 0 : statusObject.keepOpen))
            onClose(event);
        if (!(statusObject === null || statusObject === void 0 ? void 0 : statusObject.keepOpen) || !settings.hasLock)
            setAnchorEl(null);
    };
    useEffect(function () {
        var foundObject = status.find(function (item) { return item.uniqueId === id; });
        if (foundObject) {
            setStatusObject(foundObject);
        }
    }, [status, id]);
    var determineHighlight = function () { return ((statusObject === null || statusObject === void 0 ? void 0 : statusObject.keepOpen) || open) ? Highlight.PRIMARY : highlight; };
    return _jsxs(_Fragment, { children: [_jsx(StatusCore, __assign({}, {
                id: id,
                tooltip: open ? null : tooltip,
                options: { separators: options.separators },
                hasArrow: open && hasDecoration,
                highlight: determineHighlight(),
                secondary: secondary,
                onClick: handleOnClick,
                style: __assign({}, style),
            }, { children: children })), _jsx(StyledPopper, __assign({}, {
                keepMounted: statusObject === null || statusObject === void 0 ? void 0 : statusObject.keepOpen,
                open: open,
                anchorEl: anchorEl,
                onClose: onClose,
                elevation: elevation,
                placement: "".concat(settings.position === PlacementPosition.TOP ? 'bottom' : 'top', "-").concat(secondary ? 'end' : 'start'),
                id: "mui-status-panel-popover-".concat(id),
            }, { children: _jsx(ClickAwayListener, __assign({ onClickAway: function (event) { return handleOnClose(event); } }, { children: _jsxs(StyledContainer, __assign({}, {
                        elevation: elevation,
                        highlight: determineHighlight().toString(),
                        variant: settings.variant.toString(),
                        decoration: hasDecoration.toString()
                    }, { children: [_jsx(StyledBox, __assign({ display: "flex", alignItems: "stretch", justifyContent: "space-between", flexDirection: "column", width: width }, { children: popover })), hasToolbar && _jsx(InternalHeader, __assign({}, { id: id, popoverActions: popoverActions, popoverTitle: popoverTitle }))] })) })) }))] });
}
