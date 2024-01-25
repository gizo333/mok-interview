import React, { useState } from 'react';
import Table from 'rc-table';
import '../../styles/siteUsers.css';
import 'rc-table/assets/index.css';
import { Input } from 'antd';

function SiteUsers({ isVisible }) {
  const [searchText, setSearchText] = useState('');
  
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
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  const data = [
    { key: 1, name: 'John Doe', age: 30, address: 'New York' },
    { key: 2, name: 'Jane Smith', age: 25, address: 'Los Angeles' },
    { key: 3, name: 'Bob Johnson', age: 40, address: 'Chicago' },
  ];

  const filteredData = data.filter(item =>
    Object.values(item).some(value =>
      value.toString().toLowerCase().includes(searchText.toLowerCase())
    )
  );

  return isVisible ? (
    <div className='usr-container'>
      <Input className='search-table'
        placeholder="Search..."
        onChange={e => setSearchText(e.target.value)}
        value={searchText}
      />
      <Table className='head-table' columns={columns} data={filteredData} />
    </div>
  ) : null;
}

export default SiteUsers;
