// /* eslint-disable no-unused-vars */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// // import { ClickAwayListener } from '@mui/material';
// import { useContext } from 'react';
// import InternalHeader from '../../Api/InternalHeader';
// import { Highlight, PlacementPosition, SettingsObject } from '../../index.types';
// import DataProvider from '../../Store';
// import { StyledBox, StyledContainer, StyledPopover } from './css';

// export default ({
//   id,
//   enrichedPopper,
//   highlight = Highlight.DEFAULT,
//   statusObject,
//   anchorEl,
//   setAnchorEl,
//   options,
//   open,
//   secondary = false,
// } : any) : JSX.Element => {
//   const { settings } : { settings: SettingsObject } = useContext(DataProvider);

//   const determineHighlight = (statusObject?.keepOpen || open) ? Highlight.PRIMARY : highlight;

//   // const handleOnClose = (event: any) => {
//   //   if (enrichedPopper.onClose && !statusObject?.keepOpen) enrichedPopper.onClose(event);
//   //   if (!statusObject?.keepOpen || !settings.hasLock) setAnchorEl(null);
//   // };

//   return <>
//     <StyledPopover {...{
//       keepMounted: statusObject?.keepOpen,
//       open: open && Boolean(anchorEl),
//       anchorEl,
//       onClose: enrichedPopper.onClose,
//       elevation: enrichedPopper.elevation,
//       placement: `${settings.position === PlacementPosition.TOP ? 'bottom' : 'top'}-${secondary ? 'end' : 'start'}` as any,
//       id: `mui-status-panel-popover-${id}`,
//     }}
//     >
//       <StyledContainer {...{
//         elevation: enrichedPopper.elevation,
//         highlight: determineHighlight.toString(),
//         variant: settings.variant.toString(),
//         decoration: enrichedPopper.hasDecoration?.toString(),
//       }}
//       >
//         <StyledBox
//           display="flex"
//           alignItems="stretch"
//           justifyContent="space-between"
//           flexDirection="column"
//           width={enrichedPopper.width}
//           height={enrichedPopper.height}
//         >
//           {options?.content}
//         </StyledBox>
//         {enrichedPopper.hasToolbar && <InternalHeader {...{
//           sx: {
//             p: 1,
//           },
//           id,
//           topBorder: true,
//           actions: options.actions,
//           title: options?.title,
//         }}
//         />}
//       </StyledContainer>
//     </StyledPopover>
//   </>;
// };
