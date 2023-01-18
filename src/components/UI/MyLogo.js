import React from 'react';
import { Link } from 'react-router-dom';

import { HOME_ROUTE } from '../../utils/consts';
import s from './style.module.scss';

const MyLogo = () => {
  return (
    <div className={s.my_logo}>
      <Link to={HOME_ROUTE}>
        <p>НАЗВАНИЕ КОМПАНИИ</p>
      </Link>
    </div>
  )
}

export default MyLogo