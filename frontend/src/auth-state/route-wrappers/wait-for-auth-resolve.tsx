import { Outlet } from 'react-router-dom';
import { useAuthState } from '../use-auth-state.hook';

export const WaitForAuthResolve = () => {
  const { isAuthResolved } = useAuthState();

  if (!isAuthResolved) {
    return 'Loading... ';
  }

  return <Outlet />;
};
