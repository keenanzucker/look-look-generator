'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import InputString from '../InputString.jsx';
import * as cardActions from '../../actions/card';
import constants from '../../../public/assets/constants.js';
import { Select } from 'antd';
const Option = Select.Option;

class Habitat extends Component {

    constructor(props) {
        super(props);
        this.habitats = constants.CONSTANTS.HABITATS;
    }

    handleChange = (habitat) => {
        fetch('/api/v1/card/set-habitat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: this.props.card.cardId,
                habitat: habitat
            })
        })
        .then(data => data.json())
        .then(card => {
            this.props.cardActions.setHabitat(parseInt(habitat));
        })
        .catch(err => {
            console.error(err);
        })
    }

    render() {
        let dropdownItems = [];
        this.habitats.forEach((habitat, key) => {
            dropdownItems.push(
                <Option key={key} value={key.toString()}>
                    <div className="dropdown-habitat-container">
                        <img className="dropdown-habitat" src={habitat.link}/>
                        <h3>{habitat.name}</h3>
                    </div>
                </Option>
            )
        });

        return (
            <div className="habitat-slide">
                <h1>Habitat of Animal: </h1>
                <h2>This property must be set before moving on</h2>
                <Select defaultValue="Habitat" onChange={this.handleChange} style={{ width: 150 }}> 
                    {dropdownItems}
                </Select>
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

export default connect(mapStateToProps, mapDispatchToProps)(Habitat);