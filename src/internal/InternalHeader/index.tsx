import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useContext, useEffect, useState } from 'react';
import { PopoverActions, StatusObject } from '../../index.types';
import DataProvider, { DataContextInterface } from '../../Store';
import InternalActions from '../InternalActions';
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
      <InternalActions {...{ actions }} />
      {!noDefaults && settings.hasLock && <InternalActions {...{
        actions: [
          {
            tooltip: 'Toggle keep-open',
            icon: statusObject?.keepOpen ? <LockOutlinedIcon color="primary" /> : <LockOpenOutlinedIcon style={{ fontSize: '40px' }} />,
            onClick: () => handleStatusKeepOpenToggle({ id }),
          },
        ],
      }} />}
    </StyledActions>
  </StyledActionsWrapper>;
};
