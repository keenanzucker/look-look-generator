'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as uiActions from '../actions/ui';

class CardView extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card-view">
                <div className="card-name">{this.props.state.name}</div>
                <div className="card-domain">Domain: {this.props.state.domain}</div>
                <div className="card-map">map: {this.props.state.map}</div>
                <div className="card-author">{this.props.state.author}</div>
                <div className="card-image">Image: {this.props.state.image}</div>
                <div className="card-habitat">Habitat: {this.props.state.habitat}</div>
                <div className="card-lifespan">Lifespan: {this.props.state.lifespan}</div>
                <div className="card-size">Size: {this.props.state.size}</div>
                <div className="card-trophic-level">Tropic Level: {this.props.state.trophicLevel}</div>
                <div className="card-title">
                    title: {this.props.state.title}
                    <div className="card-description">description: {this.props.state.description}</div>
                </div>
                <div className="card-nocturnal">nocturnal: {this.props.state.nocturnal}</div>
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