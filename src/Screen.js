import React from 'react';

class Screen extends React.Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        showContent: '无内容'
    };

    render() {
        const showContent = this.props.showContent;

        return (
            <div className="screen">{ showContent }</div>
        );
    }
}

export default Screen;