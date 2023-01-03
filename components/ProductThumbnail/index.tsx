import React, { useState } from 'react';
import Link from 'next/link';

import { currency } from '../../core/utils';

import style from './style.module.scss';

export interface ProductThumbnailProps {
  record: IProduct;
}

function ProductThumbnail(props: ProductThumbnailProps) {
  const { record } = props || {};
  const [selectedVariant, setSelectedVariant] = useState<IVariant>(record.variants[0]);

  return (
    <div className={style['product-thumb']}>
      <div className={style['thumb-img']}>
        <img
          src={selectedVariant.pictures[0]}
          alt={selectedVariant.attribute_value}
          srcSet={selectedVariant.pictures[0]}
        />
      </div>
      <div className={style['thumb-swatch-wrapper']}>
        {
          (record.variants || []).map((variant) => (
            <button
              onClick={() => setSelectedVariant(variant)}
              onMouseOver={() => setSelectedVariant(variant)}
              key={`variant-${variant.attribute_value}`}
              className={`${style['thumb-swatch']} ${selectedVariant.id === variant.id ? style['swatch-active'] : ''}`}
              style={{ backgroundColor: variant.color_code }}
            />
          ))
        }
      </div>
      <Link href={`/${record.id}`}>
        <h2 className={style['thumb-name']}>{record.name}</h2>
        <div className={style['thumb-price']}>
          <span className={style['price-display']}>
            {currency('id-ID', record.price, { style: 'currency', currency: 'IDR' })}
          </span>
        </div>
      </Link>
      <div className={style['thumb-category']}>
        {record.category_name}
      </div>
    </div>
  );
}

export default ProductThumbnail;