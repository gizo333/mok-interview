import React, { useState } from 'react';
import LeftMenu from '../components/left-menu-comp/leftMenu';
import Calendar from '../components/calendar-comp/calendar';
import HeadCalendar from '../components/head-calendar/headCalendar';
import SiteUsers from '../components/group-menu/siteUsers';
import '../styles/home.css';
import InfoUsers from '../components/group-menu/infoUsers';

function Home() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [calendarVisible, setCalendarVisible] = useState(true);
  const [usersVisible, setUsersVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [infoUsersVisible, setInfoUsersVisible] = useState(false); 

  const handleDateChange = (newDate) => {
    setCurrentDate(newDate);
  };

  const handleToggleCalendar = () => {
    setCalendarVisible(!calendarVisible);
    setUsersVisible(false);
    setInfoUsersVisible(false); 
  };

  const handleToggleUsers = () => {
    setUsersVisible(!usersVisible);
    setCalendarVisible(false);
    setInfoUsersVisible(false); 
  }

  const handleProfileClick = () => {
    setInfoUsersVisible(true);
  };

  const handleClose = () => {
    setInfoUsersVisible(false);
  };

  const handleDateClick = (newSelectedDate) => {
    console.log('Дата:',newSelectedDate);
    setSelectedDate(newSelectedDate);
  };

  const day = currentDate.getDate();

  return (
    <div className="HomePage">
      <header className="HomeHeader">
        <LeftMenu day={day} onToggleCalendar={handleToggleCalendar} onToggleUsers={handleToggleUsers} />
        {usersVisible && <SiteUsers isVisible={usersVisible} onProfileClick={handleProfileClick} />}
        {calendarVisible && <Calendar currentDate={currentDate} onDateChange={handleDateChange} onDateClick={handleDateClick} isVisible={calendarVisible} />}
        <HeadCalendar onDateClick={handleDateClick} selectedDate={selectedDate} />
        {infoUsersVisible && <InfoUsers onClose={handleClose} />}
      </header>
    </div>
  );
}

export default Home;
