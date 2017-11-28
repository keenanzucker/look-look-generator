'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import InputString from '../InputString.jsx';
import * as cardActions from '../../actions/card';

class CardSet extends Component {

    constructor(props) {
        super(props);
        this.setCardSetAPI = this.setCardSetAPI.bind(this);
    }

    setCardSetAPI(cardSet) {
        this.props.cardActions.setCardSet(cardSet);
    }

    render() {
        return (
            <div className="set-slide">
                <h1>CardSet: </h1>
                <InputString onSubmit={this.setCardSetAPI}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(CardSet);