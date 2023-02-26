import React from 'react';
import { PlacementPosition, Severity, SnackbarObject, StatusObject, StatusType } from '../index.types';
export declare const composeDomId: (component: string, detail: string[]) => string;
export interface DataContextInterface {
    settings: any;
    status: StatusObject[];
    snackbar: SnackbarObject[];
    updateConsoleActiveId: ({ id }: {
        id?: string;
    }) => void;
    updateIsConsoleOpen: any;
    updateIsConsoleClosed: any;
    handleStatusUpdate: any;
    handleStatusAnnouncement: any;
    handleSnackbarAnnouncement: ({ ownId, severity, actions, source, message, code, autoHideDuration }: {
        ownId: string;
        actions: any;
        source?: string;
        severity: Severity;
        message: any;
        code?: string;
        autoHideDuration: number;
    }) => void;
    handleStatusDestroy: any;
    handleSnackbarDestroy: any;
    handleStatusTypeUpdate: ({ id, type }: {
        id: string;
        type: StatusType;
    }) => void;
    handleStatusConsoleTitleUpdate: ({ id, title }: {
        id: string;
        title?: string;
    }) => void;
    handleStatusVisibilityToggle: any;
    handleStatusKeepOpenToggle: ({ id }: {
        id: string;
    }) => void;
    triggerStatusBarAnnounced: any;
    logDebug: any;
}
declare const DataContext: React.Context<DataContextInterface>;
declare function IndustrialProvider({ disabled, expand, hasLock, position, allowRightClick, hasBorder, fullWidth, justifyContent, debug, children, style, size, variant, }: {
    disabled?: boolean;
    expand?: boolean;
    hasLock?: boolean;
    position?: PlacementPosition;
    allowRightClick?: boolean;
    hasBorder?: boolean;
    fullWidth?: boolean;
    justifyContent?: string;
    debug?: boolean;
    children?: React.ReactNode;
    size?: 'small' | 'medium' | 'large';
    variant?: 'default' | 'outlined';
    style: any;
}): JSX.Element;
export default DataContext;
export { IndustrialProvider };
