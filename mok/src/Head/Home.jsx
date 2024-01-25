// В компоненте Home
import React, { useState } from 'react';
import LeftMenu from '../components/left-menu-comp/leftMenu';
import Calendar from '../components/calendar-comp/calendar';
import HeadCalendar from '../components/head-calendar/headCalendar';
import SiteUsers from '../components/group-menu/siteUsers';
import '../styles/home.css';

function Home() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [calendarVisible, setCalendarVisible] = useState(true);
  const [usersVisible, setUsersVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  

  const handleDateChange = (newDate) => {
    setCurrentDate(newDate);
  };

  const handleToggleCalendar = () => {
    setCalendarVisible(!calendarVisible);
    setUsersVisible(false);
  };

  const handleToggleUsers = () => {
    setUsersVisible(!usersVisible);
    setCalendarVisible(false);
  }

  const handleDateClick = (newSelectedDate) => {
    console.log('Дата:',newSelectedDate);
    setSelectedDate(newSelectedDate);
    
  };

  const day = currentDate.getDate();

  return (
    <div className="HomePage">
      <header className="HomeHeader">
        <LeftMenu day={day} onToggleCalendar={handleToggleCalendar} onToggleUsers={handleToggleUsers} />
        {usersVisible && <SiteUsers isVisible={usersVisible} />}
        {calendarVisible && <Calendar currentDate={currentDate} onDateChange={handleDateChange} onDateClick={handleDateClick} isVisible={calendarVisible} />}
        <HeadCalendar onDateClick={handleDateClick} selectedDate={selectedDate} />

      </header>
    </div>
  );
}

export default Home;
