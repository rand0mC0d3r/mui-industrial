import { useContext } from 'react';
import { CommandObject, ShortcutObject } from '../index.types';
import DataProvider, { DataContextInterface } from '../Store';
import { logPackage } from '../utils/logger';

export const useConfig = () => {
  const { handleKeyboardsRegister } = useContext(DataProvider) as DataContextInterface;
  const { handleCommandsRegister } = useContext(DataProvider) as DataContextInterface;
  const { handleKeyboardsDeRegister } = useContext(DataProvider) as DataContextInterface;
  const { handleCommandsDeRegister } = useContext(DataProvider) as DataContextInterface;
  return {
    config: ({ keyboards, commands } : { keyboards?: unknown[], commands?: unknown[] }) => {
      try {
        if (keyboards && keyboards?.length > 0) { handleKeyboardsRegister(keyboards as ShortcutObject[]); }
        if (commands && commands?.length > 0) { handleCommandsRegister(commands as CommandObject[]); }
      } catch (error) {
        logPackage(error);
      }
    },
    configUnmount: ({ keyboards, commands } : { keyboards?: unknown[], commands?: unknown[] }) => {
      try {
        if (keyboards && keyboards?.length > 0) { handleKeyboardsDeRegister((keyboards as ShortcutObject[]).map(({ id }) => id)); }
        if (commands && commands?.length > 0) { handleCommandsDeRegister((commands as CommandObject[]).map(({ id }) => id)); }
      } catch (error) {
        logPackage(error);
      }
    },
  };
};
