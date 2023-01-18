import React from 'react'
import { Link } from 'react-router-dom'

import './styles/Footer.scss'

const Footer = () => {
  return (
    <footer>
    <div className="container">
     <div className="footer">
     <div className="footer_contacts">
        <h3 className="title">Контакты</h3>
        <div className="footer-info">
          <div className="footer-info-item">
            <p className='info-title'>Режим работы</p>
            <span>с 08:00 до 20:00</span>
          </div>
          <div className="footer-info-item">
            <p className='info-title'>Телефон</p>
            <a href='tel:+7 (999)-999-99-99'>+7 (999)-999-99-99</a>
          </div>
          <ul className='footer_icons'>
            <li className='li'><a href="https://wa.me/4957777777" target="_blank" rel="noreferrer" ><img width={25} height={25} src="img/whatsapp.png" alt="whatsapp" /></a></li>
            <li className='li'><a href="https://telegram.me/jack_malbon" target="_blank" rel="noreferrer" ><img width={25} height={25} src="img/telegram.png" alt="telegram" /></a></li>
            <li className='li'><a href="mailto:mail@example.com" target="_blank" rel="noreferrer" ><img width={25} height={25} src="img/gmail.png" alt="gmail" /></a></li>
          </ul>
        </div>
      </div>
      <div className="footer_menu">
        <h3 className="title">Меню</h3>
        <ul>
          <li className='li'>
            <Link to={'/'}>Главная</Link>
          </li>
          <li className='li'>
            <Link to={'/delivery'}>Доставка</Link>
          </li>
          <li className='li'>
            <Link to={'/catalog'}>Каталог</Link>
          </li>
        </ul>
      </div>
      <div className="footer_personal">
       <h3 className="title">Мой кабинет</h3>
       <ul>
          <li>
            <Link to={'/basket'}>Корзина</Link>
          </li>
          <li>
            <Link to={'/'}>История покупок</Link>
          </li>
          <li>
            <Link to={'/'}>Избранные</Link>
          </li>
          <li>
            <Link to={'/'}>Выход</Link>
          </li>
        </ul>
      </div>
      <div className="footer_form">
        <h3 className="title">Обратный звонок</h3>
        <form action="#">
          <input className='input' type="text" placeholder='Ваше имя'/>
          <input className='input' type="text" placeholder='Ввш номер телефона'/>
          <p className='p'>Нажимая на кнопку Отправить, Вы соглашаетесь с
          <a href='google.com' className='a'> правилами обработки данных</a>
          </p>
          <button className='button'>Отправить</button>
        </form>
      </div>
     </div>
    </div>
  </footer>
  )
}

export default Footer