/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button, IconButton, Tooltip, Typography } from '@mui/material';
import { Resizable } from 're-resizable';
import { useCallback, useContext, useEffect, useState } from 'react';
import { domConsoleId, localStorageKeyHeight, PlacementPosition, SettingsObject } from '../../index.types';
import DataProvider from '../../Store';
import InternalActions from '../InternalActions';
import {
  StyledCloseIcon, StyledContainer, StyledEmptyWrapper, StyledResizable,
  StyledStatusConsole, StyledTab, StyledTabs, StyledTabsAndActionWrapper,
  StyledWrapper,
} from './css';

const kbdId = 'console';
const domId = domConsoleId;
const domIdWrapper = 'mui-status-console-wrapper';
const relevantType = 'console';

export default (): JSX.Element => {
  const {
    status,
    updateConsoleActiveId,
    updateIsConsoleOpen,
    handleKeyboardsRegister,
    // handleKeyboardRegister,
  } = useContext(DataProvider);
  const { consoleActiveId, isConsoleOpen, position } = useContext(DataProvider).settings as SettingsObject;

  const isActivated = (uniqueId: string): boolean => uniqueId === consoleActiveId;
  const relevantConsoles = status.filter(({ type }) => type === relevantType);

  const [height, setHeight] = useState<string | undefined>();
  const [width, setWidth] = useState('100%');

  const computeHeight = useCallback((d: number) => {
    const computedHeight = Number((height || '350px').replace('px', '')) + d;
    if (computedHeight < 125) {
      updateConsoleActiveId({ id: undefined });
    } else {
      setHeight(`${computedHeight}px`);
      setWidth('100%');
    }
  }, [height, updateConsoleActiveId]);

  useEffect(() => {
    if (height) {
      localStorage.setItem(localStorageKeyHeight, height);
    }
  }, [height]);

  useEffect(() => {
    const savedHeight = localStorage.getItem(localStorageKeyHeight);
    if (savedHeight) {
      setHeight(savedHeight);
    }
  }, []);

  useEffect(() => {
    handleKeyboardsRegister([
      { id: kbdId, ascii: 192, char: '', onTrigger: () => updateIsConsoleOpen(), label: 'Hide/Show console' },
      { id: `${kbdId}_DE`, ascii: 229, char: '', onTrigger: () => updateIsConsoleOpen(), label: 'Hide/Show console (DE)' },
    ]);
  });

  return <>
    {(isConsoleOpen) && <>
      {status.some(({ type }) => type === relevantType) && <StyledWrapper
        {...{ id: domIdWrapper }}
        bottom={String(position === PlacementPosition.BOTTOM)}
      >
        <Resizable
          enable={{
            left: false,
            right: false,
            top: position === PlacementPosition.BOTTOM,
            bottom: position === PlacementPosition.TOP,
            topRight: false,
            bottomRight: false,
            bottomLeft: false,
            topLeft: false,
          }}
          onResizeStop={(_e, _direction, _ref, d) => computeHeight(d.height)}
          style={{ display: 'flex', flexDirection: 'column' }}
          minHeight="75px"
          maxHeight="950px"
          defaultSize={{ width, height: height || '350px' }}
        >
          <StyledResizable id='resizable'>
            {relevantConsoles.some(({ uniqueId }) => uniqueId === consoleActiveId)
              ? <>
                <StyledContainer id="consoleTabs" position={position.toString()}>
                  <StyledTabsAndActionWrapper>
                    <StyledTabs>
                      {relevantConsoles.map(({ uniqueId, options }) => <StyledTab {...{
                        key: uniqueId,
                        variant: 'caption',
                        onClick: () => updateConsoleActiveId({ id: uniqueId }),
                        activated: isActivated(uniqueId).toString(),
                      }}
                      >
                        <Box display={'flex'} flexDirection='row' flexWrap={'nowrap'} style={{ gap: '8px' }}>
                          {/* {children  || uniqueId} */}
                          // need to show the console
                          <InternalActions actions={options.actions} fontSize="14px"/>
                        </Box>
                      </StyledTab>)}
                    </StyledTabs>
                    <Tooltip {...{ title: 'Close console section' }} arrow placement={position === PlacementPosition.BOTTOM ? 'top' : 'bottom'}>
                      <IconButton onClick={() => updateConsoleActiveId({})} size="small">
                        <StyledCloseIcon style={{ fontSize: '16px' }} />
                      </IconButton>
                    </Tooltip>
                  </StyledTabsAndActionWrapper>
                  <StyledStatusConsole {...{ id: domId }} />
                </StyledContainer>
              </>
              : <StyledEmptyWrapper>
                <Box display={'flex'} flexDirection="row" style={{ gap: '8px' }}>
                  {status.filter(({ type }) => type === relevantType).map(statusItem => <Button
                  style={{ padding: '24px', textTransform: 'unset' }}
                  variant="outlined"
                  color="inherit"
                  onClick={() => updateConsoleActiveId({ id: statusItem.uniqueId })}
                  key={statusItem.uniqueId}>
                    <Box display={'flex'} flexDirection="column" style={{ gap: '8px' }}>
                      {/* {statusItem.children} */}
                      // need to show the console
                      <Typography variant="caption" color="textSecondary">{statusItem.options.title}</Typography>
                    </Box>
                  </Button>)}
                </Box>
              </StyledEmptyWrapper>}
          </StyledResizable>
        </Resizable>
      </StyledWrapper>}
    </>}
  </>;
};
