import React, {Component} from 'react';
//need to install npm package once i have file so that i can use the below:
import { Link } from 'react-router-dom';

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
          {this.state.resultFlights.map( (result) => <li>{result.flight_name}</li>)}
        </ul>

      </div>
    )
  }
}


class SearchForm extends Component {
<<<<<<< HEAD
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


        <input type="submit" value="Go" />
=======
  render() {
    return(
      <form>
        <input type="text" placeholder="Origin" required autofocus/>
        <input type="text" placeholder="Destination" required/>
        <input type="submit" value="Go"/>
>>>>>>> b70f75d126f3e57c4e4d53b565ed3dc1b359f483
      </form>
    )
  }
}

class FlightResults extends Component {
  render() {
<<<<<<< HEAD

=======
      const flights = ['QF1', 'VG2', 'JS9'];
>>>>>>> b70f75d126f3e57c4e4d53b565ed3dc1b359f483
    return(
      //fix this when functional - want link to be dynamic and link to particular flight related to the link using

      //going to take the flight info and loop through to push links for each onto page....

      //this is the flight info in array:
      // <ul>
      //   {flights.map(function(flight) {
      //     //below is not quote complete, later with more information and values for flights i will need to pull out from the array of objects the flight id or the flight number or something.
      //     return <li><Link to={`/flight/${flight}`}></li>;
      //   })};
      // </ul>



      <Link to="/flight">Flights</Link> //this will be the only link you have to hard code cos you will wrap the loop around this, so it will just print however many you have
    )
  }
}

export default SearchFlights;
