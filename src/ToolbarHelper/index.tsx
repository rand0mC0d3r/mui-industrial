/* eslint-disable @typescript-eslint/no-explicit-any */
import { IconButton, Tooltip } from '@mui/material'

export default function ({
  tooltip,
  onClick,
  icon,
} : {
  tooltip: string,
  onClick?: any,
  icon?: any,
}) {
  return <Tooltip title={tooltip}>
    <IconButton size="small" onClick={onClick}>
      {icon}
    </IconButton>
  </Tooltip>
}
