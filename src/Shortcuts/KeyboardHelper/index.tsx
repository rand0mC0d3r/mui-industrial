import { Chip, Tooltip, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { ShortcutObject } from '../../index.types';
import DataProvider, { DataContextInterface } from '../../Store';

/**
 * Shortcut helper component
 *
 * @description Displays the shortcut for a given shortcut ID.
 * If the shortcut ID is not found, nothing is displayed.
 *
 * @param {string} shortcutId - The ID of the shortcut to display
 * @param {boolean} asChip - Whether to display the shortcut as a chip or not
 * @param {boolean} hasTooltip - Whether to display a tooltip with a tooltip on hover
 *
 * @example
 * <Shortcut shortcutId="##openPanel##" asChip={true|false} hasTooltip={true|false} />
 *
 * @returns {JSX.Element} Shortcut
 */

export default ({
  shortcutId,
  asChip = false,
  hasTooltip = true,
} : {
  shortcutId: string,
  asChip?: boolean,
  hasTooltip?: boolean,
}): JSX.Element => {
  const { shortcuts } : { shortcuts: ShortcutObject[] } = useContext(DataProvider) as DataContextInterface;
  const [shortcutObject, setShortcutObject] = useState<ShortcutObject | undefined>();

  useEffect(() => {
    if (!shortcutId) return;
    setShortcutObject(shortcuts.find(({ id }) => id === shortcutId));
  }, [shortcutId, shortcuts]);

  const shortcutString = [
    shortcutObject?.ctrlKey && '⌃',
    shortcutObject?.altKey && '⌥',
    shortcutObject?.metaKey && '⌘',
    shortcutObject?.shiftKey && '⇧',
    shortcutObject?.char,
  ].filter(Boolean).join(' ') as string;

  const determineChip: JSX.Element = <Chip label={shortcutString} variant="outlined" size="small" />;

  const determineTypography: JSX.Element = <Typography id="lowerK" variant="caption" color="inherit">{shortcutString}</Typography>;

  const determineTooltip = (element : JSX.Element) : JSX.Element => hasTooltip
    ? <Tooltip title={`${shortcutObject && `${shortcutObject.label} -`} ${shortcutString}`} placement="right" arrow>
      <span>{element}</span>
    </Tooltip>
    : element
  ;

  return <>
    {shortcutId
    && shortcutObject
    && determineTooltip(asChip
      ? determineChip
      : determineTypography)}
  </>;
};
