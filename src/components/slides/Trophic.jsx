'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import InputString from '../InputString.jsx';
import * as cardActions from '../../actions/card';

class Trophic extends Component {

    constructor(props) {
        super(props);
        this.setTrophicAPI = this.setTrophicAPI.bind(this);
    }

    setTrophicAPI(trophic) {
        this.props.cardActions.setTrophicLevel(trophic);
    }

    render() {
        return (
            <div className="trophic-slide">
                <h1>Trophic Level?: </h1>
                <InputString onSubmit={this.setTrophicAPI}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Trophic);