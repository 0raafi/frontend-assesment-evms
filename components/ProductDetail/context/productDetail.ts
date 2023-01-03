import React from 'react';

import { IAction } from '../productReducer';

export interface IProductContext {
  store: {
    data: IProduct;
    selectedVariant: IVariant;
  };
  dispatch: React.Dispatch<IAction>;
}

const ProductContext = React.createContext({} as IProductContext);

export default ProductContext;