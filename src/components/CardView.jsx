'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as uiActions from '../actions/ui';
import Constants from '../../public/assets/constants.js';
import Forest from '../../public/assets/habitats/Forest.svg';
let constants = Constants.CONSTANTS;

class CardView extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.state);

        let habitatImg, habitatName, habitatColor;
        
        if (this.props.state.habitat >= 0) {
            habitatImg = <img className="habitat-card-image" src={constants.HABITATS[this.props.state.habitat].link} width={50} />;
            habitatName = <h3 className="habitat-card-name">{constants.HABITATS[this.props.state.habitat].name}</h3>
            habitatColor = constants.HABITATS[this.props.state.habitat].color;
        }

        return (
            <div className="card-view">
                <div className="card-name">{this.props.state.name}</div>
                <div className="card-domain">Domain: {this.props.state.domain}</div>
                <div className="card-map">map: {this.props.state.map}</div>
                <div className="card-author">{this.props.state.author}</div>
                <div className="card-image">Image: {this.props.state.image}</div>
                    <img className="card-image" src={this.props.state.image} />
                <div className="card-habitat">
                    {habitatImg}
                    {habitatName}
                </div>
                <div className="card-lifespan">Lifespan: {this.props.state.lifespan}</div>
                <div className="card-size">Size: {this.props.state.size}</div>
                <div className="card-trophic-level">Tropic Level: {this.props.state.trophicLevel}</div>
                <div className="card-word-box" style={{backgroundColor:habitatColor}}>
                    <h3 className="card-title">title: {this.props.state.title}</h3>
                    <div className="card-description">description: {this.props.state.description} </div>
                </div>
                <div className="card-super-defender">superDefender: {this.props.state.superDefender}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        state: state.card
    };
}

function mapDispatchToProps(dispatch) {
    return {
        uiActions: bindActionCreators(uiActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CardView);