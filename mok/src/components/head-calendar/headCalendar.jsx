import React, { useState, useEffect} from 'react';
import Calendar from '../calendar-comp/calendar';
import '../../styles/headCalendar.css';

const HeadCalendar = ({ onDateClick, selectedDate }) => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const [currentWeek, setCurrentWeek] = useState(new Date());
  const [currentHour] = useState(getCurrentHourIndex());
  const columnCount = 7;
  const tableCount = 23;
  const formattedCurrentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  function getCurrentHourIndex() {
    return new Date().getHours();
  }

  
  //устанавливаем текущую неделю равной выбранной дате в календаре
  useEffect(() => {
    if (selectedDate) {
      setCurrentWeek(selectedDate);
    }
  }, [selectedDate]);



  // рендер 7 дней в шапке (просто отображает только 7)
  const getDatesForWeek = (startOfWeek) => {
    const datesForWeek = [];

    for (let i = 0; i < 7; i++) {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + i);
      datesForWeek.push(date);
    }

    return datesForWeek;
  };


// рендер верхнего блока с датами текущей недели
  const renderDays = () => {
    const datesForWeek = getDatesForWeek(currentWeek);
  
    return datesForWeek.map((date, index) => (
      <div key={index} className={index === 0 ? 'calendar-view-days-today' : 'calendar-view-days-all'} onClick={() => handleDateClick(date)}>
        <p className='daysOfWeek'>{daysOfWeek[date.getDay()]}</p>
        <p>{date.getDate()}</p>
      </div>
    ));
  };


  

// рендерит текущее время
  const renderTableBlocks = () => {
    return Array.from({ length: columnCount }, (_, columnIndex) => (
      <div key={columnIndex} className="calendar-view-column">

        {Array.from({ length: tableCount }, (_, tableIndex) => {
          const timeFraction = tableIndex / tableCount;
          const isCurrentHour = tableIndex === currentHour;
          const isCurrentTime = isCurrentHour || (timeFraction > 0.5 && timeFraction < currentHour % 1);
  
          return (
            <div key={tableIndex} className="calendar-view-table">
              {isCurrentTime && columnIndex === 0 && (
                <div className="dynamic-time">
                  {formattedCurrentTime}
                </div>
              )}
            </div>
          );
        })}
      </div>
    ));
  };


  // выбор даты в календаре
  const handleDateClick = (clickedDate) => {
    if (onDateClick) {
      onDateClick(clickedDate);
    }
  };


// рендер статического времени
  const renderHours = () => {
    const hours = [];
  
    for (let i = 0; i < 24; i++) {
      const formattedHour = i.toString().padStart(2, '0');
      hours.push(
        <div key={i} className="calendar-view-time">
          <div>{formattedHour}:00</div>
         
        </div>
      );
    }
    return hours;
  };
  

  

  return (
    <div className='head-calendar'>
      <div className='calendar-view-days-container'>
        <div className='calendar-view-block-start'></div>
        <Calendar selectedDate={selectedDate} onDateClick={handleDateClick} />
        {renderDays()}
      </div>
  
      <div className='calendar-view-table-conteiner'>
        <div className='calendar-view-time-conteiner'>
          {renderHours()}
        </div>
        {renderTableBlocks()}
      </div>
    </div>
  );
}

export default HeadCalendar;
