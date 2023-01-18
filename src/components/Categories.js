import React, {useState} from 'react'

import CategoryItem from './CategoryItem'
import { categories } from '../utils/consts'
import s from './styles/Categories.module.scss'

const Categories = () => {

  const [showCatagory, setShowCategory] = useState(false)


  return (
    <ul className={s.categories}>
    <h3 className={s.h3}>КАТАЛОГ ТОВАРОВ</h3>
    { categories.map(category => (
        <CategoryItem 
          key={category.key}
          category={category}
          showCatagory={showCatagory}
          setShowCategory={setShowCategory}
        />
      ))}
  </ul>
  )
}

export default Categories