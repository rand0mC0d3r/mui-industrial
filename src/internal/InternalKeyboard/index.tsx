import { useCallback, useContext, useEffect } from 'react'
import { ShortcutObject } from '../../index.types'
import DataProvider, { DataContextInterface } from '../../Store'

export default function () {
  const {
    shortcuts,
    handleCallKeyboard
  } : {
    shortcuts: ShortcutObject[],
    handleCallKeyboard: DataContextInterface['handleCallKeyboard'],
   } = useContext(DataProvider) as DataContextInterface

  const handleUserKeyPress = useCallback(event => {
    const { keyCode } = event

    const result = shortcuts.find(shortcut => shortcut.ascii === keyCode || shortcut.char === (keyCode === 32 ? 'Space' : String.fromCharCode(keyCode)))
    if (!result || !result.onTrigger) return

    if ((result.shiftKey || false) === true && event.shiftKey === false) return
    if ((result.metaKey || false) === true && event.metaKey === false) return
    if ((result.ctrlKey || false) === true && event.ctrlKey === false) return
    if ((result.altKey || false) === true && event.altKey === false) return

    console.log('triggering', result.id)
    handleCallKeyboard({ id: result.id })
    // result.onTrigger()
  }, [shortcuts])

  useEffect(() => {
    window.addEventListener('keydown', handleUserKeyPress)
    return () => window.removeEventListener('keydown', handleUserKeyPress)
  }, [handleUserKeyPress])

  return <></>
}
