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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusCore = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
var ArrowDropDownOutlined_1 = __importDefault(require("@mui/icons-material/ArrowDropDownOutlined"));
var ArrowDropUpOutlined_1 = __importDefault(require("@mui/icons-material/ArrowDropUpOutlined"));
var material_1 = require("@mui/material");
var styles_1 = require("@mui/material/styles");
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var index_types_1 = require("../../../index.types");
var Store_1 = __importStar(require("../../../Store"));
var componentId = 'statusBar';
var backgroundColor = function (theme, highlight) {
    switch (highlight) {
        case 'primary':
            return theme.palette.primary.main;
        case 'secondary':
            return theme.palette.secondary.main;
        default:
            return '';
    }
};
var backgroundColorHover = function (theme, highlight) {
    switch (highlight) {
        case 'primary':
            return theme.palette.primary.dark;
        case 'secondary':
            return theme.palette.secondary.dark;
        default:
            return theme.palette.divider;
    }
};
var isStartSeparator = function (startSeparator, endSeparator, secondary) { return (secondary === 'false' && startSeparator === 'true') || (secondary === 'true' && endSeparator === 'true'); };
var isEndSeparator = function (startSeparator, endSeparator, secondary) { return (secondary === 'false' && endSeparator === 'true') || (secondary === 'true' && startSeparator === 'true'); };
var SSpan = (0, styles_1.styled)('span')(function (_a) {
    var theme = _a.theme;
    return ({
        padding: '1px 10px',
        display: 'flex',
        flexWrap: 'nowrap',
        alignItems: 'stretch',
        fontSize: '14px',
        gap: "".concat(theme.spacing(0.5)),
        '& > *': {
            fontSize: '14px !important',
        },
    });
});
var SArrowDown = (0, styles_1.styled)(ArrowDropDownOutlined_1.default)(function (_a) {
    var position = _a.position;
    return ({
        position: 'absolute',
        zIndex: 102,
        bottom: position !== 'top' ? '-10px' : 'unset',
        top: position === 'top' ? '16px' : 'unset',
    });
});
var STooltip = (0, styles_1.styled)('div')(function () { return ({
    fontSize: '13px',
    lineHeight: '1',
    display: 'flex',
    flexWrap: 'nowrap',
    gap: '8px',
    alignItems: 'center',
    maxHeight: '300px',
    overflow: 'scroll',
}); });
var SArrowUp = (0, styles_1.styled)(ArrowDropUpOutlined_1.default)(function () { return ({
    position: 'absolute',
    bottom: 'unset',
    top: '-14px',
    zIndex: 102,
}); });
var SDiv = (0, styles_1.styled)('div')(function (_a) {
    var theme = _a.theme, secondary = _a.secondary, hasclick = _a.hasclick, highlight = _a.highlight, startSeparator = _a.startSeparator, endSeparator = _a.endSeparator, isdisabled = _a.isdisabled;
    return ({
        WebkitFontSmoothing: 'auto',
        height: '100%',
        display: 'flex',
        flex: '0 0 auto',
        flexDirection: 'row',
        alignItems: 'stretch',
        gap: '16px',
        justifyContent: 'center',
        alignSelf: 'center',
        position: 'relative',
        borderLeft: isStartSeparator(startSeparator, endSeparator, secondary) ? "1px solid ".concat(theme.palette.divider) : 'none',
        borderRight: isEndSeparator(startSeparator, endSeparator, secondary) ? "1px solid ".concat(theme.palette.divider) : 'none',
        cursor: (hasclick === 'true' && isdisabled === 'false') ? 'pointer' : '',
        backgroundColor: backgroundColor(theme, highlight),
        color: theme.palette.text.primary,
        '& > div > *': {
            color: highlight !== 'default'
                ? "".concat(theme.palette.background.default, " !important")
                : '',
        },
        '& > span > div > *': {
            color: highlight !== 'default'
                ? "".concat(theme.palette.background.default, " !important")
                : '',
        },
        '&:hover': (hasclick === 'true' && isdisabled === 'false') ? {
            backgroundColor: backgroundColorHover(theme, highlight),
            color: "".concat(theme.palette.text.primary),
        } : {},
    });
});
var defaultSeparatorOptions = {
    start: false,
    end: false,
};
var defaultPopperOptions = {
    hasArrow: false,
};
exports.StatusCore = (0, react_1.forwardRef)(function (props, ref) {
    var _a, _b;
    var id = props.id, order = props.order, style = props.style, onClick = props.onClick, onContextMenu = props.onContextMenu, _c = props.disabled, disabled = _c === void 0 ? false : _c, _d = props.highlight, highlight = _d === void 0 ? index_types_1.Highlight.DEFAULT : _d, tooltip = props.tooltip, children = props.children, options = props.options, _e = props.secondary, secondary = _e === void 0 ? false : _e, _f = props.onLoad, onLoad = _f === void 0 ? function () { } : _f;
    var _g = (0, react_1.useContext)(Store_1.default), status = _g.status, handleStatusAnnouncement = _g.handleStatusAnnouncement;
    var _h = (0, react_1.useContext)(Store_1.default).settings, allowRightClick = _h.allowRightClick, position = _h.position;
    var _j = (0, react_1.useState)(), ownId = _j[0], setOwnId = _j[1];
    var _k = (0, react_1.useState)(null), statusObject = _k[0], setStatusObject = _k[1];
    var _l = (0, react_1.useState)(null), elementFound = _l[0], setElementFound = _l[1];
    var combinedSeparators = __assign(__assign({}, defaultSeparatorOptions), options === null || options === void 0 ? void 0 : options.separators);
    var combinedPopper = __assign(__assign({}, defaultPopperOptions), options === null || options === void 0 ? void 0 : options.popper);
    var callbackHandleStatusAnnouncement = (0, react_1.useCallback)(function () {
        handleStatusAnnouncement({ id: id, ownId: ownId, secondary: secondary, children: children });
    }, [id, secondary, ownId, children, handleStatusAnnouncement]);
    // const callbackHandleStatusDestroy = useCallback(() => { handleStatusDestroy({ id }); }, [id, handleStatusDestroy]);
    var handleOnClick = function (e) {
        if (onClick !== undefined && !disabled) {
            e.preventDefault();
            onClick(e);
            // handleStatusUpdate({ id, ownId, children });
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
    // eslint-disable-next-line no-console
    (0, react_1.useEffect)(function () { if (!id) {
        console.error('Please define an id for the status bar item');
    } }, [id]);
    (0, react_1.useEffect)(function () {
        return function () {
            // console.log('die');
            //   callbackHandleStatusDestroy();
        };
    }, []);
    (0, react_1.useEffect)(function () {
        if (statusObject !== null && !!id && elementFound) {
            onLoad(ref);
        }
    }, [statusObject, id, elementFound, ref, onLoad]);
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (statusObject !== null && !!id && elementFound)
            && (0, react_dom_1.createPortal)((statusObject.visible && children) && (0, jsx_runtime_1.jsxs)(SDiv, __assign({}, {
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
                            ? (0, jsx_runtime_1.jsx)(SArrowUp, { color: "primary" })
                            : (0, jsx_runtime_1.jsx)(SArrowDown, { position: position.toString(), color: "primary" }) }), tooltip
                        ? (0, jsx_runtime_1.jsx)(material_1.Tooltip, __assign({ title: (0, jsx_runtime_1.jsx)(STooltip, { children: tooltip }), arrow: true }, { children: (0, jsx_runtime_1.jsx)(SSpan, { children: children }) }))
                        : (0, jsx_runtime_1.jsx)(SSpan, { children: children })] })), elementFound) });
});
exports.default = exports.StatusCore;
