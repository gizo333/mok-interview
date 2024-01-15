// В компоненте Home
import React, { useState } from 'react';
import LeftMenu from '../components/left-menu-comp/leftMenu';
import Calendar from '../components/calendar-comp/calendar';
import HeadCalendar from '../components/head-calendar/headCalendar';
import '../styles/home.css';

function Home() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [calendarVisible, setCalendarVisible] = useState(true);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (newDate) => {
    setCurrentDate(newDate);
  };

  const handleToggleCalendar = () => {
    setCalendarVisible(!calendarVisible);
  };

  const handleDateClick = (newSelectedDate) => {
    console.log('Дата:',newSelectedDate);
    setSelectedDate(newSelectedDate);
    
  };

  const day = currentDate.getDate();

  return (
    <div className="HomePage">
      <header className="HomeHeader">
        <LeftMenu day={day} onToggleCalendar={handleToggleCalendar} />
        <Calendar currentDate={currentDate} onDateChange={handleDateChange} onDateClick={handleDateClick} isVisible={calendarVisible} />
        <HeadCalendar onDateClick={handleDateClick} selectedDate={selectedDate} />
      </header>
    </div>
  );
}

export default Home;
