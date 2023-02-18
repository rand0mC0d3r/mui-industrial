/// <reference types="react" />
export default function ({ severity, message, onClick, autoHideDuration, actions, source, code, }: {
    severity: 'success' | 'info' | 'warning' | 'error';
    message: string;
    onClick?: any;
    autoHideDuration?: number;
    actions?: any;
    source?: string;
    code?: string;
}): JSX.Element;
