/* eslint-disable no-unused-vars */
import { CSSProperties, MouseEvent, ReactNode } from 'react'
import { Highlight, StatusConsoleProps, StatusPanelProps, StatusType } from '../index.types'
import StatusConsole from '../StatusConsole'
import StatusCore from '../StatusCore'
import StatusPanel from '../StatusPanel'

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
  as = StatusType.SIMPLE,
  id,
  console,
  panel,
  secondary = false,
  style,
  onClick,
  onContextMenu,
  disabled = false,
  highlight = Highlight.DEFAULT,
  tooltip,
  children,
  endSeparator = false,
  startSeparator = false,
} : {
  as?: StatusType,
  id: string,
  console?: StatusConsoleProps,
  panel?: StatusPanelProps,
  secondary?: boolean,
  style?: CSSProperties,
  onClick?: (e: MouseEvent<HTMLDivElement>) => void,
  onContextMenu?: (e: MouseEvent<HTMLDivElement>) => void,
  disabled?: boolean,
  highlight?: Highlight,
  tooltip?: ReactNode | string,
  children?: JSX.Element,
  endSeparator?: boolean,
  startSeparator?: boolean,
}) {
  return <>
    {as === StatusType.SIMPLE && <StatusCore {...{
      id,
      secondary,
      style,
      onClick,
      onContextMenu,
      disabled,
      highlight,
      tooltip,
      endSeparator,
      startSeparator,
      children
    }}
    />}
    {as === StatusType.PANEL && <StatusPanel {...{
      id,
      secondary,
      style,
      onClick,
      highlight,
      tooltip,
      children,
      endSeparator,
      startSeparator,

      elevation: panel?.elevation,
      onClose: panel?.onClose,
      popover: panel?.children,
      popoverTitle: panel?.title,
      popoverActions: panel?.actions,
      hasToolbar: panel?.hasToolbar,
      hasDecoration: panel?.hasDecoration,
    }}
    />}
    {as === StatusType.CONSOLE && <StatusConsole {...{
      id,
      secondary,
      style,
      onClick,
      tooltip,
      children,
      console: console?.children,
      consoleTitle: console?.title,
    }}
    />}
  </>
}
