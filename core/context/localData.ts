
import React from 'react';

import { IAction } from '../reducers/localData';

export interface ILocalDataContext {
  store: {
    [key: string]: any;
  };
  dispatch: React.Dispatch<IAction>;
}

const LocalDataContext = React.createContext({} as ILocalDataContext);

export default LocalDataContext;