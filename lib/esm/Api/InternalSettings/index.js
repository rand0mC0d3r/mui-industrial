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
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import { Popover, Tooltip } from '@mui/material';
import { useContext } from 'react';
import { PlacementPosition } from '../../index.types';
import DataProvider from '../../Store';
import { SElement, SElementItem, StyledTypographyNoChildren } from './css';
export default (function (_a) {
    var anchorEl = _a.anchorEl, setAnchorEl = _a.setAnchorEl;
    var _b = useContext(DataProvider), status = _b.status, settings = _b.settings, handleStatusVisibilityToggle = _b.handleStatusVisibilityToggle;
    var position = settings.position;
    var open = Boolean(anchorEl);
    var onClose = function () { return setAnchorEl(null); };
    var statusEntry = function (statusItem) { return _jsxs(SElementItem, __assign({ onClick: function () { return handleStatusVisibilityToggle({ id: statusItem.uniqueId }); } }, { children: [statusItem.visible ? _jsx(CheckBoxOutlinedIcon, {}) : _jsx(CheckBoxOutlineBlankOutlinedIcon, {}), statusItem.children || _jsx(StyledTypographyNoChildren, __assign({ variant: "caption", color: "textSecondary" }, { children: "No content for child" }))] })); };
    var entryWrapper = function (statusItem) { return _jsx(Tooltip, __assign({}, { key: statusItem.uniqueId, title: 'Toggle visibility of tile' }, { children: statusEntry(statusItem) })); };
    return _jsx(Popover, __assign({ id: "toggle-status-popover" }, { open: open, anchorEl: anchorEl, onClose: onClose, elevation: 2 }, { anchorOrigin: { vertical: position === PlacementPosition.TOP ? 'top' : 'bottom', horizontal: 'center' }, transformOrigin: { vertical: position === PlacementPosition.BOTTOM ? 'bottom' : 'top', horizontal: 'center' }, style: { marginTop: "".concat((position === PlacementPosition.TOP ? 1 : -1) * 12, "px") } }, { children: _jsx(SElement, __assign({}, { onContextMenu: function (e) { e.preventDefault(); } }, { children: [false, true].map(function (state) { return _jsx("div", { children: status.filter(function (_a) {
                    var secondary = _a.secondary;
                    return secondary === state;
                }).map(function (statusItem) { return entryWrapper(statusItem); }) }, state.toString()); }) })) }));
});
