import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/setting.css'
import arrowLeft from '../../img/arrow-left.svg'
import PersonalSetting from './personal-setting';
import { useState } from 'react';



function Setting() {
    const [selectBtn, setSelectBtn] = useState('');

    const handleBtn = (btnLabel) =>{
        setSelectBtn(btnLabel);
    }

    return ( 
        <div className='setting-head'>
           <p className='personal-name-page'>{selectBtn}</p>

               
            <div className='setting-container'>
                
            <Link className='arrow' to='/'>  <img  src={arrowLeft} alt="" />
                </Link>
                <div className='setting-wrapper'>
                    
                   
                <ul className='setting-acc-ul'>
                <p className='setting-p'>Настройки пользователя</p>
                
                    <li className='setting-acc-li'>
                        
                        <Link  ><button className='setting-btn' onClick={() => handleBtn('Аккаунт')}>Аккаунт</button></Link>
                        
                      
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
                    <hr className='line' />
                    
                    
                </ul>
                <button className='setting-logout'>Log Out</button>
                </div>
            </div>
            {selectBtn === 'Аккаунт' && <PersonalSetting selectBtn={selectBtn} />}
</div>
     );
}

export default Setting;