'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cardActions from '../actions/card.js';
import FormBox from './FormBox.jsx';
import CardView from '../components/CardView.jsx';
import { Row, Col } from 'antd';

// Generate Component contains the two side-by-side components, the Form and the Card
class Generate extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (!this.props.card.author) return (<span></span>);
        else {
            return (
                <div className="generate-container" >
                    <Row>
                        <Col span={12}>
                            <FormBox />
                        </Col>
                        <Col span={12}>
                            <CardView />
                        </Col>
                    </Row>
                </div>
            );
        }
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        card: state.card,
        ui: state.ui
    };
}

function mapDispatchToProps(dispatch) {
    return {
        cardActions: bindActionCreators(cardActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Generate);
