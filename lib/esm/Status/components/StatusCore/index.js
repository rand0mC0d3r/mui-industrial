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
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import { Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { forwardRef, useCallback, useContext, useEffect, useLayoutEffect, useState, } from 'react';
import { createPortal } from 'react-dom';
import { Highlight, PlacementPosition, } from '../../../index.types';
import DataProvider, { composeDomId } from '../../../Store';
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
        zIndex: 102,
        bottom: position !== 'top' ? '-10px' : 'unset',
        top: position === 'top' ? '16px' : 'unset',
    });
});
var STooltip = styled('div')(function () { return ({
    fontSize: '14px',
    maxHeight: '300px',
    overflow: 'scroll',
}); });
var SArrowUp = styled(ArrowDropUpOutlinedIcon)(function () { return ({
    position: 'absolute',
    bottom: 'unset',
    top: '-14px',
    zIndex: 102,
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
        } : {},
    });
});
var defaultSeparatorOptions = {
    start: false,
    end: false,
};
var defaultPopperOptions = {
    hasArrow: false,
};
export var StatusCore = forwardRef(function (props, ref) {
    var _a, _b;
    var id = props.id, order = props.order, style = props.style, onClick = props.onClick, onContextMenu = props.onContextMenu, _c = props.disabled, disabled = _c === void 0 ? false : _c, _d = props.highlight, highlight = _d === void 0 ? Highlight.DEFAULT : _d, tooltip = props.tooltip, children = props.children, options = props.options, _e = props.secondary, secondary = _e === void 0 ? false : _e;
    var _f = useContext(DataProvider), status = _f.status, handleStatusUpdate = _f.handleStatusUpdate, handleStatusAnnouncement = _f.handleStatusAnnouncement;
    var _g = useContext(DataProvider).settings, allowRightClick = _g.allowRightClick, position = _g.position;
    var _h = useState(), ownId = _h[0], setOwnId = _h[1];
    var _j = useState(null), statusObject = _j[0], setStatusObject = _j[1];
    var _k = useState(null), elementFound = _k[0], setElementFound = _k[1];
    var combinedSeparators = __assign(__assign({}, defaultSeparatorOptions), options === null || options === void 0 ? void 0 : options.separators);
    var combinedPopper = __assign(__assign({}, defaultPopperOptions), options === null || options === void 0 ? void 0 : options.popper);
    var callbackHandleStatusAnnouncement = useCallback(function () {
        console.log('announce');
        handleStatusAnnouncement({ id: id, ownId: ownId, secondary: secondary, children: children });
    }, [id, secondary, ownId, children, handleStatusAnnouncement]);
    // const callbackHandleStatusDestroy = useCallback(() => { handleStatusDestroy({ id }); }, [id, handleStatusDestroy]);
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
            console.log('call3');
            callbackHandleStatusAnnouncement();
        }
    }, [id, ownId, statusObject, status, callbackHandleStatusAnnouncement]);
    useEffect(function () {
        var statusObjectFound = status.find(function (_a) {
            var uniqueId = _a.uniqueId;
            return uniqueId === id;
        });
        if ((statusObject === null || (statusObject === null || statusObject === void 0 ? void 0 : statusObject.visible) !== (statusObjectFound === null || statusObjectFound === void 0 ? void 0 : statusObjectFound.visible)) && statusObjectFound) {
            console.log('call2');
            setStatusObject(statusObjectFound);
        }
    }, [status, id, statusObject]);
    useLayoutEffect(function () {
        if (statusObject !== null) {
            console.log('call1');
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
    // useEffect(() => () => {
    //   console.log('die');
    //   callbackHandleStatusDestroy();
    // }, [callbackHandleStatusDestroy]);
    return _jsx(_Fragment, { children: (statusObject !== null && !!id && elementFound)
            && createPortal((statusObject.visible && children) && _jsxs(SDiv, __assign({}, {
                id: id,
                ref: ref,
                key: "mui-status-".concat(id),
                onClick: handleOnClick,
                onContextMenu: handleOnContextMenu,
                style: __assign(__assign({}, style), { order: order || statusObject.index }),
                highlight: highlight,
                secondary: secondary.toString(),
                startSeparator: (_a = combinedSeparators.start) === null || _a === void 0 ? void 0 : _a.toString(),
                endSeparator: (_b = combinedSeparators.end) === null || _b === void 0 ? void 0 : _b.toString(),
                hasclick: (!!onClick).toString(),
                isdisabled: disabled.toString(),
            }, { children: [combinedPopper.hasArrow && _jsx(_Fragment, { children: position === PlacementPosition.BOTTOM
                            ? _jsx(SArrowUp, { color: "primary" })
                            : _jsx(SArrowDown, { position: position.toString(), color: "primary" }) }), tooltip
                        ? _jsx(Tooltip, __assign({ title: _jsx(STooltip, { children: tooltip }), arrow: true }, { children: _jsx(SSpan, { children: children }) }))
                        : _jsx(SSpan, { children: children })] })), elementFound) });
});
export default StatusCore;
