import { CSSProperties, MouseEvent, ReactNode } from 'react';
import { Highlight, StatusOptionsProps } from '../../../index.types';
type StatusCoreProps = {
    id: string;
    order?: number;
    style?: CSSProperties;
    onClick?: (e: MouseEvent<HTMLDivElement>) => void;
    onContextMenu?: (e: MouseEvent<HTMLDivElement>) => void;
    disabled?: boolean;
    highlight?: Highlight;
    tooltip?: ReactNode;
    children?: ReactNode;
    options?: StatusOptionsProps;
    secondary?: boolean;
    onLoad?: (ref: any) => void;
};
export declare const StatusCore: import("react").ForwardRefExoticComponent<StatusCoreProps & import("react").RefAttributes<unknown>>;
export default StatusCore;
