import React, {Component} from 'react';
//need to install npm package once i have file so that i can use the below:
import { Link } from 'react-router-dom';

class SearchFlights extends Component {
  render() {
    return(
      <div>
        <h1>Search Flights</h1>
        <SearchForm />
        {/* this is like gallery */}
        <FlightResults />
      </div>
    )
  }
}

class SearchForm extends Component {
  render() {
    return(
      <form>
        <input type="text" placeholder="Origin" required autofocus />
        <input type="text" placeholder="Destination" required />
        <input type="submit" value="Go" />
      </form>
    )
  }
}

class FlightResults extends Component {
  render() {
      const flights = ['QF1', 'VG2', 'JS9'];
      // [
      // {date: "02/08/2018", Flight: 'QF1', FromTo: "SYD > MEL", plane: 747},{date: "03/08/2018", Flight: 'JS002', FromTo: "SYD > JFK", plane: 747},{date: "04/08/2018", Flight: 'JAL178', FromTo: "SYD > NRT", plane: 747}
      // ]


    return(
      //fix this when functional - want link to be dynamic and link to particular flight related to the link using

      //going to take the flight info and loop through to push links for each onto page....

      //this is the flight info in array:

      <div>
        <p>Flight Search Results:</p>
        <ul>
          {flights.map(function(flight) {
            //below is not quote complete, later with more information and values for flights i will need to pull out from the array of objects the flight id or the flight number or something.
            return <li>Flight: <Link to={`/flight`}>{flight}</Link></li>;
            // return <li>flight:{flight}</li>
          })}
        </ul>
    </div>
    )
  }
}

export default SearchFlights;
