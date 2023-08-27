/// <reference types="react" />
import { StatusProps } from '../index.types';
declare const Status: {
    ({ ...rest }: StatusProps): JSX.Element;
    Template: ({ icon, text, badge, children, reverse, childrenOrder, className, style, }: {
        icon?: JSX.Element | undefined;
        text?: string | undefined;
        badge?: string | number | undefined;
        children?: JSX.Element | undefined;
        reverse?: boolean | undefined;
        reverseIcon?: boolean | undefined;
        childrenOrder?: 1 | 2 | 3 | 10 | -1 | 12 | 8 | 7 | 4 | 5 | 6 | 9 | 11 | undefined;
        className?: string | undefined;
        style?: import("react").CSSProperties | undefined;
    }) => JSX.Element;
};
export default Status;
