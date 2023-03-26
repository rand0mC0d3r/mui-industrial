import { useContext } from 'react';
import DataProvider, { DataContextInterface } from '../Store';

export const useRegisterSnackbar = () => {
  return {
    handleSnackbarRegister: useContext(DataProvider).handleSnackbarRegister as DataContextInterface['handleSnackbarRegister'],
    handleSnackbarCleaning: useContext(DataProvider).handleSnackbarCleaning as DataContextInterface['handleSnackbarCleaning'],
    // handleKeyboardsRegister: useContext(DataProvider).handleKeyboardsRegister as DataContextInterface['handleKeyboardsRegister'],
    // handleKeyboardUpdate: useContext(DataProvider).handleKeyboardUpdate as DataContextInterface['handleKeyboardUpdate'],
    // handleKeyboardDeRegister: useContext(DataProvider).handleKeyboardDeRegister as DataContextInterface['handleKeyboardDeRegister'],
    // handleKeyboardsDeRegister: useContext(DataProvider).handleKeyboardsDeRegister as DataContextInterface['handleKeyboardsDeRegister'],
  };
};
