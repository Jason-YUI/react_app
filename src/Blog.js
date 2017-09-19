import React from 'react';

function Blog(props) {
    const slider = (
        <ul>
            {props.post.map((post) =>
                <li key={ post.id }>
                    { post.title }
                </li>
            )}
        </ul>
    );

    const content = props.post.map((post) =>
        <div key={ post.id }>
            <h3>{ post.title }</h3>
            <p>{ post.content }</p>
        </div>
    );

    return (
        <div>
            {slider}
            <hr/>
            {content}
        </div>
    );
}

export default Blog;