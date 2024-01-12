import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import eyeOpen from '../../img/eye-open.png'
import eyeClose from '../../img/eye-close.png'
import '../../styles/login.css';
import arrowLeft from '../../img/arrow-left.svg'



function Register() {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [repeatPassword, setRepeatPassword] = useState('');
const [showPassword, setShowPassword] = useState(false);
const [message, setMessage] = useState('');

const isValidEmail = (email) => {
  // Регулярное выражение для проверки формата email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const handleSubmitReg = async (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setMessage('Введите корректный адрес электронной почты');
      return;
    }

    if (password !== repeatPassword) {
        setMessage('Пароли не совпадают');
      return;
    }

    try {
      const response = await axios.post('http://127.0.0.1:4201/reg/register', {
        email: email,
        password: password,
      });
  
      const token = response.data;
      if (token) {
        const expirationTimeInHours = 24;
        Cookies.set('token', token, { expires: expirationTimeInHours / 24 });
        window.location.replace("/");
      }

    setEmail('');
    setPassword('');
    setRepeatPassword('');
    setShowPassword(false);
    setMessage('');

  } catch (error) {
    console.error("Ошибка", error);
    if (error.response && error.response.data) {
      alert(error.response.data.detail);
    } else {
      alert("Произошла неизвестная ошибка.");
    }
}
};
  

const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };


    return ( 
        <div className='login-container'>
            <div className='login-head'>
            <Link  className='arrow-left' to='/login'><img src={arrowLeft} alt="" /></Link>
                <h1 className='login-h1'>Регистрация</h1>

                {message && <p className='error-message' style={{ color: 'red' }}>{message}</p>}
                
                
                <form className='login-form' onSubmit={handleSubmitReg}>
                    <div className='from-group'>
                        <input className='from-input' type="text"
                        placeholder='Email'
                        value={email}
                        autoComplete='email'
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
                    <div className='from-group'>
                        <br />
                        <input
                        className='from-input'
                        type={showPassword ? 'text' : 'password'}
                        value={repeatPassword}
                        placeholder='Повторите пароль'
                        autoComplete='current-password'
                        onChange={(e) => setRepeatPassword(e.target.value)}
                        />
                        <img
                        src={showPassword ? eyeOpen : eyeClose}
                        alt='eye'
                        className='input-img'
                        onClick={handleTogglePassword}
                        />
                    </div>

                    <button className='form-btn'>Зарегистрироваться</button>
                    
                </form>
            </div>
        </div>
     );
}

export default Register;
