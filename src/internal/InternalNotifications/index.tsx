import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useContext } from 'react';
import DataProvider from '../../Store';
import InternalAlert from '../InternalAlert';

const StyledBox: any = styled(Box)(({ theme }) => ({
  gap: theme.spacing(1),
  width: '550px',
}));
export default (): JSX.Element => {
  const { snackbars } = useContext(DataProvider);

  return <StyledBox display='flex' flexDirection='column'>
    {snackbars
      .filter(({ open }) => open)
      .map(({ id, autoHideDuration, severity, message, source, actions, code }) => (
        <InternalAlert key={id} {...{ id, autoHideDuration, actions, severity, source, message, code }} />
      ))}
  </StyledBox>;
};
