/* eslint-disable no-unused-vars */
import { Chip, Typography } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import { ShortcutObject } from '../index.types'
import DataProvider, { DataContextInterface } from '../Store'

export default function ({
  shortcutId,
  asChip = false,
} : {
  shortcutId: string,
  asChip?: boolean,
}) {
  const { shortcuts } = useContext(DataProvider) as DataContextInterface
  const [shortcutObject, setShortcutObject] = useState<ShortcutObject | null>(null)

  useEffect(() => {
    if (shortcutId) {
      const result = shortcuts.find(shortcut => shortcut.id === shortcutId)
      if (result) {
        setShortcutObject(result)
      }
    }
  }, [shortcutId])

  const content = <>
    {shortcutObject && <>
      {shortcutObject.ctrlKey && '⌃' }
      {shortcutObject.commandAltKey && '⌘' }
      {shortcutObject.shiftKey && '⇧' }
      {shortcutObject.char}
    </>}
  </>

  return <>
    {asChip
      ? <Chip label={content} variant="outlined" size="small" />
      : <Typography variant="caption" color="textSecondary">{content}</Typography>}
  </>
}
