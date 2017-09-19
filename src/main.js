import React, { Component } from 'react';
import './App.css';
import App from "./welcome";
import Comment from './Comment';
import Clock from './Clock';
import Toggle from './Toggle'
import LoginControl from './LoginControl';
import Mailbox from './Mailbox';
import WarningPage from './WarningPage';
import NumberList from './NumberList';
import Blog from './Blog';
import NameForm from './NameForm';
import FlavorForm from './FlavorForm';
import Reservation from './Reservation';
import Calculator from './Calculator';

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
                <NumberList numbers={ numbers }/>
                <Blog post={ post }/>
                <NameForm/>
                <FlavorForm/>
                <Reservation/>
                <Calculator/>
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

const numbers = [1, 2, 3, 4, 5];

const post = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

export default CommentBox;