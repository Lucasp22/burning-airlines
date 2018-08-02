import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SERVER_URL = 'http://localhost:3000/planes.json';


class CreatePlanes extends Component {
  constructor() {
    super();
    this.state = {name: ''}, {row: ''}, {column: ''}, {seats: ''};
    this._handleChangePlaneName = this._handleChangePlaneName.bind(this);
    this._handleChangePlaneRow = this._handleChangePlaneRow.bind(this);
    this._handleChangePlaneColumn = this._handleChangePlaneColumn.bind(this);
    this._handleChangePlaneSeats = this._handleChangePlaneSeats.bind(this);
    //////submit
    this._handleSubmitSavePlane = this._handleSubmitSavePlane.bind(this);
  }//end of constructor

  _handleChangePlaneName(e) {
    this.setState( {name: e.target.value} );
  }
  _handleChangePlaneRow(e) {
    this.setState( {row: e.target.value} );
  }
  _handleChangePlaneColumn(e) {
    this.setState( {column: e.target.value} );
  }
  _handleChangePlaneSeats(e) {
    this.setState( {seats: e.target.value} );
  }
/////submit
  _handleSubmitSavePlane(e) {
    e.preventDefault();
    this.props.onSubmit( this.state );
  }

  render() {
    return (
          <form onSubmit={ this._handleSubmitSavePlane }>

           <label> Plane Name </label>
          <textarea onChange={ this._handleChangePlaneName } value={this.state.name}></textarea>

          <label> Rows number </label>
          <textarea onChange={ this._handleChangePlaneRow } value={this.state.row}></textarea>

          <label> Column </label>
          <textarea onChange={ this._handleChangePlaneColumn} value={this.state.column}></textarea>

            <label> Seats </label>
            <textarea onChange={ this._handleChangePlaneSeats } value={this.state.seats}></textarea>

             <input type="submit" value="Create Plane" />
            </form>
    );//end of return
  }// end of render
}; //end of Parent Comp
//////////////////////
class Planes extends Component {
  constructor() {
    super();
    this.state = {
      planes: []
    };
    this.savePlane = this.savePlane.bind( this );
    const fetchPlanes = () => {
      axios.get(SERVER_URL).then( (results) => {
        console.log(results);
        this.setState({ planes: results.data });
        setTimeout(fetchPlanes, 4000);
      })
    }
    fetchPlanes();
  }
  savePlane(s) {
    axios.post(SERVER_URL, {name: s.name, row: s.row, column: s.column, seats: s.seats}).then((results) => {
      this.setState( {planes: [results.data,...this.state.planes]  });
    })
  }
  render(){
    return (
      <div>
        <h1>Planes</h1>
          <CreatePlanes onSubmit={ this.savePlane } onSubmit={ this.savePlane } />
          <Display planes={ this.state.planes } />
      </div>
    )
  }
};///end of Planes comp

class Display extends Component {
  render() {
      return (
        <div>
            <ul>
              {this.props.planes.map((s) => <p key={s.id}>{s.name}&nbsp;{s.row}&nbsp;{s.column}&nbsp;{s.seats}</p>)}
            </ul>
        </div>
      );

  }
};




export default Planes;
