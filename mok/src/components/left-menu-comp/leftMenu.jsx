import React from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import settingImage from '../../img/setting.svg';
import users from '../../img/users-svg.svg';
import news from '../../img/news.svg';
import telegram from '../../img/telegram-left.svg';
import '../../styles/leftMenu.css';



function LeftMenu({ day, onToggleCalendar, onToggleUsers}) {
    const buttonText = day ? day.toString() : "No date";
    const token = Cookies.get('token');

    const handleButtonClick = () => {
      if (onToggleCalendar) {
        onToggleCalendar();
      }
     
    };

    const handleButtonClickUsers = () => {
        if (onToggleUsers) {
            onToggleUsers();
        }
       
      };




    

    return (
        <div className="lm-container">

            <div className='cont'>
            
            <ul className="lm-ul">
                <li className="lm-li">
                    <button className="lm-btn-day" onClick={handleButtonClick}>{buttonText}</button>
                </li>
              
            </ul>

            <div className="menu-left">
            <img className="menu-polzovateli" src={news} alt="" title="Новости" />
            <img className="menu-polzovateli" onClick={handleButtonClickUsers} src={users} alt="" title="Пользователи"  />
            <img className="menu-polzovateli" src={telegram} alt="" title="Канал в телеграм"  />
            </div>
           
            <div className="welcome-container">
                <ul className="welcome-ul">
                    <li className="welcome-li"> 
                    {token ? (
                        <Link to='/setting'>
                            <img className="setting-img" src={settingImage} alt="Authenticated" />
                            </Link>
                        ) : (
                            <Link to='/login'>
                                <button className="welcome-btn">Log In</button>
                            </Link>
                        )}
                     </li>
                </ul>
            </div>
            </div>
        </div>
    );
}

export default LeftMenu;
