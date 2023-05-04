import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignIn from './Views/Authenticate/Signin';
import Register from './Views/Authenticate/Register';
import NotFound from './Views/NotFound/NotFound';
import InicialPage from './Views/InicialPage';
import Dashboard from './Views/Menu/Dashboard';
import Project from './Views/Menu/Project'
import Sidebar from './Components/Sidebar';
import ProjetctMembers from './Views/Menu/ProjetctMembers';
import { Grid } from '@mui/material';

const App = () => {
  const autenticate = !!localStorage.getItem('token');

  return (
    <div className="App">
      <BrowserRouter>
        <Grid container spacing={5}>
          {autenticate && (
            <Grid item xs={2}>
              <Sidebar />
            </Grid>
          )}
          <Grid item xs={autenticate ? 10 : 12}>
            <Routes>
              <Route path='/' element={!autenticate ? <InicialPage /> : <Navigate to='/Dashboard' />} />
              <Route path='/Login' element={!autenticate ? <SignIn /> : <Navigate to='/Dashboard' />} />
              <Route path='/Register' element={!autenticate ? <Register /> : <Navigate to='/Dashboard' />} />
              <Route path='/Dashboard' element={autenticate ? <Dashboard /> : <Navigate to='/Login' />} />
              <Route path='/Project' element={autenticate ? <Project /> : <Navigate to='/Login' />} />
              <Route path='/ProjetctMembers' element={autenticate ? <ProjetctMembers /> : <Navigate to='/Login' />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Grid>
        </Grid>
      </BrowserRouter>  
    </div>
  );
};

export default App;