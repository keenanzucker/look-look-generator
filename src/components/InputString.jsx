'use strict';

import React, { Component } from 'react';
import { Form, Button, Input } from 'antd';
const FormItem = Form.Item;
const { TextArea } = Input;

class InputStringForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
              this.props.onSubmit(values.value);
            }
          });
    }

    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;            
        const valueError = isFieldTouched('value') && getFieldError('value');
        return (
            <Form className="input-string" onSubmit={this.handleSubmit} layout="inline" style={this.props.style}>
                <FormItem validateStatus={valueError ? 'error' : ''} help={valueError || ''}> 
                    {getFieldDecorator('value', {
                        rules: [{ required: true, message: 'Please enter a value' }],
                    })(this.props.textArea ? <TextArea rows={3} placeholder="text"/> : <Input placeholder="value" />)}
                </FormItem>
                <FormItem> 
                    <Button type="primary" htmlType="submit">Set </Button>
                </FormItem>
            </Form>
        )
    }
}
const InputString = Form.create()(InputStringForm);
export default InputString;