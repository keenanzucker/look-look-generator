'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'whatwg-fetch'


import LandingPage from '../components/LandingPage.jsx';

export default class Welcome extends Component {

    onAuthorSubmit(author) {
        console.log('author is now: :', author );

        // $.ajax({
        //     url: '/api/v1/card/set-author',
        //     type: 'POST',
        //     data: author
        // })


        // Testing whether we can modify the db -> this works
        fetch('/api/v1/card/set-author', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: "59ca8785eb0b156f9a2f153c",
                author: author
            })
        })
    }

    render() {
        return (
            <div className="welcome-box">
                <h1>Welcome to my app</h1>
                <LandingPage onAuthorSubmit = {this.onAuthorSubmit}/> 
            </div>
        );
    }
}

