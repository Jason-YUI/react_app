import React from 'react';
import Screen from './Screen';

class Computer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { status: 'off' };
    }

    handleTagger() {
        let sta, content;

        if (this.state.status == 'on') {
            sta = 'off';
            content = '显示器关了';
        } else {
            sta = 'on';
            content = '显示器开了';
        }

        this.setState({
            status: sta,
            showContent: content
        });
    }

    render() {
        return (
            <div>
                <button onClick={ () => this.handleTagger() }>开关</button>
                <Screen showContent={ this.state.showContent }/>
            </div>
        );
    }
}

export default Computer;