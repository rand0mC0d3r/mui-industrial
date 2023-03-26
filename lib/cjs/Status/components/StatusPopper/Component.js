"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
var material_1 = require("@mui/material");
var react_1 = require("react");
var index_types_1 = require("../../../index.types");
var InternalHeader_1 = __importDefault(require("../../../internal/InternalHeader"));
var Store_1 = __importDefault(require("../../../Store"));
var css_1 = require("./css");
exports.default = (function (_a) {
    var _b;
    var id = _a.id, enrichedPopper = _a.enrichedPopper, _c = _a.highlight, highlight = _c === void 0 ? index_types_1.Highlight.DEFAULT : _c, statusObject = _a.statusObject, anchorEl = _a.anchorEl, setAnchorEl = _a.setAnchorEl, options = _a.options, open = _a.open, _d = _a.secondary, secondary = _d === void 0 ? false : _d;
    var settings = (0, react_1.useContext)(Store_1.default).settings;
    // const open = Boolean(anchorEl);
    var determineHighlight = ((statusObject === null || statusObject === void 0 ? void 0 : statusObject.keepOpen) || open) ? index_types_1.Highlight.PRIMARY : highlight;
    var handleOnClose = function (event) {
        if (enrichedPopper.onClose && !(statusObject === null || statusObject === void 0 ? void 0 : statusObject.keepOpen))
            enrichedPopper.onClose(event);
        if (!(statusObject === null || statusObject === void 0 ? void 0 : statusObject.keepOpen) || !settings.hasLock)
            setAnchorEl(null);
    };
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(css_1.StyledPopper, __assign({}, {
            keepMounted: statusObject === null || statusObject === void 0 ? void 0 : statusObject.keepOpen,
            open: open && Boolean(anchorEl),
            anchorEl: anchorEl,
            onClose: enrichedPopper.onClose,
            elevation: enrichedPopper.elevation,
            placement: "".concat(settings.position === index_types_1.PlacementPosition.TOP ? 'bottom' : 'top', "-").concat(secondary ? 'end' : 'start'),
            id: "mui-status-panel-popover-".concat(id),
        }, { children: (0, jsx_runtime_1.jsx)(material_1.ClickAwayListener, __assign({ onClickAway: function (event) { return handleOnClose(event); } }, { children: (0, jsx_runtime_1.jsxs)(css_1.StyledContainer, __assign({}, {
                    elevation: enrichedPopper.elevation,
                    highlight: determineHighlight.toString(),
                    variant: settings.variant.toString(),
                    decoration: (_b = enrichedPopper.hasDecoration) === null || _b === void 0 ? void 0 : _b.toString(),
                }, { children: [(0, jsx_runtime_1.jsx)(css_1.StyledBox, __assign({ display: "flex", alignItems: "stretch", justifyContent: "space-between", flexDirection: "column", width: enrichedPopper.width, height: enrichedPopper.height }, { children: options === null || options === void 0 ? void 0 : options.content })), enrichedPopper.hasToolbar && (0, jsx_runtime_1.jsx)(InternalHeader_1.default, __assign({}, {
                            id: id,
                            actions: enrichedPopper.actions,
                            title: options === null || options === void 0 ? void 0 : options.title,
                        }))] })) })) })) });
});
