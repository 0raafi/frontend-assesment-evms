import Link from 'next/link';
import React from 'react';

import useLocalData from '../../hooks/useLocalData';

import style from './style.module.scss';

function Header() {
  const { store } = useLocalData();
  const { header } = store || {};
  const { title, titleLink, subtitle } = header || {};

  return (
    <div className={style['header-wrapper']}>
      <div className={style['breadcrumbs-wrap']}>
        <Link className={`${style['breadcrumb-link']} ${!subtitle ? style['title'] : ''}`} href={titleLink || '#'}>{title}</Link>
        {
          subtitle && (
            <>
              <span className={style['breadcrumb-divider']}>/</span>
              <h1 className={style['breadcrumb-h1']}>{subtitle}</h1>
            </>
          )
        }
      </div>
    </div>
  );
}

export default Header;