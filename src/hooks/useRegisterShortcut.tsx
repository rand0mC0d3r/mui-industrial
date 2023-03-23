import { useContext } from 'react';
import DataProvider, { DataContextInterface } from '../Store';

export const useRegisterShortcut = () => {
  return {
    handleKeyboardRegister: useContext(DataProvider).handleKeyboardRegister as DataContextInterface['handleKeyboardRegister'],
    handleKeyboardsRegister: useContext(DataProvider).handleKeyboardsRegister as DataContextInterface['handleKeyboardsRegister'],
    handleKeyboardDeRegister: useContext(DataProvider).handleKeyboardDeRegister as DataContextInterface['handleKeyboardDeRegister'],
    handleKeyboardsDeRegister: useContext(DataProvider).handleKeyboardsDeRegister as DataContextInterface['handleKeyboardsDeRegister'],
  };
};
