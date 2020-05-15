import React from 'react';
import LandingPage from './components/landingPage';
import {Switch, Route} from 'react-router-dom';


import Products from './components/Products';

const Main =()=>(
    <Switch>
    <Route exact path="/" component={LandingPage}/>
    <Route exact path="/products" component={Products}/>
    </Switch>

)
export default Main;