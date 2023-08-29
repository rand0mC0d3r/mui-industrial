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
import CheckIcon from '@mui/icons-material/Check';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import PriorityHighOutlinedIcon from '@mui/icons-material/PriorityHighOutlined';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { Tooltip } from '@mui/material';
import { cloneElement, useContext, useEffect, useState } from 'react';
import { Severity } from '../../index.types';
import DataProvider from '../../Store';
import Footer from './components/Footer';
import Header from './components/Header';
import { SAlert, SCode, SMessage, SWrapper } from './css';
export default (function (_a) {
    var actions = _a.actions, autoHideDuration = _a.autoHideDuration, code = _a.code, id = _a.id, message = _a.message, severity = _a.severity, _b = _a.isRemoveFlag, isRemoveFlag = _b === void 0 ? false : _b, source = _a.source;
    var _c = useState(false), isExpanded = _c[0], setIsExpanded = _c[1];
    var _d = useContext(DataProvider), handleSnackbarHide = _d.handleSnackbarHide, snackbars = _d.snackbars;
    useEffect(function () {
        if (actions)
            setIsExpanded(true);
    }, [actions]);
    useEffect(function () {
        if (autoHideDuration && snackbars.some(function (_a) {
            var snackbarId = _a.id, open = _a.open;
            return snackbarId === id && open;
        })) {
            var timeout_1 = setTimeout(function () {
                handleSnackbarHide({ id: id });
            }, autoHideDuration);
            return function () { return clearTimeout(timeout_1); };
        }
        return function () { };
    }, [autoHideDuration, handleSnackbarHide, id, snackbars]);
    var getMessage = function (ellipsis) {
        if (ellipsis === void 0) { ellipsis = false; }
        return _jsx(SMessage, __assign({ ellipsis: ellipsis.toString() }, { children: message }));
    };
    var getIcon = function (icon) { return _jsx(Tooltip, __assign({ placement: "left", arrow: true, title: "".concat(severity === null || severity === void 0 ? void 0 : severity.toUpperCase()).concat(source ? " - Source: ".concat(source) : '') }, { children: cloneElement(icon, { style: { fontSize: 'inherit' } }) })); };
    return _jsx(SAlert, __assign({ onContextMenu: function (e) { return e.preventDefault(); }, expanded: isExpanded.toString(), actions: ((actions === null || actions === void 0 ? void 0 : actions.length) > 0).toString(), onDoubleClick: function () { return !actions && setIsExpanded(!isExpanded); }, icon: _jsxs("span", __assign({ style: { lineHeight: '0px' } }, { children: [severity === Severity.INFO && getIcon(_jsx(PriorityHighOutlinedIcon, {})), severity === Severity.SUCCESS && getIcon(_jsx(CheckIcon, {})), severity === Severity.WARNING && getIcon(_jsx(WarningAmberIcon, {})), severity === Severity.ERROR && getIcon(_jsx(ErrorOutlineOutlinedIcon, {}))] })) }, { severity: severity }, { children: _jsxs(SWrapper, { children: [_jsx(Header, __assign({}, { id: id, code: code, actions: actions, severity: severity, message: message, isRemoveFlag: isRemoveFlag, isExpanded: isExpanded, setIsExpanded: setIsExpanded })), (isExpanded || actions) && getMessage(), isExpanded && code && _jsx(SCode, { onDoubleClick: function (e) { return e.preventDefault(); }, defaultValue: code, height: Math.min(10, code.split('\n').length) }), (isExpanded || actions) && _jsx(_Fragment, { children: (source || actions) && _jsx(Footer, __assign({}, { actions: actions, severity: severity, source: source })) })] }) }), id);
});
