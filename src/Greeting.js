import React, { Component } from 'react';
import GuestGreeting from './GuestGreeting';
import UserGreeting from './UserGreeting';

class Greeting extends Component {
  constructor(props) {
    super(props);
    this.isLoggedIn = props.isLoggedIn;
  }

  render() {
    return (
      <div>
        { this.isLoggedIn ? <UserGreeting/> : <GuestGreeting/>}
      </div>
    )
  }
}

export default Greeting;