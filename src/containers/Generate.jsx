'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cardActions from '../actions/card.js';
import FormBox from './FormBox.jsx';
import CardView from '../components/CardView.jsx';

class Generate extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (!this.props.card.author) return (<h1></h1>);
        else {
            return (
                <div className="generate-container" >
                    <FormBox />
                    <CardView />
                </div>
            );
        }
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        card: state.card,
        ui: state.ui
    };
}

function mapDispatchToProps(dispatch) {
    return {
        cardActions: bindActionCreators(cardActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Generate);
