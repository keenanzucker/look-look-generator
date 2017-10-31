'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import InputString from '../InputString.jsx';
import * as cardActions from '../../actions/card';

class Lifespan extends Component {

    constructor(props) {
        super(props);
        this.setLifespanAPI = this.setLifespanAPI.bind(this);
    }

    setLifespanAPI(lifespan) {
        this.props.cardActions.setLifespan(lifespan);
    }

    render() {
        return (
            <div className="lifespan-slide">
                <h1>Lifespan of Animal: </h1>
                <InputString onSubmit={this.setLifespanAPI}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Lifespan);