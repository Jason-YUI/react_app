import React, { Component } from 'react';

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

export default Greeting;