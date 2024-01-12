import React, {useState}from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import Select from 'react-select';

import '../../styles/personal-setting.css'
import PersonalCard from './personal-card';
import PersonalCardReverse from './personal-card-reverse';

// КНОПКУ 'сохранить' УБРАТЬ, ВМЕСТО НЕЕ БУДЕТ 
//СОХРАНЯТЬСЯ ЕСЛИ УБРАЛ ФОКУС С ИНПУТА

// СОХРАНЯЕМ ВСЕ В БД
// СТЭК В РЕДАКС ?

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
    const [selectedStacks, setSelectedStacks] = useState([]);


    // показывает оборотную сторону карточки
    const handleProfileButtonClick = () => {
      setShowProfile(!showProfile);
      setShowReverseCard(!showReverseCard);
    };



    //берет из setContactFormData всю информацию, делает дубль
    const handleInputChange = (e) => {
      setContactFormData({
        ...contactFormData,  // распространение (spread) текущего состояния
        [e.target.name]: e.target.value,  // обновление значения в соответствии с именем поля ввода
      });
    };
    


      // записывает опции в стэк
      const handleStackChange = (selectedOptions) => {
        setSelectedStacks(selectedOptions);
      };
    
      // список стэка
      const stackOptions = [
        { value: 'React', label: 'React' },
        { value: 'Node.js', label: 'Node.js' },
        { value: 'JavaScript', label: 'JavaScript' },
        { value: 'Python', label: 'Python' },
        { value: 'C/C++', label: 'C/C++' },
       
      ];
      
  
   

   
      

    const token = Cookies.get('token')

    const handleSaveContactClick = async () => {
      // Проверяем, что хотя бы одно из полей не пусто
      if (!contactFormData.name && !contactFormData.lastname && !contactFormData.telegram && !contactFormData.github) {
        console.log('Хотя бы одно из полей должно быть заполнено');
        // Здесь вы можете показать сообщение об ошибке или решить не отправлять запрос
        return;
      }
    
      // Формируем объект с данными, исключая пустые поля
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
    
    



    


    return ( 
       
        <div className='personal-container'>
        {showProfile && <PersonalCard onProfileButtonClick={handleProfileButtonClick} />}
        {showReverseCard && <PersonalCardReverse onProfileButtonClick={handleProfileButtonClick} />}
        
        <div className='personal-name'>
      <div className='personal-form-wrapper'>
        <form className='personal-form'>
          <p className='info-stack'>Стек:</p>

          <div className='personal-form-input'>
            <label htmlFor='stack'>Выберите стек(и):</label>
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
              <span className='stack-span'>{selectedStacks.map(stack => stack.label).join(', ')}</span> 
            </div>
          )}

                        <div className='personal-btn-wrapper'>
                        <Link className='personal-save'> <button className='personal-save-btn'>Сохранить</button> </Link>
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
                        <Link className='personal-save'> <button className='personal-save-btn' onClick={handleSaveContactClick}>Сохранить</button> </Link>
                        </div>
                        </form>
                </div>
            </div>


            

            <div className='personal-name'>
                <div className='personal-form-wrapper'>
                    <form className='personal-form' >
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
                        <Link className='personal-save'> <button className='personal-save-btn' onClick={handleSaveContactClick}>Сохранить</button> </Link>
                        </div>
                        </form>
                </div>
            </div>

            



        </div>
     );
}

export default PersonalSetting;