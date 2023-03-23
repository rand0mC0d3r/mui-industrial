import { useContext } from 'react';
import DataProvider, { DataContextInterface } from '../Store';

export const useRegisterShortcut = () => {
  const handleKeyboardRegister = useContext(DataProvider).handleKeyboardRegister as DataContextInterface['handleKeyboardRegister'];
  const handleKeyboardsRegister = useContext(DataProvider).handleKeyboardsRegister as DataContextInterface['handleKeyboardsRegister'];
  const handleKeyboardDeRegister = useContext(DataProvider).handleKeyboardDeRegister as DataContextInterface['handleKeyboardDeRegister'];
  const handleKeyboardsDeRegister = useContext(DataProvider).handleKeyboardsDeRegister as DataContextInterface['handleKeyboardsDeRegister'];

  return {
    handleKeyboardRegister,
    handleKeyboardsRegister,
    handleKeyboardDeRegister,
    handleKeyboardsDeRegister,
  };
};
