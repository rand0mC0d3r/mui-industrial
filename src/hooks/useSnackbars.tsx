import { useContext } from 'react';
import { SnackbarObject } from '../index.types';
import DataProvider, { DataContextInterface } from '../Store';

export const useSnackbars = () => {
  const { snackbar } : { snackbar: SnackbarObject[] } = useContext(DataProvider) as DataContextInterface;
  return snackbar;
};
