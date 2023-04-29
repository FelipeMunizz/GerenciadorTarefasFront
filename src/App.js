import React, { useState } from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import SignIn from './Components/LoginRegister/Signin';
import Register from './Components/LoginRegister/Register';
import Home from './Components/Home/Home';
import Unauthorized from './Components/Unauthorized/Unauthorized';
import InicialPage from './Components/Home/InicialPage';

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [token, setToken] = useState(null);

  const handleLogin = (responseText) => {
    setToken(responseText);
    setAuthenticated(true);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<InicialPage />} />
          <Route path='/Login' element={<SignIn handleLogin={handleLogin} />}/>          
          <Route path='/Register' element={<Register />} />
          <Route path='/Home' element={authenticated ? <Home token={token} /> : <Unauthorized />} />
          <Route path="*" element={<Unauthorized />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;