import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import eyeOpen from '../../img/eye-open.png'
import eyeClose from '../../img/eye-close.png'
import TG from '../../img/tg.png'
import google from '../../img/google.png'
import github from '../../img/github.png'
import arrowLeft from '../../img/arrow-left.svg'
import '../../styles/login.css';

function Login() {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [showPassword, setShowPassword] = useState(false);
const [message, setMessage] = useState('');


const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await axios.post('http://127.0.0.1:4199/auth/login', {
        email,
        password,
      });

      console.log('Response from server:', response);
  
      const data = response.data;
  
      if (response.status === 222) {
         const expiresInMinutes = 120;
        Cookies.set('token', data.token, { expires: new Date(Date.now() + expiresInMinutes * 60 * 1000) });
      
        window.location.replace("/");
      }
       
    } catch (error) {
      if (error.response && error.response.status === 421) {
        setMessage('Неверный email или пароль!');
      }
    }
  };
  

const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };


    return ( 
        <div className='login-container'>
            <div className='login-head'>
                <Link className='arrow-left' to='/'>  <img  src={arrowLeft} alt="" />
                </Link>
                <h1 className='login-h1'>Вход В личный кабинет</h1>
                <h3 className='login-h3'>Войти через:</h3>
                
                <div className='login-group'>
                    
                    <img src={TG} alt="telegram" className='tg'/>
                    <img src={github} alt="telegram" className='tg' />
                    <img src={google} alt="telegram" className='tg' />
                   
                </div>
                {message && <p className='error-style' style={{ color: 'red' }}>{message}</p>}
                <form className='login-form' onSubmit={handleSubmit}>
                    <div className='from-group'>
                        <input className='from-input' type="text"
                        placeholder='Email'
                        value={email}
                        autoComplete='Email'
                        onChange={(e) => setEmail(e.target.value)
                          }
                        />
                   
                    </div>
                    <div className='from-group'>
                        <br />
                        <input
                        className='from-input'
                        type={showPassword ? 'text' : 'password'}
                        id='password'
                        value={password}
                        placeholder='Пароль'
                        autoComplete='password'
                        onChange={(e) => setPassword(e.target.value)}
                        />
                        <img
                        src={showPassword ? eyeOpen : eyeClose}
                        alt='eye'
                        className='input-img'
                        onClick={handleTogglePassword}
                        />
                        
                    
                    </div>
        
                <button className='form-btn' type="submit">Войти</button>
                    
                    
                </form>

                <Link className='form-reg' to='/register'>
                <button className='form-reg1'>Регистрация</button>
                </Link>

                   <Link className='pass-recovery' to='/recoverypass'> <button >Забыли пароль?</button> </Link>
            </div>
        </div>
     );
}

export default Login;
