import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { Tooltip } from '@mui/material';
import { CSSProperties, HTMLAttributes, useEffect } from 'react';
import { StyledBadge, StyledChildren, StyledIcon, StyledStack, StyledText } from './css';

const defaultChildrenOrder = 1;

export default ({
  icon,
  text,
  badge,
  children,

  reverse = false,
  childrenOrder = defaultChildrenOrder,

  className,
  style,
} : {
  icon?: JSX.Element,
  text?: string,
  badge?: string | number,
  children?: JSX.Element,

  reverse?: boolean,
  reverseIcon?: boolean,
  childrenOrder?: -1 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,

  className?: HTMLAttributes<HTMLDivElement>['className'],
  style?: CSSProperties,
}): JSX.Element => {

  const isIcon = icon !== undefined;
  const isBadge = badge !== undefined && String(badge).length > 0;
  const isText = text !== undefined && text.length > 0;
  const isChildren = children !== undefined;

  useEffect(() => {
    if (!isIcon && !isBadge && !isText && !isChildren) {
      console.warn('[Status.Template]: Status template with no content was provided. This element will show a placeholder.');
    }
  }, [isIcon, isBadge, isText, isChildren]);

  return <StyledStack {...{ id: 'statusHelper', style, className, reverse: reverse.toString() }}>
    {isIcon && <StyledIcon {...{ id: 'sh.icon' }}>{icon}</StyledIcon>}
    {isBadge && <StyledBadge {...{ id: 'sh.badge' }}>{String(badge)}</StyledBadge>}
    {isText && <StyledText {...{ id: 'sh.text', variant: 'caption' }}>{text}</StyledText>}
    {isChildren && <>{childrenOrder !== defaultChildrenOrder
      ? <StyledChildren {...{ order: childrenOrder }}>{children}</StyledChildren>
      : children}
    </>}
    {!isIcon && !isBadge && !isText && !isChildren && <>
    <Tooltip arrow placement='right' title="This status element is showing a placeholder because no content was provided.">
      <QuestionMarkIcon color="disabled" style={{ fontSize: '16px' }} />
    </Tooltip>
    </>}
  </StyledStack>;
};
