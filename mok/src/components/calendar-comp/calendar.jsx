import React, { useState } from 'react';
import '../../styles/calendar.css';

function Calendar({ isVisible }) {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    return new Date(year, month, 0).getDate();
  };

  const generateCalendar = () => {
    const days = [];
    const totalDays = daysInMonth(currentDate);
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    const today = new Date();
  
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="empty-day" />);
    }
  
    for (let i = 1; i <= totalDays; i++) {
      const isCurrentDay = currentDate.getFullYear() === today.getFullYear() && currentDate.getMonth() === today.getMonth() && i === today.getDate();
      const dayClassName = isCurrentDay ? 'calendar-day current-day' : 'calendar-day';
  
      days.push(<div key={i} className={dayClassName}>{i}</div>);
    }
  
    return days;
  };
  

  const prevMonth = () => {
    setCurrentDate((prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate((prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1));
  };

  return (
    <div >
    <div className={`calendar ${isVisible ? '' : 'hidden'}`}>
      <div className="calendar-header">
        <button onClick={prevMonth}>&lt;</button>
        <h2 className='calendar-data'>{currentDate.toLocaleString('en-US', { month: 'long', year: 'numeric' })}</h2>
        <button onClick={nextMonth}>&gt;</button>
      </div>
      <div className="calendar-grid">
        {generateCalendar()}
      </div>
    </div>
    </div>
  );
};

export default Calendar;
