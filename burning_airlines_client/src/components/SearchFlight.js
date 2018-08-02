import React, {Component} from 'react';
//need to install npm package once i have file so that i can use the below:
import axios from 'axios';
import { Link } from 'react-router-dom';

const SERVER_URL = 'http://localhost:3000/flights.json';

class SearchFlights extends Component {
  constructor(props) {
    super(props);
    this.state = {
       flights: [],
       resultFlights: []
  };
  this.getFlights = this.getFlights.bind(this);

}

//this is syntax for fat arrow function.
//pulled in all my json data
getFlights(origin, destination){
  // console.log(origin, destination);
  // console.log("something");
  axios.get(SERVER_URL).then((results) => {
    console.log(results.data);
    const searchResult = results.data;
    let resultFlights = []
    for (var i = 0; i < searchResult.length; i++) {
      // console.log(searchResult[i]);
      console.log(searchResult[i].origin, origin, searchResult[i].destination , destination);
      if ((searchResult[i].origin === origin) && (searchResult[i].destination === destination)) {
      resultFlights.push(searchResult[i]);
      }
    }
    console.warn(resultFlights)
    this.setState({resultFlights: resultFlights})
//list o n screen
//making the getFlights array needs to be passed to search results as a prop
    // console.log(searchResult);

    })
    // return  <li>Flights: <Link to={`/flightinfo/:id`}>{data}</Link></li>;

    // this.setState({ results.data })
    // const userSearch = results.map(function(data) {
    // return<li>Flights: <Link to={`/flight`}>{results.data.flight_name}</Link></li>;
    // })
    // console.log("results",results);

    // this.setState({flights: results.data});
    //want to be able to take away the hard coding above,
    //let user input their origin and Destination
    //update state with results setState flights ======== whatever.......

    //inside here need this.setState for search flights, do something with the results and map it or get it only screen
  }




  render() {
    return(
      <div>
        <h1>Search Flights</h1>
        <SearchForm onSubmit={this.getFlights}/>
        {/* this is like gallery */}
        <FlightResults flights={this.state.flights} />
        <ul>
          {this.state.resultFlights.map( (result) => <Link to={`/flightinfo/${result.id}`}><li>{result.flight_name}</li></Link>)}
        </ul>

      </div>
    )
  }
}


class SearchForm extends Component {
  constructor() {
    super();
    this.state = {origin: '', destination: ''}
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleOriginChange = this._handleOriginChange.bind(this);
    this._handleDestinationChange = this._handleDestinationChange.bind(this);

  }

  _handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.origin, this.state.destination);
  }

    _handleOriginChange(event) {
      // console.log(event.target.value);
      this.setState( { origin: event.target.value } );
      console.log(this.state);
    }

    _handleDestinationChange(event) {
      // console.log(event.target.value);
    this.setState( { destination: event.target.value } );
    console.log(this.state);
    }


  render() {
    return(
      <form onSubmit={this._handleSubmit}>

        <input type="text" placeholder="Origin" required autoFocus onInput={this._handleOriginChange} />
        <input type="text" placeholder="Destination" required onInput={this._handleDestinationChange} />


        {/*TODO <p>Origin</p>
          <select value={this.state.value} onChange={this._handleOriginChange}>
          <option value=""></option>
          <option value="SYD">SYD</option>
          <option value="MEL">MEL</option>
          <option value="NRT">NRT</option>
          </select>
        <p>Destination</p>
          <select value={this.state.value} onChange={this._handleDestinationChange}>
          <option value=""></option>
          <option value="SYD">SYD</option>
          <option value="MEL">MEL</option>
          <option value="NRT">NRT</option>
          </select> */}


        <input type="submit" value="Seach Flight" />
      </form>
    )
  }
}

class FlightResults extends Component {
  render() {

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
