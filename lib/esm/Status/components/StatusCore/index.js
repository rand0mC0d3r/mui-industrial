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
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Tooltip } from '@mui/material';
import { forwardRef, useCallback, useContext, useEffect, useLayoutEffect, useState, } from 'react';
import { createPortal } from 'react-dom';
import { Highlight, } from '../../../index.types';
import DataProvider, { composeDomId } from '../../../Store';
import { SDiv, SSpan, STooltip } from './css';
var componentId = 'statusBar';
var defaultSeparatorOptions = {
    start: false,
    end: false,
};
export var StatusCore = forwardRef(function (props, ref) {
    var _a, _b;
    var _c = props, id = _c.id, order = _c.order, style = _c.style, onClick = _c.onClick, onContextMenu = _c.onContextMenu, _d = _c.disabled, disabled = _d === void 0 ? false : _d, _e = _c.highlight, highlight = _e === void 0 ? Highlight.DEFAULT : _e, tooltip = _c.tooltip, children = _c.children, options = _c.options, _f = _c.secondary, secondary = _f === void 0 ? false : _f, _g = _c.onLoad, onLoad = _g === void 0 ? function () { } : _g;
    var _h = useContext(DataProvider), status = _h.status, handleStatusAnnouncement = _h.handleStatusAnnouncement, handleStatusUpdate = _h.handleStatusUpdate;
    var _j = useContext(DataProvider).settings, allowRightClick = _j.allowRightClick, position = _j.position;
    var _k = useState(), ownId = _k[0], setOwnId = _k[1];
    var _l = useState(null), statusObject = _l[0], setStatusObject = _l[1];
    var _m = useState(null), elementFound = _m[0], setElementFound = _m[1];
    var combinedSeparators = __assign(__assign({}, defaultSeparatorOptions), options === null || options === void 0 ? void 0 : options.separators);
    var callbackHandleStatusAnnouncement = useCallback(function () {
        handleStatusAnnouncement({ id: id, ownId: ownId, order: order, secondary: secondary, options: options });
    }, [id, secondary, order, ownId, options, handleStatusAnnouncement]);
    var handleOnClick = function (e) {
        if (onClick !== undefined && !disabled) {
            e.preventDefault();
            onClick(e);
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
    useEffect(function () { if (!id) {
        console.error('Please define an id for the status bar item');
    } }, [id]);
    useEffect(function () {
        return function () {
        };
    }, []);
    useEffect(function () {
        if (statusObject !== null && !!id && elementFound) {
            onLoad(ref);
        }
    }, [statusObject, id, elementFound, ref, onLoad]);
    return _jsx(_Fragment, { children: (statusObject !== null && !!id && elementFound)
            && createPortal((statusObject.visible && children) && _jsx(SDiv, __assign({}, {
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
            }, { children: tooltip
                    ? _jsx(Tooltip, __assign({ title: _jsx(STooltip, { children: tooltip }), arrow: true }, { children: _jsx(SSpan, { children: children }) }))
                    : _jsx(SSpan, { children: children }) })), elementFound) });
});
export default StatusCore;
