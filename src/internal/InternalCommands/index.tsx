/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Autocomplete, Box, ClickAwayListener, Menu, MenuItem, Paper, Popper, TextField, Typography } from '@mui/material';
import { cloneElement, useContext, useEffect, useRef, useState } from 'react';
import KeyboardHelper from '../../Shortcuts/KeyboardHelper';
import DataProvider from '../../Store';
import InternalHeader from '../InternalHeader';

const kbdId = 'commands';

const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Good, the Bad and the Ugly', year: 1966 },
  { label: 'Fight Club', year: 1999 },
  {
    label: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
  },
  {
    label: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
  },
  { label: 'Forrest Gump', year: 1994 },
  { label: 'Inception', year: 2010 },
  {
    label: 'The Lord of the Rings: The Two Towers',
    year: 2002,
  },
  { label: 'One Flew Over the Cuckoo\'s Nest', year: 1975 },
  { label: 'Goodfellas', year: 1990 },
  { label: 'The Matrix', year: 1999 },
  { label: 'Seven Samurai', year: 1954 },
  {
    label: 'Star Wars: Episode IV - A New Hope',
    year: 1977,
  },
  { label: 'City of God', year: 2002 },
  { label: 'Se7en', year: 1995 },
  { label: 'The Silence of the Lambs', year: 1991 },
  { label: 'It\'s a Wonderful Life', year: 1946 },
  { label: 'Life Is Beautiful', year: 1997 },
  { label: 'The Usual Suspects', year: 1995 },
  { label: 'Léon: The Professional', year: 1994 },
  { label: 'Spirited Away', year: 2001 },
  { label: 'Saving Private Ryan', year: 1998 },
  { label: 'Once Upon a Time in the West', year: 1968 },
  { label: 'American History X', year: 1998 },
  { label: 'Interstellar', year: 2014 },
  { label: 'Casablanca', year: 1942 },
  { label: 'City Lights', year: 1931 },
  { label: 'Psycho', year: 1960 },
  { label: 'The Green Mile', year: 1999 },
  { label: 'The Intouchables', year: 2011 },
  { label: 'Modern Times', year: 1936 },
  { label: 'Raiders of the Lost Ark', year: 1981 },
  { label: 'Rear Window', year: 1954 },
  { label: 'The Pianist', year: 2002 },
  { label: 'The Departed', year: 2006 },
  { label: 'Terminator 2: Judgment Day', year: 1991 },
  { label: 'Back to the Future', year: 1985 },
  { label: 'Whiplash', year: 2014 },
];

export default (): JSX.Element => {
  const { handleKeyboardRegister, commands } = useContext(DataProvider);
  const [open, setOpen] = useState<boolean>(false);
  // const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  // const containerRef = useRef<HTMLDivElement>(null);

  // const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   setAnchorEl(containerRef.current);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

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
          clearOnEscape
          autoSelect
          onChange={(e, v) => {
            console.log(v);
            setOpen(false);
          }
          }
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
                <Typography variant="subtitle2" color="textSecondary">{option.label}</Typography>
              </Box>
              {option.shortcutId && <>
              <KeyboardHelper shortcutId={option.shortcutId} asChip />
              </>}
            </Box>
          </div>}
          id="combo-box-demo"
          options={commands}
          renderInput={params => <TextField autoFocus {...params} fullWidth size="small" label="Commands" />}
        />
      </Paper>
      </ClickAwayListener>
    </div>}
  </>;
};
