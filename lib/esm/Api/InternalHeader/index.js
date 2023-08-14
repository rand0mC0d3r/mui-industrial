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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useContext, useEffect, useState } from 'react';
import DataProvider from '../../Store';
import InternalActions from '../InternalActions';
import { StyledActions, StyledBox, StyledTypography } from './css';
export default (function (_a) {
    var id = _a.id, title = _a.title, actions = _a.actions, _b = _a.noDefaults, noDefaults = _b === void 0 ? false : _b, sx = _a.sx;
    var _c = useContext(DataProvider), status = _c.status, settings = _c.settings, handleStatusKeepOpenToggle = _c.handleStatusKeepOpenToggle;
    var _d = useState(null), statusObject = _d[0], setStatusObject = _d[1];
    useEffect(function () {
        if (!status || !id)
            return;
        setStatusObject(status.find(function (_a) {
            var uniqueId = _a.uniqueId;
            return uniqueId === id;
        }) || null);
    }, [status, id]);
    return _jsxs(StyledBox, __assign({}, { sx: sx }, { display: "flex", alignItems: "center", justifyContent: "space-between", onContextMenu: function (e) { e.preventDefault(); } }, { children: [_jsx(StyledTypography, __assign({ variant: "subtitle2", color: "textSecondary" }, { children: title })), _jsxs(StyledActions, { children: [_jsx(InternalActions, __assign({}, { actions: actions })), !noDefaults && settings.hasLock && _jsx(InternalActions, __assign({}, {
                        actions: [
                            {
                                preserveColor: true,
                                tooltip: 'Toggle keep-open',
                                icon: (statusObject === null || statusObject === void 0 ? void 0 : statusObject.keepOpen) ? _jsx(LockOutlinedIcon, { color: "primary" }) : _jsx(LockOpenOutlinedIcon, {}),
                                onClick: function () { return handleStatusKeepOpenToggle({ id: id }); },
                            },
                        ],
                    }))] })] }));
});
