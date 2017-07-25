var Hello = React.createClass({
    getInitialState: function () {
        return {
            opacity: 1.0
        }
    },

    componentDidMount: function () {
        this.timer = setInterval(function () {
            var opacity = this.state.opacity;
            opacity -= 0.5;
            if (opacity < 0.1) {
                opacity = 1.0
            }
            this.setState({
                opacity: opacity
            });
        }.bind(this), 100)
    },
    
    render: function () {
        return (
            <div style = {{opacity: this.state.opacity, fontSize: '40px', color: 'blue'}}>
                Hello {this.props.name}
            </div>
        );
    }
});

ReactDOM.render(
    <Hello name = 'world'></Hello>,
    document.body
)