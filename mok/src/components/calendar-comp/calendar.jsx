import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../../styles/calendar.css';

function Calendar({ isVisible, onDateClick }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentWeek, setCurrentWeek] = useState(0);

  useEffect(() => {
    setCurrentWeek(getWeekNumber(new Date()));
  }, [currentDate]);

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
    const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDay();

    const prevMonthTotalDays = daysInMonth(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));

    // // Добавляем дни предыдущего месяца
    // for (let i = firstDayOfMonth - 1; i >= 0; i--) {
    //   const day = prevMonthTotalDays - i;
    //   days.push(
    //     <div key={`prev-${day}`} className="other-month-day" onClick={() => handleDayClick(day)}>
    //       {day}
    //     </div>
    //   );
    // }

    // Добавляем дни текущего месяца
    for (let i = 1; i <= totalDays; i++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
      const isCurrentDay = currentDate.getDate() === i;
      const isSelectedDay = selectedDate && selectedDate.getDate() === i;
      const isInCurrentWeek = currentWeek === getWeekNumber(date);

      let dayClassName = 'calendar-day';
      if (isCurrentDay) dayClassName += ' current-day';
      if (isSelectedDay) dayClassName += ' selected-day';
      if (isInCurrentWeek) dayClassName += ' current-week';

      days.push(
        <div key={`current-${i}`} className={dayClassName} onClick={() => handleDayClick(i)}>
          {i}
        </div>
      );
    }

    // Добавляем дни следующего месяца
    // for (let i = 1; i <= 6 - lastDayOfMonth; i++) {
    //   days.push(
    //     <div key={`next-${i}`} className="other-month-day" onClick={() => handleDayClick(i)}>
    //       {i}
    //     </div>
    //   );
    // }

    return days;
  };

  const handleDayClick = (day) => {
    const newSelectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    setSelectedDate(newSelectedDate);
    const selectedWeek = getWeekNumber(newSelectedDate);
    setCurrentWeek(selectedWeek);

    if (onDateClick) {
      onDateClick(newSelectedDate);
    }
  };

  const handlePrevMonthClick = () => {
    setCurrentDate((prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1));
    setSelectedDate(null);
  };

  const handleNextMonthClick = () => {
    setCurrentDate((prevDate) => {
      const nextMonth = prevDate.getMonth() + 1;
      const year = nextMonth === 12 ? prevDate.getFullYear() + 1 : prevDate.getFullYear();
      const month = nextMonth % 12;
      return new Date(year, month, 1);
    });
    setSelectedDate(null);
  };
  

  return (
    <CSSTransition in={isVisible} timeout={300} classNames="calendar" unmountOnExit>
      <div className="calendar">
        <div className="calendar-header">
          <button onClick={handlePrevMonthClick}>&lt;</button>
          <h2 className="calendar-data">{currentDate.toLocaleString('en-US', { month: 'long', year: 'numeric' })}</h2>
          <button onClick={handleNextMonthClick}>&gt;</button>
        </div>
        <div className="calendar-grid">{generateCalendar()}</div>
      </div>
    </CSSTransition>
  );
}

export default Calendar;
