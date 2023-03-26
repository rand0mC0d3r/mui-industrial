/// <reference types="react" />
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
declare const _default: ({ shortcutId, asChip, hasTooltip, hasOverride, style, }: {
    shortcutId: string;
    asChip?: boolean | undefined;
    hasTooltip?: boolean | undefined;
    hasOverride?: boolean | undefined;
    style?: any;
}) => JSX.Element;
export default _default;
