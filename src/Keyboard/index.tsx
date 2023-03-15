import { useContext, useEffect, useState } from 'react'
import { ShortcutObject } from '../index.types'
import DataProvider, { DataContextInterface } from '../Store'

export default function (props : ShortcutObject) {
  const [shortcutItem, setShortcutItem] = useState<ShortcutObject | undefined>(undefined)
  const {
    id, shiftKey, ctrlKey, altKey, metaKey,
    ascii, char, label, insensitive = true, onTrigger = () => {},
  } = props

  const {
    shortcuts,
    handleKeyboardAnnouncement,
  } : {
    shortcuts: ShortcutObject[],
    handleKeyboardAnnouncement: DataContextInterface['handleKeyboardAnnouncement']
  } = useContext(DataProvider) as DataContextInterface

  useEffect(() => {
    if ((char || ascii) && id && !shortcuts.some(shortcut => shortcut.id === id)) {
      handleKeyboardAnnouncement({ ...props } as ShortcutObject)
    }
  }, [char, id, ascii, label, shiftKey, ctrlKey, altKey, metaKey, insensitive, onTrigger, handleKeyboardAnnouncement])

  useEffect(() => {
    setShortcutItem(shortcuts.find(shortcut => shortcut.id === id))
  }, [shortcuts])

  useEffect(() => {
    if (!shortcutItem) return
    shortcutItem.onTrigger = onTrigger
  }, [shortcutItem?.open])

  return <></>
}
