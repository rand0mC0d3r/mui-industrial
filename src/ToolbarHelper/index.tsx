/* eslint-disable @typescript-eslint/no-explicit-any */
import { IconButton, Tooltip } from '@mui/material';

export default ({
  tooltip,
  onClick,
  icon,
} : {
  tooltip: string,
  onClick?: (e: any) => void,
  icon?: any,
}) : JSX.Element => {
  return <Tooltip title={tooltip}>
    <IconButton size="small" {...{ onClick }}>
      {icon}
    </IconButton>
  </Tooltip>;
};
