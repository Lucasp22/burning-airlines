import React, {Component} from 'react';

import { Link } from 'react-router-dom';

class Flights extends Component {
  render() {
    return(
      <div>
      <CreatFlight />
      < />
      <DisplayFlight /div>
    );

  }
}

class CreatFlight {
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
class DisplayFlight {
  constructor() {

  }
}

export default Flights;
