/* eslint-disable @typescript-eslint/no-explicit-any */
import { styled } from '@mui/material/styles';

import CloseIcon from '@mui/icons-material/Close';
import { Typography } from '@mui/material';
import { PlacementPosition } from '../../index.types';

export const StyledStatusConsole: any = styled('div')(() => ({
  flex: '1 0 auto',
  overflow: 'scroll',
  height: '0px',
  display: 'flex',
}));

export const StyledResizable: any = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  flex: '1 1 auto',
}));

export const StyledWrapper : any = styled('div')<{ bottom: string }>(({ theme, bottom }) => ({
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  borderTop: bottom === 'true' ? `1px solid ${theme.palette.divider}` : 'unset',
  borderBottom: bottom !== 'true' ? `1px solid ${theme.palette.divider}` : 'unset',
  backgroundColor: theme.palette.background.paper,
  bottom: bottom === 'true' ? '0px' : 'unset',
  top: bottom !== 'true' ? '0px' : 'unset',
  left: '0px',
  alignItems: 'center',
  right: '0px',
  zIndex: 99,
}));

export const StyledEmptyWrapper: any = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  flex: '1 1 auto',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '8px',
}));

export const StyledTabsAndActionWrapper: any = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingRight: '4px',
  cursor: 'pointer',
  borderBottom: `1px solid ${theme.palette.text.disabled}`,
}));

export const StyledTabs: any = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '0px',
}));

export const StyledCloseIcon: any = styled(CloseIcon)(() => ({
  fontSize: '20px',
}));

export const StyledContainer: any = styled('div')<{ position: string }>(({ position }) => ({
  flex: '1 1 auto',
  display: 'flex !important',
  flexDirection: position === PlacementPosition.BOTTOM ? 'column' : 'column-reverse',
}));

export const StyledTab: any = styled(Typography)<{ activated?: string }>(({ theme, activated }) => ({
  padding: '4px 12px',
  cursor: 'pointer',
  userSelect: 'none',
  borderRight: `1px solid ${theme.palette.divider}`,
  backgroundColor: activated === 'true' ? theme.palette.primary.main : 'transparent',
  color: activated === 'true' ? theme.palette.primary.contrastText : theme.palette.text.secondary,

  '&:hover': {
    backgroundColor: activated === 'true' ? theme.palette.primary.dark : theme.palette.divider,
    color: activated === 'true' ? theme.palette.background.default : theme.palette.text.primary,
  },
}));
