import { CSSProperties, HTMLAttributes, MouseEvent, ReactNode } from 'react';
import { Highlight, StatusOptionsProps } from '../../../index.types';
declare const _default: ({ id, order, disabled, highlight, options, secondary, tooltip, onClick, onContextMenu, style, className, children, }: {
    id: string;
    order?: number | undefined;
    disabled?: boolean | undefined;
    highlight?: Highlight | undefined;
    options: StatusOptionsProps;
    secondary?: boolean | undefined;
    tooltip?: ReactNode | string;
    onClick?: ((event: MouseEvent<HTMLDivElement>) => void) | undefined;
    onContextMenu?: ((event: MouseEvent<HTMLDivElement>) => void) | undefined;
    style?: CSSProperties | undefined;
    className?: HTMLAttributes<HTMLDivElement>['className'];
    children?: ReactNode;
}) => JSX.Element;
export default _default;
