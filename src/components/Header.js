import React from 'react'

import s from './styles/Header.module.scss'
import MyContacts from './UI/MyContacts'
import MyHeaderIcons from './UI/MyHeaderIcons'
import MyHeaderResponsive from './UI/MyHeaderResponsive'
import MyLogo from './UI/MyLogo'
import MyNavber from './UI/MyNavber'
import MySearch from './UI/MySearch'


const Header = () => {

  return (
    <header>
      <div className={s.header_wrap}>
        <div className="container" >
          <div className={s.header}>
            <MyLogo/>
            <MySearch style={s.my_search}/>
            <MyContacts/>
            <MyHeaderIcons/>
          </div>
        </div>
      </div>
      <MyNavber style={s.my_nav}/>
      <MyHeaderResponsive/>
    </header>
  )
}

export default Header