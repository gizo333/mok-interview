// AuthLoader.js
import React, { useEffect } from 'react';
import Cookies from 'js-cookie';




 export const TokenChecker = () => {

    useEffect(() => {
      // Проверяем наличие токена в куках
      const token = Cookies.get('token'); // Замените 'your_token_cookie_name' на имя вашего куки с токеном
  
      if (!token) {
        // Если токен отсутствует, выполните необходимые действия, например, перенаправьте пользователя на страницу входа
        console.log('Токен отсутствует, выполните необходимые действия');
        // Например, можно использовать библиотеку React Router для перенаправления:
        // history.push('/login');
      } else {
        // Токен присутствует, вы можете выполнить дополнительные действия, если необходимо
        console.log('Токен присутствует');
      }
    }, []);
}

// export const AuthLoader = ({ children }) => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const checkAuthentication = async () => {
//       const token = Cookies.get('token');

//       if (!token) {
//         navigate('/login');
//       } 
//     };

//     checkAuthentication();
//   }, [navigate]);

//   return <>{children}</>;
// };
