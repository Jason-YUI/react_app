// - CommentBox
// - CommentList
// - Comment
// - CommentForm
var CommentBox = React.createClass({
    render: function () {
        return (
            <div className="commentBox">
                Hello, I am commentBox
            </div>
        )
    }
});


ReactDOM.render(
    <CommentBox/>,
    document.getElementById('content')
)