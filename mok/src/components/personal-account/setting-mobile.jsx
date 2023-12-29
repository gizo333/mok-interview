import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/setting-mobile.css'
import settingImage from '../../img/setting.svg';
import logoutImage from '../../img/logout.svg';


// ЛЕВОЕ МЕНЮ ДЛЯ МОБИЛКИ




function MobileMenu({ onSettingButtonClick }) {
    
    
    return (  
        <div className='mobile-container'>
            
            <ul className='mobile-ul'>
            <Link to=''>
          <button className='mobile-setting' onClick={onSettingButtonClick}>
            <img className='mobile-img' src={settingImage} alt="setting" />
          </button>
        </Link>
            </ul>

            <ul className='mobile-ul2'>
            <button className='mobile-logout'><img className='mobile-img' src={logoutImage} alt="" /></button>
            </ul>

        </div>
    );
}

export default MobileMenu;