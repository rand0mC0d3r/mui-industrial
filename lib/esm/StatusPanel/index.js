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
/* eslint-disable no-restricted-globals */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { alpha, ClickAwayListener, Popper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useContext, useEffect, useState } from 'react';
import InternalHeader from '../internal/InternalHeader';
import Status from '../Status';
import DataProvider from '../Store';
var StyledPopper = styled(Popper)(function (_a) {
    var toggled = _a.toggled;
    return ({
        zIndex: '101',
        marginTop: "".concat((toggled === 'true' ? 1 : -1) * 4, "px !important"),
    });
});
var StyledContainer = styled('div')(function (_a) {
    var theme = _a.theme, elevation = _a.elevation, variant = _a.variant, decoration = _a.decoration;
    return ({
        display: 'flex',
        alignItems: 'stretch',
        position: 'relative',
        flexDirection: 'column',
        backgroundColor: "".concat(alpha(theme.palette.background.default, 0.75)),
        backdropFilter: 'blur(8px)',
        borderRadius: "".concat(theme.shape.borderRadius, "px"),
        margin: decoration === 'true' ? "".concat(theme.spacing(0.5), " 0px") : "".concat(theme.spacing(0.25), " 0px"),
        padding: 0,
        border: variant === 'default' ? 'none' : "3px solid ".concat(theme.palette[variant].main),
        boxShadow: theme.shadows[elevation]
    });
});
export default function (_a) {
    var id = _a.id, _b = _a.secondary, secondary = _b === void 0 ? false : _b, _c = _a.elevation, elevation = _c === void 0 ? 2 : _c, style = _a.style, onClick = _a.onClick, onClose = _a.onClose, highlight = _a.highlight, _d = _a.tooltip, tooltip = _d === void 0 ? '' : _d, children = _a.children, popover = _a.popover, popoverTitle = _a.popoverTitle, popoverActions = _a.popoverActions, _e = _a.hasToolbar, hasToolbar = _e === void 0 ? true : _e, _f = _a.hasDecoration, hasDecoration = _f === void 0 ? true : _f, _g = _a.variant, variant = _g === void 0 ? 'default' : _g, _h = _a.endSeparator, endSeparator = _h === void 0 ? false : _h, _j = _a.startSeparator, startSeparator = _j === void 0 ? false : _j;
    var _k = useContext(DataProvider), status = _k.status, settings = _k.settings;
    var _l = useState(null), statusObject = _l[0], setStatusObject = _l[1];
    // const [keepOpen, setKeepOpen] = useState(false)
    var _m = useState(null), anchorEl = _m[0], setAnchorEl = _m[1];
    var _o = useState(false), isToggled = _o[0], setIsToggled = _o[1];
    var open = Boolean(anchorEl);
    var handleOnClick = function (e) {
        if (onClick && !(statusObject === null || statusObject === void 0 ? void 0 : statusObject.keepOpen)) {
            onClick();
        }
        if (anchorEl && !(statusObject === null || statusObject === void 0 ? void 0 : statusObject.keepOpen)) {
            setAnchorEl(null);
        }
        else {
            setAnchorEl(e.currentTarget);
        }
        setIsToggled(e.pageY < screen.height / 2);
    };
    var handleOnClose = function () {
        if (onClose && !(statusObject === null || statusObject === void 0 ? void 0 : statusObject.keepOpen)) {
            onClose();
        }
        if (!(statusObject === null || statusObject === void 0 ? void 0 : statusObject.keepOpen) || !settings.hasLock) {
            setAnchorEl(null);
        }
    };
    useEffect(function () {
        var foundObject = status.find(function (item) { return item.uniqueId === id; });
        if (foundObject) {
            setStatusObject(foundObject);
        }
    }, [status, id]);
    return _jsxs(_Fragment, { children: [_jsx(Status, __assign({}, {
                id: id,
                tooltip: open ? null : tooltip,
                endSeparator: endSeparator,
                startSeparator: startSeparator,
                hasArrow: open && hasDecoration,
                highlight: ((statusObject === null || statusObject === void 0 ? void 0 : statusObject.keepOpen) || open) ? 'primary' : highlight,
                secondary: secondary,
                onClick: handleOnClick,
                style: __assign(__assign({}, style), { cursor: 'context-menu', minWidth: '24px' }),
            }, { children: children })), _jsx(StyledPopper, __assign({}, {
                keepMounted: statusObject === null || statusObject === void 0 ? void 0 : statusObject.keepOpen,
                open: open,
                anchorEl: anchorEl,
                onClose: onClose,
                elevation: elevation,
                id: "mui-status-panel-popover-".concat(id),
                toggled: isToggled.toString(),
            }, { children: _jsx(ClickAwayListener, __assign({ onClickAway: function () { return handleOnClose(); } }, { children: _jsxs(StyledContainer, __assign({}, { elevation: elevation, variant: variant.toString(), decoration: hasDecoration.toString() }, { children: [popover, hasToolbar && _jsx(InternalHeader, __assign({}, { id: id, popoverActions: popoverActions, popoverTitle: popoverTitle }))] })) })) }))] });
}
