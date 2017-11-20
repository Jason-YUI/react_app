import React from 'react';

function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  )
}

function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="dialog-title">Welcome</h1>
      <p className="dialog-message">cdcfvfvfvfvfvf</p>
    </FancyBorder>
  )
}

export default WelcomeDialog;