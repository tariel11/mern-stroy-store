import React, {useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom';

import { Store } from '../utils/store';
import s from './styles/CategoryItem.module.scss'

const CategoryItem = ({category, setShowCategory}) => {
  const navigate = useNavigate()
  const { dispatch: ctxDispatch } = useContext(Store);

  const [bool, setBool] = useState(false)
  const setHideOrShow = bool => { bool ? setBool(false) : setBool(true) }

  const selectCategory = (i)=>{
    ctxDispatch({ type: 'SELECT_CATEGORY', payload: i })
    setShowCategory(false)
    navigate('/category')
  }

  return (
  <li className={s.item}>
    <button className={s.itle} onClick={()=>setHideOrShow(bool)}  >{category.title}</button>
    <span className='span'>⬇️</span>
    <ul className={bool ? s.ul_show : s.ul_hide}>
      {category.items.map((item, i) => {
       return  <li className={s.li} key={i}>
        <p onClick={()=> selectCategory(item)} >{item}</p>
       </li>
      })}
    </ul>
  </li>
  )
}

export default CategoryItem