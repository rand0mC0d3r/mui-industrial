import { CSSProperties, ReactNode } from 'react';
export default function ({ id, secondary, style, onClick, tooltip, children, console, consoleTitle, }: {
    id: string;
    secondary?: boolean;
    style?: CSSProperties;
    onClick?: any;
    tooltip?: ReactNode | string;
    children?: ReactNode;
    console?: any;
    consoleTitle?: string;
}): JSX.Element;
