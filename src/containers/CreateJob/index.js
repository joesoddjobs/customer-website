/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react'
import { Form, Input, InputNumber, Button, DatePicker, Radio } from 'antd'
import { Wrapper, BodyWrapper, Header } from './styles'
import CREATE_JOB from './graphql'
import { Mutation } from 'react-apollo'

const { TextArea } = Input

class SignUp extends Component {
  constructor(props) {
    super(props)
    this._validAuthStates = ['signUp']
    this.state = {
      confirmDirty: false,
      autoCompleteResult: []
    }
  }

  handleSubmit = (e, history, createNewJob) => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll(async (err, values) => {
      if (!err) {
        // eslint-disable-next-line no-console
        const { street, state, postalCode, city } = values
        const address = { street, state, postalCode, city }
        const cleanedValues = { ...values, address }
        delete cleanedValues.street
        delete cleanedValues.state
        delete cleanedValues.postalCode
        delete cleanedValues.city
        const variables = { input: cleanedValues }
        createNewJob({ variables })
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
        sm: { span: 6, offset: 2 }
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
          offset: 8
        }
      }
    }

    return (
      <BodyWrapper>
        <Wrapper>
          <Header>Book a Job</Header>
          <Mutation
            mutation={CREATE_JOB}
            onCompleted={data => {
              history.push({ pathname: '/job-dashboard' })
            }}
          >
            {createNewJob => (
              <Form
                {...formItemLayout}
                onSubmit={e => this.handleSubmit(e, history, createNewJob)}
              >
                <Form.Item label="Job Type">
                  {getFieldDecorator('jobType', {
                    rules: [
                      {
                        required: true,
                        message: 'Please input the job type!',
                        whitespace: true
                      }
                    ]
                  })(
                    <Radio.Group>
                      <Radio.Button value="LANDSCAPING">
                        Landscaping
                      </Radio.Button>
                      <Radio.Button value="LAWNMOWING">
                        Lawn Mowing
                      </Radio.Button>
                      <Radio.Button value="MOVING">Moving</Radio.Button>
                      <Radio.Button value="FURNITURE_ASSEMBLY">
                        Furniture Assembly
                      </Radio.Button>
                      <Radio.Button value="PAINTING">Painting</Radio.Button>
                      <Radio.Button value="CLEANING">Cleaning</Radio.Button>
                      <Radio.Button value="POWER_WASHING">
                        Power Washing
                      </Radio.Button>
                      <Radio.Button value="OTHER">Other</Radio.Button>
                    </Radio.Group>
                  )}
                </Form.Item>
                <Form.Item label="Job Description">
                  {getFieldDecorator('jobDescription')(
                    <TextArea placeholder="Description" autosize />
                  )}
                </Form.Item>
                <Form.Item label="Number of Workers">
                  {getFieldDecorator('numberOfContractors', {
                    initialValue: 1
                  })(<InputNumber min={1} max={10} />)}
                  <span className="ant-form-text"> worker(s)</span>
                </Form.Item>
                <Form.Item label="Time Estimate">
                  {getFieldDecorator('estimatedTime', {
                    initialValue: 1
                  })(<InputNumber min={1} max={10} />)}
                  <span className="ant-form-text"> hour(s)</span>
                </Form.Item>
                <Form.Item label="Job Date and Time">
                  {getFieldDecorator('firstChoiceDateTime', {
                    rules: [
                      {
                        type: 'object',
                        required: true,
                        message: 'Please select a date and time!'
                      }
                    ]
                  })(<DatePicker showTime />)}
                </Form.Item>
                <Form.Item label="Secondary Date and Time">
                  {getFieldDecorator('secondChoiceDateTime', {
                    rules: [
                      {
                        type: 'object',
                        required: true,
                        message: 'Please select a secondary date and time!'
                      }
                    ]
                  })(<DatePicker showTime />)}
                </Form.Item>
                <Form.Item label="Job Location (City)">
                  {getFieldDecorator('city', {
                    rules: [
                      {
                        required: true,
                        message: 'Please input the city the job is in!',
                        whitespace: true
                      }
                    ]
                  })(<Input />)}
                </Form.Item>
                <Form.Item label="Job Location (State)">
                  {getFieldDecorator('state', {
                    rules: [
                      {
                        required: true,
                        message: 'Please input state of the job location!',
                        whitespace: true
                      }
                    ]
                  })(<Input />)}
                </Form.Item>
                <Form.Item label="Job Location (Street Adress)">
                  {getFieldDecorator('street', {
                    rules: [
                      {
                        required: true,
                        message: 'Please input the job street address!',
                        whitespace: true
                      }
                    ]
                  })(<Input />)}
                </Form.Item>
                <Form.Item label="Job Location (Zip Code)">
                  {getFieldDecorator('postalCode', {
                    rules: [
                      {
                        required: true,
                        message: 'Please input the job postal code!',
                        whitespace: true
                      }
                    ]
                  })(<Input />)}
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                  <Button type="primary" htmlType="submit">
                    Book Now
                  </Button>
                </Form.Item>
              </Form>
            )}
          </Mutation>
        </Wrapper>
      </BodyWrapper>
    )
  }
}

const WrappedSignUp = Form.create({ name: 'register' })(SignUp)

export default WrappedSignUp
