import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/setting.css'
import arrowLeft from '../../img/arrow-left.svg'



function Setting() {
    return ( 
        <div className='setting-head'>

               
            <div className='setting-container'>
            <Link className='arrow' to='/'>  <img  src={arrowLeft} alt="" />
                </Link>
                <div className='setting-wrapper'>
                    
                   
                <ul className='setting-acc-ul'>
                <p className='setting-p'>Настройки пользователя</p>
                
                    <li className='setting-acc-li'>
                      <Link>  <button> Аккаунт </button></Link>
                    </li>
                    <hr className='line' />
                    <p className='setting-pr'>Настройки приложения</p>
                    <li className='setting-acc-li'>
                        Основные
                    </li>
                    <li className='setting-acc-li'>
                        Внешний вид
                    </li>
                    <hr className='line' />
                    <li className='setting-acc-li'>
                        Скачать приложение
                    </li>
                    <hr className='line' />
                    <li className='setting-acc-li'>
                        Что нового
                    </li>
                    <li className='setting-acc-li'>
                        Оставить фидбэк
                    </li>
                    <hr className='line' />
                    
                    
                </ul>
                <button className='setting-logout'>Log Out</button>
                </div>
            </div>

</div>
     );
}

export default Setting;