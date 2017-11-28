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
        fetch('/api/v1/card/set-card-set', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: this.props.card.cardId,
                cardSet: cardSet
            })
        })
        .then(data => data.json())
        .then(card => {
            this.props.cardActions.setCardSet(cardSet);
        })
        .catch(err => {
            console.error(err);
        })
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