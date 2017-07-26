var MyComponent = React.createClass({
    handleClick: function () {
        this.refs.MyTextInput.focus();
    },

    render: function () {
        return (
            <div>
                <input type="text" value="username" ref="MyTextInput"/>
                <input type="button" value="foucus the button" onClick={this.handleClick}/>
            </div>
        )
    }
})

ReactDOM.render(
    <MyComponent/>,
    document.getElementById('example')
)