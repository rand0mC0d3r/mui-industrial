/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-globals */
/* eslint-disable @typescript-eslint/no-explicit-any */
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined'
import DeleteSweepOutlinedIcon from '@mui/icons-material/DeleteSweepOutlined'
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import { useContext, useEffect, useState } from 'react'
import { SnackbarObject, StatusObject } from '../index.types'
import InternalAlert from '../internal/InternalAlert'
import StatusHelper from '../StatusHelper'
import StatusPanel from '../StatusPanel'
import DataProvider from '../Store'

export default function ({
  id = 'notificationsPanel',
} : {
  id?: string,
}) {
  const {
    status,
    snackbar,
  } : {
    status: StatusObject[],
    snackbar: SnackbarObject[],
  } = useContext(DataProvider)
  const [statusObject, setStatusObject] = useState<StatusObject | null>(null)

  useEffect(() => {
    const foundObject = status.find(item => item.uniqueId === id)
    if (statusObject === null && foundObject) {
      setStatusObject(foundObject)
    }
  }, [status, id, statusObject])

  return <>
    <DeleteSweepOutlinedIcon />
    <DeleteForeverOutlinedIcon />
    <LockOpenOutlinedIcon />
    <LockOutlinedIcon />
    <StatusPanel
      hasDecoration={false}
      id={id}
      // popoverActions={<>
      //   <DeleteSweepOutlinedIcon />
      //   <DeleteForeverOutlinedIcon />
      //   <LockOpenOutlinedIcon />
      //   <LockOutlinedIcon />
      // </>}
      popoverTitle="Notifications"
      tooltip="Notifications"
      popover={<div style={{ width: '500px', height: '650px', overflow: 'scroll' }}>
        {snackbar.map(({ uniqueId, severity, message, source, actions, code }) => (
          <InternalAlert key={uniqueId} {...{ uniqueId, actions, severity, source, message, code }} />))}
      </div>}
    >
      <StatusHelper text="Notifications" icon={<NotificationsOutlinedIcon />} badge={snackbar.length} />
    </StatusPanel>
  </>
}
