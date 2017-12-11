import React, { Component } from 'react';
import './App.css';
import Comment from './Comment';
import Clock from './Clock';
import Toggle from './Toggle'
import Mailbox from './Mailbox';
import WarningPage from './WarningPage';
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
import WelcomeDialog from './WelcomeDialog';
import FilterableProductTable from './FilterableProductTable';
import MessageList from './MessageList';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App';
import Counter from './containers/Counter';
import counter from './reducer/countReducer';
import todoApp from './reducer/reducer';
import Page from './Page';
import Greeting from "./Greeting";
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from "./action/actions";

let store2 = createStore(todoApp);
//打印初始状态
// console.log('1', store.getState());

//每次 state 更新时，打印日志
//注意 subscribe() 返回一个函数用来注销监听器
// let unsubscribe = store.subscribe(() =>
//   console.log('2', store.getState())
// );

// store.dispatch(addTodo('Learn about action'));
// store.dispatch(addTodo('Learn about reducers'));
// store.dispatch(addTodo('Learn about store'));
// store.dispatch(completeTodo(0));
// store.dispatch(completeTodo(1));
// store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

// unsubscribe();

//计数器

const store1 = createStore(counter);

class CommentBox extends Component {
  render() {
    return (
      <div className="commentBox">
        <Counter
          value={store1.getState()}
          onIncrement={() => store1.dispatch({ type: 'INCREMENT'})}
          onDecrement={() => store1.dispatch({ type: 'DECREMENT'})}
        />
        <Provider store={store2}>
          <App />
        </Provider>
        {/*<h1>Comments</h1>*/}
        {/*<Comment date={ comment.date }*/}
        {/*text={ comment.text }*/}
        {/*author={ comment.author }>*/}
        {/*</Comment>*/}
        {/*<Toggle/>*/}
        {/*<Mailbox unreadMessages={ messages }/>*/}
        {/*<WarningPage/>*/}
        {/*<Blog post={ post }/>*/}
        {/*<NameForm/>*/}
        {/*<FlavorForm/>*/}
        {/*<Reservation/>*/}
        {/*<Calculator/>*/}
        {/*<LikeButton wordings={{likedText: '已赞', unlikedText: '赞'}}/>*/}
        {/*<br/>*/}
        {/*<Computer/>*/}
        {/*<ListMap/>*/}
        {/*<Post content={123}/>*/}
        {/*<Card>*/}
        {/*<h2>React.js 小书</h2>*/}
        {/*<p>开源、免费、专业、简单</p>*/}
        {/*订阅： <input/>*/}
        {/*</Card>*/}
        {/*<Clock/>*/}
        {/*<ActionLink/>*/}
        {/*<LoginControl/>*/}
        {/*<Page/>*/}
        {/*<WelcomeDialog/>*/}
        {/*<FilterableProductTable products={PRODUCTS} message={0}/>*/}
        {/*<Greeting/>*/}
        {/*<MessageList message={messages}/>*/}
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

const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

export default CommentBox;