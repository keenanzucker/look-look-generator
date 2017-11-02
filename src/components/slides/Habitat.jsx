'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import InputString from '../InputString.jsx';
import * as cardActions from '../../actions/card';

class Habitat extends Component {

    constructor(props) {
        super(props);
        this.setHabitatAPI = this.setHabitatAPI.bind(this);
    }

    setHabitatAPI(habitat) {
        this.props.cardActions.setHabitat(habitat);
    }

    render() {
        return (
            <div className="habitat-slide">
                <h1>Habitat of Animal: </h1>
                <InputString onSubmit={this.setHabitatAPI}/>
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