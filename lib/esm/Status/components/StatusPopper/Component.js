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
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ClickAwayListener } from '@mui/material';
import { useContext } from 'react';
import { Highlight, PlacementPosition } from '../../../index.types';
import InternalHeader from '../../../internal/InternalHeader';
import DataProvider from '../../../Store';
import { StyledBox, StyledContainer, StyledPopper } from './css';
export default (function (_a) {
    var _b;
    var id = _a.id, enrichedPopper = _a.enrichedPopper, _c = _a.highlight, highlight = _c === void 0 ? Highlight.DEFAULT : _c, statusObject = _a.statusObject, anchorEl = _a.anchorEl, setAnchorEl = _a.setAnchorEl, options = _a.options, _d = _a.secondary, secondary = _d === void 0 ? false : _d;
    var settings = useContext(DataProvider).settings;
    var open = Boolean(anchorEl);
    var determineHighlight = ((statusObject === null || statusObject === void 0 ? void 0 : statusObject.keepOpen) || open) ? Highlight.PRIMARY : highlight;
    var handleOnClose = function (event) {
        if (enrichedPopper.onClose && !(statusObject === null || statusObject === void 0 ? void 0 : statusObject.keepOpen))
            enrichedPopper.onClose(event);
        if (!(statusObject === null || statusObject === void 0 ? void 0 : statusObject.keepOpen) || !settings.hasLock)
            setAnchorEl(null);
    };
    return _jsx(_Fragment, { children: _jsx(StyledPopper, __assign({}, {
            keepMounted: statusObject === null || statusObject === void 0 ? void 0 : statusObject.keepOpen,
            open: open,
            anchorEl: anchorEl,
            onClose: enrichedPopper.onClose,
            elevation: enrichedPopper.elevation,
            placement: "".concat(settings.position === PlacementPosition.TOP ? 'bottom' : 'top', "-").concat(secondary ? 'end' : 'start'),
            id: "mui-status-panel-popover-".concat(id),
        }, { children: _jsx(ClickAwayListener, __assign({ onClickAway: function (event) { return handleOnClose(event); } }, { children: _jsxs(StyledContainer, __assign({}, {
                    elevation: enrichedPopper.elevation,
                    highlight: determineHighlight.toString(),
                    variant: settings.variant.toString(),
                    decoration: (_b = enrichedPopper.hasDecoration) === null || _b === void 0 ? void 0 : _b.toString(),
                }, { children: [_jsx(StyledBox, __assign({ display: "flex", alignItems: "stretch", justifyContent: "space-between", flexDirection: "column", width: enrichedPopper.width }, { children: options === null || options === void 0 ? void 0 : options.content })), enrichedPopper.hasToolbar && _jsx(InternalHeader, __assign({}, {
                            id: id,
                            actions: enrichedPopper.actions,
                            title: options === null || options === void 0 ? void 0 : options.title,
                        }))] })) })) })) });
});
