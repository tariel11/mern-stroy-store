import React  from 'react';
import { Route, Routes} from 'react-router-dom'

import Auth from '../pages/Auth';
import Basket from '../pages/Basket';
import Caategory from '../pages/Caategory';
import Contacts from '../pages/Contacts';
import Delivery from '../pages/Delivery';
import FullProduct from '../pages/FullProduct';
import Home from '../pages/Home';
import Orders from '../pages/Orders';
import Search from '../pages/Search';
import { ADDRESS_ROUTE, BASKET_ROUTE, CATEGORY_ROUTE, CONTACTS_ROUTE, DELIVERY_ROUTE, HOME_ROUTE, LOGIN_ROUTE, ORDERS_ROUTE, PLACEORDER_ROUTE, PRODUCT_ROUTE, REGISTRATION_ROUTE, SEARCH_ROUTE } from '../utils/consts';

const AppRoutes = () => {

  return (
    <>
    <Routes>    
      <Route path={HOME_ROUTE} element={<Home />} />
      <Route path={DELIVERY_ROUTE} element={<Delivery />} />
      <Route path={CONTACTS_ROUTE} element={<Contacts />} />
      <Route path={BASKET_ROUTE} element={<Basket />} />
      <Route path={ADDRESS_ROUTE} element={<Basket />} />
      <Route path={PLACEORDER_ROUTE} element={<Basket />} />
      <Route path={PRODUCT_ROUTE + '/:id'} element={<FullProduct />} />
      <Route path={CATEGORY_ROUTE} element={<Caategory />} />
      <Route path={SEARCH_ROUTE} element={<Search />} />
      <Route path={SEARCH_ROUTE} element={<Search />} />
      <Route path={LOGIN_ROUTE} element={<Auth />} />
      <Route path={REGISTRATION_ROUTE} element={<Auth />} />
      <Route path={ORDERS_ROUTE  + '/:id'} element={<Orders />} />
      <Route path="*" element={<Home />} />
    </Routes>
 </>
  )
}

export default AppRoutes