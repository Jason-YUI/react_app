import React, { Component } from 'react';

class NumberList extends Component {

    render() {
        const numbers = this.props.numbers;

        const listItems = numbers.map(num =>
            <li key={ num.toString() }>{ num }</li>
        )

        return (
            <ul>{ listItems }</ul>
        )
    }
}

export default NumberList;