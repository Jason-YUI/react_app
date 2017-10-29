import React from 'react';

class Card extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.children)
  }
  render() {
    return (
      <div className='card'>
        <div className='card-content'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Card;