import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



class FlightInfo extends Component {

  constructor(){
    super();
    this.state ={
      seats: "Available",
      seat_num: "",
      seat_names: [[]],
      confirmed_seats: [],
      name: ""
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
    const name = results.data.name
    let rows = []
    const rowLength = +results.data.row
    for(let i = 1 ; i< rowLength+1 ; i++){
        rows.push([i+"A",i+"B", i+"C",i+"D"]);
    }
    this.setState({ seat_names: rows, name: name})
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

updateSeat(seatNumber, bgColor){

  let confirmedSeats = this.state.confirmed_seats
  confirmedSeats.push(seatNumber)
  this.setState({
    confirmed_seats:confirmedSeats
  })
}

  render() {
    return(

      <div>
      <div style ={{textAlign: "right"}}>
      <Link to={`/planes`} style = {{padding: 15}}>Planes</Link>
      <Link to={`/flights`} style = {{padding: 15}}>Flights</Link>
      <Link to={`/searchflight`} style = {{padding: 15}}>Search</Link>
      <p style = {{padding: 15}}>Bob</p>
      </div>
      <h1 style ={{textAlign: "center"}}>{this.state.name}</h1>
      <ConfirmSeat num = {this.state.seat_num} onClick = {this.updateSeat } confirmed_seats = {this.state.confirmed_seats} />
      <Seats onClick = {this.chooseSeat} seat_names = {this.state.seat_names} confirmed_seats = {this.state.confirmed_seats}/>
      <br />

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
      <div style ={{marginLeft: 450}}>
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
      return <td> <input type = "button" value ={props.confirmed_seats.includes(seat)? "X"  : seat } onClick = {props.onClick} style={{backgroundColor: props.confirmed_seats.includes(seat)?  "red": "green", width:100, fontSize: 20, marginLeft: 20, marginRight: 20, color: "white", borderColor: "black", borderWidth: 5}}/></td>
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
      <div >


      <div style={{textAlign:"center", margin: 50}}>
      <span> {this.props.num} </span>
      <input type="button" value ="Select Seat" onClick = {() => this.props.onClick(this.props.num) }/>
      </div>

      </div>
    )
  }
}
export default FlightInfo;
