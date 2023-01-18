import React, { useEffect, useReducer } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import axios from '../utils/axios'
import Categories from '../components/Categories'
import s from './styles/Orders.module.scss'

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, order: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const Orders = () => {
  const navigate = useNavigate()
  const {id} = useParams()

  const [ dispatch] = useReducer(reducer);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get(`/api/order/${id}`);
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }
    };
    fetchData();
  }, );
  
  return (
    <div className='page_wrap'>
      <div className="container">
        <div className="grid">
          <Categories/>
          <div className={s.placeorder}>
            <ul className={s.items}>
            {/* {order.orderItems.map(product => 
               <li className={s.item} key={product._id}>
                <div className={s.img} >
                  <img src={product.img} alt={product.title} />
                </div>
                <p className={s.title}>{product.title }</p>
                <p>Цена: <b>{product.price}</b> </p>
                <p>Количество: <b>{product.quantity}</b> </p>
                <p>Сумма: <b>{product.price * product.quantity}</b> </p>
              </li>
              )} */}
            </ul>
            <div className={s.info}>
              <ul className={s.address}>
                <h2>Данные</h2>
                {/* <li>Имя: {  name}</li>
                <li>Улицв: { address }</li>
                <li>Телефон: { tel }</li>
                <li>Комментарий: { comment }</li> 
                <li>Оплата: { }</li>
                <li>Сумма { totalPrice } рублей</li> */}
              </ul>
              <button 
                className={s.order} 
                onClick={()=> navigate('/')}
              >
                  Вернуться в магазин
                </button>
            </div>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default Orders