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
import { IconButton, Tooltip, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useContext, useEffect, useState } from 'react';
import DataProvider from '../../Store';
var StyledActionsWrapper = styled('div')(function (_a) {
    var theme = _a.theme;
    return ({
        padding: "".concat(theme.spacing(0.5), " ").concat(theme.spacing(1)),
        borderTop: "1px solid ".concat(theme.palette.divider),
        display: 'flex',
        justifyContent: 'space-between',
        userSelect: 'none',
        alignItems: 'center',
    });
});
var StyledActions = styled('div')(function (_a) {
    var theme = _a.theme;
    return ({
        gap: "".concat(theme.shape.borderRadius, "px"),
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    });
});
var StyledTypography = styled(Typography)(function () { return ({
    lineHeight: 1,
    textOverflow: 'ellipsis',
    maxWidth: '225px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
}); });
export default (function (_a) {
    var id = _a.id, title = _a.title, actions = _a.actions;
    var _b = useContext(DataProvider), status = _b.status, settings = _b.settings, handleStatusKeepOpenToggle = _b.handleStatusKeepOpenToggle;
    var _c = useState(null), statusObject = _c[0], setStatusObject = _c[1];
    useEffect(function () {
        if (!status || !id)
            return;
        setStatusObject(status.find(function (_a) {
            var uniqueId = _a.uniqueId;
            return uniqueId === id;
        }) || null);
    }, [status, id]);
    return _jsxs(StyledActionsWrapper, { children: [_jsx(StyledTypography, __assign({ variant: "subtitle2", color: "textSecondary" }, { children: title })), _jsxs(StyledActions, { children: [actions && actions
                        .filter(function (_, i) { return i < 3; })
                        .map(function (action) { return _jsx(Tooltip, __assign({}, { title: action === null || action === void 0 ? void 0 : action.title }, { children: _jsx("span", { children: _jsx(IconButton, __assign({ size: "small" }, { onClick: function () { return action === null || action === void 0 ? void 0 : action.onClick(); }, disabled: action === null || action === void 0 ? void 0 : action.disabled }, { children: action === null || action === void 0 ? void 0 : action.icon })) }) }), action === null || action === void 0 ? void 0 : action.title); }), settings.hasLock && _jsx(Tooltip, __assign({ title: "Toggle keep-open" }, { children: _jsx(IconButton, __assign({ size: "small", onClick: function () { return handleStatusKeepOpenToggle({ id: id }); } }, { children: (statusObject === null || statusObject === void 0 ? void 0 : statusObject.keepOpen) ? _jsx(LockOutlinedIcon, { color: "primary" }) : _jsx(LockOpenOutlinedIcon, {}) })) }))] })] });
});
