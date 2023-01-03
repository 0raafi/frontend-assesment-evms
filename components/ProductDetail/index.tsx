import { useMemo, useReducer } from 'react';

import { currency } from '../../core/utils';
import ProductContext from './context/productDetail';
import ProductImages from './ProductImages';
import productReducer from './productReducer';
import style from './style.module.scss';
import VariantSelection from './VariantSelection';

export interface ProductDetailProps {
  record: IProduct;
}

function ProductDetail(props: ProductDetailProps) {
  const { record } = props || {};
  const [store, dispatch] = useReducer(productReducer, { data: record, selectedVariant: record.variants[0] });
  const contextValue = useMemo(() => ({ store, dispatch }), [store, dispatch]);

  return (
    <ProductContext.Provider value={contextValue}>
      <div className={style['pd-wrapper']}>
        <div className={style['pd-mobile-header']}>
          <h1 className={style['pd-name']}>{record.name}</h1>
          <h5 className={style['pd-category']}>{record.category_name}</h5>
        </div>
        <ProductImages />
        <div className={style['pd-info-wrapper']}>
          <div className={style['pd-desktop-header']}>
            <h1 className={style['pd-name']}>{record.name}</h1>
            <h5 className={style['pd-category']}>{record.category_name}</h5>
          </div>
          <div className={style['pd-price']}>
            {currency('id-ID', record.price, { style: 'currency', currency: 'IDR' })}
          </div>
          <VariantSelection />
        </div>
      </div>
    </ProductContext.Provider>
  );
}

export default ProductDetail;