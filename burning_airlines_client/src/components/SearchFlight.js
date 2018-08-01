import React, {Component} from 'react';
//need to install npm package once i have file so that i can use the below:
import axios from 'axios';
import { Link } from 'react-router-dom';

const SERVER_URL = 'http://localhost:3000/flights.json';

class SearchFlights extends Component {
  constructor(props) {
    super(props);
    this.state = {
       // flights: [{flight: 'QF100'}, {flight: 'VG2'}, {flight: 'JS9'}]
       flights: []
       // origin: '',
       // destination: ''
  };
   this.getflights = this.getFlights.bind(this);

}

  //this is syntax for fat arrow function.
  //pulled in all my json data
  getFlights = (origin, destination) => {
    // console.log("something");
    axios.get(SERVER_URL).then(function(results){
      // const userSearch = results.map(function(data) {
      // return<li>Flights: <Link to={`/flight`}>{results.data.flight_name}</Link></li>;
      // })
      console.log("results",results);

      // this.setState({flights: results.data});
      //want to be able to take away the hard coding above,
      //let user input their origin and Destination
      //update state with results setState flights ======== whatever.......

      //inside here need this.setState for search flights, do something with the results and map it or get it only screen
    })

  }


  render() {
    return(
      <div>
        <h1>Search Flights</h1>
        <SearchForm onSubmit={this.getFlights}/>
        {/* this is like gallery */}
        <FlightResults flights={this.state.flights} />
      </div>
    )
  }
}

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {query: ''}
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleInput = this._handleInput.bind(this);
  }

  _handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.query);
  }

  _handleInput(event) {
    console.log(event.target.value);
     this.setState({query: event.target.value})
  }

  render() {
    return(
      <form onSubmit={this._handleSubmit}>
        <input type="text" placeholder="Origin" required autoFocus onInput={this._handleInput} />
        <input type="text" placeholder="Destination" required onInput={this._handleInput} />
        <input type="submit" value="Go" />
      </form>
    )
  }
}

class FlightResults extends Component {
  render() {
      // const flights = ['QF1', 'VG2', 'JS9'];
    return(
      //fix this when functional - want link to be dynamic and link to particular flight related to the link using

      //going to take the flight info and loop through to push links for each onto page....

      //this is the flight info in array:

      <div>
        <p>Flight Search Results:</p>
        <ul>
          {this.props.flights.map(function(f) {
            //below is not quite complete, later with more information and values for flights i will need to pull out from the array of objects the flight id or the flight number or something.
            return <li>Flight: <Link to={`/flight`}>{f.flight}</Link></li>;
            // return <li>flight:{flight}</li>
          })}
        </ul>
    </div>
    )
  }
}

export default SearchFlights;
