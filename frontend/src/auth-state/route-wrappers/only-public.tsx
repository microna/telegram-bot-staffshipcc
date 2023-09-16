import { Navigate, Outlet } from 'react-router-dom';
import { useAuthState } from '../use-auth-state.hook';

export const OnlyPublic = () => {
  const { user } = useAuthState();
  console.log('user', user);
  if (user) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};
