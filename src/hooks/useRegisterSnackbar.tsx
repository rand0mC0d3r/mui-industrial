import { useContext } from 'react';
import DataProvider, { DataContextInterface } from '../Store';

export const useRegisterSnackbar = () => {
  return {
    handleSnackbarRegister: useContext(DataProvider).handleSnackbarRegister as DataContextInterface['handleSnackbarRegister'],
    handleSnackbarCleaning: useContext(DataProvider).handleSnackbarCleaning as DataContextInterface['handleSnackbarCleaning'],
  };
};
