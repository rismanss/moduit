import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataname: '',
      datapass: '',
      redirect: false
    };
  }

  handleName(e) {
    this.setState({
      dataname: e.target.value
    });
  }

  handlePass(e) {
    this.setState({
      datapass: e.target.value
    });
  }

  handleClick(e) {
    e.preventDefault();
    console.log(this.state.dataname);
    console.log(this.state.datapass);
    axios
      .post('http://103.82.242.188:1323/login', {
        username: this.state.dataname,
        password: this.state.datapass
      })
      .then(response => {
        console.log(response);
        this.setState({
          redirect: true
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleClick.bind(this)}>
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
          {this.state.redirect ? (
            <Redirect to="/dashboard" />
          ) : (
            <p>
              <input type="submit" value="Login" />
            </p>
          )}
        </form>
      </div>
    );
  }
}

export default Login;
