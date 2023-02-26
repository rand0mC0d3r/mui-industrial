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
        boxShadow: theme.shadows[elevation || 2]
    });
});
/**
 *
 * Status Panel component
 * @description
 * Status Panel is a Status component that can be used to display a panel
 * with a title and content. It can be used to display a list of items, a table,
 * or any other content.
 *
 * @param id - (string) Unique id of the Status Panel
 * @param disabled - (boolean) If true, the Status Panel will be disabled
 * @param highlight - (Highlight) Highlight color of the Status Panel
 * @param options - (StatusOptionsProps) Options for the Status Panel
 * @param secondary - (boolean) If true, the Status Panel will be displayed as a secondary panel
 * @param tooltip - (ReactNode | string) Tooltip to display when hovering over the Status Panel
 * @param onClick - (event: MouseEvent<HTMLDivElement>) => void) Function to call when the Status Panel is clicked
 * @param onContextMenu - (event: MouseEvent<HTMLDivElement>) => void) Function to call when the Status Panel is right clicked
 * @param style - (CSSProperties) Style to apply to the Status Panel
 * @param className - (HTMLAttributes<HTMLDivElement>['className']) Class to apply to the Status Panel
 * @param children - (ReactNode) Children to display inside the Status Panel
 *
 * @example
 * <Status
 *  id="statusPanel"
 *  options={{
 *    as: StatusType.PANEL,
 *    title: 'Status Console',
 *    content: <div>Content</div>,
 *    ...
 *  }}
 * >...
 *
 * @returns (JSX.Element) Status Panel component
 */
var defaultPanel = {
    elevation: 2,
    hasToolbar: true,
    onClose: function () { },
    hasDecoration: true,
};
export default function (_a) {
    var _b;
    var id = _a.id, disabled = _a.disabled, _c = _a.highlight, highlight = _c === void 0 ? Highlight.DEFAULT : _c, _d = _a.options, options = _d === void 0 ? {
        panel: __assign({}, defaultPanel),
        separators: {
            start: false,
            end: false,
        }
    } : _d, _e = _a.secondary, secondary = _e === void 0 ? false : _e, _f = _a.tooltip, tooltip = _f === void 0 ? '' : _f, onClick = _a.onClick, onContextMenu = _a.onContextMenu, style = _a.style, className = _a.className, children = _a.children;
    var _g = useContext(DataProvider), status = _g.status, settings = _g.settings;
    var _h = useState(null), statusObject = _h[0], setStatusObject = _h[1];
    var _j = useState(null), anchorEl = _j[0], setAnchorEl = _j[1];
    var open = Boolean(anchorEl);
    var enrichedPanel = __assign(__assign({}, defaultPanel), options === null || options === void 0 ? void 0 : options.panel);
    var handleOnClick = function (event) {
        if (statusObject === null || statusObject === void 0 ? void 0 : statusObject.keepOpen)
            return;
        if (onClick)
            onClick(event);
        setAnchorEl(anchorEl ? null : event === null || event === void 0 ? void 0 : event.currentTarget);
    };
    var handleOnClose = function (event) {
        var _a, _b;
        if (((_a = options === null || options === void 0 ? void 0 : options.panel) === null || _a === void 0 ? void 0 : _a.onClose) && !(statusObject === null || statusObject === void 0 ? void 0 : statusObject.keepOpen))
            (_b = options === null || options === void 0 ? void 0 : options.panel) === null || _b === void 0 ? void 0 : _b.onClose(event);
        if (!(statusObject === null || statusObject === void 0 ? void 0 : statusObject.keepOpen) || !settings.hasLock)
            setAnchorEl(null);
    };
    useEffect(function () {
        var foundObject = status.find(function (item) { return item.uniqueId === id; });
        if (!foundObject)
            return;
        setStatusObject(foundObject);
    }, [status, id]);
    var determineHighlight = function () { return ((statusObject === null || statusObject === void 0 ? void 0 : statusObject.keepOpen) || open) ? Highlight.PRIMARY : highlight; };
    return _jsxs(_Fragment, { children: [_jsx(StatusCore, __assign({}, {
                id: id,
                disabled: disabled,
                onContextMenu: onContextMenu,
                className: className,
                tooltip: open ? null : tooltip,
                options: { separators: options.separators },
                hasArrow: open && (enrichedPanel === null || enrichedPanel === void 0 ? void 0 : enrichedPanel.hasDecoration),
                highlight: determineHighlight(),
                secondary: secondary,
                onClick: handleOnClick,
                style: style,
            }, { children: children })), _jsx(StyledPopper, __assign({}, {
                keepMounted: statusObject === null || statusObject === void 0 ? void 0 : statusObject.keepOpen,
                open: open,
                anchorEl: anchorEl,
                onClose: enrichedPanel.onClose,
                elevation: enrichedPanel.elevation,
                placement: "".concat(settings.position === PlacementPosition.TOP ? 'bottom' : 'top', "-").concat(secondary ? 'end' : 'start'),
                id: "mui-status-panel-popover-".concat(id),
            }, { children: _jsx(ClickAwayListener, __assign({ onClickAway: function (event) { return handleOnClose(event); } }, { children: _jsxs(StyledContainer, __assign({}, {
                        elevation: enrichedPanel.elevation,
                        highlight: determineHighlight().toString(),
                        variant: settings.variant.toString(),
                        decoration: (_b = enrichedPanel.hasDecoration) === null || _b === void 0 ? void 0 : _b.toString()
                    }, { children: [_jsx(StyledBox, __assign({ display: "flex", alignItems: "stretch", justifyContent: "space-between", flexDirection: "column", width: enrichedPanel.width }, { children: options === null || options === void 0 ? void 0 : options.content })), enrichedPanel.hasToolbar && _jsx(InternalHeader, __assign({}, {
                                id: id,
                                actions: enrichedPanel.actions,
                                title: options === null || options === void 0 ? void 0 : options.title
                            }))] })) })) }))] });
}
