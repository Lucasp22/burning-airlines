import React, { Component } from 'react';

class FlightInfo extends Component {
  constructor(){
    super();
    this.state ={
      seat_num: ""
    }
    this.chooseSeat = this.chooseSeat.bind(this);
  }


chooseSeat(seatNumber){
  this.setState({
    seat_num: seatNumber

})
}

  render() {
    return(
      <div>
      <h1> Flight Info Coming Soon </h1>
      <Seats onClick = {this.chooseSeat}/>
      <br />
      <ConfirmSeat num = {this.state.seat_num}/>
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
      <th>21</th>
      <td><input type="button" value= {this.state.seats} onClick = {() => this._handleSubmit('21A')}/></td>
      <td><input type="button" value= {this.state.seats} onClick = {() => this._handleSubmit('21B')}/></td>
      <td><input type="button" value= {this.state.seats} onClick = {() => this._handleSubmit('21C')}/></td>
      <td><input type="button" value= {this.state.seats} onClick = {() =>this._handleSubmit('21D')}/></td>
      </tr>

      <tr>
      <th>22</th>
      <td><input type="button" value= {this.state.seats} onClick = {() => this._handleSubmit('22A')}/></td>
      <td><input type="button" value= {this.state.seats} onClick = {() => this._handleSubmit('22B')}/></td>
      <td><input type="button" value= {this.state.seats} onClick = {() => this._handleSubmit('22C')}/></td>
      <td><input type="button" value= {this.state.seats} onClick = {() => this._handleSubmit('22D')}/></td>
      </tr>

      <tr>
      <th>23</th>
      <td><input type="button" value= {this.state.seats} onClick = {() => this._handleSubmit('23A')}/></td>
      <td><input type="button" value= {this.state.seats} onClick = {() => this._handleSubmit('23B')}/></td>
      <td><input type="button" value= {this.state.seats} onClick = {() => this._handleSubmit('23C')}/></td>
      <td><input type="button" value= {this.state.seats} onClick = {() => this._handleSubmit('23D')}/></td>
      </tr>
      <tr>
      <th>24</th>
      <td><input type="submit" value= {this.state.seats} onClick = {() => this._handleSubmit('24A')}/></td>
      <td><input type="submit" value= {this.state.seats} onClick = {() => this._handleSubmit('24B')}/></td>
      <td><input type="submit" value= {this.state.seats} onClick = {() => this._handleSubmit('24C')}/></td>
      <td><input type="submit" value= {this.state.seats} onClick = {() => this._handleSubmit('24D')}/></td>
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
    }
  }
  render(){
    return(
      <div>

      <div>
      <span> {this.props.num} </span>
      <input type="submit" value ="Select Seat"/>
      </div>

      </div>
    )
  }
}
export default FlightInfo;
