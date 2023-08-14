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
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloseIcon from '@mui/icons-material/Close';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SubtitlesOutlinedIcon from '@mui/icons-material/SubtitlesOutlined';
import { Box, IconButton, Tooltip } from '@mui/material';
import { useContext, useEffect } from 'react';
import DataProvider, { composeDomId } from '../../../../Store';
import { SCustomAction, SHeader, SMessage, STitle } from './css';
var componentId = 'snackBar';
export default (function (_a) {
    var code = _a.code, id = _a.id, actions = _a.actions, severity = _a.severity, message = _a.message, _b = _a.isRemoveFlag, isRemoveFlag = _b === void 0 ? false : _b, isExpanded = _a.isExpanded, setIsExpanded = _a.setIsExpanded;
    var handleSnackbarHide = useContext(DataProvider).handleSnackbarHide;
    var toggleExpanded = function () {
        if ((actions === null || actions === void 0 ? void 0 : actions.length) > 0)
            return;
        setIsExpanded(!isExpanded);
    };
    var closeAlert = function () {
        handleSnackbarHide({ id: id });
    };
    useEffect(function () {
        if (actions) {
            setIsExpanded(true);
        }
    }, [actions, setIsExpanded]);
    var getMessage = function (ellipsis) {
        if (ellipsis === void 0) { ellipsis = false; }
        return _jsx(SMessage, __assign({ ellipsis: ellipsis.toString() }, { children: message }));
    };
    return _jsxs(SHeader, __assign({ expanded: isExpanded.toString() }, { children: [(isExpanded)
                ? _jsx(STitle, __assign({ actions: actions, onDoubleClick: toggleExpanded, variant: "subtitle1", color: "inherit" }, { children: severity }))
                : _jsx(_Fragment, { children: !actions
                        ? _jsx(_Fragment, { children: getMessage(true) })
                        : _jsx(STitle, __assign({ actions: actions, onDoubleClick: toggleExpanded, variant: "subtitle1", color: "inherit" }, { children: severity })) }), _jsxs(Box, __assign({ display: 'flex', flexDirection: 'row', gap: 1, alignItems: "center" }, { children: [!isExpanded && code && _jsx(Tooltip, __assign({ arrow: true, title: "It contains additional console details" }, { children: _jsx(SubtitlesOutlinedIcon, { color: "disabled" }) })), _jsx(SCustomAction, { id: composeDomId(componentId, [id, 'customAction']) }), !actions && _jsx(Tooltip, __assign({ arrow: true, title: "Expand/Collapse alert" }, { children: _jsx(IconButton, __assign({ color: "inherit", size: "small", onClick: toggleExpanded }, { children: !isExpanded
                                ? _jsx(ExpandMoreIcon, { fontSize: "small" })
                                : _jsx(ExpandLessIcon, { fontSize: "small" }) })) })), _jsx(Tooltip, __assign({ arrow: true, title: isRemoveFlag ? 'Close alert' : 'Dismiss alert' }, { children: _jsx(IconButton, __assign({ color: "inherit", onClick: closeAlert, size: "small" }, { children: isRemoveFlag ? _jsx(CloseIcon, { fontSize: "small" }) : _jsx(ArrowForwardIcon, { fontSize: "small" }) })) }))] }))] }));
});
