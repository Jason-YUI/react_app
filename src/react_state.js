var LinkButton = React.createClass({
    getInitialState: function () {
        return {liked: false}
    },
    handleClick: function (e) {
        this.setState({liked: !this.state.liked});
    },
    render: function () {
        var text = this.state.liked ? '喜欢' : '不喜欢';
        return (
            <p onClick={this.handleClick}>
                You <b>{text}</b> Me!!
            </p>
        )

    }
});

ReactDOM.render(
    <LinkButton />,
    document.getElementById('example')
)