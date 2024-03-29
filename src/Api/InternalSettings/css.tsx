/* eslint-disable @typescript-eslint/no-explicit-any */
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { PlacementPosition } from '../../index.types';

export const SBox: any = styled('div')<{ column?: string }>(({ column }) => ({
  height: '100%',
  width: '100%',
  gap: '0px',
  position: 'absolute',
  display: 'flex',
  top: '0px',
  bottom: '0px',
  left: '0px',
  right: '0px',

  flexDirection: column === PlacementPosition.TOP ? 'column-reverse' : 'column',
}));

export const SNotifications: any = styled('div')<{ column?: string }>(({ column }) => ({
  gap: '0px',
  position: 'absolute',
  display: 'flex',
  right: '16px',
  zIndex: 112,

  bottom: column !== PlacementPosition.TOP ? 'unset' : '32px',
  top: column !== PlacementPosition.TOP ? '32px' : 'unset',
  flexDirection: column === PlacementPosition.TOP ? 'column-reverse' : 'column',
}));

export const SChildren: any = styled('div')(() => ({
  flex: '1 1 auto',
  overflow: 'hidden',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
}));

export const StyledTypographyNoChildren: any = styled(Typography)(() => ({
  userSelect: 'none',
}));

export const SElement: any = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '16px',
  padding: '8px',
}));

export const SElementItem: any = styled('div')(({ theme }) => ({
  display: 'flex',
  minWidth: '165px',
  cursor: 'pointer',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '4px',
  padding: '4px 6px',

  '&:hover': {
    backgroundColor: theme.palette.primary.light,
    color: `${theme.palette.background.default} !important`,
  },
}));

export const SStatusContainer: any = styled('div')<{
  hasBorder?: boolean,
  fullWidth?: boolean,
}>(({ theme, hasBorder, fullWidth }: any) => ({
  alignSelf: 'stretch',
  justifyContent: 'center',
  display: 'flex',
  boxShadow: fullWidth && hasBorder
    ? [`inset 0px 0px 0px 1px ${theme.palette.divider}`].join(',')
    : 'none',
  backgroundColor: theme.palette.mode === 'light'
    ? theme.palette.background.default
    : theme.palette.background.paper,
}));
