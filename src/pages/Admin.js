import React, { useEffect, useReducer } from 'react'

import axios from '../utils/axios';
import s from './styles/Admin.module.scss'

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, orders: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const Item = ({order}) => {
  const {orderItems, shippingAddress} = order
  
  return (<li className={s.li}>
            <ul>
              <h4>Товары</h4>
              {orderItems.map(item =>
                  <li key={item._id}>
                    {item.title}
                  </li>
                )}
            </ul>
            
            <ul>
             <h4>Адрес</h4>
              <li>Имя {shippingAddress.fullName}</li>
              <li>Улица {shippingAddress.address}</li>
              <li>Телефон {shippingAddress.tel}</li>
              <li>Оплата {shippingAddress.paymentMethodName}</li>
            </ul>

            <ul>
             <h4>Дата</h4>
              <li>{(order.updatedAt).slice(0,10)}</li>
              <li>{(order.updatedAt).slice(11,16)}</li>
            </ul>
         </li>)
}

const Admin = () => {

  const [{ loading, error, orders }, dispatch] = useReducer(reducer, {
    orders: [],
    loading: true,
    error: "",
  });
  
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("/api/order");
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }
    };
    fetchData();
  }, []);
  
  return (
    <div className='page_wrap'>
    <div className="container">
      <h1>Список заказов</h1>
      {
        loading 
        ?
        <div>loading</div>
        :
        error 
        ?
        <div>error</div>
        :
        <ul className={s.ul}>
          {orders.map(order => 
              <Item 
                key={order._id}
                order={order}
              />
            )
          }    
        </ul>
      }
    </div>
  </div>
  )
}

export default Admin