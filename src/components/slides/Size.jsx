'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import InputString from '../InputString.jsx';
import * as cardActions from '../../actions/card';

class Size extends Component {

    constructor(props) {
        super(props);
        this.setSizeAPI = this.setSizeAPI.bind(this);
    }

    setSizeAPI(size) {
        this.props.cardActions.setSize(size);
    }

    render() {
        return (
            <div className="size-slide">
                <h1>Size of Animal: </h1>
                <InputString onSubmit={this.setSizeAPI}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Size);