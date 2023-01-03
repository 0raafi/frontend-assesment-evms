import { useContext } from 'react';

import LocalDataContext, { ILocalDataContext } from '../core/context/localData';

const useLocalData = (): ILocalDataContext => useContext(LocalDataContext);

export default useLocalData;