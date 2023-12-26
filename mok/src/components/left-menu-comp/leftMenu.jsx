import React from "react";
import { Link } from 'react-router-dom';
import '../../styles/leftMenu.css';

function LeftMenu({ day, onToggleCalendar }) {
    const buttonText = day ? day.toString() : "No date";

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
                    
                    <Link to='/login'>  <button className="welcome-btn">Log In</button> </Link>  
                    
                    
                    
                     </li>
                </ul>
            </div>

        </div>
    );
}

export default LeftMenu;
