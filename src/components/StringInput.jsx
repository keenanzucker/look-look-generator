'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as uiActions from '../actions/ui';
import * as cardActions from '../actions/card';


class StringInput extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="string-input">
                <h1>Enter the: </h1>
                <input type="text"/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        state: state.card
    };
}

function mapDispatchToProps(dispatch) {
    return {
        uiActions: bindActionCreators(uiActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CardView);