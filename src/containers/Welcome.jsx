'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Generate from './Generate.jsx';
import LandingPage from '../components/LandingPage.jsx';

export default class Welcome extends Component {

    render() {
        return (
            <div className="welcome-box" style={{textAlign: 'center'}}>
                <LandingPage /> 
                <Generate />
            </div>
        );
    }
}

