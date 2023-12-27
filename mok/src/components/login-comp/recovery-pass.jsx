import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import arrowLeft from '../../img/arrow-left.svg';
import '../../styles/login.css';

function Recovery() {
  const [email, setEmail] = useState('');

  const recoverySubmit = async (e) => {
    e.preventDefault();

    try {
      // Отправляем запрос к серверу для восстановления пароля
      await axios.post('http://localhost:4200/send-email', { email });
      alert('Письмо для сброса пароля отправлено на ваш email.');
    } catch (error) {
      console.error('Ошибка восстановления пароля:', error.response?.data?.message || 'Произошла ошибка');
    }
  };

  return (
    <div className='login-container'>
      <div className='login-head'>
        <Link className='arrow-left' to='/'>
          <img src={arrowLeft} alt='' />
        </Link>
        <h1 className='login-h1'>Восстановление пароля</h1>
        <h3 className='login-h3'>Введите ваш email:</h3>
        <form className='login-form' onSubmit={recoverySubmit}>
          <div className='from-group'>
            <input
              className='from-input'
              type='text'
              placeholder='Email'
              value={email}
              autoComplete='Email'
              onChange={(e) => setEmail(e.target.value)}
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

export default Recovery;
