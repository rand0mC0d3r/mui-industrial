/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import React, { createContext, useEffect, useState } from 'react';
import { PlacementPosition, SettingsObject, Severity, ShortcutObject, SnackbarObject, StatusObject, StatusType } from '../index.types';
import Wrapper from '../internal/Wrapper';

const domIdBase = 'mui-status';

export const composeDomId = (component: string, detail: string[]) => {
  const id = detail.join('-');
  return `${domIdBase}-${component}-${id}`;
};

// const packageName = 'mui-industrial';
const settingsStorageKey = 'mui-status.settings';
const statusStorageKey = 'mui-status.status';

const initialSettings = {
  position: PlacementPosition.TOP,
  expand: true,
  statusBarAnnounced: false,
  allowRightClick: true,
  debug: false,
  capsLock: false,
  hasLock: true,
  hasBorder: true,
  variant: 'default',
  isConsoleFixed: false,
  isConsoleOpen: false,
} as SettingsObject;

const valOrDefault = (val: any, def: any) => {
  if (val === undefined) {
    return def;
  }
  return val;
};

export interface DataContextInterface {
  settings: any;
  status: StatusObject[];
  snackbar: SnackbarObject[];
  shortcuts: ShortcutObject[];
  updateConsoleActiveId: ({ id }: { id?: string }) => void;
  updateIsConsoleOpen: any;
  updateIsConsoleClosed: any;
  handleStatusUpdate: any;
  handleKeyboardAnnouncement: ({ id, label, ascii, char, shiftKey, ctrlKey, metaKey, altKey, insensitive }: ShortcutObject) => void;
  // handleKeyboardTriggerUpdate: ({ id, onTrigger }: { id: string, onTrigger: any }) => void;
  // handleUpdateKeyboard: ({ id, onTrigger }: { id: string, onTrigger: any }) => void;
  handleCallKeyboard: ({ id }: { id: string }) => void;
  handleKeyboardDestroy: ({ id }: { id: string }) => void;
  handleStatusAnnouncement: any;
  handleSnackbarAnnouncement: ({ ownId, severity, actions, source, message, code, autoHideDuration } :
  { ownId: string, actions: any, source?: string, severity: Severity, message: any, code?: string, autoHideDuration: number }) => void;
  handleStatusDestroy: any;
  handleSnackbarDestroy: any;
  handleStatusTypeUpdate: ({ id, type }: { id: string, type: StatusType }) => void;
  handleStatusConsoleTitleUpdate: ({ id, title }: { id: string, title?: string }) => void;
  handleStatusVisibilityToggle: any;
  handleStatusKeepOpenToggle: ({ id }: { id: string }) => void;
  triggerStatusBarAnnounced: any;
  logDebug: any,
}

const DataContext = createContext({} as DataContextInterface);

