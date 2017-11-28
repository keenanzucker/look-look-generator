'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as uiActions from '../actions/ui';
import Constants from '../../public/assets/constants.js';
let constants = Constants.CONSTANTS;

class CardView extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.state);

        let habitatImg, habitatName, habitatColor, lifespanHeart, trophicImg, lifespanName, domainName, domainImg, feet, inches, sizeName, nocturnalImg;
        
        if (this.props.state.habitat >= 0) {
            habitatImg = <img className="habitat-card-image" src={constants.HABITATS[this.props.state.habitat].link} width={60} />;
            habitatName = <h3 className="habitat-card-name">{constants.HABITATS[this.props.state.habitat].name.toUpperCase()}</h3>
            habitatColor = constants.HABITATS[this.props.state.habitat].color;

            if (this.props.state.domain >= 0) {
                domainImg = <img className="domain-card-image" src={constants.HABITATS[this.props.state.habitat].domain[this.props.state.domain].link} width={20} />;
                domainName = <h3 className="domain-card-name">{constants.HABITATS[this.props.state.habitat].domain[this.props.state.domain].name.toUpperCase()}</h3>
            }
        }

        if (this.props.state.size) {
            feet = <h3 className="size-card-feet-number" style={{color:habitatColor}}>{this.props.state.size.feet}<span className="size-small">FT</span></h3>;
            inches = <h3 className="size-card-inches-number" style={{color:habitatColor}}> {this.props.state.size.inches}<span className="size-small">IN</span></h3>;
            sizeName = <h3 className="size-card-name">SIZE</h3>
        }

        if (this.props.state.lifespan >= 0) {
            lifespanHeart = <img className="lifespan-card-heart" src={constants.HABITATS[this.props.state.habitat].heart} width={40} />;
            lifespanName = <h3 className="lifespan-card-name">LIFESPAN</h3>
        }

        if (this.props.state.trophicLevel > 0) {
            trophicImg = <img className="trophic-card" src={constants.TROPHIC[this.props.state.trophicLevel].link} width={272} height={30}/>
        }

        if (this.props.state.nocturnal === false) {
            nocturnalImg = <img className="nocturnal-img-triangle" src={constants.NOCTURNAL[0].link} width={50}/>
        } else if (this.props.state.nocturnal === true) {
            nocturnalImg = <img className="nocturnal-img-triangle" src={constants.NOCTURNAL[1].link} width={50}/>
        }

        return (
            <div className="card-view">
                <div className="card-name">{this.props.state.name}</div>
                <div className="card-domain">
                    {domainImg}
                    {domainName}
                </div>
                <div className="card-map">map: {this.props.state.map}</div>
                <div className="card-author">{this.props.state.author}</div>
                <div className="card-image-container">
                    <img className="card-image" src={this.props.state.image} />
                </div>
                <div className="card-habitat">
                    {habitatImg}
                    {habitatName}
                </div>
                <div className="card-lifespan">
                    {lifespanHeart}
                    <div className="card-lifespan-number">{this.props.state.lifespan}</div>
                    {lifespanName}
                </div>
                <div className="card-size">
                    {feet}
                    {inches}
                    {sizeName}
                </div>
                <div className="card-trophic-level">
                    {trophicImg}
                </div>
                <div className="card-word-box" style={{backgroundColor:habitatColor}}>
                    <h3 className="card-title">{this.props.state.title}</h3>
                    <div className="card-description">{this.props.state.description} </div>
                </div>
                <div className="card-nocturnal">
                    {nocturnalImg}
                </div>
                <div className="card-super-defender">superDefender: {this.props.state.superDefender}</div>
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