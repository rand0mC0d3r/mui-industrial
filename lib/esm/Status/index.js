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
 * Generic status element, self announcing himself to the MUI Status Provider.
 * It can be used as a simple status element, a panel or a console.
 *  *
 * @param id - (string) Unique identifier for the status element.
 *
 * @param options - (StatusOptionsProps) Options to be applied to the status element.
 * @param options.as - (StatusType) Type of status element.
 * @param options.panel - (StatusPanelProps) Options to be applied to the status panel.
 * @param options.panel.width - (number) Width of the panel.
 * @param options.panel.elevation - (number) Elevation of the panel.
 * @param options.panel.onClose - (function) Function to be executed on close event.
 * @param options.panel.actions - (JSX.Element) Actions to be displayed on the panel.
 * @param options.panel.hasToolbar - (boolean) If needs to be displayed a toolbar on the panel.
 * @param options.panel.hasDecoration - (boolean) If needs to be displayed a decoration on the panel.
 * @param options.content - (JSX.Element) Content to be displayed on the panel.
 * @param options.title - (string) Title to be displayed on the panel.
 * @param options.separator.end - (boolean) If needs to be displayed a separator at the end of the status element.
 * @param options.separator.start - (boolean) If needs to be displayed a separator at the start of the status element.
 *
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
    var _b, _c;
    var id = _a.id, _d = _a.options, options = _d === void 0 ? {
        as: StatusType.SIMPLE,
    } : _d, _e = _a.secondary, secondary = _e === void 0 ? false : _e, style = _a.style, onClick = _a.onClick, onContextMenu = _a.onContextMenu, _f = _a.disabled, disabled = _f === void 0 ? false : _f, _g = _a.highlight, highlight = _g === void 0 ? Highlight.DEFAULT : _g, tooltip = _a.tooltip, className = _a.className, children = _a.children;
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
                options: options,
                children: children
            })), (options === null || options === void 0 ? void 0 : options.as) === StatusType.PANEL && _jsx(StatusPanel, __assign({}, {
                id: id,
                secondary: secondary,
                style: style,
                onClick: onClick,
                highlight: highlight,
                tooltip: tooltip,
                children: children,
                options: options,
                width: (_b = options === null || options === void 0 ? void 0 : options.panel) === null || _b === void 0 ? void 0 : _b.width,
                elevation: (_c = options === null || options === void 0 ? void 0 : options.panel) === null || _c === void 0 ? void 0 : _c.elevation,
                onClose: panel === null || panel === void 0 ? void 0 : panel.onClose,
                popover: content,
                popoverTitle: title,
                popoverActions: panel === null || panel === void 0 ? void 0 : panel.actions,
                hasToolbar: panel === null || panel === void 0 ? void 0 : panel.hasToolbar,
                hasDecoration: panel === null || panel === void 0 ? void 0 : panel.hasDecoration,
            })), (options === null || options === void 0 ? void 0 : options.as) === StatusType.CONSOLE && _jsx(StatusConsole, __assign({}, {
                id: id,
                disabled: disabled,
                options: options,
                secondary: secondary,
                tooltip: tooltip,
                onClick: onClick,
                onContextMenu: onContextMenu,
                style: style,
                className: className,
                children: children,
            }))] });
}
