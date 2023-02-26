import { CSSProperties, HTMLAttributes, MouseEvent, ReactNode } from 'react';
import { Highlight, StatusOptionsProps } from '../../../index.types';
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
