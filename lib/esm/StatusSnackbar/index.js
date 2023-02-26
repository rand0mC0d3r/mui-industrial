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
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import MyLocationOutlinedIcon from '@mui/icons-material/MyLocationOutlined';
import { IconButton, Tooltip } from '@mui/material';
import { useCallback, useContext, useEffect, useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import DataProvider, { composeDomId } from '../Store';
var componentId = 'snackBar';
export default function (_a) {
    var severity = _a.severity, message = _a.message, onClick = _a.onClick, _b = _a.autoHideDuration, autoHideDuration = _b === void 0 ? 6000 : _b, actions = _a.actions, source = _a.source, code = _a.code;
    var _c = useContext(DataProvider), snackbar = _c.snackbar, handleSnackbarAnnouncement = _c.handleSnackbarAnnouncement;
    var _d = useState(), ownId = _d[0], setOwnId = _d[1];
    var _e = useState(false), announced = _e[0], setAnnounced = _e[1];
    var _f = useState(null), snackbarObject = _f[0], setSnackbarObject = _f[1];
    var _g = useState(null), elementFound = _g[0], setElementFound = _g[1];
    var callbackHandleStatusAnnouncement = useCallback(function () {
        if (!ownId)
            return;
        handleSnackbarAnnouncement({ ownId: ownId, actions: actions, source: source, severity: severity, message: message, code: code, autoHideDuration: autoHideDuration });
    }, [severity, ownId, message, actions, source, code, autoHideDuration, handleSnackbarAnnouncement]);
    useLayoutEffect(function () {
        if (snackbarObject !== null && ownId) {
            setElementFound(document.getElementById(composeDomId(componentId, [ownId, 'customAction'])));
        }
    }, [snackbarObject, ownId]);
    useEffect(function () {
        if (ownId && !announced && snackbarObject === null) {
            callbackHandleStatusAnnouncement();
            setAnnounced(true);
        }
    }, [ownId, announced, snackbarObject, callbackHandleStatusAnnouncement]);
    useEffect(function () {
        if (ownId && announced) {
            var snackbarObjectFound = snackbar.find(function (_a) {
                var uniqueId = _a.uniqueId;
                return uniqueId === ownId;
            });
            if (snackbarObjectFound) {
                setSnackbarObject(snackbarObjectFound);
            }
        }
    }, [snackbar, announced, ownId, snackbarObject]);
    useEffect(function () { setOwnId((Math.random() + 1).toString(36).substring(7)); }, []);
    return _jsx(_Fragment, { children: snackbarObject !== null && onClick && !!ownId && elementFound && createPortal(_jsx(_Fragment, { children: _jsx(Tooltip, __assign({ title: "Take action ..." }, { children: _jsx(IconButton, __assign({ onClick: onClick, color: "inherit", size: "small" }, { children: _jsx(MyLocationOutlinedIcon, { color: "inherit" }) })) })) }), elementFound) });
}
