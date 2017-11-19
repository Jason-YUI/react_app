import React, { Component } from 'react';
import LoginButton from './LoginButton';
import LogotButton from './LogoutButton';
import UserGreeting from './UserGreeting';
import GuestGreeting from './GuestGreeting';

class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }
  }

  handleLogotClick = () => {
    this.setState({
      isLoggedIn: false
    });
  };

  handleLoginClick = () => {
    this.setState({
      isLoggedIn: true
    });
  };

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button = null;

    if (isLoggedIn) {
      button = <LogotButton onClick={this.handleLogotClick}/>
    } else {
      button = <LoginButton onClick={this.handleLoginClick}/>
    }
    return (
      <div>
        {isLoggedIn ? <UserGreeting/> : <GuestGreeting/>}
        {button}
      </div>
    );
  }
}

export default LoginControl;