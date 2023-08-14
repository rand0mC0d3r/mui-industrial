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
  elevation: 4,
  hasToolbar: true,
  onClose: () => {},
  open: false,
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
  const [open, setOpen] = useState<boolean>(false);
  const { status } : { status: StatusObject[] } = useContext(DataProvider);
  const popperReference = useRef();

  const enrichedPopper = { ...defaultPopperOptions, ...options?.popper } satisfies StatusPopperProps;
  const enrichedSeparators = { ...defaultSeparatorOptions, ...options?.separators } satisfies StatusOptionsSeparatorProps;

  const handleOnClick = (event: MouseEvent<HTMLDivElement>) => {
    if (statusObject?.keepOpen) return;
    if (onClick) onClick(event);
    setAnchorEl(open ? null : event?.currentTarget as any);
    setOpen(p => !p);
  };

  useEffect(() => {
    const foundObject = status.find(item => item.uniqueId === id);
    if (!foundObject) return;
    setStatusObject(foundObject);
  }, [status, id]);

  useEffect(() => {
    if (!anchorEl) {
      setOpen(false);
    }
  }, [anchorEl]);

  useEffect(() => {
    if (options?.open) {
      setOpen(options?.open);
    }
  }, [options.open]);

  useEffect(() => {
    if (!options.open) {
      if (!statusObject?.keepOpen) {
        setAnchorEl(null);
      }
      return;
    }
    if (!popperReference?.current) return;
    setAnchorEl(popperReference.current);
  }, [statusObject, options]);

  const determineHighlight = () => (statusObject?.keepOpen || options.open !== undefined ? options.open : false)
    ? Highlight.PRIMARY
    : highlight;

  return <>
    <StatusCore {...{
      ref: popperReference,
      onLoad: ref => {
        setAnchorEl(ref.current);
      },
      id,

      order,
      disabled,
      tooltip: options.open ? null : tooltip,
      highlight: determineHighlight(),
      secondary,

      options: {
        separators: enrichedSeparators,
        popper: {
          ...enrichedPopper,
          hasArrow: options.open && enrichedPopper.hasArrow,
        },
      } as StatusOptionsProps,

      onClick: handleOnClick,
      onContextMenu,

      style: { ...style, cursor: statusObject?.keepOpen ? 'not-allowed' : 'pointer' },
      className,
    }}>
      {children}
    </StatusCore>

    <Component {...{
      id,
      enrichedPopper,
      highlight,
      statusObject,
      open,
      anchorEl,
      setAnchorEl,
      options,
      secondary,
    }} />
  </>;
};
