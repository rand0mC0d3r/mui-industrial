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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import { Button, Paper, Tooltip } from '@mui/material';
import { cloneElement, useEffect, useState } from 'react';
import { composeDomId, packageName } from '../../Store';
import { StyledActions, StyledActionsTall, StyledPaper, StyledSidebar } from './css';
var items = [
    {
        icon: _jsx(AccessibilityIcon, {}),
        title: 'Accessibility',
        onClick: function () { },
        id: 'accessibility',
        secondary: false,
    },
    {
        icon: _jsx(AccountBalanceWalletIcon, {}),
        title: 'AccountBalanceWallet',
        onClick: function () { },
        id: 'accountBalanceWallet',
        secondary: false,
    },
    {
        icon: _jsx(AcUnitIcon, { color: "secondary" }),
        title: 'AcUnit',
        onClick: function () { },
        id: 'acUnit',
        secondary: false,
    },
    {
        icon: _jsx(AddAlertIcon, { color: "action" }),
        title: 'AddAlert',
        onClick: function () { },
        id: 'addAlert',
        secondary: true,
    },
];
export default (function () {
    var _a = useState(1), selectedIndex = _a[0], setSelectedIndex = _a[1];
    var _b = useState(false), open = _b[0], setOpen = _b[1];
    var toggleSelected = function (index) {
        if (index === selectedIndex) {
            setSelectedIndex(-1);
        }
        else {
            setSelectedIndex(index);
        }
    };
    useEffect(function () {
        if (selectedIndex !== -1) {
            setOpen(true);
        }
        else {
            setOpen(false);
        }
    }, [selectedIndex]);
    return _jsx(_Fragment, { children: _jsxs(Paper, __assign({ style: { alignSelf: 'stretch', display: 'flex' }, elevation: 1, id: composeDomId(packageName, ['sidebar']) }, { children: [_jsxs(StyledSidebar, { children: [_jsx(StyledActionsTall, { children: items.filter(function (_a) {
                                var secondary = _a.secondary;
                                return !secondary;
                            }).map(function (_a, index) {
                                var icon = _a.icon, title = _a.title, id = _a.id;
                                return _jsx(Tooltip, __assign({ title: title, arrow: true, placement: 'right' }, { children: _jsx(Button, __assign({ onClick: function () { return toggleSelected(index); }, variant: "text", style: { minWidth: 'unset' } }, { children: cloneElement(icon, { style: { fontSize: '28px' }, color: index === selectedIndex ? 'primary' : 'action' }) })) }), id);
                            }) }), _jsx(StyledActions, { children: items.filter(function (_a) {
                                var secondary = _a.secondary;
                                return secondary;
                            }).map(function (_a, index) {
                                var icon = _a.icon, title = _a.title, id = _a.id;
                                return _jsx(Tooltip, __assign({ title: title, arrow: true, placement: 'right' }, { children: _jsx(Button, __assign({ variant: "text", style: { minWidth: 'unset' }, onClick: function () { return toggleSelected(index); } }, { children: cloneElement(icon, { style: { fontSize: '28px' }, color: 'action' }) })) }), id);
                            }) })] }), open && _jsxs(StyledPaper, __assign({ elevation: 0, square: true, id: composeDomId(packageName, ['sidebar', 'panel']) }, { children: ["open:", selectedIndex] }))] })) });
});
