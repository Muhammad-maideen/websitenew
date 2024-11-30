import logo from './logo.svg';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Home from './components/home';

function App() {
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
  
      </Routes>
    </BrowserRouter>
      
    );

}

export default App;
