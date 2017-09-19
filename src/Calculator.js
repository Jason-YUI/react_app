import React from 'react';

// function BoilingVerdict(props) {
//     if (props.celsius > 100) {
//         return <p>the water would boil.</p>
//     }
//     return <p>the water would not boil.</p>
// }

// class Calculator extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { temperature: '' };
//
//         this.handleChange = this.handleChange.bind(this);
//     }
//
//     handleChange(e) {
//         this.setState({temperature: e.target.value})
//     }
//
//     render() {
//         const temperature = this.state.temperature;
//
//         return (
//             <fieldset>
//                 <legend>
//                     输入一个摄氏温度
//                 </legend>
//                 <input
//                     value={ temperature }
//                     onChange={ this.handleChange }
//                 />
//                 <BoilingVerdict celsius={ parseFloat(temperature) }/>
//             </fieldset>
//         );
//     }
// }

const scaleNames = {
    'c': 'Celsius',
    'f': 'Fahrenheit'
};

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { temperature: '' };
    }

    handleChange = (e) => {
        this.setState({
            temperature: e.target.value
        });
    }

    render() {
        const temperature = this.state.temperature;
        const scale = this.props.scale;

        return (
            <fieldset>
                <legend>Enter temperature in { scaleNames[scale] }</legend>
                <input value={ temperature } onChange={ this.handleChange }/>
            </fieldset>
        );
    }
}

class Calculator extends React.Component {
    render() {
        return (
            <div>
                <TemperatureInput scale="c"/>
                <TemperatureInput scale="f"/>
            </div>
        );
    }
}

export default Calculator;