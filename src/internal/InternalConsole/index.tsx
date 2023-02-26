/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import AppsOutageIcon from '@mui/icons-material/AppsOutage'
import CloseIcon from '@mui/icons-material/Close'
import { Tooltip, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Resizable } from 're-resizable'
import { useCallback, useContext, useEffect, useState } from 'react'
import { PlacementPosition, SettingsObject } from '../../index.types'
import DataProvider from '../../Store'

const StyledStatusConsole = styled('div')(() => ({
  flex: '1 0 auto',
  overflow: 'hidden',
  display: 'flex',
}))

const StyledResizable = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  flex: '1 1 auto',
}))

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

  // (bottom === 'true'
  // 	? '& > div > div:nth-child(2) > div:not(:first-child)'
  // 	: '& > div > div:nth-child(2) > div:not(:nth-child(3))'): {
  // 	display: 'none',
  // }
  '& > div > div:nth-child(2) > div': {
    display: 'none',
  },
  '& > div > div:nth-child(2) > div:nth-child(1)': {
    display: bottom === 'true' ? 'block' : 'none',
  },
  '& > div > div:nth-child(2) > div:nth-child(3)': {
    display: bottom === 'true' ? 'none' : 'block',
  },

  // '& > div > div:nth-child(2) > div:not(nth-child(3))': {
  //   display: bottom === 'true' ? 'block' : 'none',
  // }
}))

const StyledEmptyWrapper = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  flex: '1 1 auto',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '8px',
}))

const StyledTabs = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '0px',
}))

const StyledCloseIcon = styled(CloseIcon)(() => ({
  fontSize: '20px'
}))

const StyledContainer = styled('div')<{ position: string }>(({ position }) => ({
  flex: '1 1 auto',
  display: 'flex !important',
  flexDirection: position === PlacementPosition.BOTTOM ? 'column' : 'column-reverse'
}))

const StyledTab = styled(Typography)<{ activated?: string }>(({ theme, activated }) => ({
  padding: '4px 12px',
  cursor: 'pointer',
  userSelect: 'none',
  backgroundColor: activated === 'true' ? theme.palette.primary.main : 'transparent',
  color: activated === 'true' ? theme.palette.background.default : theme.palette.text.secondary,

  '&:hover': {
    backgroundColor: activated === 'true' ? theme.palette.primary.dark : theme.palette.divider,
    color: activated === 'true' ? theme.palette.background.default : theme.palette.text.primary,
  }
}))

const domId = 'mui-status-console'
const domIdWrapper = 'mui-status-console-wrapper'
const relevantType = 'console'
const localStorageKey = 'mui-industrial-console-height'

export default function () {
  const { status, updateConsoleActiveId, updateIsConsoleOpen } = useContext(DataProvider)
  const { consoleActiveId, isConsoleOpen, position } = useContext(DataProvider).settings as SettingsObject

  const isActivated = (uniqueId: string): boolean => uniqueId === consoleActiveId
  const relevantConsoles = status.filter(({ type }) => type === relevantType)

  const [height, setHeight] = useState<string | undefined>()
  const [width, setWidth] = useState('100%')

  const handleUserKeyPress = useCallback(event => {
    const { keyCode } = event
    if ((keyCode === 27)) {
      updateIsConsoleOpen()
    }
  }, [])

  const computeHeight = useCallback((d: number) => {
    const computedHeight = Number((height || '350px').replace('px', '')) + d
    if (computedHeight < 125) {
      updateConsoleActiveId({ id: undefined })
    } else {
      setHeight(`${computedHeight}px`)
      setWidth('100%')
    }
  }, [height])

  useEffect(() => {
    if (height) {
      localStorage.setItem(localStorageKey, height)
    }
  }, [height])

  useEffect(() => {
    const savedHeight = localStorage.getItem(localStorageKey)
    if (savedHeight) {
      setHeight(savedHeight)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('keydown', handleUserKeyPress)
    return () => {
      window.removeEventListener('keydown', handleUserKeyPress)
    }
  }, [handleUserKeyPress])

  return <>
    {(isConsoleOpen) && <>
      {status.some(({ type }) => type === relevantType) && <StyledWrapper
        {...{ id: domIdWrapper }}
        bottom={String(position === PlacementPosition.BOTTOM)}
      >
        <Resizable
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
                        activated: isActivated(uniqueId).toString()
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
                {status.filter(({ type }) => type === relevantType).map(statusItem => <>
                  {statusItem.children}
                </>)}
                <Typography {...{ variant: 'caption', color: 'textSecondary' }}>Seems no consoles available. Select one from above</Typography>
              </StyledEmptyWrapper>}
          </StyledResizable>
        </Resizable>
      </StyledWrapper>}
    </>}
  </>
}
