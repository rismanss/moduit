import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataname: '',
      datapass: ''
    };
  }

  handleName(e) {
    e.preventDefault();
    this.setState({
      dataname: e.target.value
    });
  }

  handlePass(e) {
    e.preventDefault();
    this.setState({
      datapass: e.target.value
    });
  }

  render() {
    console.log(this.state.dataname);
    console.log(this.state.datapass);
    axios
      .post('http://103.82.242.188:1323/login', {
        username: this.state.dataname,
        password: this.state.datapass
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
    return (
      <div>
        <p>
          <input
            type="text"
            value={this.state.dataname}
            onChange={this.handleName.bind(this)}
          />
        </p>
        <p>
          <input
            type="password"
            value={this.state.datapass}
            onChange={this.handlePass.bind(this)}
          />
        </p>
        <p>
          <button>
            <Link to="/dashboard">login</Link>
          </button>
        </p>
      </div>
    );
  }
}

export default Login;
