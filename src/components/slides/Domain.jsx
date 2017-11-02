'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import InputString from '../InputString.jsx';
import * as cardActions from '../../actions/card';

class Domain extends Component {

    constructor(props) {
        super(props);
        this.setDomainAPI = this.setDomainAPI.bind(this);
    }

    setDomainAPI(domain) {
        this.props.cardActions.setDomain(domain);
    }

    render() {
        return (
            <div className="domain-slide">
                <h1>Domain of Animal: </h1>
                <InputString onSubmit={this.setDomainAPI}/>
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