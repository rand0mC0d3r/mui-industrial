/* eslint-disable no-restricted-globals */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { alpha, ClickAwayListener, Popper } from '@mui/material'
import { styled } from '@mui/material/styles'
import { CSSProperties, ReactNode, useContext, useEffect, useState } from 'react'
import { PlacementPosition, PopoverActions, SettingsObject, StatusObject } from '../index.types'
import InternalHeader from '../internal/InternalHeader'
import StatusCore from '../StatusCore'
import DataProvider from '../Store'

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
  backgroundColor: `${alpha(theme.palette.background.default, 0.75)}`,
  backdropFilter: 'blur(8px)',
  borderRadius: `${theme.shape.borderRadius}px`,
  margin: decoration === 'true' ? `${theme.spacing(0.75)} 0px` : `${theme.spacing(0.25)} 0px`,
  padding: 0,
  border: variant === 'default'
    ? '2px solid transparent'
    : `2px solid ${highlight !== 'default' ? theme.palette[highlight].main : 'transparent'}`,
  boxShadow: theme.shadows[elevation]
}))

export default function ({
  id,
  secondary = false,
  elevation = 2,
  style,
  onClick,
  onClose,
  highlight = 'default',
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
  style?: CSSProperties,
  onClick?: any,
  onClose?: any,
  highlight?: 'default' | 'primary' | 'secondary',
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

  const handleOnClick = (e: any) => {
    if (onClick && !statusObject?.keepOpen) {
      onClick()
    }
    if (anchorEl && !statusObject?.keepOpen) {
      setAnchorEl(null)
    } else {
      setAnchorEl(e.currentTarget)
    }
  }

  const handleOnClose = () => {
    if (onClose && !statusObject?.keepOpen) {
      onClose()
    }
    if (!statusObject?.keepOpen || !settings.hasLock) {
      setAnchorEl(null)
    }
  }

  useEffect(() => {
    const foundObject = status.find(item => item.uniqueId === id)
    if (foundObject) {
      setStatusObject(foundObject)
    }
  }, [status, id])

  const determineHighlight = () => (statusObject?.keepOpen || open) ? 'primary' : highlight

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
      style: { ...style, cursor: 'context-menu', minWidth: '24px' },
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
      placement: `${settings.position === PlacementPosition.Top ? 'bottom' : 'top'}-${secondary ? 'end' : 'start'}` as any,
      id: `mui-status-panel-popover-${id}`,
    }}
    >
      <ClickAwayListener onClickAway={() => handleOnClose()}>
        <StyledContainer {...{
          elevation,
          highlight: determineHighlight().toString(),
          variant: settings.variant.toString(),
          decoration: hasDecoration.toString()
        }}
        >
          {popover}
          {hasToolbar && <InternalHeader {...{ id, popoverActions, popoverTitle }} />}
        </StyledContainer>
      </ClickAwayListener>
    </StyledPopper>
  </>
}
