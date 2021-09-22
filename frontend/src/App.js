import logo from './logo.svg';
import './App.css';
import React from "react"
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import Home from './components/Home/home';
import Game from './components/Game/game';

const App = () =>{
  return (
    <BrowserRouter>
      <Switch>
        <Route  path="/home" exact component = {Home} />
        <Route  path="/game" exact component = {Game} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
