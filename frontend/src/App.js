import './App.css';
import Homepage from './components/homepage/homepage';
import Login from './components/login/login';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from 'react';

function App() {

  const [user, setLoginUser] = useState({})
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
