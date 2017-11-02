'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import InputString from '../InputString.jsx';
import * as cardActions from '../../actions/card';

class Description extends Component {

    constructor(props) {
        super(props);
        this.setDescriptionAPI = this.setDescriptionAPI.bind(this);
    }

    setDescriptionAPI(description) {
        this.props.cardActions.setDescription(description);
    }

    render() {
        return (
            <div className="description-slide">
                <h1>Description of Animal: </h1>
                <InputString onSubmit={this.setDescriptionAPI}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Description);