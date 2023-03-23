/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import ChangeCircleOutlinedIcon from '@mui/icons-material/ChangeCircleOutlined';
import { Chip, ClickAwayListener, IconButton, TextField, Tooltip } from '@mui/material';
import { useContext, useState } from 'react';
// import { PlacementPosition, SettingsObject } from '../../../index.types';
import { ShortcutObject } from '../../index.types';
import DataProvider, { DataContextInterface } from '../../Store';
import { StyledContainer, StyledPopper } from './css';

export default ({
  shortcutId,
  shortcutObject,
} : {
  shortcutId: string,
  shortcutObject: ShortcutObject
}) : JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const handleKeyboardUpdate = useContext(DataProvider).handleKeyboardUpdate as DataContextInterface['handleKeyboardUpdate'];
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const renderChip = (label: string, diff: any, highlight?: boolean) => <Chip
    label={label}
    onClick={() => handleKeyboardUpdate(shortcutId, { ...shortcutObject, ...diff } as ShortcutObject)}
    variant={highlight ? 'filled' : 'outlined'}
    color={highlight ? 'primary' : 'default'}
    size="small"
    style={{ userSelect: 'none' }}
  />;

  return <>
    <Tooltip title="Override tooltip">
      <IconButton size="small" aria-describedby={id} onClick={handleClick}>
        <ChangeCircleOutlinedIcon style={{ fontSize: '14px' }} />
      </IconButton>
    </Tooltip>
    <StyledPopper {...{
      elevation: 2,
      open,
      anchorEl,
      onClose: handleClose,
      id: `mui-status-panel-popover-${id}`,
    }}
    >
      <ClickAwayListener onClickAway={() => handleClose()}>
        <StyledContainer>
          {renderChip('⌃', { ctrlKey: !shortcutObject?.ctrlKey }, shortcutObject?.ctrlKey)}
          {renderChip('⌥', { altKey: !shortcutObject?.altKey }, shortcutObject?.altKey)}
          {renderChip('⌘', { metaKey: !shortcutObject?.metaKey }, shortcutObject?.metaKey)}
          {renderChip('⇧', { shiftKey: !shortcutObject?.shiftKey }, shortcutObject?.shiftKey)}
          <TextField
            inputProps={{ maxlength: 1 }}
            size="small"
            variant='outlined'
            label="Key"
            value={shortcutObject?.char}
            onChange={e => handleKeyboardUpdate(shortcutId, { ...shortcutObject, char: e.target.value } as ShortcutObject)}
          />

        </StyledContainer>
      </ClickAwayListener>
    </StyledPopper>
  </>;
};
