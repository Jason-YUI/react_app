// // var myStyle = {
// //     color: "FF0000",
// //     fontSize: '100px'
// // };
// // var arr = [
// //     <h1>hello, jason</h1>,
// //     <h2>梦想任你飞！</h2>
// // ]
// // ReactDOM.render(
// //     <div>{arr}</div>,
// //     document.getElementById("example")
// // );
// // var mydivElement = <div className="foo">jason</div>;
// // ReactDOM.render(mydivElement, document.getElementById('example'));
// //
// // var myComponent = React.createClass({});
// // var myElement = <myComponent someProperty={true}></myComponent>;
// //
// // React.render(myElement, document.getElementById('example'));
//
// var HelloMessage = React.createClass({
//     render: function () {
//         return <h1>hello {this.props.name}!</h1>;
//
// });
//
//
// ReactDOM.render(
//     <HelloMessage name="runBoy"/>,
//     document.getElementById('example')
// );

var WebSite = React.createClass({
    render: function () {
        return (
            <div>
                <Name name="this.props.name"></Name>
                <Link site="this.props.site"/>
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
            <a href="this.props.site">{this.props.site}</a>
        );
    }
});

ReactDOM.render(
    <WebSite name="百度" site="http://www.baidu.com" />,
    document.getElementById("example")
)