import React, { useContext } from 'react';

import ProductContext from './context/productDetail';
import ProductImagesBlock from '../ProductImagesBlock';

import style from './style.module.scss';

function ProductImages() {
  const { store: { data, selectedVariant } } = useContext(ProductContext);
  const images = [...selectedVariant.pictures, ...data.pictures];

  return (
    <div className={style['pd-imgs-wrapper']}>
      <ProductImagesBlock images={images} />
    </div>
  );
}

export default ProductImages;