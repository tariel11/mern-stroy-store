import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';

import { StoreProvider } from './utils/store';
import './index.scss';
import App from './App';


export const Context = createContext(null) 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <StoreProvider>
      <App /> 
    </StoreProvider>
  </>
);