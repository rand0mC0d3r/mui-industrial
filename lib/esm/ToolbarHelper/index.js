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
import { jsx as _jsx } from "react/jsx-runtime";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { IconButton, Tooltip } from '@mui/material';
export default function (_a) {
    var tooltip = _a.tooltip, onClick = _a.onClick, icon = _a.icon;
    return _jsx(Tooltip, __assign({ title: tooltip }, { children: _jsx(IconButton, __assign({ size: "small", onClick: onClick }, { children: icon })) }));
}
