import React from 'react'
import { Link } from 'react-router-dom'
import { BASKET_ROUTE, CONTACTS_ROUTE, DELIVERY_ROUTE, HOME_ROUTE } from '../../utils/consts'

const MyNavber = ({style, setShowMenu}) => {
  return (
    <nav className={style}>
    <div className="container">
      <h2 onClick={()=>setShowMenu(false)}>Закрыт</h2>
      <ul>
        <li>
          <Link onClick={()=>setShowMenu(false)} to={HOME_ROUTE}>Главная</Link>
        </li>
        <li>
          <Link onClick={()=>setShowMenu(false)} to={CONTACTS_ROUTE}>Контакты</Link>
        </li>
        <li>
          <Link onClick={()=>setShowMenu(false)} to={DELIVERY_ROUTE}>Доставка</Link>
        </li>
        <li>
          <Link onClick={()=>setShowMenu(false)} to={BASKET_ROUTE}>Корзина</Link>
        </li>
      </ul>
    </div>
  </nav>
  )
}

export default MyNavber