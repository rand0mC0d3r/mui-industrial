/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import CloseIcon from '@mui/icons-material/Close'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import SubtitlesOutlinedIcon from '@mui/icons-material/SubtitlesOutlined'
import { IconButton, Tooltip, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useContext, useEffect, useState } from 'react'
import DataProvider, { composeDomId } from '../../../../Store'

const componentId = 'snackBar'

const SHeader = styled('div')<{ expanded: string }>(({ expanded }) => ({
  display: 'flex',
  alignItems: 'center',
  paddingBottom: expanded === 'true' ? '8px' : '0px',
  marginTop: expanded === 'true' ? '-4px' : '0px',
  justifyContent: 'space-between',
  width: '100%',
}))

const SActionButtons = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '8px',
  alignItems: 'center',
}))

const SCustomAction = styled('div')(() => ({
  lineHeight: '0px',
}))

const STitle = styled(Typography)<{ actions: any}>(({ actions } : {actions: any}) => ({
  userSelect: 'none',
  textTransform: 'capitalize',
  fontWeight: 'bold',
  cursor: actions ? 'initial' : 'cursor',
}))

const SMessage = styled(Typography)<{ ellipsis: string }>(({ ellipsis }) => ({
  width: '300px',
  whiteSpace: ellipsis === 'true' ? 'nowrap' : 'normal',
  overflow: ellipsis === 'true' ? 'hidden' : 'unset',
  textOverflow: ellipsis === 'true' ? 'ellipsis' : 'unset',
  lineHeight: ellipsis === 'true' ? 'initial' : '1.65',
  cursor: 'pointer',
}))

export default function ({
  code,
  uniqueId,
  actions,
  severity,
  message,
  isRemoveFlag = false,
  isExpanded,
  setIsExpanded,
}: {
	code?: string,
  uniqueId: string,
  actions?: any,
  severity: any,
  message: string,
  isRemoveFlag?: boolean,
	isExpanded: boolean,
	setIsExpanded: any,
}) {
  const { handleSnackbarDestroy } = useContext(DataProvider)

  const toggleExpanded = () => {
    if (actions?.length > 0) return
    setIsExpanded(!isExpanded)
  }

  const closeAlert = () => {
    handleSnackbarDestroy({ uniqueId })
  }

  useEffect(() => {
    if (actions) {
      setIsExpanded(true)
    }
  }, [actions])

  const getMessage = (ellipsis = false) => <SMessage ellipsis={ellipsis.toString()}>
    {message}
  </SMessage>

  return <SHeader expanded={isExpanded.toString()}>
    {(isExpanded)
      ? <STitle actions={actions} onDoubleClick={toggleExpanded} variant="subtitle1" color="inherit">{severity}</STitle>
      : <>
        {!actions
          ? <>{getMessage(true)}</>
          : <STitle actions={actions} onDoubleClick={toggleExpanded} variant="subtitle1" color="inherit">{severity}</STitle>}
      </>}
    <SActionButtons>
      {!isExpanded && code && <Tooltip arrow title="It contains additional console details">
        <SubtitlesOutlinedIcon color="disabled" />
      </Tooltip>}
      <SCustomAction id={composeDomId(componentId, [uniqueId, 'customAction'])} />
      {!actions && <Tooltip arrow title="Expand/Collapse alert">
        <IconButton color="inherit" size="small" onClick={toggleExpanded}>
          {!isExpanded
            ? <ExpandMoreIcon fontSize="small" />
            : <ExpandLessIcon fontSize="small" />}
        </IconButton>
        </Tooltip>}
      <Tooltip arrow title={isRemoveFlag ? 'Close alert' : 'Dismiss alert'}>
        <IconButton color="inherit" onClick={closeAlert} size="small">
          {isRemoveFlag ? <CloseIcon fontSize="small" /> : <ArrowForwardIcon fontSize="small" />}
        </IconButton>
      </Tooltip>
    </SActionButtons>
  </SHeader>
}
