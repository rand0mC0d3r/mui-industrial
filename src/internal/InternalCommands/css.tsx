/* eslint-disable @typescript-eslint/no-explicit-any */
import { styled } from '@mui/material/styles';

export const StyledHighlight : any = styled('span')<{ highlight: string }>(({ theme, highlight }) => ({
  color: highlight === 'true' ? theme.palette.primary.main : 'unset',
  fontWeight: highlight === 'true' ? 'bold' : 'unset',
}));
