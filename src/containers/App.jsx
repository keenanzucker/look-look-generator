'use strict';

// import less
import '../css/app.less';
import 'antd/dist/antd.less';

// import react
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import Store from '../store';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'

// import design components
import { Layout, Menu, Breadcrumb, Button, Popconfirm, message } from 'antd';
const { Header } = Layout;

// import react components
import Welcome from 'Containers/Welcome.jsx';
import Gallery from 'Containers/Gallery.jsx';

class App extends Component {

    handleNew = (e) => {
        console.log('create new card on reload');
        location.reload();
        message.success('Creating New Card');
    }

    render() {
        return (
            <Provider store={Store()}>
                <Router>
                    <div>
                        <Layout>
                            <Header style={{ width: '100%', height: '48px' }}>
                                <div className="logo" />
                                <Menu
                                    theme="dark"
                                    mode="horizontal"
                                    defaultSelectedKeys={['1']}
                                    style={{ lineHeight: '48px' }}
                                >
                                    <Menu.Item key="1"><Link to="/">Generate</Link></Menu.Item>
                                    <Menu.Item key="2"><Link to="/gallery">Gallery</Link></Menu.Item>
                                    <Menu.Item key="3" style={{float:"right"}}>
                                    <Popconfirm title="Are you sure you want to start a new card?" onConfirm={this.handleNew} okText="Yes" cancelText="No">
                                        <Button ghost="true" >Create New Card</Button>
                                    </Popconfirm>
                                    </Menu.Item>
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
