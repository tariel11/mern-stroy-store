
import React, { useContext, useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from '../utils/axios';

import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import { Store } from '../utils/store';
import './styles/Auth.scss'

const Auth = () => {
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE;

  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('') 

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      if(isLogin){
        const { data } = await axios.post('/api/user/login', {
          email,
          password,
        });
        ctxDispatch({ type: 'USER_SIGNIN', payload: data });
        localStorage.setItem('userInfo', JSON.stringify(data));
        navigate( '/');
      } else {
        const { data } = await axios.post('/api/user/registration', {
          name,
          email,
          password,
        });
        ctxDispatch({ type: 'USER_SIGNIN', payload: data });
        localStorage.setItem('userInfo', JSON.stringify(data));
        navigate( '/');
      }
    } catch (err) {
      console.log('errrorr');
      console.log(err)
    }
  };

  useEffect(() => {
    if(userInfo){
      navigate('/')
    }
  }, );

  return (
    <div className='page_wrap'>
      <div className="container">
        <div className="auth">
          <h2>{isLogin ? 'Login' : 'Register'}</h2>
          <form onSubmit={submitHandler}>
            {!isLogin ?
             <input 
              type="text" 
              placeholder='name...' 
              required
              value={name}
              onChange={e => setName(e.target.value)}
              />
            :
            ""}
              <input 
            type="email" 
            placeholder='email...' 
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            />
            <input 
              type="password" 
              placeholder='password...' 
              required
              value={password}
              onChange={e => setPassword (e.target.value)}
              />
            <div className="auth_btns">
              <div className="login_wrap">
                {isLogin ? 
                <div className="register_wrap">
                  not account? <Link to={REGISTRATION_ROUTE}>registrarion</Link>
                </div> 
                :
                <div className="register_wrap">
                  es account? <Link to={LOGIN_ROUTE}>login</Link>
                </div> 
                }
                <button type='submit' className='btn'>{isLogin ? 'login' : 'register'}</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
};

export default Auth