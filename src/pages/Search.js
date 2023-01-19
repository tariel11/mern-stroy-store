import React, {useReducer, useEffect,useContext} from 'react'

import axios from '../utils/axios';
import { Store } from '../utils/store';
import ProductList from '../components/ProductList';
import Categories from '../components/Categories';
import { dataProducts } from '../utils/data';


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
        dispatch({ type: "FETCH_SUCCESS", payload: dataProducts });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }
    };
    fetchData();
  }, [title]);

console.log(title);
  const resultProducts = products.filter( (item) => item.title === title)
console.log(resultProducts);

  return (
    <div className='page_wrap'>
      <div className="container">
        <div className="grid">
          <Categories/>
          <div className="search">
            <h1 style={{'marginBottom': '20px'}}>Результаты по поиску: {title + ' ' + resultProducts.length}</h1>
            <ProductList
              products={resultProducts}
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