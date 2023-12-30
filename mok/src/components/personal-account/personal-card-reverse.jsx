import React from 'react';
// import { Link } from 'react-router-dom';

import { Carousel } from 'react-bootstrap';
import django from '../../img/django.svg'
import node from '../../img/nodejs.svg'
import js from '../../img/js.svg'
import avatar from '../../img/user-avatar.svg'
import '../../styles/presonal-card-reverse.css'

// переделать дизайн карточки
// сделать адаптив
// возможно передать отображение профиля?

function PersonalCardReverse() {
    return ( 
        <div className='card-container-reserve-wrapper' >
        <div className='card-container-reserve'>

        

            <div className='card-info'>
            
                <img className='card-photo' src={avatar} alt="" />
            
            <ul className='card-info-ul'>
                <li className='card-info-li'>Василий Иванов</li>
                <li className='card-info-li'> Python Разрабочтик</li>
                <li className='card-info-li'>Обо мне Lorem  elit. Fugiat esse aperiam repudiandae quas quasi vero est quaerat delectus ab. Dolorem amet nesciunt fugiat ipsa, neque accusamus ex ducimus nostrum deleniti?</li>
            </ul>
            </div>

                

    </div>
    <div className='stack-wrapper'>
                <div className='card-stack'>
                    <ul className='card-stack-ul'>
                        <li className='card-stack-li'><img className='card-img' src={django} alt="" /></li>
                        <li className='card-stack-li'><img className='card-img' src={node} alt="" /></li>
                        <li className='card-stack-li'><img className='card-img' src={js} alt="" /></li>
                        
                    </ul>

                </div>
                </div>
    </div>
     );
}

export default PersonalCardReverse;