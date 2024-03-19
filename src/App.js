import React from 'react';
import './style.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import UserDetails from './components/UserDetails';
import Notfound from './components/Notfound';
export default function App() {
  let id = '123';
  return (
    <div>
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to={`/User/${id}`}>User</Link>
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route exact path="/User/:id" Component={UserDetails}></Route>
          <Route path="*" Component={Notfound}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
