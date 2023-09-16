import axios from 'axios';
import React from 'react';
const backendUrl = process.env.REACT_APP_BACKEND_URL;
interface IUserData {
   email: string;
   password: string;
}
const login = async ({ email, password }: IUserData) => {
   try {
      const result = await axios.post(backendUrl + 'login', {
         email,
         password
      });
      return result;
   } catch (e) {
      console.log('error login');
   }
};

const Auth = () => {
   const handleOpenPublicGame = async (
      event: React.SyntheticEvent<HTMLFormElement>
   ) => {
      event.preventDefault();
      const form = event.currentTarget;
      const formElements = form.elements as typeof form.elements & {
         email: { value: string };
         password: { value: string };
      };
      console.log(formElements.email.value, formElements.password.value);
      const userData = {
         email: formElements.email.value,
         password: formElements.password.value
      };

      const result = await login(userData);
      console.log(result?.data);
   };
   return (
      <form
         className='flex flex-col w-full h-screen m-auto gap-1 justify-center items-center'
         onSubmit={handleOpenPublicGame}
      >
         <input
            id='email'
            className='block appearance-none  px-4  py-1  text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Email'
            required={true}
         />
         <input
            id='password'
            className='block appearance-none  px-4  py-1  text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Password'
            required={true}
         />
         <button
            type='submit'
            className='flex  text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 justify-center'
         >
            Submit
         </button>
      </form>
   );
};

export default Auth;
