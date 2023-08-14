/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { cloneElement, Fragment } from 'react';
import { Severity } from '../../../../index.types';

const SFooter = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  marginTop: '8px',
}));

const SActions = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  flex: '1 1 auto',
  justifyContent: 'flex-end',
}));

const SSource = styled(Typography)(() => ({
  userSelect: 'none',
}));

export default ({
  actions,
  source,
  severity,
}: {
  actions?: any,
  source?: string,
  severity: Severity,
}) : JSX.Element => {
  return <SFooter>
    {source && <SSource variant="caption" color="textSecondary">{`Source: ${source}`}</SSource>}
    <SActions>
      {actions && actions.map((action: any, i: number) => <Fragment key={`generative_${i}`}>
        {cloneElement(
          action,
          {
            color: i === 0 ? severity : 'inherit',
            size: 'small',
            style: i === 0 ? { } : { borderStyle: 'dotted' },
            variant: i === 0 ? 'contained' : 'outlined',
            disableElevation: true,
          },
        )}
      </Fragment>)}
    </SActions>
  </SFooter>;
};
