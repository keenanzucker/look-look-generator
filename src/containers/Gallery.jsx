'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardView from 'Components/CardView.jsx';

import { Spin } from 'antd';

export default class Gallery extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cards: null
        }

        fetch('/api/v1/card/get-cards', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(data => data.json())
        .then(data => {
            this.setState({
                cards: data
            });
        })
        .catch(err => {
            console.error(err);
        })
    }

    checkIfComplete = (card) => {
        // only want to show the completed cards
        // TODO --> push the uncompleted cards into another object
        let badCount = 0;
        for (let key in card) {
            if (card[key] === null || card[key] === '-1' || card[key] === '') badCount++;
            console.log(key + " : " + card[key]);
        }

        if (badCount > 2) return false;
        else return true;
    }
    
    render() {
        let cards = [];

        if (!this.state.cards) return <Spin size="large" style={{marginTop: "30px", width: "100%"}} />
        else {
            this.state.cards.forEach((card, i) => {
                if (this.checkIfComplete(card)) cards.push(<CardView key={i} props={card}/>);
            });

            cards = cards.reverse();

            return (
                <div className="gallery-box" style={{textAlign: 'center'}}>
                    <h1>Look Look Cards on Display!</h1>
                    <div className="gallery-card-container">
                        {cards}
                    </div>
                </div>
            );
        }
    }
}

