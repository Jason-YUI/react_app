import React, { Component } from 'react';

function WarningBanner(props) {
    if(!props.warn) {
        return null;
    }

    return (
        <div className="warnning">
            Warning!
        </div>
    );
}

class WarningPage extends Component {
    constructor(props) {
        super(props);
        this.state = { showWarning: true };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            showWarning: !prevState.showWarning
        }));
    }

    render() {
        return (
            <div>
                <WarningBanner warn={ this.state.showWarning }/>
                <button onClick={ this.handleClick }>
                    { this.state.showWarning ? 'Hide' : 'Show' }
                </button>
            </div>
        );
    }
}

export default WarningPage;
