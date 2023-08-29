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
import ClearAllIcon from '@mui/icons-material/ClearAll';
import { Box, Button, Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useContext } from 'react';
import DataProvider from '../../Store';
import InternalAlert from '../InternalAlert';
import { SNotifications } from './css';
var StyledBox = styled(Box)(function (_a) {
    var theme = _a.theme;
    return ({
        gap: theme.spacing(1),
        width: '550px',
        padding: '4px',
    });
});
export default (function () {
    var _a = useContext(DataProvider), snackbars = _a.snackbars, handleSnackbarHideAll = _a.handleSnackbarHideAll;
    return _jsx(_Fragment, { children: snackbars.filter(function (_a) {
            var open = _a.open;
            return open;
        }).length > 0 && _jsxs(_Fragment, { children: [_jsx(SNotifications, { children: _jsx(StyledBox, __assign({ display: 'flex', flexDirection: 'column' }, { children: snackbars
                            .filter(function (_a) {
                            var open = _a.open;
                            return open;
                        })
                            .map(function (_a) {
                            var id = _a.id, autoHideDuration = _a.autoHideDuration, severity = _a.severity, message = _a.message, source = _a.source, actions = _a.actions, code = _a.code;
                            return (_jsx(InternalAlert, __assign({}, { id: id, autoHideDuration: autoHideDuration, actions: actions, severity: severity, source: source, message: message, code: code }), id));
                        }) })) }), _jsx(Tooltip, __assign({ arrow: true, title: 'Clear all notifications' }, { children: _jsx(Button, __assign({ variant: "contained", color: 'primary', onClick: function () { return handleSnackbarHideAll(); } }, { children: _jsx(ClearAllIcon, {}) })) }))] }) });
});
