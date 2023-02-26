import { CSSProperties, MouseEvent, ReactNode } from 'react';
import { Highlight, StatusOptionsProps } from '../index.types';
/**
 * Generic status element, self announcing himself to the MUI Status Provider.
 * It can be used as a simple status element, a panel or a console.
 *  *
 * @param id - (string) Unique identifier for the status element.
 * @param options - (StatusOptionsProps) Options to be applied to the status element.
 * @param options.as - (StatusType) Type of status element.
 *
 * @param secondary - (boolean) If needs to be applied a secondary style to the status element.
 * @param style - (CSSProperties) Style to be applied to the root element.
 * @param onClick - (function) Function to be executed on click event.
 * @param onContextMenu - (function) Function to be executed on context menu event.
 * @param disabled - (boolean) If needs to be disabled the status element.
 * @param highlight - (string) If needs to be applied a highlight style to the status element.
 * @param tooltip - (string) Tooltip to be displayed on hover.
 * @param children - (JSX.Element) Children to be displayed inside the status element.
 *
 * @param endSeparator - (boolean) If needs to be displayed a separator at the end of the status element.
 * @param startSeparator - (boolean) If needs to be displayed a separator at the start of the status element.
 *
 * @returns (JSX.Element) Status element
 */
export default function ({ id, options, secondary, style, onClick, onContextMenu, disabled, highlight, tooltip, children, endSeparator, startSeparator, }: {
    id: string;
    options?: StatusOptionsProps;
    secondary?: boolean;
    style?: CSSProperties;
    onClick?: (e: MouseEvent<HTMLDivElement>) => void;
    onContextMenu?: (e: MouseEvent<HTMLDivElement>) => void;
    disabled?: boolean;
    highlight?: Highlight;
    tooltip?: ReactNode | string;
    children?: JSX.Element;
    endSeparator?: boolean;
    startSeparator?: boolean;
}): JSX.Element;
