import { IconButton, Tooltip } from '@mui/material';
import { cloneElement } from 'react';
import { PopoverActions } from '../../index.types';

export default ({
  actions,
  placement = 'top',
  fontSize = '20px',
} : {
  actions?: PopoverActions,
  placement?: 'top' | 'bottom-end' | 'bottom-start' | 'bottom' |
  'left-end' | 'left-start' | 'left' | 'right-end' |
  'right-start' | 'right' | 'top-end' | 'top-start',
  fontSize: string
}): JSX.Element => <>
  {actions && actions
    .filter((_, i) => i < 3)
    .map(action => <Tooltip arrow key={action?.tooltip} {...{ placement, title: action?.tooltip }}>
      <span>
        <IconButton size="small" {...{ onClick: () => action?.onClick(), disabled: action?.disabled }}>
          {cloneElement(action?.icon, { style: { fontSize }, color: 'action' })}
        </IconButton>
      </span>
    </Tooltip>)}
</>;
