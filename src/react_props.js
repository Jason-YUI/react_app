var HelloMessage = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'jason'
    }
  },
  render: function () {
    return <h1>{this.props.name}</h1>
  }
});
ReactDOM.render(
  <HelloMessage></HelloMessage>,
  document.getElementById("example")
)