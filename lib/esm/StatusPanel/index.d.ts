import { CSSProperties, HTMLAttributes, MouseEvent, ReactNode } from 'react';
import { Highlight, StatusOptionsProps } from '../index.types';
export default function ({ id, disabled, highlight, options, tooltip, secondary, onClick, onContextMenu, style, className, children, }: {
    id: string;
    disabled?: boolean;
    secondary?: boolean;
    style?: CSSProperties;
    options: StatusOptionsProps;
    onClick?: (event: MouseEvent<HTMLDivElement>) => void;
    onContextMenu?: (event: MouseEvent<HTMLDivElement>) => void;
    highlight?: Highlight;
    tooltip?: ReactNode | string;
    children?: ReactNode;
    className?: HTMLAttributes<HTMLDivElement>['className'];
}): JSX.Element;
