import { Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FC } from 'react';

const iconSize = '16px';

export const StyledStack: FC<{ reverse: string }> = styled(Stack)<{ reverse: string }>(({ theme, reverse }) => ({
  gap: `${theme.spacing(0.5)}`,
  flexDirection: reverse === 'true' ? 'row-reverse' : 'row',

  display: 'flex',
  alignItems: 'center',
  padding: '2px 0px',
  justifyContent: 'center',
  flexWrap: 'nowrap',
  userSelect: 'none',
  WebkitFontSmoothing: 'antialiased',
  shapeRendering: 'geometricPrecision',
}));

export const StyledIcon: FC = styled('div')(() => ({
  display: 'flex',
  order: 0,
  width: iconSize,
  flex: '0 0 auto',

  '& svg': {
    width: iconSize,
    height: iconSize,
  },

  '& img': {
    width: iconSize,
    height: iconSize,
  },

  '& .MuiAvatar-root': {
    width: iconSize,
    height: iconSize,
  },
}));

export const StyledText: FC = styled(Typography)(() => ({
  display: 'flex',
  order: 2,
  whiteSpace: 'nowrap',
  userSelect: 'none',
  fontSize: '14px',
  lineHeight: '14px',
}));

export const StyledBadge: FC = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  borderRadius: `${theme.shape.borderRadius * 2}px`,
  backgroundColor: theme.palette.divider,
  border: `0.5px solid ${theme.palette.divider}`,

  display: 'flex',
  order: 1,
  padding: '2px 6px',
  lineHeight: '10px',
  fontSize: '12px',
}));

export const StyledChildren: FC<{ order: number }> = styled('div')<{ order: number }>(({ theme, order }) => ({
  order: order,
  gap: `${theme.spacing(0.5)}`,

  display: 'flex',
  alignItems: 'center',
  flexWrap: 'nowrap',
}));
