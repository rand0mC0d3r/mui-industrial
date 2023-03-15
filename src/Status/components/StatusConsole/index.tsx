/* eslint-disable no-unused-vars */
import { CSSProperties, HTMLAttributes, MouseEvent, ReactNode, useContext, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { domConsoleId, Highlight, SettingsObject, StatusObject, StatusOptionsProps, StatusType } from '../../../index.types';
import DataProvider, { DataContextInterface } from '../../../Store';
import StatusCore from '../StatusCore';

/**
 *
 * Status Console component
 *
 * @description
 * Status Console is a Status component that can be used to display a console
 * with a title and content. It can be used to display a list of items, a table,
 * or any other content.
 *
 * @param id - (string) Unique id of the Status Console
 * @param disabled - (boolean) If true, the Status Console will be disabled
 * @param options - (StatusOptionsProps) Options for the Status Console
 * @param secondary - (boolean) If true, the Status Console will be rendered as a secondary status
 * @param tooltip - (ReactNode | string) Tooltip to be displayed on hover
 *
 * @param onClick - (event: MouseEvent<HTMLDivElement>) => void) Callback fired when the Status Console is clicked
 * @param onContextMenu - (event: MouseEvent<HTMLDivElement>) => void) Callback fired when the Status Console is right clicked
 *
 * @param style - (CSSProperties) Override or extend the styles applied to the component
 * @param className - (HTMLAttributes<HTMLDivElement>['className']) Override or extend the styles applied to the component
 *
 * @param children - (ReactNode) Children to be rendered inside the Status Console
 *
 * @example
 * <Status
 *  id="statusConsole"
 *  options={{
 *    as: StatusType.CONSOLE,
 *    title: 'Status Console',
 *    content: <div>Content</div>,
 *    ...
 *  }}
 * >...
 *
 * @returns (JSX.Element) Status Console element
 */
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
} : {
  id: string,
  disabled?: boolean,
  options?: StatusOptionsProps,
  secondary?: boolean,
  tooltip?: ReactNode | string,
  onClick?: (event: MouseEvent<HTMLDivElement>) => void,
  onContextMenu?: (event: MouseEvent<HTMLDivElement>) => void,
  style?: CSSProperties,
  className?: HTMLAttributes<HTMLDivElement>['className'],
  children?: ReactNode,
}): JSX.Element => {
  const { status, handleStatusTypeUpdate, handleStatusConsoleTitleUpdate, updateConsoleActiveId } = useContext(DataProvider) as DataContextInterface;
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
    }}
    >
      {children}
    </StatusCore>
    {elementFound && options?.content
    && statusObject
    && statusObject.uniqueId === consoleActiveId
    && createPortal(options?.content, elementFound)}
  </>;
};
