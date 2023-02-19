/* eslint-disable no-unused-vars */
import { CSSProperties, MouseEvent, ReactNode, useContext, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Highlight, SettingsObject, StatusObject, StatusType } from '../index.types'
import StatusCore from '../StatusCore'
import DataProvider, { DataContextInterface } from '../Store'

export default function ({
  id,
  secondary,
  style,
  onClick,
  tooltip,
  children,
  endSeparator,
  startSeparator,

  content,
  title,
} : {
  id: string,
  secondary?: boolean,
  style?: CSSProperties,
  onClick?: (event: MouseEvent<HTMLDivElement>) => void,
  tooltip?: ReactNode | string,
  children?: ReactNode,
  endSeparator?: boolean,
  startSeparator?: boolean,

  content: ReactNode,
  title?: string,
}) {
  const {
    status,
    handleStatusTypeUpdate,
    handleStatusConsoleTitleUpdate,
    updateConsoleActiveId
  } : {
    status: StatusObject[],
    handleStatusTypeUpdate: DataContextInterface['handleStatusTypeUpdate'],
    handleStatusConsoleTitleUpdate: DataContextInterface['handleStatusConsoleTitleUpdate'],
    updateConsoleActiveId: DataContextInterface['updateConsoleActiveId'],
  } = useContext(DataProvider)
  const { consoleActiveId, isConsoleOpen } = useContext(DataProvider).settings as SettingsObject
  const [statusObject, setStatusObject] = useState<StatusObject | null>(null)
  const [elementFound, setElementFound] = useState<HTMLElement | null>(null)

  const computeHightlight = (statusObject && isConsoleOpen && statusObject?.uniqueId === consoleActiveId)
    ? Highlight.PRIMARY
    : Highlight.DEFAULT

  const handleOnClick = (event: MouseEvent<HTMLDivElement>) => {
    if (onClick) onClick(event)
    if (!statusObject) return
    if (!isConsoleOpen || consoleActiveId !== id) updateConsoleActiveId({ id: statusObject?.uniqueId })
  }

  useEffect(() => {
    setElementFound(document.getElementById('mui-status-console') || null)
  }, [statusObject, consoleActiveId, isConsoleOpen])

  useEffect(() => {
    const foundObject = status.find(({ uniqueId }) => uniqueId === id)
    if (statusObject === null && foundObject) {
      setStatusObject(foundObject)
      handleStatusTypeUpdate({ id, type: StatusType.CONSOLE })
    }
  }, [status, id, statusObject])

  useEffect(() => {
    if (statusObject) handleStatusConsoleTitleUpdate({ id, title })
  }, [statusObject, id, title])

  return <>
    <StatusCore {...{
      id,
      endSeparator,
      startSeparator,
      tooltip,
      secondary,
      highlight: computeHightlight,
      onClick: handleOnClick,
      style: { ...style }
    }}
    >
      {children}
    </StatusCore>
    {elementFound && statusObject && statusObject.uniqueId === consoleActiveId && createPortal(content, elementFound)}
  </>
}
