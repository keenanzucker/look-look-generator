'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardView from 'Components/CardView.jsx';

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
            console.log(data);
            this.setState({
                cards: data
            });
        })
        .catch(err => {
            console.error(err);
        })
    }
    
    render() {
        let cards = [];
        console.log(this.state);

        if (!this.state.cards) return <div>Loading</div>
        else {
            this.state.cards.forEach((card, i) => {
                console.log(card);
                cards.push(<CardView key={i} props={card}/>)
            });

            return (
                <div className="gallery-box" style={{textAlign: 'center'}}>
                    <h1>This is da gallery</h1>
                    {cards}
                </div>
            );
        }
    }
}

