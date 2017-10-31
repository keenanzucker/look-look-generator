'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import InputString from '../InputString.jsx';
import * as cardActions from '../../actions/card';

class Nocturnal extends Component {

    constructor(props) {
        super(props);
        this.setNocturnalAPI = this.setNocturnalAPI.bind(this);
    }

    setNocturnalAPI(nocturnal) {
        this.props.cardActions.setNocturnal(nocturnal);
    }

    render() {
        return (
            <div className="nocturnal-slide">
                <h1>Nocturnal?: </h1>
                <InputString onSubmit={this.setNocturnalAPI}/>
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