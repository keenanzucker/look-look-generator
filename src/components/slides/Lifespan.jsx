'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import InputString from '../InputString.jsx';
import * as cardActions from '../../actions/card';
import { InputNumber } from 'antd';

class Lifespan extends Component {

    constructor(props) {
        super(props);
        this.setLifespanAPI = this.setLifespanAPI.bind(this);
    }

    setLifespanAPI(lifespan) {
        fetch('/api/v1/card/set-lifespan', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: this.props.card.cardId,
                lifespan: lifespan
            })
        })
        .then(data => data.json())
        .then(card => {
            this.props.cardActions.setLifespan(lifespan);
        })
        .catch(err => {
            console.error(err);
        })
    }

    render() {
        return (
            <div className="lifespan-slide">
                <h1>What is your animals Lifespan?</h1>
                <InputNumber min={1} max={100} defaultValue={1} onChange={this.setLifespanAPI} />
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