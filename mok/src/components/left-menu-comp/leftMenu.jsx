import React from "react";
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import settingImage from '../../img/setting.svg';
import '../../styles/leftMenu.css';

function LeftMenu({ day, onToggleCalendar}) {
    const buttonText = day ? day.toString() : "No date";
    const token = Cookies.get('token');

    const handleButtonClick = () => {
      if (onToggleCalendar) {
        onToggleCalendar();
      }
    };

    return (
       
        <div className="lm-container">
            
            <ul className="lm-ul">
                <li className="lm-li">
                    <button className="lm-btn-day" onClick={handleButtonClick}>{buttonText}</button>
                </li>
                <li></li>
                <li></li>
            </ul>

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
    
    );
}

export default LeftMenu;
