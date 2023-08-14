/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ComponentType } from 'react';

//TODO: Fix this as style
export const StyledBox: ComponentType<any> = styled(Box)<any>(() => ({
  userSelect: 'none',
}));

export const StyledActions: ComponentType = styled('div')(({ theme }) => ({
  gap: `${theme.shape.borderRadius}px`,

  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
}));

//TODO: Fix this as style
export const StyledTypography: ComponentType<any> = styled(Typography)<any>(() => ({
  textOverflow: 'ellipsis',
  maxWidth: '225px',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
}));
