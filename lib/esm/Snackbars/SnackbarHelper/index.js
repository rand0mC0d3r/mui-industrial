import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useContext, useEffect, useState } from 'react';
import InternalAlert from '../../Api/InternalAlert';
import DataProvider from '../../Store';
export default (function (_a) {
    var snackbarId = _a.snackbarId;
    var snackbars = useContext(DataProvider).snackbars;
    var _b = useState(), snackbarObject = _b[0], setSnackbarObject = _b[1];
    useEffect(function () {
        setSnackbarObject(snackbars.find(function (_a) {
            var id = _a.id;
            return id === snackbarId;
        }));
    }, [snackbarId, snackbars]);
    return _jsx(_Fragment, { children: snackbarId
            && snackbarObject
            && _jsx(InternalAlert, { isRemoveFlag: true, autoHideDuration: snackbarObject.autoHideDuration, actions: snackbarObject.actions, severity: snackbarObject.severity, code: snackbarObject.code, id: snackbarObject.id, message: snackbarObject.message }) });
});
