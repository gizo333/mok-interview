import React from 'react';
import { CSSTransition } from 'react-transition-group';
import '../../styles/siteUsers.css';



  function SiteUsers({ isVisible }) {
    return isVisible ? (
      <CSSTransition in={isVisible} timeout={300} classNames="calendar" unmountOnExit>
        <div className='usr-container'>
          
        </div>
      </CSSTransition>
    ) : null;
  }
  
  export default SiteUsers;