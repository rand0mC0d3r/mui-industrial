import { useContext } from 'react';
import DataProvider, { DataContextInterface } from '../Store';

export const useRegisterCommand = () => {
  return {
    handleCommandsRegister: useContext(DataProvider).handleCommandsRegister as DataContextInterface['handleCommandsRegister'],
    handleCommandsDeRegister: useContext(DataProvider).handleCommandsDeRegister as DataContextInterface['handleCommandsDeRegister'],
  };
};
