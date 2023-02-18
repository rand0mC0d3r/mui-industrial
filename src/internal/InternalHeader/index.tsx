import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { IconButton, Tooltip, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useContext, useEffect, useState } from 'react'
import { PopoverAction, SettingsObject, StatusObject } from '../../index.types'
import DataProvider, { DataContextInterface } from '../../Store'

const StyledActionsWrapper = styled('div')(({ theme }) => ({
  padding: `${theme.spacing(0.5)} ${theme.spacing(1)}`,
  borderTop: `1px solid ${theme.palette.divider}`,

  display: 'flex',
  justifyContent: 'space-between',
  userSelect: 'none',
  alignItems: 'center'
}))

const StyledActions = styled('div')(({ theme }) => ({
  gap: `${theme.shape.borderRadius}px`,

  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center'
}))

const StyledTypography = styled(Typography)(() => ({
  lineHeight: 1
}))

export default function ({
  id,
  popoverTitle,
  popoverActions,
} : {
  id: string,
  popoverTitle?: string,
  popoverActions?: PopoverAction[],
}) {
  const {
    status,
    settings,
    handleStatusKeepOpenToggle,
  } : {
    status: StatusObject[],
    settings: SettingsObject,
		handleStatusKeepOpenToggle: DataContextInterface['handleStatusKeepOpenToggle'],
  } = useContext(DataProvider)
  const [statusObject, setStatusObject] = useState<StatusObject | null>(null)

  useEffect(() => {
    if (!status || !id) return
    setStatusObject(status.find(({ uniqueId }: StatusObject) => uniqueId === id) || null)
  }, [status, id])

  return <StyledActionsWrapper>
    <StyledTypography variant="subtitle2" color="textSecondary">{popoverTitle}</StyledTypography>
    <StyledActions>
      {popoverActions?.map(({ title, onClick, disabled, icon }: PopoverAction) => <Tooltip key={title} {...{ title }}>
        <span>
          <IconButton size="small" {...{ onClick, disabled }}>
            {icon}
          </IconButton>
        </span>
      </Tooltip>)}
      {settings.hasLock && <Tooltip title="Toggle keep-open">
        <IconButton size="small" onClick={() => handleStatusKeepOpenToggle({ id })}>
          {statusObject?.keepOpen ? <LockOutlinedIcon color="primary" /> : <LockOpenOutlinedIcon />}
        </IconButton>
      </Tooltip>}
    </StyledActions>
  </StyledActionsWrapper>
}
