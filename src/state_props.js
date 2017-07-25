// 在父组件中设置 state， 并通过在子组件上使用 props 将其传递到子组件上。
// 在 render 函数中, 我们设置 name 和 site 来获取父组件传递过来的数据

var Website = React.createClass({
    getInitialState: function () {
        return {
            name: 'baidu',
            site: 'http://www.baidu.com'
        };
    },

    render: function () {
        return (
            <div>
                <Name name = {this.state.name}></Name>
                <Link site = {this.state.site}></Link>
            </div>
        );
    }
});


var Name = React.createClass({
    render: function () {
        return (
            <h1>{this.props.name}</h1>
        );
    }
});

var Link = React.createClass({
    render: function () {
        return (
            <a href={this.props.site}>{this.props.site}</a>
        );
    }
});

ReactDOM.render(
    <Website></Website>,
    document.getElementById("example")
);