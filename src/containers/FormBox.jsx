'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Icon, Progress } from 'antd';
import QuestionSlide from '../components/QuestionSlide.jsx';
import Constants from '../../public/assets/constants.js';
let constants = Constants.CONSTANTS;
import * as uiActions from '../actions/ui';

class FormBox extends Component {

    constructor(props) {
        super(props);
    }

    handleNext = () => {
        this.props.uiActions.nextSlide();
    }

    handlePrev = () => {
        this.props.uiActions.prevSlide();
    }

    render() {
        // Manually make sure habitat is set by disabling button until it is set
        let nextButton;

        // progress bar based on the current question slide
        let progressPercent = (parseInt(this.props.ui.currentSlide) * 10);

        if ((this.props.card.habitat < 0 || this.props.card.habitat === undefined) && this.props.ui.currentSlide === 2) {
            nextButton = <Button className="next-button" size="default" type="normal" disabled onClick={this.handleNext}>Next<Icon type="right" /></Button>
        } else if (this.props.ui.currentSlide >= 10) {
            nextButton = <div></div>;
        } else {
            nextButton = <Button className="next-button" size="default" type="normal" onClick={this.handleNext}>Next<Icon type="right" /></Button>
        }

        return (
            <div className="form-box" style={{padding: 50}}>
                <Progress percent={progressPercent}/>
                <QuestionSlide />
                <br />
                <div className="button-box">
                    {this.props.ui.currentSlide > 0 ? (
                        <Button className="prev-button" size="default" type="normal" onClick={this.handlePrev}><Icon type="left" />Previous</Button>) : <div></div> }
                        {nextButton}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        card: state.card,
        ui: state.ui
    };
}

function mapDispatchToProps(dispatch) {
    return {
        uiActions: bindActionCreators(uiActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(FormBox);