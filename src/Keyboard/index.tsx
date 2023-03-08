import { useContext, useEffect } from 'react'
import { ShortcutObject } from '../index.types'
import DataProvider, { DataContextInterface } from '../Store'

export default function ({
  id,
  shiftKey,
  ctrlKey,
  altKey,
  metaKey,
  ascii,
  char,
  label,
  insensitive = true,
  onTrigger = () => {},
} : ShortcutObject) {
  const {
    shortcuts,
    handleKeyboardAnnouncement,
  } : {
    shortcuts: ShortcutObject[],
    handleKeyboardAnnouncement: DataContextInterface['handleKeyboardAnnouncement']
  } = useContext(DataProvider) as DataContextInterface

  useEffect(() => {
    if ((char || ascii) && id && !shortcuts.some(shortcut => shortcut.id === id)) {
      handleKeyboardAnnouncement({ label, ascii, id, char, shiftKey, metaKey, ctrlKey, altKey, insensitive, onTrigger } as ShortcutObject)
    }
  }, [char, id, ascii, label, shiftKey, ctrlKey, altKey, metaKey, insensitive, onTrigger, handleKeyboardAnnouncement])

  return <></>
}
