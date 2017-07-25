var HelloMessage = React.createClass({
    getInitialState: function () {
        return {
            value: 'hello world'
        }
    },

    handleChange: function (e) {
        this.setState({
            value: e.target.value
        })
    },

    render: function () {
        var value = this.state.value;
        return <div>
                <input type="text" value={value} onChange={this.handleChange}/>
                <h4>{value}</h4>
               </div>;

    }
});

ReactDOM.render(
    <HelloMessage></HelloMessage>,
    document.getElementById('message')
);