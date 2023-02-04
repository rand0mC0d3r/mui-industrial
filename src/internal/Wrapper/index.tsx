/* eslint-disable @typescript-eslint/no-explicit-any */
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined'
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined'
import { Popover, Tooltip, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { CSSProperties, MouseEvent, ReactNode, useContext, useState } from 'react'
import { PlacementPosition, SettingsObject, StatusObject, StatusType } from '../../index.types'
import DataProvider from '../../Store'
import InternalConsole from '../InternalConsole'
import InternalNotifications from '../InternalNotifications'
import InternalStatus from '../InternalStatus'

const SBox = styled('div')<{ column?: string }>(({ column }) => ({
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

const SNotifications = styled('div')<{ column?: string }>(({ column }) => ({
  gap: '0px',
  position: 'absolute',
  display: 'flex',
  bottom: column !== PlacementPosition.Top ? 'unset' : '32px',
  top: column !== PlacementPosition.Top ? '32px' : 'unset',
  right: '16px',
  zIndex: 112,
  flexDirection: column === PlacementPosition.Top ? 'column-reverse' : 'column'
}))

const SChildren = styled('div')(() => ({
  flex: '1 1 auto',
  overflow: 'hidden',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
}))

const StyledTypographyNoChildren = styled(Typography)(() => ({
  userSelect: 'none'
}))

const SElement = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '16px',
  padding: '8px',
}))

const SElementItem = styled('div')(({ theme }) => ({
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

const SStatusContainer = styled('div')<{
	hasBorder?: string,
	fullWidth?: string,
 }>(({ theme, hasBorder, fullWidth }: any) => ({
   alignSelf: 'stretch',
   justifyContent: 'center',
   display: 'flex',
   boxShadow: fullWidth === 'true' && hasBorder === 'true'
     ? [
       `inset -3px 0px 0px 1px ${theme.palette.divider}`,
     ].join(',')
     : 'none',
   backgroundColor: theme.palette.mode === 'light'
     ? theme.palette.background.default
     : theme.palette.background.paper,
 }))

const SStatusWrapper = styled('div')<{
	justifyContent: string,
	width: string,
	hasBorder?: string,
	fullWidth?: string,
	position?: string
 }>(({ theme, justifyContent, hasBorder, fullWidth, position, width }: any) => ({
   gap: '4px',
   display: 'flex',
   alignItems: 'stretch',
   width: `${width}`,
   alignSelf: 'center',
   justifyContent: `${justifyContent}`,
   boxShadow: fullWidth === 'false' && hasBorder === 'true'
     ? [
       `inset 0px ${position === 'top' ? -3 : 3}px 0px -2px ${theme.palette.divider}`,
       `inset -3px 0px 0px -2px ${theme.palette.divider}`,
       `inset 3px 0px 0px -2px ${theme.palette.divider}`
     ].join(',')
     : 'none',
 }))

export default function ({
  children,
  style,
} : {
  children: ReactNode,
	style?: CSSProperties
}) {
  const { status, handleStatusVisibilityToggle } = useContext(DataProvider)
  const { position, upperBar, fullWidth, hasBorder, width, justifyContent } = useContext(DataProvider).settings as SettingsObject
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null)
  const open = Boolean(anchorEl)

  const onClose = () => setAnchorEl(null)

  const onContextMenu = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    setAnchorEl(e.currentTarget)
  }

  const statusEntry = (statusItem: StatusObject) => <SElementItem onClick={() => handleStatusVisibilityToggle({ id: statusItem.uniqueId })}>
    {statusItem.visible ? <CheckBoxOutlinedIcon /> : <CheckBoxOutlineBlankOutlinedIcon />}
    {statusItem.children || <StyledTypographyNoChildren variant="caption" color="textSecondary">No content for child</StyledTypographyNoChildren>}
  </SElementItem>

  const entryWrapper = (statusItem: StatusObject) => <Tooltip
    {...{ key: statusItem.uniqueId, title: 'Toggle visibility of tile' }}
  >
    {statusEntry(statusItem)}
  </Tooltip>

  return <>
    <SBox id="mui-status-wrapper" {...{ column: position }}>
      <SChildren id="mui-status-children">
        {children}
        {status.some(({ type }) => type === StatusType.CONSOLE) && <InternalConsole />}
      </SChildren>
      {status.some(({ visible }) => visible) && <SStatusContainer {...{
        fullWidth: fullWidth.toString(),
        hasBorder: hasBorder.toString()
      }}
      >
        <SStatusWrapper {...{
          justifyContent,
          width,
          fullWidth: fullWidth.toString(),
          hasBorder: hasBorder.toString(),
          position,
          onContextMenu,
          style
        }}
        >
          <InternalStatus />
        </SStatusWrapper>
      </SStatusContainer>}
      <SNotifications {...{ column: position }}>
        <InternalNotifications />
      </SNotifications>
    </SBox>
    <Popover
      id="toggle-status-popover"
      {...{ open, anchorEl, onClose, elevation: 1 }}
      anchorOrigin={{ vertical: upperBar ? 'top' : 'bottom', horizontal: 'center' }}
      transformOrigin={{ vertical: !upperBar ? 'bottom' : 'top', horizontal: 'center' }}
      style={{ marginTop: `${(upperBar ? 1 : -1) * 12}px` }}
    >
      <SElement {...{ onContextMenu: e => { e.preventDefault() } }}>
        {[false, true].map((state: boolean) => <div key={state.toString()}>
          {status.filter(({ secondary }) => secondary === state).map(statusItem => entryWrapper(statusItem))}
        </div>)}
      </SElement>
    </Popover>
  </>
}
