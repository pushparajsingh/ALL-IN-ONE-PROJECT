import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import Login from './components/Login'
import Register from './components/Register'
import PageNotFound from './components/PageNotFound';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='*' element={<PageNotFound/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
    </Routes>
    </div>
  );
}

export default App;
