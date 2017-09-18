import React, { Component } from 'react';
import './App.css';
import App from "./welcome";
import Comment from './Comment';
import Clock from './Clock';
import Toggle from './Toggle'
import LoginControl from './LoginControl';
import Mailbox from './Mailbox';
import WarningPage from './WarningPage';

class CommentBox extends Component {
    render() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <App name="Sara"/>
                <Comment date={ comment.date }
                         text={ comment.text }
                         author={ comment.author }>
                </Comment>
                <Clock/>
                <Toggle/>
                <LoginControl/>
                <Mailbox unreadMessages={ messages }/>
                <WarningPage/>
            </div>
        );
    }
}

const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'hello 包子!',
        avatarUrl: 'http://placekitten.com/g/64/64'
    }
};

const messages = ['React', 'facebook'];

export default CommentBox;