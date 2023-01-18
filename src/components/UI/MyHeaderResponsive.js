import React, {useState} from 'react'

import ResponsiveCategories from '../ResponsiveCategories'
import MyNavber from './MyNavber'
import MySearch from './MySearch'
import s from './style.module.scss'


const MyHeaderResponsive = () => {
  const [showCatagory, setShowCategory] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  const clickCategory = bool => { bool ? setShowCategory(false) : setShowCategory(true)}
  const clickMenu = bool => { bool ? setShowMenu(false) : setShowMenu(true)}

  return (
    <div className={s.header_responsive_wrap}>
      <div className="container">
        <div className={s.header_responsive}>
          <div className={s.btn} onClick={() => clickCategory(showCatagory)}>
            <p>Категории</p>
          </div>
          <MySearch 
            style={s.my_search}
          />
          <div className={s.btn} onClick={() => clickMenu(showMenu)}>
            <p>Меню</p>
          </div>
        </div>
      </div>
      {<MyNavber setShowMenu={setShowMenu} style={showMenu ? s.navbar_show  : s.navbar_hide} /> }
      {<ResponsiveCategories setShowCategory={setShowCategory} style={showCatagory ? s.categories_show : s.categories_hide}/>}
    </div>
  )
}

export default MyHeaderResponsive