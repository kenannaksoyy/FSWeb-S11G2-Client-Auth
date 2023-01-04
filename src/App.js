import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Header from './comps/Header';
import Login from './comps/Login';
import Home from './comps/Home';
import AddFriend from './comps/AddFriend';
import FriendList from './comps/FriendList';
import Logout from './comps/Logout';
import PrivateRoute from './comps/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Header/>

      <Route path='/' component={Home} exact/>
      <Route path='/login' component={Login}/>
      <PrivateRoute path='/addfriend' component={AddFriend}/>
      <PrivateRoute path='/friendlist' component={FriendList}/>
      <PrivateRoute path='/logout' component={Logout}/>
    </div>
  );
}

export default App;
