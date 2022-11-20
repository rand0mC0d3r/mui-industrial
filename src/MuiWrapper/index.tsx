/* eslint-disable @typescript-eslint/no-explicit-any */
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined'
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined'
import { Popover, Tooltip, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { MouseEvent, ReactNode, useContext, useState } from 'react'
import InternalStatus from '../MuiStatusBar/InternalStatus'
import DataProvider from '../MuiStore'

import { PlacementPosition, SettingsObject, StatusObject } from '../index.types'
import InternalConsole from '../MuiStatusBar/InternalConsole'

const StyledBox = styled('div')<{ column?: string }>(({ column }) => ({
  height: '100%',
  width: '100%',
  gap: '0px',
  position: 'absolute',
  display: 'flex',
  top: '0px',
  bottom: '0px',
  left: '0px',
  right: '0px',
  flexDirection: column === PlacementPosition.Top ? 'column-reverse' : 'column'
}))

const StyledChildren = styled('div')(() => ({
  flex: '1 1 auto',
  overflow: 'hidden',
  position: 'relative',
}))

const StyledTypographyNoChildren = styled(Typography)(() => ({
  userSelect: 'none'
}))

const StyledEntryElement = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '16px',
  padding: '8px',
}))

const StyledEntryElementItem = styled('div')(({ theme }) => ({
  display: 'flex',
  minWidth: '165px',
  cursor: 'pointer',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '4px',
  padding: '4px 6px',

  '&:hover': {
    backgroundColor: theme.palette.primary.light,
    color: `${theme.palette.background.default} !important`,
  },
}))

const StyledStatusBar = styled('div')<{ position?: string }>(({ theme, position }: any) => ({
  gap: '4px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: theme.palette.mode === 'light'
    ? theme.palette.background.default
    : theme.palette.background.paper,
  boxShadow: `inset 0px ${position === 'top' ? -3 : 3}px 0px -2px ${theme.palette.divider}`,
}))

export default function ({
  children
} : {
  children: ReactNode
}) {
  const { status, handleStatusVisibilityToggle } = useContext(DataProvider)
  const { position, statusBarAnnounced, upperBar } = useContext(DataProvider).settings as SettingsObject
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null)
  const open = Boolean(anchorEl)

  const onClose = () => setAnchorEl(null)

  const onContextMenu = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    setAnchorEl(e.currentTarget)
  }

  const statusEntry = (statusItem: StatusObject) => <StyledEntryElementItem onClick={() => handleStatusVisibilityToggle({ id: statusItem.uniqueId })}>
    {statusItem.visible ? <CheckBoxOutlinedIcon /> : <CheckBoxOutlineBlankOutlinedIcon />}
    {statusItem.children || <StyledTypographyNoChildren variant="caption" color="textSecondary">No content for child</StyledTypographyNoChildren>}
  </StyledEntryElementItem>

  const entryWrapper = (statusItem: StatusObject) => <Tooltip
    {...{ key: statusItem.uniqueId, title: 'Toggle visibility of tile' }}
  >
    {statusEntry(statusItem)}
  </Tooltip>

  return <>
    <StyledBox id="mui-status-wrapper" {...{ column: position }}>
      <StyledChildren id="mui-status-children">
        {children}
        {status.some(({ type }) => type === 'console') && <InternalConsole />}
      </StyledChildren>
      {status.some(({ visible }) => visible) && <StyledStatusBar position={position} {...{ onContextMenu }}>
          {!statusBarAnnounced && <InternalStatus />}
        </StyledStatusBar>}
    </StyledBox>
    <Popover
      id="toggle-status-popover"
      {...{ open, anchorEl, onClose, elevation: 1 }}
      anchorOrigin={{ vertical: upperBar ? 'top' : 'bottom', horizontal: 'center' }}
      transformOrigin={{ vertical: !upperBar ? 'bottom' : 'top', horizontal: 'center' }}
      style={{ marginTop: `${(upperBar ? 1 : -1) * 12}px` }}
    >
      <StyledEntryElement {...{ onContextMenu: e => { e.preventDefault() } }}>
        {[false, true].map((state: boolean) => <div key={state.toString()}>
          {status.filter(({ secondary }) => secondary === state).map(statusItem => entryWrapper(statusItem))}
        </div>)}
      </StyledEntryElement>
    </Popover>
  </>
}
