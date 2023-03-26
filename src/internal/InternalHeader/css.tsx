/* eslint-disable @typescript-eslint/no-explicit-any */
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledActionsWrapper: any = styled('div')(({ theme }) => ({
  padding: `${theme.spacing(0.5)} ${theme.spacing(1)}`,
  borderTop: `1px solid ${theme.palette.divider}`,

  display: 'flex',
  justifyContent: 'space-between',
  userSelect: 'none',
  alignItems: 'center',
}));

export const StyledActions: any = styled('div')(({ theme }) => ({
  gap: `${theme.shape.borderRadius}px`,

  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
}));

export const StyledTypography: any = styled(Typography)(() => ({
  textOverflow: 'ellipsis',
  maxWidth: '225px',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
}));
