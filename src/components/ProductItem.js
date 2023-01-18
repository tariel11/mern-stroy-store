import React, {useContext, useState} from 'react'
import { Link } from 'react-router-dom'

import { Store } from '../utils/store';
import s from './styles/ProductItem.module.scss'

const ProductItem = ({product}) => {

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart: { cartItems }, } = state;

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
    <div className={s.product}>
      <div className={s.img}>
       <Link to={`/product/${product._id}`}> <img src={product.img} alt={product.title} /></Link>
      </div>
      <div className={s.info} >
        <p className={s.title}>
          <Link to={`/product/${product.title}`}>{product.title}</Link>
        </p>
        <p className={s.price}>{product.price} <small>p</small> </p>
        <button className={add ? s.btn_success : s.btn} onClick={() => addToCartHandler(product)} >{add ? 'Добавлена' :'В корзину'}</button>
        <button className={s.btn}>Купить сразу</button>
      </div>
    </div>
  )
}

export default ProductItem