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
import { styled } from '@mui/material/styles';
import { useContext } from 'react';
import { domStatusBarId } from '../../index.types';
import DataProvider from '../../Store';
var SPrimary = styled('div')(function () { return ({
    display: 'flex',
    flexWrap: 'nowrap',
    overflow: 'visible',
    justifyContent: 'flex-start',
    '&::-webkit-scrollbar': {
        display: 'none'
    },
}); });
var SSecondary = styled('div')(function (_a) {
    var theme = _a.theme;
    return ({
        display: 'flex',
        flexWrap: 'nowrap',
        overflow: 'visible',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: '0 1 auto',
        minWidth: "".concat(theme.spacing(2)),
        '&::-webkit-scrollbar': {
            display: 'none'
        },
    });
});
var SWrapper = styled('div')(function (_a) {
    var theme = _a.theme, justifyContent = _a.justifyContent, hasBorder = _a.hasBorder, fullWidth = _a.fullWidth, position = _a.position, width = _a.width;
    return ({
        gap: '4px',
        display: 'flex',
        alignItems: 'stretch',
        alignSelf: 'center',
        width: "".concat(width),
        justifyContent: "".concat(justifyContent),
        boxShadow: !fullWidth && hasBorder
            ? [
                "inset 0px ".concat(position === 'top' ? -3 : 3, "px 0px -2px ").concat(theme.palette.divider),
                "inset -3px 0px 0px -2px ".concat(theme.palette.divider),
                "inset 3px 0px 0px -2px ".concat(theme.palette.divider)
            ].join(',')
            : 'none',
    });
});
export default function (_a) {
    var style = _a.style;
    var _b = useContext(DataProvider), status = _b.status, settings = _b.settings;
    var _c = settings, position = _c.position, fullWidth = _c.fullWidth, hasBorder = _c.hasBorder, width = _c.width, justifyContent = _c.justifyContent;
    return _jsxs(SWrapper, __assign({}, { justifyContent: justifyContent, width: width, fullWidth: fullWidth, hasBorder: hasBorder, position: position, style: style }, { children: [status.some(function (_a) {
                var secondary = _a.secondary;
                return !secondary;
            }) && _jsx(SPrimary, __assign({}, { id: "".concat(domStatusBarId, "-primary") })), status.some(function (_a) {
                var secondary = _a.secondary;
                return secondary;
            }) && _jsx(SSecondary, __assign({}, { id: "".concat(domStatusBarId, "-secondary") }))] }));
}
