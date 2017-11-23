import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default class Message extends React.Component {
  render() {
    return (
      <div>
        {this.props.text} <Button>Delete</Button>
      </div>
    )
  }
}