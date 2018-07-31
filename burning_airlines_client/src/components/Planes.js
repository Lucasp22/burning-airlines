import React, {Component} from 'react';

import { Link } from 'react-router-dom';

class Planes extends Component {
  render() {
    return(
      <div>
        <CreatPlane />
        <DisplayPlane />
      </div>
    )
  }
}

class CreatPlane extends Component {
  render() {
    return(
      <form>
        <input type="text" placeholder="Name" required autofocus />
        <input type="text" placeholder="Rows" required />
        <input type="integer" placeholder="Column" required />
        <input type="submit" value="Save" />
      </form>
    )
  }
}
////////Need to fix
class DisplayPlane extends Component {
  render() {
      const planes = ['999', 'abc', '123'];
    return(
      //fix this when functional - want link to be dynamic and link to particular flight related to the link using

      //going to take the flight info and loop through to push links for each onto page....

      //this is the flight info in array:
      <ul>
        {planes.map(function(plane) {
          //below is not quote complete, later with more information and values for flights i will need to pull out from the array of objects the flight id or the flight number or something.
          // return <li><Link to={`/flight/${flight}`}>flight:{flight}</Link></li>;
          return <li>plane:{plane}</li>
        })}
      </ul>
    )
  }
}

export default Planes;
