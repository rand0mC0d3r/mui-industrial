/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import MyLocationOutlinedIcon from '@mui/icons-material/MyLocationOutlined';
import { IconButton, Tooltip } from '@mui/material';
import { useCallback, useContext, useEffect, useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Severity, SnackbarObject } from '../index.types';
import DataProvider, { composeDomId, DataContextInterface } from '../Store';

const componentId = 'snackBar';

export default ({
  severity,
  message,
  onClick,
  autoHideDuration = 6000,
  actions,
  source,
  code,
} : {
  severity: Severity,
  message: string,
  onClick?: any,
  autoHideDuration?: number,
  actions?: any,
  source?: string,
  code?: string,
}): JSX.Element => {
  const {
    snackbar,
    handleSnackbarAnnouncement,
  } : {
    snackbar: SnackbarObject[],
    handleSnackbarAnnouncement: DataContextInterface['handleSnackbarAnnouncement']
  } = useContext(DataProvider);
  const [ownId, setOwnId] = useState<string | null>();
  const [announced, setAnnounced] = useState<boolean>(false);
  const [snackbarObject, setSnackbarObject] = useState<SnackbarObject | null>(null);
  const [elementFound, setElementFound] = useState<HTMLElement | null>(null);

  const callbackHandleStatusAnnouncement = useCallback(() => {
    if (!ownId) return;
    handleSnackbarAnnouncement({ ownId, actions, source, severity, message, code, autoHideDuration });
  }, [severity, ownId, message, actions, source, code, autoHideDuration, handleSnackbarAnnouncement]);

  useLayoutEffect(() => {
    if (snackbarObject !== null && ownId) {
      setElementFound(document.getElementById(composeDomId(componentId, [ownId, 'customAction'])));
    }
  }, [snackbarObject, ownId]);

  useEffect(() => {
    if (ownId && !announced && snackbarObject === null) {
      callbackHandleStatusAnnouncement();
      setAnnounced(true);
    }
  }, [ownId, announced, snackbarObject, callbackHandleStatusAnnouncement]);

  useEffect(() => {
    if (ownId && announced) {
      const snackbarObjectFound = snackbar.find(({ uniqueId }) => uniqueId === ownId);
      if (snackbarObjectFound) {
        setSnackbarObject(snackbarObjectFound);
      }
    }
  }, [snackbar, announced, ownId, snackbarObject]);

  useEffect(() => { setOwnId((Math.random() + 1).toString(36).substring(7)); }, []);

  return <>
    {snackbarObject !== null && onClick && !!ownId && elementFound && createPortal(<>
      <Tooltip title="Take action ...">
        <IconButton onClick={onClick} color="inherit" size="small">
          <MyLocationOutlinedIcon color="inherit" />
        </IconButton>
      </Tooltip>
    </>, elementFound)}
  </>;
};
