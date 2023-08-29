/// <reference types="react" />
type SMessageProps = {
    ellipsis: string;
};
type SCodeProps = {
    height: number;
    defaultValue: string;
    onDoubleClick: any;
};
type SAlertProps = {
    expanded: string;
    actions: string;
    onDoubleClick: any;
    onContextMenu: any;
    icon: JSX.Element;
    severity: any;
};
export declare const SCode: React.ComponentType<SCodeProps>;
export declare const SMessage: React.ComponentType<SMessageProps>;
export declare const SWrapper: React.ComponentType<any>;
export declare const SAlert: React.ComponentType<SAlertProps>;
export {};
