
import './App.css';
import Login from './components/Login.js'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Register from './components/Register.js';
import Registered from './components/Registered.js';
import NotRegistered from './components/NotRegistered.js';
import Dashboard from './components/Dashboard'
import {useState} from 'react'
function App() {
  const [data,setData] = useState();
  return (
    <BrowserRouter>

    <Routes>
      <Route path="/login"  element={<Login setData={setData}/>}/>
      <Route path="/register"  element={<Register />}/>
      <Route path="/registration-complete" element={<Registered />} />
      <Route path="/registration-fail" element={<NotRegistered />} />
      <Route path="/dashboard" element={<Dashboard data={data} />} />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
