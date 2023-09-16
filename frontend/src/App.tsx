import Mainpage from 'pages/mainpage/mainpage';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthStateProvider } from 'auth-state/auth-state.provider';
import { WaitForAuthResolve } from 'auth-state/route-wrappers/wait-for-auth-resolve';
import Auth from 'pages/auth/auth';

function App() {
   return (
      <BrowserRouter>
         <AuthStateProvider>
            <Auth />
            <Routes>
               <Route element={<WaitForAuthResolve />}>
                  <Route element={<Mainpage />} />
               </Route>
            </Routes>
         </AuthStateProvider>
      </BrowserRouter>
   );
}

export default App;
