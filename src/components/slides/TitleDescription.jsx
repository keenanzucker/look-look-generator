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
        this.setTitleAPI = this.setTitleAPI.bind(this);
        this.setDescriptionAPI = this.setDescriptionAPI.bind(this);
    }

    setTitleAPI(title) {
        this.props.cardActions.setTitle(title.toUpperCase());
    }

    setDescriptionAPI(description) {
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
                <h1>Title of Animal: </h1>
                <InputString onSubmit={this.setTitleAPI} style={{paddingBottom:20}}/>
                <InputString textArea={true} onSubmit={this.setDescriptionAPI}/>
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