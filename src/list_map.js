import React from 'react';
import User from "./User";

class ListMap extends React.Component {
    render() {
        const users = [
            { username: 'Tomy',  age: 21, gender: 'male' },
            { username: 'Lily',  age: 21, gender: 'male' },
            { username: 'Jerry', age: 21, gender: 'female' }
        ]

        return (
            <div>
                { users.map((user, i) => <User key={ i } user={ user }/>) }
            </div>
        )
    }
}

export default ListMap;