const IndustrialProvider = ({
  expand,
  hasLock,
  position = PlacementPosition.TOP,
  allowRightClick,
  hasBorder = true,
  fullWidth = false,
  justifyContent = 'space-between',
  debug,
  children,
  style,
  size = 'small',
  variant = 'default',
} : {
  expand?: boolean,
  hasLock?: boolean,
  position?: PlacementPosition,
  allowRightClick?: boolean,
  hasBorder?: boolean,
  fullWidth?: boolean,
  justifyContent?: string,
  debug?: boolean,
  children?: React.ReactNode,
  size?: 'small' | 'medium' | 'large',
  variant?: 'default' | 'outlined',
  style: any,
}) => {
  const [status, setStatus] = useState<StatusObject[]>([]);
  const [snackbar, setSnackbar] = useState<SnackbarObject[]>([]);
  const [shortcuts, setShortcuts] = useState<ShortcutObject[]>([]);
  const [settings, setSettings] = useState<SettingsObject>(initialSettings);

  const logDebug = (message: string) => {
    if (settings.debug) {
      console.log(message);
    }
  };

  const handleStatusAnnouncement = ({ id, ownId, secondary, children } : { id: string, ownId: string, secondary: boolean, children: any }) => {
    setStatus((status: StatusObject[]) => {
      const findError = status.find(sItem => sItem.uniqueId === id && sItem.ownId !== ownId);
      if (findError) {
        logDebug(`mui-status: ❌ Status entry already registered with id: [${id}] & ownId: [${ownId}], but was proposed ownId [${findError.ownId}]`);
        return status;
      }
      // logDebug(`mui-status: 🆗 Status entry registered with id: [${id}] & ownId: [${ownId}]`);

      return [
        ...status.filter(({ uniqueId }) => uniqueId !== id),
        {
          index: status.length,
          uniqueId: id,
          ownId,
          keepOpen: false,
          visible: true,
          secondary,
          children,
        } as StatusObject,
      ];
    });
  };
  const handleSnackbarAnnouncement = (
    { ownId, severity, actions, source, message, code, autoHideDuration } :
    { ownId: string, actions: any, source?: string, severity: Severity, message: any, code?: string, autoHideDuration: number },
  ) => {
    console.log('registed snackbar', ownId);
    setSnackbar((snackbar: SnackbarObject[]) => [
      ...snackbar.filter(({ uniqueId }) => uniqueId !== ownId),
      {
        uniqueId: ownId,
        open: true,
        severity,
        actions,
        source,
        message,
        code,
        autoHideDuration,
      } as SnackbarObject,
    ]);
  };


  function generateSignature(id?: string, label?: string, ascii?: number, char?: string): string {
    return `${id}-${label}-${ascii}-${char}`;
  }

  // KEYBOARD SHORTCUTS
  const handleKeyboardAnnouncement = ({ id, label, ascii, char, shiftKey, ctrlKey, altKey, metaKey, onTrigger, insensitive }: any) => {
    const s = shortcuts.find(shortcut => shortcut.id === id);
    if (s && generateSignature(s.id, s.label, s.ascii, s.char) === generateSignature(id, label, ascii, char)) return;

    if (settings.debug) {
      console.log(Math.random().toString(36).slice(2, 7), id);
      console.log('[store] 📩 Registed keyboard', id, label, ascii, char, shiftKey, ctrlKey, altKey, metaKey, insensitive);
    }
    console.log('------------');
    // console.log('[store] 📩 Registed keyboard', id, label, ascii, char, shiftKey, ctrlKey, altKey, metaKey, insensitive);
    setShortcuts((prevShortcuts: ShortcutObject[]) => {
      return [
        ...prevShortcuts
          .filter(p => p.id !== id),
        {
          id,
          char,
          label,
          ascii,

          onTrigger,

          lastCall: 0,

          altKey,
          ctrlKey,
          metaKey,
          shiftKey,

          insensitive,
        } as ShortcutObject,
      ];
    });
  };

  const handleCallKeyboard = ({ id } : { id: string }) => {
    const findShortcut = shortcuts.find(shortcut => shortcut.id === id);
    // if (!!findShortcut && findShortcut?.onTrigger) {
    //   findShortcut?.onTrigger();
    // }
    if (!findShortcut) return;
    setShortcuts((prevShortcuts: ShortcutObject[]) => {
      return [
        ...prevShortcuts

          .filter(p => p.id !== id),
        {
          ...findShortcut,
          lastCall: new Date().getTime(),
        } as ShortcutObject,
      ];
    });
    // new Date().getTime()
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleKeyboardDestroy = ({ id }: { id: string }) => {
    if (shortcuts.some(shortcut => shortcut.id === id)) {

      setShortcuts((prevShortcuts: ShortcutObject[]) => {
        if (settings.debug) {
          console.log('[store] 💀 Destroyed keyboard', id, [...prevShortcuts.filter(p => p.id !== id)]);
        }
        return [...prevShortcuts.filter(p => p.id !== id)];
      });
    }
  };

  //////////////////////////
  //////////////////////////
  //////////////////////////

  const handleStatusUpdate = ({ id, ownId, children }: { id: string, ownId: string, children: React.ReactNode }) => {
    setStatus((status: StatusObject[]) => {
      const findError = status.find(({ uniqueId }) => uniqueId === id);
      if (findError?.ownId !== ownId) {
        if (settings.debug) {
          console.error(`mui-status: ❌ Faulty status update captured for: [${id}] & ownId: [${ownId}], but expected ownId: [${findError?.ownId}]`);
        }
        return status;
      }
      return status.map(sItem => (sItem.uniqueId === id && sItem.ownId === ownId) ? { ...sItem, children } : sItem);
    });
  };

  const handleStatusVisibilityToggle = ({ id }: { id: string }) => {
    setStatus((status: StatusObject[]) => status.map(lo => (lo.uniqueId === id ? { ...lo, visible: !lo.visible } : lo)));
  };

  const handleStatusTypeUpdate = ({ id, type }: { id: string, type: any }) => {
    if (settings.debug) {
      console.info(`mui-status: 🆗 Updated type for id: [${id}] to: [${type}]`);
    }
    setStatus((status: StatusObject[]) => status.map((lo: StatusObject) => (lo.uniqueId === id
      ? { ...lo, type } as StatusObject
      : lo)));
  };

  const handleStatusConsoleTitleUpdate = ({ id, title }: { id: string, title?: string }) => {
    if (settings.debug) {
      console.info(`mui-status: 🆗 Updated console title for id: [${id}] to: [${title}]`);
    }
    setStatus((status: StatusObject[]) => status.map((lo: StatusObject) => (lo.uniqueId === id
      ? { ...lo, title } as StatusObject
      : lo)));
  };

  const handleStatusDestroy = ({ id }: { id: string }) => {
    setStatus((status: StatusObject[]) => [...status.filter(lo => lo.uniqueId !== id)]);
  };

  const handleStatusKeepOpenToggle = ({ id }: { id: string }) => {
    setStatus((status: StatusObject[]) => status.map(lo => (lo.uniqueId === id ? { ...lo, keepOpen: !lo.keepOpen } : lo)));
  };

  const handleSnackbarDestroy = ({ uniqueId }: { uniqueId: string }) => {
    setSnackbar((snackbar: SnackbarObject[]) => [...snackbar.filter(lo => lo.uniqueId !== uniqueId)]);
  };

  const triggerStatusBarAnnounced = () => {
    if (!settings.statusBarAnnounced) {
      setSettings((settings: SettingsObject) => ({ ...settings, statusBarAnnounced: true }));
    }
  };

  const updateConsoleActiveId = ({ id } : { id?: string }) => {
    setSettings((settings: SettingsObject) => ({
      ...settings,
      consoleActiveId: id || undefined,
      isConsoleOpen: !!id,
    }));
  };

  const updateIsConsoleOpen = () => {
    setSettings((settings: SettingsObject) => ({
      ...settings,
      isConsoleOpen: !settings.isConsoleOpen,
      // consoleActiveId: settings.isConsoleOpen ? undefined : settings.consoleActiveId
    }));
  };
  const updateIsConsoleClosed = () => {
    setSettings((settings: SettingsObject) => ({
      ...settings,
      isConsoleOpen: false,
    }));
  };

  useEffect(() => {
    // const storedSettingsLocal = localStorage.getItem(settingsStorageKey)
    // const storedStatusLocal = localStorage.getItem(statusStorageKey)

    // if (storedSettingsLocal) setStoredSettings(JSON.parse(storedSettingsLocal))
    // if (storedStatusLocal) setStoredStatus(JSON.parse(storedStatusLocal))
  }, []);

  // useEffect(() => {
  //   if (storedStatus.length > 0) {
  //     setStatus((status: StatusObject[]) => status.map(statusItem => {
  //       const found = storedStatus.find(ss => ss.uniqueId === statusItem.uniqueId)
  //       return found ? { ...statusItem, found } : statusItem
  //     }))
  //   }
  //   if (storedSettings) {
  //     setSettings((settings: SettingsObject) => ({ ...settings, ...storedSettings }))
  //   }
  // }, [storedStatus, storedSettings])

  useEffect(() => localStorage.setItem(settingsStorageKey, JSON.stringify(settings)), [settings]);
  useEffect(() => localStorage.setItem(statusStorageKey, JSON.stringify(status.map(s => ({ ...s, children: undefined })))), [status]);

  useEffect(() => {
    setSettings((settings: SettingsObject) => ({
      ...settings,
      expand: expand || initialSettings.expand,
      position,
      justifyContent,
      hasBorder,
      size,
      variant,
      fullWidth,
      allowRightClick: allowRightClick || initialSettings.allowRightClick,
      debug: debug || initialSettings.debug,
      hasLock: valOrDefault(hasLock, initialSettings.hasLock),
    }));
  }, [allowRightClick, fullWidth, variant, hasBorder, size, justifyContent, expand, position, debug, hasLock]);

  useEffect(() => {
    if (settings.debug) {

      console.clear();
      // console.log('----------------------------------------------------------------------------');
      console.log('%c🎛️ Debugging is enabled.', 'color: #ff8888; font-weight: bold; font-size: 1.2em');
      console.time();

      // console.log('%cSettings', 'color: #4caf50');
      // console.table({ ...settings });

      // if (status.length > 0) {
      //   console.log('%cStatus', 'color: #2196f3');
      //   console.table({ ...status });
      // }

      // if (snackbar.length > 0) {
      //   console.log('%cSnackbar', 'color: #f44336');
      //   console.table({ ...snackbar });
      // }

      console.log('%cShortcuts', 'color: #ff9800', shortcuts.length);
      if (shortcuts.length > 0) {
        console.log({ ...shortcuts });
      } else {
        console.log('🫙 No shortcuts found.');
      }

      console.timeEnd();
      // console.log('=============================================================================');
    }
  }, [settings, shortcuts, snackbar, status]);

  return <DataContext.Provider
    value={{
      // settings state + crud
      settings,
      updateConsoleActiveId,
      updateIsConsoleOpen,
      updateIsConsoleClosed,

      // status - wrapper
      triggerStatusBarAnnounced,

      // keyboard
      shortcuts,
      handleKeyboardAnnouncement,
      handleKeyboardDestroy,
      // handleUpdateKeyboard,
      // handleKeyboardTriggerUpdate,
      handleCallKeyboard,

      // snackbar + crud,
      snackbar,
      handleSnackbarDestroy,

      // status state + crud
      status,
      handleStatusVisibilityToggle,
      handleStatusKeepOpenToggle,
      handleStatusTypeUpdate,
      handleStatusConsoleTitleUpdate,
      handleStatusUpdate,
      handleStatusAnnouncement,
      handleSnackbarAnnouncement,
      handleStatusDestroy,

      logDebug,
    }}
  >
    <Wrapper {...{ children, style }} />
  </DataContext.Provider>;
};

export default DataContext;
export { IndustrialProvider };
