import Mainpage from 'pages/mainpage/mainpage';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthStateProvider } from 'auth-state/auth-state.provider';
import { WaitForAuthResolve } from 'auth-state/route-wrappers/wait-for-auth-resolve';
import Auth from 'pages/auth/auth';
import { OnlyPublic } from 'auth-state/route-wrappers/only-public';
import { Private } from 'auth-state/route-wrappers/private';
import LogsPage from 'pages/logs/logspage';

function App() {
  return (
    <BrowserRouter>
      <AuthStateProvider>
        <Routes>
          <Route element={<WaitForAuthResolve />}>
            <Route element={<OnlyPublic />}>
              <Route path="sign-in" element={<Auth />} />
            </Route>
            <Route element={<Private />}>
              <Route path="/" element={<Mainpage />} />
            </Route>
            <Route element={<Private />}>
              <Route path="logs" element={<LogsPage />} />
            </Route>
          </Route>
        </Routes>
      </AuthStateProvider>
    </BrowserRouter>
  );
}

export default App;
