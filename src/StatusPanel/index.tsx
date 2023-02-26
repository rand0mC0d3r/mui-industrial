/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { alpha, Box, ClickAwayListener, Popper } from '@mui/material'
import { styled } from '@mui/material/styles'
import { CSSProperties, HTMLAttributes, MouseEvent, ReactNode, useContext, useEffect, useState } from 'react'
import { Highlight, PanelWidth, PlacementPosition, SettingsObject, StatusObject, StatusOptionsProps } from '../index.types'
import InternalHeader from '../internal/InternalHeader'
import StatusCore from '../StatusCore'
import DataProvider from '../Store'

const StyledBox = styled(Box)<{width?: PanelWidth }>(({ theme, width } : { theme: any, width?: PanelWidth}) => ({
  width: `${width ? `${theme.breakpoints.values[width] / 1.42}px` : 'auto'}`,
  height: `${width ? `${theme.breakpoints.values[width] / 1.24}px` : 'auto'}`,
}))

const StyledPopper = styled(Popper)(() => ({
  zIndex: '101',
}))

const StyledContainer = styled('div')<{
  elevation?: number,
  highlight: string,
  variant: string,
  decoration?: string
}>(({
  theme,
  elevation,
  highlight,
  variant,
  decoration
} : {
  theme: any,
  elevation?: number,
  highlight: string,
  variant: string,
  decoration?: string
}) => ({
  display: 'flex',
  alignItems: 'stretch',
  position: 'relative',
  flexDirection: 'column',
  padding: 0,
  backdropFilter: 'blur(8px)',

  backgroundColor: `${alpha(theme.palette.background.default, 0.75)}`,
  borderRadius: `${theme.shape.borderRadius}px`,
  margin: decoration === 'true' ? `${theme.spacing(0.75)} 0px` : `${theme.spacing(0.25)} 0px`,
  border: variant === 'default'
    ? '2px solid transparent'
    : `2px solid ${highlight !== 'default' ? theme.palette[highlight].main : 'transparent'}`,
  boxShadow: theme.shadows[elevation || 2]
}))

/**
 *
 * Status Panel component
 * @description
 * Status Panel is a Status component that can be used to display a panel
 * with a title and content. It can be used to display a list of items, a table,
 * or any other content.
 *
 * @param id - (string) Unique id of the Status Panel
 * @param disabled - (boolean) If true, the Status Panel will be disabled
 * @param highlight - (Highlight) Highlight color of the Status Panel
 * @param options - (StatusOptionsProps) Options for the Status Panel
 * @param secondary - (boolean) If true, the Status Panel will be displayed as a secondary panel
 * @param tooltip - (ReactNode | string) Tooltip to display when hovering over the Status Panel
 * @param onClick - (event: MouseEvent<HTMLDivElement>) => void) Function to call when the Status Panel is clicked
 * @param onContextMenu - (event: MouseEvent<HTMLDivElement>) => void) Function to call when the Status Panel is right clicked
 * @param style - (CSSProperties) Style to apply to the Status Panel
 * @param className - (HTMLAttributes<HTMLDivElement>['className']) Class to apply to the Status Panel
 * @param children - (ReactNode) Children to display inside the Status Panel
 *
 * @example
 * <Status
 *  id="statusPanel"
 *  options={{
 *    as: StatusType.PANEL,
 *    title: 'Status Console',
 *    content: <div>Content</div>,
 *    ...
 *  }}
 * >...
 *
 * @returns (JSX.Element) Status Panel component
 */

export default function ({
  id,
  disabled,
  highlight = Highlight.DEFAULT,
  options = {
    panel: {
      elevation: 2,
      hasToolbar: true,
      hasDecoration: true,
    },
    separators: {
      start: false,
      end: false,
    }
  } as StatusOptionsProps,
  secondary = false,
  tooltip = '',
  onClick,
  onContextMenu,
  style,
  className,
  children,
} : {
  id: string,
  disabled?: boolean,
  highlight?: Highlight,
  options: StatusOptionsProps,
  secondary?: boolean,
  tooltip?: ReactNode | string,
  onClick?: (event: MouseEvent<HTMLDivElement>) => void,
  onContextMenu?: (event: MouseEvent<HTMLDivElement>) => void,
  style?: CSSProperties,
  className?: HTMLAttributes<HTMLDivElement>['className'],
  children?: ReactNode,
}) {
  const {
    status,
    settings,
  } : {
    status: StatusObject[],
    settings: SettingsObject,
  } = useContext(DataProvider)
  const [statusObject, setStatusObject] = useState<StatusObject | null>(null)
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleOnClick = (event: MouseEvent<HTMLDivElement>) => {
    if (statusObject?.keepOpen) return
    if (onClick) onClick(event)
    setAnchorEl(anchorEl ? null : event?.currentTarget as any)
  }

  const handleOnClose = (event: any) => {
    if (options?.panel?.onClose && !statusObject?.keepOpen) options?.panel?.onClose(event)
    if (!statusObject?.keepOpen || !settings.hasLock) setAnchorEl(null)
  }

  useEffect(() => {
    const foundObject = status.find(item => item.uniqueId === id)
    if (!foundObject) return
    setStatusObject(foundObject)
  }, [status, id])

  const determineHighlight = () => (statusObject?.keepOpen || open) ? Highlight.PRIMARY : highlight

  return <>
    <StatusCore {...{
      id,
      disabled,
      onContextMenu,
      className,
      tooltip: open ? null : tooltip,
      options: { separators: options.separators },
      hasArrow: open && options?.panel?.hasDecoration,
      highlight: determineHighlight(),
      secondary,
      onClick: handleOnClick,
      style,
    }}
    >
      {children}
    </StatusCore>
    <StyledPopper {...{
      keepMounted: statusObject?.keepOpen,
      open,
      anchorEl,
      onClose: options?.panel?.onClose,
      elevation: options?.panel?.elevation,
      placement: `${settings.position === PlacementPosition.TOP ? 'bottom' : 'top'}-${secondary ? 'end' : 'start'}` as any,
      id: `mui-status-panel-popover-${id}`,
    }}
    >
      <ClickAwayListener onClickAway={event => handleOnClose(event)}>
        <StyledContainer {...{
          elevation: options?.panel?.elevation,
          highlight: determineHighlight().toString(),
          variant: settings.variant.toString(),
          decoration: options?.panel?.hasDecoration?.toString()
        }}
        >
          <StyledBox
            display="flex"
            alignItems="stretch"
            justifyContent="space-between"
            flexDirection="column"
            width={options?.panel?.width}
          >
            {options?.content}
          </StyledBox>
          {options?.panel?.hasToolbar && <InternalHeader {...{
            id,
            actions: options?.panel?.actions,
            title: options?.title
          }}
          />}
        </StyledContainer>
      </ClickAwayListener>
    </StyledPopper>
  </>
}
