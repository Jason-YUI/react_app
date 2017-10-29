import React from 'react';

class Post extends React.Component {
  constructor() {
    super();
    this.state = { height: 0 };
  }

  handleHeight = () => {
    console.log(this.state.height);
  }

  componentDidMount() {
    const height = this.p.clientHeight;
    this.setState({height});
  }

  render() {
    return (
      <p ref={(p) => this.p = p} onClick={this.handleHeight}>{this.props.content}</p>
    )
  }
}

export default Post;