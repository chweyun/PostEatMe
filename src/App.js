import React from 'react';
import { Routes, Route } from "react-router-dom";
import Main from './pages/Main.jsx';
import Login from './pages/Login.jsx';
import Memo from './pages/Memo.jsx';
import Share from './pages/Share.jsx';
import Open from './pages/Open.jsx'
import './App.css';

const App = () => {
  return <Routes>
    <Route path="/" element={<Main />}></Route>
    <Route path="/login" element={<Login />}></Route>
    <Route path="/memo" element={<Memo />}></Route>
    <Route path="/open" element={<Open />}></Route>
  </Routes>
};

export default App;