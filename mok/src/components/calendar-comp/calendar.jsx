import React, { useState } from 'react';
import '../../styles/calendar.css';

function Calendar({ isVisible, onDateClick }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  
  

  const daysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    return new Date(year, month, 0).getDate();
  };

  const getWeekNumber = (date) => {
    const startDate = new Date(date.getFullYear(), 0, 1);
    const days = Math.floor((date - startDate) / (24 * 60 * 60 * 1000));
    return Math.ceil((days + startDate.getDay() + 0) / 7);
  };

  const generateCalendar = () => {
    const days = [];
    const totalDays = daysInMonth(currentDate);
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="empty-day" />);
    }

    for (let i = 1; i <= totalDays; i++) {
      const isCurrentDay = currentDate.getDate() === i;
      const isSelectedDay = selectedDate && selectedDate.getDate() === i;
      const isInCurrentWeek = getWeekNumber(currentDate) === getWeekNumber(new Date(currentDate.getFullYear(), currentDate.getMonth(), i));

      let dayClassName = 'calendar-day';
      if (isCurrentDay) dayClassName += ' current-day';
      if (isSelectedDay) dayClassName += ' selected-day';
      if (isInCurrentWeek) dayClassName += ' current-week';

      days.push(
        <div key={i} className={dayClassName} onClick={() => handleDayClick(i)}>
          {i}
        </div>
      );
    }

    return days;
  };

  

  const handleDayClick = (day) => {
    console.log("Clicked on day:", day);
    const newSelectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    setSelectedDate(newSelectedDate);

    if (onDateClick) {
      onDateClick(newSelectedDate);
    }
  };

  const prevMonth = () => {
    setCurrentDate((prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1));
    setSelectedDate(null);
  };

  const nextMonth = () => {
    setCurrentDate((prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1));
    setSelectedDate(null);
  };

  return (
    <div className={`calendar ${isVisible ? '' : 'hidden'}`} style={{ display: isVisible ? 'block' : 'none' }}>

      <div className="calendar-header">
        <button onClick={prevMonth}>&lt;</button>
        <h2 className='calendar-data'>{currentDate.toLocaleString('en-US', { month: 'long', year: 'numeric' })}</h2>
        <button onClick={nextMonth}>&gt;</button>
      </div>
      <div className="calendar-grid">
        {generateCalendar()}
      </div>
    </div>
  );
};

export default Calendar;
