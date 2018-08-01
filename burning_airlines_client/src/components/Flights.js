import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SERVER_URL = 'http://localhost:3000/flights.json';


class CreateFlights extends Component {
  constructor() {
    super();
    this.state = {flight_name: ''}, {origin: ''}, {destination: ''}, {date: ''}, {plane_id: ''};
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }
  _handleChange(e) {
    this.setState( {flight_name: e.target.value} );
    this.setState( {origin: e.target.value} );
    this.setState( {destination: e.target.value} );
    this.setState( {date: e.target.value} );
    this.setState( {plane_id: e.target.value} );

  }

  _handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit( this.state.flight_name);
    this.props.onSubmit( this.state.origin);
    this.props.onSubmit( this.state.destination);
    this.props.onSubmit( this.state.date);
    this.props.onSubmit( this.state.plane_id);
    this.setState({flight_name: ''});
    this.setState({origin: ''});
    this.setState({destination: ''});
    this.setState({date: ''});
    this.setState({plane_id: ''});
  }
  render() {
    return(
      <form onSubmit={ this._handleSubmit }>

        <textarea onChange={ this._handleChange } value={this.state.flight_name}></textarea>
          <textarea onChange={ this._handleChange } value={this.state.origin}></textarea>
            <textarea onChange={ this._handleChange } value={this.state.destination}></textarea>
              <textarea onChange={ this._handleChange } value={this.state.date}></textarea>
                <textarea onChange={ this._handleChange } value={this.state.plane_id}></textarea>
        <input type="submit" value="submit" />
      </form>
    );
  }
};

class Flights extends Component {
  constructor (){
    super();
    this.state = {
      flights: []
    };
    this.saveFlight = this.saveFlight.bind( this );
    const fetchFlight = () => {
      axios.get(SERVER_URL).then( (results) => {
        this.setState({ flights: results.data });
        setTimeout(fetchSecrets, 4000);
      });
    }
    fetchFlights();
  }

  saveFlight(s) {
    axios.post(SERVER_URL, {flight_name: s}, {origin: s}, {destination: s}, {date: s}, {plane_id: s}).then((results) => {
      this.setState( {secrets: [results.data,...this.state.flights]  });
    });
  }
  render(){
    return (
      <div>
        <h1>Flights</h1>
          <CreateFlights onSubmit={ this.saveFlight } />
          <Display flights={ this.state.flights } />
      </div>
    )
  }
};

class Display extends Component {
  render() {
    return (
      <div>
          <ul>
            {this.props.flights.map(s) => <p key={s.id}>{s.name}&nbsp{s.name}&nbsp;{s.flight_name}&nbsp;{s.origin}&nbsp;{s.destination}&nbsp;{s.date}&nbsp;{s.plane_id}</p>}

          </ul>
      </div>
    );
  }
};







export default Flights;
