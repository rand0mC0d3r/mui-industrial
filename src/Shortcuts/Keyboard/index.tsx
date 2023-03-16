/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from 'react';
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


  useEffect(() => {
    if ((char || ascii) && id) {
      handleKeyboardAnnouncement({ char, id, ascii, label, shiftKey, ctrlKey, altKey, metaKey, onTrigger, insensitive } as ShortcutObject);
    }
  }, [char, id, ascii, label, shiftKey, ctrlKey, altKey, metaKey, insensitive, onTrigger, handleKeyboardAnnouncement]);

  useEffect(() => {
    setShortcutItem(shortcuts.find(shortcut => shortcut.id === id));
  }, [shortcuts, id]);


  useEffect(() => {
    if (!shortcutItem) return;
    console.log('triggering', shortcutItem);
    shortcutItem.onTrigger = onTrigger;
  }, [shortcutItem, onTrigger]);

  return <></>;
};
