import { CSSProperties, MouseEvent, ReactNode } from 'react';
import { Highlight, PanelWidth, PopoverActions, StatusOptionsProps } from '../index.types';
export default function ({ id, secondary, elevation, width, style, onClick, onClose, highlight, tooltip, children, options, popover, popoverTitle, popoverActions, hasToolbar, hasDecoration, }: {
    id: string;
    secondary?: boolean;
    elevation?: number;
    width?: PanelWidth;
    style?: CSSProperties;
    options: StatusOptionsProps;
    onClick?: (event: MouseEvent<HTMLDivElement>) => void;
    onClose?: (event: MouseEvent<HTMLDivElement>) => void;
    highlight?: Highlight;
    tooltip?: ReactNode | string;
    children?: ReactNode;
    popover?: any;
    popoverTitle?: string;
    popoverActions?: PopoverActions;
    hasToolbar?: boolean;
    hasDecoration?: boolean;
}): JSX.Element;
