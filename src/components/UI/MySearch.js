import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Store } from '../../utils/store';

const MySearch = ({style}) => {
  const navigate = useNavigate()
  const { dispatch: ctxDispatch} = useContext(Store);

  const [search, setSearc] = useState('')

  const searchSubmit = (e) => {
    e.preventDefault();
    ctxDispatch({ type: 'ADD_SEARCH', payload: search })
    navigate('/search')
  }
  
  return (
    <div className={style} >
      <form onSubmit={searchSubmit}>
        <input 
          type="search"
          plaseholder="search"
          value={search}
          onChange={e => setSearc(e.target.value)}
          />
        <button type="submit" value="search" >
          Найти
        </button>
        </form>
    </div>
  )
}

export default MySearch