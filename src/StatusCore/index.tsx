/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined'
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined'
import { Tooltip } from '@mui/material'
import { styled } from '@mui/material/styles'
import { CSSProperties, MouseEvent, ReactNode, useCallback, useContext, useEffect, useLayoutEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Highlight, PlacementPosition, SettingsObject, StatusObject, ThemeShape } from '../index.types'
import DataProvider, { composeDomId } from '../Store'

const componentId = 'statusBar'

const backgroundColor = (theme: ThemeShape, highlight?: string) => {
  switch (highlight) {
    case 'primary':
      return theme.palette.primary.main
    case 'secondary':
      return theme.palette.secondary.main
    default:
      return ''
  }
}

const backgroundColorHover = (theme: ThemeShape, highlight?: string) => {
  switch (highlight) {
    case 'primary':
      return theme.palette.primary.dark
    case 'secondary':
      return theme.palette.secondary.dark
    default:
      return theme.palette.divider
  }
}

const isStartSeparator = (
  startSeparator: string,
  endSeparator: string,
  secondary: string
) => (secondary === 'false' && startSeparator === 'true') || (secondary === 'true' && endSeparator === 'true')

const isEndSeparator = (
  startSeparator: string,
  endSeparator: string,
  secondary: string
) => (secondary === 'false' && endSeparator === 'true') || (secondary === 'true' && startSeparator === 'true')

const SSpan = styled('span')(({ theme }: { theme: { spacing: any } }) => ({
  padding: '1px 10px',
  display: 'flex',
  flexWrap: 'nowrap',
  alignItems: 'stretch',
  fontSize: '14px',

  gap: `${theme.spacing(0.5)}`,

  '& > *': {
    fontSize: '14px !important',
  },
}))

const SArrowDown = styled(ArrowDropDownOutlinedIcon)<{ position: string }>(({ position }: { position: string }) => ({
  position: 'absolute',
  bottom: position !== 'top' ? '-10px' : 'unset',
  top: position === 'top' ? '16px' : 'unset',
}))

const STooltip = styled('div')(() => ({
  fontSize: '14px',
  maxHeight: '300px',
  overflow: 'scroll'
}))

const SArrowUp = styled(ArrowDropUpOutlinedIcon)(() => ({
  position: 'absolute',
  bottom: 'unset',
  top: '-14px',
}))

const SDiv = styled('div')<{
	secondary: string,
	endSeparator: string,
	startSeparator: string,
	hasclick?: string,
	highlight?: string,
	isdisabled?: string
 }>(({ theme, secondary, hasclick, highlight, startSeparator, endSeparator, isdisabled }) => ({
   WebkitFontSmoothing: 'auto',
   height: '100%',
   display: 'flex',
   flex: '0 0 auto',
   flexDirection: 'row',
   alignItems: 'stretch',
   gap: '16px',
   justifyContent: 'center',
   alignSelf: 'center',
   position: 'relative',

   borderLeft: isStartSeparator(startSeparator, endSeparator, secondary) ? `1px solid ${theme.palette.divider}` : 'none',
   borderRight: isEndSeparator(startSeparator, endSeparator, secondary) ? `1px solid ${theme.palette.divider}` : 'none',

   cursor: (hasclick === 'true' && isdisabled === 'false') ? 'pointer' : '',
   backgroundColor: backgroundColor(theme, highlight),
   color: theme.palette.text.primary,

   '& > div > *': {
     color: highlight !== 'default'
       ? `${theme.palette.background.default} !important`
       : '',
   },
   '& > span > div > *': {
     color: highlight !== 'default'
       ? `${theme.palette.background.default} !important`
       : '',
   },

   '&:hover': (hasclick === 'true' && isdisabled === 'false') ? {
     backgroundColor: backgroundColorHover(theme, highlight),
     color: `${theme.palette.text.primary}`,
   } : {}
 }))

/**
 * @param id - (string) Unique identifier for the status element.
 * @param secondary - (boolean) If needs to be applied a secondary style to the status element.
 * @param style - (CSSProperties) Style to be applied to the root element.
 * @param onClick - (function) Function to be executed on click event.
 * @param onContextMenu - (function) Function to be executed on context menu event.
 * @param disabled - (boolean) If needs to be disabled the status element.
 * @param highlight - (string) If needs to be applied a highlight style to the status element.
 * @param tooltip - (string) Tooltip to be displayed on hover.
 * @param children - (JSX.Element) Children to be displayed inside the status element.
 *
 * @returns (JSX.Element) Status element
 */
