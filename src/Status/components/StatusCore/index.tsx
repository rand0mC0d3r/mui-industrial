/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import { Tooltip } from '@mui/material';
import {
  CSSProperties, forwardRef,
  MouseEvent, ReactNode, useCallback,
  useContext, useEffect, useLayoutEffect, useState,
} from 'react';
import { createPortal } from 'react-dom';
import {
  Highlight, PlacementPosition, SettingsObject, StatusObject, StatusOptionsProps,
  StatusOptionsSeparatorProps, StatusPopperProps,
} from '../../../index.types';
import DataProvider, { composeDomId } from '../../../Store';
import { SArrowDown, SArrowUp, SDiv, SSpan, STooltip } from './css';

const componentId = 'statusBar';

const defaultSeparatorOptions = {
  start: false,
  end: false,
} satisfies StatusOptionsSeparatorProps;

// const defaultPopperOptions = {
//   hasArrow: false,
// } satisfies StatusPopperProps;

type StatusCoreProps = {
  id: string,
  order?: number,
  style?: CSSProperties,
  onClick?: (e: MouseEvent<HTMLDivElement>) => void,
  onContextMenu?: (e: MouseEvent<HTMLDivElement>) => void,
  disabled?: boolean,
  highlight?: Highlight,
  tooltip?: ReactNode,
  children?: ReactNode,
  options?: StatusOptionsProps,
  secondary?: boolean,
  onLoad?: (ref: any) => void,
};

export const StatusCore = forwardRef((props: StatusCoreProps, ref: any) => {
  const {
    id,
    order,
    style,
    onClick,
    onContextMenu,
    disabled = false,
    highlight = Highlight.DEFAULT,
    tooltip,
    children,
    options,
    secondary = false,
    onLoad = () => { },
  } = props satisfies StatusCoreProps;

  const { status, handleStatusAnnouncement, handleStatusUpdate } = useContext(DataProvider);
  const { allowRightClick, position } = useContext(DataProvider).settings as SettingsObject;
  const [ownId, setOwnId] = useState<string | null>();
  const [statusObject, setStatusObject] = useState<StatusObject | null>(null);
  const [elementFound, setElementFound] = useState<HTMLElement | null>(null);

  const combinedSeparators = { ...defaultSeparatorOptions, ...options?.separators };
  // const combinedPopper = { ...defaultPopperOptions, ...options?.popper };

  const callbackHandleStatusAnnouncement = useCallback(() => {
    handleStatusAnnouncement({ id, ownId, order, secondary, options });
  }, [id, secondary, order, ownId, options, handleStatusAnnouncement]);

  // const callbackHandleStatusAnnouncement = useCallback(() => {
  //   handleStatusAnnouncement({ id, ownId, order, secondary, options });
  // }, [id, secondary, order, ownId, options, handleStatusAnnouncement]);

  // const callbackHandleStatusDestroy = useCallback(() => { handleStatusDestroy({ id }); }, [id, handleStatusDestroy]);

  const handleOnClick = (e: MouseEvent<HTMLDivElement>) => {
    if (onClick !== undefined && !disabled) {
      e.preventDefault();
      onClick(e);
      // handleStatusUpdate({ id, ownId, children });
    }
  };

  const handleOnContextMenu = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (allowRightClick && onContextMenu !== undefined && !disabled) {
      onContextMenu(e);
    }
  };

  useEffect(() => {
    if (id && ownId && statusObject === null && !status.some(({ uniqueId }) => uniqueId === id)) {
      callbackHandleStatusAnnouncement();
    }
  }, [id, ownId, statusObject, status, callbackHandleStatusAnnouncement]);

  // useEffect(() => {
  //   if (id && ownId && statusObject === null && !status.some(({ uniqueId }) => uniqueId === id)) {
  //     callbackHandleStatusAnnouncement();
  //   }
  // }, [id, ownId, secondary, order, statusObject, status, callbackHandleStatusAnnouncement]);

  useEffect(() => {
    const statusObjectFound = status.find(({ uniqueId }) => uniqueId === id);
    if ((statusObject === null || statusObject?.visible !== statusObjectFound?.visible) && statusObjectFound) {
      setStatusObject(statusObjectFound);
    }
  }, [status, id, statusObject]);

  useLayoutEffect(() => {
    if (statusObject !== null) {
      setElementFound(document.getElementById(composeDomId(componentId, [secondary ? 'secondary' : 'primary'])) || null);
    }
  }, [secondary, statusObject]);

  useEffect(() => {
    setOwnId((Math.random() + 1).toString(36).substring(7));
  }, []);

  // eslint-disable-next-line no-console
  useEffect(() => { if (!id) { console.error('Please define an id for the status bar item'); } }, [id]);

  useEffect(() => {
    return () => {
      // console.log('die');
      //   callbackHandleStatusDestroy();
    };
  }, []);

  useEffect(() => {
    if (statusObject !== null && !!id && elementFound) {
      onLoad(ref);
    }
  }, [statusObject, id, elementFound, ref, onLoad]);

  return <>
    {(statusObject !== null && !!id && elementFound)
    && createPortal(
      (statusObject.visible && children) && <SDiv {...{
        id,
        ref,
        key: `mui-status-${id}`,
        onClick: handleOnClick,
        onContextMenu: handleOnContextMenu,

        style: { ...style, order: order || statusObject.index },

        highlight,
        secondary: secondary.toString(),
        startSeparator: combinedSeparators.start?.toString(),
        endSeparator: combinedSeparators.end?.toString(),
        hasclick: (!!onClick).toString(),
        isdisabled: disabled.toString(),
      }}
      >
        {/* {combinedPopper.hasArrow && <>
          {position === PlacementPosition.BOTTOM
            ? <SArrowUp color="primary" />
            : <SArrowDown position={position.toString()} color="primary" />}
        </>} */}
        {tooltip
          ? <Tooltip title={<STooltip>{tooltip}</STooltip>} arrow>
            <SSpan>{children}</SSpan>
          </Tooltip>
          : <SSpan>{children}</SSpan>}
      </SDiv>,
      elementFound,
    )}
  </>;
});

export default StatusCore;
