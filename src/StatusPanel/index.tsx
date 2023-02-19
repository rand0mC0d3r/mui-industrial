/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import { alpha, Box, ClickAwayListener, Popper } from '@mui/material'
import { styled } from '@mui/material/styles'
import { CSSProperties, MouseEvent, ReactNode, useContext, useEffect, useState } from 'react'
import { Highlight, PanelWidth, PlacementPosition, PopoverActions, SettingsObject, StatusObject } from '../index.types'
import InternalHeader from '../internal/InternalHeader'
import StatusCore from '../StatusCore'
import DataProvider from '../Store'

const StyledBox = styled(Box)<{width?: PanelWidth }>(({ theme, width } : { theme: any, width?: PanelWidth}) => ({
  width: `${width ? `${theme.breakpoints.values[width] / 1.42}px` : 'auto'}`,
  height: `${width ? `${theme.breakpoints.values[width] / 1.24}px` : 'auto'}`,
}))

const StyledPopper = styled(Popper)(() => ({
  zIndex: '101',
}))

const StyledContainer = styled('div')<{elevation: number, highlight: string, variant: string, decoration: string }>(({
  theme,
  elevation,
  highlight,
  variant,
  decoration
} : {
	theme: any,
	elevation: number,
	highlight: string
	variant: string,
	decoration: string
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
  boxShadow: theme.shadows[elevation]
}))

export default function ({
  id,
  secondary = false,
  elevation = 2,
  width,
  style,
  onClick,
  onClose,
  highlight = Highlight.DEFAULT,
  tooltip = '',
  children,
  popover,
  popoverTitle,
  popoverActions,
  hasToolbar = true,
  hasDecoration = true,
  endSeparator = false,
  startSeparator = false,
} : {
  id: string,
  secondary?: boolean,
  elevation?: number,
  width?: PanelWidth,
  style?: CSSProperties,
  onClick?: (event: MouseEvent<HTMLDivElement>) => void,
  onClose?: (event: MouseEvent<HTMLDivElement>) => void,
  highlight?: Highlight,
  tooltip?: ReactNode | string,
  children?: ReactNode,
  popover?: any,
  popoverTitle?: string,
  popoverActions?: PopoverActions,
	hasToolbar?: boolean,
	hasDecoration?: boolean,
	endSeparator?: boolean,
  startSeparator?: boolean,
}) {
  const {
    status,
    settings,
  } : {
    status: StatusObject[],
    settings: SettingsObject,
  } = useContext(DataProvider)
  const [statusObject, setStatusObject] = useState<StatusObject | null>(null)
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleOnClick = (event: MouseEvent<HTMLDivElement>) => {
    if (statusObject?.keepOpen) return

    if (onClick) onClick(event)
    setAnchorEl(anchorEl ? null : event?.currentTarget as any)
  }

  const handleOnClose = (event: any) => {
    if (onClose && !statusObject?.keepOpen) onClose(event)
    if (!statusObject?.keepOpen || !settings.hasLock) setAnchorEl(null)
  }

  useEffect(() => {
    const foundObject = status.find(item => item.uniqueId === id)
    if (foundObject) {
      setStatusObject(foundObject)
    }
  }, [status, id])

  const determineHighlight = () => (statusObject?.keepOpen || open) ? Highlight.PRIMARY : highlight

  return <>
    <StatusCore {...{
      id,
      tooltip: open ? null : tooltip,
      endSeparator,
      startSeparator,
      hasArrow: open && hasDecoration,
      highlight: determineHighlight(),
      secondary,
      onClick: handleOnClick,
      style: { ...style },
    }}
    >
      {children}
    </StatusCore>
    <StyledPopper {...{
      keepMounted: statusObject?.keepOpen,
      open,
      anchorEl,
      onClose,
      elevation,
      placement: `${settings.position === PlacementPosition.TOP ? 'bottom' : 'top'}-${secondary ? 'end' : 'start'}` as any,
      id: `mui-status-panel-popover-${id}`,
    }}
    >
      <ClickAwayListener onClickAway={event => handleOnClose(event)}>
        <StyledContainer {...{
          elevation,
          highlight: determineHighlight().toString(),
          variant: settings.variant.toString(),
          decoration: hasDecoration.toString()
        }}
        >
          <StyledBox
            display="flex"
            alignItems="stretch"
            justifyContent="space-between"
            flexDirection="column"
            width={width}
          >
            {popover}
          </StyledBox>
          {hasToolbar && <InternalHeader {...{ id, popoverActions, popoverTitle }} />}
        </StyledContainer>
      </ClickAwayListener>
    </StyledPopper>
  </>
}
