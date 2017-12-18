'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import InputString from '../InputString.jsx';
import * as cardActions from '../../actions/card';
import constants from '../../../public/assets/constants.js';
import { Select } from 'antd';
const Option = Select.Option;

class Nocturnal extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.nocturnal = constants.CONSTANTS.NOCTURNAL;
    }

    handleChange(value) {
        let nocturnal;
        if (parseInt(value) === 0) nocturnal = false;
        else if (parseInt(value) === 1) nocturnal = true;
        
        fetch('/api/v1/card/set-nocturnal', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: this.props.card.cardId,
                nocturnal: nocturnal
            })
        })
        .then(data => data.json())
        .then(card => {
            this.props.cardActions.setNocturnal(nocturnal);
        })
        .catch(err => {
            console.error(err);
        })
    }

    render() {
        let dropdownItems = [];
        this.nocturnal.forEach((icon, key) => {
            dropdownItems.push(
                <Option key={key} value={key.toString()}>
                    <div className="dropdown-nocturnal-container">
                        <img className="dropdown-nocturnal" src={icon.icon}/>
                        <h3>{icon.name}</h3>
                    </div>
                </Option>
            )
        });

        return (
            <div className="nocturnal-slide">
                <h1>Is your animal Nocturnal or Dieurnal?</h1>
                <Select defaultValue="nocturnal" onChange={this.handleChange} style={{ width: 150 }}> 
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

export default connect(mapStateToProps, mapDispatchToProps)(Nocturnal);