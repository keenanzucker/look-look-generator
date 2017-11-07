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
        this.handleChange = this.handleChange.bind(this);
        this.habitats = constants.CONSTANTS.HABITATS;
    }

    handleChange(value) {
        console.log("value: " + value);
        this.props.cardActions.setHabitat(parseInt(value));
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

        console.log(dropdownItems);

        return (
            <div className="habitat-slide">
                <h1>Habitat of Animal: </h1>
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