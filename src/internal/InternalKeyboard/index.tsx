import { useCallback, useContext, useEffect } from 'react';
import { ShortcutObject } from '../../index.types';
import DataProvider, { DataContextInterface } from '../../Store';

export default (): JSX.Element => {
  const { shortcuts } : { shortcuts: ShortcutObject[] } = useContext(DataProvider) as DataContextInterface;
  const { handleKeyboardTrigger } : { handleKeyboardTrigger: DataContextInterface['handleKeyboardTrigger'] } = useContext(DataProvider) as DataContextInterface;

  const handleUserKeyPress = useCallback(event => {
    const { keyCode, shiftKey, metaKey, ctrlKey, altKey } = event;

    const result = shortcuts
      .find(({ ascii, char }) => ascii === keyCode || char === (keyCode === 32 ? 'Space' : String.fromCharCode(keyCode)));

    if (!result || !result?.onTrigger) return;

    if (!!result?.altKey && !altKey) return;
    if (!!result?.ctrlKey && !ctrlKey) return;
    if (!!result?.metaKey && !metaKey) return;
    if (!!result?.shiftKey && !shiftKey) return;

    handleKeyboardTrigger(result.id);
  }, [shortcuts, handleKeyboardTrigger]);

  useEffect(() => {
    window.addEventListener('keydown', handleUserKeyPress);
    return () => window.removeEventListener('keydown', handleUserKeyPress);
  }, [handleUserKeyPress]);

  return <></>;
};
