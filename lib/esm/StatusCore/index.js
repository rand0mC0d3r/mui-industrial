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
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import { Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useCallback, useContext, useEffect, useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Highlight, PlacementPosition } from '../index.types';
import DataProvider, { composeDomId } from '../Store';
var componentId = 'statusBar';
var backgroundColor = function (theme, highlight) {
    switch (highlight) {
        case 'primary':
            return theme.palette.primary.main;
        case 'secondary':
            return theme.palette.secondary.main;
        default:
            return '';
    }
};
var backgroundColorHover = function (theme, highlight) {
    switch (highlight) {
        case 'primary':
            return theme.palette.primary.dark;
        case 'secondary':
            return theme.palette.secondary.dark;
        default:
            return theme.palette.divider;
    }
};
var isStartSeparator = function (startSeparator, endSeparator, secondary) { return (secondary === 'false' && startSeparator === 'true') || (secondary === 'true' && endSeparator === 'true'); };
var isEndSeparator = function (startSeparator, endSeparator, secondary) { return (secondary === 'false' && endSeparator === 'true') || (secondary === 'true' && startSeparator === 'true'); };
var SSpan = styled('span')(function (_a) {
    var theme = _a.theme;
    return ({
        padding: '1px 10px',
        display: 'flex',
        flexWrap: 'nowrap',
        alignItems: 'stretch',
        fontSize: '14px',
        gap: "".concat(theme.spacing(0.5)),
        '& > *': {
            fontSize: '14px !important',
        },
    });
});
var SArrowDown = styled(ArrowDropDownOutlinedIcon)(function (_a) {
    var position = _a.position;
    return ({
        position: 'absolute',
        bottom: position !== 'top' ? '-10px' : 'unset',
        top: position === 'top' ? '16px' : 'unset',
    });
});
var STooltip = styled('div')(function () { return ({
    fontSize: '14px',
    maxHeight: '300px',
    overflow: 'scroll'
}); });
var SArrowUp = styled(ArrowDropUpOutlinedIcon)(function () { return ({
    position: 'absolute',
    bottom: 'unset',
    top: '-14px',
}); });
var SDiv = styled('div')(function (_a) {
    var theme = _a.theme, secondary = _a.secondary, hasclick = _a.hasclick, highlight = _a.highlight, startSeparator = _a.startSeparator, endSeparator = _a.endSeparator, isdisabled = _a.isdisabled;
    return ({
        WebkitFontSmoothing: 'auto',
        height: '100%',
        display: 'flex',
        flex: '0 0 auto',
        flexDirection: 'row',
        alignItems: 'stretch',
        gap: '16px',
        justifyContent: 'center',
        alignSelf: 'center',
        position: 'relative',
        borderLeft: isStartSeparator(startSeparator, endSeparator, secondary) ? "1px solid ".concat(theme.palette.divider) : 'none',
        borderRight: isEndSeparator(startSeparator, endSeparator, secondary) ? "1px solid ".concat(theme.palette.divider) : 'none',
        cursor: (hasclick === 'true' && isdisabled === 'false') ? 'pointer' : '',
        backgroundColor: backgroundColor(theme, highlight),
        color: theme.palette.text.primary,
        '& > div > *': {
            color: highlight !== 'default'
                ? "".concat(theme.palette.background.default, " !important")
                : '',
        },
        '& > span > div > *': {
            color: highlight !== 'default'
                ? "".concat(theme.palette.background.default, " !important")
                : '',
        },
        '&:hover': (hasclick === 'true' && isdisabled === 'false') ? {
            backgroundColor: backgroundColorHover(theme, highlight),
            color: "".concat(theme.palette.text.primary),
        } : {}
    });
});
/**
 * @param id - (string) Unique identifier for the status element.
 * @param secondary - (boolean) If needs to be applied a secondary style to the status element.
 * @param style - (CSSProperties) Style to be applied to the root element.
 * @param onClick - (function) Function to be executed on click event.
 * @param onContextMenu - (function) Function to be executed on context menu event.
 * @param disabled - (boolean) If needs to be disabled the status element.
 * @param highlight - (string) If needs to be applied a highlight style to the status element.
 * @param tooltip - (string) Tooltip to be displayed on hover.
 * @param children - (JSX.Element) Children to be displayed inside the status element.
 *
 * @returns (JSX.Element) Status element
 */
