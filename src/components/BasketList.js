import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { ADDRESS_ROUTE, HOME_ROUTE } from '../utils/consts'
import { Store } from '../utils/store'
import BasketProductItem from './BasketProductItem'
import s from './styles/BasketList.module.scss'

const BasketList = () => {
  const navigate = useNavigate()

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart: {cartItems},} = state;

  let totalSum = cartItems.reduce((a, c) => a + c.price * c.quantity, 0)

  const updateCartHandler = async (item, quantity) => {
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity },
    });
  };

  const removeItemHandler = (item) => {
    ctxDispatch({ type: 'CART_REMOVE_ITEM', payload: item });
  };

  return (
    <div className={s.basket}>
      <Link to={HOME_ROUTE} className={s.add}>Добавить товар</Link>
      {cartItems.length > 0 && <div className="list">
        {cartItems.map(product => 
              <BasketProductItem
                key={product._id}
                product={product}
                updateCartHandler={updateCartHandler}
                removeItemHandler={removeItemHandler}
              />)}
        <div className={s.info}>
          <p>
            <span>
              Общая сумма ({cartItems.reduce((a, c) => a + c.quantity, 0)}{' '}
              товара) : {' '}
            </span>
            <span>
              {totalSum} рублей
            </span>   
          </p>
          <button onClick={()=>navigate(ADDRESS_ROUTE)}>Заказать</button>
        </div>
      </div>}
    </div>
  )
}

export default BasketList