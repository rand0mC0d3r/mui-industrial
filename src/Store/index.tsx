/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import React, { createContext, useCallback, useEffect, useState } from 'react';
import {
  CommandObject, ISidebarObject, ISnackbarObject, PlacementPosition, SettingsObject,
  ShortcutObject, SidebarObject, SnackbarObject, SnackbarsInterface, StatusObject, StatusType,
} from '../index.types';
import Wrapper from '../internal/Wrapper';
import { lognPackage, logPackage } from '../utils/logger';

const domIdBase = 'mui-status';

export const composeDomId = (component: string, detail: string[]) => {
  const id = detail.join('-');
  return `${domIdBase}-${component}-${id}`;
};

export const packageName = 'mui-industrial';
const keyboardOverridesStorageKey = `${packageName}.keyboard.overrides`;
// const settingsStorageKey = 'mui-status.settings';
// const statusStorageKey = 'mui-status.status';

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



export interface DataContextInterface extends SnackbarsInterface {
  settings: SettingsObject;
  status: StatusObject[];
  sidebars: SidebarObject[];
  commands: CommandObject[];
  snackbars: SnackbarObject[];
  shortcuts: ShortcutObject[];
  updateConsoleActiveId: ({ id }: { id?: string }) => void;
  updateIsConsoleOpen: any;
  updateSidebarIndex: any;
  updateIsConsoleClosed: any;
  handleStatusUpdate: any;

  // sidebar
  handleSidebarRegister: ({ id, icon, order, additional, tooltip, title, options }: ISidebarObject) => void;

  // keyboard
  handleKeyboardRegister: ({ id, label, ascii, char, altKey, ctrlKey, metaKey, shiftKey, onTrigger, insensitive }: ShortcutObject) => void;
  handleKeyboardsRegister: ([{ id, label, ascii, char, altKey, ctrlKey, metaKey, shiftKey, onTrigger, insensitive }]: ShortcutObject[]) => void;
  handleKeyboardUpdate: (id: string, shortcutObject: ShortcutObject) => void;

  handleKeyboardTrigger: (id: string) => void;
  handleKeyboardRevert: (id: string) => void;
  handleKeyboardGetLabel: (id: string) => string | undefined;

  handleKeyboardDeRegister: (id: string) => void;
  handleKeyboardsDeRegister: (ids: string[]) => void;

  // commands
  handleCommandRegister: ({ id, shortcutId, label, onTrigger, disabled, hidden, icon, order, tooltip }: CommandObject) => void;
  handleCommandsRegister: ([{ id, shortcutId, label, onTrigger, disabled, hidden, icon, order, tooltip }]: CommandObject[]) => void;
  handleCallCommand: (id: string) => void;
  handleCommandsDeRegister: (ids: string[]) => void;
  //////////////////////

  handleStatusAnnouncement: any;
  // handleSnackbarCleaning: any;
  // handleSnackbarAnnouncements: ([{ ownId, severity, actions, source, message, code, autoHideDuration }] :
  // [{ ownId: string, actions: any, source?: string, severity: Severity, message: any, code?: string, autoHideDuration: number }]) => void;
  // handleSnackbarAnnouncement: ({ ownId, severity, actions, source, message, code, autoHideDuration } :
  // { ownId: string, actions: any, source?: string, severity: Severity, message: any, code?: string, autoHideDuration: number }) => void;


  // handleSnackbarRegister: ({ severity, actions, source, message, code, autoHideDuration = 5000 } : ISnackbarObject) => void;
  // SnackbarsInterface;

  handleStatusDestroy: any;
  // handleSnackbarDestroy: any;
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
  const [sidebars, setSidebars] = useState<SidebarObject[]>([]);
  const [status, setStatus] = useState<StatusObject[]>([]);
  const [snackbars, setSnackbars] = useState<SnackbarObject[]>([]);
  const [commands, setCommands] = useState<CommandObject[]>([]);
  const [shortcuts, setShortcuts] = useState<ShortcutObject[]>([]);
  const [settings, setSettings] = useState<SettingsObject>(initialSettings);

  const logDebug = (message: string) => {
    if (settings.debug) {
      console.log(message);
    }
  };

  const log = useCallback((...props: any) => {
    if (settings.debug) {
      logPackage(...props);
    }
  }, [settings.debug]);

  const logn = useCallback((...props: any) => {
    if (settings.debug) {
      lognPackage(...props);
    }
  }, [settings.debug]);

  const handleStatusAnnouncement = ({ id, ownId, secondary, children, options } : {
    id: string, ownId: string, secondary: boolean, children: any, options: any }) => {
    setStatus((status: StatusObject[]) => {
      const findError = status.find(sItem => sItem.uniqueId === id && sItem.ownId !== ownId);
      if (findError) {
        logDebug(`mui-status: ❌ Status entry already registered with id: [${id}] & ownId: [${ownId}], but was proposed ownId [${findError.ownId}]`);
        return status;
      }
      log('➕ Registered status', id, ownId, secondary, children, options);
      // logDebug(`mui-status: 🆗 Status entry registered with id: [${id}] & ownId: [${ownId}]`);

      return [
        ...status.filter(({ uniqueId }) => uniqueId !== id),
        {
          index: status.length,
          uniqueId: id,
          ownId,
          options,
          keepOpen: false,
          visible: true,
          secondary,
          children,
        } as StatusObject,
      ];
    });
  };

