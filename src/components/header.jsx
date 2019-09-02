import React from 'react';
import logo from './../logo.svg';
import './../styles/header.css';

export default () => {
    return (<div className="app-header">
        <img className="App-logo" src={logo} alt="react-logo "></img>
        <h4>React Todo</h4>
    </div>);
}
