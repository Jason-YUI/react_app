var title = 111;

var Mytitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
    },
    render: function () {
        return <h1>{this.props.title}</h1>
    }
})

ReactDOM.render(
    <Mytitle title = {title}></Mytitle>,
    document.getElementById('example')
)