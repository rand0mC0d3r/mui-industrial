import { CSSProperties, HTMLAttributes, MouseEvent, ReactNode } from 'react';
import { StatusOptionsProps } from '../../../index.types';
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
declare const _default: ({ id, disabled, options, secondary, tooltip, onClick, onContextMenu, style, className, children, }: {
    id: string;
    disabled?: boolean | undefined;
    options?: StatusOptionsProps | undefined;
    secondary?: boolean | undefined;
    tooltip?: ReactNode | string;
    onClick?: ((event: MouseEvent<HTMLDivElement>) => void) | undefined;
    onContextMenu?: ((event: MouseEvent<HTMLDivElement>) => void) | undefined;
    style?: CSSProperties | undefined;
    className?: HTMLAttributes<HTMLDivElement>['className'];
    children?: ReactNode;
}) => JSX.Element;
export default _default;