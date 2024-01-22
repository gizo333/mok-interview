// В компоненте HeadCalendar
import React, { useState, useEffect } from 'react';
import Calendar from '../calendar-comp/calendar';
import '../../styles/headCalendar.css';
import ArrowLeft from '../../img/previous-week.svg';
import ArrowRight from '../../img/next-week.svg';

function HeadCalendar({ onDateClick, selectedDate }) {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const [currentWeek, setCurrentWeek] = useState(new Date());
  const columnCount = 23;
  const tableCount = 7;

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


  //рендер блока дней в шапке страницы
  const renderDays = () => {
    const datesForWeek = getDatesForWeek(currentWeek);

    return datesForWeek.map((date, index) => (
      <div key={index} className={index === 0 ? 'calendar-view-days-today' : 'calendar-view-days-all'} onClick={() => handleDateClick(date)}>
        <p className='daysOfWeek'>{daysOfWeek[date.getDay()]}</p>
        <p>{date.getDate()}</p>
      </div>
    ));
  };


   // двигаем недели вперед назад

  // const handlePrevWeek = () => {
  //   const prevWeek = new Date(currentWeek);
  //   prevWeek.setDate(currentWeek.getDate() - 7);
  //   setCurrentWeek(prevWeek);
  // };

 

  // const handleNextWeek = () => {
  //   const nextWeek = new Date(currentWeek);
  //   nextWeek.setDate(currentWeek.getDate() + 7);
  //   setCurrentWeek(nextWeek);
  // };

  const handleDateClick = (clickedDate) => {
    if (onDateClick) {
      onDateClick(clickedDate);
    }
  };

// рендер часов с 00 до 23:00
  const renderHours = () => {
    const hours = [];

    for (let i = 0; i < 24; i++) {
      const formattedHour = i.toString().padStart(2, '0');
      hours.push(<div key={i} className='calendar-view-time'>{formattedHour}:00</div>);
    }

    return hours;
  };
 
  
 

  return (
    <div className='head-calendar'>
      <div className='calendar-view-days-container'>
        <div className='calendar-view-block-start'></div>
        {/* <button className='previous-week' onClick={handlePrevWeek}><img className='arrow-left' src={ArrowLeft} alt="" /></button>
        <button className='next-week' onClick={handleNextWeek}><img className='arrow-right' src={ArrowRight} alt="" /></button> */}
        <Calendar selectedDate={selectedDate} onDateClick={handleDateClick} />
        {renderDays()}
        
      </div>

      <div className='calendar-view-table-conteiner'>
        <div  className='calendar-view-time-conteiner'>

          {renderHours()}
        </div>
        {Array.from({ length: tableCount }, (_, columnIndex) => (
        <div key={columnIndex} className="calendar-view-column">
          {Array.from({ length: columnCount }, (_, tableIndex) => (
            <div key={tableIndex} className="calendar-view-table"></div>
          ))}
        </div>
      ))}
        </div>
    </div>
  );
}

export default HeadCalendar;
