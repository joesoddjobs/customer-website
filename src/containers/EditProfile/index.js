/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react'
import { Form, Input, Button } from 'antd'
import { Mutation, Query } from 'react-apollo'
import { Wrapper, BodyWrapper, Header } from './styles'
import { EDIT_CUSTOMER, CURRENT_CUSTOMER } from './graphql'

class EditProfile extends Component {
  constructor(props) {
    super(props)
    this._validAuthStates = ['signUp']
    this.state = {
      confirmDirty: false,
      autoCompleteResult: []
    }
  }

  handleSubmit = (e, history, editCustomer) => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const variables = { input: values }
        editCustomer({ variables })
        history.push({
          pathname: '/'
        })
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
    const { history } = this.props
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
          span: 12,
          offset: 6
        }
      }
    }

    return (
      <BodyWrapper>
        <Wrapper>
          <Header>Edit Profile</Header>
          <Query query={CURRENT_CUSTOMER}>
            {({ loading, data }) => {
              if (loading) return null
              return (
                <Mutation mutation={EDIT_CUSTOMER}>
                  {editCustomer => (
                    <Form
                      {...formItemLayout}
                      onSubmit={e =>
                        this.handleSubmit(e, history, editCustomer)
                      }
                    >
                      <Form.Item label="First Name">
                        {getFieldDecorator('firstName', {
                          initialValue: data.currentCustomer.customer.firstName,
                          rules: [
                            {
                              required: true,
                              message: 'Please input your first name!',
                              whitespace: true
                            }
                          ]
                        })(<Input />)}
                      </Form.Item>
                      <Form.Item label="Last Name">
                        {getFieldDecorator('lastName', {
                          initialValue: data.currentCustomer.customer.lastName,
                          rules: [
                            {
                              required: true,
                              message: 'Please input your last name!',
                              whitespace: true
                            }
                          ]
                        })(<Input />)}
                      </Form.Item>
                      <Form.Item label="E-mail">
                        {getFieldDecorator('email', {
                          initialValue: data.currentCustomer.customer.email,
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
                      <Form.Item label="Phone Number">
                        {getFieldDecorator('phoneNumber', {
                          initialValue:
                            data.currentCustomer.customer.phoneNumber,
                          rules: [
                            {
                              required: true,
                              message: 'Please input your phone number!'
                            }
                          ]
                        })(<Input style={{ width: '100%' }} />)}
                      </Form.Item>
                      <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">
                          Edit Profile
                        </Button>
                      </Form.Item>
                    </Form>
                  )}
                </Mutation>
              )
            }}
          </Query>
        </Wrapper>
      </BodyWrapper>
    )
  }
}

const WrappedEditProfile = Form.create({ name: 'register' })(EditProfile)

export default WrappedEditProfile
