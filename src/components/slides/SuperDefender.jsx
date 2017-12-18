'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import InputString from '../InputString.jsx';
import * as cardActions from '../../actions/card';
import { Button } from 'antd';

class SuperDefender extends Component {

    constructor(props) {
        super(props);
    }

    setSuperDefenderAPI = (superDefender) => {
        this.props.cardActions.setSuperDefender(superDefender);
    }
    
    // TODO --> Make the Supe Defender Attribute Work!
    render() {
        return (
            <div className="super-defender-slide">
                <h1>Done! Click on the Gallery tab to see your completed card</h1>
                <h3>Note: All fields have to be completed to be shown in the gallery</h3>
                {/* <InputString onSubmit={this.setSuperDefenderAPI}/> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(SuperDefender);