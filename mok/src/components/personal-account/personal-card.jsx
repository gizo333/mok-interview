import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/personal-card.css'

//адаптировать под мобильные устройства лучше
//кнопку {просмотреть профиль}, пересмотреть верстку

function PersonalCard() {
    return ( 
        <div className='card-container'>
            <div className='card-photo'>
                <img src="" alt="" />
            </div>

            <div className='card-name-age'>
                <p className='name'>Василий</p>
                <p className='last-name'>Иванов:</p>
                <p className='age'>35 лет</p>
            </div> 
            <div className='card-profile'>
            <Link className='profile'>  <button className='profile-btn'>Просмотреть профиль</button> </Link>
            </div>
            <div className='card-email'>
                <p className='email'>sobaka@mail.com</p>
            </div>

            

        </div>
     );
}

export default PersonalCard;