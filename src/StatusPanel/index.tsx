/* eslint-disable no-restricted-globals */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { alpha, ClickAwayListener, Popper } from '@mui/material'
import { styled } from '@mui/material/styles'
import { CSSProperties, ReactNode, useContext, useEffect, useState } from 'react'
import { SettingsObject, StatusObject } from '../index.types'
import InternalHeader from '../internal/InternalHeader'
import Status from '../Status'
import DataProvider from '../Store'

const StyledPopper = styled(Popper)<{ toggled: string }>(({ toggled }) => ({
  zIndex: '101',
  marginTop: `${(toggled === 'true' ? 1 : -1) * 4}px !important`,
}))

const StyledContainer = styled('div')<{elevation: number, variant: string, decoration: string }>(({
  theme,
  elevation,
  variant,
  decoration
} : {
	theme: any,
	elevation: number,
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
  margin: decoration === 'true' ? `${theme.spacing(2)} 0px` : `${theme.spacing(0.5)} 0px`,
  padding: decoration === 'true' ? theme.spacing(0.5) : 0,
  border: variant === 'default' ? 'none' : `3px solid ${theme.palette[variant].main}`,
  boxShadow: theme.shadows[elevation]
}))

export default function ({
  id,
  secondary = false,
  elevation = 2,
  style,
  onClick,
  onClose,
  highlight,
  tooltip = '',
  children,
  popover,
  popoverTitle,
  popoverActions,
  hasToolbar = true,
  hasDecoration = true,
  variant = 'default',
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
  popoverActions?: any,
	hasToolbar?: boolean,
	hasDecoration?: boolean,
	variant?: 'default' | 'primary' | 'secondary',
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

  // const [keepOpen, setKeepOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const [isToggled, setIsToggled] = useState(false)
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

    setIsToggled(e.pageY < screen.height / 2)
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

  return <>
    <Status {...{
      id,
      tooltip,
      endSeparator,
      startSeparator,
      hasArrow: open && hasDecoration,
      highlight: (statusObject?.keepOpen || open) ? 'primary' : highlight,
      secondary,
      onClick: handleOnClick,
      style: { ...style, cursor: 'context-menu', minWidth: '24px' },
    }}
    >
      {children}
    </Status>
    <StyledPopper {...{
      keepMounted: statusObject?.keepOpen,
      open,
      anchorEl,
      onClose,
      elevation,
      id: `mui-status-panel-popover-${id}`,
      toggled: isToggled.toString(),
    }}
    >
      <ClickAwayListener onClickAway={() => handleOnClose()}>
        <StyledContainer {...{ elevation, variant: variant.toString(), decoration: hasDecoration.toString() }}>
          {popover}
          {hasToolbar && <InternalHeader {...{ id, popoverActions, popoverTitle }} />}
        </StyledContainer>
      </ClickAwayListener>
    </StyledPopper>
  </>
}
