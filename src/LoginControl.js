import React, { Component } from 'react';

class LoginControl extends Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = { isLoggedIn: false }
    }

    handleLogoutClick() {
        this.setState({ isLoggedIn: true })
    }

    handleLoginClick() {
        this.setState({ isLoggedIn: false })
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;

        let button = null;
        if(isLoggedIn) {
            button = <LogoutButton onClick={ this.handleLogoutClick }/>
        } else {
            button = <LoginButton onClick={ this.handleLoginClick }/>
        }

        return (
          <div>
              <Greeting isLoginIn={true}/>
              { button }
          </div>
        );
    }
}

function UserGreeting(props) {
    return <h2>Welcome back</h2>
}

function GuestGreeting(props) {
    return <h2>Please sign in</h2>
}

function Greeting(props) {
    const isLoggedIn = props.isLoginIn;

    if(isLoggedIn) {
        return <UserGreeting/>;
    }
    return <GuestGreeting/>
}

function LoginButton(props) {
    return (
        <button onClick={ props.onClick }>
            Login
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={ props.onClick }>
            Logout
        </button>
    )
}

export default LoginControl;