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
<<<<<<< Updated upstream
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { StatusType } from '../index.types';
import StatusConsole from './components/StatusConsole';
import StatusCore from './components/StatusCore';
import StatusPopper from './components/StatusPopper';
import Template from './components/Template';
var defaultStatusOptionsProps = {
    as: StatusType.SIMPLE,
};
/**
 * Generic status element, self announcing himself to the MUI Status Provider.
 * It can be used as a simple status element, a popper or a console.
 *
 * @example
 * <Status
 *  id="##uniqueId##" --> Unique identifier for the status element
 *
 *  options={{
 *    as: StatusType.CONSOLE, // StatusType.SIMPLE | StatusType.POPPER | StatusType.CONSOLE
 *    title: 'Status Console', // Title to be displayed on the status element
 *    content: <div>Content</div>, // Content to be displayed on the status element (only when NOT StatusType.SIMPLE)
 *    ...
 *  }}
 *
 *  secondary={false} // If needs to be applied a secondary priority/importance to the status element
 *  tooltip="Tooltip" // Tooltip to be displayed on hover
 *
 *  onClick={() => {}} // Function to be executed on click event
 *  onContextMenu={() => {}} // Function to be executed on context menu event
 * (/)>
 *    ... // Custom children to be displayed inside the status element
 *    <Status.Template ... /> // Predefined template to be displayed inside the status element
 * (</Status>)
 *
 * @param id - (string) Unique identifier for the status element.
 * @param order - (number) Order to be displayed in the console.
 * @param disabled - (boolean) If needs to be disabled the status element.
 * @param highlight - (string) If needs to be applied a highlight style to the status element.
 * @param options - (StatusOptionsProps) Options to be applied to the status element.
 * @param secondary - (boolean) If needs to be applied a secondary style to the status element.
 * @param tooltip - (string) Tooltip to be displayed on hover.
 *
 * @param onClick - (function) Function to be executed on click event.
 * @param onContextMenu - (function) Function to be executed on context menu event.
 *
 * @param style - (CSSProperties) Style to be applied to the root element.
 * @param className - (HTMLAttributes<HTMLDivElement>['className']) Override or extend the styles applied to the component
 *
=======
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import { Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useCallback, useContext, useEffect, useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import DataProvider, { composeDomId } from '../Store';
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
var SSpan = styled('span')(function (_a) {
    var theme = _a.theme;
    return ({
        padding: '4px 19px',
        display: 'flex',
        flexWrap: 'nowrap',
        alignItems: 'center',
        fontSize: '14px',
        gap: "".concat(theme.spacing(0.5)),
        '& > *': {
            fontSize: '14px !important',
        },
    });
});
var SDiv = styled('div')(function (_a) {
    var theme = _a.theme, hasclick = _a.hasclick, highlight = _a.highlight, isdisabled = _a.isdisabled;
    return ({
        WebkitFontSmoothing: 'auto',
        height: '100%',
        display: 'flex',
        flex: '0 0 auto',
        alignItems: 'center',
        gap: '16px',
        justifyContent: 'center',
        alignSelf: 'center',
        position: 'relative',
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
        } : {}
    });
});
/**
 * @param id - (string) Unique identifier for the status element.
 * @param secondary - (boolean) If needs to be applied a secondary style to the status element.
 * @param style - (CSSProperties) Style to be applied to the root element.
 * @param onClick - (function) Function to be executed on click event.
 * @param onContextMenu - (function) Function to be executed on context menu event.
 * @param disabled - (boolean) If needs to be disabled the status element.
 * @param highlight - (string) If needs to be applied a highlight style to the status element.
 * @param tooltip - (string) Tooltip to be displayed on hover.
>>>>>>> Stashed changes
 * @param children - (JSX.Element) Children to be displayed inside the status element.
 *
 * @returns (JSX.Element) Status element
 */
<<<<<<< Updated upstream
var Status = function (_a) {
    var rest = __rest(_a, []);
    var combinedOptions = __assign(__assign({}, defaultStatusOptionsProps), rest.options);
    var props = __assign(__assign({}, rest), { options: combinedOptions });
    return _jsxs(_Fragment, { children: [combinedOptions.as === StatusType.SIMPLE && _jsx(StatusCore, __assign({}, props)), combinedOptions.as === StatusType.POPPER && _jsx(StatusPopper, __assign({}, props)), combinedOptions.as === StatusType.CONSOLE && _jsx(StatusConsole, __assign({}, props))] });
};
/**
 * Predefined template to be displayed inside the status element.
 *
 * @example
 * <Status.Template text="..." badge={text|string} />
 *
 * @param icon - (JSX.Element) Icon to display for status element. Expects a Material UI SvgIcon component.
 * @param text - (string | number) Text to display for status element.
 * @param badge - (string | number) Badge to display relevant notifications.
 * @param image - (string) Image to display for status element. Expects a valid image path.
 * @param mask - (boolean) If needs to be applied a circular mask to the image.
 * @param reverse - (boolean) If needs to be applied a reverse of the default order of the elements.
 * @param reverseIcon - (boolean) If needs to be applied a reverse of the given icon.
 * @param className - (HTMLAttribute) Class name to be applied to the root element.
 * @param style - (CSSProperties) Style to be applied to the root element.
 *
 * @returns (JSX.Element) Status helper element
 */
