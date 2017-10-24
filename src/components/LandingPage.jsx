'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cardActions from '../actions/card.js';

class LandingPage extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // generate new card id, then pass that into setting the author
    getNewCardId(author) {
        fetch('/api/v1/card/new', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(data => data.json())
        .then(data => {
            this.setAuthorAPI(author, data.cardId);
        })
        .catch(err => {
            console.error(err);
        })
    }

    // call the setAuthor action after setting author through API
    setAuthorAPI(author, cardId) {
        console.log('author is now: :', author );

        fetch('/api/v1/card/set-author', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: cardId,
                author: author
            })
        })
        .then(data => data.json())
        .then(card => {
            console.log(card);
            this.props.cardActions.setAuthor(card.author);
        })
        .catch(err => {
            console.error(err);
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.getNewCardId(this.refs.author.value);
    };

    render() {
        if (this.props.author) return (<div></div>);
        else {
            return (
                <div className="landing-page" >
                    <h1>Welcome to Look Look</h1>
                    <h2>Please enter your name:</h2>
                    <input type="text" id="enter-author" ref="author" /> 
                    <button id="submit-author" onClick={this.handleSubmit}> GO </button>
                </div>
            );
        }
    }
}

function mapStateToProps(state) {
    return {
        author: state.card.author
    };
}

function mapDispatchToProps(dispatch) {
    return {
        cardActions: bindActionCreators(cardActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
