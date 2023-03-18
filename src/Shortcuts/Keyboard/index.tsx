/* eslint-disable no-unused-vars */
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
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
  // const [shortcutItem, setShortcutItem] = useState<ShortcutObject | undefined>();
  const refShortcutItem = useRef<ShortcutObject | undefined>();
  const [announced, setAnnounced] = useState<boolean>(false);
  const [toDestroy, setToDestroy] = useState<boolean>(false);
  const [triggeredLastCall, setTriggeredLastCall] = useState<number>(0);

  const { shortcuts } : { shortcuts: ShortcutObject[] } = useContext(DataProvider) as DataContextInterface;

  const handleKeyboardAnnouncement = useContext(DataProvider).handleKeyboardAnnouncement as DataContextInterface['handleKeyboardAnnouncement'];
  const { handleKeyboardDestroy } = useContext(DataProvider);

  const callbackAnnouncement = useCallback(() => {
    if (((char || ascii) && id)) {
      // console.log('🚩 ADD', id, refShortcutItem.current);
      handleKeyboardAnnouncement({ char, id, ascii, label, shiftKey, ctrlKey, altKey, metaKey, onTrigger, insensitive } as ShortcutObject);
      // setAnnounced(true);
    }
  }, [ handleKeyboardAnnouncement, char, id, ascii, label, shiftKey, ctrlKey, altKey, metaKey, onTrigger, insensitive]);

  const callbackDestroy = useCallback(() => {
    handleKeyboardDestroy({ id });
  }, [handleKeyboardDestroy, id]);

  // const callbackOnTrigger = useCallback(() => {
  //   onTrigger();
  // }, [onTrigger]);

  useEffect(() => {
    if (refShortcutItem.current === undefined) {
      callbackAnnouncement();
    }
  }, [callbackAnnouncement]);

  useEffect(() =>  {

    return () => {
      if (refShortcutItem.current !== undefined) {
        console.log('DESTROY keyboard');
        callbackDestroy();
      }
    };
  });

  // useEffect(() => {
  //   return () => {
  //     if (announced && !toDestroy && shortcutItem) {
  //       console.log('MARK TO DESTROY', toDestroy, shortcutItem);
  //       callbackDestroy();
  //     }
  //   };
  // }, [announced, toDestroy, shortcutItem, callbackDestroy]);

  useEffect(() => {
    refShortcutItem.current = shortcuts.find(shortcut => shortcut.id === id);
    console.log('🏳️ SHORTCUTS', shortcuts, id, refShortcutItem.current === undefined);
  }, [shortcuts, id]);

  // useEffect(() => {
  //   const lastCall = shortcutItem?.lastCall;
  //   if (shortcutItem && lastCall && lastCall !== 0 && lastCall !== triggeredLastCall) {
  //     console.log('trigeer', lastCall);
  //     setTriggeredLastCall(() => {
  //       callbackOnTrigger();
  //       return lastCall;
  //     });

  //   }
  // }, [shortcutItem, callbackOnTrigger, triggeredLastCall]);

  // useEffect(() => {
  //   if (!shortcutItem || !announced) return;
  //   shortcutItem.onTrigger = onTrigger;

  //   // return () => {
  //   // shortcutItem.onTrigger = undefined;
  //   // console.log('destroy');
  //   // callbackDestroy();
  //   // };
  // }, [shortcutItem, onTrigger, announced]);

  return <>xxxx  {toDestroy ? 'true' : 'false'}</>;
};
