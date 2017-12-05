'use strict';

import '../css/app.less';
import 'antd/dist/antd.less';

import React, { Component } from 'react';
import { render } from 'react-dom';
// import { Router, Route, browserHistory, Link } from 'react-router';
import { Provider } from 'react-redux'
import Store from '../store';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header } = Layout;

import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'

import Welcome from 'Containers/Welcome.jsx';
import Gallery from 'Containers/Gallery.jsx';

class App extends Component {
    render() {
        return (
            <Provider store={Store()}>
                <Router>
                    <div>
                        <Layout>
                            <Header style={{ position: 'fixed', width: '100%', height: '48px' }}>
                                <div className="logo" />
                                <Menu
                                    theme="dark"
                                    mode="horizontal"
                                    defaultSelectedKeys={['1']}
                                    style={{ lineHeight: '48px' }}
                                >
                                    <Menu.Item key="1"><Link to="/">Generate</Link></Menu.Item>
                                    <Menu.Item key="2"><Link to="/gallery">Gallery</Link></Menu.Item>
                                </Menu>
                            </Header>
                        </Layout>
                        <Route exact path='/' component={Welcome} />
                        <Route path='/gallery' component={Gallery} />
                    </div>
                </Router>
            </Provider>
        );
    }
}

render(<App />, document.getElementById('container'));
