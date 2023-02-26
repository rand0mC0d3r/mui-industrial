/* eslint-disable no-unused-vars */
import { useCallback, useContext, useEffect, useState } from 'react'
import { ShortcutObject } from '../index.types'
import DataProvider, { DataContextInterface } from '../Store'

export default function ({
  id,
  shiftKey,
  ctrlKey,
  commandAltKey,
  ascii,
  char,
  label,
  insensitive = true,
  onTrigger = () => {},
} : ShortcutObject) {
  const { shortcuts, handleKeyboardAnnouncement } = useContext(DataProvider) as DataContextInterface
  const [uniqueId, setUniqueId] = useState<string | null>(null)

  useEffect(() => {
    const generateId = `${char}-${shiftKey}-${ctrlKey}-${commandAltKey}-${insensitive}`
    if (!uniqueId || uniqueId !== generateId) {
      setUniqueId(generateId)
    }
  }, [char, shiftKey, ctrlKey, commandAltKey, insensitive, uniqueId])

  const callbackHandleStatusAnnouncement = useCallback(
    () => handleKeyboardAnnouncement({ uniqueId, label, ascii, id, char, shiftKey, ctrlKey, commandAltKey, insensitive, onTrigger } as ShortcutObject),
    [id, label, onTrigger, ascii, char, shiftKey, ctrlKey, commandAltKey, insensitive, uniqueId, handleKeyboardAnnouncement]
  )

  useEffect(() => {
    if ((char || ascii) && uniqueId && !shortcuts.some(shortcut => shortcut.uniqueId === uniqueId)) {
      callbackHandleStatusAnnouncement()
    }
  }, [char, ascii, label, shiftKey, ctrlKey, commandAltKey, insensitive, uniqueId, callbackHandleStatusAnnouncement])

  return <></>
}
