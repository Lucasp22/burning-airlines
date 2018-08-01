import React, {Component} from 'react';
//need to install npm package once i have file so that i can use the below:
import axios from 'axios';
import { Link } from 'react-router-dom';
const SERVER_URL = 'http://localhost:3000/flight.json';

class SearchFlights extends Component {
  constructor() {
    super();
    this.state = {
       flights: [{flight: 'QF1'}, {flight: 'VG2'}, {flight: 'JS9'}]
  }
}

  //this is syntax for fat arrow function.
  getFlights = (origin, destination) => {
    axios.get(SERVER_URL).then(function(results){
      console.log(results);
    })
  }

  render() {
    return(
      <div>
        <h1>Search Flights</h1>
        <SearchForm onSubmit={this.getFlights}/>
        {/* this is like gallery */}
        <FlightResults flights={this.props.flights} />
      </div>
    )
  }
}

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {query: ''}
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit("arg1", "arg2");
  }

  render() {
    return(
      <form onSubmit={this._handleSubmit}>
        <input type="text" placeholder="Origin" required autoFocus />
        <input type="text" placeholder="Destination" required />
        <input type="submit" value="Go" />
      </form>
    )
  }
}

class FlightResults extends Component {
  render() {
      const flights = ['QF1', 'VG2', 'JS9'];



    return(
      //fix this when functional - want link to be dynamic and link to particular flight related to the link using

      //going to take the flight info and loop through to push links for each onto page....

      //this is the flight info in array:

      <div>
        <p>Flight Search Results:</p>
        <ul>
          {flights.map(function(flight) {
            //below is not quite complete, later with more information and values for flights i will need to pull out from the array of objects the flight id or the flight number or something.
            return <li>Flight: <Link to={`/flight`}>{flight}</Link></li>;
            // return <li>flight:{flight}</li>
          })}
        </ul>
    </div>
    )
  }
}

export default SearchFlights;
