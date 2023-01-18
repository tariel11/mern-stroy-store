import React, {useReducer, useEffect,useContext} from 'react'

import axios from '../utils/axios';
import { Store } from '../utils/store';
import ProductList from '../components/ProductList';
import Categories from '../components/Categories';

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

const Search = () => {
  const { state } = useContext(Store);

  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: "",
  });

  let title = state.searchValue
  
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
          const result = await axios.get("/api/product",  {params: {title}});
          dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }
    };
    fetchData();
  }, [title]);

  return (
    <div className='page_wrap'>
      <div className="container">
        <div className="grid">
          <Categories/>
          <div className="search">
            <h1 style={{'marginBottom': '20px'}}>Результаты по поиску: {title + ' ' + products.length}</h1>
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

export default Search