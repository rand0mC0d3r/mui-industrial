import { useContext } from 'react'
import { SnackbarObject } from '../index.types'
import InternalAlert from '../internal/InternalAlert'
import DataProvider from '../Store'

export default function () {
  const { snackbar } : { snackbar: SnackbarObject[] } = useContext(DataProvider)

  return <>
    {snackbar.map(({ uniqueId, severity, message, source, actions, code }) => <InternalAlert
      key={uniqueId}
      {...{ uniqueId, actions, severity, source, message, code }}
    />)}
  </>
}
