import { CSSProperties, HTMLAttributes } from 'react';
import { StyledBadge, StyledChildren, StyledIcon, StyledImage, StyledStack, StyledText } from './css';

/**
 * @param icon - (JSX.Element) Icon to display for status element. Expects a Material UI SvgIcon component.
 * @param text - (string | number) Text to display for status element.
 * @param badge - (string | number) Badge to display relevant notifications.
 * @param image - (string) Image to display for status element. Expects a valid image path.
 * @param mask - (boolean) If needs to be applied a circular mask to the image.
 * @param reverse - (boolean) If needs to be applied a reverse of the default order of the elements.
 * @param reverseIcon - (boolean) If needs to be applied a reverse of the given icon.
 * @param className - (HTMLAttribute) Class name to be applied to the root element.
 * @param style - (CSSProperties) Style to be applied to the root element.
 *
 * @returns (JSX.Element) Status helper element
 */
export default ({
  icon,
  text,
  badge,
  image,
  mask = false,
  reverse = false,
  reverseIcon = false,
  children,
  childrenOrder = 1,
  className,
  style,
} : {
  icon?: JSX.Element,
  text?: string,
  badge?: string | number,
  image?: string,
  mask?: boolean,
  reverse?: boolean,
  reverseIcon?: boolean,
  children?: JSX.Element,
  childrenOrder?: -1 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
  className?: HTMLAttributes<HTMLDivElement>['className'],
  style?: CSSProperties,
}): JSX.Element => {
  return <StyledStack {...{ id: 'statusHelper', style, className, reverse: reverse.toString() }}>
    {!!icon && <StyledIcon {...{ id: 'sh.icon', reverse: reverseIcon.toString() }}>{icon}</StyledIcon>}
    {!!children && <>{childrenOrder ? <StyledChildren {...{ order: childrenOrder }}>{children}</StyledChildren> : children}</>}
    {!!image && <StyledImage {...{ id: 'sh.image', alt: '', mask: mask.toString(), src: image }} />}
    {!!badge && <StyledBadge {...{ id: 'sh.badge' }}>{String(badge)}</StyledBadge>}
    {!!text && <StyledText {...{ id: 'sh.text', variant: 'caption' }}>{text}</StyledText>}
  </StyledStack>;
};
