import { useContext } from 'react';
import DataProvider from '../Store';
export var useRegisterCommand = function () {
    return {
        handleCommandsRegister: useContext(DataProvider).handleCommandsRegister,
        handleCommandsDeRegister: useContext(DataProvider).handleCommandsDeRegister,
    };
};
