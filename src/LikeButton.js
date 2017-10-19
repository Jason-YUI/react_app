import React from 'react';

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLike: false }
    }

    handleClickOnLikeButton() {
        this.setState({
            isLike: !this.state.isLike
        });
    }

    render() {
        const wordings = this.props.wordings || {
                 likedText: '取消',
                 unlikedText: '点赞'
         };

        return (
            <button onClick={ this.handleClickOnLikeButton.bind(this) }>
                { this.state.isLike ? wordings.likedText : wordings.unlikedText }👍
            </button>
        );
        this.el.addEndEventListener('click', this.changeLikeText.bind(this), false);
    }
}

export default LikeButton;