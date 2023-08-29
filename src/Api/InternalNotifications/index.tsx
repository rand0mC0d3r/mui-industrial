/* eslint-disable @typescript-eslint/no-explicit-any */
import ClearAllIcon from '@mui/icons-material/ClearAll';
import { Box, Button, Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useContext } from 'react';
import DataProvider from '../../Store';
import InternalAlert from '../InternalAlert';
import { SNotifications } from './css';

const StyledBox: any = styled(Box)(({ theme }) => ({
  gap: theme.spacing(1),
  width: '550px',
  padding: '4px',
}));
export default (): JSX.Element => {
  const { snackbars, handleSnackbarHideAll } = useContext(DataProvider);

  return <>
    {snackbars.filter(({ open }) => open).length > 0 && <>
      <SNotifications>
        <StyledBox display='flex' flexDirection='column'>
          {snackbars
            .filter(({ open }) => open)
            .map(({ id, autoHideDuration, severity, message, source, actions, code }) => (
              <InternalAlert key={id} {...{ id, autoHideDuration, actions, severity, source, message, code }} />
            ))}
        </StyledBox>
      </SNotifications>
      <Tooltip arrow title='Clear all notifications'>
        <Button variant="contained" color='primary' onClick={() => handleSnackbarHideAll()}>
          <ClearAllIcon />
        </Button>
      </Tooltip>
    </>}
  </>;
};
