import React, { Component } from 'react';
import axios from 'axios';




class FlightInfo extends Component {

  constructor(){
    super();
    this.state ={
      seats: "Available",
      seat_num: "",
      seat_names: [[]],
      confirmed_seats: ["2B"]
    }

    this.updateSeat = this.updateSeat.bind(this);
    this.chooseSeat = this.chooseSeat.bind(this);

}

componentDidMount(){
  let id = this.props.match.params.id
  console.log(id)
  const SERVER_URL = `http://localhost:3000/planes/${id}.json`
  const fetchPlaneDetails = () => {
  axios.get(SERVER_URL).then((results) => {
    let rows = []
    const rowLength = +results.data.row
    for(let i = 1 ; i< rowLength+1 ; i++){
        rows.push([i+"A",i+"B", i+"C",i+"D"]);
    }
    this.setState({ seat_names: rows})
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

updateSeat(seatNumber){
  console.log(seatNumber)

  let confirmedSeats = this.state.confirmed_seats
  confirmedSeats.push(seatNumber)
  this.setState({
    confirmed_seats:confirmedSeats
  })
}

  render() {
    return(
      <div>
      <Seats onClick = {this.chooseSeat} seat_names = {this.state.seat_names} confirmed_seats = {this.state.confirmed_seats}/>
      <br />
      <ConfirmSeat num = {this.state.seat_num} onClick = {this.updateSeat} confirmed_seats = {this.state.confirmed_seats}/>
      </div>
    )
  }
}


class Seats extends Component {
  constructor () {
    super();
    this.state ={
      seat_num: "",
      selected_seat: ""
    }
    this._handleSubmit = this._handleSubmit.bind(this);
  }


  _handleSubmit(e){
    e.preventDefault()
    this.setState({
      selected_seat: e.target.value
    })
    this.props.onClick(e.target.value)
  }

  render(){
    return(
      <div>
      <table>
      <thead>


</thead>
<tbody>
  {this.props.seat_names.map((seats_row)=><TableRow seats_row = {seats_row} onClick = {this._handleSubmit} confirmed_seats ={this.props.confirmed_seats} />)}
</tbody>
</table>
</div>
    )
  }
}

function TableRow (props) {


  return (
    <tr>{props.seats_row.map((seat)=> {
      return <td> <input type = "button" value ={props.confirmed_seats.includes(seat)? "X" : seat } onClick = {props.onClick} style={{ width: 100, fontSize: 50, padding: 50 }}/></td>
    })}</tr>
  )
}

class ConfirmSeat extends Component {
  constructor(){
    super();
    this.state = {

    }
  }



  render(){
    return(
      <div>

      <div>
      <span> {this.props.num} </span>
      <input type="button" value ="Select Seat" onClick = {() => this.props.onClick(this.props.num)}/>
      </div>

      </div>
    )
  }
}
export default FlightInfo;
