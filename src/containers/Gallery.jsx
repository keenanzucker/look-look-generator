'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Gallery extends Component {

    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div className="gallery-box" style={{textAlign: 'center'}}>
                <h1>This is da gallery</h1>
            </div>
        );
    }
}

