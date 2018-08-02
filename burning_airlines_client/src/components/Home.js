import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
  render() {
    return(
      <div>
      <LoginForm />
      </div>
    );
  }
};
class LoginForm extends Component {
  render() {
    return(
      <form>
        <h2>Login</h2>
      <input name="user_name"type="text" placeholder="User Name" required autoFocus />
      <input type="text" placeholder="Password" required />
      <Link to={`/searchflight`}>
        <input  name="submit" type="submit" value="Submit" />
      </Link>
      </form>
    );
  }
}
export default Home;
