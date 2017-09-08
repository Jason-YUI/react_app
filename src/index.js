import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import Block1 from "./block1";
import CommentBox from './tutorial1';

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Block1/>, document.getElementById('main'));
ReactDOM.render(<CommentBox/>, document.getElementById('CommentBox'));
registerServiceWorker();
