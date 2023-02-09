import React from 'react';
import { SnackbarObject, StatusObject } from '../index.types';
export declare const composeDomId: (component: string, detail: string[]) => string;
interface DataContextInterface {
    settings: any;
    status: StatusObject[];
    snackbar: SnackbarObject[];
    updateConsoleActiveId: any;
    updateIsConsoleOpen: any;
    updateIsConsoleClosed: any;
    handleStatusUpdate: any;
    handleStatusAnnouncement: any;
    handleSnackbarAnnouncement: any;
    handleStatusDestroy: any;
    handleSnackbarDestroy: any;
    handleStatusTypeUpdate: any;
    handleStatusConsoleTypeUpdate: any;
    handleStatusVisibilityToggle: any;
    handleStatusKeepOpenToggle: any;
    triggerStatusBarAnnounced: any;
    logDebug: any;
}
declare const DataContext: React.Context<DataContextInterface>;
declare function StatusProvider({ expand, hasLock, position, allowRightClick, hasBorder, fullWidth, justifyContent, debug, children, style, size, ...rest }: {
    expand?: boolean;
    hasLock?: boolean;
    position?: 'top' | 'bottom';
    allowRightClick?: boolean;
    hasBorder?: boolean;
    fullWidth?: boolean;
    justifyContent?: string;
    debug?: boolean;
    children?: React.ReactNode;
    size?: 'small' | 'medium' | 'large';
    style: any;
}): JSX.Element;
export default DataContext;
export { StatusProvider };
