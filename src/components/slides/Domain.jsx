'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import InputString from '../InputString.jsx';
import * as cardActions from '../../actions/card';
import constants from '../../../public/assets/constants.js';
import { Select } from 'antd';
const Option = Select.Option;

class Domain extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.currentHabitat = this.props.card.habitat;
        this.domains = constants.CONSTANTS.HABITATS[this.currentHabitat].domain;

        console.log(this);
        console.log(this.domains);
    }

    handleChange(domain) {
        this.props.cardActions.setDomain(parseInt(domain));
    }

    render() {
        let dropdownItems = [];
        this.domains.forEach((domain, key) => {
            dropdownItems.push(
                <Option key={key} value={key.toString()}>
                    <div className="dropdown-habitat-container">
                        <img className="dropdown-habitat" src={domain.link}/>
                        <h3>{domain.name}</h3>
                    </div>
                </Option>
            )
        });

        return (
            <div className="domain-slide">
                <h1>Domain of Animal: </h1>
                <Select defaultValue="Domain" onChange={this.handleChange} style={{ width: 150 }}> 
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

export default connect(mapStateToProps, mapDispatchToProps)(Domain);