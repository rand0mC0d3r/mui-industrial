import { useContext } from 'react';
import { SnackbarObject } from '../index.types';
import DataProvider, { DataContextInterface } from '../Store';

export const useSnackbars = () => {
  return {
    handleSnackbarRegister: useContext(DataProvider).handleSnackbarRegister as DataContextInterface['handleSnackbarRegister'],
    handleSnackbarCleaning: useContext(DataProvider).handleSnackbarCleaning as DataContextInterface['handleSnackbarCleaning'],
    snackbars: useContext(DataProvider).snackbars as SnackbarObject[],
  };
};
