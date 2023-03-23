/* eslint-disable @typescript-eslint/no-explicit-any */
import { alpha, Box, Popper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { PopperWidth } from '../../../index.types';

export const StyledBox: any = styled(Box)<{ width?: PopperWidth }>(({ theme, width }) => ({
  width: `${width ? `${theme.breakpoints.values[width] / 1.42}px` : 'auto'}`,
  height: `${width ? `${theme.breakpoints.values[width] / 1.24}px` : 'auto'}`,
}));

export const StyledPopper: any = styled(Popper)(() => ({
  zIndex: '101',
}));

export const StyledContainer: any = styled('div')<{
  elevation?: number,
  highlight: string,
  variant: string,
  decoration?: string
}>(({
  theme,
  elevation,
  highlight,
  variant,
  decoration,
} : {
  theme: any,
  elevation?: number,
  highlight: string,
  variant: string,
  decoration?: string
}) => ({
  display: 'flex',
  alignItems: 'stretch',
  position: 'relative',
  flexDirection: 'column',
  padding: 0,
  backdropFilter: 'blur(8px)',

  backgroundColor: `${alpha(theme.palette.background.default, 0.75)}`,
  borderRadius: `${theme.shape.borderRadius}px`,
  margin: decoration === 'true' ? `${theme.spacing(0.75)} 0px` : `${theme.spacing(0.25)} 0px`,
  border: variant === 'default'
    ? '2px solid transparent'
    : `2px solid ${highlight !== 'default' ? theme.palette[highlight].main : 'transparent'}`,
  boxShadow: theme.shadows[elevation || 2],
}));