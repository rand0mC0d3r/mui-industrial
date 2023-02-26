/// <reference types="react" />
import { Severity } from '../index.types';
export default function ({ severity, message, onClick, autoHideDuration, actions, source, code, }: {
    severity: Severity;
    message: string;
    onClick?: any;
    autoHideDuration?: number;
    actions?: any;
    source?: string;
    code?: string;
}): JSX.Element;
