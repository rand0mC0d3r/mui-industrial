import { Chip, Tooltip, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { ShortcutObject } from '../../index.types';
import DataProvider, { DataContextInterface } from '../../Store';
import Component from './Component';
import { StyledOverrideWrapper } from './css';

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
} : {
  shortcutId: string,
  asChip?: boolean,
  hasTooltip?: boolean,
  hasOverride?: boolean,
}): JSX.Element => {
  const { shortcuts } : { shortcuts: ShortcutObject[] } = useContext(DataProvider) as DataContextInterface;
  const [shortcutObject, setShortcutObject] = useState<ShortcutObject | undefined>();

  useEffect(() => {
    setShortcutObject(shortcuts.find(({ id }) => id === shortcutId));
  }, [shortcutId, shortcuts]);

  const shortcutString = [
    shortcutObject?.altKey && '⌥',
    shortcutObject?.ctrlKey && '⌃',
    shortcutObject?.metaKey && '⌘',
    shortcutObject?.shiftKey && '⇧',
    shortcutObject?.char,
  ].filter(Boolean).join(' ') as string;

  const determineChip: JSX.Element = <Chip style={{ userSelect: 'none' }} label={shortcutString} variant="outlined" size="small" />;

  const determineTypography: JSX.Element = <Typography
    style={{
      userSelect: 'none',
      height: '24px',
      display: 'flex',
      alignItems: 'center',
    }}
    variant="caption"
    color="inherit">
      {shortcutString}
    </Typography>;

  const determineTooltip = (element : JSX.Element) : JSX.Element => hasTooltip
    ? <Tooltip title={`${shortcutObject && `${shortcutObject.label} -`} ${shortcutString}`} placement="right" arrow>
      <span>{element}</span>
    </Tooltip>
    : element
  ;

  const determineOverride = (element : JSX.Element) : JSX.Element => hasOverride
    ? <StyledOverrideWrapper>
        {shortcutObject && <Component {...{ shortcutId, shortcutObject }} />}
        {element}
      </StyledOverrideWrapper>
    : element
  ;

  return <>
    {shortcutId
    && shortcutObject
    && determineOverride(determineTooltip(asChip ? determineChip : determineTypography))}
  </>;
};
