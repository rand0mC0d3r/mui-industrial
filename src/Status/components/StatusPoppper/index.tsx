/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { alpha, Box, ClickAwayListener, Popper } from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  CSSProperties, HTMLAttributes, MouseEvent,
  ReactNode, useContext, useEffect,
  useRef, useState,
} from 'react';
import {
  Highlight, PlacementPosition, PopperWidth, SettingsObject, StatusObject,
  StatusOptionsProps, StatusOptionsSeparatorProps, StatusPopperProps,
} from '../../../index.types';
import InternalHeader from '../../../internal/InternalHeader';
import DataProvider from '../../../Store';
import StatusCore from '../StatusCore';

const StyledBox = styled(Box)<{ width?: PopperWidth }>(({ theme, width }) => ({
  width: `${width ? `${theme.breakpoints.values[width] / 1.42}px` : 'auto'}`,
  height: `${width ? `${theme.breakpoints.values[width] / 1.24}px` : 'auto'}`,
}));

const StyledPopper = styled(Popper)(() => ({
  zIndex: '101',
}));

const StyledContainer = styled('div')<{
  elevation?: number,
  highlight: string,
  variant: string,
  decoration?: string
}>(({
  theme,
  elevation,
  highlight,
  variant,
  decoration,
} : {
  theme: any,
  elevation?: number,
  highlight: string,
  variant: string,
  decoration?: string
}) => ({
  display: 'flex',
  alignItems: 'stretch',
  position: 'relative',
  flexDirection: 'column',
  padding: 0,
  backdropFilter: 'blur(8px)',

  backgroundColor: `${alpha(theme.palette.background.default, 0.75)}`,
  borderRadius: `${theme.shape.borderRadius}px`,
  margin: decoration === 'true' ? `${theme.spacing(0.75)} 0px` : `${theme.spacing(0.25)} 0px`,
  border: variant === 'default'
    ? '2px solid transparent'
    : `2px solid ${highlight !== 'default' ? theme.palette[highlight].main : 'transparent'}`,
  boxShadow: theme.shadows[elevation || 2],
}));

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
} : {
  id: string,
  order?: number,
  disabled?: boolean,
  highlight?: Highlight,
  options: StatusOptionsProps,
  secondary?: boolean,
  tooltip?: ReactNode | string,
  onClick?: (event: MouseEvent<HTMLDivElement>) => void,
  onContextMenu?: (event: MouseEvent<HTMLDivElement>) => void,
  style?: CSSProperties,
  className?: HTMLAttributes<HTMLDivElement>['className'],
  children?: ReactNode,
}) : JSX.Element =>{
  const {
    status,
    settings,
  } : {
    status: StatusObject[],
    settings: SettingsObject,
  } = useContext(DataProvider);
  const [statusObject, setStatusObject] = useState<StatusObject | null>(null);
  const [anchorEl, setAnchorEl] = useState(null);
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

  useEffect(() => {
    if (!options.open) {
      if (!statusObject?.keepOpen || !settings.hasLock) {
        setAnchorEl(null);
      }
      return;
    }
    if (!popperReference?.current) return;
    setAnchorEl(popperReference.current);
  }, [options.open, statusObject, settings.hasLock]);

  const determineHighlight = () => (statusObject?.keepOpen || open) ? Highlight.PRIMARY : highlight;

  return <>
    {/* {open ? 'force open' : 'force close'} */}
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
