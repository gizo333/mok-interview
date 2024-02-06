import React, {useState, useEffect}from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import Select from 'react-select';
import deleteStack from '../../img/delete-stack.svg'

import '../../styles/personal-setting.css'
import PersonalCard from './personal-card';
import PersonalCardReverse from './personal-card-reverse';
import InDev from '../INdevelopment/dev';

// КНОПКУ 'сохранить' УБРАТЬ, ВМЕСТО НЕЕ БУДЕТ 
//СОХРАНЯТЬСЯ ЕСЛИ УБРАЛ ФОКУС С ИНПУТА

// СОХРАНЯЕМ ВСЕ В БД
// СТЭК В РЕДАКС ?
// использовать редис для информации о пользователе?

function PersonalSetting() {
    const [showProfile, setShowProfile] = useState(true);
    const [showReverseCard, setShowReverseCard] = useState(false);
    const [contactFormData, setContactFormData] = useState({
        name: '',
        lastname: '',
        telegram: '',
        github: '',
        stack: '',
      });
    const [selectedStacks, setSelectedStacks] = useState([]); // setSelectedStacks будет обновляться из бд?


    // показывает оборотную сторону карточки
    const handleProfileButtonClick = () => {
      setShowProfile(!showProfile);
      setShowReverseCard(!showReverseCard);
    };


   
    



    //берет из setContactFormData всю информацию, делает дубль
    const handleInputChange = (e) => {
      if (e.target.name === 'stack') {
        setSelectedStacks(e.target.value);
      } else {
        setContactFormData({
          ...contactFormData,
          [e.target.name]: e.target.value,
        }
        );
      }
    };
    
    
    
      // список стэка
      const stackOptions = [ // перенести в другой файл
        { value: 'React', label: 'React' },
        { value: 'Node.js', label: 'Node.js' },
        { value: 'JavaScript', label: 'JavaScript' },
        { value: 'Python', label: 'Python' },
        { value: 'C/C++', label: 'C/C++' },
       
      ];
      
  
      useEffect(() => {
     
        const fetchData = async () => {
          try {
            const token = Cookies.get('token');
            const response = await axios.get('http://127.0.0.1:4202/users/info', {
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
              },
            });
    
            const userData = response.data;
    
           
            setContactFormData({
              name: userData.name || '',
              lastname: userData.lastname || '',
              telegram: userData.telegram || '',
              github: userData.github || '',
              stack: userData.stack || '', 
            });
    
            // Разбираем строку стека и обновляем selectedStacks
            const stackArray = userData.stack ? userData.stack.split(',') : [];
            const stackOptions = stackArray.map(stack => ({ value: stack, label: stack }));
            setSelectedStacks(stackOptions);
          } catch (error) {
            console.error('Ошибка при получении данных с сервера:', error.message);
          }
        };
    
        fetchData(); 
      }, []);
    

   
      

    const token = Cookies.get('token')


    const handleRemoveStack = async (index, e) => { // удаляем из стэка
      e.preventDefault();
      try {
        const response = await axios.delete(
          `http://127.0.0.1:4202/users/remove-stack/${index}`,
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            },
          }
        );
    
        console.log('Ответ сервера (удаление стека):', response.data);
    
    
        const updatedStacks = [...selectedStacks];
        updatedStacks.splice(index, 1);
        setSelectedStacks(updatedStacks);
      } catch (error) {
        console.error('Ошибка при удалении стека на сервере:', error.message);
      }
    };
    

  
    useEffect(() => {
      const sendStackToServer = async () => { 
        console.log('Отправка стека на сервер...');
        try {
          if (selectedStacks.length > 0) {
            const response = await axios.post(
              'http://127.0.0.1:4202/users/save-info',
              {
                stack: selectedStacks.map(stack => stack.value).join(','),
              },
              {
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${token}`,
                },
              }
            );
            console.log('Ответ сервера (стек):', response.data);
          }
        } catch (error) {
          console.error('Ошибка при отправке данных о стеке на сервер:', error.message);
        }
      };
      sendStackToServer();
    }, [selectedStacks, token]);
    


    const sendInfo = async () => { // отправляем на сервер остальную инфу, перенести в файл по api
     
      if (!contactFormData.name && !contactFormData.lastname && !contactFormData.telegram && !contactFormData.github) {
        console.log('Хотя бы одно из полей должно быть заполнено');
        return;
      }
    
     
      const nonEmptyData = Object.fromEntries(
        Object.entries(contactFormData).filter(([_, value]) => value !== '')
      );
    
      try {
        const response = await axios.post('http://127.0.0.1:4202/users/save-info', nonEmptyData, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });
        console.log('Ответ сервера:', response.data);
      } catch (error) {
        console.error('Ошибка при сохранении данных на сервере:', error.message);
      }

    };
    
    


    const handleStackChange = (selectedOptions) => {
      handleInputChange({ target: { name: 'stack', value: selectedOptions.map(option => option.value) } });
      setSelectedStacks(selectedOptions);
      
    };
    

    return ( 
       
        <div className='personal-container'>
        {showProfile && <PersonalCard onProfileButtonClick={handleProfileButtonClick} />}
        {showReverseCard && <PersonalCardReverse onProfileButtonClick={handleProfileButtonClick} />}
        
        <div className='personal-name'>
  <div className='personal-form-wrapper'>
    <form className='personal-form'>
      <p className='info-stack'>Стек:</p>

      <div className='personal-form-input'>
        <label htmlFor='stack'>Выберите стек:</label>
      <p className='ttt'></p>
        <Select
          className='select-stack'
          id='stack'
          name='stack'
          options={stackOptions}
          onChange={handleStackChange}
          isMulti
          value={selectedStacks}
        />
      </div>

      {selectedStacks.length > 0 && (
        <div className='selected-stack'>
          <ul className='stack-ul'>
            {selectedStacks.map((stack, index) => (
              <li className='stack-li' key={index}>{stack.label}
              <button className='remove-stack'  onClick={(e) => handleRemoveStack(index, e)}> <img className='stack-img' src={deleteStack} alt="" /> </button></li>
            ))}
          </ul>
        </div>
      )}

      <div className='personal-btn-wrapper'>
      </div>
    </form>
  </div>
</div>

<div className='personal-name'>
                <div className='personal-form-wrapper'>
                    <form className='personal-form' >
               
                    <p className='info'>О себе:</p>
                        <label htmlFor="name"></label>
                        <br />
                        <input className='username' placeholder='В кратце о себе, опыт и тп...' type="text" id='name' name='name' value={contactFormData.name} onChange={handleInputChange} />

                       
                        <div className='personal-btn-wrapper'>
                        <Link className='personal-save'> <button className='personal-save-btn' onClick={sendInfo}>Сохранить</button> </Link>
                        </div>
                        </form>
                </div>
            </div>


            <div className='personal-name'>
                <div className='personal-form-wrapper'>
                    <form className='personal-form' >
                    <p className='info'>ФИО:</p>
                        <label htmlFor="name">Имя:</label>
                        <br />
                        <input className='username' type="text" id='name' name='name' value={contactFormData.name} onChange={handleInputChange} />

                        <label htmlFor="lastname">Фамилия:</label>
                        <br />
                        <input className='last-name' type="text" id='lastname' name='lastname' value={contactFormData.lastname} onChange={handleInputChange} />

                       
                        <div className='personal-btn-wrapper'>
                        <Link className='personal-save'> <button className='personal-save-btn' onClick={sendInfo}>Сохранить</button> </Link>
                        </div>
                        </form>
                </div>
            </div>

            <div className='personal-name'>
                <div className='personal-form-wrapper'>
                    <form className='personal-form' >
                    <p className='info'>Контакты:</p>

                        <label htmlFor="telegram">Telegram:</label>
                        <br />
                        <input className='last-name' type="text" id='telegram' name='telegram' value={contactFormData.telegram} onChange={handleInputChange} />

                        <label htmlFor="github">GitHub:</label>
                        <br />
                        <input className='last-name' type="text" id='github' name='github' value={contactFormData.github} onChange={handleInputChange} />

                        <div className='personal-btn-wrapper'>
                        <Link className='personal-save'> <button className='personal-save-btn' onClick={sendInfo}>Сохранить</button> </Link>
                        </div>
                        </form>
                </div>
            </div>
            

            <div className='personal-name'>
                <div className='personal-form-wrapper'>
                    <form className='personal-form' >
                      <InDev />
                        <p className='info'>Дата рождения:</p>
                        <label htmlFor="day">День:</label>
                        <br />
                        <input className='username' type="text" id='day' name='day' />

                        <label htmlFor="month">Месяц:</label>
                        <br />
                        <input className='last-name' type="text" id='month' name='month' />

                        <label htmlFor="year">Год:</label>
                        <br />
                        <input className='last-name' type="text" id='year' name='year' />

                        <div className='personal-btn-wrapper'>
                        <Link className='personal-save'> <button className='personal-save-btn'>Сохранить</button> </Link>
                        </div>
                        </form>
                </div>
            </div>


        </div>
     );
}

export default PersonalSetting;
