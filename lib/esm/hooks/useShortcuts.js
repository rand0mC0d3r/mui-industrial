/* eslint-disable import/prefer-default-export */
import { useContext } from 'react';
import DataProvider from '../Store';
export var useShortcuts = function () {
    var shortcuts = useContext(DataProvider).shortcuts;
    return shortcuts;
};
