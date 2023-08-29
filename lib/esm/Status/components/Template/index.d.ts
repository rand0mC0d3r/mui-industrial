import { CSSProperties, HTMLAttributes } from 'react';
type StatusTemplateProps = {
    icon?: JSX.Element;
    text?: string;
    badge?: string | number;
    children?: JSX.Element | JSX.Element[] | false;
    reverse?: boolean;
    childrenOrder?: -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    className?: HTMLAttributes<HTMLDivElement>['className'];
    style?: CSSProperties;
};
declare const _default: ({ icon, text, badge, children, reverse, childrenOrder, className, style, }: StatusTemplateProps) => JSX.Element;
export default _default;
