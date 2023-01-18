import React from 'react'

import ProductItem from './ProductItem';
import s from './styles/ProductList.module.scss'

const ProductList = ({products, loading, error}) => {
  
  return (
    <div className={s.product_list}>
    { loading 
    ?
    <div>loading</div>
    :
    error 
    ?
    <div>error</div>
    :
    products.map((product, i) => {
      return <ProductItem
              key={i}
              product={product}
            />
    })}
   </div>
  )
}

export default ProductList