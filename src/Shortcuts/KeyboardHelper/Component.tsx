/* eslint-disable @typescript-eslint/no-explicit-any */
import HistoryIcon from '@mui/icons-material/History';
import { Box, ClickAwayListener, TextField, Tooltip } from '@mui/material';
import { useContext } from 'react';
import { ShortcutObject } from '../../index.types';
import InternalHeader from '../../internal/InternalHeader';
import DataProvider, { DataContextInterface } from '../../Store';
import { StyledContainer, StyledKey, StyledPopper } from './css';

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

  const renderChip = (label: string, diff: any, highlight?: boolean) => <StyledKey
    elevation={1}
    onClick={() => handleKeyboardUpdate(shortcutId, { ...shortcutObject, ...diff } as ShortcutObject)}
    highlight={(highlight || false).toString()}
  >{label}</StyledKey>;

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
            <Box display={'flex'} flexDirection="row" alignItems={'center'} style={{ gap: '8px' }}>
              {renderChip('⇧', { shiftKey: !shortcutObject?.shiftKey }, shortcutObject?.shiftKey)}
              {renderChip('⌃', { ctrlKey: !shortcutObject?.ctrlKey }, shortcutObject?.ctrlKey)}
              {renderChip('⌥', { altKey: !shortcutObject?.altKey }, shortcutObject?.altKey)}
              {renderChip('⌘', { metaKey: !shortcutObject?.metaKey }, shortcutObject?.metaKey)}
              <TextField
                color="info"
                size="small"
                variant='outlined'
                label="Char"
                autoFocus
                onFocus={e => e.currentTarget.select()}
                value={shortcutObject?.char || ''}
                onChange={e => e.target.value.length > 0 &&
                  handleKeyboardUpdate(shortcutId, { ...shortcutObject, char: e.target.value.substring(0, 1).toUpperCase() } as ShortcutObject)}
              />
              <TextField
                color="info"
                size="small"
                variant='outlined'
                label="Ascii"
                type={'number'}
                onFocus={e => e.currentTarget.select()}
                value={shortcutObject?.ascii || ''}
                onChange={e => handleKeyboardUpdate(shortcutId, { ...shortcutObject, ascii: Number(e.target.value) } as ShortcutObject)}
              />
            </Box>
            <InternalHeader
            noDefaults
            title={shortcutObject.label}
            id='consoleHeader'
            actions={[{
              icon: <HistoryIcon />,
              title: 'Revert to original shortcut',
              onClick: () => handleKeyboardRevert(shortcutId),
            }]}/>
          </StyledContainer>
      </ClickAwayListener>
    </StyledPopper>
  </>;
};
