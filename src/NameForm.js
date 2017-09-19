import React, { Component } from 'react';

class NameForm extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value })
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
                <label>
                    Name:
                    <input type="text" value={ this.state.value } onChange={ this.handleChange }/>
                </label>
                <br/>
                <input type="submit" value='submit'/>
            </form>
        );
    }
}

export default NameForm;