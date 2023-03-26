/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button, IconButton, Tooltip } from '@mui/material';
import { Resizable } from 're-resizable';
import { useCallback, useContext, useEffect, useState } from 'react';
import { domConsoleId, localStorageKeyHeight, PlacementPosition, SettingsObject } from '../../index.types';
import DataProvider from '../../Store';
import { StyledCloseIcon, StyledContainer, StyledEmptyWrapper, StyledResizable, StyledStatusConsole, StyledTab, StyledTabs, StyledWrapper } from './css';

const kbdId = 'console';
const domId = domConsoleId;
const domIdWrapper = 'mui-status-console-wrapper';
const relevantType = 'console';

export default (): JSX.Element => {
  const {
    status,
    updateConsoleActiveId,
    updateIsConsoleOpen,
    handleKeyboardRegister,
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
    handleKeyboardRegister({ id: kbdId, ascii: 27, char: '', onTrigger: () => updateIsConsoleOpen(), label: 'Hide/Show console' });
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
          <StyledResizable>
            {relevantConsoles.some(({ uniqueId }) => uniqueId === consoleActiveId)
              ? <>
                <StyledContainer position={position.toString()}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginRight: '4px',
                    cursor: 'pointer',
                  }}>
                    <StyledTabs>
                      {relevantConsoles.map(({ uniqueId, title, children }) => <StyledTab {...{
                        key: uniqueId,
                        variant: 'caption',
                        onClick: () => updateConsoleActiveId({ id: uniqueId }),
                        activated: isActivated(uniqueId).toString(),
                      }}
                      >
                        {title  }
                        {children || title || uniqueId}
                      </StyledTab>)}
                    </StyledTabs>
                    <Tooltip {...{ title: 'Close console section' }} arrow>
                      <IconButton onClick={() => updateConsoleActiveId({})} size="small">
                        <StyledCloseIcon style={{ fontSize: '16px' }} />
                      </IconButton>
                    </Tooltip>
                  </div>
                  <StyledStatusConsole {...{ id: domId }} />
                </StyledContainer>
              </>
              : <StyledEmptyWrapper>
                <Box display={'flex'} flexDirection="row" style={{ gap: '8px' }}>
                  {status.filter(({ type }) => type === relevantType).map(statusItem => <Button
                  style={{ padding: '32px' }}
                  variant="outlined"
                  color="inherit"
                  onClick={() => updateConsoleActiveId({ id: statusItem.uniqueId })}
                  key={statusItem.uniqueId}>
                    {statusItem.children}
                  </Button>)}
                </Box>
              </StyledEmptyWrapper>}
          </StyledResizable>
        </Resizable>
      </StyledWrapper>}
    </>}
  </>;
};
