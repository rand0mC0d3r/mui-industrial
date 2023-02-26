import { CSSProperties, HTMLAttributes, MouseEvent, ReactNode } from 'react';
import { Highlight, StatusOptionsProps } from '../index.types';
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
export default function ({ id, disabled, highlight, options, secondary, tooltip, onClick, onContextMenu, style, className, children, }: {
    id: string;
    disabled?: boolean;
    highlight?: Highlight;
    options: StatusOptionsProps;
    secondary?: boolean;
    tooltip?: ReactNode | string;
    onClick?: (event: MouseEvent<HTMLDivElement>) => void;
    onContextMenu?: (event: MouseEvent<HTMLDivElement>) => void;
    style?: CSSProperties;
    className?: HTMLAttributes<HTMLDivElement>['className'];
    children?: ReactNode;
}): JSX.Element;
