import { CSSProperties, MouseEvent, ReactNode } from 'react';
import { Highlight, StatusOptionsProps } from '../index.types';
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
export default function ({ id, style, onClick, onContextMenu, disabled, highlight, tooltip, children, options, secondary, }: {
    id: string;
    options?: StatusOptionsProps;
    style?: CSSProperties;
    onClick?: (event: MouseEvent<HTMLDivElement>) => void;
    onContextMenu?: (event: MouseEvent<HTMLDivElement>) => void;
    disabled?: boolean;
    highlight?: Highlight;
    tooltip?: ReactNode | string;
    children?: ReactNode;
    secondary?: boolean;
}): JSX.Element;
