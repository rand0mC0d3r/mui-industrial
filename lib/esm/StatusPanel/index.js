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
import { alpha, ClickAwayListener, Popper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useContext, useEffect, useState } from 'react';
import { Highlight, PlacementPosition } from '../index.types';
import InternalHeader from '../internal/InternalHeader';
import StatusCore from '../StatusCore';
import DataProvider from '../Store';
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
        backgroundColor: "".concat(alpha(theme.palette.background.default, 0.75)),
        backdropFilter: 'blur(8px)',
        borderRadius: "".concat(theme.shape.borderRadius, "px"),
        margin: decoration === 'true' ? "".concat(theme.spacing(0.75), " 0px") : "".concat(theme.spacing(0.25), " 0px"),
        padding: 0,
        border: variant === 'default'
            ? '2px solid transparent'
            : "2px solid ".concat(highlight !== 'default' ? theme.palette[highlight].main : 'transparent'),
        boxShadow: theme.shadows[elevation]
    });
});
export default function (_a) {
    var id = _a.id, _b = _a.secondary, secondary = _b === void 0 ? false : _b, _c = _a.elevation, elevation = _c === void 0 ? 2 : _c, style = _a.style, onClick = _a.onClick, onClose = _a.onClose, _d = _a.highlight, highlight = _d === void 0 ? Highlight.DEFAULT : _d, _e = _a.tooltip, tooltip = _e === void 0 ? '' : _e, children = _a.children, popover = _a.popover, popoverTitle = _a.popoverTitle, popoverActions = _a.popoverActions, _f = _a.hasToolbar, hasToolbar = _f === void 0 ? true : _f, _g = _a.hasDecoration, hasDecoration = _g === void 0 ? true : _g, _h = _a.endSeparator, endSeparator = _h === void 0 ? false : _h, _j = _a.startSeparator, startSeparator = _j === void 0 ? false : _j;
    var _k = useContext(DataProvider), status = _k.status, settings = _k.settings;
    var _l = useState(null), statusObject = _l[0], setStatusObject = _l[1];
    var _m = useState(null), anchorEl = _m[0], setAnchorEl = _m[1];
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
                endSeparator: endSeparator,
                startSeparator: startSeparator,
                hasArrow: open && hasDecoration,
                highlight: determineHighlight(),
                secondary: secondary,
                onClick: handleOnClick,
                style: __assign(__assign({}, style), { cursor: 'context-menu', minWidth: '24px' }),
            }, { children: children })), _jsx(StyledPopper, __assign({}, {
                keepMounted: statusObject === null || statusObject === void 0 ? void 0 : statusObject.keepOpen,
                open: open,
                anchorEl: anchorEl,
                onClose: onClose,
                elevation: elevation,
                placement: "".concat(settings.position === PlacementPosition.Top ? 'bottom' : 'top', "-").concat(secondary ? 'end' : 'start'),
                id: "mui-status-panel-popover-".concat(id),
            }, { children: _jsx(ClickAwayListener, __assign({ onClickAway: function (event) { return handleOnClose(event); } }, { children: _jsxs(StyledContainer, __assign({}, {
                        elevation: elevation,
                        highlight: determineHighlight().toString(),
                        variant: settings.variant.toString(),
                        decoration: hasDecoration.toString()
                    }, { children: [popover, hasToolbar && _jsx(InternalHeader, __assign({}, { id: id, popoverActions: popoverActions, popoverTitle: popoverTitle }))] })) })) }))] });
}