  // SIDEBAR
  const handleSidebarRegister = ({ id, icon, order, additional, tooltip, title, options }: ISidebarObject) => {
    setSidebars((sidebars: SidebarObject[]) => [
      ...sidebars.filter(sidebar => sidebar.id !== id),
      { id, icon, order, additional, tooltip, visible: true, title, options } as SidebarObject,
    ]);
  };

  //////////////////////////
  //////////////////////////
  //////////////////////////
  // SNACKBARS
  const handleSnackbarRegister = ({
    actions,
    autoHideDuration,
    code,
    id,
    message,
    severity,
    source,
  }: ISnackbarObject) => {
    setSnackbars((snackbars: SnackbarObject[]) => [
      ...snackbars.filter(snackbar => snackbar.id !== id),
      {
        actions,
        autoHideDuration,
        code,
        id: id || Math.random().toString(36).substring(7),
        message,
        open: true,
        severity,
        source,
      } as SnackbarObject,
    ]);
  };

  const handleSnackbarDelete = ({ id }: { id: string }) => {
    setSnackbars((snackbars: SnackbarObject[]) => [...snackbars.filter(sb => sb.id !== id)]);
  };

  const handleSnackbarHide = ({ id }: { id: string }) => {
    console.log('hiding', id);
    setSnackbars((snackbars: SnackbarObject[]) => [...snackbars.map(sb => sb.id !== id ? sb : { ...sb, open: false })]);
  };

  const handleSnackbarCleaning = () => {
    setSnackbars(() => []);
  };


  //////////////////////////
  //////////////////////////
  //////////////////////////
  // KEYBOARD SHORTCUTS
  function generateSignature(id?: string, label?: string, ascii?: number | null, char?: string | null): string {
    return `${id}-${label}-${ascii || 'empty'}-${char || 'empty'}`;
  }

  function generateSignatureNg(...args: any[]): string {
    return args.join('-');
  }


  const handleKeyboardRegister = ({ id, label, ascii, char, altKey, ctrlKey, metaKey, shiftKey, onTrigger, insensitive }: ShortcutObject) => {
    const s = shortcuts.find(shortcut => shortcut.id === id);
    if (s && generateSignature(s.id, s.label, s.ascii, s.char) === generateSignature(id, label, ascii, char)) return;


    let newShortcut =  {
      id, label, char, ascii,
      onTrigger,
      altKey, ctrlKey, metaKey, shiftKey,
      insensitive,
    } as ShortcutObject;

    let override;
    const possibleOverrides = localStorage.getItem(keyboardOverridesStorageKey);
    if (possibleOverrides) {
      try {
        override = JSON.parse(possibleOverrides)
          .filter((o: any) => o.id === id)
          .filter((o: any) => JSON.stringify(o.original) === JSON.stringify(newShortcut))
          .find((o: any) => o);
        if (override) {
          newShortcut = {
            ...override,
            onTrigger,
            original: newShortcut,
          };
        }
      } catch (e) {
        log('❌ Failed to parse keyboard overrides', e);
      }
    }

    setShortcuts((prevShortcuts: ShortcutObject[]) => {
      const result = [ ...prevShortcuts.filter(p => p.id !== id), newShortcut];
      log('➕ Registered keyboard', id, result);
      return result;
    });
  };

  const handleKeyboardsRegister = (shortcutObjects: ShortcutObject[]) => {
    shortcutObjects.forEach((shortcutObject: ShortcutObject) => {
      handleKeyboardRegister(shortcutObject);
    });
  };

  const handleKeyboardTrigger = (id: string) => {
    const findShortcut = shortcuts.find(shortcut => shortcut.id === id);
    if (!!findShortcut && findShortcut?.onTrigger) {
      log('💡 Triggered keyboard', findShortcut.id);
      findShortcut?.onTrigger();
    }
  };

  const handleKeyboardUpdate = (id: string, shortcutObject: ShortcutObject) => {
    setShortcuts((prevShortcuts: ShortcutObject[]) => {
      const result = [...prevShortcuts.map(p => p.id === id ? { ...shortcutObject, original:  p.original || p } : p)];
      localStorage.setItem(keyboardOverridesStorageKey, JSON.stringify(result));
      log('⚙️ Updated keyboard', id, result);
      return result;
    });
  };

  const handleKeyboardRevert = (id: string) => {
    setShortcuts((prevShortcuts: ShortcutObject[]) => {
      const result = [...prevShortcuts.map(p => (p.id === id && p.original) ? { ...p.original } : p)];
      localStorage.setItem(keyboardOverridesStorageKey, JSON.stringify(result));
      log('⚙️ Reverted keyboard to original settings', id, result);
      return result;
    });
  };

  const handleKeyboardDeRegister = (id: string) => {
    setShortcuts((prevShortcuts: ShortcutObject[]) => {
      const result = [...prevShortcuts.filter(p => p.id !== id)];
      log('➖ Destroyed keyboard', id, result);
      return result;
    });
  };

