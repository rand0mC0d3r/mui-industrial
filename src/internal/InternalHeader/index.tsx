/* eslint-disable no-restricted-globals */
/* eslint-disable @typescript-eslint/no-explicit-any */
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { IconButton, Tooltip, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useContext, useEffect, useState } from 'react'
import { SettingsObject, StatusObject } from '../../index.types'
import DataProvider from '../../Store'

const StyledActionsWrapper = styled('div')(({ theme }) => ({
  padding: '8px',
  display: 'flex',
  justifyContent: 'space-between',
  borderTop: `1px solid ${theme.palette.divider}`,
  userSelect: 'none',
  alignItems: 'center'
}))

const StyledActions = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: `${theme.shape.borderRadius}px`,
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
  popoverActions?: any,
}) {
  const {
    status,
    settings,
    handleStatusKeepOpenToggle,
  } : {
    status: StatusObject[],
    settings: SettingsObject,
		handleStatusKeepOpenToggle: any,
  } = useContext(DataProvider)
  const [statusObject, setStatusObject] = useState<StatusObject | null>(null)

  useEffect(() => {
    const foundObject = status.find(item => item.uniqueId === id)
    if (foundObject) {
      setStatusObject(foundObject)
    }
  }, [status, id])

  return <StyledActionsWrapper>
    <StyledTypography variant="subtitle2" color="textSecondary">{popoverTitle}</StyledTypography>
    <StyledActions>
      {popoverActions}
      {settings.hasLock && <Tooltip title="Toggle keep-open">
        <IconButton size="small" onClick={() => handleStatusKeepOpenToggle({ id })}>
          {statusObject?.keepOpen
            ? <LockOutlinedIcon color="primary" />
            : <LockOpenOutlinedIcon />}
        </IconButton>
      </Tooltip>}
    </StyledActions>
  </StyledActionsWrapper>
}
