import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
// import Home from './components/Home';
// import FAQ from './components/FAQ';
// import Character from './components/Character'
import FlightInfo from './components/FlightInfo'
import SearchFlight from './components/SearchFlight'


const Routes = (
  <Router>
    <div>

      <Route path = "/flightinfo" component = {FlightInfo} />
      <Route exact path="/searchflight" component={SearchFlight} />

    </div>
  </Router>
)

export default Routes;
