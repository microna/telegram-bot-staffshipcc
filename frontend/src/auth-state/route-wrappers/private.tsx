import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthState } from '../use-auth-state.hook';

export const Private = () => {
   const { user } = useAuthState();
   console.log(user);
   if (!user) {
      return <Navigate to='sign-in' replace />;
   }

   return <Outlet />;
};
