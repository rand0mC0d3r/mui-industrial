/* eslint-disable @typescript-eslint/no-explicit-any */
import { styled } from '@mui/material/styles';
import { useContext } from 'react';
import DataProvider from '../../Store';
import InternalAlert from '../InternalAlert';

const SWrapper = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  width: '550px',
}));

export default (): JSX.Element => {
  const { snackbars } = useContext(DataProvider);

  return <SWrapper>
    {snackbars.map(({ id, severity, message, source, actions, code }) => (
      <InternalAlert key={id} {...{ id, actions, severity, source, message, code }} />
    ))}
  </SWrapper>;
};