export default function (_a) {
    var _b, _c, _d, _e, _f;
    var id = _a.id, style = _a.style, onClick = _a.onClick, onContextMenu = _a.onContextMenu, _g = _a.disabled, disabled = _g === void 0 ? false : _g, _h = _a.highlight, highlight = _h === void 0 ? Highlight.DEFAULT : _h, tooltip = _a.tooltip, children = _a.children, _j = _a.options, options = _j === void 0 ? {
        separators: {
            start: false,
            end: false,
        }
    } : _j, _k = _a.secondary, secondary = _k === void 0 ? false : _k;
    var _l = useContext(DataProvider), status = _l.status, handleStatusUpdate = _l.handleStatusUpdate, handleStatusAnnouncement = _l.handleStatusAnnouncement, handleStatusDestroy = _l.handleStatusDestroy;
    var _m = useContext(DataProvider).settings, allowRightClick = _m.allowRightClick, position = _m.position;
    var _o = useState(), ownId = _o[0], setOwnId = _o[1];
    var _p = useState(null), statusObject = _p[0], setStatusObject = _p[1];
    var _q = useState(null), elementFound = _q[0], setElementFound = _q[1];
    var callbackHandleStatusAnnouncement = useCallback(function () { return handleStatusAnnouncement({ id: id, ownId: ownId, secondary: secondary, children: children }); }, [id, secondary, ownId, children, handleStatusAnnouncement]);
    var callbackHandleStatusDestroy = useCallback(function () { handleStatusDestroy({ id: id }); }, [id]);
    var handleOnClick = function (e) {
        if (onClick !== undefined && !disabled) {
            e.preventDefault();
            onClick(e);
            handleStatusUpdate({ id: id, ownId: ownId, children: children });
        }
    };
    var handleOnContextMenu = function (e) {
        e.preventDefault();
        if (allowRightClick && onContextMenu !== undefined && !disabled) {
            onContextMenu(e);
        }
    };
    useEffect(function () {
        if (id && ownId && statusObject === null && !status.some(function (_a) {
            var uniqueId = _a.uniqueId;
            return uniqueId === id;
        })) {
            callbackHandleStatusAnnouncement();
        }
    }, [id, ownId, statusObject, status, callbackHandleStatusAnnouncement]);
    useEffect(function () {
        var statusObjectFound = status.find(function (_a) {
            var uniqueId = _a.uniqueId;
            return uniqueId === id;
        });
        if ((statusObject === null || (statusObject === null || statusObject === void 0 ? void 0 : statusObject.visible) !== (statusObjectFound === null || statusObjectFound === void 0 ? void 0 : statusObjectFound.visible)) && statusObjectFound) {
            setStatusObject(statusObjectFound);
        }
    }, [status, id, statusObject]);
    useLayoutEffect(function () {
        if (statusObject !== null) {
            setElementFound(document.getElementById(composeDomId(componentId, [secondary ? 'secondary' : 'primary'])) || null);
        }
    }, [secondary, statusObject]);
    useEffect(function () {
        setOwnId((Math.random() + 1).toString(36).substring(7));
    }, []);
    // eslint-disable-next-line no-console
    useEffect(function () { if (!id) {
        console.error('Please define an id for the status bar item');
    } }, [id]);
    useEffect(function () { return function () { callbackHandleStatusDestroy(); }; }, [callbackHandleStatusDestroy]);
    return _jsx(_Fragment, { children: (statusObject !== null && !!id && elementFound)
            && createPortal((statusObject.visible && children) && _jsxs(SDiv, __assign({}, {
                id: id,
                key: "mui-status-".concat(id),
                onClick: handleOnClick,
                onContextMenu: handleOnContextMenu,
                style: __assign(__assign({}, style), { order: statusObject.index }),
                highlight: highlight,
                secondary: secondary.toString(),
                startSeparator: (_c = (_b = options === null || options === void 0 ? void 0 : options.separators) === null || _b === void 0 ? void 0 : _b.start) === null || _c === void 0 ? void 0 : _c.toString(),
                endSeparator: (_e = (_d = options === null || options === void 0 ? void 0 : options.separators) === null || _d === void 0 ? void 0 : _d.end) === null || _e === void 0 ? void 0 : _e.toString(),
                hasclick: (!!onClick).toString(),
                isdisabled: disabled.toString(),
            }, { children: [((_f = options === null || options === void 0 ? void 0 : options.panel) === null || _f === void 0 ? void 0 : _f.hasArrow) && _jsx(_Fragment, { children: position === PlacementPosition.BOTTOM
                            ? _jsx(SArrowUp, { color: "primary" })
                            : _jsx(SArrowDown, { position: position.toString(), color: "primary" }) }), tooltip
                        ? _jsx(Tooltip, __assign({ title: _jsx(STooltip, { children: tooltip }), arrow: true }, { children: _jsx(SSpan, { children: children }) }))
                        : _jsx(SSpan, { children: children })] })), elementFound) });
}
