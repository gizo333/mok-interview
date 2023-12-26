// main.js

const TelegramBot = require('node-telegram-bot-api');
const sequelize = require('./database');
const Model = require('./bots_model');

const token = '69';

const bot = new TelegramBot(token, { polling: true });

const adminUserId = 919745761; // Замените на реальный идентификатор вашего администратора

bot.onText(/\/start/, async (msg) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id;
  
    // Проверяем, является ли пользователь администратором
    if (userId === adminUserId) {
      // Администратору доступна команда /start
      const selectedLanguages = await getUserSettings(userId);
      if (!selectedLanguages) {
        // Если у администратора нет выбранных языков, отправляем опрос всем пользователям
        const surveyText = 'Выберите язык программирования:';
        const languageOptions = ['JavaScript', 'TypeScript', 'Python']; // Ваши варианты языков
  
        // Отправляем опрос каждому пользователю в индивидуальном чате
        const allUsers = await Model.findAll();
        allUsers.forEach(async (user) => {
          const userChatId = user.user_id;
  
          // Отправляем опрос каждому пользователю
          bot.sendMessage(userChatId, surveyText, {
            reply_markup: {
              inline_keyboard: languageOptions.map(language => [{ text: language, callback_data: language }]),
            },
          });
        });
  
        // Отправляем настройки администратору
        sendSettings(chatId);
      } else {
        bot.sendMessage(chatId, `У вас уже выбраны языки: ${selectedLanguages.join(', ')}`);
      }
    } else {
      // Если пользователь не является администратором, отправляем сообщение об ошибке
      bot.sendMessage(chatId, 'Извините, у вас нет доступа к этой команде.');
    }
  });


  
  function sendPeriodicMessage() {
    const chatId = '-4017837325'; // Замените на реальный идентификатор чата
  
    // Отправляем сообщение
    bot.sendMessage(chatId, 'Привет, это периодическое сообщение!');
  }
  
  // Запускаем функцию каждые 5 секунд
  setInterval(sendPeriodicMessage, 5000);
  
  


bot.on('callback_query', async (callbackQuery) => {
  const chatId = callbackQuery.message.chat.id;
  const userId = callbackQuery.from.id;
  const selectedLanguage = callbackQuery.data;

  // Обновляем настройки пользователя
  await updateLanguageSelection(userId, selectedLanguage);

  // Сохраняем результат в базу данных
  await saveToDatabase(userId, selectedLanguage);

  bot.sendMessage(chatId, `Выбран язык: ${selectedLanguage}`);
});

function sendSettings(chatId) {
  const options = {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [{ text: 'JavaScript', callback_data: 'js' }],
        [{ text: 'TypeScript', callback_data: 'ts' }],
        [{ text: 'Python', callback_data: 'py' }],
      ],
    }),
  };

  bot.sendMessage(chatId, 'Выберите языки программирования (можно выбрать несколько):', options);
}

async function updateLanguageSelection(userId, selectedLanguage) {
  const userSettings = await getUserSettings(userId);

  if (userSettings) {
    userSettings.push(selectedLanguage);
  } else {
    await Model.create({ user_id: userId, language: selectedLanguage });
  }
}

async function getUserSettings(userId) {
  const user = await Model.findOne({
    where: { user_id: userId },
  });

  return user ? [user.language] : null;
}


async function saveToDatabase(userId, selectedLanguage) {
    try {
        // Попытка найти существующую запись
        const [user, created] = await Model.findOrCreate({
            where: {
                user_id: userId,
            },
            defaults: {
                language: '[]', // Создаем пустую строку, если запись не существует
            },
        });

        let languagesArray;

        try {
            // Пробуем распарсить значение из базы данных
            languagesArray = JSON.parse(user.language);
        } catch (error) {
            // В случае ошибки (например, если поле не является валидной JSON-строкой), устанавливаем пустой массив
            languagesArray = [];
        }

        // Добавляем новый язык в массив, если его там нет
        if (!languagesArray.includes(selectedLanguage)) {
            languagesArray.push(selectedLanguage);
            user.language = JSON.stringify(languagesArray); // Сохраняем массив в виде строки JSON
            await user.save();
        }

        if (!created) {
            console.log(`Пользователь с ID ${userId} уже выбрал язык ${selectedLanguage}.`);
        } else {
            console.log(`Данные успешно сохранены: ${user.toJSON()}`);
        }
    } catch (error) {
        console.error('Ошибка при сохранении данных в базу данных:', error.message || error);
    }
}





  
  

// Запуск приложения
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');

    // Синхронизация модели с базой данных
    await sequelize.sync();
    console.log('Models have been synchronized successfully.');

    // Запуск бота
    console.log('Bot is now running.');
  } catch (error) {
    console.error('Unable to connect to the database:', error.message || error);
  }
})();
