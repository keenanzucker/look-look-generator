'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import InputString from '../InputString.jsx';
import * as cardActions from '../../actions/card';

class Name extends Component {

    constructor(props) {
        super(props);
        this.setNameAPI = this.setNameAPI.bind(this);
    }

    setNameAPI(name) {
        this.props.cardActions.setName(name);
    }

    render() {
        return (
            <div className="name-slide">
                <h1>Name of Animal: </h1>
                <InputString onSubmit={this.setNameAPI}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Name);