export default function ({
  id,
  style,
  onClick,
  onContextMenu,
  disabled = false,
  highlight = Highlight.DEFAULT,
  tooltip,
  children,

  hasArrow = false,
  secondary = false,
  endSeparator = false,
  startSeparator = false,
} : {
  id: string,

  style?: CSSProperties,
  onClick?: (e: MouseEvent<HTMLDivElement>) => void,
  onContextMenu?: (e: MouseEvent<HTMLDivElement>) => void,
  disabled?: boolean,
  highlight?: Highlight,
  tooltip?: ReactNode | string,
  children?: ReactNode,

  hasArrow?: boolean,
  secondary?: boolean,
  endSeparator?: boolean,
  startSeparator?: boolean,
}) {
  const { status, handleStatusUpdate, handleStatusAnnouncement, handleStatusDestroy } = useContext(DataProvider)
  const { allowRightClick, position } = useContext(DataProvider).settings as SettingsObject
  const [ownId, setOwnId] = useState<string | null>()
  const [statusObject, setStatusObject] = useState<StatusObject | null>(null)
  const [elementFound, setElementFound] = useState<HTMLElement | null>(null)

  const callbackHandleStatusAnnouncement = useCallback(
    () => handleStatusAnnouncement({ id, ownId, secondary, children }),
    [id, secondary, ownId, children, handleStatusAnnouncement]
  )

  const callbackHandleStatusDestroy = useCallback(() => { handleStatusDestroy({ id }) }, [id])

  const handleOnClick = (e: MouseEvent<HTMLDivElement>) => {
    if (onClick !== undefined && !disabled) {
      e.preventDefault()
      onClick(e)
      handleStatusUpdate({ id, ownId, children })
    }
  }

  const handleOnContextMenu = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    if (allowRightClick && onContextMenu !== undefined && !disabled) {
      onContextMenu(e)
    }
  }

  useEffect(() => {
    if (id && ownId && statusObject === null && !status.some(({ uniqueId }) => uniqueId === id)) {
      callbackHandleStatusAnnouncement()
    }
  }, [id, ownId, statusObject, status, callbackHandleStatusAnnouncement])

  useEffect(() => {
    const statusObjectFound = status.find(({ uniqueId }) => uniqueId === id)
    if ((statusObject === null || statusObject?.visible !== statusObjectFound?.visible) && statusObjectFound) {
      setStatusObject(statusObjectFound)
    }
  }, [status, id, statusObject])

  useLayoutEffect(() => {
    if (statusObject !== null) {
      setElementFound(document.getElementById(composeDomId(componentId, [secondary ? 'secondary' : 'primary'])) || null)
    }
  }, [secondary, statusObject])

  useEffect(() => {
    setOwnId((Math.random() + 1).toString(36).substring(7))
  }, [])

  // eslint-disable-next-line no-console
  useEffect(() => { if (!id) { console.error('Please define an id for the status bar item') } }, [id])

  useEffect(() => () => { callbackHandleStatusDestroy() }, [callbackHandleStatusDestroy])

  return <>
    {(statusObject !== null && !!id && elementFound)
    && createPortal(
      (statusObject.visible && children) && <SDiv {...{
        id,
        key: `mui-status-${id}`,
        onClick: handleOnClick,
        onContextMenu: handleOnContextMenu,

        style: { ...style, order: statusObject.index },

        highlight,
        secondary: secondary.toString(),
        startSeparator: startSeparator.toString(),
        endSeparator: endSeparator.toString(),
        hasclick: (!!onClick).toString(),
        isdisabled: disabled.toString(),
      }}
      >
        {hasArrow && <>
          {position === PlacementPosition.BOTTOM
            ? <SArrowUp color="primary" />
            : <SArrowDown position={position.toString()} color="primary" />}
        </>}
        {tooltip
          ? <Tooltip title={<STooltip>{tooltip}</STooltip>} arrow>
            <SSpan>{children}</SSpan>
          </Tooltip>
          : <SSpan>{children}</SSpan>}
      </SDiv>,
      elementFound
    )}
  </>
}
