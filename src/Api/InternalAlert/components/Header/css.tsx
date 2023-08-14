/* eslint-disable @typescript-eslint/no-explicit-any */
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

type SHeaderProps = { expanded: string };
type STitleProps = { actions: any };

export const SHeader: React.ComponentType<SHeaderProps> = styled('div')<SHeaderProps>(({ expanded }) => ({
  display: 'flex',
  alignItems: 'center',
  paddingBottom: expanded === 'true' ? '8px' : '0px',
  marginTop: expanded === 'true' ? '-4px' : '0px',
  justifyContent: 'space-between',
  width: '100%',
}));

export const SActionButtons: React.ComponentType = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '8px',
  alignItems: 'center',
}));

export const SCustomAction: React.ComponentType<any> = styled('div')(() => ({
  lineHeight: '0px',
}));

export const STitle: React.ComponentType<any> = styled(Typography)<STitleProps>(({ actions }) => ({
  userSelect: 'none',
  textTransform: 'capitalize',
  fontWeight: 'bold',
  cursor: actions ? 'initial' : 'cursor',
}));

export const SMessage: any = styled(Typography)<{ ellipsis: string }>(({ ellipsis }) => ({
  width: '300px',
  whiteSpace: ellipsis === 'true' ? 'nowrap' : 'normal',
  overflow: ellipsis === 'true' ? 'hidden' : 'unset',
  textOverflow: ellipsis === 'true' ? 'ellipsis' : 'unset',
  lineHeight: ellipsis === 'true' ? 'initial' : '1.65',
  cursor: 'pointer',
}));
