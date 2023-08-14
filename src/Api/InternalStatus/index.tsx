import { styled } from '@mui/material/styles';
import { CSSProperties, useContext } from 'react';
import { domStatusBarId, SettingsObject } from '../../index.types';
import DataProvider, { DataContextInterface } from '../../Store';

const SPrimary = styled('div')(() => ({
  display: 'flex',
  flexWrap: 'nowrap',
  overflow: 'hidden',
  justifyContent: 'flex-start',

  '&::-webkit-scrollbar': {
    display: 'none',
  },
}));

const SSecondary = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'nowrap',
  overflow: 'hidden',
  justifyContent: 'flex-end',
  alignItems: 'center',
  flex: '0 1 auto',
  minWidth: `${theme.spacing(2)}`,

  '&::-webkit-scrollbar': {
    display: 'none',
  },
}));

const SWrapper = styled('div')<{
  justifyContent: string,
  width: string,
  hasBorder?: boolean,
  fullWidth?: boolean,
  position?: string
}>(({ theme, justifyContent, hasBorder, fullWidth, position, width }) => ({
  gap: '4px',
  display: 'flex',
  alignItems: 'stretch',
  alignSelf: 'center',
  overflow: 'hidden',

  width: `${width}`,
  justifyContent: `${justifyContent}`,
  boxShadow: !fullWidth && hasBorder
    ? [
      `inset 0px ${position === 'top' ? -3 : 3}px 0px -2px ${theme.palette.divider}`,
      `inset -3px 0px 0px -2px ${theme.palette.divider}`,
      `inset 3px 0px 0px -2px ${theme.palette.divider}`,
    ].join(',')
    : 'none',
}));

export default ({
  style,
}: {
  style?: CSSProperties
}): JSX.Element => {
  const { status, settings } = useContext(DataProvider) as DataContextInterface;
  const { position, fullWidth, hasBorder, width, justifyContent } = settings as SettingsObject;

  return <SWrapper {...{ justifyContent, width, fullWidth, hasBorder, position, style }}>
    {status.length > 0 && <>
      <SPrimary {...{ id: `${domStatusBarId}-primary` }} />
      <SSecondary {...{ id: `${domStatusBarId}-secondary` }} />
    </>}
  </SWrapper>;
};
