import React, { Component } from 'react'
import SkateBoardList from './components/SkateboardProducts/SkatesList';
import LandingPage from './components/landingPage';
import {Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Details from './components/Details'
import Modal from './components/Modal'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
      <Navbar/>
      <Switch>
      
    <Route exact path="/" component={LandingPage}/>
    <Route  path="/skateboardlist" component={SkateBoardList}/>
    <Route  path="/details" component={Details}/>
    </Switch>
    <Modal/>
    <Footer/>
    </React.Fragment>
    )
  }
}
