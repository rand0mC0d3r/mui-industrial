import { useContext, useEffect, useState } from 'react';
import { ShortcutObject } from '../../index.types';
import DataProvider, { DataContextInterface } from '../../Store';

export default ({
  id,
  ascii,
  char,
  label,
  ctrlKey,
  altKey,
  metaKey,
  shiftKey,
  insensitive = true,
  onTrigger = () => {},
} : ShortcutObject): JSX.Element => {
  const [shortcutItem, setShortcutItem] = useState<ShortcutObject | undefined>();
  const [announced, setAnnounced] = useState(false);
  const { shortcuts } : { shortcuts: ShortcutObject[] } = useContext(DataProvider) as DataContextInterface;
  const handleKeyboardAnnouncement = useContext(DataProvider).handleKeyboardAnnouncement as DataContextInterface['handleKeyboardAnnouncement'];

  useEffect(() => {
    if (!((char || ascii) && id && !announced)) return;
    handleKeyboardAnnouncement({ char, id, ascii, label, shiftKey, ctrlKey, altKey, metaKey, insensitive } as ShortcutObject);
    setAnnounced(true);
  }, [char, id, ascii, label, shiftKey, ctrlKey, altKey, metaKey, insensitive, announced, handleKeyboardAnnouncement]);

  useEffect(() => {
    if (!announced) return;
    setShortcutItem(shortcuts.find(shortcut => shortcut.id === id));
  }, [shortcuts, announced, id]);

  useEffect(() => {
    if (!shortcutItem || !announced) return;
    shortcutItem.onTrigger = onTrigger;

    return () => {
      shortcutItem.onTrigger = undefined;
    };
  }, [shortcutItem, onTrigger, announced]);

  return <></>;
};
