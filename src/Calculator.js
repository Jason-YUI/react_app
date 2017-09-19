import React from 'react';

function BoilingVerdict(props) {
    if (props.delsius > 100) {
        return <p>开水烧开</p>
    }
    return <p>水不会烧开</p>
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {

    }
}

export default Calculator;