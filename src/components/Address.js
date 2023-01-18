import React, { useContext, useState } from 'react'
import ReactInputMask from 'react-input-mask'
import { useNavigate } from 'react-router-dom'

import { PLACEORDER_ROUTE } from '../utils/consts'
import { Store } from '../utils/store'
import s from './styles/Address.module.scss'

const Address = () => { 
  const navigate = useNavigate()

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart: { shippingAddress },} = state;

  const [name, setName] = useState(shippingAddress.name || '');
  const [address, setAddress] = useState(shippingAddress.address || '');
  const [tel, setTel] = useState(shippingAddress.tel || '');
  const [comment, setComment] = useState(shippingAddress.comment || '');
  const [paymentMethodName, setPaymentMethod] = useState(shippingAddress.paymentMethod || 'Наличными' );

  const payFunc = (i) => {
    i === 1 && setPaymentMethod('Наличными')
    i === 2 && setPaymentMethod('Картой')
    console.log(paymentMethodName);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    ctxDispatch({
      type: 'SAVE_SHIPPING_ADDRESS',
      payload: {
        name,
        address,
        tel,
        comment
      },
    });
    localStorage.setItem(
      'shippingAddress',
      JSON.stringify({
        name,
        address,
        tel,
        comment
      })
    );
    navigate(PLACEORDER_ROUTE)
  };

  return (
    <form className={s.form} onSubmit={submitHandler}>
      <h3>Введите данные для оформление заказа</h3>
      <label htmlFor="name">Ваше имя *</label>
      <input
       name='name' 
       type="text" 
       placeholder='Иван'
       required 
       value={name}
       onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="address">Точный адрес <small>(улица)</small> *</label>
      <input 
        name='address' 
        type="text" 
        placeholder='Улица Первый дом 1, кв 12'
        required 
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <label htmlFor="tel">Телефон номер <small>(вам позвонять наши продавцы для подтверждение заказа)</small> *</label>

      <ReactInputMask 
        name='tel' 
        mask="+7\ (999) 999 99 99" 
        maskChar={null} 
        placeholder='+7 (999)-999-99-99' 
        required 
        value={tel}
        onChange={(e) => setTel(e.target.value)}
      />

      <label htmlFor="comment">Доп. комментарии</label>
      <input 
        name='comment' 
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
       />

      <div className={s.payment}>
        <p>Способ оплаты</p>
        <b onClick={()=> payFunc(1)} >Наличными</b>
        <b onClick={()=> payFunc(2)} >Онлайн картой</b>
      </div>

      <button type='submit'>
        Продолжить
      </button>
    </form>
  )
}

export default Address