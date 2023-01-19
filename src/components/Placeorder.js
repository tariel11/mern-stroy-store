import React, { useContext, useReducer, useState } from 'react'
import { Link } from 'react-router-dom';

import axios from '../utils/axios';
import { ADDRESS_ROUTE, BASKET_ROUTE  } from '../utils/consts';
import { Store } from '../utils/store';
import OrderModal from './UI/OrderModal';
import s from './styles/Placeorder.module.scss'

const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_REQUEST':
      return { ...state, loading: true };
    case 'CREATE_SUCCESS':
      return { ...state, loading: false };
    case 'CREATE_FAIL':
      return { ...state, loading: false };
    default:
      return state;
  }
};

const Placeorder = () => {
  const [modal, setModal] = useState(false)

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart: {cartItems, shippingAddress} } = state;
  
  let totalSum = cartItems.reduce((a, c) => a + c.price * c.quantity, 0)
  let deliveryPrice = 1000

  const [ dispatch] = useReducer(reducer);

  const placeOrderHandler = async () => {
    try {
      dispatch({ type: 'CREATE_REQUEST' });

      await axios.post(
        '/api/order',
        {
          orderItems: cartItems,
          shippingAddress: shippingAddress,
          itemsPrice: totalSum,
          deliveryPrice,
          totalPrice: totalSum + deliveryPrice,
        },
      );
      ctxDispatch({ type: 'CART_CLEAR' });
      dispatch({ type: 'CREATE_SUCCESS' });
      localStorage.removeItem('cartItems');
      setModal(true)
    } catch (err) {
      dispatch({ type: 'CREATE_FAIL' });
      console.log(err);
    }
  };

  return (
    <div className={s.placeorder}>
      <ul className={s.items}>
        {cartItems.map((product, i) => 
          <li className={s.item} key={i}>
            <div className={s.img} >
              <img src={product.img} alt={product.title} />
            </div>
            <p className={s.title}>{product.title}</p>
            <p>Цена: <b>{product.price}</b> </p>
            <p>Количество: <b>{product.quantity}</b> </p>
            <p>Сумма: <b>{product.quantity * product.price}</b> </p>
          </li>
          )}
         <Link to={BASKET_ROUTE}>Изменить список</Link>
      </ul>
      <div className={s.info}>
        <ul className={s.address}>
          <h2>Данные</h2>
          <li>Имя: {shippingAddress.name}</li>
          <li>Улицв: {shippingAddress.address}</li>
          <li>Телефон: {shippingAddress.tel}</li>
          <li>Комментарий: {shippingAddress.comment}</li> 
          <li>Оплата: {shippingAddress.paymentMethodName}</li>
          <li>Сумма {totalSum} рублей</li>
          <Link to={ADDRESS_ROUTE}>Изменить Адрес</Link>
        </ul>
        <button 
          className={s.order} 
          onClick={placeOrderHandler}
        >
            Оформить
          </button>
      </div>
      {modal && <OrderModal/>}
    </div>
  )
}

export default Placeorder