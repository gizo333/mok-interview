// AuthLoader.js
import { useEffect } from 'react';
import Cookies from 'js-cookie';




export const TokenChecker = ({ children }) => {
  useEffect(() => {
    try {
      const token = Cookies.get('token');

      if (!token) {
        console.log('Токен отсутствует, выполните необходимые действия');
        window.location.replace("/");
      } else {
        console.log('Токен присутствует');
        
      }
    } catch (error) {
      console.error('Произошла ошибка при проверке токена:', error);
    }
  }, []);

  return <>{children}</>;
};
