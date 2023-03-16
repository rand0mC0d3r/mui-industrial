/* eslint-disable no-unused-vars */
import { useCallback, useContext, useEffect, useState } from 'react';
import { ShortcutObject } from '../../index.types';
import DataProvider, { DataContextInterface } from '../../Store';

export default ({
  id, shiftKey, ctrlKey, altKey, metaKey,
  ascii, char, label, insensitive = true, onTrigger = () => {},
} : ShortcutObject): JSX.Element => {
  const [shortcutItem, setShortcutItem] = useState<ShortcutObject | undefined>();
  const { shortcuts } : { shortcuts: ShortcutObject[] } = useContext(DataProvider) as DataContextInterface;
  const handleKeyboardAnnouncement = useContext(DataProvider).handleKeyboardAnnouncement as DataContextInterface['handleKeyboardAnnouncement'];
  // const { shortcuts } : { shortcuts: ShortcutObject[] } = useContext(DataProvider) as DataContextInterface;
  // const handleUpdateKeyboard = useContext(DataProvider).handleKeyboardAnnouncement as DataContextInterface['handleUpdateKeyboard'];

  // const {
  //   id, shiftKey, ctrlKey, altKey, metaKey,
  //   ascii, char, label, insensitive = true, onTrigger = () => {},
  // } = props;

  const callback = useCallback(() => {
    handleKeyboardAnnouncement({ char, id, ascii, label, shiftKey, ctrlKey, altKey, metaKey, onTrigger, insensitive } as ShortcutObject);
  }, [handleKeyboardAnnouncement, char, id, ascii, label, shiftKey, ctrlKey, altKey, metaKey, insensitive, onTrigger]);


  useEffect(() => {
    console.log('useEffect', char, id, ascii);
    if ((char || ascii) && id) {
      callback();
    }
  }, [char, id, ascii, callback]);

  useEffect(() => {
    console.log('found', shortcuts.find(shortcut => shortcut.id === id));
    setShortcutItem(shortcuts.find(shortcut => shortcut.id === id));
  }, [shortcuts, id]);


  useEffect(() => {
    if (!shortcutItem) return;
    console.log('triggering', shortcutItem);
    shortcutItem.onTrigger = onTrigger;
  }, [shortcutItem, onTrigger]);

  return <></>;
};
