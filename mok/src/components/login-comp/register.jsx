import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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


const handleSubmitReg = (e) => {
    e.preventDefault();

    if (password !== repeatPassword) {
        setMessage('Пароли не совпадают');
      return;
    }
    setEmail('');
    setPassword('');
    setRepeatPassword('');
    setShowPassword(false);
    setMessage('');
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
                        onChange={(e) => setRepeatPassword(e.target.value)}
                        />
                        <img
                        src={showPassword ? eyeOpen : eyeClose}
                        alt='eye'
                        className='input-img'
                        onClick={handleTogglePassword}
                        />
                    </div>

                    <Link className='form-btn'><button  tabIndex={0}>Зарегистрироваться</button></Link>
                    
                </form>
            </div>
        </div>
     );
}

export default Register;
