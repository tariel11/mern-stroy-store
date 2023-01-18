import React  from 'react'
import { useLocation } from 'react-router-dom';

import BasketList from '../components/BasketList';
import Address from '../components/Address'
import Categories from '../components/Categories';
import { ADDRESS_ROUTE, BASKET_ROUTE, PLACEORDER_ROUTE } from '../utils/consts';

import s from './styles/Basket.module.scss'
import Placeorder from '../components/Placeorder';

const Basket = () => {
  const location = useLocation()
  const url = location.pathname

  return (
    <div className='page_wrap'>
      <div className="container">
        <div className="grid grid_basket">
          <Categories/>

          <div className={s.basket}>
            <h1 className={s.title}>
              <span className={s.text}>Корзина</span>
              <span  className={url === ADDRESS_ROUTE  ? s.text : url === PLACEORDER_ROUTE ? s.text : '' }>Адресс</span>
              <span className={url === PLACEORDER_ROUTE ? s.text : undefined}>Заказ</span>
            </h1>
            {
            url === BASKET_ROUTE
            ? 
            <BasketList/>
            :
            url === ADDRESS_ROUTE
            ?
            <Address/>
            :
            <Placeorder/>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Basket