import React, { Component } from 'react'
import Products from './components/Products';
import LandingPage from './components/landingPage';
import {Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
export default class App extends Component {
  render() {
    return (
      <React.Fragment>
      <Navbar/>
      <Switch>
    <Route exact path="/" component={LandingPage}/>
    <Route  path="/products" component={Products}/>
    </Switch>
    </React.Fragment>
    )
  }
}
