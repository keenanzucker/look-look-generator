'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import InputString from '../InputString.jsx';
import * as cardActions from '../../actions/card';
import { InputNumber, Button } from 'antd';

class Size extends Component {

    constructor(props) {
        super(props);
        this.setSizeAPI = this.setSizeAPI.bind(this);
        this.setFeet = this.setFeet.bind(this);
        this.setInches = this.setInches.bind(this);

        this.state = {
            feet: 0,
            inches: 0
        }
    }

    setFeet(feet) {
        this.setState({
            feet: feet
        });
    }

    setInches(inches) {
        this.setState({
            inches: inches
        });
    }

    setSizeAPI() {
        fetch('/api/v1/card/set-size', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: this.props.card.cardId,
                size: this.state
            })
        })
        .then(data => data.json())
        .then(card => {
            this.props.cardActions.setSize(this.state);
        })
        .catch(err => {
            console.error(err);
        })
    }

    render() {
        return (
            <div className="size-slide">
                <h1>What is the Size of your animal?</h1>
                <div>
                    <h3>Feet:</h3>
                    <InputNumber min={0} max={100} defaultValue={0} onChange={this.setFeet} />
                </div>
                <div>
                    <h3>Inches:</h3>
                    <InputNumber min={0} max={11} defaultValue={0} onChange={this.setInches} />      
                </div>
                <br />
                <Button type="primary" onClick={this.setSizeAPI}> SET </Button>          
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

export default connect(mapStateToProps, mapDispatchToProps)(Size);