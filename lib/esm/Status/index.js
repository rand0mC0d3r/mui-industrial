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
import StatusConsole from './components/StatusConsole';
import StatusCore from './components/StatusCore';
import StatusPoppper from './components/StatusPoppper';
var defaultStatusOptionsProps = {
    as: StatusType.SIMPLE,
};
/**
 * Generic status element, self announcing himself to the MUI Status Provider.
 * It can be used as a simple status element, a popper or a console.
 *
 * @param id - (string) Unique identifier for the status element.
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
 * @param children - (JSX.Element) Children to be displayed inside the status element.
 *
 * @returns (JSX.Element) Status element
 */
export default function (_a) {
    var id = _a.id, _b = _a.disabled, disabled = _b === void 0 ? false : _b, _c = _a.highlight, highlight = _c === void 0 ? Highlight.DEFAULT : _c, _d = _a.options, options = _d === void 0 ? __assign({}, defaultStatusOptionsProps) : _d, _e = _a.secondary, secondary = _e === void 0 ? false : _e, tooltip = _a.tooltip, onClick = _a.onClick, onContextMenu = _a.onContextMenu, style = _a.style, className = _a.className, children = _a.children;
    var combinedOptions = __assign(__assign({}, defaultStatusOptionsProps), options);
    var props = {
        id: id,
        disabled: disabled,
        highlight: highlight,
        options: combinedOptions,
        secondary: secondary,
        tooltip: tooltip,
        onClick: onClick,
        onContextMenu: onContextMenu,
        style: style,
        className: className,
        children: children
    };
    return _jsxs(_Fragment, { children: [combinedOptions.as === StatusType.SIMPLE && _jsx(StatusCore, __assign({}, props)), combinedOptions.as === StatusType.POPPER && _jsx(StatusPoppper, __assign({}, props)), combinedOptions.as === StatusType.CONSOLE && _jsx(StatusConsole, __assign({}, props))] });
}
