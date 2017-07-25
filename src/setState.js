var Counter = React.createClass({
    getInitialState: function () {
        return {
            CounterNum: 0
        }
    },

    handleClick: function () {
        this.setState(function (state) {
            return { CounterNum: state.CounterNum + 1}
        });
    },

    render: function () {
        return <h1 onClick={this.handleClick}>点我,次数加{this.state.CounterNum}</h1>
    }
});

ReactDOM.render(
    <Counter></Counter>,
    document.getElementById('message')
)