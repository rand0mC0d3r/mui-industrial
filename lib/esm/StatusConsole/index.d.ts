import { CSSProperties, MouseEvent, ReactNode } from 'react';
export default function ({ id, secondary, style, onClick, tooltip, children, endSeparator, startSeparator, content, title, }: {
    id: string;
    secondary?: boolean;
    style?: CSSProperties;
    onClick?: (event: MouseEvent<HTMLDivElement>) => void;
    tooltip?: ReactNode | string;
    children?: ReactNode;
    endSeparator?: boolean;
    startSeparator?: boolean;
    content: ReactNode;
    title?: string;
}): JSX.Element;
