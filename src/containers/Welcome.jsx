'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LandingPage from '../components/LandingPage.jsx';
import CardView from '../components/CardView.jsx';
import FormBox from '../components/FormBox.jsx';


export default class Welcome extends Component {

    render() {
        return (
            <div className="welcome-box">
                <h1>Welcome to my app</h1>
                <LandingPage /> 
                <CardView />
                <FormBox />
            </div>
        );
    }
}

