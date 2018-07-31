import React, {Component} from 'react';

import { Link } from 'react-router-dom';

class Flights extends Component {
  render() {
    return(
      <div>
      <CreatFlight />
      <DisplayFlight />
      < div/>
    );
  }
}

class CreatFlight extends Component {
  render() {
    return(
      <form>
      <input type="text" placeholder="Flight name" required autofocus />
      <input type="text" placeholder="Origin" required />
      <input type="text" placeholder="Destination" required  />
      <input type="date" placeholder="Date" required />
      <input type="integer" placeholder="Plane_id" required />
      <input type="submit" value="Go" />
      </form>
    );
  }
}
class DisplayFlight extends Component {
  constructor() {

    <div>
    { this.props.planes.map( (s) => <p key={s.id}>{s.flight_name, s.origin, s.destination, s.date, s.plane_id}</p> ) }//need to check if works like that
    </div>

  }
}

export default Flights;
