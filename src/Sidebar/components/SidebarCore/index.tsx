/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import { Button, IconButton, Paper, Tooltip, Typography } from '@mui/material';
import { cloneElement, forwardRef, useCallback, useContext, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  ISidebarObject, SidebarObject,
} from '../../../index.types';
import DataProvider, { composeDomId, packageName } from '../../../Store';

const componentId = 'statusBar';

export const StatusCore = forwardRef((props: ISidebarObject, ref: any) => {
  const {
    id,
    icon,
    title,
    tooltip,
    children,
    secondary,
  } = props satisfies ISidebarObject;

  const { handleSidebarRegister, sidebars, updateSidebarIndex } = useContext(DataProvider);
  const [ownId, setOwnId] = useState<string | null>();
  const [sidebarObject, setSidebarObject] = useState<SidebarObject | null>(null);
  const [elementFound, setElementFound] = useState<HTMLElement | null>(null);
  const [elementFoundPanel, setElementFoundPanel] = useState<HTMLElement | null>(null);

  const callbackHandleSidebarAnnouncement = useCallback(() => {
    handleSidebarRegister({ id, children, secondary });
  }, [id, children, secondary, handleSidebarRegister]);

  useEffect(() => {
    if (id && ownId && sidebarObject === null && !sidebars.some(sidebar => id === sidebar.id)) {
      callbackHandleSidebarAnnouncement();
    }
  }, [id, ownId, sidebarObject, sidebars, callbackHandleSidebarAnnouncement]);

  useEffect(() => {
    const sidebarObjectFound = sidebars.find(sidebar => id === sidebar.id);
    if ((sidebarObject === null || sidebarObject?.visible !== sidebarObjectFound?.visible) && sidebarObjectFound) {
      setSidebarObject(sidebarObjectFound);
    }
  }, [sidebars, id, sidebarObject]);

  useEffect(() => {
    if (sidebarObject !== null) {
      setElementFound(document.getElementById(composeDomId(packageName, ['sidebar'])) || null);
      setElementFoundPanel(document.getElementById(composeDomId(packageName, ['sidebar', 'panel'])) || null);
    }
  }, [sidebarObject]);

  useEffect(() => {
    setOwnId((Math.random() + 1).toString(36).substring(7));
  }, []);

  // eslint-disable-next-line no-console
  useEffect(() => { if (!id) { console.error('Please define an id for the status bar item'); } }, [id]);

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

  return <>
    {(sidebarObject !== null && !!id && elementFound)
    && <>
    {createPortal(
      (sidebarObject.visible && children) && <Tooltip key={id} title={title} arrow placement='right'>
          <Button
          onClick={() => updateSidebarIndex(id)}
          variant="text" style={{ minWidth: 'unset' }}>
            {cloneElement(icon, {
              style: { fontSize: '28px' },
            //  color: index === selectedIndex ? 'primary' : 'action'
            })}
          </Button>
        </Tooltip>,
      elementFound,
    )}
    {/* {createPortal(
      (sidebarObject.visible && children) && <div>{icon}</div>,
      elementFound,
    )} */}
    </>}
  </>;
});

export default StatusCore;
