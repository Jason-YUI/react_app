import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import CommentBox from './main';

ReactDOM.render(<CommentBox/>, document.getElementById('CommentBox'));
registerServiceWorker();
