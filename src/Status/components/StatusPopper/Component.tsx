/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ClickAwayListener } from '@mui/material';
import { useContext, useEffect, useRef } from 'react';
import InternalHeader from '../../../Api/InternalHeader';
import { Highlight, PlacementPosition, SettingsObject } from '../../../index.types';
import DataProvider from '../../../Store';
import { StyledBox, StyledContainer, StyledPopper } from './css';

export default ({
  id,
  enrichedPopper,
  highlight = Highlight.DEFAULT,
  statusObject,
  anchorEl,
  setAnchorEl,
  options,
  open,
  secondary = false,
} : any) : JSX.Element => {
  const { settings } : { settings: SettingsObject } = useContext(DataProvider);

  const determineHighlight = (statusObject?.keepOpen || open) ? Highlight.PRIMARY : highlight;

  const handleOnClose = (event: any) => {
    if (enrichedPopper.onClose && !statusObject?.keepOpen) enrichedPopper.onClose(event);
    if (!statusObject?.keepOpen || !settings.hasLock) setAnchorEl(null);
  };

  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!boxRef.current) return;
    const element = boxRef.current as HTMLElement;
    element.focus();
  }, []);

  return <>
    <StyledPopper {...{
      keepMounted: statusObject?.keepOpen,
      open: open && Boolean(anchorEl),
      anchorEl,
      onClose: enrichedPopper.onClose,
      elevation: enrichedPopper.elevation,
      placement: `${settings.position === PlacementPosition.TOP ? 'bottom' : 'top'}-${secondary ? 'end' : 'start'}` as any,
      id: `mui-status-panel-popover-${id}`,
    }}
    >
      <ClickAwayListener onClickAway={event => handleOnClose(event)}>
        <StyledContainer
         {...{
           elevation: enrichedPopper.elevation,
           highlight: determineHighlight.toString(),
           variant: settings.variant.toString(),
           decoration: enrichedPopper.hasDecoration?.toString(),
         }}
        >
          <StyledBox
            ref={boxRef}
            tabIndex={0}
            onKeyDown={(event: { key: string; }) => {
              if (event.key === 'Escape') handleOnClose(event);
            }}
            display="flex"
            alignItems="stretch"
            justifyContent="space-between"
            flexDirection="column"
            width={enrichedPopper.width}
            height={enrichedPopper.height}
          >
            {options?.content}
          </StyledBox>
          {enrichedPopper.hasToolbar && <InternalHeader {...{
            sx: {
              p: 1,
            },
            id,
            topBorder: true,
            actions: options.actions,
            title: options?.title,
          }}
          />}
        </StyledContainer>
      </ClickAwayListener>
    </StyledPopper>
  </>;
};
