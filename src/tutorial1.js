import React, { Component } from 'react';
import CommentList from './tutorial2';
// import CommentForm from './tutorial2';
import './App.css';

class CommentBox extends Component {
    render() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList />
            </div>
        );
    }
}

export default CommentBox;