  const handleKeyboardGetLabel = (id: string) => {
    return shortcuts.find(shortcut => shortcut.id === id)?.label;
  };

  const handleKeyboardsDeRegister = (ids: string[]) => {
    setShortcuts((prevShortcuts: ShortcutObject[]) => {
      const result = [...prevShortcuts.filter(p => !ids.some(id => id === p.id))];
      log('➖ Destroyed keyboards', ids, result);
      return result;
    });
  };

  //////////////////////////
  //////////////////////////
  //////////////////////////
  // COMMAND SHORTCUTS
  const handleCommandRegister = ({ id, shortcutId, label, onTrigger, disabled, hidden, icon, order, tooltip }: CommandObject) => {
    const c = commands.find(command => command.id === id);
    if (c && generateSignatureNg(c.id, c.shortcutId, c.label, c.tooltip) === generateSignatureNg(id, shortcutId, label, tooltip)) return;

    const newCommand =  { id, label, shortcutId, onTrigger, disabled, hidden, icon, order, tooltip } satisfies CommandObject;

    setCommands((prevCommands: CommandObject[]) => {
      const result = [ ...prevCommands.filter(p => p.id !== id), newCommand];
      log('➕ Registered command', id, result);
      return result;
    });
  };

  const handleCommandsRegister = (commandObjects: CommandObject[]) => {
    commandObjects.forEach((commandObject: CommandObject) => {
      handleCommandRegister(commandObject);
    });
  };

  const handleCallCommand = (id: string) => {
    const findCommand = commands.find((command: CommandObject) => command.id === id);
    if (!!findCommand && findCommand?.onTrigger) {
      log('💡 Triggered command', findCommand.id);
      findCommand?.onTrigger();
    }
  };

  const handleCommandsDeRegister = (ids: string[]) => {
    setCommands((prevCommands: CommandObject[]) => {
      const result = [...prevCommands.filter(p => !ids.some(id => id === p.id))];
      log('➖ Destroyed commands', ids, result);
      return result;
    });
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

  // const handleSnackbarDestroy = ({ uniqueId }: { uniqueId: string }) => {
  //   setSnackbar((snackbar: SnackbarObject[]) => [...snackbar.filter(lo => lo.uniqueId !== uniqueId)]);
  // };

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

  const updateSidebarIndex = (id: string) => {
    setSettings((settings: SettingsObject) => ({
      ...settings,
      sidebarIndex: settings.sidebarIndex !== id ? id : undefined,
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

  // useEffect(() => localStorage.setItem(settingsStorageKey, JSON.stringify(settings)), [settings]);
  // useEffect(() => localStorage.setItem(statusStorageKey, JSON.stringify(status.map(s => ({ ...s, children: undefined })))), [status]);

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

  const dumpContext = useCallback((label: string, content: any[]) => {
    if (settings.debug) {
      logn(label, content.length);
      log(content.length > 0 ? [ ...content ] : 'No entries found.');
    }
  }, [settings.debug, log, logn]);

  useEffect(() => dumpContext('🗄️ Status', status), [status, dumpContext]);
  useEffect(() => dumpContext('📟 Snackbar', snackbars), [snackbars, dumpContext]);
  useEffect(() => dumpContext('🫙 Shortcuts', shortcuts), [shortcuts, dumpContext]);
  useEffect(() => dumpContext('🎯 Commands', commands), [commands, dumpContext]);
  useEffect(() => dumpContext('🎛️ Sidebar', sidebars), [sidebars, dumpContext]);

  return <DataContext.Provider
    value={{
      // settings state + crud
      settings,
      updateConsoleActiveId,
      updateIsConsoleOpen,
      updateIsConsoleClosed,
      updateSidebarIndex,

      // sidebar,
      sidebars,
      handleSidebarRegister,

      // status - wrapper
      triggerStatusBarAnnounced,

      // commands,
      commands,
      handleCommandRegister,
      handleCommandsRegister,
      handleCallCommand,
      handleCommandsDeRegister,

      // keyboard
      shortcuts,
      handleKeyboardRegister,
      handleKeyboardsRegister,
      handleKeyboardDeRegister,
      handleKeyboardsDeRegister,
      handleKeyboardUpdate,
      handleKeyboardRevert,
      handleKeyboardTrigger,
      handleKeyboardGetLabel,

      // snackbar + crud,
      snackbars,
      handleSnackbarDelete,
      handleSnackbarHide,
      handleSnackbarRegister,
      handleSnackbarCleaning,
      // handleSnackbarAnnouncement,
      // handleSnackbarDestroy,


      // status state + crud
      status,
      handleStatusVisibilityToggle,
      handleStatusKeepOpenToggle,
      handleStatusTypeUpdate,
      handleStatusConsoleTitleUpdate,
      handleStatusUpdate,
      handleStatusAnnouncement,

      handleStatusDestroy,

      logDebug,
    }}
  >
    <Wrapper {...{ children, style }} />
  </DataContext.Provider>;
};

export default DataContext;
export { IndustrialProvider };
