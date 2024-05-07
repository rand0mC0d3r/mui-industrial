/* eslint-disable @typescript-eslint/no-explicit-any */
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import { Popover, Tooltip } from '@mui/material';
import { useContext } from 'react';
import { PlacementPosition, SettingsObject, StatusObject } from '../../index.types';
import DataProvider, { DataContextInterface } from '../../Store';
import { SElement, SElementItem } from './css';

export default ({ anchorEl, setAnchorEl } : { anchorEl: HTMLDivElement | null, setAnchorEl: any }): JSX.Element => {
  const { status, settings, handleStatusVisibilityToggle } = useContext(DataProvider) as DataContextInterface;
  const { position } = settings as SettingsObject;
  const open = Boolean(anchorEl);

  const onClose = () => setAnchorEl(null);

  const statusEntry = (statusItem: StatusObject) => <SElementItem onClick={() => handleStatusVisibilityToggle({ id: statusItem.uniqueId })}>
    {statusItem.visible ? <CheckBoxOutlinedIcon /> : <CheckBoxOutlineBlankOutlinedIcon />}
    {/* {statusItem.children || <StyledTypographyNoChildren variant="caption" color="textSecondary">No content for child</StyledTypographyNoChildren>} */}
  </SElementItem>;

  const entryWrapper = (statusItem: StatusObject) => <Tooltip key={statusItem.uniqueId} {...{ title: 'Toggle visibility of tile' }}>
    {statusEntry(statusItem)}
  </Tooltip>;

  return <Popover
    id="toggle-status-popover"
    {...{ open, anchorEl, onClose, elevation: 2 }}
    anchorOrigin={{ vertical: position === PlacementPosition.TOP ? 'top' : 'bottom', horizontal: 'center' }}
    transformOrigin={{ vertical: position === PlacementPosition.BOTTOM ? 'bottom' : 'top', horizontal: 'center' }}
    style={{ marginTop: `${(position === PlacementPosition.TOP ? 1 : -1) * 12}px` }}
  >
    <SElement {...{ onContextMenu: (e: { preventDefault: () => void; }) => { e.preventDefault(); } }}>
      {[false, true].map((state: boolean) => <div key={state.toString()}>
        {status
        // .filter(({ secondary }) => secondary === state)
          .map(statusItem => entryWrapper(statusItem))}
      </div>)}
    </SElement>
  </Popover>;
};
