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
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { StatusType } from '../index.types';
import StatusHelper from '../StatusHelper';
import StatusConsole from './components/StatusConsole';
import StatusCore from './components/StatusCore';
import StatusPopper from './components/StatusPopper';
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
 *    as: StatusType.CONSOLE, --> StatusType.SIMPLE | StatusType.POPPER | StatusType.CONSOLE
 *    title: 'Status Console', --> Title to be displayed on the status element
 *    content: <div>Content</div>, --> Content to be displayed on the status element (only when NOT StatusType.SIMPLE)
 *    ...
 *  }}
 *
 *  disabled={false} --> If needs to be disabled the status element
 *  highlight={Highlight.SUCCESS} --> If needs to be applied a highlight style to the status element
 *  secondary={false} --> If needs to be applied a secondary priority/importance to the status element
 *  tooltip="Tooltip" --> Tooltip to be displayed on hover
 *
 *  onClick={() => {}} --> Function to be executed on click event
 *  onContextMenu={() => {}} --> Function to be executed on context menu event
 * (/)>
 *    ... --> Custom children to be displayed inside the status element
 *    <Status.Template> --> Predefined template to be displayed inside the status element
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
 * @param children - (JSX.Element) Children to be displayed inside the status element.
 *
 * @returns (JSX.Element) Status element
 */
var Status = function (_a) {
    var rest = __rest(_a, []);
    var combinedOptions = __assign(__assign({}, defaultStatusOptionsProps), rest.options);
    var props = __assign(__assign({}, rest), { options: combinedOptions });
    return _jsxs(_Fragment, { children: [combinedOptions.as === StatusType.SIMPLE && _jsx(StatusCore, __assign({}, props)), combinedOptions.as === StatusType.POPPER && _jsx(StatusPopper, __assign({}, props)), combinedOptions.as === StatusType.CONSOLE && _jsx(StatusConsole, __assign({}, props))] });
};
Status.Body = StatusHelper;
Status.Content = StatusHelper;
Status.Template = StatusHelper;
export default Status;
