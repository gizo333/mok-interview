import React, { useState } from 'react';
import LeftMenu from '../components/left-menu-comp/leftMenu';
import Calendar from '../components/calendar-comp/calendar';
import '../styles/home.css';

function Home() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [calendarVisible, setCalendarVisible] = useState(true);
  

  const handleDateChange = (newDate) => {
    setCurrentDate(newDate);
  };

  const handleToggleCalendar = () => {
    setCalendarVisible(!calendarVisible);
  };

  const day = currentDate.getDate();

  return (
    <div className="HomePage">
      <header className="HomeHeader">
        <LeftMenu day={day} onToggleCalendar={handleToggleCalendar} />
        <Calendar currentDate={currentDate} onDateChange={handleDateChange} isVisible={calendarVisible} />
      </header>
    </div>
  );
}

export default Home;
