import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from './Components/LoginRegister/Signin';
import Register from './Components/LoginRegister/Register';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import InicialPage from './Components/Home/InicialPage';

const App = () => {
  const token  = localStorage.getItem('token');

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<InicialPage />} />
          <Route path='/Login' element={<SignIn />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/Home' element={token ? <Home /> : <NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;