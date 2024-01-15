// В компоненте HeadCalendar
import React, { useState, useEffect } from 'react';
import Calendar from '../calendar-comp/calendar';
import '../../styles/headCalendar.css';
import ArrowLeft from '../../img/previous-week.svg';
import ArrowRight from '../../img/next-week.svg';

function HeadCalendar({ onDateClick, selectedDate }) {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const [currentWeek, setCurrentWeek] = useState(new Date());

  useEffect(() => {
    if (selectedDate) {
      setCurrentWeek(selectedDate);
    }
  }, [selectedDate]);

  const getDatesForWeek = (startOfWeek) => {
    const datesForWeek = [];

    for (let i = 0; i < 7; i++) {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + i);
      datesForWeek.push(date);
    }

    return datesForWeek;
  };

  const renderDays = () => {
    const datesForWeek = getDatesForWeek(currentWeek);

    return datesForWeek.map((date, index) => (
      <div key={index} className={index === 0 ? 'calendar-view-days-today' : 'calendar-view-days-all'} onClick={() => handleDateClick(date)}>
        <p className='daysOfWeek'>{daysOfWeek[date.getDay()]}</p>
        <p>{date.getDate()}</p>
      </div>
    ));
  };

  const handlePrevWeek = () => {
    const prevWeek = new Date(currentWeek);
    prevWeek.setDate(currentWeek.getDate() - 7);
    setCurrentWeek(prevWeek);
  };

  const handleNextWeek = () => {
    const nextWeek = new Date(currentWeek);
    nextWeek.setDate(currentWeek.getDate() + 7);
    setCurrentWeek(nextWeek);
  };

  const handleDateClick = (clickedDate) => {
    if (onDateClick) {
      onDateClick(clickedDate);
    }
  };

  return (
    <div className='head-calendar'>
      <div className='calendar-view-days-container'>
        <button className='previous-week' onClick={handlePrevWeek}><img className='arrow-left' src={ArrowLeft} alt="" /></button>
        <button className='next-week' onClick={handleNextWeek}><img className='arrow-right' src={ArrowRight} alt="" /></button>
        <Calendar selectedDate={selectedDate} onDateClick={handleDateClick} />
        {renderDays()}
      </div>
    </div>
  );
}

export default HeadCalendar;
