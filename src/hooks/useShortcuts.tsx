/* eslint-disable import/prefer-default-export */
import { useContext } from 'react'
import { ShortcutObject } from '../index.types'
import DataProvider, { DataContextInterface } from '../Store'

export const useShortcuts = () => {
  const { shortcuts } : { shortcuts: ShortcutObject[] } = useContext(DataProvider) as DataContextInterface
  return shortcuts
}
