'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import QuestionSlide from '../components/QuestionSlide.jsx';
import * as uiActions from '../actions/ui';

class FormBox extends Component {

    constructor(props) {
        super(props);
        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
    }

    handleNext() {
        this.props.uiActions.nextSlide();
    }

    handlePrev() {
        this.props.uiActions.prevSlide();
    }

    render() {
        return (
            <div className="form-box" style={{padding: 50}}>
                <h1>Form Box</h1>
                <h2>Current Slide: {this.props.ui.currentSlide}</h2>
                {this.props.ui.currentSlide < 10 ? (<button onClick={this.handleNext} >Next </button>) : <div></div> }
                {this.props.ui.currentSlide > 0 ? (<button onClick={this.handlePrev}>Previous </button>) : <div></div> }
                <QuestionSlide />
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