/* eslint-disable @typescript-eslint/no-explicit-any */
import { Stack, SvgIcon, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledStack: any = styled(Stack)<{ reverse: string }>(({ theme, reverse }) => ({
  gap: `${theme.spacing(0.5)}`,
  flexDirection: reverse === 'true' ? 'row-reverse' : 'row',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'nowrap',
  userSelect: 'none',
  WebkitFontSmoothing: 'antialiased',
  shapeRendering: 'geometricPrecision',
}));

export const StyledIcon: any = styled(SvgIcon)<{ reverse: string }>(({ reverse }) => ({
  transform: reverse === 'true' ? 'scaleX(-1)' : 'scaleX(1)',

  display: 'flex',
  order: 0,
  width: '17px',
  flex: '0 0 auto',
}));

export const StyledText: any = styled(Typography)(() => ({
  display: 'flex',
  order: 4,
  whiteSpace: 'nowrap',
  userSelect: 'none',
  fontSize: '15px',
  lineHeight: '0px',
}));

export const StyledBadge: any = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  borderRadius: `${theme.shape.borderRadius * 2}px`,
  backgroundColor: theme.palette.divider,
  border: `0.5px solid ${theme.palette.divider}`,

  display: 'flex',
  order: 3,
  padding: '0px 6px',
  lineHeight: 'inherit',
  fontSize: '12px',
}));

export const StyledImage: any = styled('img')<{ mask: string }>(({ mask }) => ({
  borderRadius: mask === 'true' ? '50%' : '0px',

  display: 'flex',
  order: 2,
  width: '18px',
  height: '18px',
}));

export const StyledChildren: any = styled('div')<{ order: number }>(({ theme, order }) => ({
  order: order,
  gap: `${theme.spacing(0.5)}`,

  display: 'flex',
  alignItems: 'center',
  flexWrap: 'nowrap',
}));
