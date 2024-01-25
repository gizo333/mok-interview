import React, { useEffect, useRef } from 'react';
import '../../styles/infoUsers.css';

function InfoUsers({ onClose }) {
  const infoRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (infoRef.current && !infoRef.current.contains(event.target)) {
        onClose();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return ( 
    <div className='info-container' ref={infoRef}>
      {/* Ваш контент компонента InfoUsers */}
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default InfoUsers;
