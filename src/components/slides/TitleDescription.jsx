'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import InputString from '../InputString.jsx';
import * as cardActions from '../../actions/card';

import { Input } from 'antd';

class TitleDescription extends Component {

    constructor(props) {
        super(props);
    }

    setTitleAPI = (title) => {
        fetch('/api/v1/card/set-title', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: this.props.card.cardId,
                title: title
            })
        })
        .then(data => data.json())
        .then(card => {
            this.props.cardActions.setTitle(title.toUpperCase());            
        })
        .catch(err => {
            console.error(err);
        })
    }

    setDescriptionAPI = (description) => {
        fetch('/api/v1/card/set-description', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: this.props.card.cardId,
                description: description
            })
        })
        .then(data => data.json())
        .then(card => {
            this.props.cardActions.setDescription(description);
        })
        .catch(err => {
            console.error(err);
        })
    }

    render() {
        return (
            <div className="Title-slide">
                <h1>What is short Fact about your animal?</h1>
                <InputString length={30} onSubmit={this.setTitleAPI} style={{paddingBottom:20}}/>
                <h1>Please provide a Description of your animal.</h1>
                <InputString length={100} textArea={true} onSubmit={this.setDescriptionAPI}/>
                <br />
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

export default connect(mapStateToProps, mapDispatchToProps)(TitleDescription);