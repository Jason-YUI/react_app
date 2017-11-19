import React from 'react';

class LogoutButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button onClick={this.props.onClick}>Logot</button>
    )
  }
}

export default LogoutButton;