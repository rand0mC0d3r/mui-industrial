/// <reference types="react" />
import { Severity } from '../../index.types';
export default function ({ uniqueId, actions, source, severity, message, code, isRemoveFlag, }: {
    uniqueId: string;
    actions?: any;
    source?: string;
    severity: Severity;
    message: string;
    code: string;
    isRemoveFlag?: boolean;
}): JSX.Element;
