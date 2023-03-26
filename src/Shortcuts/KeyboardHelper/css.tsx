/* eslint-disable @typescript-eslint/no-explicit-any */
import { alpha, Paper, Popper } from '@mui/material';
import { styled } from '@mui/material/styles';

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
  alignItems: 'center',
  position: 'relative',
  flexDirection: 'row',
  gap: '4px',
  padding: '8px',
  width: '250px',

  backgroundColor: `${alpha(theme.palette.background.default, 0.95)}`,
  borderRadius: `${theme.shape.borderRadius * 2}px`,
  border: `1px solid ${theme.palette.primary.main}`,
}));

export const StyledKey: any = styled(Paper)(({ theme } : { theme: any }) => ({
  minWidth: '22px',
  lineHeight: '22px',
  fontWeight: '500',
  color: `${theme.palette.text.secondary}`,
  textAlign: 'center',
} ));
