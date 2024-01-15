import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/setting.css'
import arrowLeft from '../../img/arrow-left.svg'
import PersonalSetting from './personal-setting';
import { useState } from 'react';
import MobileMenu from './setting-mobile';
import SettingList from './setting-menu-list';
// главное меню ЛК

//меню сделать стики!
//все кнопки в данной директории засунуть в redux
//сделать плавную анимацию для открытия и закрытия меню

function Setting() {
    const [selectBtn, setSelectBtn] = useState('Аккаунт');
    const [isSettingListVisible, setIsSettingListVisible] = useState(false);
  
    const handleBtn = (btnLabel) => {
      setSelectBtn(btnLabel);
      setIsSettingListVisible(false); 
    };
  
    const toggleSettingList = () => {
        setIsSettingListVisible((prevState) => !prevState);
        if (!isSettingListVisible) {
          setSelectBtn('');
        }
      };
      
      
    

    return ( 
        <div className='setting-head'>
         <MobileMenu onSettingButtonClick={toggleSettingList} />
        {isSettingListVisible && <SettingList hideSettingList={() => setIsSettingListVisible(false)} onSettingButtonClick={handleBtn} />}
           <p className='personal-name-page'>{selectBtn}</p>

               
            <div className='setting-container'>
                
            <Link className='arrow' to='/'>  <img  src={arrowLeft} alt="" />
                </Link>
                <div className='setting-wrapper'>
                    
                   
                <ul className='setting-acc-ul'>
                <p className='setting-p'>Настройки пользователя</p>
                
                    <li className='setting-acc-li'>
                        
                        <Link  ><button className={`setting-btn${selectBtn === 'Аккаунт' ? ' active' : ''}`} onClick={() => handleBtn('Аккаунт')}>Аккаунт</button></Link>
                        
                      
                    </li>
                    <hr className='line' />
                    <p className='setting-pr'>Настройки приложения</p>
                    
                    <li className='setting-acc-li'>
                    
                     <Link> <button className='setting-btn'onClick={() => handleBtn('Основные')}>Основные</button> </Link> 
                    </li>
                    <li className='setting-acc-li'>
                    <Link> <button className='setting-btn'onClick={() => handleBtn('Внешний вид')}>Внешний вид </button> </Link> 
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