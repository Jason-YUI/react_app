import React, { Component } from 'react';

class Mailbox extends Component {
    constructor(props) {
        super(props);
        this.state = { isLoginIn: true }
    }

    render() {
        const unreadMessages = this.props.unreadMessages;
        const isLoggedIn = this.state.isLoginIn;

        return (
            <div>
                <h1>Hello World!</h1>
                { unreadMessages.length > 0 &&
                <h2>
                    you have { unreadMessages.length } unread messages.
                </h2>
                }
                { isLoggedIn ? (
                    <LogoutButton/>
                ) : (
                    <LoginButton/>
                )}
            </div>
        )
    }
}

function LogoutButton(props) {
    return (
        <h4>222</h4>
    )
}

function LoginButton(props) {
    return (
        <h4>333</h4>
    )
}

export default Mailbox;