/* eslint-disable @typescript-eslint/no-explicit-any */
import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledHighlight : any = styled('span')<{ highlight: string }>(({ theme, highlight }) => ({
  color: highlight === 'true' ? theme.palette.primary.main : 'unset',
  fontWeight: highlight === 'true' ? 'bold' : 'unset',
}));


export const SPaper: any = styled(Paper)(({ theme }) => ({
  width: '60vw',
  maxWidth: '750px',
  padding: '12px',
  borderRadius: '8px',
  backgroundColor: `${theme.palette.background.paper} !important`,
  backdropFilter: 'blur(8px)',
}));
