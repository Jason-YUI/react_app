import React from 'react';

function formatDate(date) {
    return date.toLocaleDateString();
}

function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user={ props.author }/>
            <div className="Comment-text">
                { props.text }
            </div>
            <div className="Comment-date">
                { formatDate(props.date) }
            </div>
        </div>
    );
}

function UserInfo(props) {
    return (
        <div className="UserInfo">
            <img src={ props.user.avatarUrl }/>
            <div className="userInfo-name">
                { props.user.name}
            </div>
        </div>
    );
}


export default Comment;