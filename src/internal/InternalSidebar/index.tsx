/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Paper } from '@mui/material';
import { useContext } from 'react';
import {
  SettingsObject,
} from '../../index.types';
import DataProvider, { composeDomId } from '../../Store';
import { StyledActions, StyledActionsTall, StyledPaper, StyledSidebar } from './css';

export default (): JSX.Element => {
  const { sidebarIndex  } = useContext(DataProvider).settings as SettingsObject;

  return <>
    <Paper style={{ alignSelf: 'stretch', display: 'flex' }} elevation={1}>
      <StyledSidebar>
        <StyledActionsTall id={composeDomId('sidebar', ['actions'])}>
          axxxx
        </StyledActionsTall>
        <StyledActions id={composeDomId('sidebar', ['additional'])}>
          bxxxxx
        </StyledActions>
      </StyledSidebar>
      {sidebarIndex && <StyledPaper elevation={0} square id={composeDomId('sidebar', ['panel'])} >
        cxxxx
      </StyledPaper>}
    </Paper>
  </>;
};
