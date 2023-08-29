/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { MouseEvent, useContext, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { domConsoleHeader, domConsoleId, Highlight, SettingsObject, StatusConsoleJSXProps, StatusObject, StatusType } from '../../../index.types';
import DataProvider, { DataContextInterface } from '../../../Store';
import StatusCore from '../StatusCore';

export default ({
  id,
  order,
  disabled,
  options,
  secondary,
  tooltip,
  onClick,
  onContextMenu,
  style,
  className,
  children,
} : StatusConsoleJSXProps): JSX.Element => {
  const { status, updateConsoleActiveId } = useContext(DataProvider) as DataContextInterface;
  const { handleStatusTypeUpdate } = useContext(DataProvider) as DataContextInterface;
  const { consoleActiveId, isConsoleOpen } = useContext(DataProvider).settings as SettingsObject;
  const [statusObject, setStatusObject] = useState<StatusObject | undefined>(undefined);
  const [elementFound, setElementFound] = useState<HTMLElement | null>(null);
  const [elementHeaderFound, setElementHeaderFound] = useState<HTMLElement | null>(null);

  const computeHightlight = (statusObject && isConsoleOpen && statusObject?.uniqueId === consoleActiveId)
    ? Highlight.PRIMARY
    : Highlight.DEFAULT;

  const handleOnClick = (event: MouseEvent<HTMLDivElement>) => {
    if (onClick) onClick(event);
    if (!statusObject) return;
    if (!isConsoleOpen || consoleActiveId !== id) {
      updateConsoleActiveId({ id: statusObject?.uniqueId });
    } else {
      updateConsoleActiveId({ id: undefined });
    }
  };

  useEffect(() => {
    setElementFound(document.getElementById(domConsoleId) || null);
    setElementHeaderFound(document.getElementById(`${domConsoleHeader}.${id}`) || null);
  }, [statusObject, consoleActiveId, id, isConsoleOpen]);

  useEffect(() => {
    setStatusObject(status.find(({ uniqueId }) => uniqueId === id));
  }, [status, id]);

  useEffect(() => {
    if (statusObject && statusObject.type !== StatusType.CONSOLE) {
      handleStatusTypeUpdate({ id, type: StatusType.CONSOLE });
    }
  }, [statusObject, id, handleStatusTypeUpdate]);

  return <>
    <StatusCore {...{
      id,

      order,
      tooltip,
      secondary,
      disabled,
      options,
      highlight: computeHightlight,

      onClick: handleOnClick,
      onContextMenu,

      style,
      className,
    }}>
      {children}
    </StatusCore>

    {elementFound
    && options?.content
    && statusObject?.uniqueId === consoleActiveId
    && createPortal(options?.content, elementFound)}

    {elementHeaderFound
    && children
    && createPortal(children, elementHeaderFound)}
  </>;
};
