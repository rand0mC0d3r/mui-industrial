import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useState } from 'react';
import InternalAlert from '../../internal/InternalAlert';
import DataProvider from '../../Store';
export default (function (_a) {
    var snackbarId = _a.snackbarId;
    var snackbar = useContext(DataProvider).snackbar;
    var _b = useState(), snackbarObject = _b[0], setSnackbarObject = _b[1];
    useEffect(function () {
        setSnackbarObject(snackbar.find(function (_a) {
            var id = _a.id;
            return id === snackbarId;
        }));
    }, [snackbarId, snackbar]);
    return _jsx(_Fragment, { children: snackbarId
            && snackbarObject
            && _jsx(InternalAlert, { severity: snackbarObject.severity, code: snackbarObject.code, id: snackbarObject.id, message: snackbarObject.message }) });
});
