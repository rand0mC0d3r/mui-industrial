/* eslint-disable @typescript-eslint/no-explicit-any */
import { alpha, Paper, Popper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FC } from 'react';

export const StyledPopper: any = styled(Popper)(() => ({
  zIndex: '101',
}));

export const StyledOverrideWrapper: any = styled('div')(() => ({
  display: 'flex',
  gap: '4px',
  alignItems: 'center',
  flexWrap: 'nowrap',
}));

export const StyledListOfKeys: any = styled('div')(() => ({
  display: 'flex',
  gap: '4px',
  alignItems: 'center',
  flexWrap: 'nowrap',
}));

export const StyledContainer: any = styled('div')(({ theme } : { theme: any, }) => ({
  display: 'flex',
  alignItems: 'stretch',
  position: 'relative',
  flexDirection: 'column',
  gap: '8px',
  padding: '8px',
  width: '250px',

  backgroundColor: `${alpha(theme.palette.background.default, 0.95)}`,
  borderRadius: `${theme.shape.borderRadius * 2}px`,
  border: `1px solid ${theme.palette.primary.main}`,
}));

export const StyledKey: FC<{
  highlight?: string,
  onClick?: any,
  ascii?: string,
  elevation: number
}> = styled(Paper)<{
  highlight?: string,
  onClick?: any,
  ascii?: string,
  elevation: number
}>(({ ascii, highlight, theme } : { ascii?: string, highlight?: string, theme: any }) => ({
  minWidth: '22px',
  lineHeight: '22px',
  userSelect: 'none',
  cursor: 'auto',
  fontFamily: ascii === 'true' ? 'monospace' : 'inherit',
  fontWeight: '500',
  color: `${theme.palette.text.secondary}`,
  backgroundColor: `${highlight === 'true' ? theme.palette.divider : theme.palette.background.default}`,
  textAlign: 'center',
} ));
