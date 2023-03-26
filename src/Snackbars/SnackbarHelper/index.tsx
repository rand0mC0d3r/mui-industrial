/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useState } from 'react';
import { SnackbarObject } from '../../index.types';
import InternalAlert from '../../internal/InternalAlert';
import DataProvider, { DataContextInterface } from '../../Store';


export default ({
  snackbarId,
} : {
  snackbarId: string,
}): JSX.Element => {
  const { snackbar } : { snackbar: SnackbarObject[] } = useContext(DataProvider) as DataContextInterface;
  const [snackbarObject, setSnackbarObject] = useState<SnackbarObject | undefined>();

  useEffect(() => {
    setSnackbarObject(snackbar.find(({ id }) => id === snackbarId));
  }, [snackbarId, snackbar]);

  return <>
    {snackbarId
    && snackbarObject
    && <InternalAlert
      severity={snackbarObject.severity}
      code={snackbarObject.code}
      id={snackbarObject.id}
      message={snackbarObject.message}
    />}
  </>;
};
