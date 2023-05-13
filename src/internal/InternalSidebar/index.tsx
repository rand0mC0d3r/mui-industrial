/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AdbIcon from '@mui/icons-material/Adb';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import { Button, IconButton, Paper, Tooltip, Typography } from '@mui/material';
import { cloneElement, useEffect, useState } from 'react';
import { composeDomId, packageName } from '../../Store';
import { StyledActions, StyledActionsTall, StyledPaper, StyledSidebar } from './css';

const items = [
  {
    icon: <AccessibilityIcon />,
    title: 'Accessibility',
    onClick: () => {},
    id: 'accessibility',
    secondary: false,
  },
  {
    icon: <AccountBalanceWalletIcon />,
    title: 'AccountBalanceWallet',
    onClick: () => {},
    id: 'accountBalanceWallet',
    secondary: false,
  },
  {
    icon: <AcUnitIcon color="secondary" />,
    title: 'AcUnit',
    onClick: () => {},
    id: 'acUnit',
    secondary: false,
  },
  {
    icon: <AddAlertIcon color="action" />,
    title: 'AddAlert',
    onClick: () => {},
    id: 'addAlert',
    secondary: true,
  },
];

export default (): JSX.Element => {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [open, setOpen] = useState(false);

  const toggleSelected = (index: number) => {
    if (index === selectedIndex) {
      setSelectedIndex(-1);
    } else {
      setSelectedIndex(index);
    }
  };

  useEffect(() => {
    if (selectedIndex !== -1) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [selectedIndex]);

  return <>
    <Paper style={{ alignSelf: 'stretch', display: 'flex' }} elevation={1} id={composeDomId(packageName, ['sidebar'])}>
      <StyledSidebar>
        {/* <AdbIcon /> */}

        <StyledActionsTall>
        {items.filter(({ secondary }) => !secondary).map(({ icon, title, id }, index) => <Tooltip key={id} title={title} arrow placement='right'>
          <Button onClick={() => toggleSelected(index)} variant="text" style={{ minWidth: 'unset' }}>
            {cloneElement(icon, { style: { fontSize: '28px' }, color: index === selectedIndex ? 'primary' : 'action' })}
          </Button>
        </Tooltip>)}
        </StyledActionsTall>

        <StyledActions>
        {items.filter(({ secondary }) => secondary).map(({ icon, title, id }, index) => <Tooltip key={id} title={title} arrow placement='right'>
          <Button variant="text" style={{ minWidth: 'unset' }} onClick={() => toggleSelected(index)}>
            {cloneElement(icon, { style: { fontSize: '28px' }, color: 'action' })}
          </Button>
        </Tooltip>)}
        </StyledActions>
      </StyledSidebar>
      {open && <StyledPaper elevation={0} square id={composeDomId(packageName, ['sidebar', 'panel'])} >
        open:{selectedIndex}
        </StyledPaper>}
    </Paper>
  </>;
};
