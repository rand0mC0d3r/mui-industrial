import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { Tooltip } from '@mui/material';
import { CSSProperties, HTMLAttributes, useEffect, useMemo } from 'react';
import { StyledBadge, StyledChildren, StyledIcon, StyledStack, StyledText } from './css';

const defaultChildrenOrder = 3;

type StatusTemplateProps = {
  icon?: JSX.Element,
  text?: string,
  badge?: string | number,
  children?: JSX.Element | JSX.Element[] | false,

  reverse?: boolean,
  childrenOrder?: -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,

  className?: HTMLAttributes<HTMLDivElement>['className'],
  style?: CSSProperties,
};

export default ({
  icon,
  text,
  badge,
  children,

  reverse = false,
  childrenOrder = defaultChildrenOrder,

  className,
  style,
} : StatusTemplateProps): JSX.Element => {

  // validations
  const isIcon = useMemo(() => icon !== undefined, [icon]);
  const isBadge = useMemo(() => badge !== undefined && String(badge).length > 0, [badge]);
  const isText = useMemo(() => text !== undefined && text.length > 0, [text]);
  const isChildren = useMemo(() => children !== undefined && children !== false, [children]);

  useEffect(() => {
    if (!isIcon && !isBadge && !isText && !isChildren) {
      console.warn('[Status.Template]: Status template with no content was provided. This element will show a placeholder.');
    }
  }, [isIcon, isBadge, isText, isChildren]);

  return <StyledStack {...{ id: 'statusHelper', style, className, reverse: reverse.toString() }}>
    {isIcon && <StyledIcon {...{ id: 'sh.icon' }}>{icon}</StyledIcon>}
    {isBadge && <StyledBadge {...{ id: 'sh.badge' }}>{String(badge)}</StyledBadge>}
    {isText && <StyledText {...{ id: 'sh.text', variant: 'caption' }}>{text}</StyledText>}
    {/* {isChildren ? 'yes' : 'no'} */}
    {isChildren && <StyledChildren {...{ order: childrenOrder }}>{children}</StyledChildren>}

    {!isIcon && !isBadge && !isText && !isChildren && <Tooltip
      arrow
      placement='right'
      title="This status element is showing a placeholder because no content was provided."
    >
      <QuestionMarkIcon color="disabled" style={{ fontSize: '16px' }} />
    </Tooltip>}
  </StyledStack>;
};
