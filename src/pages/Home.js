import React, {useEffect, useReducer, useState} from 'react'

import axios from '../utils/axios';
import Categories from '../components/Categories'
import ProductList from '../components/ProductList'
import s from './styles/Home.module.scss'

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, products: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const Home = () => {
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: "",
  });
  
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("/api/product");
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }
    };
    fetchData();
  }, []);

  const [showCatagory, setShowCategory] = useState(false)

  return (
    <div className='page_wrap'>
      <div className="container">
        <div className="grid">
          <Categories
            setShowCategory={setShowCategory}
          />
          <div>
            <h1 className={s.h1}>Все товары магазина: <small></small> </h1>
            <ProductList
              error={error}
              loading={loading} 
              showCatagory={showCatagory}
              products={products}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home