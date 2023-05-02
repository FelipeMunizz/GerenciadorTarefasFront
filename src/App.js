import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignIn from './Components/LoginRegister/Signin';
import Register from './Components/LoginRegister/Register';
import NotFound from './Components/NotFound/NotFound';
import InicialPage from './Components/Home/InicialPage';
import Dashboard from './Components/Home/Dashboard'

const App = () => {
  const autenticate = !!localStorage.getItem('token');

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={!autenticate ? <InicialPage /> : <Navigate to='/Dashboard' />} />
          <Route path='/Login' element={!autenticate ? <SignIn /> : <Navigate to='/Dashboard' />} />
          <Route path='/Register' element={!autenticate ? <Register /> : <Navigate to='/Dashboard' />} />
          <Route path='/Dashboard' element={autenticate ? <Dashboard /> : <Navigate to='/Login' />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;