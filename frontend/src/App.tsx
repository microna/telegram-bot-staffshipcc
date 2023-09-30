import Mainpage from 'pages/mainpage/mainpage';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthStateProvider } from 'auth-state/auth-state.provider';
import { WaitForAuthResolve } from 'auth-state/route-wrappers/wait-for-auth-resolve';
import Auth from 'pages/auth/auth';
import { OnlyPublic } from 'auth-state/route-wrappers/only-public';
import { Private } from 'auth-state/route-wrappers/private';
import LogsPage from 'pages/logs/logspage';
import { Flowbite } from 'flowbite-react';
import { FlowbiteThemeProvider } from 'layouts/FlowbiteThemeProvider/FlowbiteThemeProvider';

function App() {
  return (
    <BrowserRouter>
      <Flowbite>
        <FlowbiteThemeProvider>
          <AuthStateProvider>
            <Routes>
              <Route element={<WaitForAuthResolve />}>
                <Route element={<OnlyPublic />}>
                  <Route path="sign-in" element={<Auth />} />
                </Route>
                <Route element={<Private />}>
                  <Route index element={<Mainpage />} />
                  <Route path="logs" element={<LogsPage />} />
                </Route>
              </Route>
            </Routes>
          </AuthStateProvider>
        </FlowbiteThemeProvider>
      </Flowbite>
    </BrowserRouter>
  );
}

export default App;
