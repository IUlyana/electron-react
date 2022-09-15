import { Routes, Route, HashRouter } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Main />} /> 
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} /> 
      </Routes>
    </HashRouter>
  );
}

export default App;
