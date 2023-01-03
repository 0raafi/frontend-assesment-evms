import { useContext } from 'react';

import ProductContext from './context/productDetail';

import style from './style.module.scss';


function VariantSelection() {
  const { store: { data, selectedVariant }, dispatch } = useContext(ProductContext);

  return (
    <div className={style['pd-variant-selection']}>
      <fieldset className={style['swatch-wrapper']}>
        <legend>
          <span className={style['attribute-label']}>{data.attribute_type}: </span>
          <span className={style['attribute-value']}>{selectedVariant.attribute_value}</span>
        </legend>
        <div className={style['radio-group-variant']}>
          {
            (data.variants || []).map((variant) => (
              <label
                key={variant.id}
                className={style['radio-variant']}
                onClick={() => dispatch({ type: 'update', name: 'selectedVariant', value: variant })}
              >
                <input type="radio" className={style['radio']} />
                <div className={`${style['img-select-wrapper']} ${selectedVariant.id === variant.id ? style['select-active'] : ''}`}>
                  <img src={variant.pictures[0]} srcSet={variant.pictures[0]} alt={variant.attribute_value} />
                </div>
              </label>
            ))
          }
        </div>
      </fieldset>
    </div>
  );
}

export default VariantSelection;