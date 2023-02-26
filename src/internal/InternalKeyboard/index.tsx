/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useContext, useEffect } from 'react'
import DataProvider, { DataContextInterface } from '../../Store'

export default function () {
  const { shortcuts } = useContext(DataProvider) as DataContextInterface

  const handleUserKeyPress = useCallback(event => {
    const { keyCode } = event
    const convertedKeyCode = keyCode === 32 ? 'Space' : String.fromCharCode(keyCode)
    const foundShortcut = shortcuts.find(shortcut => shortcut.char === convertedKeyCode || shortcut.ascii === keyCode)
    if (foundShortcut) {
      console.log(foundShortcut)
      foundShortcut.onTrigger()
      // handleKeyboardAnnouncement(foundShortcut)
    }
  }, [shortcuts])

  useEffect(() => {
    window.addEventListener('keydown', handleUserKeyPress)
    return () => {
      window.removeEventListener('keydown', handleUserKeyPress)
    }
  }, [handleUserKeyPress])

  return <></>
}
