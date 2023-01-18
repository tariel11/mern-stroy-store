import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRemove, faMinus, faPlus} from '@fortawesome/free-solid-svg-icons'

import s from './styles/BasketProductItem.module.scss'

const BasketProductItem = ({product, updateCartHandler, removeItemHandler}) => {
  
 return (
    <div className={s.product}>
      <FontAwesomeIcon icon={faRemove} className={s.remove} onClick={()=> removeItemHandler(product)}/>
      <div className={s.img}>
       <Link to={`/product/` + product._id}  > <img src={product.img} alt={product.title} /></Link>
      </div>
      <div className={s.info} >
        <p className={s.title}>
          <Link  to={`/product/` + product._id} >{product.title}</Link>
        </p>
        <p className={s.price}>Цена за 1 шт/кг: <b>{product.price} <small>p</small></b> </p>
        <div className={s.amount}>
          <span onClick={()=> product.quantity > 1 && updateCartHandler(product, product.quantity - 1)} className={s.counter}><FontAwesomeIcon icon={faMinus}/></span>
          <span className={s.amount}>{product.quantity}</span>
          <span onClick={()=> updateCartHandler(product, product.quantity + 1)} className={s.counter}><FontAwesomeIcon icon={faPlus}/></span>
        </div>
        <p className={s.summ}> Сумма: <b>{product.price * product.quantity} <small>p</small></b> </p>
      </div>
    </div>
  )
}

export default BasketProductItem