import { MouseEvent, useContext, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { domConsoleId, Highlight, SettingsObject, StatusConsoleJSXProps, StatusObject, StatusType } from '../../../index.types';
import DataProvider, { DataContextInterface } from '../../../Store';
import StatusCore from '../StatusCore';

export default ({
  id,
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
  const { handleStatusTypeUpdate, handleStatusConsoleTitleUpdate } = useContext(DataProvider) as DataContextInterface;
  const { consoleActiveId, isConsoleOpen } = useContext(DataProvider).settings as SettingsObject;
  const [statusObject, setStatusObject] = useState<StatusObject | null>(null);
  const [elementFound, setElementFound] = useState<HTMLElement | null>(null);

  const computeHightlight = (statusObject && isConsoleOpen && statusObject?.uniqueId === consoleActiveId)
    ? Highlight.PRIMARY
    : Highlight.DEFAULT;

  const handleOnClick = (event: MouseEvent<HTMLDivElement>) => {
    if (onClick) onClick(event);
    if (!statusObject) return;
    if (!isConsoleOpen || consoleActiveId !== id) updateConsoleActiveId({ id: statusObject?.uniqueId });
  };

  useEffect(() => {
    setElementFound(document.getElementById(domConsoleId) || null);
  }, [statusObject, consoleActiveId, isConsoleOpen]);

  useEffect(() => {
    if (statusObject !== null) return;
    const foundObject = status.find(({ uniqueId }) => uniqueId === id);
    if (!foundObject) return;
    setStatusObject(foundObject);
    handleStatusTypeUpdate({ id, type: StatusType.CONSOLE });
  }, [status, id, statusObject, handleStatusTypeUpdate]);

  useEffect(() => {
    if (statusObject) handleStatusConsoleTitleUpdate({ id, title: options?.title });
  }, [statusObject, id, options?.title, handleStatusConsoleTitleUpdate]);

  return <>
    <StatusCore {...{
      id,
      style,
      className,
      tooltip,
      secondary,
      onContextMenu,
      disabled,
      options: { separators: options?.separators },
      highlight: computeHightlight,
      onClick: handleOnClick,
    }}>
      {children}
    </StatusCore>

    {elementFound
    && options?.content
    && statusObject?.uniqueId === consoleActiveId
    && createPortal(options?.content, elementFound)}
  </>;
};
