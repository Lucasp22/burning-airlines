import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
// import Home from './components/Home';
// import FAQ from './components/FAQ';
// import Character from './components/Character'
import FlightInfo from './components/FlightInfo'


const Routes = (
  <Router>
    <div>

      <Route exact path = "/flightinfo" component = {FlightInfo} />
    </div>
  </Router>
)

export default Routes;
