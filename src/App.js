import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignIn from './Views/LoginRegister/Signin';
import Register from './Views/LoginRegister/Register';
import NotFound from './Views/NotFound/NotFound';
import InicialPage from './Views/InicialPage';
import Dashboard from './Views/Menu/Dashboard';
import Project from './Views/Menu/Project'
import Sidebar from './Components/Sidebar/Sidebar';

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
          <Route path='/Project' element={autenticate ? <Project /> : <Navigate to='/Login' />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {autenticate && <Sidebar />}
      </BrowserRouter>      
    </div>
  );
};

export default App;