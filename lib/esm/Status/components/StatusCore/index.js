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
import { Tooltip } from '@mui/material';
import { forwardRef, useCallback, useContext, useEffect, useLayoutEffect, useState, } from 'react';
import { createPortal } from 'react-dom';
import { Highlight, PlacementPosition, } from '../../../index.types';
import DataProvider, { composeDomId } from '../../../Store';
import { SArrowDown, SArrowUp, SDiv, SSpan, STooltip } from './css';
var componentId = 'statusBar';
var defaultSeparatorOptions = {
    start: false,
    end: false,
};
var defaultPopperOptions = {
    hasArrow: false,
};
export var StatusCore = forwardRef(function (props, ref) {
    var _a, _b;
    var _c = props, id = _c.id, order = _c.order, style = _c.style, onClick = _c.onClick, onContextMenu = _c.onContextMenu, _d = _c.disabled, disabled = _d === void 0 ? false : _d, _e = _c.highlight, highlight = _e === void 0 ? Highlight.DEFAULT : _e, tooltip = _c.tooltip, children = _c.children, options = _c.options, _f = _c.secondary, secondary = _f === void 0 ? false : _f, _g = _c.onLoad, onLoad = _g === void 0 ? function () { } : _g;
    var _h = useContext(DataProvider), status = _h.status, handleStatusAnnouncement = _h.handleStatusAnnouncement;
    var _j = useContext(DataProvider).settings, allowRightClick = _j.allowRightClick, position = _j.position;
    var _k = useState(), ownId = _k[0], setOwnId = _k[1];
    var _l = useState(null), statusObject = _l[0], setStatusObject = _l[1];
    var _m = useState(null), elementFound = _m[0], setElementFound = _m[1];
    var combinedSeparators = __assign(__assign({}, defaultSeparatorOptions), options === null || options === void 0 ? void 0 : options.separators);
    var combinedPopper = __assign(__assign({}, defaultPopperOptions), options === null || options === void 0 ? void 0 : options.popper);
    var callbackHandleStatusAnnouncement = useCallback(function () {
        console.log(options);
        handleStatusAnnouncement({ id: id, ownId: ownId, secondary: secondary, children: children, options: options });
    }, [id, secondary, ownId, options, children, handleStatusAnnouncement]);
    // const callbackHandleStatusDestroy = useCallback(() => { handleStatusDestroy({ id }); }, [id, handleStatusDestroy]);
    var handleOnClick = function (e) {
        if (onClick !== undefined && !disabled) {
            e.preventDefault();
            onClick(e);
            // handleStatusUpdate({ id, ownId, children });
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
    useEffect(function () {
        return function () {
            // console.log('die');
            //   callbackHandleStatusDestroy();
        };
    }, []);
    useEffect(function () {
        if (statusObject !== null && !!id && elementFound) {
            onLoad(ref);
        }
    }, [statusObject, id, elementFound, ref, onLoad]);
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
