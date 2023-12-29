import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/personal-setting.css'
import PersonalCard from './personal-card';



function PersonalSetting() {
    return ( 
       
        <div className='personal-container'>
            <PersonalCard />
            <div className='personal-name'>
                <div className='personal-form-wrapper'>
                    <form className='personal-form' >
                    <p className='info'>ФИО:</p>
                        <label for="username">Имя:</label>
                        <br />
                        <input className='username' type="text" id='username' name='username' />

                        <label for="lastname">Фамилия:</label>
                        <br />
                        <input className='last-name' type="text" id='lastname' name='lastname' />

                        <label for="otchest">Отчество:</label>
                        <br />
                        <input className='last-name' type="text" id='otchest' name='otchest' />
                        <div className='personal-btn-wrapper'>
                        <Link className='personal-save'> <button className='personal-save-btn'>Сохранить</button> </Link>
                        </div>
                        </form>
                </div>
            </div>

            <div className='personal-name'>
                <div className='personal-form-wrapper'>
                    <form className='personal-form' >
                        <p className='info'>Дата рождения:</p>
                        <label for="day">День:</label>
                        <br />
                        <input className='username' type="text" id='day' name='day' />

                        <label for="month">Месяц:</label>
                        <br />
                        <input className='last-name' type="text" id='month' name='month' />

                        <label for="year">Год:</label>
                        <br />
                        <input className='last-name' type="text" id='year' name='year' />

                        <div className='personal-btn-wrapper'>
                        <Link className='personal-save'> <button className='personal-save-btn'>Сохранить</button> </Link>
                        </div>
                        </form>
                </div>
            </div>


            <div className='personal-name'>
                <div className='personal-form-wrapper'>
                    <form className='personal-form' >
                    <p className='info'>Контакты:</p>
                        <label for="email">Email:</label>
                        <br />
                        <input className='username' type="text" id='email' name='email' />

                        <label for="telegram">Telegram:</label>
                        <br />
                        <input className='last-name' type="text" id='telegram' name='telegram' />

                        <label for="github">GitHub:</label>
                        <br />
                        <input className='last-name' type="text" id='github' name='github' />

                        <div className='personal-btn-wrapper'>
                        <Link className='personal-save'> <button className='personal-save-btn'>Сохранить</button> </Link>
                        </div>
                        </form>
                </div>
            </div>


        </div>
     );
}

export default PersonalSetting;