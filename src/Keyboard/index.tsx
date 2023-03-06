import { useCallback, useContext, useEffect, useState } from 'react'
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
    handleKeyboardAnnouncement
  } : {
    shortcuts: ShortcutObject[],
    handleKeyboardAnnouncement: DataContextInterface['handleKeyboardAnnouncement']
  } = useContext(DataProvider) as DataContextInterface
  const [uniqueId, setUniqueId] = useState<string | null>(null)

  useEffect(() => {
    const generateId = `${char}-${shiftKey}-${ctrlKey}-${altKey}-${metaKey}-${insensitive}`
    if (!uniqueId || uniqueId !== generateId) {
      setUniqueId(generateId)
    }
  }, [char, shiftKey, ctrlKey, altKey, metaKey, insensitive, uniqueId])

  const callbackHandleStatusAnnouncement = useCallback(
    () => handleKeyboardAnnouncement({ uniqueId, label, ascii, id, char, shiftKey, metaKey, ctrlKey, altKey, insensitive, onTrigger } as ShortcutObject),
    [id, label, onTrigger, ascii, char, shiftKey, ctrlKey, altKey, metaKey, insensitive, uniqueId, handleKeyboardAnnouncement]
  )

  useEffect(() => {
    if ((char || ascii) && uniqueId && !shortcuts.some(shortcut => shortcut.uniqueId === uniqueId)) {
      callbackHandleStatusAnnouncement()
    }
  }, [char, ascii, label, shiftKey, ctrlKey, altKey, metaKey, insensitive, uniqueId, callbackHandleStatusAnnouncement])

  return <></>
}
