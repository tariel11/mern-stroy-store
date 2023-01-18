import React, { useContext, useEffect, useReducer } from 'react'

import axios from '../utils/axios';
import Categories from '../components/Categories'
import ProductList from '../components/ProductList'
import { Store } from '../utils/store';

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


const Caategory = () => {
  const { state } = useContext(Store);

  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: "",
  });

  let category = (state.selectCategory)

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
          const result = await axios.get("/api/product", {params: {category}});
          dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }
    };
    fetchData();
  }, [category]);

  return (
    <div className='page_wrap'>
    <div className="container">
      <div className="grid">
        <Categories/>
        <div>
          <h1>Товары по категории: {category}: <small>{products.length}</small> </h1>
          <ProductList
          products={products}
          loading={loading}
          error={error}
          />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Caategory