import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser, faShoppingBasket} from '@fortawesome/free-solid-svg-icons'

import s from './style.module.scss';
import { Store } from '../../utils/store';
import { BASKET_ROUTE, LOGIN_ROUTE, PERSONAL_ROUTE } from '../../utils/consts';

const MyHeaderIcons = () => {
  const {state } = useContext(Store);
  const {cart: {cartItems}, userInfo} = state
  
  return (
    <div className={s.my_icons}>
      <Link to={!userInfo ? LOGIN_ROUTE : PERSONAL_ROUTE}>  
        <FontAwesomeIcon icon={faUser} />
        <p>{userInfo ? userInfo.name : 'Войти'}</p>
      </Link>

      <Link to={BASKET_ROUTE} className='basket_icon'>
      <FontAwesomeIcon icon={faShoppingBasket} />
        {cartItems.length > 0 && 
        (
          <span>{cartItems.reduce((a, c) => a + c.quantity, 0) }</span>
        )
        }
          <p>Корзина</p>
      </Link>
    </div>
  )
}

export default MyHeaderIcons