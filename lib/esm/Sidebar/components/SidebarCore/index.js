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
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import { Button, Tooltip } from '@mui/material';
import { cloneElement, forwardRef, useCallback, useContext, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import DataProvider, { composeDomId } from '../../../Store';
export var StatusCore = forwardRef(function (props, ref) {
    var _a = props, id = _a.id, icon = _a.icon, tooltip = _a.tooltip, children = _a.children, additional = _a.additional;
    var _b = useContext(DataProvider), handleSidebarRegister = _b.handleSidebarRegister, sidebars = _b.sidebars, updateSidebarIndex = _b.updateSidebarIndex;
    var sidebarIndex = useContext(DataProvider).settings.sidebarIndex;
    var _c = useState(), ownId = _c[0], setOwnId = _c[1];
    var _d = useState(null), sidebarObject = _d[0], setSidebarObject = _d[1];
    var _e = useState(null), elementFoundActions = _e[0], setElementFoundActions = _e[1];
    var _f = useState(null), elementFoundAdditional = _f[0], setElementFoundAdditional = _f[1];
    var _g = useState(null), elementFoundPanel = _g[0], setElementFoundPanel = _g[1];
    var callbackHandleSidebarAnnouncement = useCallback(function () {
        handleSidebarRegister({ id: id, children: children, additional: additional });
    }, [id, children, additional, handleSidebarRegister]);
    useEffect(function () {
        if (id && ownId && sidebarObject === null && !sidebars.some(function (sidebar) { return id === sidebar.id; })) {
            callbackHandleSidebarAnnouncement();
        }
    }, [id, ownId, sidebarObject, sidebars, callbackHandleSidebarAnnouncement]);
    useEffect(function () {
        var sidebarObjectFound = sidebars.find(function (sidebar) { return id === sidebar.id; });
        if ((sidebarObject === null || (sidebarObject === null || sidebarObject === void 0 ? void 0 : sidebarObject.visible) !== (sidebarObjectFound === null || sidebarObjectFound === void 0 ? void 0 : sidebarObjectFound.visible)) && sidebarObjectFound) {
            setSidebarObject(sidebarObjectFound);
        }
    }, [sidebars, id, sidebarObject]);
    useEffect(function () {
        if (sidebarObject !== null) {
            setElementFoundActions(document.getElementById(composeDomId('sidebar', ['actions'])) || null);
            setElementFoundAdditional(document.getElementById(composeDomId('sidebar', ['additional'])) || null);
            setElementFoundPanel(document.getElementById(composeDomId('sidebar', ['panel'])) || null);
        }
    }, [sidebarObject]);
    useEffect(function () {
        setOwnId((Math.random() + 1).toString(36).substring(7));
    }, []);
    // eslint-disable-next-line no-console
    useEffect(function () { if (!id) {
        console.error('Please define an id for the status bar item');
    } }, [id]);
    // useEffect(() => {
    //   return () => {
    //     // console.log('die');
    //     //   callbackHandleStatusDestroy();
    //   };
    // }, []);
    // useEffect(() => {
    //   if (statusObject !== null && !!id && elementFound) {
    //     onLoad(ref);
    //   }
    // }, [statusObject, id, elementFound, ref, onLoad]);
    var renderAction = function () { return _jsx(Tooltip, __assign({ title: tooltip, arrow: true, placement: 'right' }, { children: _jsx(Button, __assign({ ref: ref, onClick: function () { return updateSidebarIndex(id); }, variant: "text", style: { minWidth: 'unset' } }, { children: cloneElement(icon, {
                style: { fontSize: '28px' },
                color: id === sidebarIndex ? 'primary' : 'action',
            }) })) }), id); };
    return _jsx(_Fragment, { children: (sidebarObject !== null && !!id && sidebarObject.visible && children)
            && _jsx(_Fragment, { children: (elementFoundActions) && createPortal(_jsx(Tooltip, __assign({ title: tooltip, arrow: true, placement: 'right' }, { children: _jsx(Button, __assign({ ref: ref, onClick: function () { return updateSidebarIndex(id); }, variant: "text", style: { minWidth: 'unset' } }, { children: cloneElement(icon, {
                            style: { fontSize: '28px' },
                            color: id === sidebarIndex ? 'primary' : 'action',
                        }) })) }), id), elementFoundActions) }) });
});
export default StatusCore;
