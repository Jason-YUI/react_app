var CommentList = React.createClass({
    render: function () {
        var commentNode = this.props.data.map(function (comment) {
            return (
                <Comment author={comment.author}>
                    {comment.text}
                </Comment>
            )
        });
        return (
            <div className="commentList">
                {commentNode}
            </div>
        )
    }
});