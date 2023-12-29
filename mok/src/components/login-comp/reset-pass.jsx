import React, { useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import eyeOpen from '../../img/eye-open.png';
import eyeClose from '../../img/eye-close.png';
import arrowLeft from '../../img/arrow-left.svg';
import '../../styles/login.css';

//Сделать ссылку для сброса пароля одноразовой 

function Reset() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const user_id = searchParams.get('user_id');

  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');
  

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };



  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:4200/reset-password/${user_id}`, { newPassword: password });
  
      if (response.status === 200) {
        setMessage('Успешно изменен, перенаправление через 5 секунд');
        setTimeout(() => {
          window.location.replace("/");
        }, 5000);
    }
    } catch (error) {
      console.error('Ошибка при восстановлении пароля:', error);
      setMessage('Произошла ошибка при восстановлении пароля');
    }
  };
  

  return (
    <div className='login-container'>
      <div className='login-head'>
        <Link className='arrow-left' to='/'>
          <img src={arrowLeft} alt='' />
        </Link>
        <h1 className='login-h1'>Восстановление пароля</h1>
        <h3 className='login-h3'>Введите новый пароль:</h3>
        {message && <p className='error-style' style={{ color: 'red' }}>{message}</p>}
        <form className='login-form' onSubmit={handleResetPassword}>
          <div className='from-group'>
            <input
              className='from-input'
              type={showPassword ? 'text' : 'password'}
              id='password'
              placeholder='Новый пароль'
              value={password}
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
          <button className='form-btn' type='submit'>
            Восстановить
          </button>
        </form>
      </div>
    </div>
  );
}

export default Reset;
