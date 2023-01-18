import React from 'react'

import CategoryItem from './CategoryItem'
import { categories } from '../utils/consts'

const ResponsiveCategories = ({style, setShowCategory}) => {
  return (
    <ul className={style}>
    <h3 className='categories_title'>КАТАЛОГ ТОВАРОВ</h3>
    { categories.map(category => (
        <CategoryItem 
          key={category.key}
          category={category}
          setShowCategory={setShowCategory}
        />
      ))}
  </ul>
  )
}

export default ResponsiveCategories