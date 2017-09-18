import React, { Component } from 'react';

class Mailbox extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const unreadMessages = this.props.unreadMessages;

        return (
            <div>
                <h1>Hello World!</h1>
                { unreadMessages.length > 0 &&
                <h2>
                    you have { unreadMessages.length } unread messages.
                </h2>
                }
            </div>
        )
    }
}

export default Mailbox;