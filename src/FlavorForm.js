import React from 'react';

class FlavorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'grapefruit' }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
                <label>
                    Pick your favorite La Croix flavor:
                    <br/>
                    <select value={ this.state.value } onChange={ this.handleChange }>
                        <option value="grapefruit">grapefruit</option>
                        <option value="lime">lime</option>
                        <option value="coconut">coconut</option>
                        <option value="mango">mango</option>
                    </select>
                </label>
                <input type="submit" value="submit"/>
            </form>
        );
    }
}

export default FlavorForm;