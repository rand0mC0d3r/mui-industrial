/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloseIcon from '@mui/icons-material/Close';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SubtitlesOutlinedIcon from '@mui/icons-material/SubtitlesOutlined';

import { Box, IconButton, Tooltip } from '@mui/material';
import { useContext, useEffect } from 'react';
import DataProvider, { composeDomId } from '../../../../Store';
import { SCustomAction, SHeader, SMessage, STitle } from './css';

const componentId = 'snackBar';


export default ({
  code,
  id,
  actions,
  severity,
  message,
  isRemoveFlag = false,
  isExpanded,
  setIsExpanded,
}: {
  code?: string,
  id: string,
  actions?: any,
  severity: any,
  message: string,
  isRemoveFlag?: boolean,
  isExpanded: boolean,
  setIsExpanded: any,
}) : JSX.Element => {
  const { handleSnackbarHide } = useContext(DataProvider);

  const toggleExpanded = () => {
    if (actions?.length > 0) return;
    setIsExpanded(!isExpanded);
  };

  const closeAlert = () => {
    handleSnackbarHide({ id });
  };

  useEffect(() => {
    if (actions) {
      setIsExpanded(true);
    }
  }, [actions, setIsExpanded]);

  const getMessage = (ellipsis = false) => <SMessage ellipsis={ellipsis.toString()}>
    {message}
  </SMessage>;

  return <SHeader expanded={isExpanded.toString()}>

    {(isExpanded)
      ? <STitle actions={actions} onDoubleClick={toggleExpanded} variant="subtitle1" color="inherit">{severity}</STitle>
      : <>
        {!actions
          ? <>{getMessage(true)}</>
          : <STitle actions={actions} onDoubleClick={toggleExpanded} variant="subtitle1" color="inherit">{severity}</STitle>}
      </>}

    <Box display={'flex'} flexDirection='row'  gap={1} alignItems="center">
      {!isExpanded && code && <Tooltip arrow title="It contains additional console details">
        <SubtitlesOutlinedIcon color="disabled" />
      </Tooltip>}

      <SCustomAction id={composeDomId(componentId, [id, 'customAction'])} />
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
    </Box>

  </SHeader>;
};
