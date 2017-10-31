'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import InputString from '../InputString.jsx';
import * as cardActions from '../../actions/card';

class SuperDefender extends Component {

    constructor(props) {
        super(props);
        this.setSuperDefenderAPI = this.setSuperDefenderAPI.bind(this);
    }

    setSuperDefenderAPI(superDefender) {
        this.props.cardActions.setSuperDefender(superDefender);
    }

    render() {
        return (
            <div className="super-defender-slide">
                <h1>SuperDefender?: </h1>
                <InputString onSubmit={this.setSuperDefenderAPI}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(SuperDefender);