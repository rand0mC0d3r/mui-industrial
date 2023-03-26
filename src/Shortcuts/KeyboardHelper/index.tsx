/* eslint-disable @typescript-eslint/no-explicit-any */
import { Tooltip, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { ShortcutObject } from '../../index.types';
import DataProvider, { DataContextInterface } from '../../Store';
import Component from './Component';
import { StyledKey, StyledListOfKeys, StyledOverrideWrapper } from './css';

const shortcutString = (shortcutObject?: ShortcutObject) => [
  shortcutObject?.altKey && '⌥',
  shortcutObject?.ctrlKey && '⌃',
  shortcutObject?.metaKey && '⌘',
  shortcutObject?.shiftKey && '⇧',
  shortcutObject?.char,
  shortcutObject?.ascii && `(${shortcutObject.ascii})`,
].filter(Boolean).join(' ') as string;

const shortcutStringNg = (shortcutObject?: ShortcutObject) => <StyledListOfKeys>
  {[
    shortcutObject?.altKey && '⌥',
    shortcutObject?.ctrlKey && '⌃',
    shortcutObject?.metaKey && '⌘',
    shortcutObject?.shiftKey && '⇧',
    shortcutObject?.char,
    shortcutObject?.ascii && `(${shortcutObject.ascii})`,
  ]
    .filter(Boolean)
    .map(s => <StyledKey ascii={(s || '').includes('(').toString()} elevation={1} key={`char-${s}`}>{s}</StyledKey>)}
</StyledListOfKeys>;

const baseTooltip = (shortcutObject?: ShortcutObject) => `${shortcutObject && `${shortcutObject.label} -`} ${shortcutString(shortcutObject)}`;


/**
 * Shortcut helper component
 *
 * @description Displays the shortcut for a given shortcut ID.
 * If the shortcut ID is not found, nothing is displayed.
 *
 * @param {string} shortcutId - The ID of the shortcut to display
 * @param {boolean} asChip - Whether to display the shortcut as a chip or not
 * @param {boolean} hasTooltip - Whether to display a tooltip with a tooltip on hover
 * @param {boolean} hasOverride - Whether to display the override shortcut or not
 *
 * @example
 * <Shortcut shortcutId="##openPanel##" asChip={true|false} hasTooltip={true|false} />
 *
 * @returns {JSX.Element} Shortcut
 */
export default ({
  shortcutId,
  asChip = false,
  hasTooltip = false,
  hasOverride = false,

  style,
} : {
  shortcutId: string,
  asChip?: boolean,
  hasTooltip?: boolean,
  hasOverride?: boolean,

  style?: any,
}): JSX.Element => {
  const { shortcuts } : { shortcuts: ShortcutObject[] } = useContext(DataProvider) as DataContextInterface;
  const [shortcutObject, setShortcutObject] = useState<ShortcutObject | undefined>();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [tooltip, setTooltip] = useState<string>(baseTooltip);

  const open = Boolean(anchorEl);
  const idPopper = open ? 'simple-popover' : undefined;

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const determineChip: JSX.Element = <div
    style={{ userSelect: 'none', display: 'flex', alignItems: 'center', gap: '4px' }} >
    {shortcutStringNg(shortcutObject)}
  </div>;

  const determineTypography: JSX.Element = <Typography
    style={{
      ...style,
      userSelect: 'none',
      lineHeight: '1',
      display: 'flex',
      alignItems: 'center',
    }}
    variant="caption"
    color="inherit">
      {shortcutString(shortcutObject)}
    </Typography>;

  const determineTooltip = (element : JSX.Element) : JSX.Element => {
    return (hasTooltip || hasOverride)
      ? <Tooltip title={<span style={{ userSelect: 'none' }}>{tooltip}</span>} placement="right" arrow>
      <span style={style}>{element}</span>
    </Tooltip>
      : element;
  };

  const determineOverride = (element : JSX.Element) : JSX.Element => {
    return hasOverride
      ? <StyledOverrideWrapper onContextMenu={(e: any) => {
        e.preventDefault();
        handleClick(e);
      }}>
        {shortcutObject && <Component {...{ idPopper, anchorEl, open, handleClose, shortcutId, shortcutObject }} />}
        {element}
      </StyledOverrideWrapper>
      : element;
  };

  useEffect(() => {
    const filledBaseTooltip = baseTooltip(shortcutObject);
    setTooltip(() => hasOverride ? `${filledBaseTooltip} - Right-Click to Override` : filledBaseTooltip);
  }, [hasOverride, shortcutObject]);

  useEffect(() => {
    setShortcutObject(shortcuts.find(({ id }) => id === shortcutId));
  }, [shortcutId, shortcuts]);

  return <>
    {shortcutId
    && shortcutObject
    && determineOverride(determineTooltip(asChip ? determineChip : determineTypography))}
  </>;
};
