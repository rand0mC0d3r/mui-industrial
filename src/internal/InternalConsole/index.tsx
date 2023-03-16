/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import AppsOutageIcon from '@mui/icons-material/AppsOutage';
import CloseIcon from '@mui/icons-material/Close';
import { Tooltip, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Resizable } from 're-resizable';
import { Fragment, useCallback, useContext, useEffect, useState } from 'react';
import { domConsoleId, localStorageKeyHeight, PlacementPosition, SettingsObject } from '../../index.types';
import Keyboard from '../../Shortcuts/Keyboard';
import DataProvider from '../../Store';

const StyledStatusConsole = styled('div')(() => ({
  flex: '1 0 auto',
  overflow: 'hidden',
  display: 'flex',
}));

const StyledResizable = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  flex: '1 1 auto',
}));

const StyledWrapper = styled('div')<{ bottom: string }>(({ theme, bottom }) => ({
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  borderTop: bottom === 'true' ? `1px solid ${theme.palette.divider}` : 'unset',
  borderBottom: bottom !== 'true' ? `1px solid ${theme.palette.divider}` : 'unset',
  backgroundColor: theme.palette.background.default,
  bottom: bottom === 'true' ? '0px' : 'unset',
  top: bottom !== 'true' ? '0px' : 'unset',
  left: '0px',
  alignItems: 'center',
  right: '0px',
  zIndex: 99,
}));

const StyledEmptyWrapper = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  flex: '1 1 auto',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '8px',
}));

const StyledTabs = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '0px',
}));

const StyledCloseIcon = styled(CloseIcon)(() => ({
  fontSize: '20px',
}));

const StyledContainer = styled('div')<{ position: string }>(({ position }) => ({
  flex: '1 1 auto',
  display: 'flex !important',
  flexDirection: position === PlacementPosition.BOTTOM ? 'column' : 'column-reverse',
}));

const StyledTab = styled(Typography)<{ activated?: string }>(({ theme, activated }) => ({
  padding: '4px 12px',
  cursor: 'pointer',
  userSelect: 'none',
  backgroundColor: activated === 'true' ? theme.palette.primary.main : 'transparent',
  color: activated === 'true' ? theme.palette.background.default : theme.palette.text.secondary,

  '&:hover': {
    backgroundColor: activated === 'true' ? theme.palette.primary.dark : theme.palette.divider,
    color: activated === 'true' ? theme.palette.background.default : theme.palette.text.primary,
  },
}));

const domId = domConsoleId;
const domIdWrapper = 'mui-status-console-wrapper';
const relevantType = 'console';

export default (): JSX.Element => {
  const { status, updateConsoleActiveId, updateIsConsoleOpen } = useContext(DataProvider);
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

  return <>
    <Keyboard id="mui-industrial-open-console" label="Open console" ascii={27} char="P" onTrigger={() => updateIsConsoleOpen()} />
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
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <StyledTabs>
                      {relevantConsoles.map(({ uniqueId, title }) => <StyledTab {...{
                        key: uniqueId,
                        variant: 'caption',
                        onClick: () => updateConsoleActiveId({ id: uniqueId }),
                        activated: isActivated(uniqueId).toString(),
                      }}
                      >
                        {title || uniqueId}
                      </StyledTab>)}
                    </StyledTabs>
                    <Tooltip {...{ title: 'Close console section' }}>
                      <StyledCloseIcon {...{ onClick: () => updateConsoleActiveId({}) }} />
                    </Tooltip>
                  </div>
                  <StyledStatusConsole {...{ id: domId }} />
                </StyledContainer>
              </>
              : <StyledEmptyWrapper>
                <AppsOutageIcon />
                {status.filter(({ type }) => type === relevantType).map(statusItem => <Fragment key={statusItem.uniqueId}>
                  {statusItem.children}
                </Fragment>)}
                <Typography {...{ variant: 'caption', color: 'textSecondary' }}>Seems no consoles available. Select one from above</Typography>
              </StyledEmptyWrapper>}
          </StyledResizable>
        </Resizable>
      </StyledWrapper>}
    </>}
  </>;
};
