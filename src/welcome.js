import React from 'react';
import './App.css';

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

function App() {
    return (
        <div>
            <Welcome name="sara"/>
            <Welcome name="Cahal"/>
            <Welcome name="Edite"/>
        </div>
    );
}

export default App;