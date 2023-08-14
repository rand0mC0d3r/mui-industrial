import { SnackbarObject } from 'index.types';
import { useContext, useEffect, useState } from 'react';
import InternalAlert from '../../Api/InternalAlert';
import DataProvider, { DataContextInterface } from '../../Store';

export default ({
  snackbarId,
} : {
  snackbarId: string,
}): JSX.Element => {
  const { snackbars } : { snackbars: SnackbarObject[] } = useContext(DataProvider) as DataContextInterface;
  const [snackbarObject, setSnackbarObject] = useState<SnackbarObject | undefined>();

  useEffect(() => {
    setSnackbarObject(snackbars.find(({ id }) => id === snackbarId));
  }, [snackbarId, snackbars]);

  return <>
    {snackbarId
    && snackbarObject
    && <InternalAlert
      autoHideDuration={snackbarObject.autoHideDuration}
      actions={snackbarObject.actions}
      severity={snackbarObject.severity}
      code={snackbarObject.code}
      id={snackbarObject.id}
      message={snackbarObject.message}
    />}
  </>;
};
