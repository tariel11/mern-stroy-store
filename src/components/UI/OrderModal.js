import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { HOME_ROUTE } from '../../utils/consts'
import s from './style.module.scss'

const OrderModal = () => {
  const navigate = useNavigate()

  return (
    <div className={s.modal} onClick={()=> navigate(HOME_ROUTE)}>
      <div className={s.box}>
        <h1>Ваш заказ успешно оформлен</h1>
        <p>в течении минуты с вами свяжется ваш кассир</p>
        <Link to={HOME_ROUTE}>ВЕРНУТСЯ В ГЛАВНОЕ</Link>
      </div>
    </div>
  )
}

export default OrderModal