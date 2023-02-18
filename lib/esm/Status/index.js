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
import { Highlight, StatusType } from '../index.types';
import StatusConsole from '../StatusConsole';
import StatusCore from '../StatusCore';
import StatusPanel from '../StatusPanel';
/**
 * @param id - (string) Unique identifier for the status element.
 * @param secondary - (boolean) If needs to be applied a secondary style to the status element.
 * @param style - (CSSProperties) Style to be applied to the root element.
 * @param onClick - (function) Function to be executed on click event.
 * @param onContextMenu - (function) Function to be executed on context menu event.
 * @param disabled - (boolean) If needs to be disabled the status element.
 * @param highlight - (string) If needs to be applied a highlight style to the status element.
 * @param tooltip - (string) Tooltip to be displayed on hover.
 * @param children - (JSX.Element) Children to be displayed inside the status element.
 *
 * @returns (JSX.Element) Status element
 */
export default function (_a) {
    var _b = _a.as, as = _b === void 0 ? StatusType.SIMPLE : _b, id = _a.id, console = _a.console, panel = _a.panel, _c = _a.secondary, secondary = _c === void 0 ? false : _c, style = _a.style, onClick = _a.onClick, onContextMenu = _a.onContextMenu, _d = _a.disabled, disabled = _d === void 0 ? false : _d, _e = _a.highlight, highlight = _e === void 0 ? Highlight.DEFAULT : _e, tooltip = _a.tooltip, children = _a.children, _f = _a.endSeparator, endSeparator = _f === void 0 ? false : _f, _g = _a.startSeparator, startSeparator = _g === void 0 ? false : _g;
    return _jsxs(_Fragment, { children: [as === StatusType.SIMPLE && _jsx(StatusCore, __assign({}, {
                id: id,
                secondary: secondary,
                style: style,
                onClick: onClick,
                onContextMenu: onContextMenu,
                disabled: disabled,
                highlight: highlight,
                tooltip: tooltip,
                endSeparator: endSeparator,
                startSeparator: startSeparator,
                children: children
            })), as === StatusType.PANEL && _jsx(StatusPanel, __assign({}, {
                id: id,
                secondary: secondary,
                style: style,
                onClick: onClick,
                highlight: highlight,
                tooltip: tooltip,
                children: children,
                endSeparator: endSeparator,
                startSeparator: startSeparator,
                elevation: panel === null || panel === void 0 ? void 0 : panel.elevation,
                onClose: panel === null || panel === void 0 ? void 0 : panel.onClose,
                popover: panel === null || panel === void 0 ? void 0 : panel.children,
                popoverTitle: panel === null || panel === void 0 ? void 0 : panel.title,
                popoverActions: panel === null || panel === void 0 ? void 0 : panel.actions,
                hasToolbar: panel === null || panel === void 0 ? void 0 : panel.hasToolbar,
                hasDecoration: panel === null || panel === void 0 ? void 0 : panel.hasDecoration,
            })), as === StatusType.CONSOLE && _jsx(StatusConsole, __assign({}, {
                id: id,
                secondary: secondary,
                style: style,
                onClick: onClick,
                tooltip: tooltip,
                children: children,
                console: console === null || console === void 0 ? void 0 : console.children,
                consoleTitle: console === null || console === void 0 ? void 0 : console.title,
            }))] });
}
