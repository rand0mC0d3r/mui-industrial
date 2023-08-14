/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import { Button, Tooltip } from '@mui/material';
import { cloneElement, forwardRef, useCallback, useContext, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  ISidebarObject, SettingsObject, SidebarObject,
} from '../../../../index.types';
import DataProvider, { composeDomId } from '../../../../Store';

export const StatusCore = forwardRef((props: ISidebarObject, ref: any) => {
  const {
    id,
    icon,
    tooltip,
    children,
    additional,
  } = props satisfies ISidebarObject;

  const { handleSidebarRegister, sidebars, updateSidebarIndex } = useContext(DataProvider);
  const { sidebarIndex } = useContext(DataProvider).settings as SettingsObject;
  const [ownId, setOwnId] = useState<string | null>();
  const [sidebarObject, setSidebarObject] = useState<SidebarObject | null>(null);

  const [elementFoundActions, setElementFoundActions] = useState<HTMLElement | null>(null);
  const [elementFoundAdditional, setElementFoundAdditional] = useState<HTMLElement | null>(null);
  const [elementFoundPanel, setElementFoundPanel] = useState<HTMLElement | null>(null);

  const callbackHandleSidebarAnnouncement = useCallback(() => {
    handleSidebarRegister({ id, children, additional });
  }, [id, children, additional, handleSidebarRegister]);

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
      setElementFoundActions(document.getElementById(composeDomId('sidebar', ['actions'])) || null);
      setElementFoundAdditional(document.getElementById(composeDomId('sidebar', ['additional'])) || null);
      setElementFoundPanel(document.getElementById(composeDomId('sidebar', ['panel'])) || null);
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

  const renderAction = <Tooltip key={id} title={tooltip} arrow placement='right'>
      <Button
        ref={ref}
        onClick={() => updateSidebarIndex(id)}
        variant="text" style={{ minWidth: 'unset' }}>
          {cloneElement(icon, {
            style: { fontSize: '28px' },
            color: id === sidebarIndex ? 'primary' : 'action',
          })}
      </Button>
    </Tooltip>;

  return <>
    {(sidebarObject !== null && !!id && sidebarObject.visible && children)
    && <>
      {(!additional && elementFoundActions) && createPortal(renderAction,
        elementFoundActions,
      )}
      {(additional && elementFoundAdditional) && createPortal(renderAction,
        elementFoundAdditional,
      )}
      {elementFoundPanel && sidebarIndex === id && createPortal(
        (sidebarObject.visible && children) && children,
        elementFoundPanel,
      )}
    </>}
  </>;
});

export default StatusCore;
