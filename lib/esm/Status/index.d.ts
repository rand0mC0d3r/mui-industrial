import { CSSProperties, HTMLAttributes, MouseEvent, ReactNode } from 'react';
import { Highlight, StatusOptionsProps } from '../index.types';
type StatusProps = {
    id: string;
    order?: number;
    disabled?: boolean;
    highlight?: Highlight;
    options?: StatusOptionsProps;
    secondary?: boolean;
    tooltip?: ReactNode | string;
    onClick?: (e: MouseEvent<HTMLDivElement>) => void;
    onContextMenu?: (e: MouseEvent<HTMLDivElement>) => void;
    style?: CSSProperties;
    className?: HTMLAttributes<HTMLDivElement>['className'];
    children?: JSX.Element;
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
declare const Status: {
    ({ ...rest }: StatusProps): JSX.Element;
    Body: ({ icon, text, badge, image, mask, reverse, reverseIcon, children, childrenIndex, className, style, }: {
        icon?: JSX.Element | undefined;
        text?: string | undefined;
        badge?: string | number | undefined;
        image?: string | undefined;
        mask?: boolean | undefined;
        reverse?: boolean | undefined;
        reverseIcon?: boolean | undefined;
        children?: JSX.Element | undefined;
        childrenIndex?: 2 | 1 | -1 | 3 | 4 | 5 | undefined;
        className?: string | undefined;
        style?: CSSProperties | undefined;
    }) => JSX.Element;
};
export default Status;
