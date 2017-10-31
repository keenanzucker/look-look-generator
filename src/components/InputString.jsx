'use strict';

import React, { Component } from 'react';

export default class InputString extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.refs.input.value);
        this.props.onSubmit(this.refs.input.value);
    }

    render() {
        return (
            <div className="input-string">
                <input type="text" ref="input"/>
                <button onClick={this.handleSubmit}>Set</button>
            </div>
        );
    }
}