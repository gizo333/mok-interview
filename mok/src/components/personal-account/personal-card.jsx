import React from 'react';
import '../../styles/personal-card.css'
import avatar from '../../img/user-avatar.svg'
import InDev from '../INdevelopment/dev';

//адаптировать под мобильные устройства лучше
//кнопку {просмотреть профиль}, пересмотреть верстку

function PersonalCard({ onProfileButtonClick }) {


    return ( 
        <div className='card-container'>
           
            <div className='card-info'>
                
             
            <img className='card-photo' src={avatar} alt="" />
        
        <ul className='card-info-ul'>
            <li className='card-info-li'>Василий Иванов</li>
            <li className='card-info-li'> Telegram: @Artmkhl</li>
            <li className='card-info-li'> GitHb: Click</li>
        </ul>
            </div>
            <div className='btn-wrapper'>
            <button className='profile-btn' onClick={onProfileButtonClick}>Просмотреть профиль</button>
            </div>
            </div>

     );
}

export default PersonalCard;