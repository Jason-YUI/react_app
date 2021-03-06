var NodeList = React.createClass({
  render: function () {
    return (
      <ol>
        {
          React.Children.map(this.props.children, function (child) {
            return <li>{child}</li>
          })
        }
      </ol>
    );
  }
});

ReactDOM.render(
  <NodeList>
    <span>jason</span>
    <span>Bob</span>
  </NodeList>,
  document.getElementById('message')
);