/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { MouseEvent, useContext, useEffect, useRef, useState } from 'react';
import {
  Highlight, StatusObject,
  StatusOptionsProps, StatusOptionsSeparatorProps, StatusPopperJSXProps, StatusPopperProps,
} from '../../../index.types';
import DataProvider from '../../../Store';
import StatusCore from '../StatusCore';
import Component from './Component';

const defaultPopperOptions = {
  elevation: 2,
  hasToolbar: true,
  onClose: () => {},
  hasArrow: false,
  hasDecoration: false,
} as StatusPopperProps;

const defaultSeparatorOptions = {
  start: false,
  end: false,
} as StatusOptionsSeparatorProps;

export default ({
  id,
  order,
  disabled,
  highlight = Highlight.DEFAULT,
  options,
  secondary = false,
  tooltip = '',
  onClick,
  onContextMenu,
  style,
  className,
  children,
} : StatusPopperJSXProps) : JSX.Element => {
  const [statusObject, setStatusObject] = useState<StatusObject | null>(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const { status } : { status: StatusObject[] } = useContext(DataProvider);
  const popperReference = useRef();

  const enrichedPopper = { ...defaultPopperOptions, ...options?.popper } as StatusPopperProps;
  const enrichedSeparators = { ...defaultSeparatorOptions, ...options?.separators } as StatusOptionsSeparatorProps;

  const open = Boolean(anchorEl);

  const handleOnClick = (event: MouseEvent<HTMLDivElement>) => {
    if (statusObject?.keepOpen) return;
    if (onClick) onClick(event);
    setAnchorEl(anchorEl ? null : event?.currentTarget as any);
  };

  useEffect(() => {
    const foundObject = status.find(item => item.uniqueId === id);
    if (!foundObject) return;
    setStatusObject(foundObject);
  }, [status, id]);

  // TODO: figure out what this is for - this is the external auto open/close
  // useEffect(() => {
  //   console.log('open', options.open, statusObject?.keepOpen, settings.hasLock);
  //   if (!options.open) {
  //     if (!statusObject?.keepOpen || !settings.hasLock) {
  //       setAnchorEl(null);
  //     }
  //     return;
  //   }
  //   if (!popperReference?.current) return;
  //   setAnchorEl(popperReference.current);
  // }, [options.open, statusObject, settings.hasLock]);

  const determineHighlight = () => (statusObject?.keepOpen || open) ? Highlight.PRIMARY : highlight;

  return <>
    <StatusCore {...{
      ref: popperReference,

      id,

      order,
      disabled,
      tooltip: open ? null : tooltip,
      highlight: determineHighlight(),
      secondary,

      options: {
        separators: enrichedSeparators,
        popper: {
          ...enrichedPopper,
          hasArrow: open && enrichedPopper.hasArrow,
        },
      } as StatusOptionsProps,

      onClick: handleOnClick,
      onContextMenu,

      style,
      className,
    }}>
      {children}
    </StatusCore>

    <Component {...{ id, enrichedPopper, highlight, statusObject, anchorEl, setAnchorEl, options, secondary }} />
  </>;
};
