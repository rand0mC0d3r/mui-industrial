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
import { jsx as _jsx } from "react/jsx-runtime";
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useContext } from 'react';
import DataProvider from '../../Store';
import InternalAlert from '../InternalAlert';
var StyledBox = styled(Box)(function (_a) {
    var theme = _a.theme;
    return ({
        gap: theme.spacing(1),
        width: '550px',
    });
});
export default (function () {
    var snackbars = useContext(DataProvider).snackbars;
    return _jsx(StyledBox, __assign({ display: 'flex', flexDirection: 'column' }, { children: snackbars
            .filter(function (_a) {
            var open = _a.open;
            return open;
        })
            .map(function (_a) {
            var id = _a.id, autoHideDuration = _a.autoHideDuration, severity = _a.severity, message = _a.message, source = _a.source, actions = _a.actions, code = _a.code;
            return (_jsx(InternalAlert, __assign({}, { id: id, autoHideDuration: autoHideDuration, actions: actions, severity: severity, source: source, message: message, code: code }), id));
        }) }));
});
