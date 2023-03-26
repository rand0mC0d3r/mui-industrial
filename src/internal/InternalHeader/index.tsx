import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { IconButton, Tooltip } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { PopoverActions, StatusObject } from '../../index.types';
import DataProvider, { DataContextInterface } from '../../Store';
import { StyledActions, StyledActionsWrapper, StyledTypography } from './css';

export default ({
  id,
  title,
  actions,
  noDefaults = false,
} : {
  id: string,
  title?: string,
  actions?: PopoverActions,
  noDefaults?: boolean,
}): JSX.Element => {
  const { status, settings, handleStatusKeepOpenToggle } = useContext(DataProvider) as DataContextInterface;
  const [statusObject, setStatusObject] = useState<StatusObject | null>(null);

  useEffect(() => {
    if (!status || !id) return;
    setStatusObject(status.find(({ uniqueId }: StatusObject) => uniqueId === id) || null);
  }, [status, id]);

  return <StyledActionsWrapper onContextMenu={(e: { preventDefault: () => void; }) => { e.preventDefault(); }}>
    <StyledTypography variant="subtitle2" color="textSecondary">{title}</StyledTypography>
    <StyledActions>
      {actions && actions
        .filter((_, i) => i < 3)
        .map(action => <Tooltip arrow key={action?.title} {...{ title: action?.title }}>
          <span>
            <IconButton size="small" {...{ onClick: () => action?.onClick(), disabled: action?.disabled }}>
              {action?.icon}
            </IconButton>
          </span>
        </Tooltip>)}
      {!noDefaults && settings.hasLock && <Tooltip title="Toggle keep-open" arrow>
        <IconButton size="small" onClick={() => handleStatusKeepOpenToggle({ id })}>
          {statusObject?.keepOpen ? <LockOutlinedIcon color="primary" /> : <LockOpenOutlinedIcon />}
        </IconButton>
      </Tooltip>}
    </StyledActions>
  </StyledActionsWrapper>;
};
