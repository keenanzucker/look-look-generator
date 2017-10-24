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
            <div className="card-view" style={{padding: 50}}>
                <h1>Card View</h1>
                <h2>Author: {this.props.state.author}</h2>
                <h2>Name: {this.props.state.name}</h2>
                <h2>Image: {this.props.state.image}</h2>
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