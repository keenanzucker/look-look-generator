'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import InputString from '../InputString.jsx';
import * as cardActions from '../../actions/card';

class Image extends Component {

    constructor(props) {
        super(props);
        this.setImageAPI = this.setImageAPI.bind(this);
    }

    setImageAPI(image) {
        fetch('/api/v1/card/set-image', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: this.props.card.cardId,
                image: image
            })
        })
        .then(data => data.json())
        .then(card => {
            this.props.cardActions.setImage(image);
        })
        .catch(err => {
            console.error(err);
        })
    }

    render() {
        return (
            <div className="image-slide">
                <h1>Upload Your Image Here: </h1>
                <InputString onSubmit={this.setImageAPI}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Image);