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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var index_types_1 = require("../index.types");
var Template_1 = __importDefault(require("./components/Template"));
var StatusConsole = (0, react_1.lazy)(function () { return Promise.resolve().then(function () { return __importStar(require('./components/StatusConsole')); }); });
var StatusCore = (0, react_1.lazy)(function () { return Promise.resolve().then(function () { return __importStar(require('./components/StatusCore')); }); });
var StatusPopper = (0, react_1.lazy)(function () { return Promise.resolve().then(function () { return __importStar(require('./components/StatusPopper')); }); });
var defaultStatusOptionsProps = {
    as: index_types_1.StatusType.SIMPLE,
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
 * @param children - (JSX.Element) Children to be displayed inside the status element.
 *
 * @returns (JSX.Element) Status element
 */
var Status = function (_a) {
    var rest = __rest(_a, []);
    var options = __assign(__assign({}, defaultStatusOptionsProps), rest.options);
    var props = __assign(__assign({}, rest), { options: options });
    return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [options.as === index_types_1.StatusType.SIMPLE && (0, jsx_runtime_1.jsx)(react_1.Suspense, __assign({ fallback: (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}) }, { children: (0, jsx_runtime_1.jsx)(StatusCore, __assign({}, props)) })), options.as === index_types_1.StatusType.POPPER && (0, jsx_runtime_1.jsx)(react_1.Suspense, __assign({ fallback: (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}) }, { children: (0, jsx_runtime_1.jsx)(StatusPopper, __assign({}, props)) })), options.as === index_types_1.StatusType.CONSOLE && (0, jsx_runtime_1.jsx)(react_1.Suspense, __assign({ fallback: (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}) }, { children: (0, jsx_runtime_1.jsx)(StatusConsole, __assign({}, props)) }))] });
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
Status.Template = Template_1.default;
exports.default = Status;
