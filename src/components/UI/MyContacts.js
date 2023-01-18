import React from 'react';

import s from './style.module.scss';

const MyContacts = () => {
  return (
    <div className={s.my_contacts}>
      <p className="time">с 08:00 до 20:00</p>
      <a href="tel:++7(999)999-99-99" className='phone'>+7(999)999-99-99</a>
    </div>
  )
}

export default MyContacts