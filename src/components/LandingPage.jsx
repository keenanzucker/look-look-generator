'use strict';

import React, { Component } from 'react';

export default class LandingPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            author: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(e) {
        this.setState({author: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        alert('you submitted your names as: ' + this.state.author);
        this.props.onAuthorSubmit(this.state.author);
    };

    render() {
        return (
            <form className="landing-page" onSubmit={this.handleSubmit}>
                <h1>Welcome to Look Look</h1>
                <h2>Please enter your name:</h2>
                <input type="text" className="enter-author" value={this.state.author} onChange={this.handleChange}/>
                <input type="submit" className="submit-author" value="GO!"/>
            </form>
        );
    }
}

// mapStateToProps
