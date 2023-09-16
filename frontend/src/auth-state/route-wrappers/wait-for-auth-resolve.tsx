import React from 'react';
import { Outlet } from 'react-router-dom';
import { useAuthState } from '../use-auth-state.hook';
import Auth from 'pages/auth/auth';

export const WaitForAuthResolve = () => {
   const { isAuthResolved } = useAuthState();

   if (!isAuthResolved) {
      return <Auth />;
   }

   return <Outlet />;
};
