'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cardActions from '../actions/card.js';
import Generate from './Generate.jsx';
import LandingPage from '../components/LandingPage.jsx';
import { Form } from 'antd';


class Welcome extends Component {

    render() {
        if (this.props.createNew === true) {
            console.log(this);            
            this.props.cardActions.newCard();
        }

        const LandingPageForm = Form.create()(LandingPage);
        return (
            <div className="welcome-box" style={{textAlign: 'center'}}>
                <LandingPageForm /> 
                <Generate />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        card: state.card,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        cardActions: bindActionCreators(cardActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);