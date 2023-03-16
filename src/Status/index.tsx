/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { StatusOptionsProps, StatusProps, StatusType } from '../index.types';
import StatusHelper from '../StatusHelper';
import StatusConsole from './components/StatusConsole';
import StatusCore from './components/StatusCore';
import StatusPopper from './components/StatusPopper';

const defaultStatusOptionsProps = {
  as: StatusType.SIMPLE,
} as StatusOptionsProps;

/**
 * Generic status element, self announcing himself to the MUI Status Provider.
 * It can be used as a simple status element, a popper or a console.
 *
 * @example
 * <Status
 *  id="##uniqueId##" --> Unique identifier for the status element
 *
 *  options={{
 *    as: StatusType.CONSOLE, --> StatusType.SIMPLE | StatusType.POPPER | StatusType.CONSOLE
 *    title: 'Status Console', --> Title to be displayed on the status element
 *    content: <div>Content</div>, --> Content to be displayed on the status element (only when NOT StatusType.SIMPLE)
 *    ...
 *  }}
 *
 *  disabled={false} --> If needs to be disabled the status element
 *  highlight={Highlight.SUCCESS} --> If needs to be applied a highlight style to the status element
 *  secondary={false} --> If needs to be applied a secondary priority/importance to the status element
 *  tooltip="Tooltip" --> Tooltip to be displayed on hover
 *
 *  onClick={() => {}} --> Function to be executed on click event
 *  onContextMenu={() => {}} --> Function to be executed on context menu event
 * (/)>
 *    ... --> Custom children to be displayed inside the status element
 *    <Status.Template> --> Predefined template to be displayed inside the status element
 * (</Status>)
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
    {combinedOptions.as === StatusType.POPPER && <StatusPopper {...props} />}
    {combinedOptions.as === StatusType.CONSOLE && <StatusConsole {...props} />}
  </>;
};

Status.Body = StatusHelper;
Status.Content = StatusHelper;
Status.Template = StatusHelper;

export default Status;
