import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SERVER_URL = 'http://localhost:3000/flights.json';

//Parent Comp
class CreateFlights extends Component {
  constructor() {
    super();
    this.state = {flight_name: ''}, {origin: ''}, {destination: ''}, {date: ''}, {plane_id: ''};
    this._handleChangeFlightName = this._handleChangeFlightName.bind(this);
    this._handleChangeOrigin = this._handleChangeOrigin.bind(this);
    this._handleChangeDestination = this._handleChangeDestination.bind(this);
    this._handleChangeDate = this._handleChangeDate.bind(this);
    this._handleChangePlaneId = this._handleChangePlaneId.bind(this);
    //submit
    this._handleSubmitsaveFlight = this._handleSubmitsaveFlight.bind(this);
  }//end of constructor
  _handleChangeFlightName(e) {
    this.setState( {flight_name: e.target.value} );
  }
  _handleChangeOrigin(e) {
    this.setState( {origin: e.target.value} );
  }
  _handleChangeDestination(e) {
    this.setState( {destination: e.target.value} );
  }
  _handleChangeDate(e) {
    this.setState( {date: e.target.value} );
  }
  _handleChangePlaneId(e) {
    this.setState( {plane_id: e.target.value} );
  }
  //submit
    _handleSubmitsaveFlight(e) {
      e.preventDefault();
      this.props.onSubmit( this.state);
    }


  render() {
    return(
<<<<<<< HEAD

      <form onSubmit={ this._handleSubmitsaveFlight }>
=======
       <form onSubmit={ this._handleSubmitsaveFlight }>
>>>>>>> 5a198b9985e87b105e61ae779a2292b8d7bfa2ed
        <label> FlightName  </label>
        <textarea onChange={ this._handleChangeFlightName } value={this.state.flight_name}></textarea>

        <label> Origin   </label>
        <textarea onChange={ this._handleChangeOrigin } value={this.state.origin}></textarea>

        <label> Destination  </label>
        <textarea onChange={ this._handleChangeDestination } value={this.state.destination}></textarea>

        <label> Dates       </label>
        <textarea onChange={ this._handleChangeDate } value={this.state.date}></textarea>

        <label> PlaneId  </label>
        <textarea onChange={ this._handleChangePlaneId } value={this.state.plane_id}></textarea>
        <br/><br/>
        <input type="submit" value="CreatPlane" />
       </form>
    );//end of return
  }// end of render
}; //end of Parent Comp

//Child Comp
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
        setTimeout(fetchFlight, 4000);
      }).catch(err => console.log(err))
    }
    fetchFlight();
  }

  saveFlight(s) {
    axios.post(SERVER_URL, {flight_name: s.flight_name, origin: s.origin, destination: s.destination, date: s.date, plane_id: parseInt(s.plane_id)}).then((results) => {
      console.log("results data: ", results.data);
      this.setState( {flights: [results.data,...this.state.flights]  });
    }).catch(err => console.log(err))
  }
  render(){
    return (
      <div>
        <div style ={{textAlign: "right"}}>
        <Link to={`/planes`} style = {{padding: 15}}>Planes</Link>
        <Link to={`/flights`} style = {{padding: 15}}>Flights</Link>
        <Link to={`#`} style = {{padding: 15}}>Admin</Link>

        </div>
        <h1>Flights</h1>
          <CreateFlights onSubmit={ this.saveFlight } onSubmit={ this.saveFlight } />
          <Display flights={ this.state.flights } />
      </div>
    )
  }
};
//Displayplanes
class Display extends Component {
  render() {
    return (
      <div>
          <ul>
            {this.props.flights.map((s) => <p key={s.id}>{s.name}&nbsp;{s.name}&nbsp;{s.flight_name}&nbsp;{s.origin}&nbsp;{s.destination}&nbsp;{s.date}&nbsp;{s.plane_id}</p>)}
          </ul>
      </div>
    );
  }
};

export default Flights;
