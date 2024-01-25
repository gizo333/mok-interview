import React, { useState } from 'react';
import Table from 'rc-table';
import '../../styles/siteUsers.css';
import 'rc-table/assets/index.css';
import { Input } from 'antd';
import InfoUsers from './infoUsers';

function SiteUsers({ isVisible }) {
  const [searchText, setSearchText] = useState('');
  const [showUserInfo, setShowUserInfo] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Profession',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Profile',
      dataIndex: 'address',
      key: 'address',
      render: (text, record) => (
        <button onClick={() => handleProfileClick(record)}>{text}</button>
      ),
    },
  ];

  const data = [
    { key: 1, name: 'John Doe', age: 'Python Developer', address: 'Click' },
    { key: 2, name: 'Jane Smith', age: 'Frontend Developer', address: 'Click' },
    { key: 3, name: 'Bob Johnson', age: 'C++ Developer', address: 'Click' },
  ];

  const filteredData = data.filter(item =>
    Object.values(item).some(value =>
      value.toString().toLowerCase().includes(searchText.toLowerCase())
    )
  );

  const handleProfileClick = (record) => {
    setSelectedUser(record);
    setShowUserInfo(prevState => !prevState); // Переключаем значение showUserInfo
  };

  return isVisible ? (
    <div className='usr-container'>
      <Input className='search-table'
        placeholder="Search..."
        onChange={e => setSearchText(e.target.value)}
        value={searchText}
      />
      <Table className='head-table' columns={columns} data={filteredData} />
      {showUserInfo ? <InfoUsers onClose={() => setShowUserInfo(false)} selectedUser={selectedUser} /> : null}
    </div>
  ) : null;
}

export default SiteUsers;
