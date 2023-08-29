/* eslint-disable @typescript-eslint/no-explicit-any */
import { Alert, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

type SMessageProps = {
  ellipsis: string
};

type SCodeProps = {
  height: number,
  defaultValue: string
  onDoubleClick: any,
};

type SAlertProps = {
  expanded: string,
  actions: string,
  onDoubleClick: any,
  onContextMenu: any,
  icon: JSX.Element,
  severity: any
};

export const SCode: React.ComponentType<SCodeProps> = styled('textarea')<SCodeProps>(({ height, theme }) => ({
  fontFamily: 'monospace',
  padding: '8px',
  resize: 'vertical',
  whiteSpace: 'nowrap',
  marginTop: '8px',
  marginBottom: '8px',
  borderColor: 'inherit',
  maxHeight: '300px',
  borderRadius: '4px',
  color: 'inherit',

  backgroundColor: `${theme.palette.divider}`,
  minHeight: `${(height * 20) + 10}px`,

  '&::selection': {
    backgroundColor: `${theme.palette.divider}`,
    textDecoration: 'underline',
    textDecorationStyle: 'dotted',
    textDecorationColor: `${theme.palette.divider}`,
  },

  '&:focus-visible': {
    outline: '0px',
  },
}));

export const SMessage: React.ComponentType<SMessageProps> = styled(Typography)<SMessageProps>(({ ellipsis }) => ({
  whiteSpace: ellipsis === 'true' ? 'nowrap' : 'normal',
  overflow: ellipsis === 'true' ? 'hidden' : 'unset',
  textOverflow: ellipsis === 'true' ? 'ellipsis' : 'unset',
  lineHeight: ellipsis === 'true' ? 'initial' : '1.65',
}));

export const SWrapper: React.ComponentType<any> = styled('div')(() => ({
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  alignItems: 'stretch',
  justifyContent: 'center',
}));

export const SAlert: React.ComponentType<SAlertProps> = styled(Alert)<SAlertProps>(({ expanded, actions, theme }) => ({
  boxShadow: theme.shadows[2],
  '.MuiAlert-message': {
    minWidth: 'unset',
    width: '100%',
    display: 'flex',


    padding: expanded === 'true' ? '8px 0px' : '0px',
    flexDirection: (actions === 'true' || expanded === 'true') ? 'column' : 'row',
  },
}));
