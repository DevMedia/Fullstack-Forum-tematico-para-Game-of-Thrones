import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import Login from './containers/Login';
import SignUp from './containers/SignUp';

class App extends Component {
  handleChange = name => event => {
    console.log(event.target.value);
  }
  render() {
    return (
      <div className="App">
        <SignUp />
      </div>
    );
  }
}

export default App;
