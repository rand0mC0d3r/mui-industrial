// /* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable no-console */
// /* eslint-disable no-unused-vars */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { Paper } from '@mui/material';
// import { useContext } from 'react';
// import {
//   SettingsObject
// } from '../../index.types';
// import DataProvider, { composeDomId } from '../../Store';
// import { StyledActions, StyledActionsTall, StyledPaper, StyledSidebar } from './css';

// export default ({ secondary } : { secondary: boolean }): JSX.Element => {
//   const { sidebarIndex  } = useContext(DataProvider).settings as SettingsObject;

//   return <>
//   {secondary ? 'seconda.ry' : 'primary'}
//     <Paper style={{ alignSelf: 'stretch', display: 'flex' }} elevation={1}>
//       <StyledSidebar>
//         <StyledActionsTall id={composeDomId('sidebar', ['actions'])}>
//         </StyledActionsTall>
//         <StyledActions id={composeDomId('sidebar', ['additional'])}>
//         </StyledActions>
//       </StyledSidebar>
//       {sidebarIndex && <StyledPaper elevation={0} square id={composeDomId('sidebar', ['panel'])} >
//       </StyledPaper>}
//     </Paper>
//   </>;
// };
