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
  fontSize?: string
}): JSX.Element => <>
  {actions && actions
    .filter((_, i) => i < 3)
    .map(action => <Tooltip arrow key={action?.tooltip} {...{ placement, title: action?.disabled ? null : action?.tooltip }}>
      <span>
        <IconButton
          size="small"
          color='inherit'
          disabled={action?.disabled}
          onClick={action?.onClick}
        >
          {cloneElement(action?.icon, {
            style: { fontSize },
            ...action?.preserveColor ? {} : { color: action?.disabled ? 'disabled' : 'inherit' },
          },
          )}
        </IconButton>
      </span>
    </Tooltip>)}
</>;
