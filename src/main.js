import React, { Component } from 'react';
import './App.css';
import Comment from './Comment';
import Clock from './Clock';
import Toggle from './Toggle'
import Mailbox from './Mailbox';
import WarningPage from './WarningPage';
import NumberList from './NumberList';
import Blog from './Blog';
import NameForm from './NameForm';
import FlavorForm from './FlavorForm';
import Reservation from './Reservation';
import Calculator from './Calculator';
import LikeButton from './LikeButton';
import Computer from './Computer';
import ListMap from './list_map';
import Post from "./Post";
import Card from "./Card";
import ActionLink from "./ActionLink";
import LoginControl from './LoginControl';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App';
import todoApp from './reducer/reducer';

let store = createStore(todoApp);

class CommentBox extends Component {
  render() {
    return (
      <div className="commentBox">
        <Provider store={store}>
          <App />
        </Provider>
        <h1>Comments</h1>
        <Comment date={ comment.date }
        text={ comment.text }
        author={ comment.author }>
        </Comment>
        <Toggle/>
        <Mailbox unreadMessages={ messages }/>
        <WarningPage/>
        <NumberList numbers={ numbers }/>
        <Blog post={ post }/>
        <NameForm/>
        <FlavorForm/>
        <Reservation/>
        <Calculator/>
        <LikeButton wordings={{likedText: '已赞', unlikedText: '赞'}}/>
        <br/>
        <Computer/>
        <ListMap/>
        <Post content={123}/>
        <Card>
        <h2>React.js 小书</h2>
        <p>开源、免费、专业、简单</p>
        订阅： <input/>
        </Card>
        <Clock/>
        <ActionLink/>
        <LoginControl/>
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