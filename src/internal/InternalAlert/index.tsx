/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import CheckIcon from '@mui/icons-material/Check'
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined'
import PriorityHighOutlinedIcon from '@mui/icons-material/PriorityHighOutlined'
import WarningAmberIcon from '@mui/icons-material/WarningAmber'
import { Alert, Tooltip, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { cloneElement, DetailedReactHTMLElement, useEffect, useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'

const SCode = styled('textarea')<{ height: number }>(({ height, theme }) => ({
  fontFamily: 'monospace',
  backgroundColor: `${theme.palette.divider}`,
  padding: '8px',
  resize: 'vertical',
  whiteSpace: 'nowrap',
  marginTop: '8px',
  marginBottom: '8px',
  borderColor: 'inherit',
  maxHeight: '300px',
  minHeight: `${(height * 20) + 10}px`,
  borderRadius: '4px',
  color: 'inherit',

  '&::selection': {
    backgroundColor: `${theme.palette.divider}`,
    textDecoration: 'underline',
    textDecorationStyle: 'dotted',
    textDecorationColor: `${theme.palette.divider}`,
  },

  '&:focus-visible': {
    outline: '0px',
  },
}))

const SMessage = styled(Typography)<{ ellipsis: string }>(({ ellipsis }) => ({
  whiteSpace: ellipsis === 'true' ? 'nowrap' : 'normal',
  overflow: ellipsis === 'true' ? 'hidden' : 'unset',
  textOverflow: ellipsis === 'true' ? 'ellipsis' : 'unset',
  lineHeight: ellipsis === 'true' ? 'initial' : '1.65',
}))

const SWrapper = styled('div')(() => ({
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  alignItems: 'stretch',
  justifyContent: 'center',
}))

const SAlert = styled(Alert)<{ expanded: string, actions: string }>(({ expanded, actions }) => ({
  '.MuiAlert-message': {
    minWidth: 'unset',
    width: '100%',
    padding: expanded === 'true' ? '8px 0px' : '0px',
    display: 'flex',
    flexDirection: (actions === 'true' || expanded === 'true') ? 'column' : 'row',
  },
}))

export default function ({
  uniqueId,
  actions,
  source,
  severity,
  message,
  code,
  isRemoveFlag = false,
}: {
  uniqueId: string,
  actions?: any,
  source?: string,
  severity: any,
  message: string,
  code: string,
  isRemoveFlag?: boolean,
}) {
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    if (actions) {
      setIsExpanded(true)
    }
  }, [actions])

  const getMessage = (ellipsis = false) => <SMessage ellipsis={ellipsis.toString()}>
    {message}
  </SMessage>

  const getIcon = (icon: any) => <Tooltip placement="left" arrow title={`${severity.toUpperCase()}${source ? ` - Source: ${source}` : ''}`}>
    {cloneElement(icon, { style: { fontSize: 'inherit' } })}
  </Tooltip>

  return <SAlert
    expanded={isExpanded.toString()}
    actions={(actions?.length > 0).toString()}
    key={uniqueId}
    onDoubleClick={() => !actions && setIsExpanded(!isExpanded)}
    icon={
      <span style={{ lineHeight: '0px' }}>
        {severity === 'info' && getIcon(<PriorityHighOutlinedIcon />)}
        {severity === 'success' && getIcon(<CheckIcon />)}
        {severity === 'warning' && getIcon(<WarningAmberIcon />)}
        {severity === 'error' && getIcon(<ErrorOutlineOutlinedIcon />)}
      </span>
}
    {...{ severity }}
  >
    <SWrapper>
      <Header {...{ uniqueId, code, actions, severity, message, isRemoveFlag, isExpanded, setIsExpanded }} />

      {(isExpanded || actions) && getMessage()}

      {isExpanded && code && <SCode
        defaultValue={code}
        spellCheck="false"
        height={Math.min(10, code.split('\n').length)}
      />}

      {(isExpanded || actions) && <>
        {(source || actions) && <Footer {...{ actions, severity, source }} />}
      </>}
    </SWrapper>
  </SAlert>
}
