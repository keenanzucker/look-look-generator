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
        fetch('/api/v1/card/set-name', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: this.props.card.cardId,
                name: name
            })
        })
        .then(data => data.json())
        .then(card => {
            this.props.cardActions.setName(name);
        })
        .catch(err => {
            console.error(err);
        })
    }

    render() {
        return (
            <div className="name-slide">
                <h1>What is the Name of your animal?</h1>
                <InputString length={20} onSubmit={this.setNameAPI}/>
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