/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { CSSProperties, HTMLAttributes, MouseEvent, ReactNode } from 'react';
import { Highlight, StatusOptionsProps, StatusType } from '../index.types';
import StatusHelper from '../StatusHelper';
import StatusConsole from './components/StatusConsole';
import StatusCore from './components/StatusCore';
import StatusPoppper from './components/StatusPoppper';

const defaultStatusOptionsProps = {
  as: StatusType.SIMPLE,
} as StatusOptionsProps;

type StatusProps = {
  id: string,
  order?: number,
  disabled?: boolean,
  highlight?: Highlight,
  options?: StatusOptionsProps,
  secondary?: boolean,
  tooltip?: ReactNode | string,
  onClick?: (e: MouseEvent<HTMLDivElement>) => void,
  onContextMenu?: (e: MouseEvent<HTMLDivElement>) => void,
  style?: CSSProperties,
  className?: HTMLAttributes<HTMLDivElement>['className'],
  children?: JSX.Element,
};

/**
 * Generic status element, self announcing himself to the MUI Status Provider.
 * It can be used as a simple status element, a popper or a console.
 *
 * @param id - (string) Unique identifier for the status element.
 * @param order - (number) Order to be displayed in the console.
 * @param disabled - (boolean) If needs to be disabled the status element.
 * @param highlight - (string) If needs to be applied a highlight style to the status element.
 * @param options - (StatusOptionsProps) Options to be applied to the status element.
 * @param secondary - (boolean) If needs to be applied a secondary style to the status element.
 * @param tooltip - (string) Tooltip to be displayed on hover.
 *
 * @param onClick - (function) Function to be executed on click event.
 * @param onContextMenu - (function) Function to be executed on context menu event.
 *
 * @param style - (CSSProperties) Style to be applied to the root element.
 * @param className - (HTMLAttributes<HTMLDivElement>['className']) Override or extend the styles applied to the component
 *
 * @param children - (JSX.Element) Children to be displayed inside the status element.
 *
 * @returns (JSX.Element) Status element
 */
const Status = ({ ...rest } : StatusProps) => {
  const combinedOptions = { ...defaultStatusOptionsProps, ...rest.options };
  const props = { ...rest, options: combinedOptions };

  return <>
    {combinedOptions.as === StatusType.SIMPLE && <StatusCore {...props} />}
    {combinedOptions.as === StatusType.POPPER && <StatusPoppper {...props} />}
    {combinedOptions.as === StatusType.CONSOLE && <StatusConsole {...props} />}
  </>;
};

Status.Body = StatusHelper;

export default Status;
