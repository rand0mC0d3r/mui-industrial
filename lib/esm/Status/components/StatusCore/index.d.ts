import { CSSProperties, MouseEvent, ReactNode } from 'react';
import { Highlight, StatusOptionsProps } from '../../../index.types';
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
