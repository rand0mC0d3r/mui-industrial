/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Autocomplete, Box, ClickAwayListener, Paper, TextField, Typography } from '@mui/material';
import { cloneElement, useContext, useEffect, useState } from 'react';
import KeyboardHelper from '../../Shortcuts/KeyboardHelper';
import DataProvider from '../../Store';
import InternalHeader from '../InternalHeader';
import { StyledHighlight } from './css';

const kbdId = 'commands';

export default (): JSX.Element => {
  const { handleKeyboardRegister, handleCallCommand, commands } = useContext(DataProvider);
  const [open, setOpen] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState('');

  const highlightString = (str: string, search: string) => {
    const parts = str.split(new RegExp(`(${search})`, 'gi'));
    return <Typography variant="subtitle2" color="textSecondary">
      {parts.map((part, i) => <StyledHighlight
        key={i}
        highlight={part.toLowerCase() === search.toLowerCase() ? 'true' : 'false'}
      >
        {part}
      </StyledHighlight>)}
    </Typography>;
  };

  useEffect(() => {
    handleKeyboardRegister({
      id: kbdId,
      shiftKey: true, char: 'P', metaKey: true,
      onTrigger: () => {
        setOpen(p => !p);
      }, label: 'Hide/Show quick commands',
    });
  });

  return <>
    {open && <div style={{
      position: 'absolute',
      top: '32px',
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
    }}>
      <ClickAwayListener onClickAway={() => setOpen(false)}>
      <Paper style={{ width: '60vw', maxWidth: '750px', padding: '8px' }} elevation={8}>
        <Autocomplete
          disablePortal
          open
          autoHighlight
          inputValue={inputValue}
          clearOnEscape
          onClose={(_, reason) => {
            if (reason === 'escape') setOpen(false);
          }}
          autoSelect
          onInputChange={(_, newInputValue) => {
            setInputValue(newInputValue);
          }}
          onChange={(_, v: any) => {
            handleCallCommand(v.id);
            setOpen(false);
          }}
          fullWidth
          openOnFocus
          style={{ position: 'relative' }}
          PaperComponent={({ children }) =>
          <Paper style={{ position: 'relative' }}>
            <div style={{ position: 'relative' }}>{children}</div>
            <InternalHeader id="quickCommands" noDefaults title='Quick commands' />
          </Paper>}
          renderOption={(props: any, option: any) =>
          <div {...props} onContextMenu={(e: React.MouseEvent) => e.preventDefault()}>
            <Box display="flex" justifyContent={'space-between'} style={{ width: '100%' }} alignItems="center">
              <Box display="flex" style={{ gap: '8px' }} flexWrap="nowrap" alignItems="center">
                {cloneElement(option.icon, { style: { fontSize: '16px' } })}
                {highlightString(option.label, inputValue)}
              </Box>
              {option.shortcutId && <>
              <KeyboardHelper shortcutId={option.shortcutId} asChip />
              </>}
            </Box>
          </div>}
          id="combo-box-demo"
          options={commands}
          renderInput={params => <TextField autoFocus {...params}  fullWidth size="small" label="Commands" />}
        />
      </Paper>
      </ClickAwayListener>
    </div>}
  </>;
};
