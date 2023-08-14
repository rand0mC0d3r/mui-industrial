/* eslint-disable @typescript-eslint/no-explicit-any */
// import { CSSProperties } from '@emotion/serialize';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useContext, useEffect, useState } from 'react';
import { PopoverActions, StatusObject } from '../../index.types';
import DataProvider, { DataContextInterface } from '../../Store';
import InternalActions from '../InternalActions';
import { StyledActions, StyledBox, StyledTypography } from './css';

export default ({
  id,
  title,
  actions,
  noDefaults = false,
  sx,
} : {
  id: string,
  title?: string,
  actions?: PopoverActions,
  noDefaults?: boolean,
  sx?: any,
}): JSX.Element => {
  const { status, settings, handleStatusKeepOpenToggle } = useContext(DataProvider) as DataContextInterface;
  const [statusObject, setStatusObject] = useState<StatusObject | null>(null);

  useEffect(() => {
    if (!status || !id) return;
    setStatusObject(status.find(({ uniqueId }: StatusObject) => uniqueId === id) || null);
  }, [status, id]);

  return <StyledBox {...{ sx }}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      onContextMenu={(e: { preventDefault: () => void; }) => { e.preventDefault(); }}
    >
    <StyledTypography variant="subtitle2" color="textSecondary">{title}</StyledTypography>
    <StyledActions>
      <InternalActions {...{ actions }} />
      {!noDefaults && settings.hasLock && <InternalActions {...{
        actions: [
          {
            preserveColor: true,
            tooltip: 'Toggle keep-open',
            icon: statusObject?.keepOpen ? <LockOutlinedIcon color="primary" /> : <LockOpenOutlinedIcon />,
            onClick: () => handleStatusKeepOpenToggle({ id }),
          },
        ],
      }} />}
    </StyledActions>
  </StyledBox>;
};
