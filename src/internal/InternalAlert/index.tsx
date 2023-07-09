/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import CheckIcon from '@mui/icons-material/Check';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import PriorityHighOutlinedIcon from '@mui/icons-material/PriorityHighOutlined';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { Tooltip } from '@mui/material';
import { cloneElement, useContext, useEffect, useState } from 'react';
import { Severity, SnackbarProps } from '../../index.types';
import DataProvider from '../../Store';
import Footer from './components/Footer';
import Header from './components/Header';
import { SAlert, SCode, SMessage, SWrapper } from './css';

export default ({
  actions,
  autoHideDuration,
  code,
  id,
  message,
  severity,
  source,
}: SnackbarProps) : JSX.Element => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { handleSnackbarHide, snackbars } = useContext(DataProvider);

  useEffect(() => {
    if (actions) setIsExpanded(true);
  }, [actions]);

  useEffect(() => {
    if (autoHideDuration && snackbars.some(({ id: snackbarId, open }) => snackbarId === id && open)) {
      const timeout = setTimeout(() => {
        handleSnackbarHide({ id });
      }, autoHideDuration);
      return () => clearTimeout(timeout);
    }
    return () => {};
  }, [autoHideDuration, handleSnackbarHide, id, snackbars]);

  const getMessage = (ellipsis = false) => <SMessage ellipsis={ellipsis.toString()}>{message}</SMessage>;

  const getIcon = (icon: any) => <Tooltip placement="left" arrow title={`${severity?.toUpperCase()}${source ? ` - Source: ${source}` : ''}`}>
    {cloneElement(icon, { style: { fontSize: 'inherit' } })}
  </Tooltip>;

  return <SAlert
    key={id}
    expanded={isExpanded.toString()}
    actions={(actions?.length > 0).toString()}
    onDoubleClick={() => !actions && setIsExpanded(!isExpanded)}
    icon={<span style={{ lineHeight: '0px' }}>
        {severity === Severity.INFO && getIcon(<PriorityHighOutlinedIcon />)}
        {severity === Severity.SUCCESS && getIcon(<CheckIcon />)}
        {severity === Severity.WARNING && getIcon(<WarningAmberIcon />)}
        {severity === Severity.ERROR && getIcon(<ErrorOutlineOutlinedIcon />)}
      </span>}
    {...{ severity }}
  >
    <SWrapper>
      <Header {...{ id, code, actions, severity, message, isRemoveFlag: false, isExpanded, setIsExpanded }} />
      {(isExpanded || actions) && getMessage()}
      {isExpanded && code && <SCode defaultValue={code} height={Math.min(10, code.split('\n').length)} />}
      {(isExpanded || actions) && <>
        {(source || actions) && <Footer {...{ actions, severity, source }} />}
      </>}
    </SWrapper>
  </SAlert>;
};
