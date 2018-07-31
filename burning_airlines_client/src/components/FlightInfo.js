import React, { Component } from 'react';

class FlightInfo extends Component {
  render() {
    return(
      <div>
      <h1> Flight Info Coming Soon </h1>
      <Seats />
      <br />
      <ConfirmSeat />
      </div>
    )
  }
}

class Seats extends Component {
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
      <td><input type="submit" value= "Sam"/></td>
      <td><input type="submit" value= "Sam"/></td>
      <td><input type="submit" value= "Sam"/></td>
      <td><input type="submit" value= "Sam"/></td>
      </tr>

      <tr>
      <th>22</th>
      <td><input type="submit" value= "Sam"/></td>
      <td><input type="submit" value= "Sam"/></td>
      <td><input type="submit" value= "Sam"/></td>
      <td><input type="submit" value= "Sam"/></td>
      </tr>

      <tr>
      <th>23</th>
      <td><input type="submit" value= "Sam"/></td>
      <td><input type="submit" value= "Sam"/></td>
      <td><input type="submit" value= "Sam"/></td>
      <td><input type="submit" value= "Sam"/></td>
      </tr>
      <tr>
      <th>24</th>
      <td><input type="submit" value= "Sam"/></td>
      <td><input type="submit" value= "Sam"/></td>
      <td><input type="submit" value= "Sam"/></td>
      <td><input type="submit" value= "Sam"/></td>
      </tr>
      </tbody>
      </table>
      </div>
    )
  }
}

class ConfirmSeat extends Component {
  render(){
    return(
      <div>

      <div>
      <span> Seat chosen here </span>
      <input type="submit" value ="Select Seat"/>
      </div>

      </div>
    )
  }
}
export default FlightInfo;
