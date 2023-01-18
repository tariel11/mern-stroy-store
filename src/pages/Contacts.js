import React from 'react'

import Categories from '../components/Categories'
import './styles/Contacts.scss'

const Contacts = () => {
  return (
    <div className='page_wrap'>
      <div className="container">
      <div className="grid">
          <Categories/>
          <div className="contacts-wrap">
            <h1 className='contacts-title'>Связь с администрацией</h1>
            <div className="contacts-form">
              <h2 className='form-title'>Форма связи</h2>
              <form action="#">
                <label htmlFor="name">Представьтесь, пожалуйста: *</label>
                <input id='name' type="text" placeholder='Представьтесь, пожалуйста' required/>
                <label htmlFor="email">Электронная почта: *</label>
                <input id='email' type="text" placeholder='Электронная почта' required/>
                <label htmlFor="tel">Телефон:</label>
                <input id='tel' type="text" placeholder='Телефон:'/>
                <label htmlFor="text" >Текст сообщения: *</label>
                <input id='text' type="text" placeholder='Текст сообщения' required/>
                <label htmlFor="file">Прикрепить файл:</label>
                <input id='file' type="file" />
                <p></p>
                <button className='btn'>Отправить</button>
              </form>
            </div>
            <div className="contacts-info">
              <h2 className="info-title">Наши контакты</h2>
              <div className="contacts-info">
              <div className="contacts-info-item">
                <span className='info-title'>Режим работы</span>
                <p>с 08:00 до 20:00</p>
              </div>
              <div className="contacts-info-item">
                <span className='info-title'>Телефон</span>
                <p>+7 (999)-999-99-99</p>
              </div>
              <ul className='contacts-icons'>
              <li><a href="https://wa.me/4957777777" target="_blank" rel="noreferrer" ><img width={25} height={25} src="img/whatsapp.png" alt="whatsapp" /></a></li>
                <li><a href="https://telegram.me/jack_malbon" target="_blank" rel="noreferrer" ><img width={25} height={25} src="img/telegram.png" alt="telegram" /></a></li>
                <li><a href="mailto:mail@example.com" target="_blank" rel="noreferrer" ><img width={25} height={25} src="img/gmail.png" alt="gmail" /></a></li>
              </ul>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts