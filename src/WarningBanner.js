import React from 'react';

export default class WarningBanner extends React.Component {
  constructor(props) {
    super(props);
    if (!props.warn) {
      return null;
    }
  }
  render() {
    return (
      <div className="warning">
        Warning!!
      </div>
    );
  }
}