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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusCore = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var material_1 = require("@mui/material");
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var index_types_1 = require("../../../index.types");
var Store_1 = __importStar(require("../../../Store"));
var css_1 = require("./css");
var componentId = 'statusBar';
var defaultSeparatorOptions = {
    start: false,
    end: false,
};
var defaultPopperOptions = {
    hasArrow: false,
};
exports.StatusCore = (0, react_1.forwardRef)(function (props, ref) {
    var _a, _b;
    var _c = props, id = _c.id, order = _c.order, style = _c.style, onClick = _c.onClick, onContextMenu = _c.onContextMenu, _d = _c.disabled, disabled = _d === void 0 ? false : _d, _e = _c.highlight, highlight = _e === void 0 ? index_types_1.Highlight.DEFAULT : _e, tooltip = _c.tooltip, children = _c.children, options = _c.options, _f = _c.secondary, secondary = _f === void 0 ? false : _f, _g = _c.onLoad, onLoad = _g === void 0 ? function () { } : _g;
    var _h = (0, react_1.useContext)(Store_1.default), status = _h.status, handleStatusAnnouncement = _h.handleStatusAnnouncement;
    var _j = (0, react_1.useContext)(Store_1.default).settings, allowRightClick = _j.allowRightClick, position = _j.position;
    var _k = (0, react_1.useState)(), ownId = _k[0], setOwnId = _k[1];
    var _l = (0, react_1.useState)(null), statusObject = _l[0], setStatusObject = _l[1];
    var _m = (0, react_1.useState)(null), elementFound = _m[0], setElementFound = _m[1];
    var combinedSeparators = __assign(__assign({}, defaultSeparatorOptions), options === null || options === void 0 ? void 0 : options.separators);
    var combinedPopper = __assign(__assign({}, defaultPopperOptions), options === null || options === void 0 ? void 0 : options.popper);
    var callbackHandleStatusAnnouncement = (0, react_1.useCallback)(function () {
        handleStatusAnnouncement({ id: id, ownId: ownId, secondary: secondary, children: children, options: options });
    }, [id, secondary, ownId, options, children, handleStatusAnnouncement]);
    var handleOnClick = function (e) {
        if (onClick !== undefined && !disabled) {
            e.preventDefault();
            onClick(e);
        }
    };
    var handleOnContextMenu = function (e) {
        e.preventDefault();
        if (allowRightClick && onContextMenu !== undefined && !disabled) {
            onContextMenu(e);
        }
    };
    (0, react_1.useEffect)(function () {
        if (id && ownId && statusObject === null && !status.some(function (_a) {
            var uniqueId = _a.uniqueId;
            return uniqueId === id;
        })) {
            callbackHandleStatusAnnouncement();
        }
    }, [id, ownId, statusObject, status, callbackHandleStatusAnnouncement]);
    (0, react_1.useEffect)(function () {
        var statusObjectFound = status.find(function (_a) {
            var uniqueId = _a.uniqueId;
            return uniqueId === id;
        });
        if ((statusObject === null || (statusObject === null || statusObject === void 0 ? void 0 : statusObject.visible) !== (statusObjectFound === null || statusObjectFound === void 0 ? void 0 : statusObjectFound.visible)) && statusObjectFound) {
            setStatusObject(statusObjectFound);
        }
    }, [status, id, statusObject]);
    (0, react_1.useLayoutEffect)(function () {
        if (statusObject !== null) {
            setElementFound(document.getElementById((0, Store_1.composeDomId)(componentId, [secondary ? 'secondary' : 'primary'])) || null);
        }
    }, [secondary, statusObject]);
    (0, react_1.useEffect)(function () {
        setOwnId((Math.random() + 1).toString(36).substring(7));
    }, []);
    (0, react_1.useEffect)(function () { if (!id) {
        console.error('Please define an id for the status bar item');
    } }, [id]);
    (0, react_1.useEffect)(function () {
        return function () {
        };
    }, []);
    (0, react_1.useEffect)(function () {
        if (statusObject !== null && !!id && elementFound) {
            onLoad(ref);
        }
    }, [statusObject, id, elementFound, ref, onLoad]);
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (statusObject !== null && !!id && elementFound)
            && (0, react_dom_1.createPortal)((statusObject.visible && children) && (0, jsx_runtime_1.jsxs)(css_1.SDiv, __assign({}, {
                id: id,
                ref: ref,
                key: "mui-status-".concat(id),
                onClick: handleOnClick,
                onContextMenu: handleOnContextMenu,
                style: __assign(__assign({}, style), { order: order || statusObject.index }),
                highlight: highlight,
                secondary: secondary.toString(),
                startSeparator: (_a = combinedSeparators.start) === null || _a === void 0 ? void 0 : _a.toString(),
                endSeparator: (_b = combinedSeparators.end) === null || _b === void 0 ? void 0 : _b.toString(),
                hasclick: (!!onClick).toString(),
                isdisabled: disabled.toString(),
            }, { children: [combinedPopper.hasArrow && (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: position === index_types_1.PlacementPosition.BOTTOM
                            ? (0, jsx_runtime_1.jsx)(css_1.SArrowUp, { color: "primary" })
                            : (0, jsx_runtime_1.jsx)(css_1.SArrowDown, { position: position.toString(), color: "primary" }) }), tooltip
                        ? (0, jsx_runtime_1.jsx)(material_1.Tooltip, __assign({ title: (0, jsx_runtime_1.jsx)(css_1.STooltip, { children: tooltip }), arrow: true }, { children: (0, jsx_runtime_1.jsx)(css_1.SSpan, { children: children }) }))
                        : (0, jsx_runtime_1.jsx)(css_1.SSpan, { children: children })] })), elementFound) });
});
exports.default = exports.StatusCore;
