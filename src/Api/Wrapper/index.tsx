/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { CSSProperties, lazy, MouseEvent, ReactNode, Suspense, useContext, useState } from 'react';
import { SettingsObject, StatusType } from '../../index.types';
import DataProvider, { DataContextInterface } from '../../Store';
import InternalConsole from '../InternalConsole';
import InternalKeyboard from '../InternalKeyboard';
import InternalNotifications from '../InternalNotifications';
import InternalSettings from '../InternalSettings';
// import InternalSidebar from '../../_todo/InternalSidebar';
import InternalStatus from '../InternalStatus';

const InternalCommands = lazy(() => import('../InternalCommands'));

import { SBox, SChildren, SChildrenRow, SNotifications, SStatusContainer } from './css';

export default ({
  slim,
  children,
  style,
} : {
  slim?: boolean,
  children: ReactNode,
  style?: CSSProperties
}): JSX.Element => {
  const { status, shortcuts, commands, settings, snackbars } = useContext(DataProvider) as DataContextInterface;
  const { position, fullWidth, hasBorder } = settings as SettingsObject;
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

  const onContextMenu = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setAnchorEl(e.currentTarget);
  };

  const renderConsole = status.some(({ type }) => type === StatusType.CONSOLE) && <InternalConsole />;

  const renderCommands = commands.length > 0 && <Suspense fallback={<></>}>
    <InternalCommands />
  </Suspense>;

  const renderKeyboards = shortcuts.length > 0 && <InternalKeyboard />;

  const renderNotifications = snackbars.length > 0 && <SNotifications {...{ column: position }}>
    <InternalNotifications />
  </SNotifications>;

  const renderStatus = status.some(({ visible }) => visible) && <SStatusContainer {...{ fullWidth, hasBorder, onContextMenu }}>
    <InternalStatus {...{ style }} />
  </SStatusContainer>;

  // const renderSidebar = <>
  // {/* {sidebar.length > 0 && <Suspense fallback={<></>}> */}
  //   <InternalSidebar />
  // {/* </Suspense>} */}
  // </>;

  return <>
    <SBox id="mui-status-wrapper" {...{ column: position, slim }}>
      <SChildrenRow>
        {/* {renderSidebar} */}
        <SChildren id="mui-status-children">
          {children}

        </SChildren>
      </SChildrenRow>
      {renderConsole}
      {renderCommands}
      {renderStatus}
      {renderNotifications}
      {renderKeyboards}
    </SBox>
    <InternalSettings {...{ anchorEl, setAnchorEl }} />
  </>;
};
