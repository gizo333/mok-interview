import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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


const handleSubmit = (e) => {
    e.preventDefault();
}

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
                    <img src={TG} alt="telegram" className='tg' />
                    <img src={github} alt="telegram" className='tg' />
                    <img src={google} alt="telegram" className='tg' />
                    

                </div>
                
                <form className='login-form' onSubmit={handleSubmit}>
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
        
                    <Link className='form-btn'><button type="submit">Войти</button></Link>
                    
                    
                </form>

                <Link className='form-reg' to='/register'>
                <button className='form-reg1'>Регистрация</button>
                </Link>

                    <button className='pass-recovery'>Забыли пароль?</button>
            </div>
        </div>
     );
}

export default Login;
