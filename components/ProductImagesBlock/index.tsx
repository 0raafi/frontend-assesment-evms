import React, { useEffect, useRef, useState } from 'react';

import useResponsive from '../../hooks/useResponsive';

import style from './style.module.scss';

export interface ProductImagesBlockProps {
  images: string[];
}

function ProductImagesBlock(props: ProductImagesBlockProps) {
  const { images } = props || {};

  const mainRef: any = useRef(null);
  const altThumbsRef: any = useRef(null);
  const [currentThumb, setcurrentThumb] = useState(0);
  const responsive = useResponsive();

  function handleOnClickThumb(i: number) {
    setcurrentThumb(i);
    mainRef.current.scrollLeft = mainRef.current.clientWidth * i;
  }

  function handleOnClickArrow(type: 'prev' | 'next') {
    if (responsive.isTablet) {
      altThumbsRef.current.scrollLeft = type === 'prev' ? 0 : altThumbsRef.current.clientWidth;

      return;
    }

    altThumbsRef.current.scrollTop = type === 'prev' ? 0 : altThumbsRef.current.clientHeight;
  }

  useEffect(() => {
    handleOnClickThumb(0);

  }, [images]);

  return (
    <div className={style['pd-imgs-block']}>
      <div className={style['pd-main']} ref={mainRef}>
        <div className={style['pd-main-imgs']}>
          {(images || []).map((img, i) => (
            <div key={`main-images-${i}`} className={style['pd-main-img']}>
              <img src={img} srcSet={img} />
            </div>
          ))}
        </div>
      </div>
      {
        !responsive.isMobile && (
          <>
            <div className={style['pd-alt-thumbs']} ref={altThumbsRef}>
              <div className={style['alt-thumbs']}>
                {(images || []).map((img, i) => (
                  <div
                    key={`alt-thumb-${i}`}
                    onClick={() => handleOnClickThumb(i)}
                    className={`${style['pd-thumb']} ${currentThumb === i ? style['active'] : ''}`}
                  >
                    <img src={img} srcSet={img} />
                  </div>
                ))}
              </div>
            </div>
            <div className={style['pd-arrow-prev']} onClick={() => handleOnClickArrow('prev')} />
            <div className={style['pd-arrow-next']} onClick={() => handleOnClickArrow('next')} />
          </>
        )
      }
      {
        responsive.isMobile && (
          <div className={style['mobile-alt-dots']}>
            {(images || []).map((_, i) => (
              <div
                onClick={() => handleOnClickThumb(i)}
                key={`alt-dot-${i}`}
                className={`${style['alt-dot']} ${currentThumb === i ? style['active'] : ''}`}
              />
            ))}
          </div>
        )
      }
    </div>
  );
}

export default ProductImagesBlock;