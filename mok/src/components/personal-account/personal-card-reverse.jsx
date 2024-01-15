import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import django from '../../img/django.svg'
import node from '../../img/nodejs.svg'
import js from '../../img/js.svg'
import back from '../../img/back.svg'
import avatar from '../../img/user-avatar.svg'
import '../../styles/presonal-card-reverse.css'
import InDev from '../INdevelopment/dev';

// переделать дизайн карточки 
// улучшить адаптив
// Сделать карусель для изображений

function PersonalCardReverse({ onProfileButtonClick }) {
    const handleBackButtonClick = () => {
        // Вызовите функцию обратного вызова при нажатии на кнопку "Back"
        onProfileButtonClick();
      };

    
    return ( 
        <div className='card-container-reserve-wrapper' >
            
        <div className='card-container-reserve'>
        <InDev / >
        

            <div className='card-info'>
            
                <img className='card-photo' src={avatar} alt="" />
            
            <ul className='card-info-ul'>
                <li className='card-info-li'>Василий Иванов</li>
                <li className='card-info-li'> Python Разрабочтик</li>
                <li className='card-info-li'>Обо мне andae quas quasdeleniti?</li>
            </ul>
            </div>

            <div className='btn-wrapper'>
            <button  className='profile-btn' onClick={handleBackButtonClick} ><img className='img-back' src={back} alt="" /></button>
            </div>

    </div>


                <div className='stack-wrapper'>
                <div className='card-stack'>
                    <ul className='card-stack-ul'>
                        <li className='card-stack-li'><img className='card-img' src={django} alt="" /></li>
                        <li className='card-stack-li'><img className='card-img' src={node} alt="" /></li>
                        <li className='card-stack-li'><img className='card-img' src={django} alt="" /></li>
                        <li className='card-stack-li'><img className='card-img' src={js} alt="" /></li>
                        <li className='card-stack-li'><img className='card-img' src={js} alt="" /></li>
                        <li className='card-stack-li'><img className='card-img' src={js} alt="" /></li>
                    </ul>

                </div>
                </div>


    </div>
     );
}

export default PersonalCardReverse;