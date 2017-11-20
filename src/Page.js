import React from 'react';
import WarningBanner from './WarningBanner';

export default class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showWarning: false }
  }

  handleToggleClick = () => {
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }));
  };

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning}/>
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}
