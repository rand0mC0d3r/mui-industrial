/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ClickAwayListener } from '@mui/material';
import { MouseEvent, useContext, useEffect, useRef, useState } from 'react';
import {
  Highlight, PlacementPosition, SettingsObject, StatusObject,
  StatusOptionsProps, StatusOptionsSeparatorProps, StatusPopperJSXProps, StatusPopperProps,
} from '../../../index.types';
import InternalHeader from '../../../internal/InternalHeader';
import DataProvider from '../../../Store';
import StatusCore from '../StatusCore';
import { StyledBox, StyledContainer, StyledPopper } from './css';

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
  const { settings } : { settings: SettingsObject } = useContext(DataProvider);
  const popperReference = useRef();

  const enrichedPopper = { ...defaultPopperOptions, ...options?.popper } as StatusPopperProps;
  const enrichedSeparators = { ...defaultSeparatorOptions, ...options?.separators } as StatusOptionsSeparatorProps;

  const open = Boolean(anchorEl);

  const handleOnClick = (event: MouseEvent<HTMLDivElement>) => {
    if (statusObject?.keepOpen) return;
    if (onClick) onClick(event);
    setAnchorEl(anchorEl ? null : event?.currentTarget as any);
  };

  const handleOnClose = (event: any) => {
    if (enrichedPopper.onClose && !statusObject?.keepOpen) enrichedPopper.onClose(event);
    if (!statusObject?.keepOpen || !settings.hasLock) setAnchorEl(null);
  };

  useEffect(() => {
    const foundObject = status.find(item => item.uniqueId === id);
    if (!foundObject) return;
    setStatusObject(foundObject);
  }, [status, id]);

  // TODO: figure out what this is for
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
      id,
      order,
      ref: popperReference,
      disabled,
      onContextMenu,
      className,
      tooltip: open ? null : tooltip,
      options: {
        separators: enrichedSeparators,
        popper: {
          ...enrichedPopper,
          hasArrow: open && enrichedPopper.hasArrow,
        },
      } as StatusOptionsProps,
      highlight: determineHighlight(),
      secondary,
      onClick: handleOnClick,
      style,
    }}
    >
      {children}
    </StatusCore>
    <StyledPopper {...{
      keepMounted: statusObject?.keepOpen,
      open,
      anchorEl,
      onClose: enrichedPopper.onClose,
      elevation: enrichedPopper.elevation,
      placement: `${settings.position === PlacementPosition.TOP ? 'bottom' : 'top'}-${secondary ? 'end' : 'start'}` as any,
      id: `mui-status-panel-popover-${id}`,
    }}
    >
      <ClickAwayListener onClickAway={event => handleOnClose(event)}>
        <StyledContainer {...{
          elevation: enrichedPopper.elevation,
          highlight: determineHighlight().toString(),
          variant: settings.variant.toString(),
          decoration: enrichedPopper.hasDecoration?.toString(),
        }}
        >
          <StyledBox
            display="flex"
            alignItems="stretch"
            justifyContent="space-between"
            flexDirection="column"
            width={enrichedPopper.width}
          >
            {options?.content}
          </StyledBox>
          {enrichedPopper.hasToolbar && <InternalHeader {...{
            id,
            actions: enrichedPopper.actions,
            title: options?.title,
          }}
          />}
        </StyledContainer>
      </ClickAwayListener>
    </StyledPopper>
  </>;
};
