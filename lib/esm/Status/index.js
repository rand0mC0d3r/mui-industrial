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
    var _b;
    var id = _a.id, _c = _a.options, options = _c === void 0 ? {
        as: StatusType.SIMPLE,
    } : _c, _d = _a.secondary, secondary = _d === void 0 ? false : _d, style = _a.style, onClick = _a.onClick, onContextMenu = _a.onContextMenu, _e = _a.disabled, disabled = _e === void 0 ? false : _e, _f = _a.highlight, highlight = _f === void 0 ? Highlight.DEFAULT : _f, tooltip = _a.tooltip, children = _a.children, _g = _a.endSeparator, endSeparator = _g === void 0 ? false : _g, _h = _a.startSeparator, startSeparator = _h === void 0 ? false : _h;
    var panel = options.panel, content = options.content, title = options.title;
    return _jsxs(_Fragment, { children: [(options === null || options === void 0 ? void 0 : options.as) === StatusType.SIMPLE && _jsx(StatusCore, __assign({}, {
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
            })), (options === null || options === void 0 ? void 0 : options.as) === StatusType.PANEL && _jsx(StatusPanel, __assign({}, {
                id: id,
                secondary: secondary,
                style: style,
                onClick: onClick,
                highlight: highlight,
                tooltip: tooltip,
                children: children,
                endSeparator: endSeparator,
                startSeparator: startSeparator,
                elevation: (_b = options === null || options === void 0 ? void 0 : options.panel) === null || _b === void 0 ? void 0 : _b.elevation,
                onClose: panel === null || panel === void 0 ? void 0 : panel.onClose,
                popover: content,
                popoverTitle: title,
                popoverActions: panel === null || panel === void 0 ? void 0 : panel.actions,
                hasToolbar: panel === null || panel === void 0 ? void 0 : panel.hasToolbar,
                hasDecoration: panel === null || panel === void 0 ? void 0 : panel.hasDecoration,
            })), (options === null || options === void 0 ? void 0 : options.as) === StatusType.CONSOLE && _jsx(StatusConsole, __assign({}, {
                id: id,
                secondary: secondary,
                style: style,
                onClick: onClick,
                tooltip: tooltip,
                children: children,
                endSeparator: endSeparator,
                startSeparator: startSeparator,
                content: content,
                title: title,
            }))] });
}
