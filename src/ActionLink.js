import React, { Component } from 'react';

class ActionLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true
    }
  }

  handleClick = () => {
    console.log(this);
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  };

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'No' : 'Off'}
      </button>
    )
  }
}

export default ActionLink;