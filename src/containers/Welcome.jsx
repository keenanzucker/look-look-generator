'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Generate from './Generate.jsx';
import LandingPage from '../components/LandingPage.jsx';
import { Form } from 'antd';

export default class Welcome extends Component {

    render() {
        const LandingPageForm = Form.create()(LandingPage);
        return (
            <div className="welcome-box" style={{textAlign: 'center'}}>
                <LandingPageForm /> 
                <Generate />
            </div>
        );
    }
}