Status.Template = Template;
export default Status;
=======
export default function (_a) {
    var id = _a.id, _b = _a.secondary, secondary = _b === void 0 ? false : _b, style = _a.style, onClick = _a.onClick, onContextMenu = _a.onContextMenu, _c = _a.disabled, disabled = _c === void 0 ? false : _c, _d = _a.highlight, highlight = _d === void 0 ? 'default' : _d, tooltip = _a.tooltip, children = _a.children;
    var _e = useContext(DataProvider), status = _e.status, handleStatusUpdate = _e.handleStatusUpdate, handleStatusAnnouncement = _e.handleStatusAnnouncement, handleStatusDestroy = _e.handleStatusDestroy;
    var allowRightClick = useContext(DataProvider).settings.allowRightClick;
    var _f = useState(), ownId = _f[0], setOwnId = _f[1];
    var _g = useState(null), statusObject = _g[0], setStatusObject = _g[1];
    var _h = useState(null), elementFound = _h[0], setElementFound = _h[1];
    var callbackHandleStatusAnnouncement = useCallback(function () { return handleStatusAnnouncement({ id: id, ownId: ownId, secondary: secondary, children: children }); }, [id, secondary, ownId, children, handleStatusAnnouncement]);
    var callbackHandleStatusDestroy = useCallback(function () { handleStatusDestroy({ id: id }); }, [id]);
    var handleOnClick = function (e) {
        if (onClick !== undefined && !disabled) {
            e.preventDefault();
            onClick(e);
            handleStatusUpdate({ id: id, ownId: ownId, children: children });
        }
    };
    var handleOnContextMenu = function (e) {
        e.preventDefault();
        if (allowRightClick && onContextMenu !== undefined && !disabled) {
            onContextMenu(e);
        }
    };
    useEffect(function () {
        if (ownId && statusObject !== null) {
            handleStatusUpdate({ id: id, ownId: ownId, children: children });
        }
    }, [id, ownId, statusObject, children]);
    useEffect(function () {
        if (id && ownId && statusObject === null && !status.some(function (_a) {
            var uniqueId = _a.uniqueId;
            return uniqueId === id;
        })) {
            callbackHandleStatusAnnouncement();
        }
    }, [id, ownId, statusObject, status, callbackHandleStatusAnnouncement]);
    useEffect(function () {
        var statusObjectFound = status.find(function (_a) {
            var uniqueId = _a.uniqueId;
            return uniqueId === id;
        });
        if ((statusObject === null || (statusObject === null || statusObject === void 0 ? void 0 : statusObject.visible) !== (statusObjectFound === null || statusObjectFound === void 0 ? void 0 : statusObjectFound.visible)) && statusObjectFound) {
            setStatusObject(statusObjectFound);
        }
    }, [status, id, statusObject]);
    useLayoutEffect(function () {
        if (statusObject !== null) {
            setElementFound(document.getElementById(composeDomId(componentId, [secondary ? 'secondary' : 'primary'])) || null);
        }
    }, [secondary, statusObject]);
    useEffect(function () { setOwnId((Math.random() + 1).toString(36).substring(7)); }, []);
    // validation
    useEffect(function () { if (!id) {
        console.error('Please define an id for the status bar item');
    } }, [id]);
    // teardown
    useEffect(function () { return function () { callbackHandleStatusDestroy(); }; }, [callbackHandleStatusDestroy]);
    return _jsx(_Fragment, { children: (statusObject !== null && !!id && elementFound)
            && createPortal((statusObject.visible && children) && _jsx(SDiv, __assign({}, {
                id: id,
                direction: 'row',
                key: "mui-status-".concat(id),
                onClick: handleOnClick,
                onContextMenu: handleOnContextMenu,
                style: __assign(__assign({}, style), { order: statusObject.index }),
                highlight: highlight,
                hasclick: (!!onClick).toString(),
                isdisabled: disabled.toString(),
            }, { children: tooltip
                    ? _jsx(Tooltip, __assign({ title: tooltip, arrow: true }, { children: _jsx(SSpan, { children: children }) }))
                    : _jsx(SSpan, { children: children }) })), elementFound) });
}
>>>>>>> Stashed changes
