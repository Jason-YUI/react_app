import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';

export default class MessageList extends React.Component {
  getChildContext() {
    return {color: 'purple'};
  }

  render() {
    const children = this.props.message.map((m) => {
      <Message text={m.text} />
    });
    return <div>{children}</div>
  }
}

MessageList.childContextTypes = {
  color: PropTypes.string
};