/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react'
import { Form, Input, Divider, Button } from 'antd'
import {
  Wrapper,
  BodyWrapper,
  Header,
  DividerContainer,
  SignUpText,
  ButtonContainer
} from './styles'

class SignIn extends Component {
  constructor(props) {
    super(props)
    this._validAuthStates = ['signIn', 'signedOut', 'signedUp']
    this.state = {
      confirmDirty: false,
      autoCompleteResult: []
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        // eslint-disable-next-line no-console
        console.log('Received values of form: ', values)
      }
    })
  }

  handleConfirmBlur = e => {
    const { value } = e.target
    this.setState(prev => ({ confirmDirty: prev.confirmDirty || !!value }))
  }

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!')
    } else {
      callback()
    }
  }

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true })
    }
    callback()
  }

  render() {
    const { getFieldDecorator } = this.props.form

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 }
      }
    }
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 24,
          offset: 0
        }
      }
    }
    return (
      <BodyWrapper>
        <Wrapper>
          <Header>Sign In</Header>
          <Form {...formItemLayout} onSubmit={this.handleSubmit}>
            <Form.Item label="E-mail">
              {getFieldDecorator('email', {
                rules: [
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!'
                  },
                  {
                    required: true,
                    message: 'Please input your E-mail!'
                  }
                ]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Password" hasFeedback>
              {getFieldDecorator('password', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your password!'
                  },
                  {
                    validator: this.validateToNextPassword
                  }
                ]
              })(<Input.Password />)}
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <ButtonContainer>
                <Button type="primary" htmlType="submit">
                  Sign In
                </Button>
              </ButtonContainer>
            </Form.Item>
            <DividerContainer>
              <Divider />
            </DividerContainer>
            <SignUpText>New to Joe&apos;s Odd Jobs?</SignUpText>
            <Form.Item {...tailFormItemLayout}>
              <ButtonContainer>
                <Button type="primary" htmlType="submit">
                  Create Your Accont
                </Button>
              </ButtonContainer>
            </Form.Item>
          </Form>
        </Wrapper>
      </BodyWrapper>
    )
  }
}

const WrappedSignIn = Form.create({ name: 'register' })(SignIn)

export default WrappedSignIn
