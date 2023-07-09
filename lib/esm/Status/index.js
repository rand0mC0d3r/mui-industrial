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
import { lazy, Suspense } from 'react';
import { StatusType } from '../index.types';
import Template from './components/Template';
var StatusConsole = lazy(function () { return import('./components/StatusConsole'); });
var StatusCore = lazy(function () { return import('./components/StatusCore'); });
var StatusPopper = lazy(function () { return import('./components/StatusPopper'); });
var defaultStatusOptionsProps = {
    as: StatusType.SIMPLE,
};
var Status = function (_a) {
    var rest = __rest(_a, []);
    var options = __assign(__assign({}, defaultStatusOptionsProps), rest.options);
    var props = __assign(__assign({}, rest), { options: options });
    return _jsxs(_Fragment, { children: [options.as === StatusType.SIMPLE && _jsx(Suspense, __assign({ fallback: _jsx(_Fragment, {}) }, { children: _jsx(StatusCore, __assign({}, props)) })), options.as === StatusType.POPPER && _jsx(Suspense, __assign({ fallback: _jsx(_Fragment, {}) }, { children: _jsx(StatusPopper, __assign({}, props)) })), options.as === StatusType.CONSOLE && _jsx(Suspense, __assign({ fallback: _jsx(_Fragment, {}) }, { children: _jsx(StatusConsole, __assign({}, props)) }))] });
};
Status.Template = Template;
export default Status;
