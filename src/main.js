import React, { Component } from 'react';
import './App.css';
import App from "./welcome";
import Comment from './Comment';

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

export default CommentBox;