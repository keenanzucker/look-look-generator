'use strict';

import '../css/app.less';

import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux'
import Store from '../store';

import Welcome from 'Containers/Welcome.jsx';

class App extends Component {
    render() {
        return (
            <Provider store={Store()}>
                <Router history={browserHistory}>
                    <Route path='*' component={Welcome} />
                </Router>
            </Provider>
        );
    }
}

render(<App />, document.getElementById('container'));
