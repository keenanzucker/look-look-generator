'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import InputString from '../InputString.jsx';
import * as cardActions from '../../actions/card';

class Title extends Component {

    constructor(props) {
        super(props);
        this.setTitleAPI = this.setTitleAPI.bind(this);
    }

    setTitleAPI(title) {
        this.props.cardActions.setTitle(title);
    }

    render() {
        return (
            <div className="Title-slide">
                <h1>Title of Animal: </h1>
                <InputString onSubmit={this.setTitleAPI}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Title);