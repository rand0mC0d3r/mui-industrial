/* eslint-disable @typescript-eslint/no-explicit-any */
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import { styled } from '@mui/material/styles';
import { ThemeShape } from '../../../index.types';

const backgroundColor = (theme: ThemeShape, highlight?: string) => {
  switch (highlight) {
    case 'primary':
      return theme.palette.primary.main;
    case 'secondary':
      return theme.palette.secondary.main;
    default:
      return '';
  }
};

const backgroundColorHover = (theme: ThemeShape, highlight?: string) => {
  switch (highlight) {
    case 'primary':
      return theme.palette.primary.dark;
    case 'secondary':
      return theme.palette.secondary.dark;
    default:
      return theme.palette.divider;
  }
};

const isStartSeparator = (
  startSeparator?: string,
  endSeparator?: string,
  secondary?: string,
) => (secondary === 'false' && startSeparator === 'true') || (secondary === 'true' && endSeparator === 'true');

const isEndSeparator = (
  startSeparator?: string,
  endSeparator?: string,
  secondary?: string,
) => (secondary === 'false' && endSeparator === 'true') || (secondary === 'true' && startSeparator === 'true');

export const SSpan: any = styled('span')(({ theme }: { theme: { spacing: any } }) => ({
  padding: '1px 10px',
  display: 'flex',
  flexWrap: 'nowrap',
  alignItems: 'stretch',
  fontSize: '14px',

  gap: `${theme.spacing(0.5)}`,

  '& > *': {
    fontSize: '14px !important',
  },
}));

export const SArrowDown: any = styled(ArrowDropDownOutlinedIcon)<{ position: string }>(({ position }: { position: string }) => ({
  position: 'absolute',
  zIndex: 102,
  bottom: position !== 'top' ? '-10px' : 'unset',
  top: position === 'top' ? '16px' : 'unset',
}));

export const STooltip: any = styled('div')(() => ({
  fontSize: '13px',
  display: 'flex',
  flexWrap: 'nowrap',
  gap: '8px',
  alignItems: 'center',
  maxHeight: '300px',
  overflow: 'scroll',
}));

export const SArrowUp: any = styled(ArrowDropUpOutlinedIcon)(() => ({
  position: 'absolute',
  bottom: 'unset',
  top: '-14px',
  zIndex: 102,
}));

export const SDiv: any = styled('div')<{
  secondary: string,
  endSeparator?: string,
  startSeparator?: string,
  hasclick?: string,
  highlight?: string,
  isdisabled?: string
}>(({ theme, secondary, hasclick, highlight, startSeparator, endSeparator, isdisabled }) => ({
  WebkitFontSmoothing: 'auto',
  height: '100%',
  display: 'flex',
  flex: '0 0 auto',
  flexDirection: 'row',
  alignItems: 'stretch',
  gap: '16px',
  justifyContent: 'center',
  alignSelf: 'center',
  position: 'relative',

  borderLeft: isStartSeparator(startSeparator, endSeparator, secondary) ? `1px solid ${theme.palette.divider}` : 'none',
  borderRight: isEndSeparator(startSeparator, endSeparator, secondary) ? `1px solid ${theme.palette.divider}` : 'none',

  cursor: (hasclick === 'true' && isdisabled === 'false') ? 'pointer' : '',
  backgroundColor: backgroundColor(theme, highlight),
  color: theme.palette.text.primary,

  '& > div > *': {
    color: highlight !== 'default'
      ? `${theme.palette.background.default} !important`
      : '',
  },
  '& > span > div > *': {
    color: highlight !== 'default'
      ? `${theme.palette.background.default} !important`
      : '',
  },

  '&:hover': (hasclick === 'true' && isdisabled === 'false') ? {
    backgroundColor: backgroundColorHover(theme, highlight),
    color: `${theme.palette.primary.contrastText}`,
  } : {},
}));
