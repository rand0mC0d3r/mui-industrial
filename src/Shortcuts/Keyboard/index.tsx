import { useCallback, useContext, useEffect, useState } from 'react';
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
  const handleKeyboardDestroy = useContext(DataProvider).handleKeyboardDestroy as DataContextInterface['handleKeyboardDestroy'];

  const callbackAnnouncement = useCallback(() => {
    handleKeyboardAnnouncement({ char, id, ascii, label, shiftKey, ctrlKey, altKey, metaKey, insensitive } as ShortcutObject);
    setAnnounced(true);
  }, [ handleKeyboardAnnouncement, char, id, ascii, label, shiftKey, ctrlKey, altKey, metaKey, insensitive]);

  const callbackDestroy = useCallback(() => {
    handleKeyboardDestroy({ id });
  }, [handleKeyboardDestroy, id]);

  useEffect(() => {
    if (!((char || ascii) && id && !announced)) return;
    callbackAnnouncement();

    return () => {
      console.log('22');
    };
  }, [char, id, ascii, announced, callbackAnnouncement]);

  useEffect(() => {
    if (!announced) return;
    setShortcutItem(shortcuts.find(shortcut => shortcut.id === id));
  }, [shortcuts, announced, id]);

  useEffect(() => {
    if (!shortcutItem || !announced) return;
    shortcutItem.onTrigger = onTrigger;

    return () => {
      console.log('11');
      shortcutItem.onTrigger = undefined;
      callbackDestroy();
    };
  }, [shortcutItem, onTrigger, announced, callbackDestroy]);

  return <></>;
};
