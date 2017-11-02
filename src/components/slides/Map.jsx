'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import InputString from '../InputString.jsx';
import * as cardActions from '../../actions/card';

class Map extends Component {

    constructor(props) {
        super(props);
        this.setMapAPI = this.setMapAPI.bind(this);
    }

    setMapAPI(map) {
        this.props.cardActions.setMap(map);
    }

    render() {
        return (
            <div className="map-slide">
                <h1>Map: </h1>
                <InputString onSubmit={this.setMapAPI}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Map);