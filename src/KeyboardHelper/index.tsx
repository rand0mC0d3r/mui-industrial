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
  const { shortcuts } : { shortcuts: ShortcutObject[] } = useContext(DataProvider) as DataContextInterface
  const [shortcutObject, setShortcutObject] = useState<ShortcutObject | undefined>()

  useEffect(() => {
    if (!shortcutId) return
    setShortcutObject(shortcuts.find(shortcut => shortcut.id === shortcutId))
  }, [shortcutId])

  const content = <>
    {shortcutObject?.ctrlKey && '⌃' }
    {shortcutObject?.altKey && '⌥' }
    {shortcutObject?.metaKey && '⌘' }
    {shortcutObject?.shiftKey && '⇧' }
    {shortcutObject?.char}
  </>

  return <>
    {shortcutId && shortcutObject && <>
      {asChip
        ? <Chip label={content} variant="outlined" size="small" />
        : <Typography id="lowerK" variant="caption" color="textSecondary">{content}</Typography>}
    </>}
  </>
}
