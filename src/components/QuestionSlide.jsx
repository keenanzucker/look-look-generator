'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Name from './slides/Name.jsx';
import Domain from './slides/Domain.jsx';
import Image from './slides/Image.jsx';
import Habitat from './slides/Habitat.jsx';
import Lifespan from './slides/Lifespan.jsx';
import Size from './slides/Size.jsx';
import Trophic from './slides/Trophic.jsx';
import TitleDescription from './slides/TitleDescription.jsx';
import Nocturnal from './slides/Nocturnal.jsx';
import Map from './slides/Map.jsx';
import SuperDefender from './slides/SuperDefender.jsx';

import * as uiActions from '../actions/ui';

class QuestionSlide extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let questionSlide;

        switch(this.props.ui.currentSlide) {
            case 0:
                questionSlide = (<Name />);
                break;
            case 1:
                questionSlide = (<Image />);
                break;
            case 2:
                questionSlide = (<Habitat />);
                break;
            case 3:
                questionSlide = (<Domain />);
                break;
            case 4:
                questionSlide = (<Lifespan />);
                break;
            case 5:
                questionSlide = (<Size />);
                break;
            case 6:
                questionSlide = (<Trophic />);
                break;
            case 7:
                questionSlide = (<TitleDescription />);
                break;
            case 8:
                questionSlide = (<Nocturnal />);
                break;
            case 9:
                questionSlide = (<Map />);
                break;
            case 10:
                questionSlide = (<SuperDefender />);
                break;
            default:
                return;
        }
        return (
            <div className="question-slide">
                <h1>Question #{this.props.ui.currentSlide}</h1>
                {questionSlide}
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

export default connect(mapStateToProps, mapDispatchToProps)(QuestionSlide);