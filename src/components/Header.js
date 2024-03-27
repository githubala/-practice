import React, {useEffect} from "react";

import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Home from './Home';
import UserDetails from './UserDetails';
import Notfound from './Notfound';
import User from './User';

const Header = () =>{
    useEffect(()=>{
        console.log('onload, onupdate, on unload')
        fetch('https://jsonplaceholder.typicode.com/todos').then((response)=>{
          if(response.ok){
            return response.json();
          }
        }).then((responseJson)=>{
          //do something with response
          console.log(responseJson);
        }).catch((error)=>{
          console.log(error)
        })
    })
    let id = '123';

    return (
        <div className='AppClr'>
            123
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to='/User'>User</Link>
        {/* <Link to={`/User/${id}`}>User</Link> */}
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/User" Component={User}></Route>
          <Route exact path="/User/:id" Component={UserDetails}></Route>
          <Route path="*" Component={Notfound}></Route>
        </Routes>
      </BrowserRouter> 
    </div>
    )
}

export default Header;