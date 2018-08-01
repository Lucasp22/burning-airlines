import React, { Component } from 'react';
import axios from 'axios';

let id = 1;

const SERVER_URL = `http://localhost:3000/planes/${id}.json`

class FlightInfo extends Component {
  constructor(){
    super();
    this.state ={
      seats: "Available",
      seat_num: "",
      rows: []
    }
    // this.chooseSeat = this.chooseSeat.bind(this);
    // this.updateSeat = this.updateSeat.bind(this);
    const fetchPlaneDetails = () => {
    axios.get(SERVER_URL).then((results) => {
      console.log(results.row)
      const rows = new Array(+results.row)
      this.setState({ rows: rows})
      setTimeout(fetchPlaneDetails, 4000);
    })
  }
    fetchPlaneDetails();
}


chooseSeat(seatNumber){
  this.setState({
    seat_num: seatNumber

})
}
// updateSeat(taken) {
//   this.setState({
//     seats: taken
//   })
// }

  render() {
    return(
      <div>
      <h1> Flight Info Coming Soon </h1>
      <Seats onClick = {this.chooseSeat} rows = {this.state.rows       }/>
      <br />
      <ConfirmSeat num = {this.state.seat_num} onClick = {this.updateSeat}/>
      </div>
    )
  }
}


class Seats extends Component {
  constructor () {
    super();
    this.state ={
      seats: 'available',
      seat_num: ""
    }
    this._handleSubmit = this._handleSubmit.bind(this);
  }


  _handleSubmit(seatData){
    this.setState({
    seat_num: seatData
    })

    this.props.onClick(this.state.seat_num)

  }

  render(){
    return(
      <div>
      <table>
      <thead>
      <tr>
      <th></th>
      <th>A</th>
<th>B</th>
<th>C</th>
<th>D</th>
</tr>
</thead>
<tbody>
<tr>
<th></th>




</tr>
</tbody>
</table>
</div>
    )
  }
}

class ConfirmSeat extends Component {
  constructor(){
    super();
    this.state = {
      seats: "Available"
    }
  }
  _handleSubmit(taken) {
    this.setState({
      seats: taken
    })
    this.props.onClick(this.state.seats)
  }
  render(){
    return(
      <div>

      <div>
      <span> {this.props.num} </span>
      <input type="button" value ="Select Seat" onClick = {() => this._handleSubmit('      X       ')}/>
      </div>

      </div>
    )
  }
}
export default FlightInfo;
