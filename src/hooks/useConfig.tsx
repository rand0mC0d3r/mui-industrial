import { useContext } from 'react';
import { CommandObject, ShortcutObject } from '../index.types';
import DataProvider, { DataContextInterface } from '../Store';

export const useConfig = () => {
  const { handleKeyboardsRegister } = useContext(DataProvider) as DataContextInterface;
  const { handleCommandsRegister } = useContext(DataProvider) as DataContextInterface;
  const { handleKeyboardsDeRegister } = useContext(DataProvider) as DataContextInterface;
  const { handleCommandsDeRegister } = useContext(DataProvider) as DataContextInterface;
  return {
    config: ({ keyboards, commands } : { keyboards: ShortcutObject[], commands: CommandObject[] }) => {
      handleKeyboardsRegister(keyboards);
      handleCommandsRegister(commands);
    },
    configUnmount: ({ keyboards, commands } : { keyboards: ShortcutObject[], commands: CommandObject[] }) => {
      handleKeyboardsDeRegister(keyboards.map(({ id }) => id));
      handleCommandsDeRegister(commands.map(({ id }) => id));
    },
  };
};
