import React, { useContext, useEffect, useReducer, useState } from 'react'
import { useParams } from 'react-router-dom' 

import axios from '../utils/axios';
import Categories from '../components/Categories'  
import { Store } from '../utils/store';
import s from './styles/FullProduct.module.scss'

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, product: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const FullProduct = () => {
  const {id} = useParams()

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {  cart: { cartItems }} = state;

  const [{ loading, error, product }, dispatch] = useReducer(reducer, {
    product: {},
    loading: true,
    error: "",
  });
  
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get(`/api/product/${id}`);
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }
    };
    fetchData();
  }, );

  const [add, setAdd] = useState(false)

  const addToCartHandler = async (item) => {
    const existItem = cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    setAdd(true)
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity },
    });
  };

 return (
  <div className='page_wrap'>
    <div className="container">
      <div className="grid">
        <Categories/>
        {
          loading 
          ?
          <div>loading</div>
          :
          error 
          ?
          <div>error</div>
          :
          <div className={s.product}>
            <h1 className={s.title}>{product.title}</h1>
            <div className={s.box}>
              <div className={s.img}>
                <img src={product.img} alt={product.title} />
              </div>
              <div className={s.info} >
                <p className={s.price}>Цена за 1 шт/кг: <b>{product.price} <small>p</small></b> </p>
                {/* <div className={s.amount}>
                  <span onClick={()=> updateCartHandler(product, product.quantity - 1)} className={s.counter}><FontAwesomeIcon icon={faMinus}/></span>
                  <span className={s.amount}>{product.quantity || 1}</span>
                  <span onClick={()=> updateCartHandler(product, product.quantity + 1)} className={s.counter}><FontAwesomeIcon icon={faPlus}/></span>
                  </div> */}
                <div className={s.btns}>
                <button className={add ? s.btn_succes :s.btn} onClick={() => addToCartHandler(product)}>{add ? 'Добавлено' : 'В корзину'}</button>
                  <button className={s.btn}>Купить сразу</button>
                </div>
              </div>
            </div>
            <div className={s.description}>
              <h3>Описание</h3>
              <p>{product.description || 'У товара не добавлено описание'}</p>
            </div>
          </div>
        }
      </div>
    </div>
  </div>
  )
}

export default FullProduct