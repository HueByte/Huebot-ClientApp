import React, { Component } from 'react';
import './App.css';
import MainPage from './pages/HomePage/MainPage';
import Login from './pages/Login/Login';
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/Login">
          <Login />
        </Route>
      </Switch>
    );
  }
}

export default App;
