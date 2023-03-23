/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import ChangeCircleOutlinedIcon from '@mui/icons-material/ChangeCircleOutlined';
import { Chip, ClickAwayListener, IconButton, InputAdornment, TextField, Tooltip } from '@mui/material';
import { useContext, useState } from 'react';
// import { PlacementPosition, SettingsObject } from '../../../index.types';
import HistoryIcon from '@mui/icons-material/History';
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
  const handleKeyboardRevert = useContext(DataProvider).handleKeyboardRevert as DataContextInterface['handleKeyboardRevert'];
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
        <ChangeCircleOutlinedIcon color={open ? 'primary' : 'action'} style={{ fontSize: '14px' }} />
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
          <TextField
            inputProps={{ maxlength: 1 }}
            size="small"
            variant='outlined'
            label="Key"
            autoFocus
            onFocus={e => e.currentTarget.select()}
            InputProps={{
              startAdornment: <InputAdornment position="start" style={{ display: 'flex', gap: '4px' }}>
                {renderChip('⌃', { ctrlKey: !shortcutObject?.ctrlKey }, shortcutObject?.ctrlKey)}
                {renderChip('⌥', { altKey: !shortcutObject?.altKey }, shortcutObject?.altKey)}
                {renderChip('⌘', { metaKey: !shortcutObject?.metaKey }, shortcutObject?.metaKey)}
                {renderChip('⇧', { shiftKey: !shortcutObject?.shiftKey }, shortcutObject?.shiftKey)}
              </InputAdornment>,
              endAdornment: shortcutObject.original && <InputAdornment position="end">
                <Tooltip title="Revert to original shortcut">
                  <HistoryIcon style={{ fontSize: '16px', cursor: 'pointer' }} color="action" onClick={() => handleKeyboardRevert(shortcutId)} />
                </Tooltip>
              </InputAdornment>,
            }}
            value={shortcutObject?.char}
            onChange={e => e.target.value.length > 0 && handleKeyboardUpdate(shortcutId, { ...shortcutObject, char: e.target.value } as ShortcutObject)}
          />

        </StyledContainer>
      </ClickAwayListener>
    </StyledPopper>
  </>;
};
