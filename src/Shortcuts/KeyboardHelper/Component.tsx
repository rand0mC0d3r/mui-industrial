/* eslint-disable @typescript-eslint/no-explicit-any */
import HistoryIcon from '@mui/icons-material/History';
import { Chip, ClickAwayListener, InputAdornment, TextField, Tooltip } from '@mui/material';
import { useContext } from 'react';
import { ShortcutObject } from '../../index.types';
import DataProvider, { DataContextInterface } from '../../Store';
import { StyledContainer, StyledPopper } from './css';

export default ({
  idPopper,
  anchorEl,
  open,
  handleClose,
  shortcutId,
  shortcutObject,
} : {
  idPopper?: string,
  anchorEl: HTMLButtonElement | null,
  open: boolean,
  handleClose: () => void,
  shortcutId: string,
  shortcutObject: ShortcutObject
}) : JSX.Element => {
  const handleKeyboardUpdate = useContext(DataProvider).handleKeyboardUpdate as DataContextInterface['handleKeyboardUpdate'];
  const handleKeyboardRevert = useContext(DataProvider).handleKeyboardRevert as DataContextInterface['handleKeyboardRevert'];

  const renderChip = (label: string, diff: any, highlight?: boolean) => <Chip
    label={label}
    onClick={() => handleKeyboardUpdate(shortcutId, { ...shortcutObject, ...diff } as ShortcutObject)}
    variant={highlight ? 'filled' : 'outlined'}
    color={highlight ? 'primary' : 'default'}
    size="small"
    style={{ userSelect: 'none' }}
  />;

  return <>
    <StyledPopper {...{
      elevation: 2,
      open,
      anchorEl,
      onClose: handleClose,
      id: `mui-status-panel-popover-${idPopper}`,
    }}>
      <ClickAwayListener onClickAway={() => handleClose()}>
        <StyledContainer>
          <TextField
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
            onChange={e => e.target.value.length > 0 &&
              handleKeyboardUpdate(shortcutId, { ...shortcutObject, char: e.target.value.substring(0, 1).toUpperCase() } as ShortcutObject)}
          />
        </StyledContainer>
      </ClickAwayListener>
    </StyledPopper>
  </>;
};
