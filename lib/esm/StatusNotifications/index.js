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
/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-globals */
/* eslint-disable @typescript-eslint/no-explicit-any */
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import DeleteSweepOutlinedIcon from '@mui/icons-material/DeleteSweepOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { useContext, useEffect, useState } from 'react';
import InternalAlert from '../internal/InternalAlert';
import StatusHelper from '../StatusHelper';
import StatusPanel from '../StatusPanel';
import DataProvider from '../Store';
export default function (_a) {
    var _b = _a.id, id = _b === void 0 ? 'notificationsPanel' : _b;
    var _c = useContext(DataProvider), status = _c.status, snackbar = _c.snackbar;
    var _d = useState(null), statusObject = _d[0], setStatusObject = _d[1];
    useEffect(function () {
        var foundObject = status.find(function (item) { return item.uniqueId === id; });
        if (statusObject === null && foundObject) {
            setStatusObject(foundObject);
        }
    }, [status, id, statusObject]);
    return _jsxs(_Fragment, { children: [_jsx(DeleteSweepOutlinedIcon, {}), _jsx(DeleteForeverOutlinedIcon, {}), _jsx(LockOpenOutlinedIcon, {}), _jsx(LockOutlinedIcon, {}), _jsx(StatusPanel, __assign({ hasDecoration: false, id: id, 
                // popoverActions={<>
                //   <DeleteSweepOutlinedIcon />
                //   <DeleteForeverOutlinedIcon />
                //   <LockOpenOutlinedIcon />
                //   <LockOutlinedIcon />
                // </>}
                popoverTitle: "Notifications", tooltip: "Notifications", popover: _jsx("div", __assign({ style: { width: '500px', height: '650px', overflow: 'scroll' } }, { children: snackbar.map(function (_a) {
                        var uniqueId = _a.uniqueId, severity = _a.severity, message = _a.message, source = _a.source, actions = _a.actions, code = _a.code;
                        return (_jsx(InternalAlert, __assign({}, { uniqueId: uniqueId, actions: actions, severity: severity, source: source, message: message, code: code }), uniqueId));
                    }) })) }, { children: _jsx(StatusHelper, { text: "Notifications", icon: _jsx(NotificationsOutlinedIcon, {}), badge: snackbar.length }) }))] });
}
