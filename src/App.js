import React, { Component } from 'react'
import Products from './components/Products';
import LandingPage from './components/landingPage';
import {Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
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
    <Footer/>
    </React.Fragment>
    )
  }
}
