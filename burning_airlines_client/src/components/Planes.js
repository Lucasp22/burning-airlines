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
}//end Planes

class CreatPlane extends Component {
  render() {
    return(
      <form>
        <h2>Add Planes</h2>
        <input type="text" placeholder="Name" required autofocus />
        <input type="text" placeholder="Rows" required />
        <input type="integer" placeholder="Column" required />
        <input type="submit" value="Save" />
      </form>
    )
  }
}// end of CreatPlane
////////Need to fix
class DisplayPlane extends Component {
  render() {
  return(
    <div>
    {/* { this.props.planes.map( (s) => <p key={s.id}>{s.name, s.row, s.column}</p> ) } */}
    {/* need to check if works like that */}

    </div>
  );


  }
}///end of DisplayPlane


export default Planes;
