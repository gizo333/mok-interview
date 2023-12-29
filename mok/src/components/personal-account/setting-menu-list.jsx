import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import arrowLeft from '../../img/arrow-left.svg'
import '../../styles/setting-menu-list.css'



function SettingList({ hideSettingList }) {
    const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(true);

    const handleBtn = () => {
        setIsMobileMenuVisible(false);
        hideSettingList(); // Вызывайте функцию hideSettingList, чтобы скрыть SettingList в родительском компоненте
      };



    return ( 
        <div className={`mobile-menu ${isMobileMenuVisible ? 'visible' : ''}`}>
                
            <Link className='arrow' to='/'>  <img  src={arrowLeft} alt="" />
                </Link>
                <div className='mobile-wrapper'>
                    
                   
                <ul className='setting-acc-ul'>
                <p className='setting-p'>Настройки пользователя</p>
                
                    <li className='setting-acc-li'>
                        
                        <Link  ><button className='setting-btn' onClick={() => { handleBtn(); }}>Аккаунт</button></Link>
                        
                      
                    </li>
                    <hr className='line' />
                    <p className='setting-pr'>Настройки приложения</p>
                    <li className='setting-acc-li'>
                     <Link> <button className='setting-btn'onClick={() => handleBtn('Основные')}>Основные</button> </Link> 
                    </li>
                    <li className='setting-acc-li'>
                    <Link> <button className='setting-btn'onClick={() => handleBtn('Внешний вид')}>Внешний вид</button> </Link> 
                    </li>
                    <hr className='line' />
                    <li className='setting-acc-li'>
                    <Link> <button className='setting-btn'onClick={() => handleBtn('Скачать приложение')}>Скачать приложение</button> </Link> 
                    </li>
                    <hr className='line' />
                    <li className='setting-acc-li'>
                    <Link> <button className='setting-btn'onClick={() => handleBtn('Что нового')}>Что нового</button> </Link> 
                    </li>
                    <li className='setting-acc-li'>
                    <Link> <button className='setting-btn'onClick={() => handleBtn('Оставить отзыв')}>Оставить отзыв</button> </Link> 
                    </li>
                    
                    
                </ul>
                </div>
            </div>
    );
}

export default SettingList;
