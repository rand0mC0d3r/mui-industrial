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
  const [announced, setAnnounced] = useState<boolean>(false);
  const [toDestroy, setToDestroy] = useState<boolean>(false);
  const [triggeredLastCall, setTriggeredLastCall] = useState<number>(0);

  const { shortcuts } : { shortcuts: ShortcutObject[] } = useContext(DataProvider) as DataContextInterface;

  const handleKeyboardAnnouncement = useContext(DataProvider).handleKeyboardAnnouncement as DataContextInterface['handleKeyboardAnnouncement'];
  const { handleKeyboardDestroy } = useContext(DataProvider);

  const callbackAnnouncement = useCallback(() => {
    if (((char || ascii) && id && !announced)) {
      console.log('ADD', { char, id, ascii, label, shiftKey, ctrlKey, altKey, metaKey, onTrigger, insensitive });
      handleKeyboardAnnouncement({ char, id, ascii, label, shiftKey, ctrlKey, altKey, metaKey, onTrigger, insensitive } as ShortcutObject);
      setAnnounced(true);
    }
  }, [ handleKeyboardAnnouncement, announced, char, id, ascii, label, shiftKey, ctrlKey, altKey, metaKey, onTrigger, insensitive]);

  const callbackDestroy = useCallback(() => {
    handleKeyboardDestroy({ id });
  }, [handleKeyboardDestroy, id]);

  const callbackOnTrigger = useCallback(() => {
    onTrigger();
  }, [onTrigger]);

  useEffect(() => {
    // if (!((char || ascii) && id && !announced)) return; // This cancels the effect if the shortcut is not valid or already announced
    callbackAnnouncement();

    // return () => {
    //   console.log('REMOVE', id);
    // };
  }, [char, id, ascii, announced, callbackAnnouncement]);

  useEffect(() => {
    if (toDestroy) {
      console.log('DESTROY', toDestroy, id);
    }
  }, [toDestroy, id]);

  useEffect(() => {
    return () => {
      if (announced && !toDestroy && shortcutItem) {
        console.log('MARK TO DESTROY', toDestroy, shortcutItem);
        callbackDestroy();
      }
    };
  }, [announced, toDestroy, shortcutItem, callbackDestroy]);

  useEffect(() => {
    if (!announced) return;
    setShortcutItem(shortcuts.find(shortcut => shortcut.id === id));
  }, [shortcuts, announced, id]);

  useEffect(() => {
    const lastCall = shortcutItem?.lastCall;
    if (shortcutItem && lastCall && lastCall !== 0 && lastCall !== triggeredLastCall) {
      console.log('trigeer', lastCall);
      setTriggeredLastCall(() => {
        callbackOnTrigger();
        return lastCall;
      });

    }
  }, [shortcutItem, callbackOnTrigger, triggeredLastCall]);

  // useEffect(() => {
  //   if (!shortcutItem || !announced) return;
  //   shortcutItem.onTrigger = onTrigger;

  //   return () => {
  //     shortcutItem.onTrigger = undefined;
  //     console.log('destroy');
  //     // callbackDestroy();
  //   };
  // }, [shortcutItem, onTrigger, announced, callbackDestroy]);

  return <>xxxx  {toDestroy ? 'true' : 'false'}</>;
};
