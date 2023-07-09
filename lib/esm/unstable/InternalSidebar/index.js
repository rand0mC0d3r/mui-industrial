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
import { Paper } from '@mui/material';
import { useContext } from 'react';
import DataProvider, { composeDomId } from '../../Store';
import { StyledActions, StyledActionsTall, StyledPaper, StyledSidebar } from './css';
export default (function (_a) {
    var secondary = _a.secondary;
    var sidebarIndex = useContext(DataProvider).settings.sidebarIndex;
    return _jsx(_Fragment, { children: _jsxs(Paper, __assign({ style: { alignSelf: 'stretch', display: 'flex' }, elevation: 1 }, { children: [_jsxs(StyledSidebar, { children: [_jsx(StyledActionsTall, { id: composeDomId('sidebar', ['actions']) }), _jsx(StyledActions, { id: composeDomId('sidebar', ['additional']) })] }), sidebarIndex && _jsx(StyledPaper, { elevation: 0, square: true, id: composeDomId('sidebar', ['panel']) })] })) });
});
