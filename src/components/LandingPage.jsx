'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, Button, Input, Icon} from 'antd';
const FormItem = Form.Item;

import * as cardActions from '../actions/card.js';

class LandingPage extends Component {

    constructor(props) {
        super(props);
    }

    // generate new card id, then pass that into setting the author
    getNewCardId(author) {
        fetch('/api/v1/card/new', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(data => data.json())
        .then(data => {
            this.props.cardActions.setCardId(data.cardId);
            this.setAuthorAPI(author, data.cardId);
        })
        .catch(err => {
            console.error(err);
        })
    }

    // call the setAuthor action after setting author through API
    setAuthorAPI(author, cardId) {
        fetch('/api/v1/card/set-author', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: cardId,
                author: author
            })
        })
        .then(data => data.json())
        .then(card => {
            this.props.cardActions.setAuthor(card.author);
        })
        .catch(err => {
            console.error(err);
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
              this.getNewCardId(values.author);
            }
          });
    };

    render() {
        if (this.props.author) return (<span></span>);
        else {
            const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;            
            const authorError = isFieldTouched('author') && getFieldError('author');
            return (
                <Form className="landing-page" onSubmit={this.handleSubmit} layout="inline">
                    {/* <img src={require("../../public/assets/logo.png")} /> */}
                    <h1>Welcome to Look Look</h1>
                    <br />
                    <h2>Please enter your name:</h2>
                    <br />
                    <FormItem validateStatus={authorError ? 'error' : ''} help={authorError || ''}> 
                        {getFieldDecorator('author', {
                            rules: [{ required: true, message: 'Please enter your name' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="author" maxLength="12" />
                        )}
                    </FormItem>
                    <FormItem> 
                        <Button type="primary" htmlType="submit">GO </Button>
                    </FormItem>
                </Form>
            );
        }
    }
}

function mapStateToProps(state) {
    return {
        author: state.card.author
    };
}

function mapDispatchToProps(dispatch) {
    return {
        cardActions: bindActionCreators(cardActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
